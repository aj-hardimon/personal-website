import './profile.css';
import ProfileIcon from '../../assets/pfp.png';
import GitHubIcon from '../../assets/white-github-icon.png';

function Profile (){
    return (
        <div id="profile">
                <div><img id="pfp" width="250" src={ProfileIcon}/></div>
                <div id="profile-text">
                <h2>Anthony Hardimon</h2>
                <p>Boston University Student</p>
                <div className="icons">
                    <a target="_blank" href="https://linkedin.com/in/anthony-hardimon-45909733b"><img id="linkedin-img" width="60" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" /></a>
                    <a target="_blank" href="https://github.com/aj-hardimon"><img id="github-img" width="60" src={GitHubIcon} /></a>
                </div>
            </div>
        </div>
    )
}

export default Profile;
