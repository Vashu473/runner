import React from "react";
import "../../assets/utilities/css/hero.css";
const Hero = ({ up, left }) => {
  return (
    <div id="hero-container" style={{ top: up, left: left }}>
      <img src="img/runner.gif" alt="hero" id="hero" />
    </div>
  );
};

export default Hero;
