import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UploadSection from '../Component/PhotoPage/UploadSection'
import Navbar4 from '../Component/Navbar/Navbar4'
import Footer from '../Component/FooterPage/Footer'

function UploadPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token') // Replace with your actual token key if different
    if (!token) {
      navigate('/login')
    }
  }, [navigate])

  return (
    <div>
      <Navbar4 />
      <UploadSection />
      <Footer />
    </div>
  )
}

export default UploadPage
