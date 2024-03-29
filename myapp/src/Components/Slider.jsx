import React, { useState } from "react";
import { RiArrowRightSFill, RiArrowLeftSFill } from "react-icons/ri";
import { sliderData } from "../data.js";
import { Wrapper } from "./StyledComponents.jsx";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      // jei index > 0 => 0 - 1 - 2
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  const slideDown = () => {
    const element = document.querySelector(".pr-container");
    element.scrollIntoView();
  };

  return (
    <div className="slider-container">
      <div
        direction="left"
        className="arrow left"
        onClick={() => handleClick("left")}
      >
        <RiArrowLeftSFill />
      </div>
      <Wrapper slideIndex={slideIndex}>
        {sliderData
          ? sliderData.map((item) => (
              <div
                key={item.id}
                className="slide"
                style={{ backgroundColor: item.bg }}
              >
                <img className="img-container" src={item.img} alt="" />
                <div className="info-container">
                  <h1>{item.title}</h1>
                  <p>{item.desc}</p>
                  <button onClick={slideDown}>SHOP NOW</button>
                </div>
              </div>
            ))
          : null}
      </Wrapper>
      <div
        direction="right"
        className="arrow right"
        onClick={() => handleClick("right")}
      >
        <RiArrowRightSFill />
      </div>
    </div>
  );
}

export default Slider;
