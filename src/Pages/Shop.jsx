import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import NewCollection from '../Components/NewCollection/NewCollection'
import Offers from '../Components/Offers/Offers'
import NewsLetter from '../Components/NewsLetter/NewsLetter'


const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollection/>
        <NewsLetter/>
    </div>
  )
}

export default Shop