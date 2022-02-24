import React, { useState, useEffect } from 'react'
import ScrollingLogo from '../ScrollingLogos/ScrollingLogo'
import ProjectModal from '../ProjectModal/ProjectModal'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Project.css'

const Projects = () => {
          useEffect(() => {
    Aos.init({duration: 3000 });

  }, [])


    const [isOpen, setIsOpen] = useState(false);
    
    isOpen ? disableBodyScroll(document) : enableBodyScroll(document)

    return (
 <div className='projects-container' id='projects'>
     <div data-aos="fade-up">
           {isOpen && <ProjectModal closeModal={setIsOpen} />}
            <h1 className='projects-title'>Projects</h1>
            <div class="cards">
                <div className='card-item card-1' onClick={() => {setIsOpen(true)}}>
                <img src="https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY=" alt="placeholder" />
                <h2 className='card-title'>Card Title</h2>
                <p className='card-description'>Card Description</p>
            </div>
            <div className='card-item card-2' onClick={() => {setIsOpen(true)}}>
                <img src="https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY=" alt="placeholder" />
                <h2 className='card-title'>Card Title</h2>
                <p className='card-description'>Card Description</p>
            </div>
            <div className='card-item card-3' onClick={() => {setIsOpen(true)}}>
                <img src="https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY=" alt="placeholder" />
                <h2 className='card-title'>Card Title</h2>
                <p className='card-description'>Card Description</p>
            </div>
        </div>
     </div>
     <ScrollingLogo />
 </div>

  )
}

export default Projects
