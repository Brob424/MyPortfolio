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
                <form ref={form} onSubmit={sendEmail}>
                    <div>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    </div>
                    <div>
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    </div>
                    <div>
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
