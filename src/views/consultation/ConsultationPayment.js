import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import { useLocation, useNavigate } from "react-router-dom";

const ConsultationPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const amount = location.state?.amount || 1499;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      const rzp = new window.Razorpay({
        key: "rzp_test_B1yiin6Xj6Y5tY",
        amount: amount * 100,
        currency: "INR",
        name: "LegalHub - Legal Consultation",
        description: "Consultation Payment",
        handler: () => navigate("/payment-success"),
        theme: { color: "#14274D" },
      });
      rzp.open();
    };
    document.body.appendChild(script);
  }, []);

  return (
    <Layout>
      <h1>Redirecting to Payment...</h1>
      <p>Amount: ₹{amount}</p>
    </Layout>
  );
};

export default ConsultationPayment;
