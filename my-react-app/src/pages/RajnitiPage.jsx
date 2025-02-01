import React from 'react';
import NavBar from "../Components/NavBar";
import Top from "../Components/top";
import UpperNav from "../Components/UpperNav";
 import Rajniti from "../Components/RajnitiComponets/HeroSection";
 import Footer from "../Components/Footer";
import AdsenseAd from '../Components/HorizontalAds';
function RajnitiPage(){
    return(
        <div>
            <Top />
            <UpperNav />
            <NavBar />
            <Rajniti/>
            {/* <HeroSection /> */}
           <AdsenseAd/>
          
           <Footer/>
        </div>
        
    )
}
export default RajnitiPage;