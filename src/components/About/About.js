import React from "react";
import "./About.css";
import person1 from "../../images/person-1.png";
import person2 from "../../images/person-2.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about">
      <h1 className="section-title">
        <span>A</span>bout <span>U</span>s
      </h1>
      <div className="about-container">
        <div className="person-container">
          <img src={person1} alt="person1" />
          <h2 className="name">Sophia Smith</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            dolorem modi molestias possimus quaerat iste soluta reiciendis
            consequuntur laudantium rerum!
          </p>
          <div className="socials">
            <a href="https://www.facebook.com/" target="blank">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/" target="blank">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com/" target="blank">
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="person-container">
          <img src={person2} alt="person2" />

          <h2 className="name">John Smith</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            dolorem modi molestias possimus quaerat iste soluta reiciendis
            consequuntur laudantium rerum!
          </p>
          <div className="socials">
            <a href="https://www.facebook.com/" target="blank">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/" target="blank">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com/" target="blank">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
