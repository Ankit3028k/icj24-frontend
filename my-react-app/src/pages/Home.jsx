import React from 'react'
import NavBar from '../Components/NavBar'
import Top from '../Components/top'
import UpperNav from '../Components/UpperNav'
import Slideshow from '../Components/TopNews'
import BreakingNews from '../Components/BreakingNews'
import Footer from '../Components/Footer'
import TrendingNews from '../Components/TrendingNews'

function Home() {
  return (
    <div>
        <Top/>
        <UpperNav/>
      
      <NavBar/>
      <Slideshow/>
      <BreakingNews/>
      <TrendingNews/>
      <Footer/>
    </div>
  )
}

export default Home
