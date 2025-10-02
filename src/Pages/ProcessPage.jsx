// src/ProcessPage.jsx
import { useState, useEffect } from "react";
import ExerciseInput from "../assets/Components/ExerciseInput";
import ExerciseChart from "../assets/Components/ExerciseChart"; // make sure this file exists
import Navbar from "../assets/Components/Navbar";
import WorkoutExplorer from "../assets/Components/Workoutexplorer";


export default function ProcessPage() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("dailyExercises")) || [];
    setExercises(stored);
  }, []);

  const handleAdd = (entry) => {
    const updated = [entry, ...exercises];
    setExercises(updated);
    localStorage.setItem("dailyExercises", JSON.stringify(updated));
  };

  // Create targets dynamically from exercises (adjust field if needed)
  const targets = exercises.map((ex) => ex.name);

  return (
    <div>
      <Navbar />
      <h2 className="text-2xl font-bold mb-4">Today's Exercises</h2>
      <ExerciseInput onAdd={handleAdd} />
      <ul className="mt-4 space-y-2">
        {exercises.map((ex) => (
          <li key={ex.id} className="p-2 bg-gray-100 rounded">
            <strong>{ex.name}</strong> - Sets: {ex.sets}, Reps: {ex.reps} ({ex.date})
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Your Exercise Plan</h2>
        <ExerciseChart targets={targets} />
      </div>
      <WorkoutExplorer />
    </div>
  );
}
