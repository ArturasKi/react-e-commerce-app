import React, { useState } from "react";
import { RiArrowRightSFill, RiArrowLeftSFill } from "react-icons/ri";
import sliderData from "../sliderData.js";

function Slider({ slides }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setSlideIndex(slideIndex === length - 1 ? 0 : slideIndex + 1);
  };
  console.log(slideIndex);
  const prevSlide = () => {
    setSlideIndex(slideIndex === 0 ? length - 1 : slideIndex - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  console.log(slideIndex)

  return (
    <div className="slider-container">
      <div dir="left" className="arrow left" onClick={prevSlide}>
        <RiArrowLeftSFill />
      </div>
      <div className="wrapper">
        {sliderData.map((item) =>
          (
            <div
              key={item.id}
              className='slide'
              style={{ backgroundColor: item.bg}}
              
            > 
                <img className="img-container" src={item.img} alt='#'/>
                <div className="info-container">
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                    <button>SHOP NOW</button>
                </div>
            </div>
          )
        )}
      </div>
      <div className="arrow right" onClick={nextSlide}>
        <RiArrowRightSFill />
      </div>
    </div>
  );
}

export default Slider;

/* <div className="wrapper">
  <div className="slide">
    <div className="img-container"></div>
    <div className="info-container">
      <h1>SUMMER SALE</h1>
      <p>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</p>
      <button>SHOP NOW</button>
    </div>
  </div>
</div> */
