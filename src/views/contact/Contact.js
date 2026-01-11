import React from "react";
import Layout from "../../components/Layout";
import "./Contact.css";
import { Input, Button } from "antd";

const { TextArea } = Input;

const Contact = () => {
  return (
    <Layout>
      <div className="contact-container fade-up">

        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-sub">
          We're here to help! Reach out to us for support, queries, or business services.
        </p>

        {/* INFO SECTION */}
        <div className="contact-info-section">
          <div className="contact-card">
            <h3>📞 Phone</h3>
            <p>+91 8310792708</p>
          </div>

          <div className="contact-card">
            <h3>📧 Email</h3>
            <p>contact.complix@gmail.com</p>
          </div>

          <div className="contact-card">
            <h3>📍 Address</h3>
            <p>Bangalore, Karnataka, India</p>
          </div>
        </div>

        {/* FORM */}
        <div className="form-card">
          <h2>Send us a message</h2>

          <form className="contact-form">
            <Input placeholder="Your Name" className="input" />
            <Input placeholder="Your Email" className="input" />
            <Input placeholder="Subject" className="input" />
            <TextArea rows={4} placeholder="Your Message" className="textarea" />

            <Button type="primary" className="send-button">
              Send Message
            </Button>
          </form>
        </div>

        {/* MAP SECTION */}
        <div className="map-card">
          <h2>Find Us</h2>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.09283786391!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f1a4afcd%3A0xa80fadc99bb30b13!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "12px" }}
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </Layout>
  );
};

export default Contact;
