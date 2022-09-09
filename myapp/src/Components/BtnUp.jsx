import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { TbArrowBigTop } from "react-icons/tb";

function BtnUp() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  return (
    <div className="btn-up">
      {backToTop && (
        <button onClick={() => window.scrollTo(0, 0)}>
          <TbArrowBigTop />
        </button>
      )}
    </div>
  );
}

export default BtnUp;
