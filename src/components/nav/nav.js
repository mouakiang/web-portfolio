import React from "react";
import "./nav.css";
import logo from "../../assets/logo-s.png";
import { Link } from "react-scroll";


const nav = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktop-menu">
        <Link className="nav-link">Home</Link>
        <Link className="nav-link">About</Link>
        <Link className="nav-link">Projects</Link>
        <Link className="nav-link">Contact</Link>
      </div>
    </nav>
  );
};

export default nav;
