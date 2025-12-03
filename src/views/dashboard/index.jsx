import React from "react";
import Layout from "../../components/Layout";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("legalhubUser"));

  return (
    <Layout>
      {/* ================= HERO ================= */}
      <section className="new-hero">
        <div className="hero-content">
          <h1>
            Smart Legal & CA Solutions  
            <span> {`${''}`}For Modern Businesses</span>
          </h1>

          <p className="hero-desc">
            From GST filing to company registration — your complete compliance 
            partner. Transparent pricing, expert CA support, and 24x7 assistance.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => navigate("/services")}>
              Explore Services
            </button>
            <button className="secondary-btn" onClick={() => navigate("/tax-calculator")}>
              Try Tax Calculator
            </button>
          </div>

          <div className="hero-stats">
            <div><h2>5,000+</h2><p>Clients Served</p></div>
            <div><h2>120+</h2><p>Certified Experts</p></div>
            <div><h2>98%</h2><p>Success Rate</p></div>
          </div>
        </div>

        <div className="hero-image">
          <img src={require("../../assets/office.jpg")} alt="LegalHub" />
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="new-services">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Fast, reliable and affordable services handled by experts.
        </p>

        <div className="new-services-grid">
          {[
            {
              icon: "📄",
              title: "ITR Filing",
              text: "File income tax returns with expert CA support.",
              price: "₹ 8999",
              link: "/itr",
            },
            {
              icon: "📊",
              title: "GST Registration",
              text: "Register your GST quickly with zero hassle.",
              price: "₹ 6999",
              link: "/gst-registration",
            },
            {
              icon: "📈",
              title: "GST Filing",
              text: "Monthly & yearly GST filing handled by professionals.",
              price: "₹ 4999",
              link: "/gst-filing",
            },
            {
              icon: "🏢",
              title: "Company Registration",
              text: "Register a Pvt Ltd company with expert legal support.",
              price: "₹ 8999",
              link: "/company-registration",
            },
            {
              icon: "™️",
              title: "Trademark Registration",
              text: "Secure your brand identity with trademark protection.",
              price: "₹ 6999",
              link: "/trademark",
            },
            {
              icon: "🤝",
              title: "Legal Consultation",
              text: "Connect with expert lawyers & advisors instantly.",
              price: "₹ 1499",
              link: "/legal-consultation",
            },
            {
              icon: "🧮",
              title: "Tax Calculator",
              text: "Smart automated tax calculator for all incomes.",
              price: "Free Tool",
              link: "/tax-calculator",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="new-service-card"
              onClick={() => navigate(item.link)}
            >
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="service-price">{item.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="why-modern">
        <h2 className="section-title">Why Businesses Choose Us</h2>
        <p className="section-subtitle">We make compliance simple and stress-free.</p>

        <div className="why-modern-grid">
          <div className="why-modern-card">
            <div className="icon">🛡️</div>
            <h3>Secure & Trusted</h3>
            <p>
              Bank-grade security to keep your data and documents safe at all times.
            </p>
          </div>

          <div className="why-modern-card">
            <div className="icon">⚡</div>
            <h3>Fast Processing</h3>
            <p>
              Quick approvals and filings with guaranteed on-time delivery.
            </p>
          </div>

          <div className="why-modern-card">
            <div className="icon">👨‍💼</div>
            <h3>Expert Support</h3>
            <p>
              Get dedicated support from certified CAs, lawyers and tax experts.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="modern-cta">
        <h2>Start Your Legal Journey Today</h2>
        <p>Your business deserves a smooth and professional compliance partner.</p>

        <button
          className="primary-btn cta-btn"
          onClick={() =>user ? navigate("/services") : navigate("/signup")}
        >
          Get Started
        </button>
      </section>
    </Layout>
  );
};

export default Dashboard;
