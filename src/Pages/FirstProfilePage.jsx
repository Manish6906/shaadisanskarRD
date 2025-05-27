import React from 'react'
import Navbar4 from '../Component/Navbar/Navbar4'
import FirstProfile from '../Component/ProfileMatches/FirstProfile'
import Footer from '../Component/FooterPage/Footer'
import SecondProfile from '../Component/ProfileMatches/SecondProfile'

function FirstProfilePage() {
  return (
    <>
    <Navbar4 />
    <FirstProfile />
    <div className='py-4 '>
    <SecondProfile />
    </div>
    <Footer />
      
    </>
  )
}

export default FirstProfilePage
