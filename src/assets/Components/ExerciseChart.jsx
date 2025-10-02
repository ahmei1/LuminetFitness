import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function ExerciseChart({ targets }) {
  // Count duplicates
  const counts = targets.reduce((acc, target) => {
    acc[target] = (acc[target] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(counts),
    datasets: [
      {
        label: "Exercise Targets Count",
        data: Object.values(counts),
        backgroundColor: "rgba(72, 58, 160, 1)",
        borderColor: "white",
        borderWidth: 1,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        borderRadius: 5,
        maxBarThickness: 100,
        minBarLength: 2,
        hoverBackgroundColor: "rgba(72, 58, 160, 0.8)",
        hoverBorderColor: "white",
        hoverBorderWidth: 2,
        hoverRadius: 6,
        hoverOffset: 4,
        outerWidth: 5,
        innerWidth: 5,
        spacing: 2,
        barThickness: 100,
        
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: "Exercise Target List Visualization" },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 10 },
      },
    },
  };

  return <Bar data={data} options={options} />;
}
