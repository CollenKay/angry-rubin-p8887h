import React, { useState } from "react";
import Chart from "chart.js/auto";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const reportData = {
  // ... existing data structure ...
};

const Reports = () => {
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [reportType, setReportType] = useState<string>("");
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [startDate, setStartDate] = useState<string>("");
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [endDate, setEndDate] = useState<string>("");
  const [currentChart, setCurrentChart] = useState<Chart | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const generateReport = () => {
    if (!reportType) {
      alert("Please select a report type");
      return;
    }

    if (typeof document !== "undefined") {
      const canvas = document.getElementById(
        "reportChart"
      ) as HTMLCanvasElement; // Corrected line: added semicolon
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const ctx = canvas.getContext("2d");

      if (currentChart) {
        currentChart.destroy();
      }

      let newChart;
      switch (
        reportType
        // ... existing chart generation logic using switch statement ...
      ) {
      }

      setCurrentChart(newChart as unknown as Chart);
    }
  };

  return (
    <div>
      {/* Add your JSX elements here to render the report */}
      <canvas id="reportChart"></canvas>
    </div>
  );
};

export default Reports;
