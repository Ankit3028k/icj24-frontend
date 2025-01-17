import React from 'react'
import NavBar from '../Components/NavBar'
import Top from '../Components/top'
import UpperNav from '../Components/UpperNav'
import Slideshow from '../Components/TopNews'
import BreakingNews from '../Components/BreakingNews'
import Footer from '../Components/Footer'


function Home() {
  return (
    <div>
        <Top/>
        <UpperNav/>
      
      <NavBar/>
      <Slideshow/>
      <BreakingNews/>
      <Footer/>
    </div>
  )
}

export default Home
