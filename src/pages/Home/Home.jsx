import Slider  from '../../components/Slider/Slider.jsx'
import React from 'react'
import "./Home.scss"
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts.jsx'
import Categories from '../../components/Categories/Categories.jsx'
import Contact from '../../components/Contact/Contact.jsx'

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type='Featured'/>
      <Categories/>
      <FeaturedProducts type='Trending'/>
      <Contact/>
    </div>
  )
}

export default Home
