import React from "react";
import "./portfolio.css";
import restres from "../../assets/restaurant-reservation.png";
import movies from "../../assets/we-love-movies.png";

const portfolio = () => {
  return (
    <section id="portfolio">
      <h1 className="myportfolio">My Portfolio</h1>
      <span className="portfolio-info">
        My portfolio showcases a progression of projects where I've applied a
        blend of front-end and back-end technologies to solve complex problems.
        From designing responsive user interfaces to architecting server-side
        solutions, each project underscores my commitment to building scalable,
        efficient, and user-centric software. Dive into my work to see how I've
        leveraged JavaScript, React, Node.js, and a suite of other technologies
        to deliver seamless digital experiences.
      </span>
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
    </section>
  );
};

export default portfolio;
