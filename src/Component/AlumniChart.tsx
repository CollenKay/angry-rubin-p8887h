import React, { useEffect, useRef } from "react";
import {
  Chart,
  LinearScale,
  BarController,
  BarElement,
  CategoryScale,
} from "chart.js";

const AlumniChart = () => {
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const canvas = document.getElementById("alumniChart") as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        // If there's an existing chart, destroy it before creating a new one
        if (chartRef.current) {
          chartRef.current.destroy();
        }

        // Create a new chart instance and save it to the ref
        chartRef.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["2019", "2020", "2021", "2022", "2023"],
            datasets: [
              {
                label: "Number of Alumni",
                data: [950, 1000, 1050, 1100, 900],
                backgroundColor: "rgba(75, 192, 192, 0.6)",
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

  return <canvas id="alumniChart"></canvas>;
};

export default AlumniChart;
