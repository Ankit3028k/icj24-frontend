import React from 'react'
import Top from '../Components/top'
import UpperNav from '../Components/UpperNav'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import GoogleAds from '../Components/BoxAds'
import WeatherForecasting from '../Components/WeatherForecasting'
import SideNews from '../Components/SideNews'
import FullNewsPage from '../Components/FullNews'
import CategoryFullNews from '../Components/CategoryFullNews'


function CategoryFullNewsPage() {
  
    return (
        <div className="jara-hatke-page-container">
            <Top />
          <UpperNav />
          <NavBar />
          {/* Main content */}
          <div className="flex flex-wrap px-2 py-4">
            {/* Main content takes full width on mobile, half on medium screens */}
            <div className="flex-1 w-full md:w-3/4">
              <CategoryFullNews />
              
              
              
              
            </div>
        
            {/* Sidebar */}
            <div className="w-full md:w-1/4 pl-3 mt-6 md:mt-0">
              <div className="border border-gray-600">
                <GoogleAds />
              </div>
              <WeatherForecasting />
              <SideNews />
              
              
            </div>
          </div>
          
          <Footer />
        </div>
       
      )
    }

export default CategoryFullNewsPage
