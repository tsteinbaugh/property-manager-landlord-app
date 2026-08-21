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
  // For-cause-eviction exemption (2026-08-21) — the one attribute field that's a fixed set,
  // not free text (see the schema comment): the Lease Builder reads it to auto-select between
  // month-to-month-notice-co-exempt and month-to-month-notice-co-covered.
  "forCauseEvictionExemption",
];

// Kept in sync by hand with the three options presented in
// frontend/src/pages/PropertyDetailPage.jsx's exemption-status field — see
// lease-clause-decision-log-CO.md §8a Part 13 for the underlying statute
// (C.R.S. § 38-12-1302) these three categories come from.
const FOR_CAUSE_EVICTION_EXEMPTION_VALUES = ["OWNER_OCCUPIED_OR_ADJACENT", "SHORT_TERM_RENTAL", "STANDARD_LONG_TERM"];

function validateForCauseEvictionExemption(body) {
  if (
    body.forCauseEvictionExemption !== undefined &&
    !FOR_CAUSE_EVICTION_EXEMPTION_VALUES.includes(body.forCauseEvictionExemption)
  ) {
    return `forCauseEvictionExemption must be one of: ${FOR_CAUSE_EVICTION_EXEMPTION_VALUES.join(", ")}`;
  }
  return null;
}

function validatePropertyBody(body) {
  const missing = REQUIRED_FIELDS.filter((field) => !body[field]);
  if (missing.length > 0) {
    return `Missing required field(s): ${missing.join(", ")}`;
  }
  return validateForCauseEvictionExemption(body);
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
  const { entityId, archived } = req.query;

  // Archived properties are hidden by default everywhere a landlord normally browses —
  // ?archived=true is the one explicit way to "dig and view" them (see PropertiesPage's
  // "View archived" link). Not offering a combined "all" mode — nothing in the app needs it.
  const properties = await prisma.property.findMany({
    where: {
      userId: req.currentUser.id,
      archived: archived === "true",
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

  // Computed on read (same "don't store what you can derive" pattern as MaintenanceSchedule's
  // `overdue`) — Taylor's call: Delete should only ever be offered as a live option on a
  // genuinely empty property (a real mistake, nothing attached yet). The moment anything real
  // is attached, Archive becomes the only removal-adjacent action; this just tells the
  // frontend which state it's in so it can show/hide the Delete button accordingly. The
  // DELETE endpoint's own dependent check below is unchanged and still the actual guard.
  const dependentCount = await countPropertyDependents(req.params.id);

  res.json({ ...property, canDelete: dependentCount === 0 });
});

router.put("/:id", async (req, res) => {
  const exemptionError = validateForCauseEvictionExemption(req.body);
  if (exemptionError) {
    return res.status(400).json({ error: exemptionError });
  }

  const { entityId, name, address1, address2, city, state, zip } = req.body;

  const existing = await prisma.property.findUnique({
    where: { id: req.params.id },
  });
  if (!existing || existing.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Property not found" });
  }

  // Locked while archived — unarchive first to make changes. Archiving/unarchiving
  // themselves go through the dedicated actions below, not this general-purpose edit route.
  if (existing.archived) {
    return res.status(400).json({ error: "Property is archived — unarchive it before making changes" });
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

  // Same computed canDelete as GET /:id — keeps the frontend's Delete-button visibility
  // consistent after an edit, without a full page refetch.
  const dependentCount = await countPropertyDependents(req.params.id);
  res.json({ ...property, canDelete: dependentCount === 0 });
});

// Every direct Property relation, for the "does this property have anything attached"
// check below. Keep in sync with schema.prisma's Property model relation list.
async function countPropertyDependents(propertyId) {
  const [
    leases,
    tenants,
    incomes,
    expenses,
    deposits,
    maintenanceRequests,
    maintenanceSchedules,
    paintSpecs,
    flooringSpecs,
    countertopSpecs,
    fixtures,
    appliances,
    backsplashSpecs,
    exteriorFeatures,
  ] = await Promise.all([
    prisma.lease.count({ where: { propertyId } }),
    prisma.tenant.count({ where: { propertyId } }),
    prisma.income.count({ where: { propertyId } }),
    prisma.expense.count({ where: { propertyId } }),
    prisma.deposit.count({ where: { propertyId } }),
    prisma.maintenanceRequest.count({ where: { propertyId } }),
    prisma.maintenanceSchedule.count({ where: { propertyId } }),
    prisma.paintSpec.count({ where: { propertyId } }),
    prisma.flooringSpec.count({ where: { propertyId } }),
    prisma.countertopSpec.count({ where: { propertyId } }),
    prisma.fixture.count({ where: { propertyId } }),
    prisma.appliance.count({ where: { propertyId } }),
    prisma.backsplashSpec.count({ where: { propertyId } }),
    prisma.exteriorFeature.count({ where: { propertyId } }),
  ]);

  return (
    leases +
    tenants +
    incomes +
    expenses +
    deposits +
    maintenanceRequests +
    maintenanceSchedules +
    paintSpecs +
    flooringSpecs +
    countertopSpecs +
    fixtures +
    appliances +
    backsplashSpecs +
    exteriorFeatures
  );
}

router.post("/:id/archive", async (req, res) => {
  const existing = await prisma.property.findUnique({
    where: { id: req.params.id },
  });
  if (!existing || existing.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Property not found" });
  }
  if (existing.archived) {
    return res.status(400).json({ error: "Property is already archived" });
  }

  const property = await prisma.property.update({
    where: { id: req.params.id },
    data: { archived: true, archivedAt: new Date(), archivedReason: req.body.reason || null },
  });

  const dependentCount = await countPropertyDependents(req.params.id);
  res.json({ ...property, canDelete: dependentCount === 0 });
});

router.post("/:id/unarchive", async (req, res) => {
  const existing = await prisma.property.findUnique({
    where: { id: req.params.id },
  });
  if (!existing || existing.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Property not found" });
  }
  if (!existing.archived) {
    return res.status(400).json({ error: "Property is not archived" });
  }

  const property = await prisma.property.update({
    where: { id: req.params.id },
    data: { archived: false, archivedAt: null, archivedReason: null },
  });

  const dependentCount = await countPropertyDependents(req.params.id);
  res.json({ ...property, canDelete: dependentCount === 0 });
});

router.delete("/:id", async (req, res) => {
  const existing = await prisma.property.findUnique({
    where: { id: req.params.id },
  });
  if (!existing || existing.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Property not found" });
  }

  // Properties are never hard-deleted once anything real is attached — archive instead
  // (memory project_property_archiving_not_delete). Checked proactively rather than
  // letting the FK constraint reject it, so the landlord gets a clear message instead of
  // a raw Prisma error. Delete stays available for cleaning up a genuinely empty property
  // (e.g. created by mistake).
  const dependentCount = await countPropertyDependents(req.params.id);
  if (dependentCount > 0) {
    return res.status(400).json({
      error: "This property has records attached and can't be deleted. Archive it instead to hide it and lock it from further changes.",
    });
  }

  await prisma.property.delete({ where: { id: req.params.id } });

  res.status(204).send();
});

module.exports = router;
