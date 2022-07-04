import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import * as FaIcon from "react-icons/fa";
// import * as CgIcon from "react-icons/cg";
// import CompanyLogoBlue from "../img/CompanyLogoBlue.png";
// import { IconContext } from "react-icons";
import SideNav from "./SideNav";
const Navigation = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleShowSidebar = () => {
    setShowSidebar(true);
  };
  return (
    <div className="nav">
      <SideNav setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <nav>
        <ul className="nav__links">
          <li>
            <NavLink className="link" to="/">
              Home
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="/" className="link">
              About Me
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="/" className="link">
              Projects
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="/" className="link">
              Contact Me
              <i className="fa-solid fa-arrow-up-right"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
