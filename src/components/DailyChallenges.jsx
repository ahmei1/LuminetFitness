import { useState } from "react";

export default function DailyChallenges({ challenges = [], onAdd, onToggle, onReset }) {
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!text.trim() || busy) return;
    setBusy(true);
    try {
      await onAdd(text.trim());
      setText("");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div>
      <form onSubmit={submit} className="flex flex-col sm:flex-row gap-2 mb-4">
        <input
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a challenge…"
        />
        <button type="submit" className="btn btn-primary" disabled={busy || challenges.length >= 3}>
          Add
        </button>
      </form>

      {challenges.length === 0 ? (
        <p className="empty">Add up to 3 challenges for today.</p>
      ) : (
        <ul className="space-y-2">
          {challenges.map((ch) => (
            <li
              key={ch.id}
              className="flex items-center gap-3 p-3 rounded-xl border border-[var(--border)] bg-[var(--surface-2)]"
            >
              <input
                type="checkbox"
                checked={ch.completed}
                onChange={() => onToggle(ch.id, !ch.completed)}
                className="w-5 h-5 accent-[var(--accent)] cursor-pointer"
              />
              <span
                className={
                  ch.completed
                    ? "line-through text-[var(--muted)] font-medium"
                    : "font-medium"
                }
              >
                {ch.text}
              </span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex items-center justify-between text-sm text-[var(--muted)]">
        <span>
          {challenges.filter((c) => c.completed).length} / {challenges.length} done
        </span>
        <button type="button" className="text-red-400 hover:text-red-300 font-semibold" onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
