import {default as Header} from "./Header"
import {default as Window} from "./Window"
import Arrow from "../assets/arrow.svg"
import "../styles/Experience.css"
import { useEffect, useRef, useState } from "react"

const Experience = () =>{

    const [current,setCurrent] = useState("tablt");
    const [width, setWidth] = useState(window.innerWidth);
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

    const handleResize = () => {
        setWidth(window.innerWidth);
    }

    useEffect(()=>{
        window.addEventListener("resize",handleResize);
    },[])


    return (
        <div className="experience" id="exp">
            <div className="experience-head">
                <Header p1="Places I have" p2="Worked Before" fontSize="3.2rem" font="--bungee" color="--bright-yellow" shadow="#00000085" transform="rotate(-4deg)" margin="0"/>
            </div>
            <div className="experience-body">
                {width>870 ? <div className="experience-section" id="tablt" ref={tabltRef}>
                 <Window head="Worked as an SDE Intern" body="Boldare Boards helps to make online meetings as good as offline. Minus a pile of sticky notes on the floor, of course. Thanks to Boldare Boards you can: " img="" backgroundColor="--background" color="--primary" height="40vh" width="420px" margin="0 0 0 0" />

                <Window head="" body="" img="https://media.glassdoor.com/l/1791038/tablt-office.jpg" backgroundColor="--background" color="--primary" height="45vh" width="480px" margin="0 0 0 0"/> 
                    <img src={Arrow} onClick={toggleSection}  className="arrow right-arrow" alt="arrow"/>
                </div> : 

                <div className="experience-section" id="tablt" ref={tabltRef}>
                 <Window head="Worked as an SDE Intern" body="Boldare Boards helps to make online meetings as good as offline. Minus a pile of sticky notes on the floor, of course. Thanks to Boldare Boards you can: " img="" backgroundColor="--background" color="--primary" height="30vh" width="85%" maxWidth="460px"  margin="0 0 0 0" />

                <Window head="" body="" img="https://media.glassdoor.com/l/1791038/tablt-office.jpg" backgroundColor="--background" color="--primary" height="35vh" width="85%" maxWidth="460px" margin="0 0 0 0"/> 
                    <img src={Arrow} onClick={toggleSection}  className="arrow right-arrow" alt="arrow"/>
                </div>
                }

                {width>720 ? <div className="experience-section" id="uptone" ref={uptoneRef}>
                 <Window head="Worked as an SDE Intern" body="Boldare Boards helps to make online meetings as good as offline. Minus a pile of sticky notes on the floor, of course. Thanks to Boldare Boards you can: " img="" backgroundColor="--background" color="--primary" height="40vh" width="420px" margin="0 0 0 0" />

                <Window head="" body="" img="https://media.glassdoor.com/l/1791038/tablt-office.jpg" backgroundColor="--background" color="--primary" height="45vh" width="480px" margin="0 0 0 0"/> 
                    <img src={Arrow} onClick={toggleSection}  className="arrow right-arrow" alt="arrow"/>
                </div> : 

                <div className="experience-section" id="uptone" ref={uptoneRef}>
                 <Window head="Worked as an SDE Intern" body="Boldare Boards helps to make online meetings as good as offline. Minus a pile of sticky notes on the floor, of course. Thanks to Boldare Boards you can: " img="" backgroundColor="--background" color="--primary" height="30vh" width="85%" maxWidth="460px" margin="0 0 0 0" />

                <Window head="" body="" img="https://media.glassdoor.com/l/1791038/tablt-office.jpg" backgroundColor="--background" color="--primary" height="35vh" width="85%" maxWidth="460px"  margin="0 0 0 0"/> 
                    <img src={Arrow} onClick={toggleSection}  className="arrow right-arrow" alt="arrow"/>
                </div>
                }
                
            </div>
        </div>
    )
}

export default Experience