import React, { useEffect, useState, useContext } from "react";
import "./Navbar.css";
import logo from "../../images/Logo-White.png";
import { FaBars, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { AppContext } from "../../context";

const Navbar = () => {
  const { toogleSidebar } = useContext(AppContext);
  const [navbarActive, setNavbarActive] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setNavbarActive(true);
    } else {
      setNavbarActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  });

  return (
    <div className={navbarActive ? "navbar active" : "navbar"}>
      <div className="navbar-container">
        <LinkR to="/" className="logo">
          <img src={logo} alt="logo" />
        </LinkR>
        <div className="menu-bars" onClick={toogleSidebar}>
          <FaBars />
        </div>
        <ul className="nav-links">
          <li>
            <LinkS to="trips">Trips</LinkS>
          </li>
          <li>
            <LinkS to="about">About Us</LinkS>
          </li>
          <li>
            <LinkS to="gallery">Gallery</LinkS>
          </li>
          <li>
            <LinkS to="contact">Contact</LinkS>
          </li>
        </ul>
        <ul className="social-icons">
          <li>
            <a href="https://www.facebook.com/" target="blank">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="blank">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
