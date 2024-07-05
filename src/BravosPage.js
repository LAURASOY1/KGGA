
// import React from "react";
// import "./BravosPage.css"; // Import CSS file for styling

// const BravosPage = () => {
//   // Dummy data for Bravos
//   const bravos = [
//     {
//       name: "James Smith",
//       membershipNo: "B001",
//       county: "Nairobi",
//       phoneNumber: "444-444-4444",
//       email: "james@example.com",
//       age: 15,
//     },
//     {
//       name: "Ethan Williams",
//       membershipNo: "B002",
//       county: "Kisumu",
//       phoneNumber: "777-777-7777",
//       email: "ethan@example.com",
//       age: 16,
//     },
//     {
//       name: "Lucas Johnson",
//       membershipNo: "B003",
//       county: "Nakuru",
//       phoneNumber: "888-888-8888",
//       email: "lucas@example.com",
//       age: 17,
//     },
//     {
//       name: "Mason Brown",
//       membershipNo: "B004",
//       county: "Mombasa",
//       phoneNumber: "999-999-9999",
//       email: "mason@example.com",
//       age: 18,
//     },
//   ];

//   return (
//     <div className="bravos-page">
//       <h1>Bravos</h1>
//       <table className="bravos-table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Membership No</th>
//             <th>County</th>
//             <th>Phone Number</th>
//             <th>Email</th>
//             <th>Age</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bravos.map((bravo, index) => (
//             <tr key={index}>
//               <td>{bravo.name}</td>
//               <td>{bravo.membershipNo}</td>
//               <td>{bravo.county}</td>
//               <td>{bravo.phoneNumber}</td>
//               <td>{bravo.email}</td>
//               <td>{bravo.age}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BravosPage;









// import React from "react";
// import "./BravosPage.css"; // Import CSS file for styling

// const BravosPage = () => {
//   // Dummy data for Bravos
//   const bravos = [
//     {
//       name: "Joanna",
//       membershipNo: "B001",
//       county: "Nairobi",
//       phoneNumber: "444-444-4444",
//       email: "james@example.com",
//       age: 65,
//     },
//     {
//       name: "Ethane",
//       membershipNo: "B002",
//       county: "Kisumu",
//       phoneNumber: "777-777-7777",
//       email: "ethan@example.com",
//       age: 66,
//     },
//     {
//       name: "Luca",
//       membershipNo: "B003",
//       county: "Nakuru",
//       phoneNumber: "888-888-8888",
//       email: "lucas@example.com",
//       age: 67,
//     },
//     {
//       name: "Jane",
//       membershipNo: "B004",
//       county: "Mombasa",
//       phoneNumber: "999-999-9999",
//       email: "mason@example.com",
//       age: 68,
//     },
//   ];

//   const cellStyle = {
//     padding: '8px',
//     border: '1px solid #ddd',
//     textAlign: 'left',
//   };

//   return (
//     <div className="bravos-page">
//       <h1>Bravos</h1>
//       <table className="bravos-table">
//         <thead>
//           <tr>
//             <th style={cellStyle}>Name</th>
//             <th style={cellStyle}>Membership No</th>
//             <th style={cellStyle}>County</th>
//             <th style={cellStyle}>Phone Number</th>
//             <th style={cellStyle}>Email</th>
//             <th style={cellStyle}>Age</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bravos.map((bravo, index) => (
//             <tr key={index}>
//               <td style={cellStyle}>{bravo.name}</td>
//               <td style={cellStyle}>{bravo.membershipNo}</td>
//               <td style={cellStyle}>{bravo.county}</td>
//               <td style={cellStyle}>{bravo.phoneNumber}</td>
//               <td style={cellStyle}>{bravo.email}</td>
//               <td style={cellStyle}>{bravo.age}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BravosPage;




// BravosPage.js
// import React, { useState, useEffect } from "react";
// import ReactHTMLTableToExcel from "react-html-table-to-excel";
// import {
//   PDFDownloadLink,
//   Page,
//   Text,
//   View,
//   Document,
//   StyleSheet,
// } from "@react-pdf/renderer";

// const BravosPage = () => {
//   const [bravos, setBravos] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     // Fetch bravos data
//     fetch("/api/bravos")
//       .then((response) => response.json())
//       .then((data) => setBravos(data))
//       .catch((error) => console.error("Error fetching bravos:", error));
//   }, []);

