import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import OneSection from '../Component/AboutUsPage/OneSection'
import SecondSection from '../Component/AboutUsPage/SecondSection'
import ThirdSection from '../Component/HomePage/ThirdSection'
import FourthSections from '../Component/AboutUsPage/FourthSections'
import Footer from '../Component/FooterPage/Footer'

function AboutUsPage() {
  return (
    <>
    <Navbar />
    <OneSection name="Find the one who feels like home" />
    <SecondSection />
    <ThirdSection />
    <FourthSections />
    <Footer />
      
    </>
  )
}

export default AboutUsPage
