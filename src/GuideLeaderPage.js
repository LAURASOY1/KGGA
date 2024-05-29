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





import React from "react";
// import { useParams } from "react-router-dom";
import "./GuideLeaderPage.css"; // Import CSS file for styling

const GuideLeaderPage = () => {
  // const { county } = useParams();

  // Dummy data for guide leaders
  const guideLeadersByCounty = {
    nairobi: [
      {
        name: "John Doe",
        school: "Nairobi High School",
        phoneNumber: "123-456-7890",
        email: "john@example.com",
      },
      {
        name: "Jane Smith",
        school: "Nairobi Academy",
        phoneNumber: "987-654-3210",
        email: "jane@example.com",
      },
      {
        name: "David Johnson",
        school: "St. Mary's School",
        phoneNumber: "555-555-5555",
        email: "david@example.com",
      },
      {
        name: "Emily Wilson",
        school: "Greenfield School",
        phoneNumber: "111-222-3333",
        email: "emily@example.com",
      },
    ],
    kisumu: [
      {
        name: "Michael Brown",
        school: "Kisumu Day High",
        phoneNumber: "444-444-4444",
        email: "michael@example.com",
      },
      {
        name: "Sophia Martinez",
        school: "Kisumu Girls High",
        phoneNumber: "777-777-7777",
        email: "sophia@example.com",
      },
      {
        name: "Daniel Taylor",
        school: "Kisumu Academy",
        phoneNumber: "888-888-8888",
        email: "daniel@example.com",
      },
      {
        name: "Olivia Clark",
        school: "Victoria High School",
        phoneNumber: "999-999-9999",
        email: "olivia@example.com",
      },
    ],
    nakuru: [
      {
        name: "William Garcia",
        school: "Naivasha Girls",
        phoneNumber: "222-222-2222",
        email: "william@example.com",
      },
      {
        name: "Emma White",
        school: "Nakuru Girls High",
        phoneNumber: "666-666-6666",
        email: "emma@example.com",
      },
      {
        name: "James Robinson",
        school: "Nakuru Academy",
        phoneNumber: "333-333-3333",
        email: "james@example.com",
      },
      {
        name: "Ava Lee",
        school: "Nakuru International School",
        phoneNumber: "444-555-6666",
        email: "ava@example.com",
      },
    ],
    mombasa: [
      {
        name: "Liam Harris",
        school: "Mombasa High",
        phoneNumber: "777-888-9999",
        email: "liam@example.com",
      },
      {
        name: "Chloe King",
        school: "Mombasa Girls High",
        phoneNumber: "111-222-3333",
        email: "chloe@example.com",
      },
      {
        name: "Ethan Martinez",
        school: "Mombasa Academy",
        phoneNumber: "555-444-3333",
        email: "ethan@example.com",
      },
      {
        name: "Mia Brown",
        school: "Mombasa International School",
        phoneNumber: "666-777-8888",
        email: "mia@example.com",
      },
    ],
  };

  const counties = Object.keys(guideLeadersByCounty);

  return (
    <div className="guide-leader-page">
      <h1>Guide Leaders</h1>
      <table className="guide-leader-table">
        <thead>
          <tr>
            <th>County</th>
            <th>Name</th>
            <th>School</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {counties.map((countyName) =>
            guideLeadersByCounty[countyName].map((leader, index) => (
              <tr key={`${countyName}-${index}`}>
                {index === 0 && (
                  <td rowSpan={guideLeadersByCounty[countyName].length}>
                    {countyName}
                  </td>
                )}
                <td>{leader.name}</td>
                <td>{leader.school}</td>
                <td>{leader.phoneNumber}</td>
                <td>{leader.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GuideLeaderPage;

