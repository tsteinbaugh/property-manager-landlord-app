const express = require("express");
const crypto = require("crypto");
const prisma = require("../lib/prisma");
const { pickFields } = require("../lib/pickFields");
const defaultR2 = require("../lib/r2");

const REQUIRED_FIELDS = ["propertyId", "startDate", "monthlyRent"];

const ASSIGNABLE_FIELDS = [
  "startDate",
  "endDate",
  "monthlyRent",
  "securityDepositAmount",
  "lateFeeAmount",
  "lateFeeGraceDays",
  "petPolicy",
  "petRentAmount",
  "renewalRentIncreaseCap",
  "notes",
  "status",
];

const DATE_FIELDS = ["startDate", "endDate"];

const LEASE_TENANT_ROLES = ["PRIMARY", "CO_TENANT", "GUARANTOR"];

function pickAssignableFields(body) {
  return pickFields(body, ASSIGNABLE_FIELDS, DATE_FIELDS);
}

function validateLeaseBody(body) {
  const missing = REQUIRED_FIELDS.filter((field) => !body[field]);
  if (missing.length > 0) {
    return `Missing required field(s): ${missing.join(", ")}`;
  }
  return null;
}

const includeTenants = {
  leaseTenants: { include: { tenant: true } },
};

function sanitizeFileName(fileName) {
  return fileName.replace(/[^a-zA-Z0-9.\-_]/g, "_");
}

