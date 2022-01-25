import React from 'react'
import Typewriter from 'typewriter-effect'
import '../css/DropDown.css'


const DropDown = () => {
    return (
        <div className='introText'>
              <div className='landing-icons'>
                 <a href="#" className='icon-1'>
                    <i class="fab fa-facebook-square"></i>
                </a>
                <a href="https://www.linkedin.com/in/brob424/" target='_blank' className='icon-2' rel="noopener noreferrer">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="#" className='icon-3'>
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
               <h3 className='arrow-text'>Get Start</h3>
              <div className='arrow-scroll'>
                 <a href="#"> <div className='arrow'></div>
                  <div className='arrow'></div>
                  <div className='arrow'></div>
                  </a>
              </div>
        </div>
    )
}

export default DropDown
