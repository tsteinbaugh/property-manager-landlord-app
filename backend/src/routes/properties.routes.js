const express = require("express");
const prisma = require("../lib/prisma");

const router = express.Router();

const REQUIRED_FIELDS = ["entityId", "address1", "city", "state", "zip"];

function validatePropertyBody(body) {
  const missing = REQUIRED_FIELDS.filter((field) => !body[field]);
  if (missing.length > 0) {
    return `Missing required field(s): ${missing.join(", ")}`;
  }
  return null;
}

router.post("/", async (req, res) => {
  const validationError = validatePropertyBody(req.body);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const { entityId, name, address1, address2, city, state, zip } = req.body;

  const entity = await prisma.entity.findUnique({ where: { id: entityId } });
  if (!entity) {
    return res.status(400).json({ error: `Entity ${entityId} not found` });
  }

  const property = await prisma.property.create({
    data: {
      entityId,
      userId: entity.userId,
      name,
      address1,
      address2,
      city,
      state,
      zip,
    },
  });

  res.status(201).json(property);
});

router.get("/", async (req, res) => {
  const { entityId } = req.query;

  const properties = await prisma.property.findMany({
    where: entityId ? { entityId } : undefined,
    orderBy: { createdAt: "desc" },
  });

  res.json(properties);
});

router.get("/:id", async (req, res) => {
  const property = await prisma.property.findUnique({
    where: { id: req.params.id },
  });

  if (!property) {
    return res.status(404).json({ error: "Property not found" });
  }

  res.json(property);
});

router.put("/:id", async (req, res) => {
  const { name, address1, address2, city, state, zip } = req.body;

  const existing = await prisma.property.findUnique({
    where: { id: req.params.id },
  });
  if (!existing) {
    return res.status(404).json({ error: "Property not found" });
  }

  const property = await prisma.property.update({
    where: { id: req.params.id },
    data: { name, address1, address2, city, state, zip },
  });

  res.json(property);
});

router.delete("/:id", async (req, res) => {
  const existing = await prisma.property.findUnique({
    where: { id: req.params.id },
  });
  if (!existing) {
    return res.status(404).json({ error: "Property not found" });
  }

  await prisma.property.delete({ where: { id: req.params.id } });

  res.status(204).send();
});

module.exports = router;
