


import React from "react";

const LeaderTable = ({ leaders }) => {
  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Young Leaders</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={cellStyle}>Name</th>
            <th style={cellStyle}>Phone Number</th>
            <th style={cellStyle}>County</th>
            <th style={cellStyle}>Email</th>
            <th style={cellStyle}>Status</th>
            <th style={cellStyle}>MembershipNo</th>
            <th style={cellStyle}>Age</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((leader, index) => (
            <tr key={index}>
              <td style={cellStyle}>{leader.name}</td>
              <td style={cellStyle}>{leader.phoneNumber}</td>
              <td style={cellStyle}>{leader.county}</td>
              <td style={cellStyle}>{leader.email}</td>
              <td style={cellStyle}>{leader.status}</td>
              <td style={cellStyle}>{leader.MembershipNo}</td>
              <td style={cellStyle}>{leader.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const containerStyle = {
  margin: "10px", // Add space from margin
};

const headingStyle = {
  marginBottom: "20px", // Add space below heading
};

const tableStyle = {
  borderCollapse: "collapse",
  width: "100%",
};

const cellStyle = {
  border: "1px solid #ddd",
  padding: "10px", // Add padding to cells
};

export default LeaderTable;
