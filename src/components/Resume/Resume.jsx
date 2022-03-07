import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Resume.css'
import Profile from './Profile';
import Employment from './Employment';



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
                       <div className='resume-sidebar'>
                           <div className='resume-list'>
                            <h3>Brandon Robinson</h3>
                            <nav className='resume-list-container'>
                                <div className='resume-items'>
                                    <Link to='profile'>Profile</Link>
                                </div>
                                <div className='resume-items'>
                                    <Link to='employment'>Employment</Link>
                                </div>
                                <div className='resume-items'>
                                    <Link to='education'>Education</Link>
                                </div>
                                <div className='resume-items'>
                                    <Link to='intership'>Intership</Link>
                                </div>
                                <div className='resume-items'>
                                    <Link to='references'>References</Link>
                                </div>                       
                            </nav>
                            </div>
                       </div>
                    </div>
                    <div className='res-grid-2'>
                        <Profile />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
