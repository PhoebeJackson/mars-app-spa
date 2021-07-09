import React from 'react'
import '../CSS/Navbar.css'

function Navbar() {
    return (
        <nav className="nav">
            <h1 className="nav-title">Test title</h1>
            <div className="nav-buttons">
                <a href="/">Mars Pictures</a>
                <a href="/asteroids">Asteroids</a>
                {/*<a href="#">Contact</a>*/}
            </div>
        </nav>
    )
}

export default Navbar