import React, { useEffect } from 'react'
import AboutMe from './components/AboutMe/AboutMe'
import LandingPage from './components/LandingPage/LandingPage'
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'
import Aos from 'aos';
import 'aos/dist/aos.css'
import './App.css'





const App = () => {
  useEffect(() => {
    Aos.init({duration: 1700 });

  }, [])

  window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
    


  return (
    <div className='app'>
      <div className='containers'> 
      <LandingPage />
      <div data-aos='zoom-in' className='app-nav'>
        <NavBar />
      </div> 
        <div data-aos='zoom-in'>
          <AboutMe />
        </div>
        <div data-aos='zoom-in'>
          <Projects />      
        </div>
        <div data-aos='zoom-in'>
          <Resume />
        </div>
        <div data-aos='zoom-in'>
          <Contact />
        </div>
       </div>
    </div>
  )
}

export default App

