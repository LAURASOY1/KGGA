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



import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './SchoolsPage.css';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

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
  "Hilltop High School"
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
      flexDirection: 'row',
      backgroundColor: '#ffffff',
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    },
    heading: {
      fontSize: 18,
      marginBottom: 10,
      fontWeight: 'bold'
    },
    schoolName: {
      fontSize: 14,
      marginBottom: 5
    }
  });

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
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-button"
          table="schools-table"
          filename={`schools_${subcounty}`}
          sheet="schools"
          buttonText="Download as Excel"
        />

        {/* Download as PDF */}
        <PDFDownloadLink
          document={
            <Document>
              <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                  <Text style={styles.heading}>Schools in {subcounty}</Text>
                  {schools.map((school, index) => (
                    <Text key={index} style={styles.schoolName}>{school}</Text>
                  ))}
                </View>
              </Page>
            </Document>
          }
          fileName={`schools_${subcounty}.pdf`}
        >
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download as PDF')}
        </PDFDownloadLink>
      </div>
      
      {/* Table for Excel export */}
      <table id="schools-table" style={{ display: 'none' }}>
        <thead>
          <tr>
            <th>School Name</th>
          </tr>
        </thead>
        <tbody>
          {schools.map((school, index) => (
            <tr key={index}>
              <td>{school}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SchoolsPage;


