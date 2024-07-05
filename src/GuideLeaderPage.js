// GuideLeaderPage.js

// import React from "react";
// import { useParams } from "react-router-dom";
// import "./GuideLeaderPage.css"; // Import CSS file for styling

// const GuideLeaderPage = () => {
//   const { county } = useParams();

//   // Dummy data for guide leaders
//   const guideLeadersByCounty = {
//     nairobi: [
//       {
//         name: "John Doe",
//         school: "Nairobi High School",
//         phoneNumber: "123-456-7890",
//         email: "john@example.com",
//       },
//       {
//         name: "Jane Smith",
//         school: "Nairobi Academy",
//         phoneNumber: "987-654-3210",
//         email: "jane@example.com",
//       },
//       {
//         name: "David Johnson",
//         school: "St. Mary's School",
//         phoneNumber: "555-555-5555",
//         email: "david@example.com",
//       },
//       {
//         name: "Emily Wilson",
//         school: "Greenfield School",
//         phoneNumber: "111-222-3333",
//         email: "emily@example.com",
//       },
//     ],
//     kisumu: [
//       {
//         name: "Michael Brown",
//         school: "Kisumu Day High",
//         phoneNumber: "444-444-4444",
//         email: "michael@example.com",
//       },
//       {
//         name: "Sophia Martinez",
//         school: "Kisumu Girls High",
//         phoneNumber: "777-777-7777",
//         email: "sophia@example.com",
//       },
//       {
//         name: "Daniel Taylor",
//         school: "Kisumu Academy",
//         phoneNumber: "888-888-8888",
//         email: "daniel@example.com",
//       },
//       {
//         name: "Olivia Clark",
//         school: "Victoria High School",
//         phoneNumber: "999-999-9999",
//         email: "olivia@example.com",
//       },
//     ],
//     nakuru: [
//       {
//         name: "William Garcia",
//         school: "Naivasha Girls",
//         phoneNumber: "222-222-2222",
//         email: "william@example.com",
//       },
//       {
//         name: "Emma White",
//         school: "Nakuru Girls High",
//         phoneNumber: "666-666-6666",
//         email: "emma@example.com",
//       },
//       {
//         name: "James Robinson",
//         school: "Nakuru Academy",
//         phoneNumber: "333-333-3333",
//         email: "james@example.com",
//       },
//       {
//         name: "Ava Lee",
//         school: "Nakuru International School",
//         phoneNumber: "444-555-6666",
//         email: "ava@example.com",
//       },
//     ],
//     mombasa: [
//       {
//         name: "Liam Harris",
//         school: "Mombasa High",
//         phoneNumber: "777-888-9999",
//         email: "liam@example.com",
//       },
//       {
//         name: "Chloe King",
//         school: "Mombasa Girls High",
//         phoneNumber: "111-222-3333",
//         email: "chloe@example.com",
//       },
//       {
//         name: "Ethan Martinez",
//         school: "Mombasa Academy",
//         phoneNumber: "555-444-3333",
//         email: "ethan@example.com",
//       },
//       {
//         name: "Mia Brown",
//         school: "Mombasa International School",
//         phoneNumber: "666-777-8888",
//         email: "mia@example.com",
//       },
//     ],
//   };

//   const guideLeaders = guideLeadersByCounty[county] || [];

//   return (
//     <div className="guide-leader-page">
//       <h1>Guide Leaders in {county}</h1>
//       <table className="guide-leader-table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>School</th>
//             <th>Phone Number</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {guideLeaders.map((leader, index) => (
//             <tr key={index}>
//               <td>{leader.name}</td>
//               <td>{leader.school}</td>
//               <td>{leader.phoneNumber}</td>
//               <td>{leader.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default GuideLeaderPage;





// import React from "react";
// // import { useParams } from "react-router-dom";
// import "./GuideLeaderPage.css"; // Import CSS file for styling

// const GuideLeaderPage = () => {
//   // const { county } = useParams();

