import React from "react";
import Layout from "../../components/Layout";
import "./About.css";

const About = () => {
  return (
    <Layout>
      <div className="about-container fade-up">

        <section className="about-hero">
          <h1>About LegalHub</h1>
          <p>
            LegalHub is your trusted partner for legal, tax, and compliance services.
            We simplify complex legal processes with expert CA and legal professionals.
          </p>
        </section>

        <section className="about-grid">
          <div className="about-card pop">
            <h2>Our Mission</h2>
            <p>
              To make legal and financial services accessible, transparent, and affordable for everyone.
            </p>
          </div>

          <div className="about-card pop">
            <h2>Our Vision</h2>
            <p>
              Empowering businesses with seamless compliance and professional legal support.
            </p>
          </div>

          <div className="about-card pop">
            <h2>Why Choose Us?</h2>
            <p>
              5,000+ happy customers, 100+ experts, and 24/7 support for your business.
            </p>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default About;
