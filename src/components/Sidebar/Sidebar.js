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
    </aside>
  );
};

export default Sidebar;
