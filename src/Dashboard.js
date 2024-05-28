// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaHome,
//   FaCalendarAlt,
//   FaFileInvoice,
//   FaBell,
//   FaMoneyBillWave,
// } from "react-icons/fa";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [showDropdown, setShowDropdown] = useState(false);

//   const handleCardClick = (route) => {
//     navigate(route);
//   };

//   const handleDropdownClick = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const handleDropdownItemClick = (route) => {
//     navigate(route);
//     setShowDropdown(false); // Close dropdown after clicking an item
//   };

//   return (
//     <div style={{ display: "flex", background: "#f4f4f4", height: "100vh" }}>
//       <div
//         style={{
//           width: "200px",
//           padding: "20px",
//           background: "#333",
//           color: "#fff",
//           marginTop: "50px",
//           fontFamily: "Arial, sans-serif",
//         }}
//       >
//         <nav>
//           <NavLink icon={<FaHome />} to="/">
//             Home
//           </NavLink>
//           <NavLink icon={<FaCalendarAlt />} to="/events/new">
//             Events
//           </NavLink>
//           <NavLink icon={<FaFileInvoice />} to="/invoices">
//             Invoices
//           </NavLink>
//           <NavLink icon={<FaBell />} to="/notifications">
//             Notifications
//           </NavLink>
//           <NavLink icon={<FaMoneyBillWave />} to="/payments">
//             Payments
//           </NavLink>
//         </nav>
//       </div>
//       <div style={{ padding: "20px" }}>
//         <h2 style={{ fontSize: "18px", marginBottom: "20px", fontFamily: "Arial, sans-serif" }}>
//           Welcome Admin!
//         </h2>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginBottom: "20px",
//           }}
//         >
//           <div
//             onClick={() => handleCardClick("/counties")}
//             style={cardStyle}
//           >
//             <h3>Unit Information</h3>
//           </div>
//           <div
//             onClick={handleDropdownClick}
//             style={{ ...cardStyle, position: "relative" }}
//           >
//             <h3>Adults</h3>
//             {showDropdown && (
//               <div style={dropdownStyle}>
//                 <ul style={{ margin: 0, padding: 0 }}>
//                   <li onClick={() => handleDropdownItemClick("/leaders")} style={dropdownItemStyle}>
//                     Young Leaders
//                   </li>
//                   <li onClick={() => handleDropdownItemClick("/guide-leaders")} style={dropdownItemStyle}>
//                     Guide Leaders
//                   </li>
//                   <li onClick={() => handleDropdownItemClick("/trefoils")} style={dropdownItemStyle}>
//                     Trefoils
//                   </li>
//                   <li onClick={() => handleDropdownItemClick("/bravos")} style={dropdownItemStyle}>
//                     Bravos
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const NavLink = ({ icon, to, children }) => {
//   const navigate = useNavigate();
//   return (
//     <div
//       style={{
//         cursor: "pointer",
//         marginBottom: "10px",
//         display: "flex",
//         alignItems: "center",
//         fontFamily: "Arial, sans-serif",
//       }}
//       onClick={() => navigate(to)}
//     >
//       <div style={{ marginRight: "15px" }}>{icon}</div>
//       <div>{children}</div>
//     </div>
//   );
// };

// const cardStyle = {
//   width: "150px",
//   height: "150px",
//   borderRadius: "10px",
//   border: "1px solid #ccc",
//   padding: "20px",
//   cursor: "pointer",
//   textAlign: "center",
//   background: "#fff",
//   marginTop: "55px",
// };

// const dropdownStyle = {
//   position: "absolute",
//   top: "50%",
//   right: "0",
//   transform: "translateY(-50%)",
//   minWidth: "120px",
//   background: "#fff",
//   borderRadius: "5px",
//   boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//   zIndex: "1",
//   marginTop: "-10px", // Adjusted margin to reduce space
// };

// const dropdownItemStyle = {
//   padding: "8px 16px", // Added padding to increase space between dropdown items
// };

// export default Dashboard;






// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaHome,
//   FaCalendarAlt,
//   FaFileInvoice,
//   FaBell,
//   FaMoneyBillWave,
// } from "react-icons/fa";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [showDropdown, setShowDropdown] = useState(false);

//   const handleCardClick = (route) => {
//     navigate(route);
//   };

//   const handleDropdownClick = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const handleDropdownItemClick = (route) => {
//     navigate(route);
//     setShowDropdown(false); // Close dropdown after clicking an item
//   };

//   return (
//     <div style={{ display: "flex", background: "#f4f4f4", height: "100vh" }}>
//       <div
//         style={{
//           width: "200px",
//           padding: "20px",
//           background: "#333",
//           color: "#fff",
//           marginTop: "50px",
//           fontFamily: "Arial, sans-serif",
//         }}
//       >
//         <nav>
//           <NavLink icon={<FaHome />} to="/">
//             Home
//           </NavLink>
//           <NavLink icon={<FaCalendarAlt />} to="/events/new">
//             Events
//           </NavLink>
//           <NavLink icon={<FaFileInvoice />} to="/invoices">
//             Invoices
//           </NavLink>
//           <NavLink icon={<FaBell />} to="/notifications">
//             Notifications
//           </NavLink>
//           <NavLink icon={<FaMoneyBillWave />} to="/payments">
//             Payments
//           </NavLink>
//         </nav>
//       </div>
//       <div style={{ padding: "20px" }}>
//         <h2 style={{ fontSize: "18px", marginBottom: "20px", fontFamily: "Arial, sans-serif" }}>
//           Welcome Admin!
//         </h2>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginBottom: "20px",
//           }}
//         >
//           <div
//             onClick={() => handleCardClick("/counties")}
//             style={cardStyle}
//           >
//             <h3>Unit Information</h3>
//           </div>
//           <div
//             onClick={handleDropdownClick}
//             style={{ ...cardStyle, position: "relative" }}
//           >
//             <h3>Adults</h3>
//             {showDropdown && (
//               <div style={dropdownStyle}>
//                 <ul style={{ margin: 0, padding: 0, listStyleType: "none" }}>
//                   <li onClick={() => handleDropdownItemClick("/leaders")} style={dropdownItemStyle}>
//                     Young Leaders
//                   </li>
//                   <li onClick={() => handleDropdownItemClick("/guide-leaders")} style={dropdownItemStyle}>
//                     Guide Leaders
//                   </li>
//                   <li onClick={() => handleDropdownItemClick("/trefoils")} style={dropdownItemStyle}>
//                     Trefoils
//                   </li>
//                   <li onClick={() => handleDropdownItemClick("/bravos")} style={dropdownItemStyle}>
//                     Bravos
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const NavLink = ({ icon, to, children }) => {
//   const navigate = useNavigate();
//   return (
//     <div
//       style={{
//         cursor: "pointer",
//         marginBottom: "10px",
//         display: "flex",
//         alignItems: "center",
//         fontFamily: "Arial, sans-serif",
//       }}
//       onClick={() => navigate(to)}
//     >
//       <div style={{ marginRight: "15px" }}>{icon}</div>
//       <div>{children}</div>
//     </div>
//   );
// };

// const cardStyle = {
//   width: "150px",
//   height: "150px",
//   borderRadius: "10px",
//   border: "1px solid #ccc",
//   padding: "20px",
//   cursor: "pointer",
//   textAlign: "center",
//   background: "#fff",
//   marginTop: "55px",
// };

// const dropdownStyle = {
//   position: "absolute",
//   top: "50%",
//   right: "0",
//   transform: "translateY(-50%)",
//   minWidth: "120px",
//   background: "#fff",
//   borderRadius: "5px",
//   boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//   zIndex: "1",
//   marginTop: "-10px", // Adjusted margin to reduce space
// };

// const dropdownItemStyle = {
//   padding: "8px 16px", // Added padding to increase space between dropdown items
// };

// export default Dashboard;

import React, { useState } from "react";
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
          marginTop: "50px",
          fontFamily: "Arial, sans-serif",
        }}
      >
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
      <div style={{ padding: "20px" }}>
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
        marginBottom: "10px",
        display: "flex",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
      onClick={() => navigate(to)}
    >
      <div style={{ marginRight: "15px" }}>{icon}</div>
      <div>{children}</div>
    </div>
  );
};

const cardStyle = {
  width: "160px", // Reduced size
  height: "120px", // Reduced size
  borderRadius: "10px",
  border: "1px solid #ccc",
  padding: "20px",
  cursor: "pointer",
  textAlign: "center",
  background: "#fff",
  marginTop: "55px",
};

const dropdownStyle = {
  position: "absolute",
  top: "50%",
  right: "0",
  transform: "translateY(-50%)",
  minWidth: "120px",
  background: "#fff",
  borderRadius: "5px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  zIndex: "1",
  marginTop: "-10px", // Adjusted margin to reduce space
};

const dropdownItemStyle = {
  padding: "8px 16px", // Added padding to increase space between dropdown items
};

export default Dashboard;
