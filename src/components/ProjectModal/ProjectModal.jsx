import React, { useEffect } from 'react'
import  ReactDOM  from 'react-dom'
import './ProjectModal.css'



const ProjectModal = ({closeModal}) => {
    return ReactDOM.createPortal(
        <div className='modal-background'>
            <div className='modal-container'>
                <div className='modal-close-btn'>
                <button className='modal-close' onClick={() => closeModal(false)}><i class="fa-solid fa-xmark"></i></button>
                </div>
                <h1>This is a Modal</h1>
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default ProjectModal
