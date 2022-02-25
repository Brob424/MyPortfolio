import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Contact.css'

const Contact = () => {
              useEffect(() => {
    Aos.init({duration: 2000 });

  }, [])



    return (
        <div className='contact-me-container' id='contact-me' >
            <div data-aos='fade-up'>
                <h1 className='contact-title'>Contact</h1>
            </div>
        </div>
    )
}

export default Contact
