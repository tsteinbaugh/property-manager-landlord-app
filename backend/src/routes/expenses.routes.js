const express = require("express");
const prisma = require("../lib/prisma");
const { pickFields } = require("../lib/pickFields");

const REQUIRED_FIELDS = ["propertyId", "category", "amount", "date"];

const ASSIGNABLE_FIELDS = ["category", "amount", "date", "payee", "notes"];

const DATE_FIELDS = ["date"];

const EXPENSE_CATEGORIES = [
  "MORTGAGE",
  "UTILITIES",
  "REPAIRS",
  "MAINTENANCE",
  "LANDSCAPING",
  "INSURANCE_PREMIUM",
  "TAX",
  "LEGAL",
  "OTHER",
];

function pickAssignableFields(body) {
  return pickFields(body, ASSIGNABLE_FIELDS, DATE_FIELDS);
}

function validateExpenseBody(body) {
  const missing = REQUIRED_FIELDS.filter((field) => !body[field]);
  if (missing.length > 0) {
    return `Missing required field(s): ${missing.join(", ")}`;
  }
  if (body.category && !EXPENSE_CATEGORIES.includes(body.category)) {
    return `Invalid category. Must be one of: ${EXPENSE_CATEGORIES.join(", ")}`;
  }
  return null;
}

const router = express.Router();

router.post("/", async (req, res) => {
  const validationError = validateExpenseBody(req.body);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const { propertyId } = req.body;

  const property = await prisma.property.findUnique({ where: { id: propertyId } });
  if (!property || property.userId !== req.currentUser.id) {
    return res.status(400).json({ error: `Property ${propertyId} not found` });
  }

  const expense = await prisma.expense.create({
    data: {
      userId: req.currentUser.id,
      entityId: property.entityId,
      propertyId,
      ...pickAssignableFields(req.body),
    },
  });

  res.status(201).json(expense);
});

router.get("/", async (req, res) => {
  const { propertyId } = req.query;

  const expenses = await prisma.expense.findMany({
    where: {
      userId: req.currentUser.id,
      ...(propertyId ? { propertyId } : {}),
    },
    orderBy: { date: "desc" },
  });

  res.json(expenses);
});

router.get("/:id", async (req, res) => {
  const expense = await prisma.expense.findUnique({
    where: { id: req.params.id },
  });

  if (!expense || expense.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Expense not found" });
  }

  res.json(expense);
});

router.put("/:id", async (req, res) => {
  if (req.body.category && !EXPENSE_CATEGORIES.includes(req.body.category)) {
    return res.status(400).json({
      error: `Invalid category. Must be one of: ${EXPENSE_CATEGORIES.join(", ")}`,
    });
  }

  const existing = await prisma.expense.findUnique({
    where: { id: req.params.id },
  });
  if (!existing || existing.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Expense not found" });
  }

  const expense = await prisma.expense.update({
    where: { id: req.params.id },
    data: pickAssignableFields(req.body),
  });

  res.json(expense);
});

router.delete("/:id", async (req, res) => {
  const existing = await prisma.expense.findUnique({
    where: { id: req.params.id },
  });
  if (!existing || existing.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Expense not found" });
  }

  await prisma.expense.delete({ where: { id: req.params.id } });

  res.status(204).send();
});

module.exports = router;
