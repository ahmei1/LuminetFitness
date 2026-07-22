import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import { prisma } from "../db.js";

const router = Router();

router.get("/", requireAuth, async (req, res) => {
  const schedules = await prisma.schedule.findMany({
    where: { userId: req.userId },
    orderBy: { dayOfWeek: "asc" },
  });
  res.json({ schedules });
});

router.post("/", requireAuth, async (req, res) => {
  const { workoutName, dayOfWeek, time, duration, notes } = req.body || {};
  if (!workoutName?.trim() || !dayOfWeek || !time) {
    return res.status(400).json({ error: "Workout name, day, and time are required" });
  }

  const schedule = await prisma.schedule.create({
    data: {
      userId: req.userId,
      workoutName: workoutName.trim(),
      dayOfWeek,
      time,
      duration: duration ? String(duration) : null,
      notes: notes || null,
    },
  });

  res.status(201).json({ schedule });
});

router.delete("/:id", requireAuth, async (req, res) => {
  const existing = await prisma.schedule.findFirst({
    where: { id: req.params.id, userId: req.userId },
  });
  if (!existing) return res.status(404).json({ error: "Schedule not found" });
  await prisma.schedule.delete({ where: { id: existing.id } });
  res.json({ ok: true });
});

router.post("/import", requireAuth, async (req, res) => {
  const items = Array.isArray(req.body?.schedules) ? req.body.schedules : [];
  let imported = 0;
  for (const item of items) {
    if (!item?.workoutName || !item?.dayOfWeek || !item?.time) continue;
    await prisma.schedule.create({
      data: {
        userId: req.userId,
        workoutName: String(item.workoutName),
        dayOfWeek: String(item.dayOfWeek),
        time: String(item.time),
        duration: item.duration ? String(item.duration) : null,
        notes: item.notes || null,
      },
    });
    imported += 1;
  }
  res.json({ imported });
});

export default router;
