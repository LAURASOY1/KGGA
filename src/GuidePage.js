// import React, { useState } from "react";
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
//   {
//     name: "Mercy",
//     age: 10,
//     status: "Registered",
//     category: "Brownie",
//     membership: "Active",
//     membershipno: 112,
//     parentName: "John Doe",
//     parentPhone: "+254701234567",
//   },
//   {
//     name: "Jane",
//     age: 13,
//     status: "Registered",
//     category: "Girl Guide",
//     membership: "Inactive",
//     membershipno: 113,
//     parentName: "Mary Doe",
//     parentPhone: "+254701234568",
//   },
//   {
//     name: "Faith",
//     age: 14,
//     status: "Unregistered",
//     category: "Girl Guide",
//     membership: "Active",
//     membershipno: 114,
//     parentName: "James Doe",
//     parentPhone: "+254701234569",
//   },
//   {
//     name: "Emily",
//     age: 12,
//     status: "Registered",
//     category: "Girl Guide",
//     membership: "Inactive",
//     membershipno: 115,
//     parentName: "Alice Doe",
//     parentPhone: "+254701234570",
//   },
//   {
//     name: "Doreen",
//     age: 13,
//     status: "Registered",
//     category: "Girl Guide",
//     membership: "Active",
//     membershipno: 116,
//     parentName: "Peter Doe",
//     parentPhone: "+254701234571",
//   },
//   {
//     name: "Sarah",
//     age: 14,
//     status: "Registered",
//     category: "Girl Guide",
//     membership: "Active",
//     membershipno: 117,
//     parentName: "Ann Doe",
//     parentPhone: "+254701234572",
//   },
//   {
//     name: "Joy",
//     age: 12,
//     status: "Registered",
//     category: "Girl Guide",
//     membership: "Active",
//     membershipno: 118,
//     parentName: "Michael Doe",
//     parentPhone: "+254701234573",
//   },
//   {
//     name: "Olivia",
//     age: 11,
//     status: "Registered",
//     category: "Girl Guide",
//     membership: "Active",
//     membershipno: 119,
//     parentName: "Grace Doe",
//     parentPhone: "+254701234574",
//   },
//   {
//     name: "Mary",
//     age: 12,
//     status: "Registered",
//     category: "Girl Guide",
//     membership: "Active",
//     membershipno: 120,
//     parentName: "George Doe",
//     parentPhone: "+254701234575",
//   },
//   {
//     name: "Ava",
//     age: 13,
//     status: "Registered",
//     category: "Girl Guide",
//     membership: "Active",
//     membershipno: 121,
//     parentName: "Helen Doe",
//     parentPhone: "+254701234576",
//   },
// ];

// const GuidePage = () => {
//   const { school } = useParams();
//   const [searchQuery, setSearchQuery] = useState("");

//   const styles = StyleSheet.create({
//     page: { padding: 30 },
//     section: { margin: 10, padding: 10, flexGrow: 1 },
//     heading: { fontSize: 24, marginBottom: 10 },
//     table: { display: "table", width: "auto", margin: "0 auto" },
//     th: { border: "1px solid black", padding: 5, backgroundColor: "#f2f2f2" },
//     td: { border: "1px solid black", padding: 5 },
//   });

//   const filteredStudents = students.filter((student) =>
//     student.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="guide-page-container">
//       <h2>{school}</h2>
//       <div>
//         <div className="guide-leader">
//           <p>
//             <strong>Guide Leader:</strong> Anastacia Wanjiru
//           </p>
//           <p>
//             <strong>Contact:</strong> 123-456-7890
//           </p>
//           <p>
//             <strong>Email:</strong> anas@gmail.com
//           </p>
//         </div>
//         <div className="headteacher">
//           <p>
//             <strong>School Headteacher:</strong> Mulei John
//           </p>
//           <p>
//             <strong>Contact:</strong> 123-456-7890
//           </p>
//           <p>
//             <strong>Email:</strong> muleij@gmail.com
//           </p>
//         </div>
//       </div>
//       <h3>Students</h3>

//       {/* Search input */}
//       <input
//         type="text"
//         placeholder="Search by name..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         className="search-input"
//       />
//       <table className="students-table" id="students-table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Branch</th>
//             <th>Status</th>
//             <th>Membership</th>
//             <th>Membership No</th>
//             <th>Parent Name</th>
//             <th>Parent Phone</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredStudents.map((student, index) => (
//             <tr key={index}>
//               <td>{student.name}</td>
//               <td>{student.age}</td>
//               <td>{student.category}</td>
//               <td>{student.status}</td>
//               <td>{student.membership}</td>
//               <td>{student.membershipno}</td>
//               <td>{student.parentName}</td>
//               <td>{student.parentPhone}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

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
//                         <th style={styles.th}>Category</th>
//                         <th style={styles.th}>Status</th>
//                         <th style={styles.th}>Membership</th>
//                         <th style={styles.th}>Membership No</th>
//                         <th style={styles.th}>Parent Name</th>
//                         <th style={styles.th}>Parent Phone</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {filteredStudents.map((student, index) => (
//                         <tr key={index}>
//                           <td style={styles.td}>{student.name}</td>
//                           <td style={styles.td}>{student.age}</td>
//                           <td style={styles.td}>{student.category}</td>
//                           <td style={styles.td}>{student.status}</td>
//                           <td style={styles.td}>{student.membership}</td>
//                           <td style={styles.td}>{student.membershipno}</td>
//                           <td style={styles.td}>{student.parentName}</td>
//                           <td style={styles.td}>{student.parentPhone}</td>
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
//     </div>
//   );
// };

