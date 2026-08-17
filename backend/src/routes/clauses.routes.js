const express = require("express");
const prisma = require("../lib/prisma");
const { pickFields } = require("../lib/pickFields");
const { isValidGroup } = require("../lib/clauseGroups");

const REQUIRED_FIELDS = ["title", "bodyText", "group"];

const ASSIGNABLE_FIELDS = ["title", "bodyText", "group"];

function pickAssignableFields(body) {
  return pickFields(body, ASSIGNABLE_FIELDS);
}

function validateClauseBody(body) {
  const missing = REQUIRED_FIELDS.filter((field) => !body[field]);
  if (missing.length > 0) {
    return `Missing required field(s): ${missing.join(", ")}`;
  }
  if (!isValidGroup(body.group)) {
    return `Invalid group: ${body.group}`;
  }
  return null;
}

const router = express.Router();

router.post("/", async (req, res) => {
  const validationError = validateClauseBody(req.body);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const clause = await prisma.clause.create({
    data: {
      userId: req.currentUser.id,
      ...pickAssignableFields(req.body),
    },
  });

  res.status(201).json(clause);
});

router.get("/", async (req, res) => {
  const clauses = await prisma.clause.findMany({
    where: { userId: req.currentUser.id },
    orderBy: { createdAt: "asc" },
  });

  res.json(clauses);
});

router.get("/:id", async (req, res) => {
  const clause = await prisma.clause.findUnique({
    where: { id: req.params.id },
  });

  if (!clause || clause.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Clause not found" });
  }

  res.json(clause);
});

router.put("/:id", async (req, res) => {
  const existing = await prisma.clause.findUnique({
    where: { id: req.params.id },
  });
  if (!existing || existing.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Clause not found" });
  }
  if (req.body.group !== undefined && !isValidGroup(req.body.group)) {
    return res.status(400).json({ error: `Invalid group: ${req.body.group}` });
  }

  const clause = await prisma.clause.update({
    where: { id: req.params.id },
    data: pickAssignableFields(req.body),
  });

  res.json(clause);
});

router.delete("/:id", async (req, res) => {
  const existing = await prisma.clause.findUnique({
    where: { id: req.params.id },
  });
  if (!existing || existing.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Clause not found" });
  }

  await prisma.clause.delete({ where: { id: req.params.id } });

  res.status(204).send();
});

module.exports = router;
