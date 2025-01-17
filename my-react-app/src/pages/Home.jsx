import React from 'react'
import NavBar from '../Components/NavBar'
import Top from '../Components/top'
import UpperNav from '../Components/UpperNav'
import Slideshow from '../Components/TopNews'
import BreakingNews from '../Components/BreakingNews'
import Footer from '../Components/Footer'
import TrendingNews from '../Components/TrendingNews'
import GoogleAds from '../Components/BoxAds'
import WeatherForecasting from '../Components/WeatherForecasting'


function Home() {
  return (
    <div>
        <Top/>
        <UpperNav/>
      
      <NavBar/>
      <Slideshow/>
      <BreakingNews/>
      <div className="flex px-6 py-8">
        <div className="flex-1">
          <TrendingNews />
        </div>
        <div className="w-1/4 pl-6"> {/* Sidebar takes 1/4th width */}
          <GoogleAds />
          {/* <WeatherForecasting /> */}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
