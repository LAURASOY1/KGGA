import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaFileInvoice,
  FaBell,
  FaMoneyBillWave,
} from "react-icons/fa";
import logo from "./logo.png"; // Import your logo image

const Dashboard = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleCardClick = (route) => {
    navigate(route);
  };

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownItemClick = (route) => {
    navigate(route);
    setShowDropdown(false); // Close dropdown after clicking an item
  };

  return (
    <div style={{ display: "flex", background: "#f4f4f4", height: "100vh" }}>
      <div
        style={{
          width: "200px",
          padding: "20px",
          background: "#333",
          color: "#fff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            marginBottom: "20px",
            textAlign: "center",
            background: "#fff", // Background color for the logo
            padding: "5px", // Padding around the logo
            borderRadius: "60%", // Optional: make it circular
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ width: "50px", height: "auto" }}
          />
        </div>
        <nav>
          <NavLink icon={<FaHome />} to="/">
            Home
          </NavLink>
          <NavLink icon={<FaCalendarAlt />} to="/events/new">
            Events
          </NavLink>
          <NavLink icon={<FaFileInvoice />} to="/invoices">
            Invoices
          </NavLink>
          <NavLink icon={<FaBell />} to="/notifications">
            Notifications
          </NavLink>
          <NavLink icon={<FaMoneyBillWave />} to="/payments">
            Payments
          </NavLink>
        </nav>
      </div>
      <div style={{ padding: "20px", flex: 1 }}>
        <h2
          style={{
            fontSize: "18px",
            marginBottom: "20px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Welcome Admin!
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <div
            onClick={() => handleCardClick("/counties")}
            style={{ ...cardStyle, textAlign: "center" }}
          >
            <h3>Unit Information</h3>
          </div>
          <div style={{ width: "20px" }}></div> {/* Space between cards */}
          <div
            onClick={handleDropdownClick}
            style={{ ...cardStyle, position: "relative", textAlign: "center" }}
          >
            <h3>Adults</h3>
            {showDropdown && (
              <div style={dropdownStyle}>
                <ul style={{ margin: 0, padding: 0, listStyleType: "none" }}>
                  <li
                    onClick={() => handleDropdownItemClick("/leaders")}
                    style={dropdownItemStyle}
                  >
                    Young Leaders
                  </li>
                  <li
                    onClick={() =>
                      handleDropdownItemClick("/guide-leaders/:county")
                    }
                    style={dropdownItemStyle}
                  >
                    Guide Leaders
                  </li>
                  <li
                    onClick={() => handleDropdownItemClick("/trefoils")}
                    style={dropdownItemStyle}
                  >
                    Trefoils
                  </li>
                  <li
                    onClick={() => handleDropdownItemClick("/bravos")}
                    style={dropdownItemStyle}
                  >
                    Bravos
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div style={{ width: "20px" }}></div> {/* Space between cards */}
          <div
            onClick={() => handleCardClick("/filtered-students")}
            style={{ ...cardStyle, textAlign: "center" }}
          >
            <h3>Categories</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavLink = ({ icon, to, children }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
        padding: "10px",
        borderRadius: "4px",
        transition: "background-color 0.3s ease",
        fontFamily: "Arial, sans-serif",
      }}
      onClick={() => navigate(to)}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = "#444")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = "transparent")
      }
    >
      <div style={{ marginRight: "10px" }}>{icon}</div>
      <div>{children}</div>
    </div>
  );
};

const cardStyle = {
  cursor: "pointer",
  background: "#fff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  padding: "20px",
  borderRadius: "8px",
  flex: 1,
  transition: "transform 0.3s ease",
  height: "200px", // Increase height
  width: "200px", // Increase width
};

const dropdownStyle = {
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  background: "#fff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "4px",
  zIndex: 10,
  fontFamily: "Arial, sans-serif",
};

const dropdownItemStyle = {
  padding: "10px",
  cursor: "pointer",
  fontFamily: "Arial, sans-serif",
};

export default Dashboard;
