// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import CountiesPage from './CountiesPage';
import SchoolsPage from './SchoolsPage';
import GuidePage from './GuidePage';
import LeaderTable from './LeaderTable';
import AddEventPage from "./AddEventPage";
import InvoicesPage from "./InvoicesPage"; 
import GuideLeaderPage from './GuideLeaderPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/counties" element={<CountiesPage />} />
        <Route path="/guide-leaders/:county" element={<GuideLeaderPage />} />
        <Route path="/schools/:county/:subcounty" element={<SchoolsPage />} />
        <Route path="/guide/:school" element={<GuidePage />} />
        <Route
          path="/leaders"
          element={<LeaderTable leaders={generateLeaders()} />}
        />
        <Route path="/events/new" element={<AddEventPage />} />
        <Route path="/invoices" element={<InvoicesPage />} />
      </Routes>
    </Router>
  );
}




const generateLeaders = () => {
  // Generate your leaders data here
  return [
    {
      name: "laura",
      phoneNumber: "123-456-7890",
      email: "laurachepck@gmail.com",
      county: "Nairobi",
      status: "Not registered",
    },
    {
      name: "Emma",
      phoneNumber: "234-567-8901",
      email: "emma@gmail.com",
      county: "Nairobi",
      status: "Not Registered",
    },
    {
      name: "Michelle",
      phoneNumber: "345-678-9012",
      email: "michelle@gmail.com",
      county: "Nairobi",
      status: "Registered",
    },
    {
      name: "Olivia",
      phoneNumber: "456-789-0123",
      email: "olivia@gmail.com",
      county: "Nyeri",
      status: "Not Registered",
    },
    {
      name: "Taylo",
      phoneNumber: "567-890-1234",
      email: "taylo@gmail.com",
      county: "Mombasa",
      status: "Registered",
    },
    {
      name: "Sophia",
      phoneNumber: "678-901-2345",
      email: "sophia@gmail.com",
      county: "Kisumu",
      status: "Not Registered",
    },
    {
      name: "Grace",
      phoneNumber: "789-012-3456",
      email: "grace@gmail.com",
      county: "Kisumu",
      status: "Registered",
    },
    {
      name: "Isabella",
      phoneNumber: "890-123-4567",
      email: "isabella@gmail.com",
      county: "Mombasa",
      status: "Not Registered",
    },
    {
      name: "Joy",
      phoneNumber: "901-234-5678",
      email: "joy@gmail.com",
      county: "Mombasa",
      status: "Registered",
    },
    {
      name: "Ava",
      phoneNumber: "012-345-6789",
      email: "ava@gmail.com",
      county: "Nakuru",
      status: "Not Registered",
    },
  ];
};
 
export default App;