import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Component/FooterPage/Footer'
import Navbar4 from '../Component/Navbar/Navbar4'
import SettingOne from '../Component/SettingPage/SettingOne'

function PhotoSetting() {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token') // Update this if your token key is different
    if (!token) {
      navigate('/login')
    }
  }, [navigate])

  return (
    <div>
      <Navbar4 />
      <SettingOne />
      <Footer />
    </div>
  )
}

export default PhotoSetting
