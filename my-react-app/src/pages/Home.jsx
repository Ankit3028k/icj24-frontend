import React from 'react';
import NavBar from '../Components/NavBar';
import Top from '../Components/top';
import UpperNav from '../Components/UpperNav';
import Slideshow from '../Components/TopNews';
import BreakingNews from '../Components/BreakingNews';
import Footer from '../Components/Footer';
import TrendingNews from '../Components/TrendingNews';
import GoogleAds from '../Components/BoxAds';
import WeatherForecasting from '../Components/WeatherForecasting';
import MpNews from '../Components/MpNews';

function Home() {
  return (
    <div>
      <Top />
      <UpperNav />
      <NavBar />
      <Slideshow />
      <BreakingNews />

      {/* Main content */}
      <div className="flex flex-wrap px-6 py-8">
        {/* Main content takes full width on mobile, half on medium screens */}
        <div className="flex-1 w-full md:w-3/4">
          <TrendingNews />
          <MpNews />
          
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/4 pl-6 mt-6 md:mt-0">
          <div className="border border-gray-600">
            <GoogleAds />
          </div>
          <WeatherForecasting />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Home;
