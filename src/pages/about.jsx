import React from 'react'
import AboutBody from '../components/AboutBody'
import HeroAbout from '../components/HeroAbout'
import Navbar from '../components/Navbar'
import IntroGallery from '../components/IntroGallery'
import Footer from '../components/Footer'

function about() {
  return (
    <>
        <Navbar/>
        <HeroAbout/>
        <AboutBody/>
        <IntroGallery/>
        <Footer/>
    </>
  )
}

export default about
