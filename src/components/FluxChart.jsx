// FILE: src/components/FluxChart.jsx
import { useContext, useEffect, useState } from "react";
import { FluxContext } from "../context/FluxContext";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function FluxChart() {
  const { flux, tick } = useContext(FluxContext);
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    setDataPoints((prev) => [...prev.slice(-30), flux]); // son 30 değeri tut
  }, [flux]);

  const data = {
    labels: dataPoints.map((_, i) => i + 1),
    datasets: [
      {
        label: "Flux Akışı",
        data: dataPoints,
        borderColor: flux >= 0 ? "#FFD700" : "#A020F0",
        backgroundColor: "rgba(255, 215, 0, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        min: -1,
        max: 1,
        grid: { color: "#333" },
        ticks: { color: "#FFD700" },
      },
      x: {
        grid: { color: "#222" },
        ticks: { color: "#888" },
      },
    },
    plugins: {
      legend: { labels: { color: "#FFD700" } },
      tooltip: { backgroundColor: "#111", titleColor: "#FFD700" },
    },
  };

  return (
    <div style={{ width: "100%", height: "300px", marginTop: "20px" }}>
      <Line data={data} options={options} />
      <p style={{ color: "#0f0", textAlign: "center" }}>
        Tick: {tick} | Flux: {flux.toFixed(4)}
      </p>
    </div>
  );
}
