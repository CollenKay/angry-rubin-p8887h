import React, { useState } from "react";
import "./CommunicationPage.css"; // Add this line to import the CSS

const CommunicationPage = () => {
  // State variables for search, filter, and table data
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [communications, setCommunications] = useState([
    // Sample data - replace with actual data or fetch from an API
    {
      id: 1,
      recipient: "John Doe",
      date: "2024-08-20",
      type: "Email",
      status: "Sent",
    },
    {
      id: 2,
      recipient: "Jane Smith",
      date: "2024-08-19",
      type: "SMS",
      status: "Failed",
    },
    // Add more sample data as needed
  ]);

  // Filtered communications based on search term and filter selection
  const filteredCommunications = communications.filter((comm) => {
    return (
      comm.recipient.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === "all" || comm.status === filter)
    );
  });

  return (
    <div className="communication-page">
      <h1>Communications</h1>

      <div className="communication-controls">
        <input
          type="text"
          className="form-control search-bar"
          placeholder="Search by recipient..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="form-select filter-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Statuses</option>
          <option value="Sent">Sent</option>
          <option value="Failed">Failed</option>
        </select>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Recipient</th>
            <th>Date</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredCommunications.map((comm) => (
            <tr key={comm.id}>
              <td>{comm.recipient}</td>
              <td>{comm.date}</td>
              <td>{comm.type}</td>
              <td>{comm.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommunicationPage;
