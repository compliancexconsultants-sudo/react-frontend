import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import "./Terms.css";

const Terms = () => {

  // Scroll Animation
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <div className="terms-container fade-up">

        <section className="terms-hero">
          <h1>Terms & Conditions</h1>
          <p>
            Last Updated: January 2025
          </p>
        </section>

        <section className="terms-content">
          <p>
            Welcome to ComplianceX Consultants (“we”, “us”, “our”). These Terms &
            Conditions govern your use of https://compliancexconsultants.in/
            (the “Website”). By accessing or using the Website, you agree to be bound by these Terms.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using this Website, you agree to comply with these Terms &
            Conditions and applicable laws. If you do not agree, you must not use this Website.
          </p>

          <h2>2. Services</h2>
          <p>
            ComplianceX Consultants provides business compliance, tax, and registration
            services including:
          </p>
          <ul>
            <li>Company registration</li>
            <li>GST registration & filing</li>
            <li>Income tax filing</li>
            <li>ROC compliance</li>
            <li>Statutory advisory</li>
          </ul>

          <p>
            Service details and fees are provided on this Website or on request.
            All services are subject to acceptance by ComplianceX Consultants.
          </p>

          <h2>3. User Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate and complete information.</li>
            <li>Ensure any submitted material does not violate laws or rights.</li>
            <li>Use the Website lawfully.</li>
          </ul>

          <h3>You must not:</h3>
          <ul>
            <li>Use the Website unlawfully or harmfully.</li>
            <li>Interfere with Website security or functionality.</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            All Website content is the intellectual property of ComplianceX Consultants.
            Unauthorized copying or distribution is prohibited.
          </p>

          <h2>5. Third-Party Links</h2>
          <p>
            We may link to third-party sites but are not responsible for their content or practices.
          </p>

          <h2>6. Disclaimer</h2>
          <p>
            Website information is for general purposes only and not professional advice.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            We are not liable for any damages arising from Website use or reliance on its content.
          </p>

          <h2>8. Changes to Terms</h2>
          <p>
            We may update these Terms anytime. Continued Website use means acceptance.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms are governed by the laws of India. Disputes fall under Indian jurisdiction.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            📧 compliancexconsultants@gmail.com<br />
            📍 Bangalore
          </p>
        </section>

      </div>
    </Layout>
  );
};

export default Terms;
