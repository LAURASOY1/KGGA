
// import React from "react";

// const LeaderTable = ({ leaders }) => {
//   return (
//     <div style={containerStyle}>
//       <h2 style={headingStyle}>Young Leaders</h2>
//       <table style={tableStyle}>
//         <thead>
//           <tr>
//             <th style={cellStyle}>Name</th>
//             <th style={cellStyle}>Phone Number</th>
//             <th style={cellStyle}>County</th>
//             <th style={cellStyle}>Email</th>

//             <th style={cellStyle}>MembershipNo</th>
//             <th style={cellStyle}>Status</th>
//             <th style={cellStyle}>Age</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leaders.map((leader, index) => (
//             <tr key={index}>
//               <td style={cellStyle}>{leader.name}</td>
//               <td style={cellStyle}>{leader.phoneNumber}</td>
//               <td style={cellStyle}>{leader.county}</td>
//               <td style={cellStyle}>{leader.email}</td>
//               <td style={cellStyle}>{leader.MembershipNo}</td>
//               <td style={cellStyle}>{leader.status}</td>
//               <td style={cellStyle}>{leader.Age}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// const containerStyle = {
//   margin: "10px", // Add space from margin
// };

// const headingStyle = {
//   marginBottom: "20px", // Add space below heading
// };

// const tableStyle = {
//   borderCollapse: "collapse",
//   width: "100%",
// };

// const cellStyle = {
//   border: "1px solid #ddd",
//   padding: "10px", // Add padding to cells
// };

// export default LeaderTable;






// LeaderTable.js
// import React, { useState } from "react";
// import ReactHTMLTableToExcel from "react-html-table-to-excel";
// import {
//   PDFDownloadLink,
//   Page,
//   Text,
//   View,
//   Document,
//   StyleSheet,
// } from "@react-pdf/renderer";

// const LeaderTable = ({ leaders }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredLeaders = leaders.filter((leader) =>
//     leader.county.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const styles = StyleSheet.create({
//     page: { padding: 30 },
//     section: { margin: 10, padding: 10, flexGrow: 1 },
//     heading: { fontSize: 24, marginBottom: 10 },
//     table: { display: "table", width: "auto", margin: "0 auto" },
//     th: { border: "1px solid black", padding: 5, backgroundColor: "#f2f2f2" },
//     td: { border: "1px solid black", padding: 5 },
//   });

//   return (
//     <div style={containerStyle}>
//       <h2 style={headingStyle}>Young Leaders</h2>
//       <input
//         type="text"
//         placeholder="Search by county..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={{
//           width: "100%",
//           padding: "8px",
//           margin: "10px 0",
//           borderRadius: "4px",
//           border: "1px solid #ccc",
//         }}
//       />
//       <table style={tableStyle} id="leader-table">
//         <thead>
//           <tr>
//             <th style={cellStyle}>Name</th>
//             <th style={cellStyle}>Phone Number</th>
//             <th style={cellStyle}>County</th>
//             <th style={cellStyle}>Email</th>
//             <th style={cellStyle}>MembershipNo</th>
//             <th style={cellStyle}>Status</th>
//             <th style={cellStyle}>Age</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredLeaders.map((leader, index) => (
//             <tr key={index}>
//               <td style={cellStyle}>{leader.name}</td>
//               <td style={cellStyle}>{leader.phoneNumber}</td>
//               <td style={cellStyle}>{leader.county}</td>
//               <td style={cellStyle}>{leader.email}</td>
//               <td style={cellStyle}>{leader.membershipNo}</td>
//               <td style={cellStyle}>{leader.status}</td>
//               <td style={cellStyle}>{leader.age}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div style={{ display: "flex", marginTop: "10px" }}>
//         <ReactHTMLTableToExcel
//           id="excel-button"
//           className="download-table-xls-button"
//           table="leader-table"
//           filename="leaders"
//           sheet="leaders"
//           buttonText="Download as Excel"
//           style={{
//             marginRight: "10px",
//             padding: "8px 16px",
//             backgroundColor: "#007bff",
//             color: "#fff",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//           }}
//         />
//         <PDFDownloadLink
//           document={
//             <Document>
//               <Page style={styles.page}>
//                 <View style={styles.section}>
//                   <Text style={styles.heading}>Young Leaders</Text>
//                   <View style={styles.table}>
//                     <View>
//                       <Text style={styles.th}>Name</Text>
//                       <Text style={styles.th}>Phone Number</Text>
//                       <Text style={styles.th}>County</Text>
//                       <Text style={styles.th}>Email</Text>
//                       <Text style={styles.th}>MembershipNo</Text>
//                       <Text style={styles.th}>Status</Text>
//                       <Text style={styles.th}>Age</Text>
//                     </View>
//                     {filteredLeaders.map((leader, index) => (
//                       <View key={index}>
//                         <Text style={styles.td}>{leader.name}</Text>
//                         <Text style={styles.td}>{leader.phoneNumber}</Text>
//                         <Text style={styles.td}>{leader.county}</Text>
//                         <Text style={styles.td}>{leader.email}</Text>
//                         <Text style={styles.td}>{leader.membershipNo}</Text>
//                         <Text style={styles.td}>{leader.status}</Text>
//                         <Text style={styles.td}>{leader.age}</Text>
//                       </View>
//                     ))}
//                   </View>
//                 </View>
//               </Page>
//             </Document>
//           }
//           fileName="leaders.pdf"
//         >
//           {({ blob, url, loading, error }) =>
//             loading ? "Loading document..." : "Download as PDF"
//           }
//         </PDFDownloadLink>
//       </div>
//     </div>
//   );
// };

