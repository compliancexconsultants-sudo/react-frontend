import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { Drawer, Button, Dropdown, Menu } from "antd";

const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("legalhubUser"));
  const [openProfile, setOpenProfile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const logout = () => {
    localStorage.removeItem("legalhubUser");
    setOpenProfile(false);
    navigate("/login");
  };

  const serviceItems = [
    { key: "1", label: "ITR Filing", onClick: () => navigate("/itr") },
    { key: "2", label: "GST Registration", onClick: () => navigate("/gst-registration") },
    { key: "3", label: "GST Filing", onClick: () => navigate("/gst-filing") },
    { key: "4", label: "Company Registration", onClick: () => navigate("/company-registration") },
    { key: "5", label: "Trademark Registration", onClick: () => navigate("/trademark") },
    { key: "6", label: "Legal Consultation", onClick: () => navigate("/legal-consultation") },
    { key: "7", label: "Tax Calculator", onClick: () => navigate("/tax-calculator") },
  ];

  return (
    <>
      <header className="header">
        <div className="header-main">
          <div className="logo" onClick={() => navigate("/")}>
            ⚖️ C X consultants
          </div>

          {/* Desktop Nav */}
          <nav className="nav-links">
            <a onClick={() => navigate("/")}>Home</a>

            <Dropdown menu={{ items: serviceItems }} trigger={["hover"]}>
              <a className="nav-link">Services</a>
            </Dropdown>

            <a onClick={() => navigate("/about")}>About</a>
            <a onClick={() => navigate("/contact")}>Contact</a>
          </nav>

          <div className="header-buttons">
            {!user ? (
              <>
                <button onClick={() => navigate("/login")} className="login-btn">
                  Login
                </button>
                <button onClick={() => navigate("/signup")} className="get-started-btn">
                  Get Started
                </button>
              </>
            ) : (
              <div className="profile-box" onClick={() => setOpenProfile(true)}>
                <img src={user.profilePic || "/default-avatar.png"} className="profile-pic" alt="profile" />
                <span className="profile-name">{user.name}</span>
              </div>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="hamburger" onClick={() => setOpenMenu(true)}>
            ☰
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <Drawer title="Menu" placement="left" onClose={() => setOpenMenu(false)} open={openMenu}>
        <p onClick={() => navigate("/")}>Home</p>

        <Dropdown menu={{ items: serviceItems }} trigger={["click"]}>
          <p style={{ cursor: "pointer" }}>Services ▾</p>
        </Dropdown>

        <p onClick={() => navigate("/about")}>About</p>
        <p onClick={() => navigate("/contact")}>Contact</p>

        <hr />

        {!user ? (
          <>
            <Button block onClick={() => navigate("/login")}>Login</Button>
            <Button type="primary" block onClick={() => navigate("/signup")}>Get Started</Button>
          </>
        ) : (
          <>
            <Button block onClick={() => navigate("/profile")}>My Profile</Button>
            <Button block onClick={() => navigate("/orders")}>My Orders</Button>
            <Button danger block onClick={logout}>Logout</Button>
          </>
        )}
      </Drawer>

      {/* Profile Drawer */}
      <Drawer
        placement="left"
        width={280}
        onClose={() => setOpenMenu(false)}
        open={openMenu}
        bodyStyle={{ padding: 0, background: "#f5f7fa" }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #4f46e5, #6d5dfc)",
            padding: "40px 20px",
            textAlign: "center",
            color: "white",
          }}
        >
          <img
            src={user?.profilePic || "/default-avatar.png"}
            alt="profile"
            style={{
              width: 90,
              height: 90,
              borderRadius: "50%",
              border: "3px solid white",
              objectFit: "cover",
            }}
          />
          <h3 style={{ marginTop: 12, fontSize: 20 }}>{user?.name}</h3>
          <p style={{ opacity: 0.85 }}>{user?.email}</p>
        </div>

        {/* Menu Items */}
        <div style={{ padding: "20px 15px" }}>
          <div className="drawer-item" onClick={() => navigate("/")}>
            <i className="ri-home-4-line"></i> Dashboard
          </div>

          <div className="drawer-item" onClick={() => navigate("/profile")}>
            <i className="ri-user-line"></i> My Profile
          </div>

          <div className="drawer-item" onClick={() => navigate("/orders")}>
            <i className="ri-file-list-3-line"></i> My Orders
          </div>

          <div className="drawer-item" onClick={() => navigate("/services")}>
            <i className="ri-briefcase-line"></i> Our Services
          </div>

          <div className="drawer-item" onClick={() => navigate("/contact")}>
            <i className="ri-phone-line"></i> Contact Us
          </div>
        </div>

        {/* Logout Button */}
        <div style={{ padding: "0 15px", marginTop: 20 }}>
          <button
            onClick={logout}
            style={{
              width: "100%",
              padding: "12px 0",
              borderRadius: 10,
              border: "none",
              background: "#ef4444",
              color: "white",
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            <i className="ri-logout-circle-line"></i> Logout
          </button>
        </div>
      </Drawer>

    </>
  );
};

export default Header;