function createLeasesRoutes({ r2 = defaultR2 } = {}) {
  const router = express.Router();

  router.post("/", async (req, res) => {
    const validationError = validateLeaseBody(req.body);
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    const { propertyId } = req.body;

    const property = await prisma.property.findUnique({ where: { id: propertyId } });
    if (!property || property.userId !== req.currentUser.id) {
      return res.status(400).json({ error: `Property ${propertyId} not found` });
    }

    const lease = await prisma.lease.create({
      data: {
        propertyId,
        userId: req.currentUser.id,
        ...pickAssignableFields(req.body),
      },
      include: includeTenants,
    });

    res.status(201).json(lease);
  });

  router.get("/", async (req, res) => {
    const { propertyId } = req.query;

    const leases = await prisma.lease.findMany({
      where: {
        userId: req.currentUser.id,
        ...(propertyId ? { propertyId } : {}),
      },
      include: includeTenants,
      orderBy: { createdAt: "desc" },
    });

    res.json(leases);
  });

  router.get("/:id", async (req, res) => {
    const lease = await prisma.lease.findUnique({
      where: { id: req.params.id },
      include: includeTenants,
    });

    if (!lease || lease.userId !== req.currentUser.id) {
      return res.status(404).json({ error: "Lease not found" });
    }

    res.json(lease);
  });

  router.put("/:id", async (req, res) => {
    const existing = await prisma.lease.findUnique({
      where: { id: req.params.id },
    });
    if (!existing || existing.userId !== req.currentUser.id) {
      return res.status(404).json({ error: "Lease not found" });
    }

    const lease = await prisma.lease.update({
      where: { id: req.params.id },
      data: pickAssignableFields(req.body),
      include: includeTenants,
    });

    res.json(lease);
  });

  router.delete("/:id", async (req, res) => {
    const existing = await prisma.lease.findUnique({
      where: { id: req.params.id },
    });
    if (!existing || existing.userId !== req.currentUser.id) {
      return res.status(404).json({ error: "Lease not found" });
    }

    await prisma.lease.delete({ where: { id: req.params.id } });

    res.status(204).send();
  });

  router.post("/:id/tenants", async (req, res) => {
    const { tenantId, role } = req.body;

    if (!tenantId || !role) {
      return res.status(400).json({ error: "Missing required field(s): tenantId, role" });
    }
    if (!LEASE_TENANT_ROLES.includes(role)) {
      return res.status(400).json({
        error: `Invalid role. Must be one of: ${LEASE_TENANT_ROLES.join(", ")}`,
      });
    }

    const lease = await prisma.lease.findUnique({ where: { id: req.params.id } });
    if (!lease || lease.userId !== req.currentUser.id) {
      return res.status(404).json({ error: "Lease not found" });
    }

    const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
    if (!tenant || tenant.userId !== req.currentUser.id) {
      return res.status(400).json({ error: `Tenant ${tenantId} not found` });
    }
    if (tenant.applicationStatus !== "APPROVED") {
      return res.status(400).json({ error: "Only approved tenants can be attached to a lease" });
    }

    const existingLink = await prisma.leaseTenant.findUnique({
      where: { leaseId_tenantId: { leaseId: lease.id, tenantId } },
    });
    if (existingLink) {
      return res.status(400).json({ error: "Tenant is already on this lease" });
    }

    await prisma.leaseTenant.create({
      data: { leaseId: lease.id, tenantId, role },
    });

    const updatedLease = await prisma.lease.findUnique({
      where: { id: lease.id },
      include: includeTenants,
    });

    res.status(201).json(updatedLease);
  });

  router.delete("/:id/tenants/:tenantId", async (req, res) => {
    const lease = await prisma.lease.findUnique({ where: { id: req.params.id } });
    if (!lease || lease.userId !== req.currentUser.id) {
      return res.status(404).json({ error: "Lease not found" });
    }

    const link = await prisma.leaseTenant.findUnique({
      where: { leaseId_tenantId: { leaseId: lease.id, tenantId: req.params.tenantId } },
    });
    if (!link) {
      return res.status(404).json({ error: "Tenant is not on this lease" });
    }

    await prisma.leaseTenant.delete({ where: { id: link.id } });

    res.status(204).send();
  });

  // Client asks for a presigned PUT URL, uploads the PDF bytes directly to
  // R2, then calls /document-confirm — the file body never touches this
  // backend.
  router.post("/:id/document-upload-url", async (req, res) => {
    const { fileName, contentType } = req.body;

    if (!fileName || !contentType) {
      return res.status(400).json({ error: "Missing required field(s): fileName, contentType" });
    }
    if (contentType !== "application/pdf") {
      return res.status(400).json({ error: "Only application/pdf is supported for lease documents" });
    }

    const lease = await prisma.lease.findUnique({ where: { id: req.params.id } });
    if (!lease || lease.userId !== req.currentUser.id) {
      return res.status(404).json({ error: "Lease not found" });
    }

    const key = `leases/${lease.id}/${crypto.randomUUID()}-${sanitizeFileName(fileName)}`;
    const uploadUrl = await r2.getUploadUrl(key, contentType);

    res.json({ uploadUrl, key });
  });

  // Confirms a completed upload and attaches it to the lease. Replacing an
  // existing document deletes the old R2 object so files don't orphan.
  router.post("/:id/document-confirm", async (req, res) => {
    const { key } = req.body;

    if (!key) {
      return res.status(400).json({ error: "Missing required field: key" });
    }

    const lease = await prisma.lease.findUnique({ where: { id: req.params.id } });
    if (!lease || lease.userId !== req.currentUser.id) {
      return res.status(404).json({ error: "Lease not found" });
    }
    if (!key.startsWith(`leases/${lease.id}/`)) {
      return res.status(400).json({ error: "Key does not belong to this lease" });
    }

    if (lease.documentKey && lease.documentKey !== key) {
      await r2.deleteObject(lease.documentKey);
    }

    const updatedLease = await prisma.lease.update({
      where: { id: lease.id },
      data: { documentKey: key },
      include: includeTenants,
    });

    res.json(updatedLease);
  });

  router.get("/:id/document-url", async (req, res) => {
    const lease = await prisma.lease.findUnique({ where: { id: req.params.id } });
    if (!lease || lease.userId !== req.currentUser.id) {
      return res.status(404).json({ error: "Lease not found" });
    }
    if (!lease.documentKey) {
      return res.status(404).json({ error: "Lease has no document uploaded" });
    }

    const downloadUrl = await r2.getDownloadUrl(lease.documentKey);

    res.json({ downloadUrl });
  });

  router.delete("/:id/document", async (req, res) => {
    const lease = await prisma.lease.findUnique({ where: { id: req.params.id } });
    if (!lease || lease.userId !== req.currentUser.id) {
      return res.status(404).json({ error: "Lease not found" });
    }
    if (!lease.documentKey) {
      return res.status(404).json({ error: "Lease has no document uploaded" });
    }

    await r2.deleteObject(lease.documentKey);
    await prisma.lease.update({ where: { id: lease.id }, data: { documentKey: null } });

    res.status(204).send();
  });

  return router;
}

module.exports = createLeasesRoutes;
