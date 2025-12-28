import React, { useEffect, useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useService } from '../states/ServiceContext'
import gstRegistrationData from "../views/services-hard/gstRegistration/gstRegistration.data";
// import API from "../utils/api";
import logo from "../assets/logo.png";
import esiRegistrationData from "../views/services-hard/data/esiRegistration.data";
const Header = () => {
  const { setServiceData } = useService();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("legalhubUser"));

  // const [tags, setTags] = useState([]);
  // const [services, setServices] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("legalhubUser");
    navigate("/login");
  };

  // useEffect(() => {
  //   fetchTags();
  //   fetchServices();
  // }, []);

  // const fetchTags = async () => {
  //   const res = await API.get("/services/tags/list");
  //   setTags(res.data || []);
  // };

  // const fetchServices = async () => {
  //   const res = await API.get("/services/list");
  //   setServices(res.data || []);
  // };

  // const getMenuForTag = (tagId) => {
  //   const filtered = services.filter((s) => s.tagId?._id === tagId);

  //   return {
  //     items: filtered.map((s) => ({
  //       key: s._id,
  //       label: s.name,
  //       onClick: () => {
  //         navigate(`/service/${s._id}`);
  //         setMenuOpen(false);
  //       },
  //     })),
  //   };
  // };

  const licensesMenu = (
    <div className="mega-menu">
      <div className="mega-title">LICENSES & REGISTRATIONS</div>

      <div className="mega-grid">
        <div>
          <span onClick={() => {
            setServiceData(gstRegistrationData)
            navigate("/CXServices")}}>GST Registration</span>
          <span onClick={() => {
            setServiceData(esiRegistrationData)
            navigate("/CXServices")}}>ESI Registration</span>
          <span onClick={() => navigate("/services/udyog-aadhaar")}>Udyam / SSI Registration</span>
          <span onClick={() => navigate("/services/pan")}>PAN Application</span>
        </div>

        <div>
          <span onClick={() => navigate("/services/fssai")}>FSSAI (Food License)</span>
          <span onClick={() => navigate("/services/epf")}>EPF Registration</span>
          <span onClick={() => navigate("/services/trade-license")}>Trade License</span>
          <span onClick={() => navigate("/services/tan")}>TAN Application</span>
        </div>

        <div>
          <span onClick={() => navigate("/services/shop-establishment")}>
            Shops & Establishment
          </span>
          <span onClick={() => navigate("/services/msme")}>MSME (Udyam)</span>
          <span onClick={() => navigate("/services/iec")}>Import Export Code</span>
          <span onClick={() => navigate("/services/professional-tax")}>
            Professional Tax
          </span>
        </div>
      </div>
    </div>
  );
  const taxAccountingMenu = (
    <div className="simple-dropdown">
      <div className="dropdown-title">TAX & ACCOUNTING</div>

      <span onClick={() => navigate("/services/gst-return-filing")}>
        GST Return Filing
      </span>

      <span onClick={() => navigate("/services/income-tax-return")}>
        Income Tax Return Filing
      </span>

      <span onClick={() => navigate("/services/tds-return")}>
        TDS Return Filing
      </span>

      <span onClick={() => navigate("/services/professional-tax-filing")}>
        Professional Tax Filing
      </span>

      <span onClick={() => navigate("/services/esi-epf-filing")}>
        ESI & EPF Filing
      </span>

      <span onClick={() => navigate("/services/book-keeping")}>
        Book Keeping
      </span>

      <span onClick={() => navigate("/services/e-way-bill")}>
        E-Way Bill
      </span>

      <span onClick={() => navigate("/services/gst-annual-return")}>
        GST Annual Return Filing
      </span>
    </div>
  );
  const compliancesMenu = (
    <div className="mega-menu">
      <div className="mega-title">COMPLIANCES</div>

      <div className="mega-grid">
        {/* COLUMN 1 */}
        <div>
          <span onClick={() => navigate("/services/add-director")}>
            Add Director
          </span>

          <span onClick={() => navigate("/services/change-registered-office")}>
            Change of Registered Office Address
          </span>

          <span onClick={() => navigate("/services/winding-up-company")}>
            Winding up of Company
          </span>

          <span onClick={() => navigate("/services/gst-cancellation")}>
            GST Cancellation
          </span>
        </div>

        {/* COLUMN 2 */}
        <div>
          <span onClick={() => navigate("/services/remove-director")}>
            Remove / Resignation of Director
          </span>

          <span onClick={() => navigate("/services/share-transfer")}>
            Share Transfer
          </span>

          <span onClick={() => navigate("/services/winding-up-llp")}>
            Winding up of LLP
          </span>

          <span onClick={() => navigate("/services/tender")}>
            Tender
          </span>
        </div>

        {/* COLUMN 3 */}
        <div>
          <span onClick={() => navigate("/services/increase-authorised-capital")}>
            Increase Authorised Capital
          </span>

          <span onClick={() => navigate("/services/moa-amendment")}>
            MOA Amendment
          </span>

          <span onClick={() => navigate("/services/dir-3-kyc")}>
            DIR 3 KYC
          </span>
        </div>
      </div>
    </div>
  );
  const startBusinessMenu = (
    <div className="mega-menu">
      <div className="mega-title">START YOUR BUSINESS</div>

      <div className="mega-grid">
        {/* COLUMN 1 */}
        <div>
          <span onClick={() => navigate("/PrivateLimited")}>
            Private Limited Company Registration
          </span>

          <span onClick={() => navigate("/SoleProprietorship")}>
            Sole Proprietorship Registration
          </span>

          <span onClick={() => navigate("/PartnershipFirm")}>
            Partnership Firm Registration
          </span>
        </div>

        {/* COLUMN 2 */}
        <div>
          <span onClick={() => navigate("/LLPRegistration")}>
            Limited Liability Partnership (LLP)
          </span>

          <span onClick={() => navigate("/OPCRegistration")}>
            One Person Company (OPC)
          </span>

          <span onClick={() => navigate("/HUFRegistration")}>
            Hindu Undivided Family (HUF)
          </span>
        </div>

        {/* COLUMN 3 */}
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

        <img src={logo} alt="CX Consultants" className="logo-img" />

        {/* MOBILE MENU ICON */}
        <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </div>

        {/* NAVIGATION */}
        <nav className={`clean-nav ${menuOpen ? "open" : ""}`}>
          <span onClick={() => { navigate("/"); setMenuOpen(false); }}>Home</span>
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
                {
                  key: "5",
                  label: "Gold Calculator",
                  onClick: () => {
                    navigate("/gold-calculator");
                    setMenuOpen(false);
                  },
                },
              ],
            }}
          >
            <span className="dropdown-link">Calculators</span>
          </Dropdown>

          {/* START YOUR BUSINESS */}
          <Dropdown
            trigger={["hover"]}
            dropdownRender={() => startBusinessMenu}
          >
            <span className="dropdown-link">Start Your Business</span>
          </Dropdown>

          <Dropdown
            trigger={["hover"]}
            dropdownRender={() => licensesMenu}
          >
            <span className="dropdown-link">Licenses & Registrations</span>
          </Dropdown>

          <Dropdown
            trigger={["hover"]}
            dropdownRender={() => taxAccountingMenu}
          >
            <span className="dropdown-link">Tax & Accounting</span>
          </Dropdown>

          <Dropdown
            trigger={["hover"]}
            dropdownRender={() => compliancesMenu}
          >
            <span className="dropdown-link">Compliances</span>
          </Dropdown>

          {/* {tags.map((tag) => (
            <Dropdown key={tag._id} menu={getMenuForTag(tag._id)}>
              <span className="dropdown-link">{tag.name}</span>
            </Dropdown>
          ))} */}
        
          <span onClick={() => { navigate("/about"); setMenuOpen(false); }}>About</span>
          <span onClick={() => { navigate("/contact"); setMenuOpen(false); }}>Contact</span>




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
