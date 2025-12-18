import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import Lottie from "lottie-react";
import successAnim from "../../assets/success.json";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams(); // service ID

  // Values coming from navigation state
  const amount = location.state?.amount || 0;
  const caseId = location.state?.caseId || null;
  const serviceName = location.state?.serviceName || "Selected Service";

  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    if (isPaid || !amount) return;

    const loadRazorpay = () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        const options = {
          key: "rzp_test_B1yiin6Xj6Y5tY",
          amount: amount * 100,
          currency: "INR",
          name: `LegalHub - ${serviceName}`,
          description: `${serviceName} Payment`,
          handler: (response) => {
            console.log("Payment Response:", response);

            setIsPaid(true);

            // 🎯 Redirect to orders with case ID
            setTimeout(() => {
              navigate("/orders", {
                state: {
                  caseId,
                  serviceId: id,
                  paymentId: response.razorpay_payment_id,
                }
              });
            }, 3000);
          },
          prefill: {
            name: "LegalHub User"
          },
          theme: { color: "#199A8D" }
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      };

      document.body.appendChild(script);
    };

    loadRazorpay();
  }, [amount, serviceName, navigate, id, caseId, isPaid]);

  return (
    <Layout>
      {!isPaid ? (
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <h1>Redirecting to Payment...</h1>
          <p><strong>Service:</strong> {serviceName}</p>
          <p><strong>Amount:</strong> ₹{amount}</p>
        </div>
      ) : (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Lottie
            animationData={successAnim}
            style={{ height: 240, margin: "auto" }}
          />
          <h1>Payment Successful!</h1>
          <p>You will be redirected to your Orders…</p>
        </div>
      )}
    </Layout>
  );
};

export default Payment;
