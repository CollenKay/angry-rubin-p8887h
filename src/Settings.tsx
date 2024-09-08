import React, { useState } from "react";
import "./Settings.css";

const Settings = () => {
  // State management
  const [siteName, setSiteName] = useState("University Alumni CRM");
  const [adminEmail, setAdminEmail] = useState("admin@university.edu");
  const [timezone, setTimezone] = useState("UTC-8");
  const [enableMaintenance, setEnableMaintenance] = useState(false);

  const [passwordPolicy, setPasswordPolicy] = useState("medium");
  const [loginAttempts, setLoginAttempts] = useState(5);
  const [sessionTimeout, setSessionTimeout] = useState(30);
  const [enableTwoFactor, setEnableTwoFactor] = useState(false);

  const [smtpServer, setSmtpServer] = useState("smtp.university.edu");
  const [smtpPort, setSmtpPort] = useState(587);
  const [smtpUsername, setSmtpUsername] = useState("alumni_crm@university.edu");
  const [smtpPassword, setSmtpPassword] = useState("********");
  const [enableSSL, setEnableSSL] = useState(false);

  const [logLevel, setLogLevel] = useState("error");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [logRetention, setLogRetention] = useState(30);
  const [enableErrorReporting, setEnableErrorReporting] = useState(false);

  // Event handlers
  const handleSaveGeneralSettings = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    alert("General settings saved successfully!");
  };

  const handleSaveSecuritySettings = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    alert("Security settings saved successfully!");
  };

  const handleSaveEmailConfig = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    alert("Email configuration saved successfully!");
  };

  const handleViewLogs = () => {
    alert("Viewing system logs...");
  };

  const handleDownloadLogs = () => {
    alert("Preparing log download...");
  };

  const handlePasswordPolicyChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPasswordPolicy(e.target.value);
    if (e.target.value === "custom") {
      alert(
        "Custom password policy selected. Additional configuration options would appear here."
      );
    }
  };

  const handleEnableTwoFactorChange = (e: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setEnableTwoFactor(e.target.checked);
    if (e.target.checked) {
      alert(
        "Two-Factor Authentication enabled. Setup wizard would appear here."
      );
    }
  };

  const handleEnableMaintenanceChange = (e: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setEnableMaintenance(e.target.checked);
    if (e.target.checked) {
      alert(
        "Warning: Enabling maintenance mode will make the site inaccessible to regular users."
      );
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/index.html">
            Alumni CRM
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/profile.html">
                  <i className="fas fa-user"></i> Admin
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/logout.html">
                  <i className="fas fa-sign-out-alt"></i> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="sidebar">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="/index.html">
              <i className="fas fa-tachometer-alt"></i> Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/alumni.html">
              <i className="fas fa-user-graduate"></i> Alumni
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/donors.html">
              <i className="fas fa-hand-holding-usd"></i> Donors
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/donations.html">
              <i className="fas fa-gift"></i> Donations
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/communications.html">
              <i className="fas fa-envelope"></i> Communications
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/reports.html">
              <i className="fas fa-chart-bar"></i> Reports
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/settings.html">
              <i className="fas fa-cog"></i> Settings
            </a>
          </li>
        </ul>
      </div>

      <div className="main-content">
        <h1 className="mb-4">System Configuration</h1>

        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">General Settings</div>
              <div className="card-body">
                <form onSubmit={handleSaveGeneralSettings}>
                  <div className="mb-3">
                    <label htmlFor="siteName" className="form-label">
                      Site Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="siteName"
                      value={siteName}
                      onChange={(e) => setSiteName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="adminEmail" className="form-label">
                      Admin Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="adminEmail"
                      value={adminEmail}
                      onChange={(e) => setAdminEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="timezone" className="form-label">
                      Timezone
                    </label>
                    <select
                      className="form-select"
                      id="timezone"
                      value={timezone}
                      onChange={(e) => setTimezone(e.target.value)}
                    >
                      <option value="UTC-8">Pacific Time (PT)</option>
                      <option value="UTC-5">Eastern Time (ET)</option>
                      <option value="UTC+0">
                        Coordinated Universal Time (UTC)
                      </option>
                      <option value="UTC+1">Central European Time (CET)</option>
                    </select>
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="enableMaintenance"
                      checked={enableMaintenance}
                      onChange={handleEnableMaintenanceChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="enableMaintenance"
                    >
                      Enable Maintenance Mode
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Save General Settings
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Security Settings</div>
              <div className="card-body">
                <form onSubmit={handleSaveSecuritySettings}>
                  <div className="mb-3">
                    <label htmlFor="passwordPolicy" className="form-label">
                      Password Policy
                    </label>
                    <select
                      className="form-select"
                      id="passwordPolicy"
                      value={passwordPolicy}
                      onChange={handlePasswordPolicyChange}
                    >
                      <option value="medium">
                        Medium (8+ chars, uppercase, lowercase, numbers)
                      </option>
                      <option value="strong">
                        Strong (12+ chars, uppercase, lowercase, numbers,
                        symbols)
                      </option>
                      <option value="custom">Custom</option>
                    </select>
                  </div>
                  <div className="mb-3">
  <label htmlFor="loginAttempts" className="form-label">
    Max Login Attempts
  </label>
  <input
    type="number" // Input type set to number for better user experience
    className="form-control"
    id="loginAttempts"
    value={loginAttempts}
    onChange={(e) => setLoginAttempts(Number(e.target.value))} // Convert input to number
  />
</div>
<div className="mb-3">
  <label htmlFor="sessionTimeout" className="form-label">
    Session Timeout (minutes)
  </label>
  <input
    type="number" // Input type set to number for better UX
    className="form-control"
    id="sessionTimeout"
    value={sessionTimeout}
    onChange={(e) => {
      const newValue = Number(e.target.value);
      if (newValue >= 1 && newValue <= 60) {
        setSessionTimeout(newValue);
      } else {
        alert("Please enter a value between 1 and 60 minutes.");
      }
    }}
  />
</div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="enableTwoFactor"
                      checked={enableTwoFactor}
                      onChange={handleEnableTwoFactorChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="enableTwoFactor"
                    >
                      Enable Two-Factor Authentication
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Save Security Settings
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Email Configuration</div>
              <div className="card-body">
                <form onSubmit={handleSaveEmailConfig}>
                  <div className="mb-3">
                    <label htmlFor="smtpServer" className="form-label">
                      SMTP Server
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="smtpServer"
                      value={smtpServer}
                      onChange={(e) => setSmtpServer(e.target.value)}
                    />
                    </div>
                  <div className="mb-3">
  <label htmlFor="smtpPort" className="form-label">
    SMTP Port
  </label>
  <input
    type="number" // Input type set to number for better UX
    className="form-control"
    id="smtpPort"
    value={smtpPort}
    onChange={(e) => setSmtpPort(Number(e.target.value))} // Convert input to number
  />
</div>
                  <div className="mb-3">
                    <label htmlFor="smtpUsername" className="form-label">
                      SMTP Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="smtpUsername"
                      value={smtpUsername}
                      onChange={(e) => setSmtpUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="smtpPassword" className="form-label">
                      SMTP Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="smtpPassword"
                      value={smtpPassword}
                      onChange={(e) => setSmtpPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="enableSSL"
                      checked={enableSSL}
                      onChange={(e) => setEnableSSL(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="enableSSL">
                      Enable SSL/TLS
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Save Email Configuration
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-header">System Logs</div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="logLevel" className="form-label">
                      Log Level
                    </label>
                    <select
                      className="form-select"
                      id="logLevel"
                      value={logLevel}
                      onChange={(e) => setLogLevel(e.target.value)}
                    >
                      <option value="debug">Debug</option>
                      <option value="info">Info</option>
                      <option value="warning">Warning</option>
                      <option value="error">Error</option>
                    </select>
                  </div>
                  <div className="mb-3">
  <label htmlFor="sessionTimeout" className="form-label">
    Session Timeout (minutes)
  </label>
  <input
    type="number" // Input type set to number for better UX
    className="form-control"
    id="sessionTimeout"
    value={sessionTimeout}
    onChange={(e) => {
      const newValue = Number(e.target.value);
      if (newValue >= 1 && newValue <= 60) {
        setSessionTimeout(newValue);
      } else {
        alert("Please enter a value between 1 and 60 minutes.");
      }
    }}
  />
</div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="enableErrorReporting"
                      checked={enableErrorReporting}
                      onChange={(e) =>
                        setEnableErrorReporting(e.target.checked)
                      }
                    />
                    <label
                      className="form-check-label"
                      htmlFor="enableErrorReporting"
                    >
                      Enable Error Reporting
                    </label>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary me-2"
                    onClick={handleViewLogs}
                  >
                    View Logs
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleDownloadLogs}
                  >
                    Download Logs
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <span className="text-muted">
            © 2024 University Alumni CRM. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Settings;
