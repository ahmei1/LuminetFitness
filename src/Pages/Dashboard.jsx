import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Streak from "../components/Streak";
import RestTimer from "../components/RestTimer";
import ExerciseInput from "../components/ExerciseInput";
import ProgressChart from "../components/ProgressChart";
import WorkoutSchedule from "../components/WorkoutSchedule";
import BMR from "../components/BMR";
import DailyChallenges from "../components/DailyChallenges";
import BodyWeight from "../components/BodyWeight";
import PersonalRecords from "../components/PersonalRecords";
import { useAuth } from "../context/AuthContext";
import { api } from "../lib/api";
import { maybeImportLocalData } from "../lib/migrateLocal";

export default function Dashboard() {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [exercises, setExercises] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [challenges, setChallenges] = useState([]);
  const [streak, setStreak] = useState({ currentStreak: 0, bestStreak: 0 });
  const [prs, setPrs] = useState([]);
  const [bodyWeights, setBodyWeights] = useState([]);
  const [pendingExercise, setPendingExercise] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [importNote, setImportNote] = useState("");

  const refresh = async () => {
    const [ex, sch, ch, st, pr, bw] = await Promise.all([
      api.getExercises(),
      api.getSchedules(),
      api.getChallenges(),
      api.getStreak(),
      api.getPRs(),
      api.getBodyWeight(),
    ]);
    setExercises(ex.exercises || []);
    setSchedules(sch.schedules || []);
    setChallenges(ch.challenges || []);
    setStreak(st.streak || { currentStreak: 0, bestStreak: 0 });
    setPrs(pr.records || []);
    setBodyWeights(bw.entries || []);
  };

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        const note = await maybeImportLocalData();
        if (!cancelled && note) setImportNote(note);
        await refresh();
      } catch (err) {
        if (!cancelled) setError(err.message || "Failed to load dashboard");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const name = location.state?.exerciseName;
    if (name) {
      setPendingExercise(name);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  const handleAddExercise = async (entry) => {
    await api.addExercise(entry);
    await refresh();
    setPendingExercise("");
  };

  if (loading) {
    return (
      <div className="page">
        <Navbar />
        <p className="container py-20 text-[var(--muted)]">Loading your dashboard…</p>
      </div>
    );
  }

  return (
    <div className="page">
      <Navbar />
      <main className="container py-8 space-y-8">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-sm text-[var(--muted)] mb-1">Dashboard</p>
            <h1 className="text-3xl sm:text-4xl font-bold">Welcome, {user?.name}</h1>
            <p className="text-[var(--muted)] mt-1">Your training hub — logs, schedule, and progress.</p>
          </div>
          <div className="panel !py-4 !px-5">
            <Streak currentStreak={streak.currentStreak} bestStreak={streak.bestStreak} />
          </div>
        </header>

        {error && <p className="text-red-400 text-sm">{error}</p>}
        {importNote && (
          <p className="text-sm text-[var(--muted)] panel !py-3">{importNote}</p>
        )}

        <section className="grid lg:grid-cols-3 gap-4">
          <div className="panel lg:col-span-2">
            <div className="section-head">
              <h2>Today&apos;s log</h2>
              <p>Record sets after each exercise. Streak updates when you log.</p>
            </div>
            <ExerciseInput onAdd={handleAddExercise} initialName={pendingExercise} />
            <div className="mt-4 max-h-64 overflow-y-auto space-y-2">
              {exercises.length === 0 ? (
                <p className="empty">No exercises logged yet.</p>
              ) : (
                exercises.map((ex) => (
                  <div
                    key={ex.id}
                    className="flex justify-between items-center gap-3 p-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)]"
                  >
                    <div className="text-sm sm:text-base">
                      <strong>{ex.name}</strong>
                      <span className="text-[var(--muted)]">
                        {" "}
                        · {ex.sets}×{ex.reps} @ {ex.weight} kg · {ex.date}
                      </span>
                    </div>
                    <button
                      type="button"
                      className="btn btn-danger py-1 px-3 text-xs"
                      onClick={async () => {
                        await api.deleteExercise(ex.id);
                        await refresh();
                      }}
                    >
                      Delete
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="panel">
            <RestTimer />
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-4">
          <div className="panel">
            <div className="section-head">
              <h2>Progress</h2>
              <p>Weight and volume over time for each lift.</p>
            </div>
            <ProgressChart exercises={exercises} />
          </div>
          <div className="panel">
            <div className="section-head">
              <h2>Personal records</h2>
              <p>Best estimated efforts by exercise.</p>
            </div>
            <PersonalRecords records={prs} />
          </div>
        </section>

        <section className="panel">
          <div className="section-head">
            <h2>Weekly schedule</h2>
            <p>Plan the week, then start a session when you&apos;re ready.</p>
          </div>
          <WorkoutSchedule
            schedules={schedules}
            onAdd={async (form) => {
              await api.addSchedule(form);
              await refresh();
            }}
            onDelete={async (id) => {
              await api.deleteSchedule(id);
              await refresh();
            }}
            onStart={(s) => {
              setPendingExercise(s.workoutName);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </section>

        <section className="grid lg:grid-cols-2 gap-4">
          <div className="panel">
            <div className="section-head">
              <h2>Body weight</h2>
              <p>Simple trend line for check-ins.</p>
            </div>
            <BodyWeight
              entries={bodyWeights}
              onAdd={async (body) => {
                await api.addBodyWeight(body);
                await refresh();
              }}
              onDelete={async (id) => {
                await api.deleteBodyWeight(id);
                await refresh();
              }}
            />
          </div>
          <div className="panel">
            <div className="section-head">
              <h2>Daily challenges</h2>
              <p>Up to three focus tasks for today.</p>
            </div>
            <DailyChallenges
              challenges={challenges}
              onAdd={async (text) => {
                await api.addChallenge({ text });
                await refresh();
              }}
              onToggle={async (id, completed) => {
                await api.updateChallenge(id, { completed });
                await refresh();
              }}
              onReset={async () => {
                if (window.confirm("Reset today's challenges?")) {
                  await api.resetChallenges();
                  await refresh();
                }
              }}
            />
          </div>
        </section>

        <section className="panel">
          <div className="section-head">
            <h2>BMR calculator</h2>
            <p>Estimate resting calories to plan nutrition around training.</p>
          </div>
          <BMR />
        </section>
      </main>
    </div>
  );
}
