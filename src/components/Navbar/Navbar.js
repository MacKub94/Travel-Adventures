import React, { useEffect, useState, useContext } from "react";
import "./Navbar.css";
import logo from "../../images/Logo-White.png";
import { FaBars, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
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
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <div className="menu-bars" onClick={toogleSidebar}>
          <FaBars />
        </div>
        <ul className="nav-links">
          <LinkS to="trips" smooth={true} offset={-70}>
            <li>Trips</li>
          </LinkS>
          <LinkS to="about" smooth={true} offset={-70}>
            <li>About Us</li>
          </LinkS>
          <LinkS to="gallery" smooth={true} offset={-70}>
            <li>Gallery</li>
          </LinkS>
          <LinkS to="contact">
            <li>Contact</li>
          </LinkS>
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
