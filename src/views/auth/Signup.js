import React, { useState } from "react";
import Layout from "../../components/Layout";
import { auth, googleProvider } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    profession: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!form.username) {
      alert("Please enter a username.");
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(auth, form.email, form.password);

      await updateProfile(result.user, {
        displayName: form.username,
      });

      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignup = async () => {
   try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    // Save to localStorage
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

        <h2>Create Account</h2>
        <p className="auth-sub">Join LegalHub today</p>

        <input
          type="text"
          name="username"
          placeholder="Full Name / Username"
          className="auth-input"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email address"
          className="auth-input"
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="auth-input"
          onChange={handleChange}
        />

       

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="auth-input"
          onChange={handleChange}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="auth-input"
          onChange={handleChange}
        />

        <button className="auth-btn primary-btn" onClick={handleSignup}>
          Create Account
        </button>

        <div className="divider">OR</div>

        <button className="google-btn" onClick={handleGoogleSignup}>
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" />
          Continue with Google
        </button>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </Layout>
  );
};

export default Signup;
