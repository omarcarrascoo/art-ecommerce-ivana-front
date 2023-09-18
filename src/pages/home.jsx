
import React from 'react'
import AboutPainter from '../components/AboutPainter'
import Explore from '../components/Explore'
import Footer from '../components/Footer'
import IntroGallery from '../components/IntroGallery'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

function home() {
  return (
    <>
        <Navbar />
        <Hero/>
        <AboutPainter/>
        <IntroGallery/>
        <Explore/>
        <Footer/>
    </> 
  )
}

export default home
