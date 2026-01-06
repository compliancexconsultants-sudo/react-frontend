import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useService } from '../states/ServiceContext'
import gstRegistrationData from "../views/services-hard/gstRegistration/gstRegistration.data";
import logo from "../assets/logo.png";
import esiRegistrationData from "../views/services-hard/data/esiRegistration.data";
import udyamRegistrationData from "../views/services-hard/data/udyamRegistrationData.data";
import panCardServiceData from "../views/services-hard/data/panCardService.data";
import fssaiRegistrationData from "../views/services-hard/data/fssaiRegistration.data";
import epfRegistrationData from "../views/services-hard/data/epfRegistration.data";
import tradeLicenseRegistrationData from "../views/services-hard/data/tradeLicenseRegistration.data";
import tanRegistrationData from "../views/services-hard/data/tanRegistration.data";
import shopEstablishmentData from "../views/services-hard/data/shopEstablishment.data";
import msmeRegistrationData from "../views/services-hard/data/msmeRegistration.data";
import iecRegistrationData from "../views/services-hard/data/iecRegistration.data";
import professionalTaxRegistrationData from "../views/services-hard/data/professionalTaxRegistration.data";
import gstReturnFilingData from "../views/services-hard/data/gstReturnFiling.data";
import incomeTaxAssessmentData from "../views/services-hard/data/incomeTaxAssessment.data";
import tdsReturnFilingData from "../views/services-hard/data/tdsReturnFiling.data";
import professionalTaxFilingData from "../views/services-hard/data/professionalTaxFiling.data";
import esiEpfFilingData from "../views/services-hard/data/esiEpfFiling.data";

