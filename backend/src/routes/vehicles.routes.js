const express = require("express");
const prisma = require("../lib/prisma");
const { pickFields } = require("../lib/pickFields");

const REQUIRED_FIELDS = ["tenantId"];
const ASSIGNABLE_FIELDS = ["make", "model", "year", "color", "licensePlate", "state", "vin", "parkingSpot"];
const TENANT_SELECT = { select: { id: true, firstName: true, lastName: true } };

function pickAssignableFields(body) {
  return pickFields(body, ASSIGNABLE_FIELDS);
}

function validateVehicleBody(body) {
  const missing = REQUIRED_FIELDS.filter((field) => !body[field]);
  if (missing.length > 0) {
    return `Missing required field(s): ${missing.join(", ")}`;
  }
  return null;
}

async function findOwnedTenant(tenantId, userId) {
  const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
  if (!tenant || tenant.userId !== userId) return null;
  return tenant;
}

async function findOwnedLease(leaseId, userId) {
  const lease = await prisma.lease.findUnique({ where: { id: leaseId } });
  if (!lease || lease.userId !== userId) return null;
  return lease;
}

const router = express.Router();

router.post("/", async (req, res) => {
  const validationError = validateVehicleBody(req.body);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const { tenantId } = req.body;
  const tenant = await findOwnedTenant(tenantId, req.currentUser.id);
  if (!tenant) {
    return res.status(400).json({ error: `Tenant ${tenantId} not found` });
  }

  const vehicle = await prisma.vehicle.create({
    data: { tenantId, ...pickAssignableFields(req.body) },
    include: { tenant: TENANT_SELECT },
  });

  res.status(201).json(vehicle);
});

router.get("/", async (req, res) => {
  const { leaseId, tenantId } = req.query;
  if (!leaseId && !tenantId) {
    return res.status(400).json({ error: "Missing required query param: leaseId or tenantId" });
  }

  let tenantIds;
  if (tenantId) {
    // The Tenant page — the canonical place to add these, since a Tenant
    // exists before any Lease does (during application).
    const tenant = await findOwnedTenant(tenantId, req.currentUser.id);
    if (!tenant) {
      return res.status(404).json({ error: "Tenant not found" });
    }
    tenantIds = [tenantId];
  } else {
    const lease = await findOwnedLease(leaseId, req.currentUser.id);
    if (!lease) {
      return res.status(404).json({ error: "Lease not found" });
    }
    const leaseTenants = await prisma.leaseTenant.findMany({
      where: { leaseId },
      select: { tenantId: true },
    });
    tenantIds = leaseTenants.map((lt) => lt.tenantId);
  }

  const vehicles = await prisma.vehicle.findMany({
    where: { tenantId: { in: tenantIds } },
    include: { tenant: TENANT_SELECT },
    orderBy: { createdAt: "asc" },
  });

  res.json(vehicles);
});

router.put("/:id", async (req, res) => {
  const existing = await prisma.vehicle.findUnique({ where: { id: req.params.id } });
  if (!existing) {
    return res.status(404).json({ error: "Vehicle not found" });
  }
  const tenant = await findOwnedTenant(existing.tenantId, req.currentUser.id);
  if (!tenant) {
    return res.status(404).json({ error: "Vehicle not found" });
  }

  const data = pickAssignableFields(req.body);

  // Re-linking to a different tenant on the same lease (e.g. one co-tenant
  // moves out and the other keeps the car) — must still be a tenant this
  // user owns.
  if (req.body.tenantId && req.body.tenantId !== existing.tenantId) {
    const newTenant = await findOwnedTenant(req.body.tenantId, req.currentUser.id);
    if (!newTenant) {
      return res.status(400).json({ error: `Tenant ${req.body.tenantId} not found` });
    }
    data.tenantId = req.body.tenantId;
  }

  const vehicle = await prisma.vehicle.update({
    where: { id: req.params.id },
    data,
    include: { tenant: TENANT_SELECT },
  });

  res.json(vehicle);
});

router.delete("/:id", async (req, res) => {
  const existing = await prisma.vehicle.findUnique({ where: { id: req.params.id } });
  if (!existing) {
    return res.status(404).json({ error: "Vehicle not found" });
  }
  const tenant = await findOwnedTenant(existing.tenantId, req.currentUser.id);
  if (!tenant) {
    return res.status(404).json({ error: "Vehicle not found" });
  }

  await prisma.vehicle.delete({ where: { id: req.params.id } });

  res.status(204).send();
});

module.exports = router;
