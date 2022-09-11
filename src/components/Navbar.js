import React from "react"
import "../style.css"
import logo from "../images/logo192.png"

function Navbar() {
    return (
        <nav className="nav--bar">
            <div className="nav--title">
                <img src={logo} className="nav--icon" alt="logo"/>
                <div className="nav--name">ReactFacts</div>
            </div>
            <div className="nav--heading">React Course - Project 1 </div>
        </nav>
    )
}

// hi

export default Navbar;