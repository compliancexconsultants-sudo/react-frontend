import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import "./Dashboard.css";
import WhatWeDoImg from "../../assets/what-we-do.svg";
import CompanyRegistrationSteps from "../../components/companyregistrationsteps";
import Lottie from "lottie-react";
import BusinessSupport from "../../animations/office.json";
import API from "../../utils/api";
import { ToastContainer, toast } from "react-toastify";
const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("legalhubUser"));
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const validate = () => {
    let temp = {};

    if (!form.name.trim()) temp.name = "Full name is required";

    if (!form.email) temp.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      temp.email = "Enter valid email";

    if (!form.phone) temp.phone = "Phone number is required";
    else if (!/^[6-9]\d{9}$/.test(form.phone))
      temp.phone = "Enter valid 10-digit phone";

    if (!form.service) temp.service = "Please select a service";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };
  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;

  try {
    await API.post("/contactus/contact", {
      name: form.name,
      email: form.email,
      phoneNumber: form.phone,
      service: form.service,
    });

    toast.success("Request submitted successfully!");
  } catch (err) {
    console.log(err);
    toast.error("Something went wrong. Please try again!");
  }
};

  // const services = [
  //   { name: "ITR Filing", path: "/itr-filing" },
  //   { name: "GST Registration", path: "/gst-registration" },
  //   { name: "GST Filing", path: "/gst-filing" },
  //   { name: "Company Registration", path: "/PrivateLimited" },
  //   { name: "Trademark Registration", path: "/trademark-registration" },
  //   { name: "Legal Consultation", path: "/legal-consultation" },
  //   { name: "Tax Calculator", path: "/tax-calculator" },
  // ];
  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("active")
        );
      },
      { threshold: 0.2 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <Layout>
 <ToastContainer position="top-right" autoClose={3000} />      {/* ================= HERO ================= */}
      <section className="hero reveal">
        <div className="hero-inner">
          <span className="badge">
            Now facilitating instant business services
          </span>

          <h1>
            Simplifying Business
            <br />
            <span>Compliance in India</span>
          </h1>

          <p>
            ComplianceX Consultants is your trusted partner for company
            registration, GST compliance, income tax filing, and statutory
            compliance services in India. We support startups, professionals,
            SMEs, and growing enterprises with accurate, timely, and hassle-free
            regulatory solutions.
          </p>

          <button
            className="primary-btn"
            onClick={() => (user ? navigate("/services") : navigate("/signup"))}
          >
            Start Your Business
          </button>
        </div>
      </section>

      {/* ================= WHY + FORM ================= */}
      <section className="why-section">
        <div className="why-left reveal-left">
          <h2 style={{ color: "#203560" }}>
            Your Trusted Partner for Startup & Compliance
          </h2>
          <p>
            We help founders, startups and businesses manage compliance,
            taxation and legal requirements efficiently — so you focus on
            growth.
          </p>

          <ul>
            <li>Company & LLP Registration</li>
            <li>GST Registration & Filing</li>
            <li>Trademark & IPR Services</li>
            <li>Accounting & Taxation</li>
            <li>Startup & MSME Support</li>
          </ul>
        </div>

        <form className="why-form reveal-right" onSubmit={handleSubmit}>
          <h3>Get Free Consultation</h3>

          <input
            placeholder="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <input
            placeholder="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <input
            placeholder="Phone Number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}

          <select name="service" value={form.service} onChange={handleChange}>
            <option value="">Select Service</option>
            <option>Company Registration</option>
            <option>GST Registration</option>
            <option>ITR Filing</option>
            <option>Trademark</option>
          </select>
          {errors.service && <span className="error">{errors.service}</span>}

          <button type="submit">Request Callback</button>
        </form>
      </section>

      {/* ================= OUR SERVICES ================= */}
      <section className="services reveal">
        <h2 style={{ color: "#203560" }}>Our Services</h2>
        <p>
          Comprehensive compliance and regulatory support for startups,
          professionals and businesses across India.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <h3>Company & Business Registration</h3>
            <p>
              Private Limited Company, LLP, OPC, Partnership Firm, Sole
              Proprietorship, MSME (Udyam) registration, PAN, TAN, and DSC
              support.
            </p>
          </div>

          <div className="service-card">
            <h3>GST Registration & Compliance</h3>
            <p>
              GST registration, return filing, ITC reconciliation, amendments,
              notice handling, and audit support.
            </p>
          </div>

          <div className="service-card">
            <h3>Income Tax & ITR Filing</h3>
            <p>
              ITR filing for individuals, professionals, and businesses, advance
              tax planning, TDS compliance, and assessment support.
            </p>
          </div>

          <div className="service-card">
            <h3>ROC & Statutory Compliance</h3>
            <p>
              Annual ROC filings, Director KYC, MCA forms, statutory registers,
              and compliance monitoring.
            </p>
          </div>

          <div className="service-card">
            <h3>Advisory & Compliance Support</h3>
            <p>
              Corporate structuring, audit readiness, regulatory consultation,
              and ongoing compliance assistance.
            </p>
          </div>
        </div>
      </section>
      <section className="why-choose-section reveal">
        <h2 className="why-choose-title">Why Choose ComplianceX Consultants</h2>

        <div className="why-choose-list">
          <div className="why-box">End-to-end compliance solutions</div>
          <div className="why-box">Experienced compliance professionals</div>
          <div className="why-box">Timely filings with proactive reminders</div>
          <div className="why-box">
            Transparent process and dedicated support
          </div>
          <div className="why-box">Pan-India service coverage</div>
        </div>
      </section>

      <section>
        <CompanyRegistrationSteps />
      </section>

      {/* ================= GOOGLE REVIEWS ================= */}
      <section className="reviews reveal">
        <h2>Hear What Our Customers Have To Say</h2>

        <div className="reviews-layout">
          <div className="reviews-left">
            <h3>
              <span>ComplianceX</span> is trusted by founders to start, manage
              and grow their business
            </h3>
            <p>
              We are among India’s most reliable compliance partners, delivering
              fast, transparent and accurate services.
            </p>
          </div>

          <div className="review-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt="Google"
            />
            <p>
              “Very impressed with the service quality. Smooth process, timely
              updates and professional support throughout.”
            </p>
            <div className="review-user">
              <div className="avatar">J</div>
              <span>Jayavijaya SJ</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}

      <section className="what-we-do-section">
        <h2 className="what-we-do-label">WHAT WE DO</h2>

        <div className="what-we-do-inner">
          {/* LEFT CONTENT */}
          <div className="what-we-do-left">
            <h2>Receive support at every stage of business development.</h2>

            <p>
              Launch, grow and scale with ease. Each of our clients has a
              dedicated team that is committed to answering all queries within
              24 hours, so you can rely on our helpful and professional support
              throughout your business journey.
            </p>

            <button className="what-we-do-btn">Popular Services</button>
          </div>

          {/* RIGHT LOTTIE */}
          <div className="what-we-do-right">
            <Lottie
              animationData={BusinessSupport}
              loop={true}
              autoplay={true}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="cta reveal">
        <h2>Start Your Compliance Journey Today</h2>
        <p>
          Simple, secure and expert-driven compliance solutions for your
          business.
        </p>

        <button onClick={() => navigate("/services")}>Get Started</button>
      </section>

      {/* ================= GOOGLE REVIEWS ================= */}
      <section className="google-reviews-section">
        <h2 className="reviews-heading">
          ComplianceX – Trusted by Indian Entrepreneurs
        </h2>

        <div className="google-rating">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google"
          />
          <span className="stars">★★★★★</span>
          <span className="rating-text">4.9 out of 5 (7,864)</span>
          <span className="verified">✔ Verified</span>
        </div>

        {/* CURSOR / SLIDER */}
        <div className="reviews-cursor">
          <div className="reviews-track">
            {/* Review 1 */}
            <div className="review-card">
              <div className="review-header">
                <span className="avatar purple">J</span>
                <div>
                  <h4>Jay R</h4>
                  <span className="verified-small">✔ Verified</span>
                </div>
              </div>
              <div className="stars">★★★★★</div>
              <p>
                The experience was flawless. Team was responsive and very
                professional. Highly recommended for startups.
              </p>
              <span className="review-date">2025-09-17</span>
            </div>

            {/* Review 2 */}
            <div className="review-card">
              <div className="review-header">
                <span className="avatar blue">M</span>
                <div>
                  <h4>Mohammed Affan</h4>
                  <span className="verified-small">✔ Verified</span>
                </div>
              </div>
              <div className="stars">★★★★★</div>
              <p>
                Super smooth company registration. Fast service, clear
                communication and no hidden charges.
              </p>
              <span className="review-date">2025-07-21</span>
            </div>

            {/* Review 3 */}
            <div className="review-card">
              <div className="review-header">
                <span className="avatar green">R</span>
                <div>
                  <h4>Riyom Taipodia</h4>
                  <span className="verified-small">✔ Verified</span>
                </div>
              </div>
              <div className="stars">★★★★☆</div>
              <p>
                One of the best compliance platforms. Friendly team and quick
                turnaround.
              </p>
              <span className="review-date">2025-10-05</span>
            </div>

            {/* Duplicate for smooth loop */}
            <div className="review-card">
              <div className="review-header">
                <span className="avatar purple">J</span>
                <div>
                  <h4>Jay R</h4>
                  <span className="verified-small">✔ Verified</span>
                </div>
              </div>
              <div className="stars">★★★★★</div>
              <p>
                The experience was flawless. Team was responsive and very
                professional.
              </p>
              <span className="review-date">2025-09-17</span>
            </div>
          </div>
        </div>
      </section>
      {/* ================= FAQ SECTION ================= */}
      <section className="faq-section">
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        <p className="faq-sub">
          Answers to common questions about company registration, GST,
          compliance and taxation.
        </p>

        <div className="faq-list">
          <details className="faq-item">
            <summary>How long does company registration take in India?</summary>
            <p>
              Company registration usually takes{" "}
              <strong>7–10 working days</strong>, depending on document
              verification and government approvals.
            </p>
          </details>

          <details className="faq-item">
            <summary>Is GST registration mandatory for my business?</summary>
            <p>
              GST registration is mandatory if your turnover exceeds the
              prescribed limit or if you operate an interstate or online
              business.
            </p>
          </details>

          <details className="faq-item">
            <summary>
              What documents are required for company registration?
            </summary>
            <p>
              PAN, Aadhaar, address proof, passport-size photo of directors, and
              registered office address proof are required.
            </p>
          </details>

          <details className="faq-item">
            <summary>
              Can I register a company without a physical office?
            </summary>
            <p>
              Yes. You can register a company using a residential address as the
              registered office.
            </p>
          </details>

          <details className="faq-item">
            <summary>
              Do you provide post-registration compliance support?
            </summary>
            <p>
              Absolutely. We handle ROC filings, GST returns, accounting, and
              ongoing compliance support.
            </p>
          </details>

          <details className="faq-item">
            <summary>Is professional tax registration required?</summary>
            <p>
              Professional tax registration is mandatory in some states if you
              employ staff or pay salaries.
            </p>
          </details>

          <details className="faq-item">
            <summary>What is the cost of GST filing services?</summary>
            <p>
              GST filing charges vary based on return frequency and business
              type. Our pricing is transparent with no hidden fees.
            </p>
          </details>
        </div>
      </section>

      {/* ================= EXTRA FORM ================= */}
      <section className="cta-form reveal">
        <h3 style={{ color: "#203560" }}>Still Have Questions?</h3>
        <p>Our experts are ready to help you.</p>

        <div className="cta-form-box">
          <input placeholder="Your Name" />
          <input placeholder="Email" />
          <input placeholder="Phone" />
          <button>Talk to Expert</button>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
