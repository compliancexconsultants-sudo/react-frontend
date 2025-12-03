import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import { useLocation, useNavigate } from "react-router-dom";

const GSTPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const amount = location.state?.amount || 7999;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      const rzp = new window.Razorpay({
        key: "rzp_test_B1yiin6Xj6Y5tY",
        amount: amount * 100,
        currency: "INR",
        name: "LegalHub - GST Registration",
        description: "GST Registration Payment",
        handler: () => navigate("/payment-success"),
        theme: { color: "#4f46e5" },
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

export default GSTPayment;
