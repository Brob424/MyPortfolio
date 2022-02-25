import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Resume.css'
const Resume = () => {
       useEffect(() => {
    Aos.init({duration: 2000 });

  }, [])




    return (
        <div className='resume-container' id='resume'>
            <div  data-aos="fade-up">
                <h1 className='resume-title'>Resume</h1>
                <div className='resume-grid'>
                    <div className='res-grid-1'>
                        <h3>Brandon Robinson</h3>
                        <nav>
                            <ul>
                                <li></li>
                            </ul>
                        </nav>
                    </div>
                    <div className='res-grid-2'>
                        <h2>This is box 2</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
