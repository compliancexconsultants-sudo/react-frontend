import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Layout from "../../components/Layout";
import uploadAnim from "../../assets/upload.json";
import reviewAnim from "../../assets/review.json";
import fileAnim from "../../assets/filling.json";
import doneAnim from "../../assets/done.json";
import { useNavigate } from "react-router-dom";

const Processing = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  useEffect(() => {
    const steps = [0, 1, 2, 3];

    let i = 0;
    const interval = setInterval(() => {
      setStep(steps[i]);
      i++;

      if (i === steps.length) {
        clearInterval(interval);
        setTimeout(() => navigate("/itr/payment"), 1500);
      }
    }, 2500);
  }, []);

  const animations = [
    { anim: uploadAnim, text: "Uploading Your Documents..." },
    { anim: reviewAnim, text: "CA is Reviewing Your Files..." },
    { anim: fileAnim, text: "Filing Your ITR with Income Tax Dept..." },
    { anim: doneAnim, text: "ITR Filing Completed!" }
  ];

  return (
    <Layout>
      <div className="processing-container fade-up">
        <Lottie animationData={animations[step].anim} style={{ height: 280 }} />
        <h2>{animations[step].text}</h2>
      </div>
    </Layout>
  );
};

export default Processing;
