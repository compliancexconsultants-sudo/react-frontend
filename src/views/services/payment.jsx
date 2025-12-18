import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import Lottie from "lottie-react";
import successAnim from "../../assets/success.json";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const amount = location.state?.amount || 0;
  const caseId = location.state?.caseId || null;
  const serviceName = location.state?.serviceName || "Selected Service";

  const [isPaid, setIsPaid] = useState(false);

  // 🔒 prevents multiple Razorpay opens
  const razorpayOpenedRef = useRef(false);

  useEffect(() => {
    if (!amount || isPaid || razorpayOpenedRef.current) return;

    razorpayOpenedRef.current = true; // 🔐 lock

    const loadRazorpay = () => {
      // avoid re-injecting script
      if (window.Razorpay) {
        openRazorpay();
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;

      script.onload = openRazorpay;
      document.body.appendChild(script);
    };

    const openRazorpay = () => {
      const options = {
        key: "rzp_test_B1yiin6Xj6Y5tY",
        amount: amount * 100,
        currency: "INR",
        name: `LegalHub - ${serviceName}`,
        description: `${serviceName} Payment`,

        handler: function (response) {
          setIsPaid(true);

          setTimeout(() => {
            navigate("/orders", {
              state: {
                caseId,
                serviceId: id,
                paymentId: response.razorpay_payment_id,
              },
            });
          }, 3000);
        },

        modal: {
          ondismiss: function () {
            console.log("Payment popup closed");
            // ❌ DO NOT reopen
          },
        },

        prefill: { name: "LegalHub User" },
        theme: { color: "#199A8D" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    };

    loadRazorpay();
  }, [amount, isPaid, navigate, id, caseId, serviceName]);

  return (
    <Layout>
      {!isPaid ? (
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <h1>Redirecting to Payment...</h1>
          <p><strong>Service:</strong> {serviceName}</p>
          <p><strong>Amount:</strong> ₹{amount}</p>
        </div>
      ) : (
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Lottie animationData={successAnim} style={{ height: 240 }} />
          <h1>Payment Successful 🎉</h1>
          <p>Redirecting to your orders…</p>
        </div>
      )}
    </Layout>
  );
};

export default Payment;
