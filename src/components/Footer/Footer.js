import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        <h4>&copy; Travel Adventures {new Date().getFullYear()}</h4>
        <div className="footer-socials">
          <a href="https://www.facebook.com/" target="blank">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/" target="blank">
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
