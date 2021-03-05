import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../images/Logo-White.png";

const Navbar = () => {
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
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Navbar;
