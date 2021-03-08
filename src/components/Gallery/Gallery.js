import React from "react";
import "./Gallery.css";
import insta1 from "../../images/instagram/insta1.PNG";
import insta2 from "../../images/instagram/insta2.PNG";
import insta3 from "../../images/instagram/insta3.PNG";
import insta4 from "../../images/instagram/insta4.PNG";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <h1 className="section-title">
        <span>G</span>allery
      </h1>
      <div className="gallery-container">
        <div className="gallery-card-container">
          <a href="https://www.instagram.com/p/CMKC7t_l2s3/" target="blank">
            <img src={insta1} alt="insta1" />
            <FaInstagram className="insta-icon" />
          </a>
        </div>
        <div className="gallery-card-container">
          <a href="https://www.instagram.com/p/CMKC6ScFcLy/" target="blank">
            <img src={insta2} alt="insta2" />
            <FaInstagram className="insta-icon" />
          </a>
        </div>
        <div className="gallery-card-container">
          <a href="https://www.instagram.com/p/CMKC4wQFhwO/" target="blank">
            <img src={insta3} alt="insta3" />
            <FaInstagram className="insta-icon" />
          </a>
        </div>
        <div className="gallery-card-container">
          <a href="https://www.instagram.com/p/CMKCzwtldg6/" target="blank">
            <img src={insta4} alt="insta4" />
            <FaInstagram className="insta-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
