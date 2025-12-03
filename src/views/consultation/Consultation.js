import React from "react";
import Layout from "../../components/Layout";
import "./Consultation.css";
import { useNavigate } from "react-router-dom";

const Consultation = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <section className="lc-intro fade-up">
        <h1 className="lc-title">Legal Consultation Services</h1>
        <p className="lc-desc">
          Get expert legal advice for personal, business, and corporate matters.
          Our panel of experienced advocates, legal advisors, and consultants 
          ensure you get the right guidance and fast resolution.
        </p>

        <div className="lc-highlights">
          <div className="lc-card pop">
            <div className="lc-icon">📞</div>
            <h3>Instant Consultation</h3>
            <p>Connect with legal experts within minutes.</p>
          </div>

          <div className="lc-card pop">
            <div className="lc-icon">⚖️</div>
            <h3>Experienced Lawyers</h3>
            <p>Advocates with 10+ years of industry experience.</p>
          </div>

          <div className="lc-card pop">
            <div className="lc-icon">💼</div>
            <h3>Business & Personal</h3>
            <p>Legal advice for contracts, disputes, compliance & more.</p>
          </div>
        </div>
      </section>

      {/* CONSULTATION TYPES */}
      <section className="docs-section fade-up">
        <h2>Types of Legal Consultations</h2>
        <p className="docs-sub">
          Choose your legal requirement:
        </p>

        <div className="docs-grid">
          {[
            { icon: "📑", text: "Contract Review" },
            { icon: "🏛️", text: "Civil / Criminal Matters" },
            { icon: "🧾", text: "Business Compliance" },
            { icon: "🏢", text: "Company Law Consultation" },
            { icon: "💼", text: "Employment / HR Legal" },
            { icon: "📜", text: "Property & Land Disputes" }
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
            onClick={() => navigate("/consultation/submit-details")}
          >
            Book Consultation
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Consultation;
