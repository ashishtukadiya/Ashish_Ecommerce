import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'
// import Product from './Product'

const About = () => {
  return (
    <div>
      {/* <h1>About</h1> */}
      <Navbar />
      <HeroImg2 heading="About" text="Computer science student learning React"/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About