import React from 'react'
import Navbar4 from '../Component/Navbar/Navbar4'
import Footer from '../Component/FooterPage/Footer'
import SettingTwo from '../Component/SettingPage/SettingTwo'
import SettingThree from '../Component/SettingPage/SettingThree'
import SettingFour from '../Component/SettingPage/SettingFour'
import SettingFive from '../Component/SettingPage/SettingFive'
import SettingEleven from '../Component/SettingPage/SettingEleven'
import SettingSix from '../Component/SettingPage/SettingSix'
import SettingSeven from '../Component/SettingPage/SettingSeven'
import SettingEight from '../Component/SettingPage/SettingEight'
import SettingNine from '../Component/SettingPage/SettingNine'
import SettingTen from '../Component/SettingPage/SettingTen'

function  SettingPage() {
  return (
    <div>
      <Navbar4 />
      <SettingTwo />
      {/* <SettingThree />
      <SettingFour /> */}
      {/* <SettingFive /> */}
      <SettingEleven />
      
      <Footer />
    </div>
  )
}

export default SettingPage