// const containerStyle = {
//   padding: "20px",
//   background: "#fff",
//   borderRadius: "8px",
//   boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// };

// const headingStyle = {
//   fontSize: "18px",
//   marginBottom: "20px",
//   fontFamily: "Arial, sans-serif",
// };

// const tableStyle = {
//   width: "100%",
//   borderCollapse: "collapse",
//   fontFamily: "Arial, sans-serif",
// };

// const cellStyle = {
//   border: "1px solid #ccc",
//   padding: "10px",
//   textAlign: "left",
// };

// export default LeaderTable;






import React, { useState } from "react";
import { CSVLink } from "react-csv";
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

const LeaderTable = ({ leaders }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLeaders = leaders.filter((leader) =>
    leader.county.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const styles = StyleSheet.create({
    page: { padding: 30 },
    section: { margin: 10, padding: 10, flexGrow: 1 },
    heading: { fontSize: 24, marginBottom: 10 },
    table: { display: "table", width: "auto", margin: "0 auto" },
    th: { border: "1px solid black", padding: 5, backgroundColor: "#f2f2f2" },
    td: { border: "1px solid black", padding: 5 },
  });

  // CSV data
  const csvData = filteredLeaders.map((leader) => ({
    Name: leader.name,
    "Phone Number": leader.phoneNumber,
    County: leader.county,
    Email: leader.email,
    MembershipNo: leader.membershipNo,
    Status: leader.status,
    Age: leader.age,
  }));

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Young Leaders</h2>
      <input
        type="text"
        placeholder="Search by county..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          margin: "10px 0",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <table style={tableStyle} id="leader-table">
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Phone Number</th>
            <th style={styles.th}>County</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>MembershipNo</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Age</th>
          </tr>
        </thead>
        <tbody>
          {filteredLeaders.map((leader, index) => (
            <tr key={index}>
              <td style={styles.td}>{leader.name}</td>
              <td style={styles.td}>{leader.phoneNumber}</td>
              <td style={styles.td}>{leader.county}</td>
              <td style={styles.td}>{leader.email}</td>
              <td style={styles.td}>{leader.membershipNo}</td>
              <td style={styles.td}>{leader.status}</td>
              <td style={styles.td}>{leader.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ display: "flex", marginTop: "10px" }}>
        {/* Download as CSV */}
        <CSVLink
          data={csvData}
          filename="leaders.csv"
          className="download-link"
        >
          Download as CSV
        </CSVLink>

        {/* Download as PDF */}
        <PDFDownloadLink
          document={
            <Document>
              <Page style={styles.page}>
                <View style={styles.section}>
                  {/* PDF content */}
                </View>
              </Page>
            </Document>
          }
          fileName="leaders.pdf"
        >
          {({ loading }) => (loading ? "Loading document..." : "Download as PDF")}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

const containerStyle = {
  padding: "20px",
  background: "#fff",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

const headingStyle = {
  fontSize: "18px",
  marginBottom: "20px",
  fontFamily: "Arial, sans-serif",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  fontFamily: "Arial, sans-serif",
};

export default LeaderTable;