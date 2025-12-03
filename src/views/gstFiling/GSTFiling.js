import React from "react";
import Layout from "../../components/Layout";
import "./GSTFiling.css";
import { useNavigate } from "react-router-dom";

const GSTFiling = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <section className="gstf-intro fade-up">
        <h1 className="gstf-title">GST Filing Services</h1>
        <p className="gstf-desc">
          Ensure accurate and timely GST filing every month or quarter.
          Our expert CA team handles all tax calculations, input credits,
          and compliance requirements for your business.
        </p>

        <div className="gstf-highlights">
          <div className="gstf-card pop">
            <div className="gstf-icon">📊</div>
            <h3>Accurate Filing</h3>
            <p>All GST return forms (GSTR-1, 3B, 9) handled professionally.</p>
          </div>

          <div className="gstf-card pop">
            <div className="gstf-icon">⏱️</div>
            <h3>Timely Submission</h3>
            <p>Never miss a due date — we file before deadlines.</p>
          </div>

          <div className="gstf-card pop">
            <div className="gstf-icon">📞</div>
            <h3>Dedicated CA Support</h3>
            <p>Monthly GST expert support at your fingertips.</p>
          </div>
        </div>
      </section>

      {/* ========== DOCUMENTS REQUIRED ========== */}
      <section className="docs-section fade-up">
        <h2>Documents Required for GST Filing</h2>
        <p className="docs-sub">
          Keep the following ready for quick and seamless GST filing:
        </p>

        <div className="docs-grid">
          {[
            { icon: "📄", text: "Sales Invoices (B2B & B2C)" },
            { icon: "🧾", text: "Purchase Invoices" },
            { icon: "🏦", text: "Bank Statements" },
            { icon: "📊", text: "Input Tax Credit Summary" },
            { icon: "💼", text: "Expense Bills" },
            { icon: "📅", text: "Previous Filing Summary" },
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
            onClick={() => navigate("/gst-filing/submit-documents")}
          >
            Submit Filing Documents
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default GSTFiling;
