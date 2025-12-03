import React from "react";
import Layout from "../../components/Layout";
import "./Trademark.css";
import { useNavigate } from "react-router-dom";

const Trademark = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <section className="tm-intro fade-up">
        <h1 className="tm-title">Trademark Registration</h1>
        <p className="tm-desc">
          Protect your brand identity with a legally registered trademark.
          Our experts handle the complete TM process including search, filing,
          documentation, and updates from the TM registry.
        </p>

        <div className="tm-highlights">
          <div className="tm-card pop">
            <div className="tm-icon">™️</div>
            <h3>Brand Protection</h3>
            <p>Secure exclusive rights to your brand name & logo.</p>
          </div>

          <div className="tm-card pop">
            <div className="tm-icon">📄</div>
            <h3>End-to-End Filing</h3>
            <p>Search + Documentation + TM Application filing.</p>
          </div>

          <div className="tm-card pop">
            <div className="tm-icon">📞</div>
            <h3>Legal Expert Support</h3>
            <p>Trademark experts assist until approval.</p>
          </div>
        </div>
      </section>

      {/* DOCUMENTS REQUIRED */}
      <section className="docs-section fade-up">
        <h2>Documents Required for Trademark Registration</h2>
        <p className="docs-sub">
          Ensure these documents are ready before filing your TM application:
        </p>

        <div className="docs-grid">
          {[
            { icon: "🧾", text: "Logo / Brand Name" },
            { icon: "📄", text: "ID Proof (Aadhaar / Passport)" },
            { icon: "🏠", text: "Address Proof of Applicant" },
            { icon: "📁", text: "MSME Certificate (Optional)" },
            { icon: "📃", text: "Power of Attorney (TM-48)" },
            { icon: "💼", text: "Business Registration Proof" }
          ].map((doc, i) => (
            <div key={i} className="doc-card doc-pop">
              <div className="doc-icon">{doc.icon}</div>
              <p>{doc.text}</p>
            </div>
          ))}
        </div>

        <div className="itr-submit-btn">
          <button
            className="primary-btn big-btn"
            onClick={() => navigate("/trademark/submit-documents")}
          >
            Submit Documents
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Trademark;
