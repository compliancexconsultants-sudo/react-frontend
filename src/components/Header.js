import React, { useEffect, useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import API from "../utils/api";
import logo from "../assets/logo.png";
const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("legalhubUser"));

  const [tags, setTags] = useState([]);
  const [services, setServices] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("legalhubUser");
    navigate("/login");
  };

  useEffect(() => {
    fetchTags();
    fetchServices();
  }, []);

  const fetchTags = async () => {
    const res = await API.get("/services/tags/list");
    setTags(res.data || []);
  };

  const fetchServices = async () => {
    const res = await API.get("/services/list");
    setServices(res.data || []);
  };

  const getMenuForTag = (tagId) => {
    const filtered = services.filter((s) => s.tagId?._id === tagId);

    return {
      items: filtered.map((s) => ({
        key: s._id,
        label: s.name,
        onClick: () => {
          navigate(`/service/${s._id}`);
          setMenuOpen(false);
        },
      })),
    };
  };

  return (
    <header className="clean-header">
      <div className="clean-header-inner">

        <img src={logo} alt="CX Consultants" className="logo-img" />

        {/* MOBILE MENU ICON */}
        <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </div>

        {/* NAVIGATION */}
        <nav className={`clean-nav ${menuOpen ? "open" : ""}`}>
          <span onClick={() => { navigate("/"); setMenuOpen(false); }}>Home</span>

          {tags.map((tag) => (
            <Dropdown key={tag._id} menu={getMenuForTag(tag._id)}>
              <span className="dropdown-link">{tag.name}</span>
            </Dropdown>
          ))}

          <span onClick={() => { navigate("/about"); setMenuOpen(false); }}>About</span>
          <span onClick={() => { navigate("/contact"); setMenuOpen(false); }}>Contact</span>

          <Dropdown
            menu={{
              items: [
                {
                  key: "1",
                  label: "Income Tax Calculator",
                  onClick: () => {
                    navigate("/tax-calculator");
                    setMenuOpen(false);
                  },
                },
                {
                  key: "2",
                  label: "GST Calculator",
                  onClick: () => {
                    navigate("/gst-calculator");
                    setMenuOpen(false);
                  },
                },
                {
                  key: "3",
                  label: "HRA Calculator",
                  onClick: () => {
                    navigate("/hra-calculator");
                    setMenuOpen(false);
                  },
                },
                {
                  key: "4",
                  label: "EMI Calculator",
                  onClick: () => {
                    navigate("/emi-calculator");
                    setMenuOpen(false);
                  },
                },
              ],
            }}
          >
            <span className="dropdown-link">Calculators</span>
          </Dropdown>


          {/* MOBILE PROFILE SECTION */}
          <div className="mobile-user-section">
            {!user ? (
              <>
                <button onClick={() => { navigate("/login"); setMenuOpen(false); }}>Login</button>
                <button
                  className="clean-primary"
                  onClick={() => { navigate("/signup"); setMenuOpen(false); }}
                >
                  Get Started
                </button>
              </>
            ) : (
              <>
                <div className="clean-avatar mobile-avatar">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>

                <button onClick={() => { navigate("/profile"); setMenuOpen(false); }}>
                  Profile
                </button>

                <button onClick={() => { navigate("/orders"); setMenuOpen(false); }}>
                  My Orders
                </button>

                <button className="logout-btn" onClick={logout}>
                  Logout
                </button>
              </>
            )}
          </div>
        </nav>

        {/* RIGHT SIDE DESKTOP */}
        <div className="clean-actions">
          {!user ? (
            <>
              <button className="clean-login" onClick={() => navigate("/login")}>
                Login
              </button>

              <button className="clean-primary" onClick={() => navigate("/signup")}>
                Get Started
              </button>
            </>
          ) : (
            <div className="clean-profile-dropdown">
              <div className="clean-avatar">
                {user?.name?.charAt(0).toUpperCase()}
              </div>

              <Dropdown
                menu={{
                  items: [
                    { key: "1", label: "Dashboard", onClick: () => navigate("/") },
                    { key: "2", label: "My Orders", onClick: () => navigate("/orders") },
                    { key: "3", label: "Profile", onClick: () => navigate("/profile") },
                    { key: "4", label: "Logout", danger: true, onClick: logout },
                  ],
                }}
              >
                <span className="profile-name">{user?.name}</span>
              </Dropdown>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
