import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import "./Privacy.css";

const Privacy = () => {

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
      <div className="privacy-container fade-up">

        {/* HEADER */}
        <section className="privacy-hero">
          <h1>Privacy Policy</h1>
          <p>Last Updated: January 2025</p>
        </section>

        {/* CONTENT */}
        <section className="privacy-content">

          <p>
            At ComplianceX Consultants (“we”, “us”, “our”), your privacy is important.
            This Privacy Policy explains how we collect, use, disclose, and protect your
            personal information when you visit and use
            https://compliancexconsultants.in/ (the “Website”).
          </p>

          <h2>1. Information We Collect</h2>
          <p>We collect personal information when you:</p>

          <ul>
            <li>Fill out a contact form</li>
            <li>Submit an inquiry</li>
            <li>Sign up for newsletters or alerts</li>
          </ul>

          <p>Personal data may include:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name</li>
            <li>Any additional information you provide</li>
          </ul>

          <p>We may also automatically collect:</p>
          <ul>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Pages visited</li>
            <li>Time spent on pages</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>Responding to your inquiries</li>
            <li>Providing requested services</li>
            <li>Improving our Website</li>
            <li>Sending updates (with consent)</li>
            <li>Preventing fraud or misuse</li>
          </ul>

          <p>
            We do not use your data for purposes inconsistent with this Privacy Policy.
          </p>

          <h2>3. Cookies and Tracking</h2>
          <p>
            We may use cookies and similar technologies to improve performance and
            personalize experience. You may manage cookies through browser settings.
          </p>

          <h2>4. Data Sharing</h2>
          <p>We do NOT sell or rent personal information.</p>

          <p>We may share your data with:</p>
          <ul>
            <li>Service providers</li>
            <li>Legal authorities (if required)</li>
            <li>Affiliates or partners (with consent)</li>
          </ul>

          <h2>5. Data Security</h2>
          <p>
            We implement reasonable security measures, but acknowledge no system is entirely secure.
          </p>

          <h2>6. Third-Party Links</h2>
          <p>
            Our Website may contain third-party links. We are not responsible for their practices.
          </p>

          <h2>7. Your Rights</h2>
          <ul>
            <li>Access your data</li>
            <li>Update or correct details</li>
            <li>Request deletion</li>
            <li>Withdraw consent</li>
          </ul>

          <p>To exercise rights, contact us at: support@compliancexconsultants.in</p>

          <h2>8. Children’s Privacy</h2>
          <p>
            Our Website is not for children under 13. If such data is collected, we will delete it.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy. Continued use of the Website means acceptance.
          </p>

          <h2>10. Contact</h2>
          <p>
            📧 compliancexconsultants@gmail.com <br />
            Bangalore
          </p>

        </section>

      </div>
    </Layout>
  );
};

export default Privacy;
