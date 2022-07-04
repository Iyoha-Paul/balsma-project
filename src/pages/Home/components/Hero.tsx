import React from "react";
import Navigation from "../assets/Navigation";
import HeroImg from "../img/HeroImg.svg";

const Hero = () => {
  return (
    <div
      className="hero"
      style={{
        background: `url(${HeroImg})no-repeat center / cover`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <header className="header">
          <h1>
            Derele
            <br />
            Paul
          </h1>
          <Navigation />
        </header>

        <div className="hero__text">
          <p>
            Trendy <br />
            Fashion
          </p>
          <div className="hero__text__btn">
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
