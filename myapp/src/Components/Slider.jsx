import React from "react";
import { RiArrowRightSFill, RiArrowLeftSFill } from "react-icons/ri";

function Slider(props) {
  return (
    <div className="slider-container">
      <div className="arrow left">
        <RiArrowLeftSFill />
      </div>
      <div className="wrapper">
        <div className="slide">
            <div className="img-container">
                
            </div>
            <div className="info-container">
                <h1>SUMMER SALE</h1>
                <p>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</p>
                <button>SHOP NOW</button>
            </div>
        </div>
      </div>
      <div className="arrow right">
        <RiArrowRightSFill />
      </div>
    </div>
  );
}

export default Slider;
