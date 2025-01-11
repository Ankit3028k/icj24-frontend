import React from 'react'
import NavBar from '../Components/NavBar'
import Top from '../Components/top'
import UpperNav from '../Components/UpperNav'
import Footer from '../Components/footer'
import BreakingNews from '../Components/BreakingNews'

function Home() {
  return (
    <div>
        <Top/>
        <UpperNav/>
      <NavBar/>
      <BreakingNews></BreakingNews>
      <Footer></Footer>
    </div>
  )
}

export default Home
