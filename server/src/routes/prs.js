import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { requireAuth } from "../middleware/auth.js";

const prisma = new PrismaClient();
const router = Router();

router.get("/", requireAuth, async (req, res) => {
  const records = await prisma.personalRecord.findMany({
    where: { userId: req.userId },
    orderBy: { name: "asc" },
  });
  res.json({ records });
});

export default router;
