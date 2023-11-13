import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xnaaen2",
        "template_teelxbj",
        form.current,
        "14qU6Gd7P1rDyhju8"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact">
      <h1 className="contact-title">Contact Me</h1>
      <span className="contact-info">
        Please fill out the form below and I will get back to you as soon as I can.
      </span>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="from_name"
        />
        <input
          type="email"
          className="email"
          placeholder="Your email"
          name="from_email"
        />
        <textarea
          className="msg"
          name="message"
          rows={5}
          placeholder="Enter message here"
        ></textarea>
        <button type="submit" value="Send" className="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

