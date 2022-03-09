import React from 'react'
import ReactDOM from 'react-dom'
import './PopUpModal.css'


const PopUpModal = ({closeModal}) => {
     return ReactDOM.createPortal(
        <div className='modal-background'>
            <div className='modal-container'>
              <div className='modal-close-btn'>
                <button className='modal-close' onClick={() => closeModal(false)}><i class="fa-solid fa-xmark"></i></button>
              </div>
              <div className='pop-up-text'>
                <h1>Thank you for contacting me...</h1>
                <h3>I will response to you via your contact information as soon as possible</h3>
                <h3>Thank you again for your interest</h3>
                <h2>Have a great day!</h2>
              </div>
            </div>
        </div>,
        document.getElementById('portal')
  )
}

export default PopUpModal