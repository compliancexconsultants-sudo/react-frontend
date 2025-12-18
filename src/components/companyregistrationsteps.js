import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { motion, AnimatePresence } from "framer-motion";

import step1 from "../animations/step1-details.json";
import step2 from "../animations/step2-documents.json";
import step3 from "../animations/step3-verification.json";
import step4 from "../animations/step4-success.json";

const steps = [
  { title: "Submit Details", anim: step1 },
  { title: "Upload Documents", anim: step2 },
  { title: "Government Verification", anim: step3 },
  { title: "Company Registered", anim: step4 },
];

export default function CompanyRegistrationSteps() {
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768
  );

  /* ========= LOOPING PROGRESS ========= */
  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += 1;
      if (value > 100) value = 0;
      setProgress(value);
    }, 60);

    return () => clearInterval(interval);
  }, []);

  /* ========= MOBILE DETECTION ========= */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  const activeStep = Math.floor(progress / 25);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Company Registration Process</h2>
      <p style={styles.subHeading}>
        Simple, transparent & government compliant process
      </p>

      {/* ========= PROGRESS BAR ========= */}
      <div style={styles.progressTrack}>
        <motion.div
          style={{
            ...styles.progressFill,
            width: `${progress}%`,
          }}
        />
      </div>

      {/* ========= STEPS ========= */}
      <div
        style={{
          ...styles.stepsWrapper,
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "center" : "flex-start",
        }}
      >
        {steps.map((step, i) => (
          <div key={i} style={styles.stepSlot}>
            <AnimatePresence>
              {activeStep >= i && (
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={styles.stepCard}
                >
                  <div style={styles.animBox}>
                    <Lottie animationData={step.anim} loop />
                  </div>

                  <h4 style={styles.stepTitle}>
                    Step {i + 1}
                  </h4>
                  <p style={styles.stepText}>{step.title}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ===================== INLINE STYLES ===================== */

const styles = {
  container: {
    padding: "90px 40px",
    background:
      "linear-gradient(180deg, #f8fafc 0%, #eef2f7 100%)",
  },

  heading: {
    textAlign: "center",
    fontSize: "34px",
    fontWeight: 700,
    marginBottom: "10px",
  },

  subHeading: {
    textAlign: "center",
    color: "#6b7280",
    marginBottom: "60px",
    fontSize: "16px",
  },

  progressTrack: {
    width: "75%",
    height: "6px",
    margin: "0 auto 70px",
    background: "#e5e7eb",
    borderRadius: "20px",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    background:
      "linear-gradient(90deg, #2563eb, #38bdf8)",
    transition: "width 0.4s linear",
  },

  stepsWrapper: {
    display: "flex",
    justifyContent: "space-between",
    gap: "30px",
  },

  stepSlot: {
    flex: 1,
    minHeight: "260px",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },

  stepCard: {
    background: "#ffffff",
    borderRadius: "18px",
    padding: "30px 20px",
    width: "100%",
    maxWidth: "260px",
    boxShadow:
      "0 20px 40px rgba(0,0,0,0.06)",
    textAlign: "center",
  },

  animBox: {
    width: "160px",
    margin: "0 auto",
  },

  stepTitle: {
    marginTop: "15px",
    fontSize: "18px",
    fontWeight: 600,
  },

  stepText: {
    fontSize: "14px",
    color: "#6b7280",
  },
};
