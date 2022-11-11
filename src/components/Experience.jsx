import {default as Header} from "./Header"
import {default as Window} from "./Window"
import Arrow from "../assets/arrow.svg"
import "../styles/Experience.css"
import { useRef, useState } from "react"

const Experience = () =>{

    const [current,setCurrent] = useState("tablt");
    const tabltRef = useRef();
    const uptoneRef = useRef();

    const toggleSection = () => {
        if(current==="tablt"){
            tabltRef.current.style.left = "100%";
            uptoneRef.current.style.left = "0%";

            setCurrent("uptone");
        }
        else {
            tabltRef.current.style.left = "0%";
            uptoneRef.current.style.left = "100%";

            setCurrent("tablt");
        }
    }
    return (
        <div className="experience">
            <div className="experience-head">
                <Header p1="Places I have" p2="Worked Before" fontSize="3.2rem" font="--bungee" color="--bright-yellow" shadow="#00000085" transform="rotate(-4deg)" margin="0"/>
            </div>
            <div className="experience-body">
                <div className="experience-section" id="tablt" ref={tabltRef}>
                    <Window head="Worked as an SDE Intern" body="Boldare Boards helps to make online meetings as good as offline. Minus a pile of sticky notes on the floor, of course. Thanks to Boldare Boards you can: " img="" backgroundColor="--background" color="--primary" height="40vh" minHeight="300px" width="30vw" minWidth="320px" margin="3% 0 0 0" />

                    <Window head="" body="" img="https://media.glassdoor.com/l/1791038/tablt-office.jpg" backgroundColor="--background" color="--primary" height="42vh" minHeight="300px" width="35vw" minWidth="320px" margin="-7% 0 0 0"/>
                    <img src={Arrow} onClick={toggleSection}  className="arrow right-arrow" alt="arrow"/>
                </div>

                <div className="experience-section" id="uptone" ref={uptoneRef}>
                    <Window head="Worked as an SDE Intern" body="Boldare Boards helps to make online meetings as good as offline. Minus a pile of sticky notes on the floor, of course. Thanks to Boldare Boards you can: " img="" backgroundColor="--background" color="--primary" height="40vh" width="420px" margin="3% 0 0 0" />

                    <Window head="" body="" img="https://media.glassdoor.com/l/1791038/tablt-office.jpg" backgroundColor="--background" color="--primary" height="360px" width="480px" margin="-7% 0 0 0"/>
                    <img src={Arrow} onClick={toggleSection} className="arrow left-arrow" alt="arrow"/>
                </div>
                
            </div>
        </div>
    )
}

export default Experience