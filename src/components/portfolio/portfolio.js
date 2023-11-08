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
        <img
          src={restres}
          alt="restaurant reservation"
          className="portfolio-img-one"
        />
        <img src={movies} alt="we love movies" className="portfolio-img-two" />
      </div>
    </section>
  );
};

export default portfolio;
