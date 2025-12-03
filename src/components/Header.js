import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { Drawer, Button, Dropdown, Menu } from "antd";

const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("legalhubUser"));
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("legalhubUser");
    setOpen(false);
    navigate("/login");
  };

  const serviceItems = [
    {
      key: "1",
      label: "ITR Filing",
      onClick: () => navigate("/itr"),
    },
    {
      key: "2",
      label: "GST Registration",
      onClick: () => navigate("/gst-registration"),
    },
    {
      key: "3",
      label: "GST Filing",
      onClick: () => navigate("/gst-filing"),
    },
    {
      key: "4",
      label: "Company Registration",
      onClick: () => navigate("/company-registration"),
    },
    {
      key: "5",
      label: "Trademark Registration",
      onClick: () => navigate("/trademark"),
    },
    {
      key: "6",
      label: "Legal Consultation",
      onClick: () => navigate("/legal-consultation"),
    },
    {
      key: "7",
      label: "Tax Calculator",
      onClick: () => navigate("/tax-calculator"),
    },
  ];



  return (
    <>
      <header className="header">
        <div className="header-main">

          <div className="logo" onClick={() => navigate("/")}>
            ⚖️ LegalHub
          </div>

          <nav className="nav-links">
            <a onClick={() => navigate("/")}>Home</a>

            <Dropdown
              menu={{ items: serviceItems }}
              trigger={["hover"]}
              placement="bottomCenter"
            >
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
                <button
                  className="get-started-btn"
                  onClick={() => navigate("/signup")}
                >
                  Get Started
                </button>
              </>
            ) : (
              <div className="profile-box" onClick={() => setOpen(true)}>
                <img
                  src={user.profilePic || "/default-avatar.png"}
                  className="profile-pic"
                  alt="profile"
                />
                <span className="profile-name">{user.name}</span>
              </div>
            )}
          </div>

        </div>
      </header>

      <Drawer
        title="Your Profile"
        placement="right"
        width={300}
        onClose={() => setOpen(false)}
        open={open}
      >
        <div className="drawer-profile">
          <img
            src={user?.profilePic || "/default-avatar.png"}
            className="drawer-pic"
            alt="Profile"
          />
          <h3>{user?.name}</h3>
          <p>{user?.email}</p>
        </div>

        <div className="drawer-actions">
          <Button type="primary" block onClick={() => navigate("/")}>
            Go to Dashboard
          </Button>

          <Button block onClick={() => navigate("/profile")}>
            My Profile
          </Button>
           <Button block onClick={() => navigate("/orders")}>
            My Orders
          </Button>

          <Button danger block onClick={logout}>
            Logout
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
