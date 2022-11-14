import {default as Header} from "./Header"
import "../styles/Projects.css"
import { useState } from "react"

const Projects = () =>{
    const [active,setActive] = useState(false);
    return (
        <div className="projects" id="pro">
            <div className="projects-head">
            <Header p1="I Built These" font="--bungee" color="--bright-orange" shadow="#00000085" transform="rotate(-4deg)" margin="0"/>
            </div>
            <div className="projects-body">
                <div className="card">
                <div className="front">
                    <div className="front-head">Pigshell</div>
                    <div className="front-body">
                        Converts boring images to ASCII based
                        
                    </div>
                </div>
                <div className="back">
                    <h2></h2>
                    <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Projects