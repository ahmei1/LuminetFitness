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
const PORT = process.env.PORT || 4000;

app.use(cors());
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
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`Luminet API running on http://localhost:${PORT}`);
});
