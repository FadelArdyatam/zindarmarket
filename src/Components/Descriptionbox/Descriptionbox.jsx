import React from 'react'
import './Descriptionbox.css'

const Descriptionbox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-navigator-box'>Description</div>
            <div className='descriptionbox-navigator-box fade'>Reviews(122)</div>
        </div>
        <div className='descriptionbox-content'>
            <p>
                an e-commerce website is an online store 
                where customers can buy products and services 
                over the internet. It is a platform that allows 
                businesses to sell their products and services to 
                customers.
            </p>

        </div>
    </div>
  )
}

export default Descriptionbox