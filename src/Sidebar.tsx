import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/alumni">
            <i className="fas fa-user-graduate"></i> Alumni
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/donors">
            <i className="fas fa-hand-holding-usd"></i> Donors
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/events">
            <i className="fas fa-calendar-alt"></i> Events
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/donations">
            <i className="fas fa-gift"></i> Donations
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/communications">
            <i className="fas fa-envelope"></i> Communications
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/reports">
            <i className="fas fa-chart-bar"></i> Reports
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/settings">
            <i className="fas fa-cog"></i> Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
