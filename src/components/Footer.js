import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const navigation = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-content">

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
          <p onClick={() => navigation("/Privacy")}>Privacy Policy</p>
          <p onClick={() => navigation("/Terms")}>Terms of Service</p>
        </div>

        <div className="column">
          <h3>Contact Info</h3>
          <p>📞 +91 8310792708</p>
          <p>📧 compliancexconsultants@gmail.com</p>
          <p>📍 Bangalore, India</p>

          {/* ===== Social Icons ===== */}
          <div className="footer-socials">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
