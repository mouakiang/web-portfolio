import React from "react";
import "./about.css";
import feimg from "../../assets/front-end development.png"
import beimg from "../../assets/back-end development.png";
import fsimg from "../../assets/full-stack development.png";
import profile from '../../assets/head-image.png'

const about = () => {
  return (
    <section id="about">
      <span className="about-title">What I Do</span>
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
                <h2>Full-Stack Development</h2>
                <p>Both Front-End and Back-End Development with additional skills such as:
                    <br/>
                    MOCHA || CHAI || KNEX || GIT || GITHUB || ADOBE PHOTOSHOP || ADOBE LIGHTROOM
                </p>
            </div>
        </div>
        <div className="about-single-bar">
            <img src={feimg} alt="front-end" className="about-bar-img"/>
            <div className="about-bar-text">
                <h2>Front-End Development</h2>
                <p><b>TECH STACK:</b> HTML || CSS || JAVASCRIPT || REACT.JS || JQUERY || BOOTSTRAP</p>
            </div>
        </div>
        <div className="about-single-bar">
            <img src={beimg} alt="back-end" className="about-bar-img"/>
            <div className="about-bar-text">
                <h2>Back-End Development</h2>
                <p><b>TECH STACK:</b>  NODE.JS || EXPRESS || RESTFUL APIS || POSTGRESQL</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default about;
