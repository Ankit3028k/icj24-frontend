import React from 'react'
import Top from '../Components/top'
import UpperNav from '../Components/UpperNav'
import Footer from '../Components/Footer'
import CrimeSection from '../Components/CrimeComponents/Crime'
import NavBar from '../Components/NavBar'

function CrimePage() {
  return (
    <div className=' jara-hatke-page-container'>
       <Top />
       <UpperNav />
       <NavBar />
       <CrimeSection/>
       <Footer/>
      
    </div>
  )
}

export default CrimePage
