import { useState, useEffect } from "react";

function DailyChallenges() {
  const today = new Date().toISOString().split("T")[0];

  const [challenges, setChallenges] = useState(() => {
    const saved = localStorage.getItem("challenges");
    const parsed = saved ? JSON.parse(saved) : [];
    return parsed.filter(ch => ch.date === today);
  });

  const [text, setText] = useState("");

  // Save to localStorage whenever challenges change
  useEffect(() => {
    localStorage.setItem("challenges", JSON.stringify(challenges));
  }, [challenges]);

  const addChallenge = () => {
    if (!text.trim()) return;

    if (challenges.length >= 3) {
      alert("You can only add 3 challenges per day!");
      return;
    }

    const newChallenge = {
      id: Date.now(),
      text,
      date: today,
      completed: false,
    };

    setChallenges(prev => [...prev, newChallenge]);
    setText("");
  };

  const toggleCompleted = (id) => {
    setChallenges(prev =>
      prev.map(ch =>
        ch.id === id ? { ...ch, completed: !ch.completed } : ch
      )
    );
  };

  //  Reset challenges
  const resetChallenges = () => {
    if (window.confirm("Are you sure you want to reset today's challenges?")) {
      setChallenges([]);
      localStorage.removeItem("challenges");
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="p-10 w-fit">
      <h2 className="text-4xl font-bold mb-4 text-center">Daily Challenges 💪</h2>
      <h3 className="p-6 text-2xl">Add 3 challenges To-do everyday and discipline yourself</h3>

      {/* Input section */}
      <form onSubmit={handlesubmit} action="">



      <div className="flex mb-4 justify-center  sm:flex-col items-center gap-2">
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Enter a challenge..."
          className="border-2  border-gray-300 p-3 w-full sm:w-full rounded-2xl hover:scale-105 hover:border-[#483AA0] transform duration-300 focus:border-[#483AA0] outline-none"
        />
        <button
          onClick={addChallenge}
          className="m-2 p-2 h-fit w-35  border-2 text-2xl rounded-2xl hover:border-[#483AA0] transform duration-300 cursor-pointer"
        >
          Add
        </button>
      </div>

      {/* Challenges list */}
      <ul className="space-y-2">
        {challenges.length === 0 ? (
          <p className="text-center text-gray-500 italic">No challenges yet. Add up to 3!</p>
        ) : (
          challenges.map(ch => (
            <li
              key={ch.id}
              className={`flex items-center p-2 border rounded-lg  hover:scale-103 transform duration-300 border-[#483AA0] ${
                ch.completed ? "bg-[#1A1919]" : "bg-[#1A1919]"
              }`}
            >
              <input
                type="checkbox"
                checked={ch.completed}
                onChange={() => toggleCompleted(ch.id)}
                className="mr-2 w-5 h-5 text-blue-500 cursor-pointer "
              />
              <span className={ch.completed ? "line-through text-[#645e8d] font-bold text-2xl p-2" : "text-[#ccc8e6] font-bold text-2xl p-2 "}>
                {ch.text}
              </span>
            </li>
          ))
        )}
      </ul>

      {/* Progress and reset */}
      <div className="mt-4 flex items-center justify-between text-[#ccc8e6] text-sm">
        <p>{challenges.filter(ch => ch.completed).length} / {challenges.length} done</p>
        <button
          onClick={resetChallenges}
          className="text-red-500 hover:text-red-600 font-bold cursor-pointer"
        >
          Reset
        </button>
      </div>
      </form>
    </div>
  );
}

export default DailyChallenges;
