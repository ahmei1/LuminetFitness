import { useEffect, useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";

export default function RestTimer({ defaultSeconds = 90 }) {
  const [seconds, setSeconds] = useState(defaultSeconds);
  const [remaining, setRemaining] = useState(defaultSeconds);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return undefined;
    if (remaining <= 0) {
      setRunning(false);
      return undefined;
    }
    const id = setInterval(() => setRemaining((r) => r - 1), 1000);
    return () => clearInterval(id);
  }, [running, remaining]);

  const mins = String(Math.floor(remaining / 60)).padStart(2, "0");
  const secs = String(remaining % 60).padStart(2, "0");

  const preset = (value) => {
    setSeconds(value);
    setRemaining(value);
    setRunning(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="panel-title mb-0">Rest timer</h3>
        <div className="flex gap-2">
          {[60, 90, 120].map((v) => (
            <button
              key={v}
              type="button"
              className={`btn btn-ghost py-1 px-2 text-xs ${seconds === v ? "border-[var(--accent)]" : ""}`}
              onClick={() => preset(v)}
            >
              {v}s
            </button>
          ))}
        </div>
      </div>

      <p className="text-4xl font-bold tracking-wider tabular-nums text-center my-4">
        {mins}:{secs}
      </p>

      <div className="flex gap-2 justify-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setRunning((r) => !r)}
        >
          {running ? <Pause size={16} /> : <Play size={16} />}
          {running ? "Pause" : "Start"}
        </button>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => {
            setRunning(false);
            setRemaining(seconds);
          }}
        >
          <RotateCcw size={16} />
          Reset
        </button>
      </div>
    </div>
  );
}
