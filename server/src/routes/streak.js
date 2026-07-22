import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { requireAuth } from "../middleware/auth.js";

const prisma = new PrismaClient();
const router = Router();

router.get("/", requireAuth, async (req, res) => {
  let streak = await prisma.streak.findUnique({ where: { userId: req.userId } });
  if (!streak) {
    streak = await prisma.streak.create({
      data: { userId: req.userId, currentStreak: 0, bestStreak: 0 },
    });
  }
  res.json({ streak });
});

export default router;
