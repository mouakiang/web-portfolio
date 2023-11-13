import React from "react";
import { Link } from "react-scroll";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const footer = () => {
  return (
    <div id="footer">
      <div className="social-links">
        <Link className="contact-link">
          <FontAwesomeIcon icon={faGithub} className="fa-2x" />
        </Link>
        <Link className="contact-link">
          <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
        </Link>
      </div>
    </div>
  );
};

export default footer;
