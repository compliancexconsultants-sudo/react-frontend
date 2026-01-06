import Layout from "../../../components/Layout";
import data from "./hufRegistration.data";
import "./ServiceDetails.css";
import { useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HUFRegistration() {
    const navigate = useNavigate();
  
  useLayoutEffect(() => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, []);
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add("active");
        });
      },
      { threshold: 0.15 }
    );
    els.forEach(el => io.observe(el));
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
            <button onClick={() => navigate("/SubmitDocuments")} className="hero-cta">Start HUF Registration →</button>
          </div>
        </section>

        {/* OVERVIEW */}
        <Section title="Is an HUF Right for Your Family?">
          <p className="text-block">{data.quickOverview}</p>
        </Section>

        {/* ABOUT */}
        <Section title={data.about.title} subtle>
          <p className="text-block">{data.about.content}</p>
        </Section>

        {/* CHARACTERISTICS */}
        <Section title="Key Characteristics of an HUF">
          <div className="check-grid">
            {data.characteristics.map((c, i) => (
              <div key={i} className="check-row">✔ {c}</div>
            ))}
          </div>
        </Section>

        {/* BENEFITS */}
        <Section title="Benefits of Forming an HUF" subtle>
          <div className="benefit-strip">
            {data.benefits.map((b, i) => (
              <div key={i} className="benefit-item reveal">
                <span>★</span>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ELIGIBILITY */}
        <Section title="Who Can Form or Be a Member of an HUF?">
          <div className="check-grid">
            {data.eligibility.map((e, i) => (
              <div key={i} className="check-row">✔ {e}</div>
            ))}
          </div>
        </Section>

        {/* WHEN TO FORMALIZE */}
        <Section title="When Should You Formalize an HUF?" subtle>
          <div className="check-grid">
            {data.whenToFormalize.map((w, i) => (
              <div key={i} className="check-row">✔ {w}</div>
            ))}
          </div>
        </Section>

        {/* DOCUMENTS */}
        <Section title="Documents Required">
          <div className="doc-grid">
            {data.documents.map((d, i) => (
              <div key={i} className="doc-pill reveal">{d}</div>
            ))}
          </div>
        </Section>

        {/* PROCESS */}
        <Section title="Step-by-Step HUF Formalization Process" subtle>
          <div className="process-flow">
            {data.process.map((p, i) => (
              <div key={i} className="process-node reveal">
                <div className="node-index">{i + 1}</div>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* TAXATION */}
        <Section title="Taxation & Compliance for HUF">
          <div className="check-grid">
            {data.taxation.map((t, i) => (
              <div key={i} className="check-row">✔ {t}</div>
            ))}
          </div>
          <div className="check-grid" style={{ marginTop: 16 }}>
            {data.compliance.map((c, i) => (
              <div key={i} className="check-row">✔ {c}</div>
            ))}
          </div>
        </Section>

        {/* COMPARISON */}
        <Section title="How HUF Differs from Other Structures" subtle>
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

        {/* USE CASES */}
        <Section title="Common Use-Cases Where HUF Helps">
          <div className="check-grid">
            {data.useCases.map((u, i) => (
              <div key={i} className="check-row">✔ {u}</div>
            ))}
          </div>
        </Section>

        {/* FAQ */}
        <Section title="Frequently Asked Questions" subtle center>
          <div className="faq-wrap">
            {data.faqs.map((f, i) => (
              <details key={i} className="faq-item reveal">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </Section>

        {/* WHY CHOOSE */}
        <section className="trust-band">
          <h2 className="reveal">Why Choose ComplianceX Consultants?</h2>
          <div className="trust-grid">
            {data.whyChoose.map((w, i) => (
              <div key={i} className="trust-point reveal">{w}</div>
            ))}
          </div>
        </section>

        {/* CHECKLIST */}
        <Section title="Quick Checklist — Ready to Formalize Your HUF?">
          <div className="check-grid">
            {data.checklist.map((c, i) => (
              <div key={i} className="check-row">✔ {c}</div>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <section className="final-cta reveal">
          <h2>Formalize Your HUF with ComplianceX Consultants</h2>
          <p>Expert guidance, tax planning & complete documentation</p>
          <button>Get Started →</button>
        </section>

      </div>
    </Layout>
  );
}

const Section = ({ title, children, subtle, center }) => (
  <section className={`svc-section ${subtle ? "subtle" : ""} ${center ? "center" : ""}`}>
    <h2 className="reveal">{title}</h2>
    {children}
  </section>
);
