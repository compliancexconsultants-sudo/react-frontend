import Layout from "../../../components/Layout";
import data from "./opcRegistration.data";
import "./ServiceDetails.css";
import { useEffect, useLayoutEffect } from "react";

export default function OPCRegistration() {
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
            <button className="hero-cta">Start OPC Registration →</button>
          </div>
        </section>

        {/* ABOUT */}
        <Section title={data.about.title}>
          <p className="text-block">{data.about.content}</p>
        </Section>

        {/* KEY FEATURES */}
        <Section title="Key Features of an OPC" subtle>
          <div className="check-grid">
            {data.keyFeatures.map((f, i) => (
              <div key={i} className="check-row">✔ {f}</div>
            ))}
          </div>
        </Section>

        {/* BENEFITS */}
        <Section title="Benefits of Registering an OPC">
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
        <Section title="OPC Registration Process — Step by Step" subtle>
          <div className="process-flow">
            {data.process.map((p, i) => (
              <div key={i} className="process-node reveal">
                <div className="node-index">{i + 1}</div>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* DOCUMENTS */}
        <Section title="Documents Required for OPC Registration">
          <div className="doc-grid">
            {data.documents.map((d, i) => (
              <div key={i} className="doc-pill reveal">{d}</div>
            ))}
          </div>
        </Section>

        {/* COST */}
        <Section title="OPC Registration Cost & Timeline" subtle>
          <div className="check-grid">
            {data.costTimeline.map((c, i) => (
              <div key={i} className="check-row">
                <strong>{c.label}:</strong> {c.value}
              </div>
            ))}
          </div>
        </Section>

        {/* COMPLIANCE */}
        <Section title="Post-Registration Compliance for OPC">
          <div className="check-grid">
            {data.compliance.map((c, i) => (
              <div key={i} className="check-row">✔ {c}</div>
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

        {/* CTA */}
        <section className="final-cta reveal">
          <h2>Register Your OPC with ComplianceX Consultants</h2>
          <p>Fast, transparent & expert-led OPC registration</p>
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
