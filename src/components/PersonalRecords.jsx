import { Trophy } from "lucide-react";

export default function PersonalRecords({ records = [] }) {
  if (!records.length) {
    return <p className="empty">Personal records appear when you log lifts.</p>;
  }

  return (
    <ul className="space-y-2 max-h-72 overflow-y-auto">
      {records.map((pr) => (
        <li
          key={pr.id}
          className="flex items-center justify-between gap-3 p-3 rounded-xl border border-[var(--border)] bg-[var(--surface-2)]"
        >
          <div className="flex items-center gap-3">
            <Trophy size={18} className="text-[var(--accent)] shrink-0" />
            <div>
              <p className="font-semibold">{pr.name}</p>
              <p className="text-xs text-[var(--muted)]">{pr.date}</p>
            </div>
          </div>
          <p className="font-bold text-[var(--text)]">
            {pr.weight} kg × {pr.reps}
          </p>
        </li>
      ))}
    </ul>
  );
}
