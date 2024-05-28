import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './GuidePage.css'; // Import your CSS file for GuidePage styling
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const students = [
  {
    name: "Mercy",
    age: 10,
    status: "Registered",
    category: "Brownie",
    membership: "Active",
    membershipno: 112,
  },
  {
    name: "Jane ",
    age: 13,
    status: "Registered",
    category: "Girl Guide",
    membership: "Inactive",
    membershipno: 113,
  },
  {
    name: "Faith ",
    age: 14,
    status: "Unregistered",
    category: "Girl Guide",
    membership: "Active",
    membershipno: 114,
  },
  {
    name: "Emily ",
    age: 12,
    status: "Registered",
    category: "Girl Guide",
    membership: "Inactive",
    membershipno: 115,
  },
  {
    name: "Doreen ",
    age: 13,
    status: "Registered",
    category: "Girl Guide",
    membership: "Active",
    membershipno: 116,
  },
  {
    name: "Sarah ",
    age: 14,
    status: "Registered",
    category: "Girl Guide",
    membership: "Active",
    membershipno: 117,
  },
  {
    name: "Joy",
    age: 12,
    status: "Registered",
    category: "Girl Guide",
    membership: "Active",
    membershipno: 118,
  },
  {
    name: "Olivia ",
    age: 11,
    status: "Registered",
    category: "Girl Guide",
    membership: "Active",
    membershipno: 119,
  },
  {
    name: "Mary ",
    age: 12,
    status: "Registered",
    category: "Girl Guide",
    membership: "Active",
    membershipno: 120,
  },
  {
    name: "Ava ",
    age: 13,
    status: "Registered",
    category: "Girl Guide",
    membership: "Active",
    membershipno: 121,
  },
];

const GuidePage = () => {
  const { school } = useParams();
  const [searchQuery, setSearchQuery] = useState('');

  // PDF
  const styles = StyleSheet.create({
  });


  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <table className="students-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Branch</th>
            <th>Status</th>
            <th>Membership</th>
            <th>MembershipNo</th>
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
                        <th style={styles.th}>MembershipNo</th>
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
