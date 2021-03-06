import React from 'react'
import logo from '../logo/logo.png'
import { Link } from 'react-scroll'
import { Routes, Route } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='navbar' id='navbar'>
            <nav>
                    <Link to='home' spy={true} smooth={true} duration={1000}><img className='logo' src={logo} alt="logo" /></Link> 
                <ul className='nav-items'>
                    <Link className='nav-item' activeClass="active" to='about-me' spy={true} smooth={true} offset={-50} duration={1000}>About Me</Link>
                    <Link className='nav-item' activeClass="active" to='projects' spy={true} smooth={true} offset={-50} duration={1000}>Projects</Link>
                    <Link className='nav-item' activeClass="active" to='resume' spy={true} smooth={true} offset={-50} duration={1000}>Resume</Link>
                    <Link className='nav-item' activeClass="active" to='contact-me' spy={true} smooth={true} offset={-50} duration={1000}>Contact Me</Link>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
