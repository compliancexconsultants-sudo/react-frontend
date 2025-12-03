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
          Have questions? Need help? Our team is here for you.
        </p>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>📞 Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="contact-card">
            <h3>📧 Email</h3>
            <p>support@legalhub.com</p>
          </div>

          <div className="contact-card">
            <h3>📍 Address</h3>
            <p>Bangalore, Karnataka, India</p>
          </div>
        </div>

        <form className="contact-form">
          <Input  placeholder="Your Name" className="input" />
          <Input placeholder="Your Email" className="input" />
          <Input placeholder="Subject" className="input" />
          <TextArea rows={4} placeholder="Your Message" className="input" />

          <Button type="primary" className="send-button">Send Message</Button>
        </form>

      </div>
    </Layout>
  );
};

export default Contact;
