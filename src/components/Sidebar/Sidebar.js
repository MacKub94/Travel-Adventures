import React, { useContext } from "react";
import "./Sidebar.css";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { AppContext } from "../../context";

const Sidebar = () => {
  const { isSidebarOpen, toogleSidebar } = useContext(AppContext);
  return (
    <aside className={isSidebarOpen ? "active" : ""}>
      <div className="close-icon" onClick={toogleSidebar}>
        <FaTimes />
      </div>
      <ul className="sidebar-links">
        <LinkS to="trips" smooth={true} offset={-70} onClick={toogleSidebar}>
          <li>Trips</li>
        </LinkS>
        <LinkS to="about" smooth={true} offset={-70} onClick={toogleSidebar}>
          <li>About Us</li>
        </LinkS>
        <LinkS to="gallery" smooth={true} offset={-70} onClick={toogleSidebar}>
          <li>Gallery</li>
        </LinkS>
        <LinkS to="contact">
          <li>Contact</li>
        </LinkS>
      </ul>
    </aside>
  );
};

export default Sidebar;
