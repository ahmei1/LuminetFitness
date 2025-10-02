// Streak.jsx
import { useEffect, useState } from "react";

export default function Streak() {
  const [currentStreak, setCurrentStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    const streakData = JSON.parse(localStorage.getItem("streakData")) || {
      currentStreak: 0,
      bestStreak: 0,
      lastActiveDate: null,
    };

    let newCurrent = 1;

    if (streakData.lastActiveDate === today) {
      // Already logged today
      newCurrent = streakData.currentStreak;
    } else {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().slice(0, 10);

      if (streakData.lastActiveDate === yesterdayStr) {
        newCurrent = streakData.currentStreak + 1; // continue streak
      }
    }

    const newBest = Math.max(streakData.bestStreak, newCurrent);

    const newStreakData = {
      currentStreak: newCurrent,
      bestStreak: newBest,
      lastActiveDate: today,
    };

    localStorage.setItem("streakData", JSON.stringify(newStreakData));

    setCurrentStreak(newCurrent);
    setBestStreak(newBest);
  }, []);

  return (
    <div className="bg-[#0F0E0E] shadow p-4 rounded text-center">
      <span className="text-4xl">🔥</span>
      <h2 className="text-xl font-bold mt-2">{currentStreak} Day Streak</h2>
      <p className="text-[#ccc8e6]">Best: {bestStreak} days</p>
    </div>
  );
}
