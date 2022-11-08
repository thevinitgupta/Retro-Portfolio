import { HiOutlineMenu } from "react-icons/hi"
import "../styles/Navbar.css"

const Navbar = () =>{

    return(
        <nav className="navbar">
            <div id="logo">thevinigupta</div>
            <ul className="menu">
                <li className="menu-item">Experience</li>
                <li className="menu-item">Projects</li>
                <li className="menu-item">About</li>
                <li className="menu-item">Contact</li>
            </ul>
            <HiOutlineMenu fontSize={28} id="ham-icon"/>
        </nav>
    )
}

export default Navbar