import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigation = useNavigate()
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* <div style={{display:'flex', justifyContent:'flex-start'}} className="column">
          <img src={require("../assets/logo.png")} alt="CX Consultants" style={{ width: '20%', height: '60%', objectFit: 'contain' }} />
        </div> */}

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
          <p onClick={()=> navigation('/Privacy')}>Privacy Policy</p>
          <p onClick={()=> navigation('/Terms')}>Terms of Service</p>
        </div>

        <div className="column">
          <h3>Contact Info</h3>
          <p>📞 +91 98765 43210</p>
          <p>📧 compliancexconsultants@gmail.com</p>
          <p>📍 Bangalore, India</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
