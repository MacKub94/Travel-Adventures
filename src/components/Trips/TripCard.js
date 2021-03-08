import React from "react";
import "./TripCard.css";
import { Link } from "react-router-dom";

const TripCard = ({ trip }) => {
  const { id, img, price, title, date } = trip;
  return (
    <Link to={`/${title}`}>
      <div className="card-container">
        <img src={img} alt="card" />
        <h1>{title}</h1>
        <h3>{date}</h3>
        <h4>${price}</h4>
      </div>
    </Link>
  );
};

export default TripCard;
