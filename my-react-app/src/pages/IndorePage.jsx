import React from 'react'
import Top from '../Components/top'
import UpperNav from '../Components/UpperNav'
import NavBar from '../Components/NavBar'
import AdsenseAd from '../Components/HorizontalAds'
import Footer from '../Components/Footer'
import Indore from '../Components/indore'

function IndorePage() {
  return (
    <div className='jara-hatke-page-container'>
      <Top/>
      <UpperNav/>
      <NavBar/> 
      <Indore/>
      <AdsenseAd/>
      <Footer/>

    </div>
  )
}

export default IndorePage
