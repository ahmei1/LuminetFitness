// src/ExerciseChart.jsx
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Pie } from "react-chartjs-2";

// Register Pie chart elements
ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function ExerciseChart({ targets }) {
  // Count duplicates
  const counts = targets.reduce((acc, target) => {
    acc[target] = (acc[target] || 0) + 1;
    return acc;
  }, {});

  // Define colors for slices
  const COLORS = [
    "rgba(72, 58, 160, 0.9)",   // Purple
    "rgba(255, 99, 132, 0.9)",  // Red
    "rgba(54, 162, 235, 0.9)",  // Blue
    "rgba(255, 206, 86, 0.9)",  // Yellow
    "rgba(75, 192, 192, 0.9)",  // Teal
    "rgba(153, 102, 255, 0.9)", // Violet
    "rgba(255, 159, 64, 0.9)",  // Orange
  ];

  const data = {
    labels: Object.keys(counts), // exercise names
    datasets: [
      {
        label: "Exercise Distribution",
        data: Object.values(counts), // number of times each exercise appears
        backgroundColor: COLORS,
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "right" },
      title: { display: true, text: "Exercise Target Distribution (Pie Chart)" },
    },
  };

  return <Pie data={data} options={options} width={300} height={300} />;
}
