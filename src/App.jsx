import React from 'react'
import AboutMe from './components/AboutMe/AboutMe'
import './App.css'
import LandingPage from './components/LandingPage/LandingPage'



const App = () => {
  return (
    <div className='app'>
      <div className='containers'>
        <LandingPage />
        <AboutMe />
       </div>
    </div>
  )
}

export default App