//   // Dummy data for guide leaders
//   const guideLeadersByCounty = {
//     nairobi: [
//       {
//         name: "John Doe",
//         school: "Nairobi High School",
//         schoolType: "Public",
//         phoneNumber: "123-456-7890",
//         email: "john@example.com",
//         MembershipNo: "312",
//       },
//       {
//         name: "Jane Smith",
//         school: "Nairobi Academy",
//         schoolType: "Public",
//         phoneNumber: "987-654-3210",
//         email: "jane@example.com",
//         MembershipNo: "322",
//       },
//       {
//         name: "David Johnson",
//         school: "St. Mary's School",
//         schoolType: "Private",
//         phoneNumber: "555-555-5555",
//         email: "david@example.com",
//         MembershipNo: "312",
//       },
//       {
//         name: "Emily Wilson",
//         school: "Greenfield School",
//         schoolType: "Private",
//         phoneNumber: "111-222-3333",
//         email: "emily@example.com",
//         MembershipNo: "312",
//       },
//     ],
//     kisumu: [
//       {
//         name: "Michael Brown",
//         school: "Kisumu Day High",
//         schoolType: "Public",
//         phoneNumber: "444-444-4444",
//         email: "michael@example.com",
//         MembershipNo: "312",
//       },
//       {
//         name: "Sophia Martinez",
//         school: "Kisumu Girls High",
//         schoolType: "Public",
//         phoneNumber: "777-777-7777",
//         email: "sophia@example.com",
//         MembershipNo: "312",
//       },
//       {
//         name: "Daniel Taylor",
//         school: "Kisumu Academy",
//         schoolType: "Public",
//         phoneNumber: "888-888-8888",
//         email: "daniel@example.com",
//         MembershipNo: "312",
//       },
//       {
//         name: "Olivia Clark",
//         school: "Victoria High School",
//         schoolType: "Public",
//         phoneNumber: "999-999-9999",
//         email: "olivia@example.com",
//         MembershipNo: "312",
//       },
//     ],
//     nakuru: [
//       {
//         name: "Garcia",
//         school: "Naivasha Girls",
//         schoolType: "Private",
//         phoneNumber: "222-222-2222",
//         email: "william@example.com",
//         MembershipNo: "312",
//       },
//       {
//         name: "Emma White",
//         school: "Nakuru Girls High",
//         schoolType: "Private",
//         phoneNumber: "666-666-6666",
//         email: "emma@example.com",
//         MembershipNo: "312",
//       },
//       {
//         name: "JaRob",
//         school: "Nakuru Academy",
//         schoolType: "Public",
//         phoneNumber: "333-333-3333",
//         email: "james@example.com",
//         MembershipNo: "312",
//       },
//       {
//         name: "Ava Lee",
//         school: "Nakuru International School",
//         schoolType: "Private",
//         phoneNumber: "444-555-6666",
//         email: "ava@example.com",
//         MembershipNo: "312",
//       },
//     ],
//     mombasa: [
//       {
//         name: "Liam",
//         school: "Mombasa High",
//         schoolType: "Public",
//         phoneNumber: "777-888-9999",
//         email: "liam@example.com",
//         MembershipNo: "312",
//       },
//       {
//         name: "Chloe King",
//         school: "Mombasa Girls High",
//         schoolType: "Public",
//         phoneNumber: "111-222-3333",
//         email: "chloe@example.com",
//         MembershipNo: "312",
//       },
//       {
//         name: "Esther",
//         school: "Mombasa Academy",
//         schoolType: "Private",
//         phoneNumber: "555-444-3333",
//         email: "ethan@example.com",
//         MembershipNo: "312",
//       },
//       {
//         name: "Mia ",
//         school: "Mombasa International School",
//         schoolType: "Public",
//         phoneNumber: "666-777-8888",
//         email: "mia@example.com",
//         MembershipNo: "312",
//       },
//     ],
//   };

//   const counties = Object.keys(guideLeadersByCounty);

