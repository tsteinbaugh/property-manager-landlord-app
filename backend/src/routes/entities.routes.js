const express = require("express");
const prisma = require("../lib/prisma");
const { pickFields } = require("../lib/pickFields");
const { encrypt, decrypt } = require("../lib/crypto");

const FIELDS = [
  "legalName",
  "entityType",
  "contactEmail",
  "contactPhone",
  "mailingAddress",
  "stateOfFormation",
  "ein",
  "registeredAgent",
  "formationDate",
  "annualReportDueDate",
  "bankAccount",
];
const LOCKED_FIELDS_ON_DEFAULT = ["legalName", "entityType"];
const DATE_FIELDS = ["formationDate", "annualReportDueDate"];
const ENTITY_TYPES = ["LLC", "S_CORP", "PERSONAL", "OTHER"];

function serialize(entity) {
  return { ...entity, ein: decrypt(entity.ein) };
}

const router = express.Router();

router.post("/", async (req, res) => {
  if (!req.body.legalName) {
    return res.status(400).json({ error: "Missing required field: legalName" });
  }
  if (!req.body.entityType || !ENTITY_TYPES.includes(req.body.entityType)) {
    return res.status(400).json({ error: `entityType must be one of: ${ENTITY_TYPES.join(", ")}` });
  }

  const data = pickFields(req.body, FIELDS, DATE_FIELDS);
  if (data.ein) data.ein = encrypt(data.ein);

  const entity = await prisma.entity.create({
    data: { ...data, userId: req.currentUser.id },
  });

  res.status(201).json(serialize(entity));
});

router.get("/", async (req, res) => {
  const entities = await prisma.entity.findMany({
    where: { userId: req.currentUser.id },
    orderBy: { createdAt: "desc" },
  });

  res.json(entities.map(serialize));
});

router.get("/:id", async (req, res) => {
  const entity = await prisma.entity.findUnique({ where: { id: req.params.id } });

  if (!entity || entity.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Entity not found" });
  }

  res.json(serialize(entity));
});

router.put("/:id", async (req, res) => {
  const existing = await prisma.entity.findUnique({ where: { id: req.params.id } });
  if (!existing || existing.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Entity not found" });
  }

  if (existing.isDefault) {
    const lockedFieldSent = LOCKED_FIELDS_ON_DEFAULT.some((field) => req.body[field] !== undefined);
    if (lockedFieldSent) {
      return res.status(400).json({
        error: "Your default Self / Personal entity's name and type follow your account name and can't be changed directly. Other details, like contact info, can still be edited.",
      });
    }
  }

  if (req.body.entityType && !ENTITY_TYPES.includes(req.body.entityType)) {
    return res.status(400).json({ error: `entityType must be one of: ${ENTITY_TYPES.join(", ")}` });
  }

  const data = pickFields(req.body, FIELDS, DATE_FIELDS);
  if (data.ein) data.ein = encrypt(data.ein);

  const entity = await prisma.entity.update({
    where: { id: req.params.id },
    data,
  });

  res.json(serialize(entity));
});

router.delete("/:id", async (req, res) => {
  const existing = await prisma.entity.findUnique({ where: { id: req.params.id } });
  if (!existing || existing.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Entity not found" });
  }

  if (existing.isDefault) {
    return res.status(400).json({ error: "Your default Self / Personal entity can't be deleted." });
  }

  const propertyCount = await prisma.property.count({ where: { entityId: req.params.id } });
  if (propertyCount > 0) {
    return res.status(400).json({ error: "Cannot delete an entity that still owns properties" });
  }

  await prisma.entity.delete({ where: { id: req.params.id } });

  res.status(204).send();
});

module.exports = router;
