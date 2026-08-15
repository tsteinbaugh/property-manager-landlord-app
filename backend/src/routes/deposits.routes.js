const express = require("express");
const prisma = require("../lib/prisma");
const { pickFields } = require("../lib/pickFields");

const REQUIRED_FIELDS = ["leaseId", "type", "amountHeld", "dateReceived"];

const ASSIGNABLE_FIELDS = [
  "amountHeld",
  "dateReceived",
  "storageMethod",
  "status",
  "returnedAmount",
  "returnedDate",
];

const DATE_FIELDS = ["dateReceived", "returnedDate"];

const DEPOSIT_TYPES = ["SECURITY", "PET"];
const DEPOSIT_STATUSES = ["HELD", "PARTIALLY_RETURNED", "FULLY_RETURNED", "FORFEITED"];

function pickAssignableFields(body) {
  return pickFields(body, ASSIGNABLE_FIELDS, DATE_FIELDS);
}

function validateDepositBody(body) {
  const missing = REQUIRED_FIELDS.filter((field) => !body[field]);
  if (missing.length > 0) {
    return `Missing required field(s): ${missing.join(", ")}`;
  }
  if (body.type && !DEPOSIT_TYPES.includes(body.type)) {
    return `Invalid type. Must be one of: ${DEPOSIT_TYPES.join(", ")}`;
  }
  if (body.status && !DEPOSIT_STATUSES.includes(body.status)) {
    return `Invalid status. Must be one of: ${DEPOSIT_STATUSES.join(", ")}`;
  }
  return null;
}

const includeDeductions = {
  deductions: true,
};

const router = express.Router();

router.post("/", async (req, res) => {
  const validationError = validateDepositBody(req.body);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const { leaseId, type } = req.body;

  const lease = await prisma.lease.findUnique({ where: { id: leaseId } });
  if (!lease || lease.userId !== req.currentUser.id) {
    return res.status(400).json({ error: `Lease ${leaseId} not found` });
  }

  const existingDeposit = await prisma.deposit.findUnique({
    where: { leaseId_type: { leaseId, type } },
  });
  if (existingDeposit) {
    return res.status(400).json({ error: `Lease already has a ${type} deposit` });
  }

  const property = await prisma.property.findUnique({ where: { id: lease.propertyId } });

  const deposit = await prisma.deposit.create({
    data: {
      userId: req.currentUser.id,
      entityId: property.entityId,
      propertyId: property.id,
      leaseId,
      type,
      ...pickAssignableFields(req.body),
    },
    include: includeDeductions,
  });

  res.status(201).json(deposit);
});

router.get("/", async (req, res) => {
  const { propertyId, leaseId, type } = req.query;

  const deposits = await prisma.deposit.findMany({
    where: {
      userId: req.currentUser.id,
      ...(propertyId ? { propertyId } : {}),
      ...(leaseId ? { leaseId } : {}),
      ...(type ? { type } : {}),
    },
    include: includeDeductions,
    orderBy: { createdAt: "desc" },
  });

  res.json(deposits);
});

router.get("/:id", async (req, res) => {
  const deposit = await prisma.deposit.findUnique({
    where: { id: req.params.id },
    include: includeDeductions,
  });

  if (!deposit || deposit.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Deposit not found" });
  }

  res.json(deposit);
});

router.put("/:id", async (req, res) => {
  if (req.body.status && !DEPOSIT_STATUSES.includes(req.body.status)) {
    return res.status(400).json({
      error: `Invalid status. Must be one of: ${DEPOSIT_STATUSES.join(", ")}`,
    });
  }

  const existing = await prisma.deposit.findUnique({
    where: { id: req.params.id },
  });
  if (!existing || existing.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Deposit not found" });
  }

  const deposit = await prisma.deposit.update({
    where: { id: req.params.id },
    data: pickAssignableFields(req.body),
    include: includeDeductions,
  });

  res.json(deposit);
});

router.delete("/:id", async (req, res) => {
  const existing = await prisma.deposit.findUnique({
    where: { id: req.params.id },
  });
  if (!existing || existing.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Deposit not found" });
  }

  await prisma.deposit.delete({ where: { id: req.params.id } });

  res.status(204).send();
});

router.post("/:id/deductions", async (req, res) => {
  const { description, amount } = req.body;

  if (!description || amount === undefined) {
    return res.status(400).json({ error: "Missing required field(s): description, amount" });
  }

  const deposit = await prisma.deposit.findUnique({ where: { id: req.params.id } });
  if (!deposit || deposit.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Deposit not found" });
  }

  await prisma.depositDeduction.create({
    data: { depositId: deposit.id, description, amount },
  });

  const updatedDeposit = await prisma.deposit.findUnique({
    where: { id: deposit.id },
    include: includeDeductions,
  });

  res.status(201).json(updatedDeposit);
});

router.delete("/:id/deductions/:deductionId", async (req, res) => {
  const deposit = await prisma.deposit.findUnique({ where: { id: req.params.id } });
  if (!deposit || deposit.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Deposit not found" });
  }

  const deduction = await prisma.depositDeduction.findUnique({
    where: { id: req.params.deductionId },
  });
  if (!deduction || deduction.depositId !== deposit.id) {
    return res.status(404).json({ error: "Deduction not found" });
  }

  await prisma.depositDeduction.delete({ where: { id: deduction.id } });

  res.status(204).send();
});

module.exports = router;
