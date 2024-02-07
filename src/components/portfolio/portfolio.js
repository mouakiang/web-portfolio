import React from "react";
import "./portfolio.css";
import restres from "../../assets/restaurant-reservation.png";
import clientsite from "../../assets/clientsite.jpg";
import kjane from "../../assets/kjanemouaphotography.com.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h1 className="myportfolio">Projects</h1>
      <div className="portfolio-images">
        <a
          href="https://client-website.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={clientsite}
            alt="client website"
            className="portfolio-img-one"
          />
        </a>
        <a
          href="https://kjanemouaphotography.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={kjane}
            alt="kjanemouaphotography"
            className="portfolio-img-two"
          />
        </a>
      </div>
      <div className="portfolio-single">
      <a
          href="https://restaurant-reservation-front-end-njh9.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={restres}
            alt="Restaurant Reservation"
            className="portfolio-img-three"
          />
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
