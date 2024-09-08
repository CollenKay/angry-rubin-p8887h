import React, { useEffect, useRef } from "react";
import {
  Chart,
  LinearScale,
  BarController,
  BarElement,
  CategoryScale,
} from "chart.js";

const DonationsChart = () => {
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const canvas = document.getElementById(
      "donationsChart"
    ) as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        // If there's an existing chart, destroy it before creating a new one
        if (chartRef.current) {
          chartRef.current.destroy();
        }

        // Create a new chart instance and save it to the ref
        chartRef.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
              {
                label: "Donations ($)",
                data: [50000, 75000, 60000, 80000, 95000, 120000],
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return <canvas id="donationsChart"></canvas>;
};

export default DonationsChart;
