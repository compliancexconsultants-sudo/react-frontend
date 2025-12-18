import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import API from "../../utils/api";
import "./ServiceDetails.css";
import { Spin } from "antd";

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadService();
  }, [id]);

  const loadService = async () => {
    try {
      const res = await API.get(`/services/${id}`);
      setService(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  if (loading)
    return (
      <Layout>
        <div className="center-spinner">
          <Spin size="large" />
        </div>
      </Layout>
    );

  if (!service)
    return (
      <Layout>
        <h2 style={{ padding: 20 }}>Service not found</h2>
      </Layout>
    );

  return (
    <Layout>
      <div className="service-container fade-up">

        {/* ================= STEP INDICATOR ================= */}
        <div className="step-indicator">
          <div className="step-box active">
            <span className="step-number">1</span>
            <p>Documents</p>
          </div>

           <div className="step-line"></div>

          <div className="step-box">
            <span className="step-number">2</span>
            <p>Verification</p>
          </div>

          <div className="step-line"></div>

          <div className="step-box">
            <span className="step-number">3</span>
            <p>Payment</p>
          </div>

          <div className="step-line"></div>

          <div className="step-box">
            <span className="step-number">4</span>
            <p>Confirmation</p>
          </div>
        </div>

        {/* ================= INTRO SECTION ================= */}
        <section className="service-hero">
          <h1 className="service-title">{service.name}</h1>
          <p className="service-sub">{service.content}</p>

          <div className="service-highlight-grid">
            <div className="highlight-new-card">
              <div className="highlight-icon-circle">⚡</div>
              <h3>Fast Processing</h3>
              <p>Handled by expert CA teams.</p>
            </div>

            <div className="highlight-new-card">
              <div className="highlight-icon-circle">🔒</div>
              <h3>Secure</h3>
              <p>Your documents are fully protected.</p>
            </div>

            <div className="highlight-new-card">
              <div className="highlight-icon-circle">🤝</div>
              <h3>Expert Support</h3>
              <p>Get assistance whenever you need.</p>
            </div>
          </div>
        </section>

        {/* ================= DOCUMENTS SECTION ================= */}
        <section className="docs-section">
          <h2 className="docs-title">Documents Required</h2>
          <p className="docs-sub">Please upload the following documents.</p>

          <div className="docs-grid">
            {service.documents?.map((doc, index) => (
              <div key={index} className="doc-card">
                <div className="doc-icon">📄</div>
                <p>{doc.label}</p>
              </div>
            ))}
          </div>

          <button
            className="primary-btn big-btn submit-docs-btn"
            onClick={() => navigate(`/service/${id}/submit-documents`)}
          >
            Proceed to Upload Documents →
          </button>
        </section>
      </div>
    </Layout>
  );
};

export default ServiceDetail;
