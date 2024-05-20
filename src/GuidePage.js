// import React from "react";
// import { useParams } from "react-router-dom";
// import "./GuidePage.css"; // Import your CSS file for GuidePage styling
// import ReactHTMLTableToExcel from "react-html-table-to-excel";
// import {
//   PDFDownloadLink,
//   Page,
//   Text,
//   View,
//   Document,
//   StyleSheet,
// } from "@react-pdf/renderer";

// const students = [
//   { name: "Student 1", age: 12, status: "Registered", membership: "Active" },
//   {
//     name: "Student 2",
//     age: 13,
//     status: "Not Registered",
//     membership: "Inactive",
//   },
//   {
//     name: "Student 3",
//     age: 14,
//     status: "Registered",
//     membership: "Pending",
//   },
// ];

// const GuidePage = () => {
//   const { school } = useParams();

//   // Styles for PDF
//   const styles = StyleSheet.create({
//     page: {
//       flexDirection: "row",
//       backgroundColor: "#ffffff",
//     },
//     section: {
//       margin: 10,
//       padding: 10,
//       flexGrow: 1,
//     },
//     heading: {
//       fontSize: 18,
//       marginBottom: 10,
//       fontWeight: "bold",
//     },
//     table: {
//       width: "100%",
//       marginBottom: 10,
//       borderCollapse: "collapse",
//     },
//     th: {
//       backgroundColor: "#f2f2f2",
//       border: "1px solid #ddd",
//       padding: 8,
//       textAlign: "left",
//     },
//     td: {
//       border: "1px solid #ddd",
//       padding: 8,
//       textAlign: "left",
//     },
//   });

//   return (
//     <div>
//       <h2>{school}</h2>
//       <div>
//         <p>
//           <strong>Guide Leader:</strong> Leader Name
//         </p>
//         <p>
//           <strong>Contact:</strong> 123-456-7890
//         </p>
//       </div>
//       <h3>Students</h3>
//       {/* Download buttons */}
//       <div className="download-buttons">
//         {/* Download as Excel */}
//         <ReactHTMLTableToExcel
//           id="test-table-xls-button"
//           className="download-button"
//           table="students-table"
//           filename={`students_${school}`}
//           sheet="students"
//           buttonText="Download as Excel"
//         />

//         {/* Download as PDF */}
//         <PDFDownloadLink
//           document={
//             <Document>
//               <Page size="A4" style={styles.page}>
//                 <View style={styles.section}>
//                   <Text style={styles.heading}>Students in {school}</Text>
//                   <table style={styles.table}>
//                     <thead>
//                       <tr>
//                         <th style={styles.th}>Name</th>
//                         <th style={styles.th}>Age</th>
//                         <th style={styles.th}>Status</th>
//                         <th style={styles.th}>Membership</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {students.map((student, index) => (
//                         <tr key={index}>
//                           <td style={styles.td}>{student.name}</td>
//                           <td style={styles.td}>{student.age}</td>
//                           <td style={styles.td}>{student.status}</td>
//                           <td style={styles.td}>{student.membership}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </View>
//               </Page>
//             </Document>
//           }
//           fileName={`students_${school}.pdf`}
//         >
//           {({ loading }) =>
//             loading ? "Loading document..." : "Download as PDF"
//           }
//         </PDFDownloadLink>
//       </div>

//       {/* Table for Excel export */}
//       <table id="students-table" style={{ display: "none" }}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Status</th>
//             <th>Membership</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student, index) => (
//             <tr key={index}>
//               <td>{student.name}</td>
//               <td>{student.age}</td>
//               <td>{student.status}</td>
//               <td>{student.membership}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default GuidePage;




// import React from 'react';
// import { useParams } from 'react-router-dom';
// import './GuidePage.css'; // Import your CSS file for GuidePage styling
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';
// import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// const students = [
//   { name: "John Doe", age: 18, status: "Registered", membership: "Active" },
//   { name: "Jane Smith", age: 19, status: "Registered", membership: "Active" },
//   { name: "Michael Johnson", age: 20, status: "Registered", membership: "Active" },
//   { name: "Emily Brown", age: 21, status: "Registered", membership: "Active" },
//   { name: "David Wilson", age: 22, status: "Registered", membership: "Active" },
//   { name: "Sarah Taylor", age: 23, status: "Registered", membership: "Active" },
//   { name: "Daniel Martinez", age: 24, status: "Registered", membership: "Active" },
//   { name: "Olivia Anderson", age: 25, status: "Registered", membership: "Active" },
//   { name: "Matthew Thomas", age: 26, status: "Registered", membership: "Active" },
//   { name: "Ava Garcia", age: 27, status: "Registered", membership: "Active" }
// ];

// const GuidePage = () => {
//   const { school } = useParams();

//   // Styles for PDF
//   const styles = StyleSheet.create({
//     page: {
//       flexDirection: 'row',
//       backgroundColor: '#ffffff',
//     },
//     section: {
//       margin: 10,
//       padding: 10,
//       flexGrow: 1
//     },
//     heading: {
//       fontSize: 18,
//       marginBottom: 10,
//       fontWeight: 'bold'
//     },
//     table: {
//       width: '100%',
//       marginBottom: 10,
//       borderCollapse: 'collapse'
//     },
//     th: {
//       backgroundColor: '#f2f2f2',
//       border: '1px solid #ddd',
//       padding: 12, // Increased padding
//       textAlign: 'left'
//     },
//     td: {
//       border: '1px solid #ddd',
//       padding: 12, // Increased padding
//       textAlign: 'left'
//     }
//   });

