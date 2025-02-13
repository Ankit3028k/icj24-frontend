import React from 'react'
import AdsenseAd from './HorizontalAds'

function UpperNav() {
  return (
    <div className='container inline-flex'>
      <div className='w-96'>
        <img className='py-3 px-5 h-28' src="https://res.cloudinary.com/dtezcrxpw/image/upload/f_auto,q_auto/v1/icj24/wqhqwlwn6lezj5imqbvf" alt="icj24-logo" />
      </div>
      <div className='w-auto  '>
        {/* ads */}
        <AdsenseAd/>
      </div>
    </div>
  )
}

export default UpperNav
