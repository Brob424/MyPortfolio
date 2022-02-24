import React from 'react'
import AboutMe from './components/AboutMe/AboutMe'
import LandingPage from './components/LandingPage/LandingPage'
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'
import './App.css'





const App = () => {


  window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

    


  return (
    <div className='app'>
      <div className='containers'> 
      <LandingPage />
      <div className='app-nav'>
        <NavBar />
      </div> 
        <div>
          <AboutMe />
        </div>
        <div>
          <Projects />      
        </div>
        <div>
          <Resume />
        </div>
        <div>
          <Contact />
        </div>
       </div>
    </div>
  )
}

export default App

