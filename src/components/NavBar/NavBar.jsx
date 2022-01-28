import React from 'react'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <nav>
                <ul>
                    <li className='nav-item'><a href="#">About Me</a></li>
                    <li className='nav-item'><a href="#">Projects</a></li>
                    <li className='nav-item'><a href="#">Resume</a></li>
                    <li className='nav-item'><a href="#">Contact Me</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