const Header = () => {
  const { setServiceData } = useService();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("legalhubUser"));

  const [menuOpen, setMenuOpen] = useState(false);
  const [openAcc, setOpenAcc] = useState(null);
  const isMobile = window.innerWidth < 768;

  const logout = () => {
    localStorage.removeItem("legalhubUser");
    navigate("/login");
  };

  /* ==========  MENUS  ========== */
  const licensesMenu = (
    <div className="mega-menu">
      <div className="mega-title">LICENSES & REGISTRATIONS</div>
      <div className="mega-grid">
        <div>
          <span onClick={() => { setServiceData(gstRegistrationData); navigate("/CXServices"); }}>GST Registration</span>
          <span onClick={() => { setServiceData(esiRegistrationData); navigate("/CXServices"); }}>ESI Registration</span>
          <span onClick={() => { setServiceData(udyamRegistrationData); navigate("/CXServices"); }}>Udyam / SSI Registration</span>
          <span onClick={() => { setServiceData(panCardServiceData); navigate("/CXServices"); }}>PAN Application</span>
        </div>
        <div>
          <span onClick={() => { setServiceData(fssaiRegistrationData); navigate("/CXServices"); }}>FSSAI (Food License)</span>
          <span onClick={() => { setServiceData(epfRegistrationData); navigate("/CXServices"); }}>EPF Registration</span>
          <span onClick={() => { setServiceData(tradeLicenseRegistrationData); navigate("/CXServices"); }}>Trade License</span>
          <span onClick={() => { setServiceData(tanRegistrationData); navigate("/CXServices"); }}>TAN Application</span>
        </div>
        <div>
          <span onClick={() => { setServiceData(shopEstablishmentData); navigate("/CXServices"); }}>Shops & Establishment</span>
          <span onClick={() => { setServiceData(msmeRegistrationData); navigate("/CXServices"); }}>MSME (Udyam)</span>
          <span onClick={() => { setServiceData(iecRegistrationData); navigate("/CXServices"); }}>Import Export Code</span>
          <span onClick={() => { setServiceData(professionalTaxRegistrationData); navigate("/CXServices"); }}>Professional Tax</span>
        </div>
      </div>
    </div>
  );

  const taxAccountingMenu = (
    <div className="simple-dropdown">
      <div className="dropdown-title">TAX & ACCOUNTING</div>
      <span onClick={() => { setServiceData(gstReturnFilingData); navigate("/CXServices"); }}>GST Return Filing</span>
      <span onClick={() => { setServiceData(incomeTaxAssessmentData); navigate("/CXServices"); }}>Income Tax Filing</span>
      <span onClick={() => { setServiceData(tdsReturnFilingData); navigate("/CXServices"); }}>TDS Filing</span>
      <span onClick={() => { setServiceData(professionalTaxFilingData); navigate("/CXServices"); }}>Professional Tax Filing</span>
      <span onClick={() => { setServiceData(esiEpfFilingData); navigate("/CXServices"); }}>ESI & EPF Filing</span>
    </div>
  );

  const startBusinessMenu = (
    <div className="mega-menu">
      <div className="mega-title">BUSINESS REGISTRATIONS</div>
      <div className="mega-grid">
        <div>
          <span onClick={() => navigate("/PrivateLimited")}>Private Limited Company Registration</span>
          <span onClick={() => navigate("/SoleProprietorship")}>Sole Proprietorship Registration</span>
          <span onClick={() => navigate("/PartnershipFirm")}>Partnership Firm Registration</span>
        </div>
        <div>
          <span onClick={() => navigate("/LLPRegistration")}>Limited Liability Partnership (LLP)</span>
          <span onClick={() => navigate("/OPCRegistration")}>One Person Company (OPC)</span>
          <span onClick={() => navigate("/HUFRegistration")}>Hindu Undivided Family (HUF)</span>
        </div>
        <div>
          <span onClick={() => navigate("/TrustSocietyRegistration")}>
            Trust Registration
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <header className="clean-header">
      <div className="clean-header-inner">

        <img src={logo} alt="CX Consultants" className="logo-img" onClick={() => navigate("/")} />

        {/* MOBILE ICON */}
        <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </div>

        {/* NAV */}
        <nav className={`clean-nav ${menuOpen ? "open" : ""}`}>

          <span onClick={() => { navigate("/"); setMenuOpen(false); }}>Home</span>

          {/* Calculators */}
          <Dropdown
            menu={{
              items: [
                { key: "1", label: "Income Tax Calculator", onClick: () => navigate("/tax-calculator") },
                { key: "2", label: "GST Calculator", onClick: () => navigate("/gst-calculator") },
                { key: "3", label: "HRA Calculator", onClick: () => navigate("/hra-calculator") },
                { key: "4", label: "EMI Calculator", onClick: () => navigate("/emi-calculator") },
                { key: "5", label: "Gold Calculator", onClick: () => navigate("/gold-calculator") },
              ],
            }}
          >
            <span className="dropdown-link">Calculators</span>
          </Dropdown>

          {/* BUSINESS */}
          {isMobile ? (
            <>
              <span onClick={() => setOpenAcc(openAcc === "business" ? null : "business")}>
                Business Registrations
              </span>
              {openAcc === "business" && <div className="mobile-accordion">{startBusinessMenu}</div>}
            </>
          ) : (
            <Dropdown trigger={["hover"]} dropdownRender={() => startBusinessMenu}>
              <span className="dropdown-link">Business Registrations</span>
            </Dropdown>
          )}

          {/* LICENSE */}
          {isMobile ? (
            <>
              <span onClick={() => setOpenAcc(openAcc === "license" ? null : "license")}>
                Licenses & Registrations
              </span>
              {openAcc === "license" && <div className="mobile-accordion">{licensesMenu}</div>}
            </>
          ) : (
            <Dropdown trigger={["hover"]} dropdownRender={() => licensesMenu}>
              <span className="dropdown-link">Licenses & Registrations</span>
            </Dropdown>
          )}

          {/* TAX */}
          {isMobile ? (
            <>
              <span onClick={() => setOpenAcc(openAcc === "tax" ? null : "tax")}>
                Tax & Accounting
              </span>
              {openAcc === "tax" && <div className="mobile-accordion">{taxAccountingMenu}</div>}
            </>
          ) : (
            <Dropdown trigger={["hover"]} dropdownRender={() => taxAccountingMenu}>
              <span className="dropdown-link">Tax & Accounting</span>
            </Dropdown>
          )}

          <span onClick={() => { navigate("/about"); setMenuOpen(false); }}>About</span>
          <span onClick={() => { navigate("/contact"); setMenuOpen(false); }}>Contact</span>

          {/* ========== MOBILE USER SECTION ========== */}
          <div className="mobile-user-section">
            {!user ? (
              <>
                <button onClick={() => { navigate("/login"); setMenuOpen(false); }}>Login</button>
                <button className="clean-primary" onClick={() => { navigate("/signup"); setMenuOpen(false); }}>
                  Get Started
                </button>
              </>
            ) : (
              <>
                <div className="clean-avatar mobile-avatar">{user?.name?.charAt(0)?.toUpperCase()}</div>
                <button onClick={() => { navigate("/profile"); setMenuOpen(false); }}>Profile</button>
                <button onClick={() => { navigate("/orders"); setMenuOpen(false); }}>My Orders</button>
                <button className="logout-btn" onClick={logout}>Logout</button>
              </>
            )}
          </div>

        </nav>

        {/* ========== DESKTOP RIGHT SECTION ========== */}
        <div className="clean-actions">
          {!user ? (
            <>
              <button className="clean-login" onClick={() => navigate("/login")}>Login</button>
              <button className="clean-primary" onClick={() => navigate("/signup")}>Get Started</button>
            </>
          ) : (
            <div className="clean-profile-dropdown">
              <div className="clean-avatar">{user?.name?.charAt(0)?.toUpperCase()}</div>
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
