import React from "react";
import "./home.css";
import bg from "../../assets/coding-head.png";
import resume from "../../assets/resume.png";

const home = () => {
  return (
    <section id="home">
      <div className="home-content">
        <span className="hello">Hello, </span>
        <span className="intro-text">
          I'm <span className="intro-name">Kia</span>
          <br />Web Developer
        </span>
        <p className="intro-p">
          I am a Web Developer with experience in building Full-Stack Web
          Applications focusing on JavaScript and React.js.
        </p>
        <a className="btn btn-success" href={resume}>
          Resume
        </a>
      </div>
      <img src={bg} alt="coding head" className="bg" />
    </section>
  );
};

export default home;
