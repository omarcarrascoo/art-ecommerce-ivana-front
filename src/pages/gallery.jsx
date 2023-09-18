import React from 'react'
import Navbar from '../components/Navbar'
import HeroGallery from '../components/HeroGallery'
import GalleryList from '../components/GalleryList'
import Footer2 from '../components/footer2'

function gallery() {
  return (
    <>
        <Navbar />
        <HeroGallery/>
        <GalleryList/>
        <Footer2/>
    </>
  )
}

export default gallery
