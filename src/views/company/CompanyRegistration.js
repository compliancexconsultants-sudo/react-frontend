import React from "react";
import Layout from "../../components/Layout";
import "./Company.css";
import { useNavigate } from "react-router-dom";

const CompanyRegistration = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <section className="comp-intro fade-up">
        <h1 className="comp-title">Pvt Ltd Company Registration</h1>
        <p className="comp-desc">
          Register your Private Limited Company with professional CA support.
          We handle end-to-end documentation, filing, and MCA approval to give 
          your business a strong legal foundation.
        </p>

        <div className="comp-highlights">
          <div className="comp-card pop">
            <div className="comp-icon">🏢</div>
            <h3>End-to-End Handling</h3>
            <p>From paperwork to final incorporation certificate.</p>
          </div>

          <div className="comp-card pop">
            <div className="comp-icon">⚖️</div>
            <h3>Legal Compliance</h3>
            <p>All MCA documentation handled professionally.</p>
          </div>

          <div className="comp-card pop">
            <div className="comp-icon">📞</div>
            <h3>Expert CA Support</h3>
            <p>Dedicated CA guidance throughout registration.</p>
          </div>
        </div>
      </section>

      {/* DOCUMENTS REQUIRED */}
      <section className="docs-section fade-up">
        <h2>Documents Required for Company Registration</h2>
        <p className="docs-sub">
          Prepare the following documents for smooth incorporation:
        </p>

        <div className="docs-grid">
          {[
            { icon: "📄", text: "PAN Card of all Directors" },
            { icon: "🪪", text: "Aadhaar / Passport / Voter ID" },
            { icon: "🏠", text: "Address Proof (Electricity / Gas Bill)" },
            { icon: "📃", text: "Director Passport Photos" },
            { icon: "📜", text: "Rental Agreement / Ownership Proof" },
            { icon: "🏦", text: "Bank Statement (Last 2 Months)" },
            { icon: "🧾", text: "NOC from Property Owner" },
          ].map((item, index) => (
            <div className="doc-card doc-pop" key={index}>
              <div className="doc-icon">{item.icon}</div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="itr-submit-btn">
          <button
            className="primary-btn big-btn"
            onClick={() => navigate("/company/submit-documents")}
          >
            Submit Documents
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default CompanyRegistration;
