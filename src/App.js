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
import TrefoilsPage from './TrefoilsPage'; // Import TrefoilsPage
import BravosPage from './BravosPage';
import EmailForm from "./EmailForm";
import FilteredStudents from "./FilteredStudents";
import AddStudentForm from "./AddStudentForm";

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
        <Route path="/trefoils" element={<TrefoilsPage />} />{" "}
        {/* Trefoils route */}
        <Route path="/bravos" element={<BravosPage />} /> {/* Bravos route */}
        <Route path="/notifications" element={<EmailForm />} />
        <Route path="/filtered-students" element={<FilteredStudents />} />
        <Route path="/add-student" element={<AddStudentForm />} />
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
      MembershipNo: "412",
      status: "Active",
      Age: "20",
    },
    {
      name: "Emma",
      phoneNumber: "234-567-8901",
      email: "emma@gmail.com",
      county: "Nairobi",
      MembershipNo: "412",
      status: "Active",
      Age: "20",
    },
    {
      name: "Michelle",
      phoneNumber: "345-678-9012",
      email: "michelle@gmail.com",
      county: "Nairobi",
      MembershipNo: "412",
      status: "Active",
      Age: "20",
    },
    {
      name: "Olivia",
      phoneNumber: "456-789-0123",
      email: "olivia@gmail.com",
      county: "Nyeri",
      MembershipNo: "412",
      status: "Active",
      Age: "20",
    },
    {
      name: "Taylo",
      phoneNumber: "567-890-1234",
      email: "taylo@gmail.com",
      county: "Mombasa",
      MembershipNo: "412",
      status: "Active",
      Age: "20",
    },
    {
      name: "Sophia",
      phoneNumber: "678-901-2345",
      email: "sophia@gmail.com",
      county: "Kisumu",
      MembershipNo: "412",
      status: "Active",
      Age: "21",
    },
    {
      name: "Grace",
      phoneNumber: "789-012-3456",
      email: "grace@gmail.com",
      county: "Kisumu",
      MembershipNo: "412",
      status: "Active",
      Age: "22",
    },
    {
      name: "Isabella",
      phoneNumber: "890-123-4567",
      email: "isabella@gmail.com",
      county: "Mombasa",
      MembershipNo: "412",
      status: "Active",
      Age: "23",
    },
    {
      name: "Joy",
      phoneNumber: "901-234-5678",
      email: "joy@gmail.com",
      county: "Mombasa",
      MembershipNo: "412",
      status: "Active",
      Age: "22",
    },
    {
      name: "Ava",
      phoneNumber: "012-345-6789",
      email: "ava@gmail.com",
      county: "Nakuru",
      MembershipNo: "412",
      status: "Inactive",
      Age: "21",
    },
  ];
};
 
export default App;