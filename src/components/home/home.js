import React from "react";
import "./home.css";
import resume from "../../assets/resume.pdf";
import bg from "../../assets/computer.png";

const home = () => {
  return (
    <section id="home">
      <div className="home-content image">
        <span className="hello">Hello, </span>
        <span className="intro-text">
          I'm <span className="intro-name">Kia,</span>
          <br />
          <span className="developer">Software Engineer</span>
        </span>
        <p className="intro-p">
          I am a <b>Software Engineer</b> with experience in building Full-Stack
          Web Applications focusing on <i>JavaScript </i>and <i>React.js.</i>
        </p>
        <a className="btn btn-success" href={resume} download="resume.pdf">
          Resume
        </a>
      </div>
    </section>
  );
};

export default home;
