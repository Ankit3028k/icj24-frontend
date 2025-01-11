import React from 'react'
import NavBar from '../Components/NavBar'
import Top from '../Components/top'
import UpperNav from '../Components/UpperNav'
import NewsGrid from '../Components/TopNews'
import NewsSlider from '../Components/TopNews'
import Slideshow from '../Components/TopNews'

function Home() {
  return (
    <div>
        <Top/>
        <UpperNav/>
      <NavBar/>
      <Slideshow/>
    </div>
  )
}

export default Home
