// Dashboard.jsx
import { useState, useEffect } from "react";
import Navbar from "../assets/Components/Navbar";
import Streak from "../assets/Components/streaks";
import Timer from "../assets/Components/Timer";
import ExerciseInput from "../assets/Components/ExerciseInput";
import ExerciseChart from "../assets/Components/ExerciseChart";
import Bmrcalculation from "../assets/Components/BMR";
import DailyChallenges from "../assets/Components/Todochallenges";

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
        <div className="bg-[#0F0E0E] min-h-screen" style={{ fontFamily: 'Alan sans' }} >
            <Navbar />

            {/* Streak & Timer Section */}
            <section className="p-6 sm:p-10 bg-[#0F0E0E]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#ccc8e6] font-bold">
                    <div className="flex flex-col items-center justify-center p-6 rounded-4xl shadow-[5px_5px_0px_0px_rgba(109,40,217)] h-72 sm:h-80 md:h-96 hover:scale-102 hover:border-[#483AA0] transform duration-300 border-2 text-3xl sm:text-4xl md:text-5xl">
                        <Streak />
                    </div>
                    <div className="flex flex-col items-center justify-center p-6 rounded-4xl shadow-[5px_5px_0px_0px_rgba(109,40,217)] h-72 sm:h-80 md:h-96 hover:scale-102 hover:border-[#483AA0] transform duration-300 border-2 text-3xl sm:text-4xl md:text-5xl">
                        <Timer />
                    </div>
                </div>
            </section>

            {/* Exercises + Chart Section */}
            <div className="flex flex-col md:flex-row bg-[#0F0E0E] text-[#ccc8e6] p-6 sm:p-8 m-6 sm:m-10 rounded-4xl shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:scale-102 hover:border-[#483AA0] transform duration-300 border-2 gap-6">

                {/* Left Side: Input + List + Workout Explorer */}
                <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">Today's Exercises</h2>
                    <ExerciseInput onAdd={handleAdd} />

                    <div className="mt-4 w-full max-w-lg h-64 sm:h-72 md:h-80 overflow-y-auto">
                        <ul className="space-y-2">
                            {exercises.map((ex) => (
                                <li
                                    key={ex.id}
                                    className="p-3 bg-[#1A1919] rounded flex justify-between items-center text-sm sm:text-base"
                                >
                                    <div>
                                        <strong>{ex.name}</strong> - Sets: {ex.sets}, Reps: {ex.reps} ({ex.date})
                                    </div>
                                    <button
                                        onClick={() => handleDelete(ex.id)}
                                        className=" cursor-pointer ml-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs sm:text-sm"
                                    >
                                        Delete
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Side: Chart */}
                <div className="flex-1 flex justify-center items-start">
                    <div className="w-full max-w-md h-72 sm:h-80 md:h-96">
                        <h2 className="text-lg sm:text-xl font-bold mb-4 text-[#ccc8e6]">
                            Exercise tracking chart
                        </h2>
                        <ExerciseChart targets={targets} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center h-full  md:flex-row bg-[#0F0E0E] text-[#ccc8e6] p-20 sm:p-8 m-6 sm:m-10 rounded-4xl shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:scale-102 hover:border-[#483AA0] transform duration-300 border-2 gap-6">
                <Bmrcalculation />
            </div>
            <div className="flex flex-col justify-center h-full  md:flex-row bg-[#0F0E0E] text-[#ccc8e6] p-20 sm:p-8 m-6 sm:m-10 rounded-4xl shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:scale-102 hover:border-[#483AA0] transform duration-300 border-2 gap-6">
                
                <DailyChallenges />
            </div>

            <footer className="bg-[#0F0E0E] h-5">

            </footer>

            
        </div>


    );
}

export default Dashboard;