//   return (
//     <div>
//       <h2>{school}</h2>
//       <div>
//         <p><strong>Guide Leader:</strong> Leader Name</p>
//         <p><strong>Contact:</strong> 123-456-7890</p>
//       </div>
//       <h3>Students</h3>
//       {/* Download buttons */}
//       <div className="download-buttons">
//         {/* Download as Excel */}
//         <ReactHTMLTableToExcel
//           id="test-table-xls-button"
//           className="download-button"
//           table="students-table"
//           filename={`students_${school}`}
//           sheet="students"
//           buttonText="Download as Excel"
//         />

//         {/* Download as PDF */}
//         <PDFDownloadLink
//           document={
//             <Document>
//               <Page size="A4" style={styles.page}>
//                 <View style={styles.section}>
//                   <Text style={styles.heading}>Students in {school}</Text>
//                   <table style={styles.table}>
//                     <thead>
//                       <tr>
//                         <th style={styles.th}>Name</th>
//                         <th style={styles.th}>Age</th>
//                         <th style={styles.th}>Status</th>
//                         <th style={styles.th}>Membership</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {students.map((student, index) => (
//                         <tr key={index}>
//                           <td style={styles.td}>{student.name}</td>
//                           <td style={styles.td}>{student.age}</td>
//                           <td style={styles.td}>{student.status}</td>
//                           <td style={styles.td}>{student.membership}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </View>
//               </Page>
//             </Document>
//           }
//           fileName={`students_${school}.pdf`}
//         >
//           {({ loading }) => (loading ? 'Loading document...' : 'Download as PDF')}
//         </PDFDownloadLink>
//       </div>

//       {/* Table for Excel export */}
//       <table id="students-table" style={{ display: 'none' }}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Status</th>
//             <th>Membership</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student, index) => (
//             <tr key={index}>
//               <td>{student.name}</td>
//               <td>{student.age}</td>
//               <td>{student.status}</td>
//               <td>{student.membership}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default GuidePage;

import React from 'react';
import { useParams } from 'react-router-dom';
import './GuidePage.css'; // Import your CSS file for GuidePage styling
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const students = [
  {
    name: "John",
    age: 10,
    status: "Registered",
    category: "Brownie",
    membership: "Active",
  },
  {
    name: "Jane ",
    age: 13,
    status: "Registered",
    category: "Girl Guide",
    membership: "Inactive",
  },
  {
    name: "Michael ",
    age: 14,
    status: "Unregistered",
    category: "Girl Guide",
    membership: "Active",
  },
  {
    name: "Emily ",
    age: 12,
    status: "Registered",
    category: "Girl Guide",
    membership: "Inactive",
  },
  {
    name: "David ",
    age: 13,
    status: "Registered",
    category: "Girl Guide",
    membership: "Active",
  },
  {
    name: "Sarah ",
    age: 14,
    status: "Registered",
    category: "Girl Guide",
    membership: "Active",
  },
  {
    name: "Daniel",
    age: 12,
    status: "Registered",
    category: "Girl Guide",
    membership: "Active",
  },
  {
    name: "Olivia ",
    age: 11,
    status: "Registered",
    category: "Girl Guide",
    membership: "Active",
  },
  {
    name: "Matthew ",
    age: 12,
    status: "Registered",
    category: "Girl Guide",
    membership: "Active",
  },
  {
    name: "Ava ",
    age: 13,
    status: "Registered",
    category: "Girl Guide",
    membership: "Active",
  },
];

const GuidePage = () => {
  const { school } = useParams();

  // Styles for PDF
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#ffffff',
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    },
    heading: {
      fontSize: 16,
      marginBottom: 10,
      fontWeight: 'bold'
    },
    table: {
      width: '100%',
      marginBottom: 10,
      borderCollapse: 'collapse'
    },
    th: {
      backgroundColor: '#f2f2f2',
      border: '1px solid #ddd',
      padding: 12, // Increased padding
      textAlign: 'left'
    },
    td: {
      border: '1px solid #ddd',
      padding: 12, // Increased padding
      textAlign: 'left'
    }
  });

  return (
    <div>
      <h2>{school}</h2>
      <div>
        <p>
          <strong>Guide Leader:</strong> Leader Name
        </p>
        <p>
          <strong>Contact:</strong> 123-456-7890
        </p>
      </div>
      <h3>Students</h3>
      <table className="students-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Category</th>
            <th>Status</th>
            <th>Membership</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.category}</td>
              <td>{student.status}</td>
              <td>{student.membership}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Download buttons */}
      <div className="download-buttons">
        {/* Download as Excel */}
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-button"
          table="students-table"
          filename={`students_${school}`}
          sheet="students"
          buttonText="Download as Excel"
        />

        {/* Download as PDF */}
        <PDFDownloadLink
          document={
            <Document>
              <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                  <Text style={styles.heading}>Students in {school}</Text>
                  <table style={styles.table}>
                    <thead>
                      <tr>
                        <th style={styles.th}>Name</th>
                        <th style={styles.th}>Age</th>
                        <th style={styles.th}>Category</th>
                        <th style={styles.th}>Status</th>
                        <th style={styles.th}>Membership</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((student, index) => (
                        <tr key={index}>
                          <td style={styles.td}>{student.name}</td>
                          <td style={styles.td}>{student.age}</td>
                          <td style={styles.td}>{student.category}</td>
                          <td style={styles.td}>{student.status}</td>
                          <td style={styles.td}>{student.membership}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </View>
              </Page>
            </Document>
          }
          fileName={`students_${school}.pdf`}
        >
          {({ loading }) =>
            loading ? "Loading document..." : "Download as PDF"
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default GuidePage;