// export default GuidePage;




























import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./GuidePage.css"; // Import your CSS file for GuidePage styling
import { CSVLink } from "react-csv";
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

const students = [
  {
    name: "Mercy",
    age: 10,
    status: "Registered",
    category: "Brownie",
    membership: "Active",
    membershipno: 112,
    parentName: "John Doe",
    parentPhone: "+254701234567",
  },
  {
    name: "Jane",
    age: 13,
    status: "Registered",
    category: "Girl Guide",
    membership: "Inactive",
    membershipno: 113,
    parentName: "Mary Doe",
    parentPhone: "+254701234568",
  },
  {
    name: "Faith",
    age: 14,
    status: "Unregistered",
    category: "Girl Guide",
    membership: "Active",
    membershipno: 114,
    parentName: "James Doe",
    parentPhone: "+254701234569",
  },
 {
    name: "Emily",
    age: 12,
    status: "Registered",
    category: "Girl Guide",
    membership: "Inactive",
    membershipno: 115,
    parentName: "Alice Doe",
    parentPhone: "+254701234570",
  },
  {
    name: "Doreen",
    age: 13,
    status: "Registered",
    category: "Girl Guide",
    membership: "Active",
    membershipno: 116,
    parentName: "Peter Doe",
    parentPhone: "+254701234571",
  },
  {
    name: "Sarah",
    age: 14,
    status: "Registered",
    category: "Girl Guide",
    membership: "Active",
    membershipno: 117,
    parentName: "Ann Doe",
    parentPhone: "+254701234572",
  },
  {
    name: "Joy",
    age: 12,
    status: "Registered",
    category: "Girl Guide",
    membership: "Active",
    membershipno: 118,
    parentName: "Michael Doe",
    parentPhone: "+254701234573",
  },
  {
    name: "Olivia",
    age: 11,
    status: "Registered",
    category: "Girl Guide",
    membership: "Active",
    membershipno: 119,
    parentName: "Grace Doe",
    parentPhone: "+254701234574",
  },
  {
    name: "Mary",
    age: 12,
    status: "Registered",
    category: "Girl Guide",
    membership: "Active",
    membershipno: 120,
    parentName: "George Doe",
    parentPhone: "+254701234575",
  },
  {
    name: "Ava",
    age: 13,
    status: "Registered",
    category: "Girl Guide",
    membership: "Active",
    membershipno: 121,
    parentName: "Helen Doe",
    parentPhone: "+254701234576",
  },
];

const GuidePage = () => {
  const { school } = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  const styles = StyleSheet.create({
    // Styles definition...
  });

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Data for CSV export
  const csvData = filteredStudents.map((student) => ({
    Name: student.name,
    Age: student.age,
    Branch: student.category,
    Status: student.status,
    Membership: student.membership,
    MembershipNo: student.membershipno,
    "Parent Name": student.parentName,
    "Parent Phone": student.parentPhone,
  }));

  return (
    <div className="guide-page-container">
      <h2>{school}</h2>
      <div>
        <div className="guide-leader">
          <p>
            <strong>Guide Leader:</strong> Anastacia Wanjiru
          </p>
          <p>
            <strong>Contact:</strong> 123-456-7890
          </p>
          <p>
            <strong>Email:</strong> anas@gmail.com
          </p>
        </div>
        <div className="headteacher">
          <p>
            <strong>School Headteacher:</strong> Mulei John
          </p>
          <p>
            <strong>Contact:</strong> 123-456-7890
          </p>
          <p>
            <strong>Email:</strong> muleij@gmail.com
          </p>
        </div>
      </div>
      <h3>Students</h3>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <table className="students-table" id="students-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Branch</th>
            <th>Status</th>
            <th>Membership</th>
            <th>Membership No</th>
            <th>Parent Name</th>
            <th>Parent Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.category}</td>
              <td>{student.status}</td>
              <td>{student.membership}</td>
              <td>{student.membershipno}</td>
              <td>{student.parentName}</td>
              <td>{student.parentPhone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Download buttons */}
      <div className="download-buttons">
        {/* Download as Excel */}
        <CSVLink
          data={csvData}
          filename={`students_${school}.csv`}
          className="download-button"
        >
          Download as Excel
        </CSVLink>

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
                        <th style={styles.th}>Membership No</th>
                        <th style={styles.th}>Parent Name</th>
                        <th style={styles.th}>Parent Phone</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredStudents.map((student, index) => (
                        <tr key={index}>
                          <td style={styles.td}>{student.name}</td>
                          <td style={styles.td}>{student.age}</td>
                          <td style={styles.td}>{student.category}</td>
                          <td style={styles.td}>{student.status}</td>
                          <td style={styles.td}>{student.membership}</td>
                          <td style={styles.td}>{student.membershipno}</td>
                          <td style={styles.td}>{student.parentName}</td>
                          <td style={styles.td}>{student.parentPhone}</td>
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
