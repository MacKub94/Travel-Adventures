import React from "react";
import "./Trips.css";
import tripdata from "./TripsData";
import { Link } from "react-router-dom";
import TripCard from "./TripCard";

const Trips = () => {
  console.log(tripdata);
  return (
    <section id="trips" className="trips">
      <h1 className="section-title">
        <span>N</span>ext <span>T</span>rips
      </h1>
      <div className="cards-container">
        {tripdata.map((trip) => {
          return <TripCard trip={trip} />;
        })}
      </div>
    </section>
  );
};

export default Trips;
