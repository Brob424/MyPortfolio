import React from 'react'
import { Link, animateScroll } from 'react-scroll'
import Typewriter from 'typewriter-effect'
import './LandingPage.css'



const LandingPage = () => {
    return (
        <div className='landing-container'>
            <div className='intro-text'>
              <div className='landing-icons'>
                 <a href=" http://m.me/brob424" target='_blank' className='landing-item'>
                    <i class="fab fa-facebook-messenger"></i>
                </a>
                <a href="https://www.linkedin.com/in/brob424/" target='_blank' className='landing-item' rel='noopener noreferrer'>
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/Brob424" target='_blank' className='landing-item' rel='noopener noreferrer'>
                    <i class="fab fa-github-square "></i>
                </a>
              </div>
              <div>
                <h1 className='title-one'>Hello!</h1>
                <h1 className='title-two'>My name is Brandon</h1>
              </div>
              <div className='type-text'>
                  <Typewriter
                  options={{
                      autoStart: true,
                      loop: true,
                      delay: 60,
                      strings:[
                          "Creative Dev",
                          "Team Oriented",
                          "Front End Developer",
                          "MERN Stack Dev",
                          "React Developer"
                      ]
                  }}
                  />
                  <span><h2 className='title-statement'>A Reliable Software Developer ready to make your next website</h2></span>
              </div>
               <h3 className='arrow-text'>Let's Get Start</h3>
              <Link to='about-me' spy={true} smooth={true} offset={-50} duration={1000}>
              <div className='arrow-scroll'>
                  <div className='arrow'></div>
                  <div className='arrow'></div>
                  <div className='arrow'></div>   
               </div>
               </Link>
            </div>
        </div>
    )
}

export default LandingPage
