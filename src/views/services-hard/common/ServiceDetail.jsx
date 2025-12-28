import Layout from "../../../components/Layout";
import "./ServiceDetails.css";
import { useEffect, useLayoutEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useService } from "../../../states/ServiceContext";
function smoothScrollToTop(duration = 600) {
  const el = document.documentElement;
  const body = document.body;

  const start = el.scrollTop || body.scrollTop;
  const startTime = performance.now();

  const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

  function animate(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(progress);
    const position = start * (1 - eased);

    el.scrollTop = position;
    body.scrollTop = position;

    if (progress < 1) requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}


export default function ServiceCommonDetails() {
  const { serviceData: data } = useService();
  useLayoutEffect(() => {
    smoothScrollToTop(1300);
  }, [data]);
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

  const navigate = useNavigate();

  if (!data) return (
    <Layout>
      <h1 style={{ textAlign: "center" }}>No Data Found</h1>
    </Layout>
  );

  return (
    <Layout>
      <div className="svc-root">

        {/* HERO */}
        <section className="hero-glass">
          <div className="hero-content reveal">
            <h1>{data.hero.title}</h1>
            <p className="hero-sub">{data.hero.subtitle}</p>
            <p className="hero-desc">{data.hero.description}</p>
            <button onClick={() => navigate("/SubmitDocuments")} className="hero-cta">Start Registration →</button>
          </div>
        </section>

        {/* ABOUT */}
        <Section title={data.about.title}>
          <p className="text-block">{data.about.content}</p>
        </Section>

        {/* ELIGIBILITY */}
        <Section title="Eligibility & Minimum Requirements" subtle>
          <div className="check-grid">
            {data.eligibility.map((e, i) => (
              <div key={i} className="check-row">✔ {e}</div>
            ))}
          </div>
        </Section>

        {/* PROCESS */}
        <Section title="How Registration Works">
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
              <div key={i} className="doc-pill reveal">{d}</div>
            ))}
          </div>
        </Section>

        {/* BENEFITS */}
        <Section title="Why Private Limited Company?">
          <div className="benefit-strip">
            {data.benefits.map((b, i) => (
              <div key={i} className="benefit-item reveal">
                <span>★</span>
                <p>{b}</p>
              </div>
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

        {/* COMPARISON */}
        <Section title="Business Structure Comparison">
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

        {/* FAQ – CENTERED */}
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

        {/* CTA */}
        {/* <section className="final-cta reveal">
          <h2>Ready to Register Your Company?</h2>
          <p>Get expert guidance from ComplianceX Consultants</p>
          <button>Get Started →</button>
        </section> */}

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
