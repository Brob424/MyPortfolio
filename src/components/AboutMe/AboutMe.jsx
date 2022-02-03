import React from 'react'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className='about-me-container' id='about-me'>
            <div className='about-me'>
                <div>
                    <h1 className='about-me-title'>About Me</h1>
                </div>
              <div className='about-me-grid'>
                <div className='about-me-left'>
                    <h1>This is the left side</h1>
                </div>
                <div className='about-me-right'>
                    <p>My name is Brandon Robinson. I'm a resourceful and dedicated software developer ready to bring my skills into the tech world. I'm excited to work with individual, small, and large businesses to identify their challenges and create personalized solutions. Maintaining focus on problem-solving and optimal user experience.</p>
                    <p>I live and work in New York. In my free time, I enjoy working and riding my motorcycle.</p>
                </div>
              </div>
            </div>
        </div>
    )
}

export default AboutMe
