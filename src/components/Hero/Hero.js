import React, { useState, useEffect } from "react";
import "./Hero.css";
import { sliderData } from "./sliderData";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < 0) {
      setIndex(sliderData.length - 1);
    }
    if (index > sliderData.length - 1) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 4000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <div className="hero-wraper">
      {sliderData.map((slide, slideIndex) => {
        let position = "next-slide";
        if (slideIndex === index) {
          position = "active-slide";
        }
        if (
          slideIndex === index - 1 ||
          (index === 0 && slideIndex === sliderData.length - 1)
        ) {
          position = "last-slide";
        }
        return (
          <div className={position + " hero-slide"} key={slide.id}>
            <img src={slide.img} alt="slider" />
          </div>
        );
      })}

      <div className="prev" onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </div>
      <div className="next" onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </div>
    </div>
  );
};

export default Hero;
