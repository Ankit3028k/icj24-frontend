import React from 'react'
import Top from '../Components/top'
import UpperNav from '../Components/UpperNav'
import NavBar from '../Components/NavBar'
import AdsenseAd from '../Components/HorizontalAds'
import Footer from '../Components/Footer'
import Technology from '../Components/TechnologyComponents/Technology'

function TechnologyPage() {
  return (
    <div className='jara-hatke-page-container' >
     
     <Top />
     <UpperNav />
     <NavBar/>
     <Technology/>
     <AdsenseAd/>
     <Footer/>
    </div>
  )
}

export default TechnologyPage
