import { useState } from "react";

export default function ExerciseInput({ onAdd }) {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!exercise) return;
    const newEntry = {
      id: Date.now(),
      name: exercise,
      sets: sets || "-",
      reps: reps || "-",
      date: new Date().toISOString().slice(0, 10),
    };
    onAdd(newEntry);
    setExercise("");
    setSets("");
    setReps("");
  };

  return (
    <div className="flex justify-center p-4 bg-[#0F0E0E] shadow rounded">
      <form
        onSubmit={handleAdd}
        className="flex flex-col sm:flex-row w-full sm:w-auto items-center justify-center gap-3 sm:gap-4 p-4 bg-[#0F0E0E] shadow rounded-xl"
      >
        <input
          type="text"
          placeholder="Exercise name"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          className="border-2 border-gray-300 p-2 w-full sm:w-48 rounded-2xl hover:scale-110 hover:border-[#483AA0] transform duration-300 focus:border-[#483AA0] outline-none"
        />

        <input
          type="number"
          placeholder="Sets"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          className="border-2 border-gray-300 p-2 w-full sm:w-24 rounded-2xl hover:scale-110 hover:border-[#483AA0] transform duration-300 focus:border-[#483AA0] outline-none"
        />

        <input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          className="border-2 border-gray-300 p-2 w-full sm:w-24 rounded-2xl hover:scale-110 hover:border-[#483AA0]  transform duration-300 focus:border-[#483AA0] outline-none"
        />

        <button
          type="submit"
          className=" cursor-pointer border-2 border-gray-400 text-white px-4 py-2 rounded-2xl hover:border-[#483AA0] transform duration-300 w-full sm:w-auto"
        >
          Add
        </button>
      </form>
    </div>
  );
}
