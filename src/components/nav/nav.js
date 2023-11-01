import React from "react";
import "./nav.css";
import logo from "../../assets/logo-s.png";

const nav = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <img src="" alt="" />
      <div className="desktop-menu"></div>
    </nav>
  );
};

export default nav;
