import { useEffect, useState } from "react";

const inputClass = "input";

export default function ExerciseInput({ onAdd, initialName = "" }) {
  const [name, setName] = useState(initialName);
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (initialName) setName(initialName);
  }, [initialName]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || busy) return;
    setBusy(true);
    try {
      await onAdd({
        name: name.trim(),
        sets: Number(sets) || 0,
        reps: Number(reps) || 0,
        weight: Number(weight) || 0,
        date: new Date().toISOString().slice(0, 10),
      });
      setName(initialName || "");
      setSets("");
      setReps("");
      setWeight("");
    } finally {
      setBusy(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
      <input
        className={inputClass}
        placeholder="Exercise"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className={inputClass}
        type="number"
        placeholder="Sets"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
        min="0"
      />
      <input
        className={inputClass}
        type="number"
        placeholder="Reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        min="0"
      />
      <input
        className={inputClass}
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        min="0"
        step="0.5"
      />
      <button type="submit" className="btn btn-primary" disabled={busy}>
        {busy ? "Saving…" : "Log set"}
      </button>
    </form>
  );
}
