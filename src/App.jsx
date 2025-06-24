import React from 'react'


import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Services from './Components/Services/Services'
import Qualification from './Components/Qualification/Qualification'
import Testimonial from './Components/Testimonial/Testimonia'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Scrollup from './Components/Scrollup/Scrollup'
import Work from './Components/Work/Work.jsx'


const App = () => {
  return (
    <div>
      <Header/>
      <main className='main'>
        <Home/>
        <About/>s
        <Skills/>
        <Services/>
        <Qualification/>
        <Work/>
        <Testimonial/>
        <Contact/>
      </main>
       <Footer/>
       <Scrollup/>
    </div>
  )
}

export default App

