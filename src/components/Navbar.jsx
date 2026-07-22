import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const linkClass = ({ isActive }) =>
  `text-sm sm:text-base font-semibold transition-colors ${
    isActive ? "text-[var(--accent)]" : "text-[var(--muted)] hover:text-[var(--text)]"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(15,14,14,0.85)] backdrop-blur-md">
      <nav className="container flex items-center justify-between py-4">
        <Link to="/" className="text-xl font-bold text-[var(--accent)] tracking-tight">
          Luminet
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          <li>
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className={linkClass}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/explore" className={linkClass}>
              Explore
            </NavLink>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <span className="text-sm text-[var(--muted)]">Hi, {user.name.split(" ")[0]}</span>
              <button type="button" className="btn btn-ghost" onClick={logout}>
                Log out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost">
                Log in
              </Link>
              <Link to="/signup" className="btn btn-primary">
                Sign up
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          className="md:hidden text-[var(--accent)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--surface)]">
          <ul className="container flex flex-col gap-4 py-4">
            <li onClick={close}>
              <NavLink to="/" end className={linkClass}>
                Home
              </NavLink>
            </li>
            <li onClick={close}>
              <NavLink to="/dashboard" className={linkClass}>
                Dashboard
              </NavLink>
            </li>
            <li onClick={close}>
              <NavLink to="/explore" className={linkClass}>
                Explore
              </NavLink>
            </li>
            {user ? (
              <li>
                <button
                  type="button"
                  className="btn btn-ghost w-full"
                  onClick={() => {
                    logout();
                    close();
                  }}
                >
                  Log out
                </button>
              </li>
            ) : (
              <>
                <li onClick={close}>
                  <Link to="/login" className="btn btn-ghost w-full">
                    Log in
                  </Link>
                </li>
                <li onClick={close}>
                  <Link to="/signup" className="btn btn-primary w-full">
                    Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
