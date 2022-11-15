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
                        Convert boring images to ASCII based media
                        <br/>Tech Stack : <br/>ReactJS <br/> Firebase
                    </div>
                </div>
                <div className="back">
                    <h2></h2>
                    <p>Features include converting images and live video into ASCII based media. Users can also create accounts and upload their pics to access from anywhere</p>
                </div>
                </div>
                <div className="card">
                <div className="front" style={{backgroundColor : "#AC63ED"}}>
                    <div className="front-head">Pigshell</div>
                    <div className="front-body">
                        Convert boring images to ASCII based media
                        <br/>Tech Stack : <br/>ReactJS <br/> Firebase
                    </div>
                </div>
                <div className="back">
                    <h2></h2>
                    <p>Features include converting images and live video into ASCII based media. Users can also create accounts and upload their pics to access from anywhere</p>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Projects