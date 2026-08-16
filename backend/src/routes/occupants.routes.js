const express = require("express");
const prisma = require("../lib/prisma");
const { pickFields } = require("../lib/pickFields");

const REQUIRED_FIELDS = ["leaseId", "name"];
const ASSIGNABLE_FIELDS = ["name", "age", "phone", "email"];

function pickAssignableFields(body) {
  return pickFields(body, ASSIGNABLE_FIELDS);
}

function validateOccupantBody(body) {
  const missing = REQUIRED_FIELDS.filter((field) => !body[field]);
  if (missing.length > 0) {
    return `Missing required field(s): ${missing.join(", ")}`;
  }
  return null;
}

async function findOwnedLease(leaseId, userId) {
  const lease = await prisma.lease.findUnique({ where: { id: leaseId } });
  if (!lease || lease.userId !== userId) return null;
  return lease;
}

const router = express.Router();

router.post("/", async (req, res) => {
  const validationError = validateOccupantBody(req.body);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const { leaseId } = req.body;
  const lease = await findOwnedLease(leaseId, req.currentUser.id);
  if (!lease) {
    return res.status(400).json({ error: `Lease ${leaseId} not found` });
  }

  const occupant = await prisma.occupant.create({
    data: { leaseId, ...pickAssignableFields(req.body) },
  });

  res.status(201).json(occupant);
});

router.get("/", async (req, res) => {
  const { leaseId } = req.query;
  if (!leaseId) {
    return res.status(400).json({ error: "Missing required query param: leaseId" });
  }

  const lease = await findOwnedLease(leaseId, req.currentUser.id);
  if (!lease) {
    return res.status(404).json({ error: "Lease not found" });
  }

  const occupants = await prisma.occupant.findMany({
    where: { leaseId },
    orderBy: { createdAt: "asc" },
  });

  res.json(occupants);
});

router.put("/:id", async (req, res) => {
  const existing = await prisma.occupant.findUnique({ where: { id: req.params.id } });
  if (!existing) {
    return res.status(404).json({ error: "Occupant not found" });
  }
  const lease = await findOwnedLease(existing.leaseId, req.currentUser.id);
  if (!lease) {
    return res.status(404).json({ error: "Occupant not found" });
  }

  const occupant = await prisma.occupant.update({
    where: { id: req.params.id },
    data: pickAssignableFields(req.body),
  });

  res.json(occupant);
});

router.delete("/:id", async (req, res) => {
  const existing = await prisma.occupant.findUnique({ where: { id: req.params.id } });
  if (!existing) {
    return res.status(404).json({ error: "Occupant not found" });
  }
  const lease = await findOwnedLease(existing.leaseId, req.currentUser.id);
  if (!lease) {
    return res.status(404).json({ error: "Occupant not found" });
  }

  await prisma.occupant.delete({ where: { id: req.params.id } });

  res.status(204).send();
});

module.exports = router;
