import { useState, useEffect } from "react";
import Navbar from "../assets/Components/Navbar";
import Streak from "../assets/Components/streaks";
import Timer from "../assets/Components/Timer";
import ExerciseInput from "../assets/Components/ExerciseInput";
import ExerciseChart from "../assets/Components/ExerciseChart";
import Bmrcalculation from "../assets/Components/BMR";
import DailyChallenges from "../assets/Components/Todochallenges";
import WorkoutSchedule from "../assets/Components/workoutschedule";
import Welcome from "../assets/Components/welcome";
import Quotes from "../assets/Components/Qoutes";

function Dashboard() {
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

  const handleDelete = (id) => {
    const updated = exercises.filter((ex) => ex.id !== id);
    setExercises(updated);
    localStorage.setItem("dailyExercises", JSON.stringify(updated));
  };

  const targets = exercises.map((ex) => ex.name);

  return (
    <div className="bg-[#0F0E0E] min-h-screen" style={{ fontFamily: "Alan sans" }}>

      <Navbar />

      {/* Welcome + Streak + Timer Section */}
      <section className="flex flex-col justify-center md:flex-row bg-[#0F0E0E] text-[#ccc8e6] px-4 sm:px-8 md:px-20 py-10 m-4 sm:m-6 md:m-10 rounded-4xl shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:scale-102 hover:border-[#483AA0] transform duration-300 border-2 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Welcome */}
          <div className="flex flex-col items-center justify-center p-6 rounded-4xl shadow-[5px_5px_0px_0px_rgba(109,40,217)] h-60 sm:h-72 md:h-96 border-2 text-2xl sm:text-3xl md:text-5xl font-bold hover:border-[#483AA0] transform duration-300">
            <Welcome />
          </div>
          {/* Streak */}
          <div className="flex flex-col items-center justify-center p-6 rounded-4xl shadow-[5px_5px_0px_0px_rgba(109,40,217)] h-60 sm:h-72 md:h-96 border-2 text-2xl sm:text-3xl md:text-5xl font-bold hover:border-[#483AA0] transform duration-300">
            <Streak />
          </div>
          {/* Timer */}
          <div className="flex flex-col items-center justify-center p-6 rounded-4xl shadow-[5px_5px_0px_0px_rgba(109,40,217)] h-60 sm:h-72 md:h-96 border-2 text-xl sm:text-3xl md:text-6xl font-bold hover:border-[#483AA0] transform duration-300">
            <Timer />
          </div>
          <div className="flex flex-col items-center justify-center p-6 rounded-4xl shadow-[5px_5px_0px_0px_rgba(109,40,217)] h-60 sm:h-72 md:h-96 border-2 text-xl sm:text-3xl md:text-6xl font-bold hover:border-[#483AA0] transform duration-300">
            <Quotes />
          </div>

        </div>
      </section>

      {/* Exercises + Chart Section */}
      <section className="flex flex-col md:flex-row bg-[#0F0E0E] text-[#ccc8e6] px-4 sm:px-8 md:px-20 py-10 m-4 sm:m-6 md:m-10 rounded-4xl shadow-[5px_5px_0px_0px_rgba(109,40,217)] transform duration-300 border-2 gap-8 hover:scale-102 hover:border-[#483AA0]">
        {/* Left Side: Input + List */}
        <div className="flex-1">
          <p className="font-bold text-3xl "> <span className="text-[#483AA0]">Write the exercises </span>you need to improve in and track the improvements using the charts</p>
          <br />
          <hr />

          <h2 className="p-2 text-lg sm:text-xl md:text-2xl ">Today's Exercises</h2>
          <ExerciseInput onAdd={handleAdd} />
          <div className="mt-4 w-full max-w-full sm:max-w-lg h-56 sm:h-72 md:h-80 overflow-y-auto">
            <ul className="space-y-2">
              {exercises.map((ex) => (
                <li
                  key={ex.id}
                  className="p-3 bg-[#1A1919] rounded flex justify-between items-center text-sm sm:text-base"
                >
                  <div>
                    <strong>{ex.name}</strong> - Sets: {ex.sets}, Reps: {ex.reps}, Weight: {ex.weight}, ({ex.date})
                  </div>
                  <button
                    onClick={() => handleDelete(ex.id)}
                    className="cursor-pointer ml-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs sm:text-sm"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Chart */}
        <div className="flex-1 flex justify-center items-start mt-10 md:mt-0 ">
          <div className="w-full max-w-md h-64 sm:h-80 md:h-96">
            <h2 className="text-lg sm:text-xl font-bold mb-4 text-[#ccc8e6]">Exercise Tracking Chart</h2>
            <ExerciseChart targets={targets} />
          </div>
        </div>
      </section>

      {/* Workout Schedule */}
      <section className="flex flex-col justify-center md:flex-row bg-[#0F0E0E] text-[#ccc8e6] px-4 sm:px-8 md:px-20 py-10 m-4 sm:m-6 md:m-10 rounded-4xl shadow-[5px_5px_0px_0px_rgba(109,40,217)] transform duration-300 border-2 gap-6 hover:scale-102 hover:border-[#483AA0]">
        <div className="flex-row">

          <p className="font-bold text-3xl sm:text-2xl md:text-2xl"> <span className="text-[#483AA0]">Create your workout </span> routine and record your progress </p>
          <br />
          <hr />
          <WorkoutSchedule />
        </div>
      </section>

      {/* BMR Calculation */}
      <section className="flex flex-col justify-center md:flex-row bg-[#0F0E0E] text-[#ccc8e6] px-4 sm:px-8 md:px-20 py-10 m-4 sm:m-6 md:m-10 rounded-4xl shadow-[5px_5px_0px_0px_rgba(109,40,217)] transform duration-300 border-2 gap-6 hover:scale-102 hover:border-[#483AA0]">
        <div className="flex-row">

          <p className="font-bold text-2xl sm:text-2xl md:text-2xl"> <span className="text-[#483AA0]">BMR Calculator —  </span> Find out how many calories your body burns at rest to plan your fitness goals smarter. </p>
          <br />
          <hr />
          <Bmrcalculation />

        </div>
      </section>

      {/* Daily Challenges */}
      <section className="flex flex-col justify-center items-center md:flex-row bg-[#0F0E0E] text-[#ccc8e6] px-4 sm:px-8 md:px-20 py-10 m-4 sm:m-6 md:m-10 rounded-4xl shadow-[5px_5px_0px_0px_rgba(109,40,217)] transform duration-300 border-2 gap-6 hover:scale-102 hover:border-[#483AA0]">
        
        <div className="flex-row place-items-center">

          <p className="text-2xl font-bold p-2"><span className="text-[#483AA0]">Daily 3 Challenges — </span> Get three fresh daily tasks to stay active and motivated.</p>
          <br />
          <hr className="border-t border-white w-full my-2" />

          
             <DailyChallenges />

        </div>
      </section>

      <footer className="bg-[#0F0E0E] h-5"></footer>
    </div>
  );
}

export default Dashboard;