//   return (
//     <div className="guide-leader-page">
//       <h1>Guide Leaders</h1>
//       <table className="guide-leader-table">
//         <thead>
//           <tr>
//             <th>County</th>
//             <th>Name</th>
//             <th>School</th>
//             <th>SchoolType</th>
//             <th>MembershipNo</th>
//             <th>Phone Number</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {counties.map((countyName) =>
//             guideLeadersByCounty[countyName].map((leader, index) => (
//               <tr key={`${countyName}-${index}`}>
//                 {index === 0 && (
//                   <td rowSpan={guideLeadersByCounty[countyName].length}>
//                     {countyName}
//                   </td>
//                 )}
//                 <td>{leader.name}</td>
//                 <td>{leader.school}</td>
//                 <td>{leader.schoolType}</td>
//                 <td>{leader.MembershipNo}</td>
//                 <td>{leader.phoneNumber}</td>
//                 <td>{leader.email}</td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default GuideLeaderPage;

// import React, { useState } from "react";
// import "./GuideLeaderPage.css"; // Import CSS file for styling

// const GuideLeaderPage = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCounty, setSelectedCounty] = useState("");
//   const [selectedSchoolType, setSelectedSchoolType] = useState("");

//   const guideLeadersByCounty = {
//     nairobi: [
//       {
//         name: "John Doe",
//         school: "Nairobi High School",
//         schoolType: "Public",
//         phoneNumber: "123-456-7890",
//         email: "john@example.com",
//         MembershipNo: "312",
//       },
//       {
//         name: "Jane Smith",
//         school: "Nairobi Academy",
//         schoolType: "Public",
//         phoneNumber: "987-654-3210",
//         email: "jane@example.com",
//         MembershipNo: "322",
//       },
//       {
//         name: "David Johnson",
//         school: "St. Mary's School",
//         schoolType: "Private",
//         phoneNumber: "555-555-5555",
//         email: "david@example.com",
//         MembershipNo: "312",
//       },
//       {
//         name: "Emily Wilson",
//         school: "Greenfield School",
//         schoolType: "Private",
//         phoneNumber: "111-222-3333",
//         email: "emily@example.com",
//         MembershipNo: "312",
//       },
//     ],
//     kisumu: [
//       {
//         name: "Michael Brown",
//         school: "Kisumu Day High",
//         schoolType: "Public",
//         phoneNumber: "444-444-4444",
//         email: "michael@example.com",
//         MembershipNo: "312",
//       },
//       {
//         name: "Sophia Martinez",
//         school: "Kisumu Girls High",
//         schoolType: "Public",
//         phoneNumber: "777-777-7777",
//         email: "sophia@example.com",
//         MembershipNo: "312",
//       },
//       {
//         name: "Daniel Taylor",
//         school: "Kisumu Academy",
//         schoolType: "Public",
//         phoneNumber: "888-888-8888",
//         email: "daniel@example.com",
//         MembershipNo: "312",
//       },
//       {
//         name: "Olivia Clark",
//         school: "Victoria High School",
//         schoolType: "Public",
//         phoneNumber: "999-999-9999",
//         email: "olivia@example.com",
//         MembershipNo: "312",
//       },
//     ],
//     nakuru: [
//       {
//         name: "Garcia",
//         school: "Naivasha Girls",
//         schoolType: "Private",
//         phoneNumber: "222-222-2222",
//         email: "william@example.com",
//         MembershipNo: "312",
//       },
//       {
//         name: "Emma White",
//         school: "Nakuru Girls High",
//         schoolType: "Private",
//         phoneNumber: "666-666-6666",
//         email: "emma@example.com",
//         MembershipNo: "312",
//       },
//       {
//         name: "JaRob",
//         school: "Nakuru Academy",
//         schoolType: "Public",
//         phoneNumber: "333-333-3333",
//         email: "james@example.com",
//         MembershipNo: "312",
//       },
//       {
//         name: "Ava Lee",
//         school: "Nakuru International School",
//         schoolType: "Private",
//         phoneNumber: "444-555-6666",
//         email: "ava@example.com",
//         MembershipNo: "312",
//       },
//     ],
//     mombasa: [
//       {
//         name: "Liam",
//         school: "Mombasa High",
//         schoolType: "Public",
//         phoneNumber: "777-888-9999",
//         email: "liam@example.com",
//         MembershipNo: "312",
//       },
//       {
//         name: "Chloe King",
//         school: "Mombasa Girls High",
//         schoolType: "Public",
//         phoneNumber: "111-222-3333",
//         email: "chloe@example.com",
//         MembershipNo: "312",
//       },
//       {
//         name: "Esther",
//         school: "Mombasa Academy",
//         schoolType: "Private",
//         phoneNumber: "555-444-3333",
//         email: "ethan@example.com",
//         MembershipNo: "312",
//       },
//       {
//         name: "Mia",
//         school: "Mombasa International School",
//         schoolType: "Public",
//         phoneNumber: "666-777-8888",
//         email: "mia@example.com",
//         MembershipNo: "312",
//       },
//     ],
//   };

