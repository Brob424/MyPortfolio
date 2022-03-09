import React, {useEffect, useRef, useState} from 'react'
import emailjs from 'emailjs-com'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Contact.css'
import PopUpModal from '../PopupModal/PopUpModal';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Contact = () => {
              useEffect(() => {
    Aos.init({duration: 2000 });

   }, [])

    const form = useRef();

      const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r93ovwp', 'template_cyw7phf', e.target, 'LKwXO2rK8DBcE4Xem')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

    const [popUp, setPopUp] = useState(false);

    popUp ? disableBodyScroll(document) : enableBodyScroll(document)

    


    return (
        <div className='contact-me-container' id='contact-me' >
            <div data-aos='fade-up'>
                {popUp && <PopUpModal closeModal={setPopUp} />}
                 <h1 className='contact-title'>Contact</h1>
            </div>
            < div className='contact-form'>
                <h2>Get in contact, and lets talk...</h2>
                <form className='form-list' ref={form} onSubmit={sendEmail}>
                    <div className='form-items'>
                    <div className='form-label'>
                        <label>Subject</label>
                    </div>
                        <input type="text" name="subject" placeholder='Enter subject'required/>
                    </div>
                    <div className='form-items'>
                    <div className='form-label'>
                        <label>Name</label>
                    </div>
                        <input type="text" name="name" placeholder='Enter Your Name'required/>
                    </div>
                    <div className='form-items'>
                    <div className='form-label'>
                        <label>Email</label>
                    </div>
                        <input type="email" name="email"  placeholder='Enter Your Email'required/>
                    </div>
                    <div className='form-items'>
                    <div className='form-label'>
                        <label>Message</label>
                    </div>
                        <textarea name="message" rows="8" placeholder='Enter Your Message'required/>
                    <div className='form-btn'>
                       <button input type="submit" onClick={() => {setPopUp(true)}} value="Send">Send</button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
