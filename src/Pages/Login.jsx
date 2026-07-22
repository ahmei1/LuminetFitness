import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const from = location.state?.from || "/dashboard";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="page">
      <Navbar />
      <main className="container py-12 max-w-md">
        <div className="panel">
          <h1 className="text-2xl font-bold mb-1">Welcome back</h1>
          <p className="panel-sub">Log in to sync your workouts and progress.</p>

          <form onSubmit={handleSubmit}>
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
                autoComplete="current-password"
              />
            </div>

            {error && <p className="text-red-400 text-sm mb-3">{error}</p>}

            <button type="submit" className="btn btn-primary w-full" disabled={busy}>
              {busy ? "Signing in…" : "Log in"}
            </button>
          </form>

          <p className="text-sm text-[var(--muted)] mt-4 text-center">
            New here?{" "}
            <Link to="/signup" className="text-[var(--accent)] font-semibold">
              Create an account
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
