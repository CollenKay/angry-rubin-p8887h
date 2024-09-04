import React from "react";

const UpcomingEventsTable = () => {
  const upcomingEvents = [
    { name: "Alumni Gala", date: "2023-07-15", attendees: 200 },
    { name: "Homecoming Weekend", date: "2023-09-22", attendees: 500 },
    // more events...
  ];

  return (
    <div className="card">
      <div className="card-header">Upcoming Events</div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Date</th>
              <th>Attendees</th>
            </tr>
          </thead>
          <tbody>
            {upcomingEvents.map((event, index) => (
              <tr key={index}>
                <td>{event.name}</td>
                <td>{event.date}</td>
                <td>{event.attendees}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpcomingEventsTable;
