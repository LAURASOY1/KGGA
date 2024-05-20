
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaFileInvoice,
  FaBell,
  FaMoneyBillWave,
} from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <div style={{ display: "flex", background: "#f4f4f4", height: "100vh" }}>
      <div
        style={{
          width: "200px",
          padding: "20px",
          background: "#333",
          color: "#fff",
          marginTop: "50px", // Add margin-top here
        }}
      >
        <nav>
          <NavLink icon={<FaHome />} to="/">
            Home
          </NavLink>
          <NavLink icon={<FaCalendarAlt />} to="/events/new"> {/* Corrected path */}
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
      <div style={{ padding: "20px" }}>
        <h2 style={{ fontSize: "18px", marginBottom: "20px" }}>
          Welcome Admin!
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <div onClick={() => handleCardClick("/counties")} style={cardStyle}>
            <h3>Young Unit</h3>
          </div>
          <div onClick={() => handleCardClick("/leaders")} style={cardStyle}>
            <h3>Young Leaders</h3>
          </div>
          <div onClick={() => handleCardClick("/adults")} style={cardStyle}>
            <h3>Adults</h3>
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
      style={{ cursor: "pointer", marginBottom: "10px", display: "flex", alignItems: "center" }}
      onClick={() => navigate(to)}
    >
      <div style={{ marginRight: "15px" }}>{icon}</div>
      <div>{children}</div>
    </div>
  );
};

const cardStyle = {
  flex: "1",
  border: "1px solid #ccc",
  padding: "40px",
  cursor: "pointer",
  textAlign: "center",
  background: "#fff",
  marginTop: "55px",
};

export default Dashboard;

