import React from 'react';
import Top from '../Components/top';
import UpperNav from '../Components/UpperNav';
import NavBar from '../Components/NavBar';
import AdsenseAd from '../Components/HorizontalAds';
import Footer from '../Components/Footer';
import JaraHatke from '../Components/JaraHatkeComponents/JaraHatke';

function JaraHatkePage() {
  return (
    <div className="jara-hatke-page-container">
      <Top />
      <UpperNav />
      <NavBar />
      <JaraHatke />
      <AdsenseAd />
      <Footer />
    </div>
  );
}

export default JaraHatkePage;
