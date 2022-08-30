import React from 'react'
import CategoryList from '../Components/CategoryList';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';
import Products from '../Components/Products';
import Slider from '../Components/Slider';
// import { sliderData } from '../data.js';

function Home() {
  return (
    <div>
        <Navbar />
        <Slider />
        <CategoryList />
        <Products />
        <Newsletter />
    </div>
  )
}

export default Home;