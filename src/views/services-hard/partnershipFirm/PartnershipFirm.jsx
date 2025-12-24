import Layout from "../../../components/Layout";
import data from "./partnershipFirm.data";
import "./ServiceDetails.css";
import { useEffect, useLayoutEffect } from "react";

export default function PartnershipFirm() {
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
            <button className="hero-cta">Start Registration →</button>
          </div>
        </section>

        {/* QUICK SUMMARY */}
        <Section title="Why Register a Partnership?">
          <div className="check-grid">
            {data.quickSummary.map((q, i) => (
              <div key={i} className="check-row">✔ {q}</div>
            ))}
          </div>
        </Section>

        {/* ABOUT */}
        <Section title={data.about.title} subtle>
          <p className="text-block">{data.about.content}</p>
        </Section>

        {/* TYPES */}
        <Section title="Types of Partnerships in India">
          <div className="check-grid">
            {data.types.map((t, i) => (
              <div key={i} className="check-row">✔ {t}</div>
            ))}
          </div>
        </Section>

        {/* ELIGIBILITY */}
        <Section title="Who Can Form a Partnership?" subtle>
          <div className="check-grid">
            {data.eligibility.map((e, i) => (
              <div key={i} className="check-row">✔ {e}</div>
            ))}
          </div>
        </Section>

        {/* ADVANTAGES */}
        <Section title="Advantages of Partnership Registration">
          <div className="benefit-strip">
            {data.advantages.map((a, i) => (
              <div key={i} className="benefit-item reveal">
                <span>★</span>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* LIMITATIONS */}
        <Section title="Important Limitations & Risks" subtle>
          <div className="check-grid">
            {data.limitations.map((l, i) => (
              <div key={i} className="check-row">⚠ {l}</div>
            ))}
          </div>
        </Section>

        {/* DEED */}
        <Section title="Partnership Deed — Essential Clauses">
          <div className="check-grid">
            {data.deedClauses.map((d, i) => (
              <div key={i} className="check-row">✔ {d}</div>
            ))}
          </div>
        </Section>

        {/* DOCUMENTS */}
        <Section title="Documents Required" subtle>
          <div className="doc-grid">
            {data.documents.map((d, i) => (
              <div key={i} className="doc-pill reveal">{d}</div>
            ))}
          </div>
        </Section>

        {/* PROCESS */}
        <Section title="Step-by-Step Registration Process">
          <div className="process-flow">
            {data.process.map((p, i) => (
              <div key={i} className="process-node reveal">
                <div className="node-index">{i + 1}</div>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* FEES */}
        <Section title="Fees & Stamp Duty" subtle>
          <div className="check-grid">
            {data.fees.map((f, i) => (
              <div key={i} className="check-row">
                <strong>{f.label}:</strong> {f.value}
              </div>
            ))}
          </div>
        </Section>

        {/* COMPLIANCE */}
        <Section title="Tax & Compliance After Registration">
          <div className="check-grid">
            {data.compliance.map((c, i) => (
              <div key={i} className="check-row">✔ {c}</div>
            ))}
          </div>
        </Section>

        {/* COMPARISON */}
        <Section title="Partnership vs LLP vs Company">
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

        {/* PARTNER TYPES */}
        <Section title="Types of Partners">
          <div className="check-grid">
            {data.partnerTypes.map((p, i) => (
              <div key={i} className="check-row">✔ {p}</div>
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
        <Section title="Quick Checklist — Get Started">
          <div className="check-grid">
            {data.checklist.map((c, i) => (
              <div key={i} className="check-row">✔ {c}</div>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <section className="final-cta reveal">
          <h2>Start Your Partnership with ComplianceX Consultants</h2>
          <p>Expert guidance, clear pricing & fast turnaround</p>
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
