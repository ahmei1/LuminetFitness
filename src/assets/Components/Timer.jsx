import { useState, useRef } from "react";

function Timer() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const timerId = useRef(null); // persist interval ID across renders

  const handleStart = () => {
    if (timerId.current) return; // Prevent multiple intervals
    timerId.current = setInterval(() => {
      setSecond((prevSecond) => {
        if (prevSecond + 1 === 60) {
          setMinute((prevMinute) => {
            if (prevMinute + 1 === 60) {
              setHour((prevHour) => prevHour + 1);
              return 0;
            }
            return prevMinute + 1;
          });
          return 0;
        }
        return prevSecond + 1;
      });
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerId.current);
    timerId.current = null;
  };

  const handleReset = () => {
    handleStop(); // stop timer before resetting
    setHour(0);
    setMinute(0);
    setSecond(0);
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center p-4 sm:p-6 rounded bg-[#0F0E0E] shadow w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto text-[#ccc8e6] text-center">
      <h1 className="text-5xl sm:text-4xl md:text-6xl font-bold">Timer</h1>

      <div className="text-2xl sm:text-3xl md:text-4xl font-mono">
        {String(hour).padStart(2, "0")}:
        {String(minute).padStart(2, "0")}:
        {String(second).padStart(2, "0")}
      </div>

      <div className="flex flex-wrap gap-3 justify-center mt-2 ">
        <button
          className="cursor-pointer py-2 px-4 sm:px-6 rounded-2xl border-2 border-[#ccc8e6] text-[#ccc8e6] hover:border-[#483AA0] transform duration-200 text-sm sm:text-base"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="cursor-pointer py-2 px-4 sm:px-6 rounded-2xl border-2 border-[#ccc8e6] text-[#ccc8e6] hover:border-[#483AA0] transform duration-200 text-sm sm:text-base"
          onClick={handleStop}
        >
          Stop
        </button>
        <button
          className="cursor-pointer py-2 px-4 sm:px-6 rounded-2xl border-2 border-[#ccc8e6] text-[#ccc8e6] hover:border-[#483AA0] transform duration-200 text-sm sm:text-base"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
