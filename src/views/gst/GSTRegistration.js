import React from "react";
import Layout from "../../components/Layout";
import "./GST.css";
import { useNavigate } from "react-router-dom";

const GSTRegistration = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <section className="gst-intro fade-up">
        <h1 className="gst-title">GST Registration Services</h1>
        <p className="gst-desc">
          Register your business under GST quickly and efficiently. Our experts
          ensure a smooth and hassle-free registration process with complete
          documentation support.
        </p>

        <div className="gst-highlights">
          <div className="gst-card pop">
            <div className="gst-icon">⚡</div>
            <h3>Fast Processing</h3>
            <p>Complete GST registration within 48 hours.</p>
          </div>

          <div className="gst-card pop">
            <div className="gst-icon">📄</div>
            <h3>End-to-End Handling</h3>
            <p>Everything handled by experts — zero mistakes.</p>
          </div>

          <div className="gst-card pop">
            <div className="gst-icon">📞</div>
            <h3>Expert Support</h3>
            <p>CA-assisted guidance during entire process.</p>
          </div>
        </div>
      </section>

      {/* DOCUMENTS REQUIRED */}
      <section className="docs-section fade-up">
        <h2>Documents Required for GST Registration</h2>
        <p className="docs-sub">
          Keep these documents ready to speed up your registration:
        </p>

        <div className="docs-grid">
          {[
            { icon: "🧑‍💼", text: "PAN Card of Proprietor / Company" },
            { icon: "🪪", text: "Aadhaar Card" },
            { icon: "📄", text: "Business Registration Proof" },
            { icon: "📜", text: "Address Proof (Electricity Bill)" },
            { icon: "🏦", text: "Bank Statement / Cancelled Cheque" },
            { icon: "📸", text: "Passport Size Photograph" },
            { icon: "📍", text: "Office Address Proof" },
          ].map((item, index) => (
            <div key={index} className="doc-card doc-pop">
              <div className="doc-icon">{item.icon}</div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="itr-submit-btn">
          <button
            className="primary-btn big-btn"
            onClick={() => navigate("/gst/submit-documents")}
          >
            Submit Documents
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default GSTRegistration;
