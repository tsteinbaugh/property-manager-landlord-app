const express = require("express");
const prisma = require("../lib/prisma");
const { pickFields } = require("../lib/pickFields");
const { SPEC_LINK_FIELDS, validateSpecLinks } = require("../lib/validateSpecLinks");

const REQUIRED_FIELDS = ["propertyId", "title", "intervalDays"];

const SPEC_LINK_FIELD_NAMES = SPEC_LINK_FIELDS.map((f) => f.field);

const ASSIGNABLE_FIELDS = [
  "vendorId",
  ...SPEC_LINK_FIELD_NAMES,
  "title",
  "description",
  "intervalDays",
  "lastDoneDate",
  "nextDueDate",
  "notes",
];

const DATE_FIELDS = ["lastDoneDate", "nextDueDate"];

function pickAssignableFields(body) {
  return pickFields(body, ASSIGNABLE_FIELDS, DATE_FIELDS);
}

function validateScheduleBody(body) {
  const missing = REQUIRED_FIELDS.filter((field) => !body[field]);
  if (missing.length > 0) {
    return `Missing required field(s): ${missing.join(", ")}`;
  }
  return null;
}

function withOverdue(schedule) {
  return {
    ...schedule,
    overdue: Boolean(schedule.nextDueDate && new Date(schedule.nextDueDate) < new Date()),
  };
}

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

const includeCompletions = {
  completions: { orderBy: { completedDate: "desc" } },
};

const router = express.Router();

router.post("/", async (req, res) => {
  const validationError = validateScheduleBody(req.body);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const { propertyId, vendorId } = req.body;

  const property = await prisma.property.findUnique({ where: { id: propertyId } });
  if (!property || property.userId !== req.currentUser.id) {
    return res.status(400).json({ error: `Property ${propertyId} not found` });
  }
  if (property.archived) {
    return res.status(400).json({ error: "Property is archived — unarchive it before adding new records" });
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
  if (data.lastDoneDate && !data.nextDueDate) {
    data.nextDueDate = addDays(data.lastDoneDate, data.intervalDays);
  }

  const schedule = await prisma.maintenanceSchedule.create({
    data: {
      userId: req.currentUser.id,
      entityId: property.entityId,
      propertyId,
      ...data,
      ...(data.lastDoneDate ? { completions: { create: { completedDate: data.lastDoneDate } } } : {}),
    },
    include: includeCompletions,
  });

  res.status(201).json(withOverdue(schedule));
});

router.get("/", async (req, res) => {
  const { propertyId, vendorId, overdue, deleted } = req.query;

  // Same archived-property hiding as tenants/leases lists — cross-property hub view only.
  // `deleted` — same 3-mode convention (absent = active, "true" = only deleted, "all" = both —
  // "all" also bypasses the archived-property hide, same reasoning as tenants.routes.js).
  const schedules = await prisma.maintenanceSchedule.findMany({
    where: {
      userId: req.currentUser.id,
      ...(propertyId ? { propertyId } : deleted === "all" ? {} : { property: { archived: false } }),
      ...(vendorId ? { vendorId } : {}),
      ...(overdue === "true" ? { nextDueDate: { lt: new Date() } } : {}),
      ...(deleted === "all" ? {} : { deleted: deleted === "true" }),
    },
    include: includeCompletions,
    orderBy: { nextDueDate: "asc" },
  });

  res.json(schedules.map(withOverdue));
});

router.get("/:id", async (req, res) => {
  const schedule = await prisma.maintenanceSchedule.findUnique({
    where: { id: req.params.id },
    include: includeCompletions,
  });

  if (!schedule || schedule.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Maintenance schedule not found" });
  }

  res.json(withOverdue(schedule));
});

router.put("/:id", async (req, res) => {
  const existing = await prisma.maintenanceSchedule.findUnique({
    where: { id: req.params.id },
  });
  if (!existing || existing.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Maintenance schedule not found" });
  }

  const specLinkError = await validateSpecLinks(req.body, req.currentUser.id, existing.propertyId);
  if (specLinkError) {
    return res.status(400).json({ error: specLinkError });
  }

  const data = pickAssignableFields(req.body);

  const schedule = await prisma.maintenanceSchedule.update({
    where: { id: req.params.id },
    data,
    include: includeCompletions,
  });

  res.json(withOverdue(schedule));
});

router.delete("/:id", async (req, res) => {
  const existing = await prisma.maintenanceSchedule.findUnique({
    where: { id: req.params.id },
  });
  if (!existing || existing.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Maintenance schedule not found" });
  }

  // Soft delete — see tenants.routes.js's DELETE handler for the full reasoning. Also
  // preserves the schedule's MaintenanceScheduleCompletion audit trail, which a real delete
  // would have cascade-destroyed.
  await prisma.maintenanceSchedule.update({
    where: { id: req.params.id },
    data: { deleted: true, deletedAt: new Date() },
  });

  res.status(204).send();
});

router.post("/:id/mark-done", async (req, res) => {
  const existing = await prisma.maintenanceSchedule.findUnique({
    where: { id: req.params.id },
  });
  if (!existing || existing.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Maintenance schedule not found" });
  }

  const lastDoneDate = req.body.doneDate ? new Date(req.body.doneDate) : new Date();
  const nextDueDate = addDays(lastDoneDate, existing.intervalDays);

  const schedule = await prisma.maintenanceSchedule.update({
    where: { id: req.params.id },
    data: {
      lastDoneDate,
      nextDueDate,
      completions: { create: { completedDate: lastDoneDate } },
    },
    include: includeCompletions,
  });

  res.json(withOverdue(schedule));
});

router.post("/:id/restore", async (req, res) => {
  const existing = await prisma.maintenanceSchedule.findUnique({ where: { id: req.params.id } });
  if (!existing || existing.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Maintenance schedule not found" });
  }
  if (!existing.deleted) {
    return res.status(400).json({ error: "Maintenance schedule is not deleted" });
  }

  const schedule = await prisma.maintenanceSchedule.update({
    where: { id: req.params.id },
    data: { deleted: false, deletedAt: null },
    include: includeCompletions,
  });

  res.json(withOverdue(schedule));
});

module.exports = router;
