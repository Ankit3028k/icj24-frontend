import React from "react";
import NavBar from "../Components/NavBar";
import Top from "../Components/top";
import UpperNav from "../Components/UpperNav";
import Slideshow from "../Components/TopNews";
import BreakingNews from "../Components/BreakingNews";
import Footer from "../Components/Footer";
import TrendingNews from "../Components/TrendingNews";
import GoogleAds from "../Components/BoxAds";
import WeatherForecasting from "../Components/WeatherForecasting";
import SideNews from "../Components/SideNews";
import MpNews from "../Components/MpNews";
import FeaturedVideos from "../Components/FeaturedVideos";
import CategoriesList from "../Components/sideCategory";
import SportsNews from "../Components/SportNews";
import AdsenseAd from "../Components/HorizontalAds";
import SubscribeNews24 from "../Components/sideIcj24";
import Rajniti from "../Components/RajnitiComponets/HeroSection";
import NewsGrid from "../Components/SpritualComponents/SpritualNews";


function Home() {
  return (

    <div className='overflow-y-hidden'>

    <div className="jara-hatke-page-container">

      <Top />
      <UpperNav />
      <NavBar />
      <Slideshow />
      <BreakingNews />

      {/* Banner Ad Section */}

      {/* Main content */}
      <div className="flex flex-wrap px-2 py-4">
        {/* Main content takes full width on mobile, half on medium screens */}
        <div className="flex-1 w-full md:w-3/4">
          <TrendingNews />
          <div className="mt-6">
            <MpNews />
          </div>
          <div className="mt-6">
            <Rajniti/>
          </div>
          
          

          <div className="mt-6">
            <FeaturedVideos />
          </div>
          <div className="my-4">
            <AdsenseAd />
          </div>
          <div className="mt-6">
            <SportsNews />
          </div>
        </div>
    
        {/* Sidebar */}
        <div className="w-full md:w-1/4 pl-3 mt-6 md:mt-0">
          <div className="border border-gray-600">
            <GoogleAds />
          </div>
          <WeatherForecasting />
          <SideNews />
          <div className="mt-6">
            <CategoriesList />
          </div>
          <div className="mt-6">
            <SubscribeNews24 />
          </div>
        </div>
      </div>
      <div className="mt-6">
           <NewsGrid/>
          </div>
      <Footer />
    </div>
    </div>
  );
}

export default Home;
