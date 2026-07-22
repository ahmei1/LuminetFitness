import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import { prisma } from "../db.js";

const router = Router();

async function upsertPR(userId, { name, weight, reps, date }) {
  const existing = await prisma.personalRecord.findUnique({
    where: { userId_name: { userId, name } },
  });

  const score = weight * reps;
  if (!existing || score > existing.weight * existing.reps) {
    return prisma.personalRecord.upsert({
      where: { userId_name: { userId, name } },
      create: { userId, name, weight, reps, date },
      update: { weight, reps, date },
    });
  }
  return existing;
}

async function bumpStreak(userId) {
  const today = new Date().toISOString().slice(0, 10);
  let streak = await prisma.streak.findUnique({ where: { userId } });

  if (!streak) {
    streak = await prisma.streak.create({
      data: { userId, currentStreak: 1, bestStreak: 1, lastActiveDate: today },
    });
    return streak;
  }

  if (streak.lastActiveDate === today) {
    return streak;
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().slice(0, 10);

  const current =
    streak.lastActiveDate === yesterdayStr ? streak.currentStreak + 1 : 1;
  const best = Math.max(streak.bestStreak, current);

  return prisma.streak.update({
    where: { userId },
    data: { currentStreak: current, bestStreak: best, lastActiveDate: today },
  });
}

router.get("/", requireAuth, async (req, res) => {
  const logs = await prisma.exerciseLog.findMany({
    where: { userId: req.userId },
    orderBy: { createdAt: "desc" },
  });
  res.json({ exercises: logs });
});

router.post("/", requireAuth, async (req, res) => {
  try {
    const { name, sets, reps, weight, date } = req.body || {};
    if (!name?.trim()) {
      return res.status(400).json({ error: "Exercise name is required" });
    }

    const entry = await prisma.exerciseLog.create({
      data: {
        userId: req.userId,
        name: name.trim(),
        sets: Number(sets) || 0,
        reps: Number(reps) || 0,
        weight: Number(weight) || 0,
        date: date || new Date().toISOString().slice(0, 10),
      },
    });

    await upsertPR(req.userId, {
      name: entry.name,
      weight: entry.weight,
      reps: entry.reps,
      date: entry.date,
    });
    await bumpStreak(req.userId);

    res.status(201).json({ exercise: entry });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add exercise" });
  }
});

router.delete("/:id", requireAuth, async (req, res) => {
  const existing = await prisma.exerciseLog.findFirst({
    where: { id: req.params.id, userId: req.userId },
  });
  if (!existing) {
    return res.status(404).json({ error: "Exercise not found" });
  }
  await prisma.exerciseLog.delete({ where: { id: existing.id } });
  res.json({ ok: true });
});

router.post("/import", requireAuth, async (req, res) => {
  try {
    const items = Array.isArray(req.body?.exercises) ? req.body.exercises : [];
    if (!items.length) {
      return res.json({ imported: 0 });
    }

    let imported = 0;
    for (const item of items) {
      if (!item?.name) continue;
      const entry = await prisma.exerciseLog.create({
        data: {
          userId: req.userId,
          name: String(item.name),
          sets: Number(item.sets) || 0,
          reps: Number(item.reps) || 0,
          weight: Number(item.weight) || 0,
          date: item.date || new Date().toISOString().slice(0, 10),
        },
      });
      await upsertPR(req.userId, {
        name: entry.name,
        weight: entry.weight,
        reps: entry.reps,
        date: entry.date,
      });
      imported += 1;
    }

    if (imported) await bumpStreak(req.userId);
    res.json({ imported });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Import failed" });
  }
});

export default router;
