import { useState, useRef } from "react";

function Timer() {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    const timerId = useRef(null); // ✅ persist interval ID across renders

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
        <>
            <div className="flex flex-col gap-4 mt-4 items-center justify-center  p-4 rounded bg-[#0F0E0E] shadow w-77 h-66 mx-auto">

                <h1>Timer</h1>
                <div>
                    {String(hour).padStart(2, "0")}:
                    {String(minute).padStart(2, "0")}:
                    {String(second).padStart(2, "0")}
                </div>
                <div className="flex gap-4  p-4 rounded bg-[#0F0E0E] shadow ">

                    <button className="cursor-pointer  p-3 rounded-2xl border-3 text-[#ccc8e6] hover:border-[#483AA0] transform duration-200 " onClick={handleStart}>Start</button>
                    <button className="cursor-pointer  p-3 rounded-2xl border-3 text-[#ccc8e6] hover:border-[#483AA0] transform duration-200" onClick={handleStop}>Stop</button>
                    <button className="cursor-pointer  p-3 rounded-2xl border-3 text-[#ccc8e6] hover:border-[#483AA0] transform duration-200" onClick={handleReset}>Reset</button>
                </div>
                

            </div>
        </>
    );
}

export default Timer;
