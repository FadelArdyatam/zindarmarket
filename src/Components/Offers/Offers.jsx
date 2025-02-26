import React from 'react'
import './Offers.css'
import arrow_icon from '../Assets/arrow.png'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='Offers'>
      <div className='Offers-left'>
        <h2>NEW</h2>
        <div className='Offers-text'>
          <p>Offers</p>
          <p>For You!</p>
        </div>
        <div className='Offers-latest-btn'>
          <div>Latest Collection</div>
          <img src={arrow_icon} alt='Arrow icon'/>
        </div>
      </div>
      <div className='Offers-right'>
        <img src={exclusive_image} alt=''/>
      </div>
    </div>
  )
}

export default Offers