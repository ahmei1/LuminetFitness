import { Flame } from "lucide-react";

export default function Streak({ currentStreak = 0, bestStreak = 0 }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-[var(--accent-soft)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)]">
        <Flame size={24} />
      </div>
      <div>
        <p className="text-2xl font-bold leading-none">{currentStreak} day streak</p>
        <p className="text-sm text-[var(--muted)] mt-1">Best: {bestStreak} days</p>
      </div>
    </div>
  );
}
