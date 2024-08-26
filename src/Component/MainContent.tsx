import React from "react";
import Card from "./Card";
import DonationsChart from "./DonationsChart";
import AlumniChart from "./AlumniChart";
import RecentDonationsTable from "./RecentDonationsTable";
import UpcomingEventsTable from "./UpcomingEventsTable";

const MainContent = () => {
  const alumniData = 5000;
  const donorsData = 1200;
  const donationsData = 500000;
  const eventsData = 10;

  return (
    <div className="main-content">
      <h1 className="mb-4">Dashboard</h1>
      <div className="row">
        <Card title="Total Alumni" value={alumniData.toLocaleString()} />
        <Card title="Total Donors" value={donorsData.toLocaleString()} />
        <Card
          title="Total Donations"
          value={`$${donationsData.toLocaleString()}`}
        />
        <Card title="Upcoming Events" value={eventsData} />
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <DonationsChart />
        </div>
        <div className="col-md-6">
          <AlumniChart />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <RecentDonationsTable />
        </div>
        <div className="col-md-6">
          <UpcomingEventsTable />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
