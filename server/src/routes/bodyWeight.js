import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import { prisma } from "../db.js";

const router = Router();

router.get("/", requireAuth, async (req, res) => {
  const entries = await prisma.bodyWeight.findMany({
    where: { userId: req.userId },
    orderBy: { date: "asc" },
  });
  res.json({ entries });
});

router.post("/", requireAuth, async (req, res) => {
  const weight = Number(req.body?.weight);
  const date = req.body?.date || new Date().toISOString().slice(0, 10);

  if (!weight || weight <= 0) {
    return res.status(400).json({ error: "Valid weight is required" });
  }

  const entry = await prisma.bodyWeight.create({
    data: { userId: req.userId, weight, date },
  });
  res.status(201).json({ entry });
});

router.delete("/:id", requireAuth, async (req, res) => {
  const existing = await prisma.bodyWeight.findFirst({
    where: { id: req.params.id, userId: req.userId },
  });
  if (!existing) return res.status(404).json({ error: "Entry not found" });
  await prisma.bodyWeight.delete({ where: { id: existing.id } });
  res.json({ ok: true });
});

export default router;
