const express = require("express");
const prisma = require("../lib/prisma");
const { pickFields } = require("../lib/pickFields");

const REQUIRED_FIELDS = ["entityId", "address1", "city", "state", "zip"];

// Real property attributes (v2 backlog item) — yearBuilt already existed on the
// model but was never wired into either route until this landed alongside it.
const ATTRIBUTE_FIELDS = [
  "yearBuilt",
  "bedrooms",
  "bathrooms",
  "sqFt",
  "amenities",
  // Second pass (2026-08-20) — Taylor's curated list off a larger brainstorm.
  "propertyType",
  "stories",
  "basement",
  "lotSize",
  "parking",
  "storage",
  "mailboxLocation",
  "trashPickupDay",
  "trashCanStorageLocation",
  "hoaOrMetroDistrict",
  "hoaContact",
  "acceptsSection8",
  "insuranceNotes",
  // Utilities follow-up (2026-08-20) — provider + contact pairs, replacing the earlier
  // single freeform utilityProviders field. No telephone/cable — tenant-chosen, not tracked.
  "electricityProvider",
  "electricityContact",
  "gasProvider",
  "gasContact",
  "waterProvider",
  "waterContact",
  "sewerProvider",
  "sewerContact",
  "trashProvider",
  "trashContact",
  "internetProvider",
  "internetContact",
  "mortgageCompany",
  "mortgageContact",
];

function validatePropertyBody(body) {
  const missing = REQUIRED_FIELDS.filter((field) => !body[field]);
  if (missing.length > 0) {
    return `Missing required field(s): ${missing.join(", ")}`;
  }
  return null;
}

const router = express.Router();

router.post("/", async (req, res) => {
  const validationError = validatePropertyBody(req.body);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const { entityId, name, address1, address2, city, state, zip } = req.body;

  const entity = await prisma.entity.findUnique({ where: { id: entityId } });
  if (!entity || entity.userId !== req.currentUser.id) {
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
      ...pickFields(req.body, ATTRIBUTE_FIELDS),
    },
  });

  res.status(201).json(property);
});

router.get("/", async (req, res) => {
  const { entityId } = req.query;

  const properties = await prisma.property.findMany({
    where: {
      userId: req.currentUser.id,
      ...(entityId ? { entityId } : {}),
    },
    orderBy: { createdAt: "desc" },
  });

  res.json(properties);
});

router.get("/:id", async (req, res) => {
  const property = await prisma.property.findUnique({
    where: { id: req.params.id },
  });

  if (!property || property.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Property not found" });
  }

  res.json(property);
});

router.put("/:id", async (req, res) => {
  const { entityId, name, address1, address2, city, state, zip } = req.body;

  const existing = await prisma.property.findUnique({
    where: { id: req.params.id },
  });
  if (!existing || existing.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Property not found" });
  }

  const data = { name, address1, address2, city, state, zip, ...pickFields(req.body, ATTRIBUTE_FIELDS) };

  // Reassigning a property to a different entity (e.g. after forming an LLC)
  // — the target entity must belong to the same user, same check as on create.
  if (entityId !== undefined) {
    const entity = await prisma.entity.findUnique({ where: { id: entityId } });
    if (!entity || entity.userId !== req.currentUser.id) {
      return res.status(400).json({ error: `Entity ${entityId} not found` });
    }
    data.entityId = entityId;
  }

  const property = await prisma.property.update({
    where: { id: req.params.id },
    data,
  });

  res.json(property);
});

router.delete("/:id", async (req, res) => {
  const existing = await prisma.property.findUnique({
    where: { id: req.params.id },
  });
  if (!existing || existing.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Property not found" });
  }

  await prisma.property.delete({ where: { id: req.params.id } });

  res.status(204).send();
});

module.exports = router;
