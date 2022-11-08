import {BsArrowDown} from "react-icons/bs"
import "../styles/Hero.css"
const Hero = () =>{
    return (
        <div className="hero">
            <div className="hero-body">
                <div className="hero-head">DEVELOPER</div>
                <div className="hero-text">I listen to Music and Create</div>
            </div>
            <div className="hero-arrow">
                <BsArrowDown id="down-arrow" fontSize={32}/>
            </div>
        </div>
    )
}

export default Hero