import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useMemo, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

export default function ProgressChart({ exercises = [] }) {
  const names = useMemo(() => {
    const set = new Set(exercises.map((e) => e.name));
    return Array.from(set).sort();
  }, [exercises]);

  const [selected, setSelected] = useState("");
  const active = selected || names[0] || "";

  const series = useMemo(() => {
    return exercises
      .filter((e) => e.name === active)
      .slice()
      .reverse()
      .map((e) => ({
        date: e.date,
        weight: Number(e.weight) || 0,
        volume: (Number(e.sets) || 0) * (Number(e.reps) || 0) * (Number(e.weight) || 0),
      }));
  }, [exercises, active]);

  if (!names.length) {
    return <p className="empty">Log exercises to see progress over time.</p>;
  }

  const data = {
    labels: series.map((s) => s.date),
    datasets: [
      {
        label: "Weight (kg)",
        data: series.map((s) => s.weight),
        borderColor: "#483AA0",
        backgroundColor: "rgba(72, 58, 160, 0.2)",
        tension: 0.3,
        fill: true,
      },
      {
        label: "Volume",
        data: series.map((s) => s.volume),
        borderColor: "#9b97b3",
        backgroundColor: "transparent",
        tension: 0.3,
        yAxisID: "y1",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: "#cfcce2" },
      },
    },
    scales: {
      x: {
        ticks: { color: "#9b97b3", maxRotation: 0 },
        grid: { color: "rgba(255,255,255,0.04)" },
      },
      y: {
        ticks: { color: "#9b97b3" },
        grid: { color: "rgba(255,255,255,0.04)" },
        title: { display: true, text: "Weight", color: "#9b97b3" },
      },
      y1: {
        position: "right",
        ticks: { color: "#9b97b3" },
        grid: { drawOnChartArea: false },
        title: { display: true, text: "Volume", color: "#9b97b3" },
      },
    },
  };

  return (
    <div>
      <div className="mb-3">
        <label className="label" htmlFor="exercise-select">
          Exercise
        </label>
        <select
          id="exercise-select"
          className="input max-w-xs"
          value={active}
          onChange={(e) => setSelected(e.target.value)}
        >
          {names.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>
      <div className="h-64 sm:h-72">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
