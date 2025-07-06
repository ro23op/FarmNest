import React from 'react'
import Home from './Home'
import Features from './InfoSection/Features'
import FeaturedProduct from './Featured/FeaturedProduct'
import FeaturedFarms from './Featured/FeaturedFarms'

const HomeMain = () => {
  return (
    <section>
        <Home />
        <Features />
        <FeaturedProduct />
        <FeaturedFarms />
    </section>
  )
}

export default HomeMain