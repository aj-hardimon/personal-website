import './about.css'
import CSS from '.../.../assets/css.svg'
import HTML from '.../.../assets/html.svg'
import JS from '.../.../assets/js.svg'


import { useState } from 'react'

function About() {
    const [display, setDisplay] = useState('block')
    const [buttonText, setButtonText] = useState('Hide')

    function toggle() {
        if(display == 'none') {
            setDisplay('block')
            setButtonText('Hide')
        } else {
            setDisplay('none')
            setButtonText('Show')
        }
    }

    return (
        <div id="about">
            <h2>
                <button className="toggler"  onClick={toggle}>{buttonText}</button>
                About Me    
            </h2>
            <div style={{display: display}}>
                <p>
                    I am a student from BU
                </p>    
            </div>            
        </div>
    )
}