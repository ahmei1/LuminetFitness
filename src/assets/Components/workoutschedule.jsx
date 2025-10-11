import { useState, useEffect } from "react";

function WorkoutSchedule() {
  const [form, setForm] = useState({
    workoutName: "",
    dayOfWeek: "",
    time: "",
    duration: "",
    notes: "",
  });

  const [schedules, setSchedules] = useState([]);

  // Load saved schedules from localStorage when component mounts
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("schedules")) || [];
    setSchedules(saved);
  }, []);

  // Save schedules to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("schedules", JSON.stringify(schedules));
  }, [schedules]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.workoutName || !form.dayOfWeek || !form.time) {
      alert("Please fill in workout name, day, and time.");
      return;
    }

    const newSchedule = {
      id: Date.now(),
      ...form,
    };

    setSchedules((prev) => [...prev, newSchedule]);
    setForm({
      workoutName: "",
      dayOfWeek: "",
      time: "",
      duration: "",
      notes: "",
    });
  };

  const handleDelete = (id) => {
    const filtered = schedules.filter((s) => s.id !== id);
    setSchedules(filtered);
  };

  return (
    <div className="max-w-2xl flex flex-col justify-center mx-auto p-6   shadow-xl rounded-2xl mt-6">
      <h1 className="text-2xl font-bold text-center mb-4">🏋️‍♂️ Workout Schedule</h1>

      {/* Schedule Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="workoutName"
          placeholder="Workout Name (e.g. Leg Day)"
          value={form.workoutName}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg hover:scale-103 hover:border-[#483AA0] transform duration-300 "
          required
        />

        <select
          name="dayOfWeek"
          value={form.dayOfWeek}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg text-gray-500 font-bold hover:scale-103 hover:border-[#483AA0] transform duration-300"
          required
        >
          <option value="">Select Day</option>
          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ].map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>

        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg hover:scale-103 hover:border-[#483AA0] transform duration-300"
          required
        />

        <input
          type="number"
          name="duration"
          placeholder="Duration (minutes)"
          value={form.duration}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg hover:scale-103 hover:border-[#483AA0] transform duration-300"
        />

        <textarea
          name="notes"
          placeholder="Notes (optional)"
          value={form.notes}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg hover:scale-103 hover:border-[#483AA0] transform duration-300"
        />

        <button
          type="submit"
          className="w-full p-3 border-2 text-2xl rounded-2xl hover:border-[#483AA0] transform duration-300 cursor-pointer"
        >
          Add to Schedule
        </button>
      </form>

      {/* Schedule List */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-3">Your Scheduled Workouts</h2>
        {schedules.length === 0 ? (
          <p className="text-gray-500">No workouts scheduled yet.</p>
        ) : (
          <ul className="space-y-3 max-h-64 overflow-y-auto pr-2">
            {schedules.map((s) => (
              <li
                key={s.id}
                className="border p-4 rounded-xl shadow-sm flex justify-between items-start"
              >
                <div>
                  <p className="font-semibold text-lg">{s.workoutName}</p>
                  <p className="text-sm text-gray-400">
                    {s.dayOfWeek} — {s.time}
                  </p>
                  {s.duration && (
                    <p className="text-sm text-gray-400">
                      Duration: {s.duration} min
                    </p>
                  )}
                  {s.notes && (
                    <p className="text-sm text-gray-500 italic">{s.notes}</p>
                  )}
                </div>
                <button
                  onClick={() => handleDelete(s.id)}
                  className="text-red-500 hover:text-red-700 text-sm cursor-pointer"
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

export default WorkoutSchedule;
