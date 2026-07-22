import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      await signup(name, email, password);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err.message || "Signup failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="page">
      <Navbar />
      <main className="container py-12 max-w-md">
        <div className="panel">
          <h1 className="text-2xl font-bold mb-1">Create your account</h1>
          <p className="panel-sub">Save workouts, streaks, and progress across devices.</p>

          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                className="input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
              />
            </div>
            <div className="field">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className="input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>
            <div className="field">
              <label className="label" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                autoComplete="new-password"
              />
            </div>

            {error && <p className="text-red-400 text-sm mb-3">{error}</p>}

            <button type="submit" className="btn btn-primary w-full" disabled={busy}>
              {busy ? "Creating…" : "Sign up"}
            </button>
          </form>

          <p className="text-sm text-[var(--muted)] mt-4 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-[var(--accent)] font-semibold">
              Log in
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
