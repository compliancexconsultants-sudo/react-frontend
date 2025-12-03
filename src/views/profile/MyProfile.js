import React, { useState } from "react";
import Layout from "../../components/Layout";
import "./MyProfile.css";

const MyProfile = () => {
  const storedUser = JSON.parse(localStorage.getItem("legalhubUser"));

  const [user, setUser] = useState({
    name: storedUser?.name || "",
    email: storedUser?.email || "",
    phone: storedUser?.phone || "",
    profession: storedUser?.profession || "",
    profilePic: storedUser?.profilePic || "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    localStorage.setItem("legalhubUser", JSON.stringify(user));
    alert("Profile updated successfully!");
  };

  return (
    <Layout>
      <div className="profile-container fade-up">

        {/* PROFILE HEADER */}
        <div className="profile-header">
          <img
            src={user.profilePic || "/default-avatar.png"}
            alt="profile"
            className="profile-avatar"
          />

          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>

        {/* PROFILE FORM */}
        <div className="profile-card">
          <h3>Edit Profile</h3>

          <div className="profile-field">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </div>

          <div className="profile-field">
            <label>Email</label>
            <input type="email" value={user.email} disabled />
          </div>

          <div className="profile-field">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
            />
          </div>

          <div className="profile-field">
            <label>Profession</label>
            <input
              type="text"
              name="profession"
              value={user.profession}
              onChange={handleChange}
            />
          </div>

          <button className="primary-btn save-btn" onClick={saveChanges}>
            Save Changes
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default MyProfile;
