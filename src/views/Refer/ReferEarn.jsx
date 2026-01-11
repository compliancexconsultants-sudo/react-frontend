import React, { useState } from "react";
import "./ReferEarn.css";
import Layout from "../../components/Layout";
import API from "../../utils/api"; // adjust path if needed
import { ToastContainer, toast } from "react-toastify";

export default function ReferEarn() {
  const [form, setForm] = useState({
    referrerName: "",
    referrerMobile: "",
    clientName: "",
    clientMobile: "",
    clientEmail: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await API.post("/refer/refer", {
        referrerName: form.referrerName,
        referrerMobile: form.referrerMobile,
        name: form.clientName,
        phone: form.clientMobile,
        email: form.clientEmail,
        service: "GST Registration",
      });

      setSuccess(true);
      setLoading(false);

      setForm({
        referrerName: "",
        referrerMobile: "",
        clientName: "",
        clientMobile: "",
        clientEmail: "",
      });
      toast.success("Referrel submitted successfully!");
    } catch (err) {
      setLoading(false);
      toast.error("Something went wrong. Please try again!");
      console.error(err);
    }
  };

  return (
    <>
      {/* ===== SEO FAQ Schema ===== */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How much can I earn per referral?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You earn ₹1,000 for every successful referral after payment completion.",
              },
            },
            {
              "@type": "Question",
              name: "When will I receive the ₹1,000?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "After the referred client completes payment for an eligible service.",
              },
            },
            {
              "@type": "Question",
              name: "Is there any limit on referrals?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. You can earn unlimited ₹1,000 rewards.",
              },
            },
          ],
        })}
      </script>
      <Layout>
        <ToastContainer position="top-right" autoClose={3000} />{" "}
        <div className="refer-container">
          {/* ===== HERO ===== */}
          <div className="refer-banner">
            <h1>
              Refer a Client & Earn <span>₹1,000</span>
            </h1>
            <p>
              Earn ₹1,000 for every successful referral after payment
              completion.
            </p>
            <a href="#refer-form" className="refer-btn">
              Refer Now & Earn ₹1,000
            </a>
          </div>

          {/* ===== HOW IT WORKS ===== */}
          <div className="refer-section">
            <h2>How the ₹1,000 Refer & Earn Program Works</h2>
            <ol>
              <li>Refer a client who needs compliance services</li>
              <li>Client completes payment with ComplianceX Consultants</li>
              <li>
                You receive <strong>₹1,000</strong>
              </li>
            </ol>
          </div>

          {/* ===== SERVICES ===== */}

          {/* ===== FORM ===== */}
          <div className="refer-section" id="refer-form">
            <h2>Referral Form</h2>

            <form onSubmit={handleSubmit}>
              <input
                name="referrerName"
                placeholder="Your Name"
                value={form.referrerName}
                onChange={handleChange}
                required
              />
              <input
                name="referrerMobile"
                placeholder="Your Mobile Number"
                value={form.referrerMobile}
                onChange={handleChange}
                required
              />
              <input
                name="clientName"
                placeholder="Referral Name"
                value={form.clientName}
                onChange={handleChange}
                required
              />
              <input
                name="clientMobile"
                placeholder="Referral Mobile Number"
                value={form.clientMobile}
                onChange={handleChange}
                required
              />
              <input
                name="clientEmail"
                placeholder="Referral Email"
                value={form.clientEmail}
                onChange={handleChange}
                required
              />

              <button type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit Referral"}
              </button>
            </form>

            <small>₹1,000 is paid only after payment completion.</small>
          </div>

          {/* ===== TERMS ===== */}
          <div className="refer-section">
            <h2>Terms & Conditions</h2>
            <ul>
              <li>₹1,000 paid only after payment confirmation</li>
              <li>Cancelled or unpaid services not eligible</li>
              <li>One referral = one payout</li>
              <li>Fraud referrals rejected</li>
            </ul>
          </div>

          {/* ===== WHATSAPP ===== */}
          <a
            href="https://wa.me/918310792708?text=I want to refer a client and earn ₹1,000"
            target="_blank"
            rel="noreferrer"
            className="refer-whatsapp"
          >
            📲 Refer on WhatsApp
          </a>
        </div>
      </Layout>
    </>
  );
}
