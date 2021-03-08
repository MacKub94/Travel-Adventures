import React from "react";
import "./SingleTrip.css";
import { useParams } from "react-router-dom";

const SingleTrip = () => {
  console.log(useParams());
  return (
    <div className="single-trip">
      <h1>{useParams().destination}</h1>
    </div>
  );
};

export default SingleTrip;
