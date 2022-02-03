import React from 'react'
import './Project.css'
import ScrollingLogo from '../ScrollingLogos/ScrollingLogo'

const Projects = () => {
    return (
 <div className='projects-container' id='projects'>
     <h1 className='projects-title'>Projects</h1>
        <div class="cards">
            <div className='card-item'>
                <img src="https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY=" alt="placeholder" />
                <h2 className='card-title'>Card Title</h2>
                <p className='card-description'>Card Description</p>
            </div>      
            <div className='card-item'>
                <img src="https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY=" alt="placeholder" />
                <h2 className='card-title'>Card Title</h2>
                <p className='card-description'>Card Description</p>
            </div>      
            <div className='card-item'>
                <img src="https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY=" alt="placeholder" />
                <h2 className='card-title'>Card Title</h2>
                <p className='card-description'>Card Description</p>
            </div>      
        </div>
        <ScrollingLogo />
    </div>
  )
}

export default Projects
