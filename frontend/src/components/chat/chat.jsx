import { useState, useEffect } from 'react'
import './chat.css'

// gets userid from local storage for fetching logs
function getOrCreateUserId() {
    let userId = localStorage.getItem('userId')
    if (!userId) {
        userId = crypto.randomUUID()
        localStorage.setItem('userId', userId)
    }
    return userId
}

function Chat() {
    const [messages, setMessages] = useState([])
    const [userInput, setUserInput] = useState('')
    const userId = getOrCreateUserId()

    async function getResponse() {
        try {
            if (!userInput) return
            const response = await fetch('https://aj-hardimon-personal-website-2b2801802b8c.herokuapp.com/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userInput, userId })
            })
            if (!response.ok) {
                throw new Error('Oops, something went wrong!')
            }
            const { message } = await response.json()
            fetch('https://aj-hardimon-personal-website-2b2801802b8c.herokuapp.com/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ input: userInput, response: message, userId })
            })
            setMessages([...messages, userInput, message])
        } catch (error) {
            console.error(error)
            return 'Oops, something went wrong!'
        }
    }

    function deleteChatbox(index) {
        let newMessages = [...messages]
        newMessages.splice(index, 2)
        fetch('https://aj-hardimon-personal-website-2b2801802b8c.herokuapp.com/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                input: messages[index],
                response: messages[index + 1],
                userId
            })    
        })
        setMessages(newMessages)
    }

    useEffect(() => {
        fetch(`https://aj-hardimon-personal-website-2b2801802b8c.herokuapp.com/logs?userId=${userId}`)
            .then(res => res.json())
            .then(data => {
                let newMessages = []
                for (let i = 0; i < data.length; i++) {
                    newMessages.push(data[i].input)
                    newMessages.push(data[i].response)
                }
                setMessages(newMessages)
            })
    }, [userId])

    return (
        <div id="chat">
            <form onSubmit={(e) => e.preventDefault()}>
                <h2>Ask Me A Question</h2>
                <input 
                    type='text' 
                    name='user-input' 
                    id='questionInput' 
                    placeholder='What would you like to ask?' 
                    onChange={e => setUserInput(e.target.value)}
                />
                <button type='submit' onClick={getResponse}>Submit</button>
            </form>
            {
                messages.map((text, index) => (
                    <div key={index} className="chatbox">
                        {index % 2 == 0 && <button className="x" onClick={() => deleteChatbox(index)}>X</button>}
                        <p className={index % 2 == 0 ? "user-message" : "chatbot-response"}>{text}</p>
                    </div>

                ))
            }
        </div>
    )
}

export default Chat