import React from 'react'
import Top from '../Components/top'
import UpperNav from '../Components/UpperNav'
import NavBar from '../Components/NavBar'
import MpNews from '../Components/MpNews'
import GoogleAds from '../Components/BoxAds'
import WeatherForecasting from '../Components/WeatherForecasting'
import SideNews from '../Components/SideNews'
import CategoriesList from '../Components/Admin/CategoriesList'
import SubscribeNews24 from '../Components/sideIcj24'
import AdsenseAd from '../Components/HorizontalAds'
import Footer from '../Components/Footer'
import Indore from '../Components/MadhayPradeshComponents/indore'
import Bhopal from '../Components/MadhayPradeshComponents/Bhopal'
import Jabalpur from '../Components/MadhayPradeshComponents/Jabalpur'
import Ujjain from '../Components/MadhayPradeshComponents/Ujjain'


function News() {
  return (
    <div className=' jara-hatke-page-container'>
      <Top />
      <UpperNav />
      <NavBar />
      
      <div className="flex flex-wrap px-2 py-4">
        <div className="flex-1 w-full md:w-2/3">
        <MpNews />
        <div className="flex-1 w-full ">
        <Indore/>
        </div>
        <div className="flex-1 w-full ">
          <Bhopal/>
        </div>
        <div className="flex-1 w-full ">
          <Jabalpur/>
        </div>
        <div className="flex-1 w-full ">
          <Ujjain/>
        </div>
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

export default News
