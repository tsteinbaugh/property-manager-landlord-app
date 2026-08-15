const express = require("express");
const prisma = require("../lib/prisma");
const { pickFields } = require("../lib/pickFields");

const REQUIRED_FIELDS = ["propertyId", "category", "amount", "date"];

const ASSIGNABLE_FIELDS = ["category", "amount", "date", "method", "notes"];

const DATE_FIELDS = ["date"];

const INCOME_CATEGORIES = ["RENT", "LATE_FEE", "PET_RENT", "DEPOSIT", "OTHER"];

function pickAssignableFields(body) {
  return pickFields(body, ASSIGNABLE_FIELDS, DATE_FIELDS);
}

function validateIncomeBody(body) {
  const missing = REQUIRED_FIELDS.filter((field) => !body[field]);
  if (missing.length > 0) {
    return `Missing required field(s): ${missing.join(", ")}`;
  }
  if (body.category && !INCOME_CATEGORIES.includes(body.category)) {
    return `Invalid category. Must be one of: ${INCOME_CATEGORIES.join(", ")}`;
  }
  return null;
}

const router = express.Router();

router.post("/", async (req, res) => {
  const validationError = validateIncomeBody(req.body);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const { propertyId, leaseId } = req.body;

  const property = await prisma.property.findUnique({ where: { id: propertyId } });
  if (!property || property.userId !== req.currentUser.id) {
    return res.status(400).json({ error: `Property ${propertyId} not found` });
  }

  if (leaseId) {
    const lease = await prisma.lease.findUnique({ where: { id: leaseId } });
    if (!lease || lease.userId !== req.currentUser.id || lease.propertyId !== propertyId) {
      return res.status(400).json({ error: `Lease ${leaseId} not found` });
    }
  }

  const income = await prisma.income.create({
    data: {
      userId: req.currentUser.id,
      entityId: property.entityId,
      propertyId,
      leaseId: leaseId || null,
      ...pickAssignableFields(req.body),
    },
  });

  res.status(201).json(income);
});

router.get("/", async (req, res) => {
  const { propertyId, leaseId } = req.query;

  const incomes = await prisma.income.findMany({
    where: {
      userId: req.currentUser.id,
      ...(propertyId ? { propertyId } : {}),
      ...(leaseId ? { leaseId } : {}),
    },
    orderBy: { date: "desc" },
  });

  res.json(incomes);
});

router.get("/:id", async (req, res) => {
  const income = await prisma.income.findUnique({
    where: { id: req.params.id },
  });

  if (!income || income.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Income not found" });
  }

  res.json(income);
});

router.put("/:id", async (req, res) => {
  if (req.body.category && !INCOME_CATEGORIES.includes(req.body.category)) {
    return res.status(400).json({
      error: `Invalid category. Must be one of: ${INCOME_CATEGORIES.join(", ")}`,
    });
  }

  const existing = await prisma.income.findUnique({
    where: { id: req.params.id },
  });
  if (!existing || existing.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Income not found" });
  }

  const income = await prisma.income.update({
    where: { id: req.params.id },
    data: pickAssignableFields(req.body),
  });

  res.json(income);
});

router.delete("/:id", async (req, res) => {
  const existing = await prisma.income.findUnique({
    where: { id: req.params.id },
  });
  if (!existing || existing.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Income not found" });
  }

  await prisma.income.delete({ where: { id: req.params.id } });

  res.status(204).send();
});

module.exports = router;
