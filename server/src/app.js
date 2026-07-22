import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import exerciseRoutes from "./routes/exercises.js";
import scheduleRoutes from "./routes/schedules.js";
import challengeRoutes from "./routes/challenges.js";
import streakRoutes from "./routes/streak.js";
import prRoutes from "./routes/prs.js";
import bodyWeightRoutes from "./routes/bodyWeight.js";

const app = express();

const defaultOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "https://luminet-fitness.vercel.app",
];

const envOrigins = (process.env.CORS_ORIGIN || "")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

const allowedOrigins = [...new Set([...defaultOrigins, ...envOrigins])];

app.use(
  cors({
    origin(origin, callback) {
      // Allow non-browser tools (no Origin) and known frontends
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }
      callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    credentials: true,
  })
);

app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, name: "Luminet Fitness API", version: "2.0.0" });
});

app.use("/api/auth", authRoutes);
app.use("/api/exercises", exerciseRoutes);
app.use("/api/schedules", scheduleRoutes);
app.use("/api/challenges", challengeRoutes);
app.use("/api/streak", streakRoutes);
app.use("/api/prs", prRoutes);
app.use("/api/body-weight", bodyWeightRoutes);

app.use((err, _req, res, _next) => {
  console.error(err);
  const message = err.message?.startsWith("CORS")
    ? err.message
    : "Internal server error";
  res.status(err.message?.startsWith("CORS") ? 403 : 500).json({ error: message });
});

export default app;
