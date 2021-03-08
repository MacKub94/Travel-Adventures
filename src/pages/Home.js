import React from "react";
import Hero from "../components/Hero/Hero";
import Trips from "../components/Trips/Trips";
import About from "../components/About/About";
import Gallery from "../components/Gallery/Gallery";
import SectionDivider from "../components/SectionDivider/SectionDivider";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Trips />
      <SectionDivider divider={"first-divider"} />
      <About />
      <SectionDivider divider={"second-divider"} />
      <Gallery />
      <Contact />
    </>
  );
};

export default Home;
