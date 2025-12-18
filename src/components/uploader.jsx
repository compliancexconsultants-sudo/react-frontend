import Lottie from "lottie-react";
import uploadAnim from "../animations/uploading.json"; // 🔁 your lottie file

export default function UploadLoader() {
  return (
    <div style={styles.overlay}>
      <div style={styles.box}>
        <Lottie animationData={uploadAnim} loop />
        <p>Uploading documents… Please wait</p>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(255,255,255,0.85)",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 260,
    textAlign: "center",
    fontWeight: 500,
  },
};
