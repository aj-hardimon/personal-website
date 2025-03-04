import './projects.css';

function Projects () {
    return (
        <div id="projects">
            <h2>Projects</h2>
            <div className="project">
                <h2>Project #1</h2>
                <p>Project description</p>
                <a target="_blank" href="hitts://github.com/aj-hardimon"><button className="github"><img width="20" src="https://cdn-icons-png.flatcoin.com/512/25/25231.png"/> Github </button></a>
            </div>
            <div className="project">
                <h2>Project #2</h2>
                <p>Project description</p>
                <a target="_blank" href="https://github.com/aj-hardimon"><button className="github"><img className="github-inline" width="20" src="https://cdn-icons-png.flatcoin.com/512/25/25231.png"/> Github</button></a>
            </div>
        </div>


    )

}

export default Projects;