import React from "react";
import Hero from "../components/Hero/Hero";
import Trips from "../components/Trips/Trips";
import About from "../components/About/About";
import Gallery from "../components/Gallery/Gallery";
import Footer from "../components/Footer/Footer";
import SectionDivider from "../components/SectionDivider/SectionDivider";

const Home = () => {
  return (
    <>
      <Hero />
      <Trips />
      <SectionDivider divider={"first-divider"} />
      <About />
      <SectionDivider divider={"second-divider"} />
      <Gallery />
      <Footer />
    </>
  );
};

export default Home;
