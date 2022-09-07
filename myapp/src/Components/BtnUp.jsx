import React from "react";
import { TbArrowBigTop } from "react-icons/tb";

function BtnUp() {

  const btnUp = document.querySelector('.btn-up');
  console.log(btnUp)

  // btnUp.addEventListener('scroll', );

  // function appear() {
  //   // if (window.screenY >= 200) {
  //   //   btnUp.classList.add('.btn-up')
  //   // }
  // }

  return (
    <div className="btn-up">
      <button onClick={() => window.scrollTo(0, 0)}><TbArrowBigTop /></button>
    </div>
  );
}

export default BtnUp;
