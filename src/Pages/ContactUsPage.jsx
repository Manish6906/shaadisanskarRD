import React from 'react'
import FileFour from '../Component/ContactUsPage/FileFour'
import Footer from '../Component/FooterPage/Footer'
import Navbar from '../Component/Navbar/Navbar'
import OneSection from '../Component/AboutUsPage/OneSection'
import FileTwo from '../Component/ContactUsPage/FileTwo'

function ContactUsPage() {
  return (
    <>
    <Navbar />
    <OneSection name="We're here to support journey love " />
    <FileTwo />
    <FileFour />
    <Footer />
      
    </>
  )
}

export default ContactUsPage
