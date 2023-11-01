import React from "react";
import "./nav.css";
import logo from "../../assets/logo-s.png";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faLaptop,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const nav = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktop-menu">
        <Link className="nav-link">
          <FontAwesomeIcon icon={faHouse} className="fa-2x" />
        </Link>
        <Link className="nav-link">
          <FontAwesomeIcon icon={faUser} className="fa-2x" />
        </Link>
        <Link className="nav-link">
          <FontAwesomeIcon icon={faLaptop} className="fa-2x" />
        </Link>
        <Link className="nav-link">
          <FontAwesomeIcon icon={faEnvelope} className="fa-2x" />
        </Link>
      </div>
    </nav>
  );
};

export default nav;
