import {default as Header} from "./Header"
import {default as Window} from "./Window"
import "../styles/Experience.css"

const Experience = () =>{
    return (
        <div className="experience">
            <div className="experience-head">
                <Header p1="Places I have" p2="Worked Before" fontSize="3.2rem" font="--bungee" color="--bright-yellow" shadow="#00000085" transform="rotate(-4deg)" margin="0"/>
            </div>
            <div className="experience-body">
                <div className="experience-section" id="tablt">
                    <Window head="Worked as an SDE Intern" body="Boldare Boards helps to make online meetings as good as offline. Minus a pile of sticky notes on the floor, of course. Thanks to Boldare Boards you can: " img="" backgroundColor="--background" color="--primary" height="300px" width="420px" margin="3% 0 0 0" />

                    <Window head="" body="" img="https://media.glassdoor.com/l/1791038/tablt-office.jpg" backgroundColor="--background" color="--primary" height="360px" width="480px" margin="-7% 0 0 0"/>
                </div>
            </div>
        </div>
    )
}

export default Experience