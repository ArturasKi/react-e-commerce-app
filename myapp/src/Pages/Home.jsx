import React from 'react'
import CategoryList from '../Components/CategoryList';
import Navbar from '../Components/Navbar';
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
    </div>
  )
}

export default Home;