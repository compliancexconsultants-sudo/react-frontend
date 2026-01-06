import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import "./About.css";

const About = () => {
  useEffect(() => {
  const elements = document.querySelectorAll(".fade-up, .pop");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("in-view");
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach(el => observer.observe(el));

  return () => observer.disconnect();
}, []);
  return (
    <Layout>
      <div className="about-container fade-up">

        {/* HERO */}
        <section className="about-hero">
          <h1>About ComplianceX Consultants</h1>
          <p>
            Your Trusted Partner in Business Compliance & Growth — simplifying legal, tax,
            and corporate compliance for startups, SMEs, and enterprises across India.
          </p>
        </section>

        {/* INTRO */}
        <section className="about-intro">
          <p>
            At ComplianceX Consultants, we specialize in making business compliance simple,
            reliable, and stress-free. Navigating regulations like Company Registration,
            GST, ITR & ROC can be complex — that’s where we step in.
          </p>
        </section>

        {/* GRID */}
        <section className="about-grid">

          <div className="about-card pop">
            <h2>Our Mission</h2>
            <p>
              To empower businesses with clear, dependable, and efficient compliance solutions
              so they can focus on growth — not paperwork.
            </p>
          </div>

          <div className="about-card pop">
            <h2>Who We Are</h2>
            <p>
              A team of experienced compliance professionals with deep knowledge of Indian
              corporate & tax laws — backed by accuracy, transparency, and dedication.
            </p>
          </div>

          <div className="about-card pop">
            <h2>What We Do</h2>
            <p>
              ✔ Company Registration & MCA Compliance <br />
              ✔ GST Registration & Filing <br />
              ✔ ITR Filing & Tax Advisory <br />
              ✔ ROC Annual Returns <br />
              ✔ TDS & Regulatory Compliance
            </p>
          </div>

        </section>

        {/* VALUES */}
        <section className="values-section fade-up">
          <h2>Our Values</h2>

          <div className="values-grid">
            <div className="value-box">
              <h3>Integrity</h3>
              <p>Ethical, honest, transparent service always.</p>
            </div>

            <div className="value-box">
              <h3>Accuracy</h3>
              <p>Precise documentation & compliance execution.</p>
            </div>

            <div className="value-box">
              <h3>Timely Compliance</h3>
              <p>We never miss deadlines — your peace of mind matters.</p>
            </div>

            <div className="value-box">
              <h3>Client First</h3>
              <p>Your goals come first — always.</p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="story-card fade-up">
          <h2>Why Businesses Choose Us</h2>
          <p>
            ✔ End-to-end compliance expertise <br />
            ✔ Customized business-specific solutions <br />
            ✔ Expert guidance & fast support <br />
            ✔ Pan-India service coverage <br />
            ✔ Transparent pricing — no hidden fees
          </p>
        </section>

        {/* PROMISE */}
        <section className="story-card fade-up">
          <h2>Our Promise</h2>
          <p>
            We deliver clear guidance, proactive alerts, friendly assistance, and complete
            peace of mind — so you can grow confidently while we handle compliance.
          </p>
        </section>

        {/* CTA */}
        <section className="cta-box fade-up">
          <h2>Ready to Work With Us?</h2>
          <p>
            Contact us today for a free consultation and compliance audit.
          </p>

          <button className="about-btn">Get Consultation</button>
        </section>

      </div>
    </Layout>
  );
};

export default About;
