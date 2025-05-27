import React from 'react'
import FirstSection from '../Component/HomePage/FirstSection'
import SecondSection from '../Component/HomePage/SecondSection'
import ThirdSection from '../Component/HomePage/ThirdSection'
import FourthSection from '../Component/HomePage/FourthSection'
import Navbar from '../Component/Navbar/Navbar'

import Footer from '../Component/FooterPage/Footer'
import FifthSection from '../Component/HomePage/FifthSection'
import FeesCharge from '../Component/RegestrationFeesPages/FeesCharge'

function  HomePage() {
  return (
    <>
     
     <Navbar />
    <FirstSection />
<div>
  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center mt-24 gilda-display-regular">
    Success Stor
    <span className="relative inline-flex items-center justify-center mx-1">
      {/* Vertical line */}
      <svg
        className="w-[6px] h-[16px] sm:h-[22px] lg:w-2 lg:h-[35px]"
        viewBox="0 0 6 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="3" y1="0" x2="3" y2="100" stroke="black" strokeWidth="16" />
      </svg>

      {/* Heart icon */}
      <span className="absolute -top-6  md:-top-8 lg:-top-10 left-1/2 transform -translate-x-1/2 text-[#EB5757] text-lg sm:text-xl md:text-2xl lg:text-3xl">
        ❤️
      </span>
    </span>
    es
  </h1>
</div>




    <SecondSection />
    <ThirdSection />
    <FourthSection />
    {/* <FeesCharge /> */}
    <FifthSection />
    
    <Footer />
        
    </>
  )
}

export default HomePage
