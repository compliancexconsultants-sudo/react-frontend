import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="column">
          <h2 className="footer-logo">⚖️ LegalHub</h2>
          <p>Your trusted partner for legal & CA services.</p>
        </div>

        <div className="column">
          <h3>Services</h3>
          <p>ITR Filing</p>
          <p>GST Registration</p>
          <p>Company Registration</p>
          <p>Trademark</p>
        </div>

        <div className="column">
          <h3>Company</h3>
          <p>About Us</p>
          <p>Contact</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>

        <div className="column">
          <h3>Contact Info</h3>
          <p>📞 +91 98765 43210</p>
          <p>📧 info@legalhub.com</p>
          <p>📍 Bangalore, India</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
