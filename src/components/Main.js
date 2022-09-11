import React from "react"
import "../style.css"

function Main() {
    return (
        <div className="main--container">
            <div className="main--header">Fun facts about React</div>
            <ul className="main--list">
                <li>Was first released in 2013</li>
                <li>Was orginally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

export default Main;