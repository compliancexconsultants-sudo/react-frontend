import Layout from "../../../components/Layout";
import data from "./trustSocietyRegistration.data";
import "./ServiceDetails.css";
import { useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TrustSocietyRegistration() {
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

        <Section title={data.introduction.title}>
          <p className="text-block">{data.introduction.content}</p>
        </Section>

        {/* TRUST */}
        <Section title={data.trust.title} subtle>
          <p className="text-block">{data.trust.content}</p>
          <div className="check-grid">
            {data.trust.uses.map((u, i) => (
              <div key={i} className="check-row">
                ✔ {u}
              </div>
            ))}
          </div>
        </Section>

        {/* SOCIETY */}
        <Section title={data.society.title}>
          <p className="text-block">{data.society.content}</p>
          <div className="check-grid">
            {data.society.uses.map((u, i) => (
              <div key={i} className="check-row">
                ✔ {u}
              </div>
            ))}
          </div>
        </Section>

        {/* COMPARISON */}
        <Section title="Trust vs Society" subtle>
          <div className="table-shell reveal">
            <table>
              <thead>
                <tr>
                  {data.trustVsSociety.headers.map((h, i) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.trustVsSociety.rows.map((r, i) => (
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

        {/* BENEFITS */}
        <Section title="Benefits of Registration">
          <div className="benefit-strip">
            {data.benefits.map((b, i) => (
              <div key={i} className="benefit-item reveal">
                <span>★</span>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* DOCUMENTS */}
        <Section title="Documents Required for Trust Registration" subtle>
          <div className="doc-grid">
            {data.documentsTrust.map((d, i) => (
              <div key={i} className="doc-pill reveal">
                {d}
              </div>
            ))}
          </div>
        </Section>

        <Section title="Documents Required for Society Registration">
          <div className="doc-grid">
            {data.documentsSociety.map((d, i) => (
              <div key={i} className="doc-pill reveal">
                {d}
              </div>
            ))}
          </div>
        </Section>

        {/* PROCESS */}
        <Section title="Step-by-Step Trust Registration Process" subtle>
          <div className="process-flow">
            {data.processTrust.map((p, i) => (
              <div key={i} className="process-node reveal">
                <div className="node-index">{i + 1}</div>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Step-by-Step Society Registration Process">
          <div className="process-flow">
            {data.processSociety.map((p, i) => (
              <div key={i} className="process-node reveal">
                <div className="node-index">{i + 1}</div>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* COMPLIANCE */}
        <Section title="Post-Registration Compliance" subtle>
          <div className="table-shell reveal">
            <table>
              <thead>
                <tr>
                  {data.postCompliance.headers.map((h, i) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.postCompliance.rows.map((r, i) => (
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

        {/* LEGAL ACTS */}
        <Section title="Key Legal Acts">
          <div className="check-grid">
            {data.legalActs.map((l, i) => (
              <div key={i} className="check-row">
                ✔ {l}
              </div>
            ))}
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

        {/* CHECKLIST */}
        <Section title="Checklist to Get Started">
          <div className="check-grid">
            {data.checklist.map((c, i) => (
              <div key={i} className="check-row">
                ✔ {c}
              </div>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <section className="final-cta reveal">
          <h2>Register Your Trust or Society with ComplianceX Consultants</h2>
          <p>End-to-end support, legal clarity & ongoing compliance</p>
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
