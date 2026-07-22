import { useState } from "react";

export default function WorkoutSchedule({ schedules = [], onAdd, onDelete, onStart }) {
  const [form, setForm] = useState({
    workoutName: "",
    dayOfWeek: "",
    time: "",
    duration: "",
    notes: "",
  });
  const [busy, setBusy] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.workoutName || !form.dayOfWeek || !form.time || busy) return;
    setBusy(true);
    try {
      await onAdd(form);
      setForm({ workoutName: "", dayOfWeek: "", time: "", duration: "", notes: "" });
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="input"
          name="workoutName"
          placeholder="Workout name (e.g. Leg Day)"
          value={form.workoutName}
          onChange={handleChange}
          required
        />
        <select
          className="input"
          name="dayOfWeek"
          value={form.dayOfWeek}
          onChange={handleChange}
          required
        >
          <option value="">Select day</option>
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
            (day) => (
              <option key={day} value={day}>
                {day}
              </option>
            )
          )}
        </select>
        <input
          className="input"
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
        />
        <input
          className="input"
          type="number"
          name="duration"
          placeholder="Duration (minutes)"
          value={form.duration}
          onChange={handleChange}
        />
        <textarea
          className="input min-h-24"
          name="notes"
          placeholder="Notes (optional)"
          value={form.notes}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary w-full" disabled={busy}>
          {busy ? "Saving…" : "Add to schedule"}
        </button>
      </form>

      <div>
        <h3 className="font-semibold mb-3">This week</h3>
        {schedules.length === 0 ? (
          <p className="empty">No workouts scheduled yet.</p>
        ) : (
          <ul className="space-y-3 max-h-80 overflow-y-auto pr-1">
            {schedules.map((s) => (
              <li key={s.id} className="panel !p-4 flex justify-between gap-3 items-start">
                <div>
                  <p className="font-semibold">{s.workoutName}</p>
                  <p className="text-sm text-[var(--muted)]">
                    {s.dayOfWeek} · {s.time}
                    {s.duration ? ` · ${s.duration} min` : ""}
                  </p>
                  {s.notes && <p className="text-sm text-[var(--muted)] mt-1 italic">{s.notes}</p>}
                  {onStart && (
                    <button
                      type="button"
                      className="btn btn-ghost mt-2 py-1 px-3 text-sm"
                      onClick={() => onStart(s)}
                    >
                      Start workout
                    </button>
                  )}
                </div>
                <button
                  type="button"
                  className="btn btn-danger py-1 px-3 text-sm"
                  onClick={() => onDelete(s.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
