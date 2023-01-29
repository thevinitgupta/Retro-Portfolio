import {default as Header} from "./Header"
import "../styles/Projects.css"
import { useState } from "react"
import Camera from "../assets/camera.gif"
import Eth from "../assets/ethereum.gif"
import Arrow from "../assets/arrow.svg"

const Projects = () =>{
    const [active,setActive] = useState(false);
    return (
        <div className="projects" id="pro">
            <div className="projects-head">
            <Header p1="I Built These" font="--bungee" color="--bright-orange" shadow="#00000085" transform="rotate(-4deg)" margin="0"/>
            </div>
            <div className="projects-body">
                <div className="card pigshell" style={{backgroundColor : "#F8485E"}}>
                    <div className="front-head">Pigshell</div>
                    <p>Features include converting images and live video into ASCII based media. Users can also create accounts and upload their pics to access from anywhere</p>
                    <div className="more-btn">More</div>
                    <img src={Camera} alt="camera" className="pig-cam" />
                </div>
                <div className="card zuros" style={{backgroundColor : "#AC63ED"}}>
                <div className="front-head">Zuros</div>
                    <p>A Decentralized Crypto exchange application built on the Ethereum blockchain. Users can send messages and GIFs during exchange</p>
                    <div className="more-btn">More</div>
                    <img src={Eth} alt="camera" className="eth-block" />
                </div>
                
            </div>
            <div className="projects-all">
                See All <img src={Arrow} className="arrow" alt="arrow"/>
            </div>
        </div>
    )
}

export default Projects