import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import MatchesFull from '../Component/DashBoardPage/MatchesFull'
import DashBoard from '../Component/DashBoardPage/DashBoard'
import Footer from '../Component/FooterPage/Footer'
import Navbar4 from '../Component/Navbar/Navbar4'
import ErrorBoundary from '../Component/ErrorBoundring/ErrorBoundary'

function DashBoardPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token') // ya jo key aap use kar rahe ho
    if (!token) {
      navigate('/login')
    }
  }, [navigate])

  return (
    <div>
      <ErrorBoundary>
        <Navbar4 />
        <DashBoard />
        <MatchesFull />
        <Footer />
      </ErrorBoundary>
    </div>
  )
}

export default DashBoardPage
