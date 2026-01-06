import Layout from "../../../components/Layout";
import data from "./llpRegistration.data";
import "./ServiceDetails.css";
import { useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LLPRegistration() {
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
              Start LLP Registration →
            </button>
          </div>
        </section>

        {/* ABOUT */}
        <Section title={data.about.title}>
          <p className="text-block">{data.about.content}</p>
        </Section>

        {/* KEY FEATURES */}
        <Section title="Key Features of an LLP" subtle>
          <div className="check-grid">
            {data.keyFeatures.map((f, i) => (
              <div key={i} className="check-row">
                ✔ {f}
              </div>
            ))}
          </div>
        </Section>

        {/* WHY CHOOSE INTRO */}
        <Section title="Why Register an LLP with ComplianceX Consultants">
          <p className="text-block">{data.whyChooseIntro}</p>
        </Section>

        {/* PACKAGE */}
        <Section title="Our LLP Registration Package Includes" subtle>
          <div className="check-grid">
            {data.packageIncludes.map((p, i) => (
              <div key={i} className="check-row">
                ✔ {p}
              </div>
            ))}
          </div>
        </Section>

        {/* BENEFITS */}
        <Section title="Benefits of Registering an LLP">
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
        <Section title="Documents Required" subtle>
          <h3>Documents of Partners</h3>
          <div className="doc-grid">
            {data.documents.partners.map((d, i) => (
              <div key={i} className="doc-pill reveal">
                {d}
              </div>
            ))}
          </div>

          <h3 style={{ marginTop: 24 }}>Registered Office Documents</h3>
          <div className="doc-grid">
            {data.documents.registeredOffice.map((d, i) => (
              <div key={i} className="doc-pill reveal">
                {d}
              </div>
            ))}
          </div>

          <h3 style={{ marginTop: 24 }}>Additional Requirements</h3>
          <div className="doc-grid">
            {data.documents.additional.map((d, i) => (
              <div key={i} className="doc-pill reveal">
                {d}
              </div>
            ))}
          </div>
        </Section>

        {/* ELIGIBILITY */}
        <Section title="Eligibility for LLP Registration">
          <div className="table-shell reveal">
            <table>
              <thead>
                <tr>
                  {data.eligibilityTable.headers.map((h, i) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.eligibilityTable.rows.map((r, i) => (
                  <tr key={i}>
                    <td>{r[0]}</td>
                    <td>{r[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* PROCESS */}
        <Section title="Step-by-Step LLP Registration Process" subtle>
          <div className="process-flow">
            {data.process.map((p, i) => (
              <div key={i} className="process-node reveal">
                <div className="node-index">{i + 1}</div>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CHECKLIST */}
        <Section title="LLP Incorporation Checklist">
          <div className="table-shell reveal">
            <table>
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Description</th>
                  <th>Timeline</th>
                </tr>
              </thead>
              <tbody>
                {data.incorporationChecklist.map((c, i) => (
                  <tr key={i}>
                    <td>{c.task}</td>
                    <td>{c.desc}</td>
                    <td>{c.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* ANNUAL COMPLIANCE */}
        <Section title="Annual Compliance Calendar for LLPs" subtle>
          <div className="table-shell reveal">
            <table>
              <thead>
                <tr>
                  {data.annualCompliance.headers.map((h, i) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.annualCompliance.rows.map((r, i) => (
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

        {/* TAXATION */}
        <Section title="LLP Taxation Overview">
          <div className="check-grid">
            {data.taxation.map((t, i) => (
              <div key={i} className="check-row">
                ✔ {t}
              </div>
            ))}
          </div>
        </Section>

        {/* COMPARISON */}
        <Section title="LLP vs Private Limited Company vs Partnership">
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
          <h2>Register Your LLP with ComplianceX Consultants</h2>
          <p>Expert handling, transparent pricing & fast turnaround</p>
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
