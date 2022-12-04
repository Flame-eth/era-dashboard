import React from "react";
import { useSelector } from "react-redux";
import Hero from "../components/Hero/Hero";
import Carousel from "../components/Carousel/Carousel";
import Info from "../components/Info/Info";
import About from "../components/About/About";
import Teams from "../components/Teams/Teams";
import Video from "../components/video/Video";

const Homepage = () => {
  const { mode } = useSelector((state) => state.mode);
  return (
    <div style={{ backgroundColor: mode && "#f0e1e1" }}>
      <Hero />
      <Carousel />

      <Info />
      <Video />
      <Teams />
      <About />
    </div>
  );
};

export default Homepage;
