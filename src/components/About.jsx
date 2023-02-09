import {default as Header} from "./Header"
import David from "../assets/david.png"
import Radio from "../assets/radio.svg"
import Light from "../assets/light.svg"
import Spotify from "../assets/spotify.png"
import "../styles/About.css"

const About = () =>{
    return (
        <div className="about">
            <div className="about-head">
            <Header p1="Radiohead==Me" font="--pixel" color="--bright-blue" shadow="#00000085" transform="rotate(-4deg)" margin="0"/>
            </div>
            <div className="about-body">
            With a mind that is always full of music, I am Full Stack Developer from India. I like bringing out the life in a website with Code, that really connects with the users.
                <div className="spotify-btn">
                <img src={Spotify} alt="logo"/> My Fav Songs
                {/* https://open.spotify.com/playlist/7GiIBwpwCuE4gGkDny6VY6 */}
                </div>
                <img src={David} alt="vinit gupta" className="david"/>
            </div>
        </div>
    )
}

export default About