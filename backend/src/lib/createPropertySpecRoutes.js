const express = require("express");
const prisma = require("./prisma");
const { pickFields } = require("./pickFields");

// Shared CRUD for the 7 Property Specs categories (Paint, Flooring, Countertops,
// Fixtures, Appliances, Backsplash, Exterior/Grounds) — identical shape across all of
// them (property ownership check, entityId derived server-side from property.entityId,
// pickFields with date coercion), so it's written once instead of 7 times. Same
// DI-factory idea as createLeasesRoutes({ r2 }) in leases.routes.js, just factored out
// a level further since these 7 routers don't need any injected dependency, only config.
//
// computeExtra(item) => partialObject is merged onto every returned item — the hook
// FlooringSpec (lowStock) and Appliance (warrantyExpiringSoon) use for their computed
// flags, same "compute on read, don't store" pattern as MaintenanceSchedule.overdue.
//
// Every category also gets, for free: active/retired filtering (GET / defaults to
// active only, ?includeRetired=true also returns retired ones) and a generic
// POST /:id/replace action — creates a new row carrying over propertyId/entityId/
// userId/location only, marks the existing row retired. Editing a spec item in place
// to describe its replacement would silently misattribute its prior history (linked
// maintenance, in particular) to whatever comes after it; "replace" is deliberately
// its own action instead, same "don't silently lose history" instinct as
// MaintenanceStatusChange/MaintenanceScheduleCompletion.
function createPropertySpecRoutes({
  model,
  requiredFields = ["propertyId"],
  assignableFields,
  dateFields = [],
  notFoundLabel,
  computeExtra,
  // Optional async (body, userId, propertyId) => errorMessage|null — for
  // categories that reference another user-owned resource
  // (Appliance.preferredVendorId, Flooring/Countertop/Backsplash.expenseId)
  // and need their own ownership check beyond the standard propertyId one.
  // propertyId is the just-validated property on create, or the existing
  // record's propertyId on update (PUT bodies don't resend it).
  validateExtra,
  // Optional Prisma `include` object, threaded through every read/write —
  // used to embed a linked Expense (Flooring/Countertop/Backsplash) or
  // linked maintenance records (all 7) in every response.
  include,
  // Fields (beyond `location`) that /replace carries over to the new row —
  // for anything that's structurally required, not just descriptive, like
  // Fixture.fixtureType (the category discriminator within that one model).
  replaceCarryFields = [],
}) {
  function withExtra(item) {
    if (!item || !computeExtra) return item;
    return { ...item, ...computeExtra(item) };
  }

  async function findOwnedProperty(propertyId, userId) {
    const property = await prisma.property.findUnique({ where: { id: propertyId } });
    if (!property || property.userId !== userId) return null;
    return property;
  }

  function validateBody(body) {
    const missing = requiredFields.filter((field) => !body[field]);
    if (missing.length > 0) {
      return `Missing required field(s): ${missing.join(", ")}`;
    }
    return null;
  }

  const router = express.Router();

  router.post("/", async (req, res) => {
    const validationError = validateBody(req.body);
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    const { propertyId } = req.body;
    const property = await findOwnedProperty(propertyId, req.currentUser.id);
    if (!property) {
      return res.status(400).json({ error: `Property ${propertyId} not found` });
    }

    if (validateExtra) {
      const extraError = await validateExtra(req.body, req.currentUser.id, propertyId);
      if (extraError) {
        return res.status(400).json({ error: extraError });
      }
    }

    const item = await model.create({
      data: {
        propertyId,
        entityId: property.entityId,
        userId: req.currentUser.id,
        ...pickFields(req.body, assignableFields, dateFields),
      },
      ...(include ? { include } : {}),
    });

    res.status(201).json(withExtra(item));
  });

  router.get("/", async (req, res) => {
    const { propertyId, includeRetired } = req.query;
    if (!propertyId) {
      return res.status(400).json({ error: "Missing required query param: propertyId" });
    }

    const property = await findOwnedProperty(propertyId, req.currentUser.id);
    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }

    const items = await model.findMany({
      where: { propertyId, ...(includeRetired === "true" ? {} : { active: true }) },
      orderBy: { createdAt: "asc" },
      ...(include ? { include } : {}),
    });

    res.json(items.map(withExtra));
  });

  router.get("/:id", async (req, res) => {
    const item = await model.findUnique({
      where: { id: req.params.id },
      ...(include ? { include } : {}),
    });
    if (!item || item.userId !== req.currentUser.id) {
      return res.status(404).json({ error: `${notFoundLabel} not found` });
    }

    res.json(withExtra(item));
  });

  router.put("/:id", async (req, res) => {
    const existing = await model.findUnique({ where: { id: req.params.id } });
    if (!existing || existing.userId !== req.currentUser.id) {
      return res.status(404).json({ error: `${notFoundLabel} not found` });
    }

    if (validateExtra) {
      const extraError = await validateExtra(req.body, req.currentUser.id, existing.propertyId);
      if (extraError) {
        return res.status(400).json({ error: extraError });
      }
    }

    const item = await model.update({
      where: { id: req.params.id },
      data: pickFields(req.body, assignableFields, dateFields),
      ...(include ? { include } : {}),
    });

    res.json(withExtra(item));
  });

  router.delete("/:id", async (req, res) => {
    const existing = await model.findUnique({ where: { id: req.params.id } });
    if (!existing || existing.userId !== req.currentUser.id) {
      return res.status(404).json({ error: `${notFoundLabel} not found` });
    }

    await model.delete({ where: { id: req.params.id } });

    res.status(204).send();
  });

  router.post("/:id/replace", async (req, res) => {
    const existing = await model.findUnique({ where: { id: req.params.id } });
    if (!existing || existing.userId !== req.currentUser.id) {
      return res.status(404).json({ error: `${notFoundLabel} not found` });
    }

    const replacement = await model.create({
      data: {
        propertyId: existing.propertyId,
        entityId: existing.entityId,
        userId: existing.userId,
        location: existing.location,
        ...Object.fromEntries(replaceCarryFields.map((field) => [field, existing[field]])),
      },
      ...(include ? { include } : {}),
    });

    await model.update({
      where: { id: req.params.id },
      data: { active: false, retiredAt: new Date() },
    });

    res.status(201).json(withExtra(replacement));
  });

  return router;
}

module.exports = { createPropertySpecRoutes };
