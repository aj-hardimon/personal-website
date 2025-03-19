import { useState } from 'react'
import './chat.css'

function Chat() {
    const[messages, setMessages] = useState([])
    const [userInput, setUserInput] = useState('')
    async function getResponse() {
        try{
            if(!userInput) return
            const response = await fetch('https://localhost:4000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({userInput})
            })
            if (!response.ok) {
                throw new Error('Oops, something went wrong!')
            }
            const { message } = await response.json()
            setMessages([...messages, userInput, message])
        } catch (error) {
            console.error(error)
            return 'Oops, something went wrong!'
        }
    }

    return (
        <div id="chat">
            <p>Coming Soon!</p>
        </div>
    )
}

export default Chat