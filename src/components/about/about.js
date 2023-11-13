import React from "react";
import "./about.css";
import fsimg from "../../assets/full-stack development.png";
import profile from '../../assets/head-image.png'

const About = () => {
  return (
    <section id="about">
      <img src={profile} alt="head profile" className="head-image"/>
      <span className="about-info">
        I am a passionate Full-Stack Software Engineer, skilled in JavaScript,
        React, Node.js, and more, with a love for crafting both front-end and
        back-end solutions.
      </span>
      <div className="about-bars">
        <div className="about-single-bar">
            <img src={fsimg} alt="full-stack" className="about-bar-img"/>
            <div className="about-bar-text">
                <h2>TECH-STACK</h2>
                <p>FRONT-END: HTML || CSS || JAVASCRIPT || REACT.JS || JQUERY || BOOTSTRAP
                    <br/>
                    BACK-END: NODE.JS || EXPRESS || RESTFUL APIS || POSTGRESQL
                    <br/>
                    ETC: MOCHA || CHAI || KNEX || GIT || GITHUB || ADOBE PHOTOSHOP || ADOBE LIGHTROOM
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
