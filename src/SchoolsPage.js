// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const schools = [...Array(10).keys()].map(i => `School ${i + 1}`);

// const SchoolsPage = () => {
//   const { county } = useParams();
//   const navigate = useNavigate();

//   const handleSchoolClick = (school) => {
//     navigate(`/guide/${school}`);
//   };

//   return (
//     <div>
//       <h2>{county}</h2>
//       <ul>
//         {schools.map(school => (
//           <li key={school} onClick={() => handleSchoolClick(school)}>
//             {school}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SchoolsPage;


// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './SchoolsPage.css';

// // Dummy school names
// const schools = [
//   "Sunshine Elementary School",
//   "Maple Grove Middle School",
//   "Pinecrest High School",
//   "Meadowbrook Academy",
//   "Willow Creek Elementary",
//   "Greenwood High School",
//   "Lakeview Middle School",
//   "Oak Ridge Academy",
//   "Cedar Ridge Elementary",
//   "Hilltop High School"
// ];

// const SchoolsPage = () => {
//   const { subcounty } = useParams();
//   const navigate = useNavigate();

//   const handleSchoolClick = (school) => {
//     navigate(`/guide/${school}`);
//   };

//   return (
//     <div className="schools-container">
//       <h2>{subcounty}</h2>
//       <ul>
//         {schools.map((school, index) => (
//           <li key={index} onClick={() => handleSchoolClick(school)}>
//             {school}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SchoolsPage;



import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./SchoolsPage.css";
import { CSVLink } from "react-csv";
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

// Dummy school names
const schools = [
  "Sunshine Elementary School",
  "Maple Grove Middle School",
  "Pinecrest High School",
  "Meadowbrook Academy",
  "Willow Creek Elementary",
  "Greenwood High School",
  "Lakeview Middle School",
  "Oak Ridge Academy",
  "Cedar Ridge Elementary",
  "Hilltop High School",
];

const SchoolsPage = () => {
  const { subcounty } = useParams();
  const navigate = useNavigate();

  const handleSchoolClick = (school) => {
    navigate(`/guide/${school}`);
  };

  // Styles for PDF
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#ffffff",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    heading: {
      fontSize: 18,
      marginBottom: 10,
      fontWeight: "bold",
    },
    schoolName: {
      fontSize: 14,
      marginBottom: 5,
    },
  });

  // Data for CSV export
  const csvData = schools.map((school) => [school]);

  return (
    <div className="schools-container">
      <h2>{subcounty}</h2>
      <ul>
        {schools.map((school, index) => (
          <li key={index} onClick={() => handleSchoolClick(school)}>
            {school}
          </li>
        ))}
      </ul>

      {/* Download buttons */}
      <div className="download-buttons">
        {/* Download as Excel */}
        <CSVLink
          data={csvData}
          filename={`schools_${subcounty}.csv`}
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
                  <Text style={styles.heading}>Schools in {subcounty}</Text>
                  {schools.map((school, index) => (
                    <Text key={index} style={styles.schoolName}>
                      {school}
                    </Text>
                  ))}
                </View>
              </Page>
            </Document>
          }
          fileName={`schools_${subcounty}.pdf`}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download as PDF"
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
};
export default SchoolsPage;