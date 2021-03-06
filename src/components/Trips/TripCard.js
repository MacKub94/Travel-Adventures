import React from "react";
import "./TripCard.css";

const TripCard = ({ trip }) => {
  const { id, img, price, title, date } = trip;
  return (
    <div className="card-container">
      <img src={img} alt="card" />
      <h1>{title}</h1>
      <h3>{date}</h3>
      <h4>${price}</h4>
    </div>
  );
};

export default TripCard;
