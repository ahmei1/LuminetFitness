import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import { prisma } from "../db.js";

const router = Router();

router.get("/", requireAuth, async (req, res) => {
  const records = await prisma.personalRecord.findMany({
    where: { userId: req.userId },
    orderBy: { name: "asc" },
  });
  res.json({ records });
});

export default router;
