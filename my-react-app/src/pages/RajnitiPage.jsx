import React from 'react';
import NavBar from "../Components/NavBar";
import Top from "../Components/top";
import UpperNav from "../Components/UpperNav";
 import Rajniti from "../Components/RajnitiComponets/HeroSection";
function RajnitiPage(){
    return(
        <div>
            <Top />
            <UpperNav />
            <NavBar />
            <Rajniti/>
            {/* <HeroSection /> */}
        </div>
        
    )
}
export default RajnitiPage;