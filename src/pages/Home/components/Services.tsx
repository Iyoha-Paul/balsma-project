import React from "react";
import ServiceLogo from "../img/ServiceLogo.svg";

const Services = () => {
  return (
    <div className="services">
      <div className=" container">
        <h2>Services</h2>
        <div className="service-list">
          <div className="service-list__service">
            <img src={ServiceLogo} alt="Service Logo" />
            <h3>WEB DESIGN</h3>
            <p>
              We help your businesses achieve outstanding solutions by applying
              industry standard tools and solutions
            </p>
          </div>
          <div className="service-list__service">
            <img src={ServiceLogo} alt="Service Logo" />
            <h3>WEB DESIGN</h3>
            <p>
              We help your businesses achieve outstanding solutions by applying
              industry standard tools and solutions
            </p>
          </div>
          <div className="service-list__service">
            <img src={ServiceLogo} alt="Service Logo" />
            <h3>GRAPHICS DESIGN</h3>
            <p>
              We help your businesses achieve outstanding solutions by applying
              industry standard tools and solutions
            </p>
          </div>
          <div className="service-list__service">
            <img src={ServiceLogo} alt="Service Logo" />
            <h3>GRAPHICS DESIGN</h3>
            <p>
              We help your businesses achieve outstanding solutions by applying
              industry standard tools and solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
