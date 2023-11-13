import React from "react";
import "./portfolio.css";
import restres from "../../assets/restaurant-reservation.png";
import movies from "../../assets/we-love-movies.png";
import game from "../../assets/game-demo.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h1 className="myportfolio">Projects</h1>
      <div className="portfolio-images">
        <a
          href="https://restaurant-reservation-front-end-njh9.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={restres}
            alt="restaurant reservation"
            className="portfolio-img-one"
          />
        </a>
        <a
          href="https://we-love-movies-frontend-hegh.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={movies}
            alt="we love movies"
            className="portfolio-img-two"
          />
        </a>
      </div>
      <div className="portfolio-single">
      <a
          href="https://mouakiang.github.io/game-demo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={game}
            alt="game demo"
            className="portfolio-img-three"
          />
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
