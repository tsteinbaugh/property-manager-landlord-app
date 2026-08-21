const express = require("express");
const prisma = require("../lib/prisma");
const { pickFields } = require("../lib/pickFields");
const { SPEC_LINK_FIELDS, validateSpecLinks } = require("../lib/validateSpecLinks");

const REQUIRED_FIELDS = ["propertyId", "title"];

const SPEC_LINK_FIELD_NAMES = SPEC_LINK_FIELDS.map((f) => f.field);

const ASSIGNABLE_FIELDS = [
  "tenantId",
  "vendorId",
  ...SPEC_LINK_FIELD_NAMES,
  "title",
  "description",
  "reportedBy",
  "reportedDate",
  "status",
  "estimatedCost",
  "actualCost",
  "notes",
];

const DATE_FIELDS = ["reportedDate"];

const MAINTENANCE_STATUSES = ["OPEN", "IN_PROGRESS", "CLOSED"];

function pickAssignableFields(body) {
  return pickFields(body, ASSIGNABLE_FIELDS, DATE_FIELDS);
}

function validateRequestBody(body) {
  const missing = REQUIRED_FIELDS.filter((field) => !body[field]);
  if (missing.length > 0) {
    return `Missing required field(s): ${missing.join(", ")}`;
  }
  if (body.status && !MAINTENANCE_STATUSES.includes(body.status)) {
    return `Invalid status. Must be one of: ${MAINTENANCE_STATUSES.join(", ")}`;
  }
  return null;
}

const includeStatusChanges = {
  statusChanges: { orderBy: { changedAt: "asc" } },
};

const router = express.Router();

router.post("/", async (req, res) => {
  const validationError = validateRequestBody(req.body);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const { propertyId, tenantId, vendorId } = req.body;

  const property = await prisma.property.findUnique({ where: { id: propertyId } });
  if (!property || property.userId !== req.currentUser.id) {
    return res.status(400).json({ error: `Property ${propertyId} not found` });
  }
  if (property.archived) {
    return res.status(400).json({ error: "Property is archived — unarchive it before adding new records" });
  }

  if (tenantId) {
    const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
    if (!tenant || tenant.userId !== req.currentUser.id || tenant.propertyId !== propertyId) {
      return res.status(400).json({ error: `Tenant ${tenantId} not found` });
    }
  }

  if (vendorId) {
    const vendor = await prisma.vendor.findUnique({ where: { id: vendorId } });
    if (!vendor || vendor.userId !== req.currentUser.id) {
      return res.status(400).json({ error: `Vendor ${vendorId} not found` });
    }
  }

  const specLinkError = await validateSpecLinks(req.body, req.currentUser.id, propertyId);
  if (specLinkError) {
    return res.status(400).json({ error: specLinkError });
  }

  const data = pickAssignableFields(req.body);

  const request = await prisma.maintenanceRequest.create({
    data: {
      userId: req.currentUser.id,
      entityId: property.entityId,
      propertyId,
      ...data,
      statusChanges: {
        create: { toStatus: data.status || "OPEN" },
      },
    },
    include: includeStatusChanges,
  });

  res.status(201).json(request);
});

router.get("/", async (req, res) => {
  const { propertyId, tenantId, vendorId, status, deleted } = req.query;

  // Same archived-property hiding as tenants/leases lists — cross-property hub view only.
  // `deleted` — same 3-mode convention (absent = active, "true" = only deleted, "all" = both —
  // "all" also bypasses the archived-property hide, same reasoning as tenants.routes.js).
  const requests = await prisma.maintenanceRequest.findMany({
    where: {
      userId: req.currentUser.id,
      ...(propertyId ? { propertyId } : deleted === "all" ? {} : { property: { archived: false } }),
      ...(tenantId ? { tenantId } : {}),
      ...(vendorId ? { vendorId } : {}),
      ...(status ? { status } : {}),
      ...(deleted === "all" ? {} : { deleted: deleted === "true" }),
    },
    include: includeStatusChanges,
    orderBy: { createdAt: "desc" },
  });

  res.json(requests);
});

router.get("/:id", async (req, res) => {
  const request = await prisma.maintenanceRequest.findUnique({
    where: { id: req.params.id },
    include: includeStatusChanges,
  });

  if (!request || request.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Maintenance request not found" });
  }

  res.json(request);
});

router.put("/:id", async (req, res) => {
  if (req.body.status && !MAINTENANCE_STATUSES.includes(req.body.status)) {
    return res.status(400).json({
      error: `Invalid status. Must be one of: ${MAINTENANCE_STATUSES.join(", ")}`,
    });
  }

  const existing = await prisma.maintenanceRequest.findUnique({
    where: { id: req.params.id },
  });
  if (!existing || existing.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Maintenance request not found" });
  }

  const specLinkError = await validateSpecLinks(req.body, req.currentUser.id, existing.propertyId);
  if (specLinkError) {
    return res.status(400).json({ error: specLinkError });
  }

  const data = pickAssignableFields(req.body);
  const statusChanged = data.status && data.status !== existing.status;

  const request = await prisma.maintenanceRequest.update({
    where: { id: req.params.id },
    data: {
      ...data,
      ...(statusChanged
        ? { statusChanges: { create: { fromStatus: existing.status, toStatus: data.status } } }
        : {}),
    },
    include: includeStatusChanges,
  });

  res.json(request);
});

router.delete("/:id", async (req, res) => {
  const existing = await prisma.maintenanceRequest.findUnique({
    where: { id: req.params.id },
  });
  if (!existing || existing.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Maintenance request not found" });
  }

  // Soft delete — see tenants.routes.js's DELETE handler for the full reasoning. Also
  // preserves the request's MaintenanceStatusChange audit trail, which a real delete would
  // have cascade-destroyed.
  await prisma.maintenanceRequest.update({
    where: { id: req.params.id },
    data: { deleted: true, deletedAt: new Date() },
  });

  res.status(204).send();
});

router.post("/:id/restore", async (req, res) => {
  const existing = await prisma.maintenanceRequest.findUnique({ where: { id: req.params.id } });
  if (!existing || existing.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Maintenance request not found" });
  }
  if (!existing.deleted) {
    return res.status(400).json({ error: "Maintenance request is not deleted" });
  }

  const request = await prisma.maintenanceRequest.update({
    where: { id: req.params.id },
    data: { deleted: false, deletedAt: null },
    include: includeStatusChanges,
  });

  res.json(request);
});

module.exports = router;
