import React from "react"
import "../style.css"
import logo from "../images/logo192.png"

function Navbar() {
    return (
        <nav>
            <img src={logo} className="nav--icon" alt="logo"/>
            <div className="nav--title">ReactFacts</div>
            <div className="nav--heading">React Course - Project 1 </div>
        </nav>
    )
}

export default Navbar;