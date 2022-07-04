import React from "react";
import AboutUsSideImg from "../img/AboutUsSideImg.svg";

const AboutUs = () => {
  return (
    <div className="abt-us">
      <div className="container">
        <div className="abt-us__description">
          <h3 className="abt-us__description__head">About Us</h3>
          <p>
            She is a product manager who has seen numerous projects from
            inception to completion. I am presently at WhoGoHost as the product
            manager.
          </p>
          <p>
            Here are some of the projects ive overseen so far in my career. Here
            are some of the projects ive overseen so far in my career.Here are
            some of the projects ive overseen so far in my career.
          </p>
        </div>

        <img
          src={AboutUsSideImg}
          alt="flower vase"
          className="abt-us__img-container__img"
        />
      </div>
    </div>
  );
};

export default AboutUs;
