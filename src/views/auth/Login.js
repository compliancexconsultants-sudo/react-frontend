import React, { useState } from "react";
import Layout from "../../components/Layout";
import { auth, googleProvider } from "../../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import API from "../../utils/api";     // <-- Import API
import "./Auth.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = async () => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const user = userCred.user;

      await API.post("/users/sync", {
        firebaseUid: user.uid,
        name: user.displayName || "",
        email: user.email,
        phone: user.phoneNumber || "",
        photoURL: user.photoURL || ""
      });

      // Save locally
      localStorage.setItem("legalhubUser", JSON.stringify({
        name: user.displayName || "",
        email: user.email,
        profilePic: user.photoURL || "",
        uid: user.uid,
      }));

      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Sync with backend
      await API.post("/users/sync", {
        firebaseUid: user.uid,
        name: user.displayName || "",
        email: user.email,
        phone: user.phoneNumber || "",
        photoURL: user.photoURL || ""
      });

      // Save locally
      localStorage.setItem("legalhubUser", JSON.stringify({
        name: user.displayName,
        email: user.email,
        profilePic: user.photoURL,
        uid: user.uid,
      }));

      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Layout>
      <div className="auth-container fade-up">
        <h2>Welcome Back</h2>
        <p className="auth-sub">Login to continue</p>

        <input
          type="email"
          placeholder="Email address"
          className="auth-input"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="auth-input"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="auth-btn primary-btn" onClick={handleEmailLogin}>
          Login
        </button>

        <div className="divider">OR</div>

        <button className="google-btn" onClick={handleGoogleLogin}>
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" />
          Continue with Google
        </button>

        <p className="auth-footer">
          Don’t have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </Layout>
  );
};

export default Login;
