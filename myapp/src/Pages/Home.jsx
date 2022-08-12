import React from 'react'
import Navbar from '../Components/Navbar';
import Slider from '../Components/Slider';
import sliderData from '../sliderData.js';

function Home() {
  return (
    <div>
        <Navbar />
        <Slider slides={sliderData} />
    </div>
  )
}

export default Home;