import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import Lottie from "lottie-react";
import successAnim from "../../assets/success.json";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const amount = location.state?.amount || 4999;

  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    if (isPaid) return; // prevent Razorpay opening again

    const loadRazorpay = () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        const options = {
          key: "rzp_test_B1yiin6Xj6Y5tY",
          amount: amount * 100,
          currency: "INR",
          name: "LegalHub - ITR Filing",
          description: "ITR Filing Payment",
          handler: (response) => {
            setIsPaid(true);

            // Redirect in 3 sec
            setTimeout(() => {
              navigate("/");
            }, 3000);
          },
          theme: { color: "#4f46e5" }
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      };

      document.body.appendChild(script);
    };

    loadRazorpay();
  }, [amount, navigate, isPaid]);

  return (
    <Layout>
      {!isPaid ? (
        <>
          <h1>Redirecting to Payment...</h1>
          <p>Amount: ₹{amount}</p>
        </>
      ) : (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Lottie
            animationData={successAnim}
            style={{ height: 240, margin: "auto" }}
          />
          <h1>Payment Successful!</h1>
          <p>You will be redirected to the Dashboard shortly...</p>
        </div>
      )}
    </Layout>
  );
};

export default Payment;
