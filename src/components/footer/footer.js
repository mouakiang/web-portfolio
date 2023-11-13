import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div id="footer">
      <div className="social-links">
        <a
          target="_blank"
          rel="nonreferrer noreferrer"
          href="https://www.linkedin.com/in/kiangmoua/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#EDEDE9" />
        </a>

        <a
          target="_blank"
          rel="nonreferrer noreferrer"
          href="https://github.com/mouakiang"
        >
          <FontAwesomeIcon icon={faGithub} color="#EDEDE9" />
        </a>

        <a
          target="_blank"
          rel="nonreferrer noreferrer"
          href="https://thinkful.slack.com/team/U04MJ7QJ0DS"
        >
          <FontAwesomeIcon icon={faSlack} color="#EDEDE9" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
