import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import { prisma } from "../db.js";

const router = Router();

router.get("/", requireAuth, async (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const challenges = await prisma.challenge.findMany({
    where: { userId: req.userId, date: today },
    orderBy: { id: "asc" },
  });
  res.json({ challenges });
});

router.post("/", requireAuth, async (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const text = req.body?.text?.trim();
  if (!text) return res.status(400).json({ error: "Challenge text is required" });

  const count = await prisma.challenge.count({
    where: { userId: req.userId, date: today },
  });
  if (count >= 3) {
    return res.status(400).json({ error: "You can only add 3 challenges per day" });
  }

  const challenge = await prisma.challenge.create({
    data: { userId: req.userId, text, date: today, completed: false },
  });
  res.status(201).json({ challenge });
});

router.patch("/:id", requireAuth, async (req, res) => {
  const existing = await prisma.challenge.findFirst({
    where: { id: req.params.id, userId: req.userId },
  });
  if (!existing) return res.status(404).json({ error: "Challenge not found" });

  const challenge = await prisma.challenge.update({
    where: { id: existing.id },
    data: { completed: Boolean(req.body?.completed) },
  });
  res.json({ challenge });
});

router.delete("/", requireAuth, async (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  await prisma.challenge.deleteMany({
    where: { userId: req.userId, date: today },
  });
  res.json({ ok: true });
});

router.post("/import", requireAuth, async (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const items = Array.isArray(req.body?.challenges) ? req.body.challenges : [];
  const existingCount = await prisma.challenge.count({
    where: { userId: req.userId, date: today },
  });
  let imported = 0;
  for (const item of items) {
    if (!item?.text || existingCount + imported >= 3) break;
    if (item.date && item.date !== today) continue;
    await prisma.challenge.create({
      data: {
        userId: req.userId,
        text: String(item.text),
        date: today,
        completed: Boolean(item.completed),
      },
    });
    imported += 1;
  }
  res.json({ imported });
});

export default router;
