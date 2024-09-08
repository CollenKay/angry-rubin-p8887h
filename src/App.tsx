import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./pages/Sidebar";
import AlumniPage from "./pages/AlumniPage";
import DonorsPage from "./pages/DonorsPage";
import CommunicationPage from "./pages/CommunicationPage";
import EventList from './components/EventList';
import SettingsPage from "./Settings";
import ReportsPage from "./pages/Reports";

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
          <Route path="/events" element={<EventList />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
