import React from "react";

const RecentDonationsTable = () => {
  const recentDonations = [
    { donor: "John Doe", amount: 1000, date: "2023-06-01" },
    { donor: "Jane Smith", amount: 5000, date: "2023-05-30" },
    // more donations...
  ];

  return (
    <div className="card">
      <div className="card-header">Recent Donations</div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Donor</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {recentDonations.map((donation, index) => (
              <tr key={index}>
                <td>{donation.donor}</td>
                <td>${donation.amount.toLocaleString()}</td>
                <td>{donation.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentDonationsTable;
