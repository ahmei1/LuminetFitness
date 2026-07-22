import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

export default function BodyWeight({ entries = [], onAdd, onDelete }) {
  const [weight, setWeight] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!weight || busy) return;
    setBusy(true);
    try {
      await onAdd({
        weight: Number(weight),
        date: new Date().toISOString().slice(0, 10),
      });
      setWeight("");
    } finally {
      setBusy(false);
    }
  };

  const data = {
    labels: entries.map((e) => e.date),
    datasets: [
      {
        label: "Body weight (kg)",
        data: entries.map((e) => e.weight),
        borderColor: "#483AA0",
        backgroundColor: "rgba(72, 58, 160, 0.18)",
        tension: 0.35,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: {
        ticks: { color: "#9b97b3" },
        grid: { color: "rgba(255,255,255,0.04)" },
      },
      y: {
        ticks: { color: "#9b97b3" },
        grid: { color: "rgba(255,255,255,0.04)" },
      },
    },
  };

  return (
    <div>
      <form onSubmit={submit} className="flex flex-col sm:flex-row gap-2 mb-4">
        <input
          className="input"
          type="number"
          step="0.1"
          min="1"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <button type="submit" className="btn btn-primary" disabled={busy}>
          Log weight
        </button>
      </form>

      {entries.length === 0 ? (
        <p className="empty">Track body weight to see your trend.</p>
      ) : (
        <>
          <div className="h-52 mb-4">
            <Line data={data} options={options} />
          </div>
          <ul className="space-y-2 max-h-40 overflow-y-auto">
            {[...entries].reverse().map((e) => (
              <li key={e.id} className="flex justify-between text-sm items-center">
                <span>
                  {e.date}: <strong>{e.weight} kg</strong>
                </span>
                <button
                  type="button"
                  className="text-red-400 hover:text-red-300"
                  onClick={() => onDelete(e.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
