import React, { useState } from "react";
import { RiArrowRightSFill, RiArrowLeftSFill } from "react-icons/ri";
import sliderData from "../sliderData.js";
import { Wrapper } from "./StyledComponents.jsx";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {

    if(direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }

  return (
    <div className="slider-container">
      <div direction="left" className="arrow left" onClick={() => handleClick("left")}>
        <RiArrowLeftSFill />
      </div>
      <Wrapper slideIndex={slideIndex}>
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
      </Wrapper>
      <div direction="right" className="arrow right" onClick={() => handleClick("right")}>
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
