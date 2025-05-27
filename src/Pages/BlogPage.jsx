import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import OneSection from '../Component/AboutUsPage/OneSection'
import FirstBlog from '../Component/BlogPage/FirstBlog'
import SecondPage from '../Component/BlogPage/SecondBlog'
import Footer from '../Component/FooterPage/Footer'

function BlogPage() {
  return (
    <>
    <Navbar />
    <OneSection name="Blogs" />
    <FirstBlog />
    <Footer />
      
    </>
  )
}

export default BlogPage
