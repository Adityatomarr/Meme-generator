import React from "react";
import trollface from "../assets/images/Troll Face.png"
import "./navbar.css"

function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar__logo">
                <img src={trollface} className="navbar__logo-img"></img>
                <h2 className="navbar__logo-name">Meme Generator</h2>
            </div>
            <a href="https://youtu.be/dQw4w9WgXcQ">Please don't click!</a>
        </nav>
    )
}

export default Navbar