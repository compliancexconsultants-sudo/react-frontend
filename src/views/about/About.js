import React from "react";
import Layout from "../../components/Layout";
import "./About.css";

const About = () => {
  return (
    <Layout>
      <div className="about-container fade-up">

        {/* HERO SECTION */}
        <section className="about-hero">
          <h1>About CX Consultants</h1>
          <p>
            We deliver legal, tax, and compliance solutions designed for modern businesses. 
            Our mission is to simplify complex processes through expert guidance, transparency, and reliable service.
          </p>
        </section>

        {/* GRID SECTION */}
        <section className="about-grid">
          
          <div className="about-card pop">
            <h2>Our Mission</h2>
            <p>
              To make legal, tax, and compliance services accessible, transparent, and 
              affordable — empowering businesses to focus on growth.
            </p>
          </div>

          <div className="about-card pop">
            <h2>Our Vision</h2>
            <p>
              A world where entrepreneurs and businesses can operate seamlessly with 
              full compliance and expert support at every step.
            </p>
          </div>

          <div className="about-card pop">
            <h2>Why Choose Us?</h2>
            <p>
              5,000+ happy clients, 100+ experts, fast turnaround, transparent pricing, 
              and 24/7 dedicated support — your trusted compliance partner.
            </p>
          </div>

        </section>

        {/* TEAM / STORY SECTION OPTIONAL */}
        <section className="story-card fade-up">
          <h2>Our Story</h2>
          <p>
            CX Consultants began with a simple idea — to eliminate the confusion and difficulty 
            that most individuals and businesses face in legal & compliance work.  
            Today, we proudly support thousands across India with reliable CA, CS, and legal experts.
          </p>
        </section>

      </div>
    </Layout>
  );
};

export default About;
