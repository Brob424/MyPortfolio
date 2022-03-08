import React, {useEffect, useRef} from 'react'
import emailjs from 'emailjs-com'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Contact.css'

const Contact = () => {
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

              useEffect(() => {
    Aos.init({duration: 2000 });

  }, [])



    return (
        <div className='contact-me-container' id='contact-me' >
            <div data-aos='fade-up'>
                <h1 className='contact-title'>Contact</h1>
            </div>
            <div className='contact-form'>
                <form className='form-list' ref={form} onSubmit={sendEmail}>
                    <div className='form-items'>
                    <div className='form-label'>
                        <label>Name</label>
                    </div>
                        <input type="text" name="user_name" placeholder='Enter Your Name'/>
                    </div>
                    <div className='form-items'>
                    <div className='form-label'>
                        <label>Email</label>
                    </div>
                        <input type="email" name="user_email"  placeholder='Enter Your Email'/>
                    </div>
                    <div className='form-items'>
                    <div className='form-label'>
                        <label>Message</label>
                    </div>
                        <textarea name="message" rows="10" placeholder='Enter Your Message'/>
                    <div>
                       <button input type="submit" value="Send">Send</button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
