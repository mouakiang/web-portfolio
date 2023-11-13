import React from "react";
import './contact.css';

const contact = () => {
    return (
        <div id="contact">
            <h1 className="contact-title">Contact Me</h1>
            <span className="contact-info">Please fill out the form below and I will get back to you as soon as I can.</span>
            <form className="contact-form">
            <input type="text" className="name" placeholder="Your Name" />
            <input type="email" className="email" placeholder="Your email" />
            <textarea className="msg" name="message" rows="5" placeholder="Enter message here"></textarea>
            <button type="submit" value="Send" className="submitBtn">Submit</button>
            </form>
        </div>
    )
}

export default contact;