import React from "react";
import Layout from "../../components/Layout";
import "./ITR.css";
import { useNavigate } from "react-router-dom";
const ITR = () => {
    const navigate = useNavigate();

    return (
        <Layout>

            {/* ========== ITR INTRO SECTION ========== */}
            <section className="itr-intro fade-up">
                <h1 className="itr-title">ITR Filing Services</h1>
                <p className="itr-desc">
                    Filing your Income Tax Return (ITR) is crucial to stay compliant and avoid penalties.
                    Our expert CA team ensures accurate filing, maximized deductions, and a stress-free process.
                    Whether you are a salaried employee, freelancer, or business owner, we make your ITR filing simple and fast.
                </p>

                <div className="itr-highlights">

                    <div className="itr-card pop">
                        <div className="itr-icon">⚡</div>
                        <h3>Fast Processing</h3>
                        <p>Submit your details and get your ITR filed within 24 hours.</p>
                    </div>

                    <div className="itr-card pop">
                        <div className="itr-icon">🔒</div>
                        <h3>Secure Filing</h3>
                        <p>Bank-level encryption to protect all your financial data.</p>
                    </div>

                    <div className="itr-card pop">
                        <div className="itr-icon">📞</div>
                        <h3>Expert Support</h3>
                        <p>Dedicated CA assistance throughout the entire filing process.</p>
                    </div>



                </div>
            </section>

            {/* ========== DOCUMENTS REQUIRED (ANIMATED) ========== */}
            <section className="docs-section fade-up">
                <h2>Documents Required for ITR Filing</h2>
                <p className="docs-sub">
                    Make sure you have these documents ready before filing your return:
                </p>

                <div className="docs-grid">

                    {[
                        { icon: "🧾", text: "Form 16 from your employer" },
                        { icon: "🏦", text: "Bank statements / passbook" },
                        { icon: "💼", text: "Salary slips (if applicable)" },
                        { icon: "📄", text: "Aadhaar & PAN Card" },
                        { icon: "📊", text: "Investment proofs (80C, 80D etc.)" },
                        { icon: "🧮", text: "Home loan interest certificate" },
                        { icon: "📑", text: "Rent receipts for HRA claim" },
                        { icon: "🏠", text: "Capital gains statements" },
                        { icon: "💰", text: "Income from other sources details" },
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
                        onClick={() => navigate("/itr/submit-documents")}
                    >
                        Submit Documents
                    </button>
                </div>
            </section>

        </Layout>
    );
};

export default ITR;