//   const counties = Object.keys(guideLeadersByCounty);

//   const handleSearchQueryChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleCountyChange = (e) => {
//     setSelectedCounty(e.target.value);
//   };

//   const handleSchoolTypeChange = (e) => {
//     setSelectedSchoolType(e.target.value);
//   };

//   const filteredLeaders = counties
//     .filter((county) => selectedCounty === "" || county === selectedCounty)
//     .flatMap((county) => guideLeadersByCounty[county])
//     .filter((leader) => {
//       return (
//         (selectedSchoolType === "" ||
//           leader.schoolType === selectedSchoolType) &&
//         (leader.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           leader.school.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           leader.email.toLowerCase().includes(searchQuery.toLowerCase()))
//       );
//     });

//   return (
//     <div className="guide-leader-page">
//       <h1>Guide Leaders</h1>
//       <div className="filters">
//         <input
//           type="text"
//           placeholder="Search by name, school, or email"
//           value={searchQuery}
//           onChange={handleSearchQueryChange}
//         />
//         <select value={selectedCounty} onChange={handleCountyChange}>
//           <option value="">All Counties</option>
//           {counties.map((county) => (
//             <option key={county} value={county}>
//               {county}
//             </option>
//           ))}
//         </select>
//         <select value={selectedSchoolType} onChange={handleSchoolTypeChange}>
//           <option value="">All School Types</option>
//           <option value="Public">Public</option>
//           <option value="Private">Private</option>
//         </select>
//       </div>
//       <table className="guide-leader-table">
//         <thead>
//           <tr>
//             <th>County</th>
//             <th>Name</th>
//             <th>School</th>
//             <th>School Type</th>
//             <th>Membership No</th>
//             <th>Phone Number</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredLeaders.map((leader, index) => (
//             <tr key={`${leader.name}-${index}`}>
//               <td>
//                 {counties.find((county) =>
//                   guideLeadersByCounty[county].includes(leader)
//                 )}
//               </td>
//               <td>{leader.name}</td>
//               <td>{leader.school}</td>
//               <td>{leader.schoolType}</td>
//               <td>{leader.MembershipNo}</td>
//               <td>{leader.phoneNumber}</td>
//               <td>{leader.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default GuideLeaderPage;

import React, { useState } from "react";
import { CSVLink } from "react-csv";
import "./GuideLeaderPage.css"; // Import CSS file for styling

const GuideLeaderPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCounty, setSelectedCounty] = useState("");
  const [selectedSchoolType, setSelectedSchoolType] = useState("");

  const guideLeadersByCounty = {
    nairobi: [
      { name: "John Doe", school: "Nairobi High School", schoolType: "Public", phoneNumber: "123-456-7890", email: "john@example.com", MembershipNo: "312" },
      { name: "Jane Smith", school: "Nairobi Academy", schoolType: "Public", phoneNumber: "987-654-3210", email: "jane@example.com", MembershipNo: "322" },
      { name: "David Johnson", school: "St. Mary's School", schoolType: "Private", phoneNumber: "555-555-5555", email: "david@example.com", MembershipNo: "312" },
      { name: "Emily Wilson", school: "Greenfield School", schoolType: "Private", phoneNumber: "111-222-3333", email: "emily@example.com", MembershipNo: "312" },
    ],
    kisumu: [
      { name: "Michael Brown", school: "Kisumu Day High", schoolType: "Public", phoneNumber: "444-444-4444", email: "michael@example.com", MembershipNo: "312" },
      { name: "Sophia Martinez", school: "Kisumu Girls High", schoolType: "Public", phoneNumber: "777-777-7777", email: "sophia@example.com", MembershipNo: "312" },
      { name: "Daniel Taylor", school: "Kisumu Academy", schoolType: "Public", phoneNumber: "888-888-8888", email: "daniel@example.com", MembershipNo: "312" },
      { name: "Olivia Clark", school: "Victoria High School", schoolType: "Public", phoneNumber: "999-999-9999", email: "olivia@example.com", MembershipNo: "312" },
    ],
    nakuru: [
      { name: "Garcia", school: "Naivasha Girls", schoolType: "Private", phoneNumber: "222-222-2222", email: "william@example.com", MembershipNo: "312" },
      { name: "Emma White", school: "Nakuru Girls High", schoolType: "Private", phoneNumber: "666-666-6666", email: "emma@example.com", MembershipNo: "312" },
      { name: "JaRob", school: "Nakuru Academy", schoolType: "Public", phoneNumber: "333-333-3333", email: "james@example.com", MembershipNo: "312" },
      { name: "Ava Lee", school: "Nakuru International School", schoolType: "Private", phoneNumber: "444-555-6666", email: "ava@example.com", MembershipNo: "312" },
    ],
    mombasa: [
      { name: "Liam", school: "Mombasa High", schoolType: "Public", phoneNumber: "777-888-9999", email: "liam@example.com", MembershipNo: "312" },
      { name: "Chloe King", school: "Mombasa Girls High", schoolType: "Public", phoneNumber: "111-222-3333", email: "chloe@example.com", MembershipNo: "312" },
      { name: "Esther", school: "Mombasa Academy", schoolType: "Private", phoneNumber: "555-444-3333", email: "ethan@example.com", MembershipNo: "312" },
      { name: "Mia", school: "Mombasa International School", schoolType: "Public", phoneNumber: "666-777-8888", email: "mia@example.com", MembershipNo: "312" },
    ],
  };

  const counties = Object.keys(guideLeadersByCounty);

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCountyChange = (e) => {
    setSelectedCounty(e.target.value);
  };

  const handleSchoolTypeChange = (e) => {
    setSelectedSchoolType(e.target.value);
  };

  const filteredLeaders = counties
    .filter((county) => selectedCounty === "" || county === selectedCounty)
    .flatMap((county) => guideLeadersByCounty[county])
    .filter((leader) => {
      return (
        (selectedSchoolType === "" || leader.schoolType === selectedSchoolType) &&
        (leader.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          leader.school.toLowerCase().includes(searchQuery.toLowerCase()) ||
          leader.email.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });

  const csvData = filteredLeaders.map((leader) => ({
    County: counties.find((county) => guideLeadersByCounty[county].includes(leader)),
    Name: leader.name,
    School: leader.school,
    SchoolType: leader.schoolType,
    MembershipNo: leader.MembershipNo,
    PhoneNumber: leader.phoneNumber,
    Email: leader.email,
  }));

  return (
    <div className="guide-leader-page">
      <h1>Guide Leaders</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Search by name, school, or email"
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
        <select value={selectedCounty} onChange={handleCountyChange}>
          <option value="">All Counties</option>
          {counties.map((county) => (
            <option key={county} value={county}>
              {county}
            </option>
          ))}
        </select>
        <select value={selectedSchoolType} onChange={handleSchoolTypeChange}>
          <option value="">All School Types</option>
          <option value="Public">Public</option>
          <option value="Private">Private</option>
        </select>
        <CSVLink data={csvData} filename={"guide-leaders.csv"} className="btn">
          Download CSV
        </CSVLink>
      </div>
      <table className="guide-leader-table">
        <thead>
          <tr>
            <th>County</th>
            <th>Name</th>
            <th>School</th>
            <th>School Type</th>
            <th>Membership No</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredLeaders.map((leader, index) => (
            <tr key={`${leader.name}-${index}`}>
              <td>{counties.find((county) => guideLeadersByCounty[county].includes(leader))}</td>
              <td>{leader.name}</td>
              <td>{leader.school}</td>
              <td>{leader.schoolType}</td>
              <td>{leader.MembershipNo}</td>
              <td>{leader.phoneNumber}</td>
              <td>{leader.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GuideLeaderPage;
