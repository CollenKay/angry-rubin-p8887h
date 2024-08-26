import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";
import AlumniPage from "./Component/AlumniPage";
import DonorsPage from "./Component/DonorsPage";
import CommunicationPage from "./Component/CommunicationPage";
import SettingsPage from "./Component/Settings";
import ReportsPage from "./Component/Reports";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/alumni" element={<AlumniPage />} />
          <Route path="/donors" element={<DonorsPage />} />
          <Route path="/communications" element={<CommunicationPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
