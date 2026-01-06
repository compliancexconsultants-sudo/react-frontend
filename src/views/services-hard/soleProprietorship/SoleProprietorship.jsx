import Layout from "../../../components/Layout";
import data from "./soleProprietorship.data";
import "./ServiceDetails.css";
import { useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SoleProprietorship() {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("active");
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <Layout>
      <div className="svc-root">
        {/* HERO */}
        <section className="hero-glass">
          <div className="hero-content reveal">
            <h1>{data.hero.title}</h1>
            <p className="hero-sub">{data.hero.subtitle}</p>
            <p className="hero-desc">{data.hero.description}</p>
            <button
              onClick={() => navigate("/SubmitDocuments")}
              className="hero-cta"
            >
              Start Registration →
            </button>
          </div>
        </section>

        {/* ABOUT */}
        <Section title={data.about.title}>
          <p className="text-block">{data.about.content}</p>
        </Section>

        {/* KEY FEATURES */}
        <Section title="Key Features" subtle>
          <div className="check-grid">
            {data.keyFeatures.map((f, i) => (
              <div key={i} className="check-row">
                ✔ {f}
              </div>
            ))}
          </div>
        </Section>

        {/* BENEFITS */}
        <Section title="Benefits of Sole Proprietorship Registration">
          <div className="benefit-strip">
            {data.benefits.map((b, i) => (
              <div key={i} className="benefit-item reveal">
                <span>★</span>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* PROCESS */}
        <Section title="Steps to Register a Sole Proprietorship">
          <div className="process-flow">
            {data.process.map((p, i) => (
              <div key={i} className="process-node reveal">
                <div className="node-index">{i + 1}</div>
                <p>{p}</p>
              </div>
            ))}
          </div>
          <p className="muted center">{data.timeline}</p>
        </Section>

        {/* DOCUMENTS */}
        <Section title="Documents Required" subtle>
          <div className="doc-grid">
            {data.documents.map((d, i) => (
              <div key={i} className="doc-pill reveal">
                {d}
              </div>
            ))}
          </div>
        </Section>

        {/* COST */}
        <Section title="Cost & Timeline">
          <div className="check-grid">
            {data.costTimeline.map((c, i) => (
              <div key={i} className="check-row">
                <strong>{c.label}:</strong> {c.value}
              </div>
            ))}
          </div>
        </Section>

        {/* COMPLIANCE */}
        <Section title="Tax & Compliance Requirements" subtle>
          <div className="check-grid">
            {data.compliance.map((c, i) => (
              <div key={i} className="check-row">
                ✔ {c}
              </div>
            ))}
          </div>
        </Section>

        {/* BANK ACCOUNT */}
        <Section title="Bank Account Setup (ComplianceX Consultants Assistance)">
          <div className="doc-grid">
            {data.bankAccount.map((b, i) => (
              <div key={i} className="doc-pill reveal">
                {b}
              </div>
            ))}
          </div>
        </Section>

        {/* COMPARISON */}
        <Section title="Sole Proprietorship vs One Person Company">
          <div className="table-shell reveal">
            <table>
              <thead>
                <tr>
                  {data.comparison.headers.map((h, i) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.comparison.rows.map((r, i) => (
                  <tr key={i}>
                    {r.map((c, j) => (
                      <td key={j}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* WHY CHOOSE */}
        <section className="trust-band">
          <h2 className="reveal">Why Choose ComplianceX Consultants?</h2>
          <div className="trust-grid">
            {data.whyChoose.map((w, i) => (
              <div key={i} className="trust-point reveal">
                {w}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="final-cta reveal">
          <h2>Launch Your Business with ComplianceX Consultants</h2>
          <p>
            Fast, affordable & expert-backed sole proprietorship registration
          </p>
          <button>Get Started →</button>
        </section>
      </div>
    </Layout>
  );
}

const Section = ({ title, children, subtle }) => (
  <section className={`svc-section ${subtle ? "subtle" : ""}`}>
    <h2 className="reveal">{title}</h2>
    {children}
  </section>
);
