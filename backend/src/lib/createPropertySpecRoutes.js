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
function createPropertySpecRoutes({
  model,
  requiredFields = ["propertyId"],
  assignableFields,
  dateFields = [],
  notFoundLabel,
  computeExtra,
  // Optional async (body, userId) => errorMessage|null — for the one category
  // (Appliance.preferredVendorId) that references another user-owned resource
  // and needs its own ownership check beyond the standard propertyId one.
  validateExtra,
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
      const extraError = await validateExtra(req.body, req.currentUser.id);
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
    });

    res.status(201).json(withExtra(item));
  });

  router.get("/", async (req, res) => {
    const { propertyId } = req.query;
    if (!propertyId) {
      return res.status(400).json({ error: "Missing required query param: propertyId" });
    }

    const property = await findOwnedProperty(propertyId, req.currentUser.id);
    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }

    const items = await model.findMany({
      where: { propertyId },
      orderBy: { createdAt: "asc" },
    });

    res.json(items.map(withExtra));
  });

  router.get("/:id", async (req, res) => {
    const item = await model.findUnique({ where: { id: req.params.id } });
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
      const extraError = await validateExtra(req.body, req.currentUser.id);
      if (extraError) {
        return res.status(400).json({ error: extraError });
      }
    }

    const item = await model.update({
      where: { id: req.params.id },
      data: pickFields(req.body, assignableFields, dateFields),
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

  return router;
}

module.exports = { createPropertySpecRoutes };
