import React from "react";
import "./Contact.css";
import { BsFillEnvelopeOpenFill } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact</h2>
          <h4>email: contact@traveladventures.com</h4>
          <h4>number: 777 999 888</h4>
        </div>
        <div className="newsletter">
          <BsFillEnvelopeOpenFill className="contact-icon" />
          <h2>Subscribe to our newsletter</h2>
          <form>
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
