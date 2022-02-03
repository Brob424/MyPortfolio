import React from 'react'
import {Link} from 'react-scroll'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <nav>
                <ul>
                    <Link className='nav-item' activeClass="active" to='about-me' spy={true} smooth={true} offset={-60} duration={1000}>About Me</Link>
                    <Link className='nav-item' activeClass="active" to='projects' spy={true} smooth={true} offset={-60} duration={1000}>Projects</Link>
                    <Link className='nav-item' activeClass="active" to='resume' spy={true} smooth={true} offset={-60} duration={1000}>Resume</Link>
                    <Link className='nav-item' activeClass="active" to='contact-me' spy={true} smooth={true} offset={-60} duration={1000}>Contact Me</Link>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
