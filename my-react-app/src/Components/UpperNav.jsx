import React from 'react'
import AdsenseAd from './HorizontalAds'

function UpperNav() {
  return (
    <div className='container inline-flex'>
      <div className='w-96'>
        <img className='py-3 px-5 h-28' src="https://icj24.com/wp-content/uploads/2024/08/ICJ24-Logo-.png" alt="icj24-logo" />
      </div>
      <div className='w-auto '>
        {/* ads */}
        <AdsenseAd/>
      </div>
    </div>
  )
}

export default UpperNav
