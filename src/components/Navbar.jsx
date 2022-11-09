import { useState } from "react"
import { HiOutlineMenuAlt1, HiOutlineX } from "react-icons/hi"
import "../styles/Navbar.css"

const Navbar = () =>{
    const [displayMenu,setDisplayMenu] = useState(false);

    const toggleMenu = () =>{
        setDisplayMenu((prev) => {
            return !prev;
        })
    }

    return(
        <nav className="navbar">
            <div id="logo">thevinigupta</div>
            <ul className="menu menu-lg">
                <li className="menu-item">Experience</li>
                <li className="menu-item">Projects</li>
                <li className="menu-item">About</li>
                <li className="menu-item">Contact</li>
            </ul>
            <HiOutlineMenuAlt1 fontSize={36} onClick={toggleMenu} id="ham-icon"/>
            {displayMenu && <ul className="menu menu-sm">
                <li className="menu-item">Experience</li>
                <li className="menu-item">Projects</li>
                <li className="menu-item">About</li>
                <li className="menu-item">Contact</li>
                <HiOutlineX fontSize={32} onClick={toggleMenu} id="cross-icon"/>
            </ul>}
        </nav>
    )
}

export default Navbar