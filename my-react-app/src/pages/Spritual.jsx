import React from 'react'
import Top from '../Components/top';
import UpperNav from '../Components/UpperNav';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import NewsGrid from '../Components/SpritualComponents/SpritualNews';
import AdsenseAd from '../Components/HorizontalAds';


function SpritualPages() {
  return (
    <div  className=' jara-hatke-page-container'>
      <Top/>
      <UpperNav/>
      <NavBar/>
      <NewsGrid/>
      <AdsenseAd/>
      <Footer/>
    </div>
  )
}

export default SpritualPages;
