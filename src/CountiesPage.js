// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const counties = [...Array(47).keys()].map(i => `County ${i + 1}`);

// const CountiesPage = () => {
//   const navigate = useNavigate();

//   const handleCountyClick = (county) => {
//     navigate(`/schools/${county}`);
//   };

//   return (
//     <div>
//       <h2>Counties</h2>
//       <ul>
//         {counties.map(county => (
//           <li key={county} onClick={() => handleCountyClick(county)}>
//             {county}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CountiesPage;




// CountiesPage.js
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./CountiesPage.css";

// const CountiesPage = () => {
//   const navigate = useNavigate();

//   const handleSubcountyClick = (county, subcounty) => {
//     navigate(`/schools/${county}/${subcounty}`);
//   };

//   // Dummy data for counties and subcounties
//   const counties = [
//     { name: "Nairobi", subcounties: ["Westlands", "Lang'ata", "Embakasi"] },
//     { name: "Kisumu", subcounties: ["Kisumu East", "Kisumu West", "Nyakach"] },
//     { name: "Mombasa", subcounties: ["Mvita", "Kisauni", "Nyali"] },
//     { name: "Eldoret", subcounties: ["Langas", "Kapsoya", "Huruma"] },
//     { name: "Nakuru", subcounties: ["Nakuru East", "Nakuru West", "Naivasha"] },
//   ];

//   return (
//     <div className="counties-container">
//       <h2>Counties</h2>
//       <ul>
//         {counties.map((county) => (
//           <li key={county.name}>
//             <strong>{county.name}</strong>
//             <ul>
//               {county.subcounties.map((subcounty) => (
//                 <li
//                   key={subcounty}
//                   onClick={() => handleSubcountyClick(county.name, subcounty)}
//                 >
//                   {subcounty}
//                 </li>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CountiesPage;



// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./CountiesPage.css";

// const CountiesPage = () => {
//   const navigate = useNavigate();

//   const handleSubcountyClick = (county, subcounty) => {
//     navigate(`/schools/${county}/${subcounty}`);
//   };

//   // Dummy data for counties and subcounties
//   const counties = [
//     { name: "Nairobi", subcounties: ["Westlands", "Lang'ata", "Embakasi"] },
//     { name: "Kisumu", subcounties: ["Kisumu East", "Kisumu West", "Nyakach"] },
//     { name: "Mombasa", subcounties: ["Mvita", "Kisauni", "Nyali"] },
//     { name: "Eldoret", subcounties: ["Langas", "Kapsoya", "Huruma"] },
//     { name: "Nakuru", subcounties: ["Nakuru East", "Nakuru West", "Naivasha"] },
//   ];

//   return (
//     <div className="counties-container">
//       <h2>Counties</h2>
//       <ul>
//         {counties.map((county) => (
//           <li key={county.name}>
//             <strong>{county.name}</strong>
//             <ul>
//               {county.subcounties.map((subcounty) => (
//                 <li
//                   key={subcounty}
//                   onClick={() => handleSubcountyClick(county.name, subcounty)}
//                 >
//                   {subcounty}
//                 </li>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CountiesPage;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CountiesPage.css";

const CountiesPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  
  // Dummy data for counties and subcounties
  const counties = [
    { name: "Nairobi", subcounties: ["Westlands", "Lang'ata", "Embakasi"] },
    { name: "Kisumu", subcounties: ["Kisumu East", "Kisumu West", "Nyakach"] },
    { name: "Mombasa", subcounties: ["Mvita", "Kisauni", "Nyali"] },
    { name: "Eldoret", subcounties: ["Langas", "Kapsoya", "Huruma"] },
    { name: "Nakuru", subcounties: ["Nakuru East", "Nakuru West", "Naivasha"] },
  ];

  const handleSubcountyClick = (county, subcounty) => {
    navigate(`/schools/${county}/${subcounty}`);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCounties = counties.filter((county) =>
    county.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="counties-container">
      <h2>Counties</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search counties..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <ul className="county-list">
        {filteredCounties.map((county) => (
          <li key={county.name}>
            <strong>{county.name}</strong>
            <ul>
              {county.subcounties.map((subcounty) => (
                <li
                  key={subcounty}
                  onClick={() => handleSubcountyClick(county.name, subcounty)}
                >
                  {subcounty}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountiesPage;
