import React from 'react'
import Planpage from '../Component/UpgradePlans/PlansPage'
import MoneybackPage from '../Component/UpgradePlans/MoneybackPage'
import SecondSection from '../Component/HomePage/SecondSection'
import SecondFooter from '../Component/FooterPage/SecondFooter'

function CardsPage() {
  return (
    <>
   
    <Planpage/>
    <MoneybackPage/>
    <div className='text-center gilda-display-regular text-4xl font-serif mt-28'>
  <h1>
    With <span className="text-[#De5353]">Shaadi Premium</span> they found their Perfect match 
    <p className='text-'>and so can you</p>
  </h1>
</div>

    <SecondSection/>
   <SecondFooter />
      
    </>
  )
}

export default CardsPage