//   const filteredBravos = bravos.filter((bravo) =>
//     bravo.county.toLowerCase().includes(searchTerm.toLowerCase())
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
//       <h2 style={headingStyle}>Bravos</h2>
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
//       <table style={tableStyle} id="bravos-table">
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
//           {filteredBravos.map((bravo, index) => (
//             <tr key={index}>
//               <td style={cellStyle}>{bravo.name}</td>
//               <td style={cellStyle}>{bravo.phoneNumber}</td>
//               <td style={cellStyle}>{bravo.county}</td>
//               <td style={cellStyle}>{bravo.email}</td>
//               <td style={cellStyle}>{bravo.membershipNo}</td>
//               <td style={cellStyle}>{bravo.status}</td>
//               <td style={cellStyle}>{bravo.age}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div style={{ display: "flex", marginTop: "10px" }}>
//         <ReactHTMLTableToExcel
//           id="excel-button"
//           className="download-table-xls-button"
//           table="bravos-table"
//           filename="bravos"
//           sheet="bravos"
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
//                   <Text style={styles.heading}>Bravos</Text>
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
//                     {filteredBravos.map((bravo, index) => (
//                       <View key={index}>
//                         <Text style={styles.td}>{bravo.name}</Text>
//                         <Text style={styles.td}>{bravo.phoneNumber}</Text>
//                         <Text style={styles.td}>{bravo.county}</Text>
//                         <Text style={styles.td}>{bravo.email}</Text>
//                         <Text style={styles.td}>{bravo.membershipNo}</Text>
//                         <Text style={styles.td}>{bravo.status}</Text>
//                         <Text style={styles.td}>{bravo.age}</Text>
//                       </View>
//                     ))}
//                   </View>
//                 </View>
//               </Page>
//             </Document>
//           }
//           fileName="bravos.pdf"
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
// };

// export default BravosPage;




















import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

const BravosPage = () => {
  const [bravos, setBravos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch bravos data
    fetch("/api/bravos")
      .then((response) => response.json())
      .then((data) => setBravos(data))
      .catch((error) => console.error("Error fetching bravos:", error));
  }, []);

  const filteredBravos = bravos.filter((bravo) =>
    bravo.county.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const styles = StyleSheet.create({
    page: { padding: 30 },
    section: { margin: 10, padding: 10, flexGrow: 1 },
    heading: { fontSize: 24, marginBottom: 10 },
    table: { display: "table", width: "auto", margin: "0 auto" },
    th: { border: "1px solid black", padding: 5, backgroundColor: "#f2f2f2" },
    td: { border: "1px solid black", padding: 5 },
  });

  // Data for CSV export
  const csvData = filteredBravos.map((bravo) => ({
    Name: bravo.name,
    "Phone Number": bravo.phoneNumber,
    County: bravo.county,
    Email: bravo.email,
    MembershipNo: bravo.membershipNo,
    Status: bravo.status,
    Age: bravo.age,
  }));

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Bravos</h2>
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
      <table style={tableStyle} id="bravos-table">
        <thead>
          <tr>
            <th style={cellStyle}>Name</th>
            <th style={cellStyle}>Phone Number</th>
            <th style={cellStyle}>County</th>
            <th style={cellStyle}>Email</th>
            <th style={cellStyle}>MembershipNo</th>
            <th style={cellStyle}>Status</th>
            <th style={cellStyle}>Age</th>
          </tr>
        </thead>
        <tbody>
          {filteredBravos.map((bravo, index) => (
            <tr key={index}>
              <td style={cellStyle}>{bravo.name}</td>
              <td style={cellStyle}>{bravo.phoneNumber}</td>
              <td style={cellStyle}>{bravo.county}</td>
              <td style={cellStyle}>{bravo.email}</td>
              <td style={cellStyle}>{bravo.membershipNo}</td>
              <td style={cellStyle}>{bravo.status}</td>
              <td style={cellStyle}>{bravo.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: "flex", marginTop: "10px" }}>
        <CSVLink
          data={csvData}
          filename="bravos.csv"
          className="download-button"
          style={{
            marginRight: "10px",
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            textDecoration: "none", // Remove underline from link
          }}
        >
          Download as Excel
        </CSVLink>
        <PDFDownloadLink
          document={
            <Document>
              <Page style={styles.page}>
                <View style={styles.section}>
                  <Text style={styles.heading}>Bravos</Text>
                  <View style={styles.table}>
                    <View>
                      <Text style={styles.th}>Name</Text>
                      <Text style={styles.th}>Phone Number</Text>
                      <Text style={styles.th}>County</Text>
                      <Text style={styles.th}>Email</Text>
                      <Text style={styles.th}>MembershipNo</Text>
                      <Text style={styles.th}>Status</Text>
                      <Text style={styles.th}>Age</Text>
                    </View>
                    {filteredBravos.map((bravo, index) => (
                      <View key={index}>
                        <Text style={styles.td}>{bravo.name}</Text>
                        <Text style={styles.td}>{bravo.phoneNumber}</Text>
                        <Text style={styles.td}>{bravo.county}</Text>
                        <Text style={styles.td}>{bravo.email}</Text>
                        <Text style={styles.td}>{bravo.membershipNo}</Text>
                        <Text style={styles.td}>{bravo.status}</Text>
                        <Text style={styles.td}>{bravo.age}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              </Page>
            </Document>
          }
          fileName="bravos.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download as PDF"
          }
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

const cellStyle = {
  border: "1px solid #ccc",
  padding: "10px",
};

export default BravosPage;
