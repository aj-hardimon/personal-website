import './projects.css';

function Projects ({name, description, github}) {
    return (
            <div className="project">
                <h3>{name}</h3>
                <p>{description}</p>
                <a target="_blank" href={github}> 
                    <button className="github"> 
                        <img width="20" src="https://img.icons8.com/?size=100&id=106562&format=png&color=FFFFFF"/>
                            Github 
                    </button> 
                </a>
            </div>
    )
}

export default Projects;