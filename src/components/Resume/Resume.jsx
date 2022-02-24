import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Resume.css'
const Resume = () => {
       useEffect(() => {
    Aos.init({duration: 3000 });

  }, [])




    return (
        <div className='resume-container' id='resume'>
            <div  data-aos="fade-up">
                <h1 className='resume-title'>Resume</h1>
            </div>
        </div>
    )
}

export default Resume
