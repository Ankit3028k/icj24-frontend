import React from 'react'
import Top from '../Components/top'
import UpperNav from '../Components/UpperNav'
import NavBar from '../Components/NavBar'
import AdsenseAd from '../Components/HorizontalAds'
import Footer from '../Components/Footer'
import Indore from '../Components/MadhayPradeshComponents/Indore'
import SideNews from '../Components/SideNews'
import WeatherForecasting from '../Components/WeatherForecasting'
import GoogleAds from '../Components/BoxAds'

function IndorePage() {
  return (
    <div className=' jara-hatke-page-container'>
    <Top />
    <UpperNav />
    <NavBar />
    
    <div className="flex flex-wrap px-2 py-4">
      <div className="flex-1 w-full md:w-2/3">
      <Indore />
      </div>
       {/* Sidebar */}
       <div className="w-full md:w-1/5 pl-3 mt-6 md:mt-0">
        <div className=" mt-2">
          <SideNews />
        
          
        </div>
        <WeatherForecasting />
        <GoogleAds />
        
        
      
        
      </div>
    </div>
    <div className="mt-2">
      <AdsenseAd/>
    </div>
    <Footer/>
  </div>
  )
}

export default IndorePage
