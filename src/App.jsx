import React from 'react'
import Navbar from './secciones/Navbar'
import Hero from './secciones/Hero'
import About from './secciones/About'
import Projects from './secciones/Projects'
import Experiences from './secciones/Experiences'
import Contact from './secciones/Contact'
import Footer from './secciones/Footer'
const App = () => {
  return (  <div className='container mx-auto max-w-7xl'>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Experiences />
    <Contact />
    <Footer />
    
  </div>
  )
}

export default App
