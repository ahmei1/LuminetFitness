// src/ExerciseInput.jsx
import { useState } from "react";

export default function ExerciseInput({ onAdd }) {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");

  const handleAdd = () => {
    if (!exercise) return;
    const newEntry = {
      id: Date.now(),
      name: exercise,
      sets: sets || "-",
      reps: reps || "-",
      date: new Date().toISOString().slice(0, 10)
    };
    onAdd(newEntry);
    setExercise("");
    setSets("");
    setReps("");
  };

  return (
    <div className="mb-4 p-4 bg-white shadow rounded">
      <input
        type="text"
        placeholder="Exercise name"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <input
        type="number"
        placeholder="Sets"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
        className="border p-2 mr-2 rounded w-20"
      />
      <input
        type="number"
        placeholder="Reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        className="border p-2 mr-2 rounded w-20"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </div>
  );
}
