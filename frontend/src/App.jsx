import Navbar from './components/navbar/navbar'
import Profile from './components/profile/profile'
import Projects from './components/projects/projects'
import Experiences from './components/experiences/experiences'
import About from './components/about/about'
import Chat from './components/chat/chat'
import './App.css'

function App() {
    return (
        <>
            <Navbar/>
            <Profile/>
            <div id="outline-chat">
                <Chat/>
            </div>
            <div id="outline-about">
                <About/>
            </div>
            <div id="outline-projects">
                <div id="projects">
                    <h2>Projects</h2>
                    <Projects 
                        name="YQuantum 2025 Travelers-Capgemini Challenge" 
                        description="Used a quantum graph-coloring algorithm on real world fire hazard zone data in L.A. County to minimize risk in fire insurance portfolios." 
                        github="https://github.com/aj-hardimon/yquantum-2025-travelers-capgemini"
                    />
                    <Projects 
                        name="Sundial" 
                        description="Website that will grab the user's current location and will tell them the sunrise and sunset times for both their location and a location 
                                    with similar sunset/sunrise times suggested by Google Gemini in a leaflet map element. Submission for the 2025 hakc4Impact tecchnical assesment." 
                        github="https://github.com/aj-hardimon/technical-assessment-25-26"/>
                </div>
            </div>
                
            <div id="outline-exp">
                <div id="exp">
                        <h2>Experience</h2>
                        <Experiences 
                            title="Food Runner" 
                            info="Topgolf, El Segundo, CA" 
                            dates="September 2023 - January 2024" 
                            bullets={[
                                    "Prepared food, cleaned venue, restocked ingredients and supplies, served food to customers", 
                                    "Got experience working with many coworkers and varied levels of manangement", 
                                    "Learned how to prioritize tasks during busy hours"
                                ]}
                        />
                        <Experiences
                            title="CGS Capstone Project"
                            info="Boston University, Boston, MA"
                            dates="March 2025 - April 2025"
                            bullets = {[
                                "Lead writer and editor for a 50 page research paper on Electoral College reform", 
                                "Learned how to lead a team of 7 people and delegate tasks based on group members' abilities and strengths", 
                                "Learned lessons about how to communicate effectively with people I had just met and the importance of setting expectations early on in a project"
                            ]}
                        />
                </div>
            </div>
        </>
    )
}

export default App