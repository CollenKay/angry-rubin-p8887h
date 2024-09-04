import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import AlumniPage from "./AlumniPage";
import DonorsPage from "./DonorsPage";
import CommunicationPage from "./CommunicationPage";
import SettingsPage from "./Settings";
import ReportsPage from "./Reports";

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
