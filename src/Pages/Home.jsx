import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

const features = [
  {
    title: "Cloud workout log",
    text: "Track sets, reps, and weight with your account — progress stays with you.",
  },
  {
    title: "Progress charts",
    text: "See strength and volume trends per exercise over time.",
  },
  {
    title: "Weekly schedule",
    text: "Plan sessions, then start them from your dashboard.",
  },
  {
    title: "Personal records",
    text: "Automatic PRs so you know when you hit a new best.",
  },
  {
    title: "Rest timer & streak",
    text: "Recover between sets and build consistency that actually sticks.",
  },
  {
    title: "Exercise library",
    text: "Browse movements by muscle group and add them to today's log.",
  },
];

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="page">
      <section
        className="relative min-h-[100svh] bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,14,14,0.55), rgba(15,14,14,0.85)), url("/tools/ambitious-studio-rick-barrett-03b61PY89hs-unsplash.jpg")',
        }}
      >
        <Navbar />
        <div className="container flex flex-col justify-center min-h-[75vh] pb-16">
          <p className="badge mb-5 w-fit">Personal fitness companion</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight max-w-3xl leading-[1.05]">
            <span className="text-[var(--accent)]">Luminet</span>
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-[var(--text)] max-w-xl font-medium">
            Train with clarity. Log smarter. Shine stronger.
          </p>
          <p className="mt-3 text-[var(--muted)] max-w-lg text-base sm:text-lg">
            Plan routines, track lifts, and keep your streak — synced to your account.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to={user ? "/dashboard" : "/signup"} className="btn btn-primary">
              {user ? "Open dashboard" : "Get started"}
            </Link>
            <Link to="/explore" className="btn btn-ghost">
              Explore workouts
            </Link>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="section-head max-w-2xl">
          <h2>Built for consistent training</h2>
          <p>
            Luminet combines lumen (light) and network — a space where motivation meets motion.
            Clean tools. No signup friction beyond your account. Just progress.
          </p>
        </div>
      </section>

      <section className="container pb-20">
        <div className="section-head">
          <h2>Everything in one place</h2>
          <p>The essentials serious lifters use — without the clutter.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <article key={f.title} className="panel">
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed">{f.text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-[var(--border)] py-10">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
          <p>© {new Date().getFullYear()} Luminet Fitness. Built by Ahmed Abdelrahman.</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/ahmei1"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--text)]"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-abdelrahman-4b5378311/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--text)]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
