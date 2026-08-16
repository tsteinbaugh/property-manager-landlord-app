const express = require("express");
const crypto = require("crypto");
const prisma = require("../lib/prisma");
const { pickFields } = require("../lib/pickFields");
const defaultR2 = require("../lib/r2");

const REQUIRED_FIELDS = ["firstName", "lastName", "propertyId"];

const ASSIGNABLE_FIELDS = [
  "firstName",
  "lastName",
  "phone",
  "email",
  "dateOfBirth",
  "applicationStatus",
  "idVerified",
  "creditCheckStatus",
  "creditCheckDate",
  "backgroundCheckStatus",
  "backgroundCheckDate",
  "employer",
  "employmentStatus",
  "monthlyIncome",
  "emergencyContactName",
  "emergencyContactPhone",
  "emergencyContactRelation",
  "rentersInsuranceInsurer",
  "rentersInsurancePolicyNumber",
  "rentersInsuranceCoverageAmount",
  "rentersInsuranceExpirationDate",
  "rentersInsuranceLandlordAdditionalInsured",
  "rentersInsuranceCertificateOnFile",
];

const DATE_FIELDS = ["dateOfBirth", "creditCheckDate", "backgroundCheckDate", "rentersInsuranceExpirationDate"];

const APPLICATION_STATUSES = ["PENDING", "APPROVED", "REJECTED"];
const DOCUMENT_CATEGORIES = ["CREDIT_REPORT", "BACKGROUND_CHECK", "INCOME_VERIFICATION", "ID"];
const ALLOWED_DOCUMENT_TYPES = ["application/pdf", "image/jpeg", "image/png"];

function pickAssignableFields(body) {
  return pickFields(body, ASSIGNABLE_FIELDS, DATE_FIELDS);
}

function validateTenantBody(body) {
  const missing = REQUIRED_FIELDS.filter((field) => !body[field]);
  if (missing.length > 0) {
    return `Missing required field(s): ${missing.join(", ")}`;
  }
  if (body.applicationStatus && !APPLICATION_STATUSES.includes(body.applicationStatus)) {
    return `Invalid applicationStatus. Must be one of: ${APPLICATION_STATUSES.join(", ")}`;
  }
  return null;
}

function sanitizeFileName(fileName) {
  return fileName.replace(/[^a-zA-Z0-9.\-_]/g, "_");
}

async function findOwnedTenant(id, userId) {
  const tenant = await prisma.tenant.findUnique({ where: { id } });
  if (!tenant || tenant.userId !== userId) return null;
  return tenant;
}

function createTenantsRoutes({ r2 = defaultR2 } = {}) {
  const router = express.Router();

  router.post("/", async (req, res) => {
    const validationError = validateTenantBody(req.body);
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    const { propertyId } = req.body;

    const property = await prisma.property.findUnique({ where: { id: propertyId } });
    if (!property || property.userId !== req.currentUser.id) {
      return res.status(400).json({ error: `Property ${propertyId} not found` });
    }

    const tenant = await prisma.tenant.create({
      data: {
        userId: req.currentUser.id,
        propertyId,
        ...pickAssignableFields(req.body),
      },
    });

    res.status(201).json(tenant);
  });

  router.get("/", async (req, res) => {
    const { propertyId } = req.query;

    const tenants = await prisma.tenant.findMany({
      where: {
        userId: req.currentUser.id,
        ...(propertyId ? { propertyId } : {}),
      },
      orderBy: { createdAt: "desc" },
    });

    res.json(tenants);
  });

  router.get("/:id", async (req, res) => {
    const tenant = await findOwnedTenant(req.params.id, req.currentUser.id);
    if (!tenant) {
      return res.status(404).json({ error: "Tenant not found" });
    }

    res.json(tenant);
  });

  router.put("/:id", async (req, res) => {
    if (req.body.applicationStatus && !APPLICATION_STATUSES.includes(req.body.applicationStatus)) {
      return res.status(400).json({
        error: `Invalid applicationStatus. Must be one of: ${APPLICATION_STATUSES.join(", ")}`,
      });
    }
    if (("firstName" in req.body && !req.body.firstName) || ("lastName" in req.body && !req.body.lastName)) {
      return res.status(400).json({ error: "firstName and lastName can't be blank" });
    }

    const existing = await findOwnedTenant(req.params.id, req.currentUser.id);
    if (!existing) {
      return res.status(404).json({ error: "Tenant not found" });
    }

    const tenant = await prisma.tenant.update({
      where: { id: req.params.id },
      data: pickAssignableFields(req.body),
    });

    res.json(tenant);
  });

  router.delete("/:id", async (req, res) => {
    const existing = await findOwnedTenant(req.params.id, req.currentUser.id);
    if (!existing) {
      return res.status(404).json({ error: "Tenant not found" });
    }

    await prisma.tenant.delete({ where: { id: req.params.id } });

    res.status(204).send();
  });

  // Documents: credit report, background check, income verification, ID —
  // same presigned-URL pattern as Lease.documentKey (client PUTs straight to
  // R2, bytes never touch this backend). A tenant can hold more than one per
  // category (e.g. two pay stubs), so this is a list, not a single slot.
  router.get("/:id/documents", async (req, res) => {
    const tenant = await findOwnedTenant(req.params.id, req.currentUser.id);
    if (!tenant) {
      return res.status(404).json({ error: "Tenant not found" });
    }

    const documents = await prisma.tenantDocument.findMany({
      where: { tenantId: tenant.id },
      orderBy: { createdAt: "desc" },
    });

    res.json(documents);
  });

  router.post("/:id/documents/upload-url", async (req, res) => {
    const { fileName, contentType, category } = req.body;

    if (!fileName || !contentType || !category) {
      return res.status(400).json({ error: "Missing required field(s): fileName, contentType, category" });
    }
    if (!DOCUMENT_CATEGORIES.includes(category)) {
      return res.status(400).json({ error: `category must be one of: ${DOCUMENT_CATEGORIES.join(", ")}` });
    }
    if (!ALLOWED_DOCUMENT_TYPES.includes(contentType)) {
      return res.status(400).json({ error: `contentType must be one of: ${ALLOWED_DOCUMENT_TYPES.join(", ")}` });
    }

    const tenant = await findOwnedTenant(req.params.id, req.currentUser.id);
    if (!tenant) {
      return res.status(404).json({ error: "Tenant not found" });
    }

    const key = `tenants/${tenant.id}/${crypto.randomUUID()}-${sanitizeFileName(fileName)}`;
    const uploadUrl = await r2.getUploadUrl(key, contentType);

    res.json({ uploadUrl, key });
  });

  router.post("/:id/documents/confirm", async (req, res) => {
    const { key, category, fileName } = req.body;

    if (!key || !category || !fileName) {
      return res.status(400).json({ error: "Missing required field(s): key, category, fileName" });
    }
    if (!DOCUMENT_CATEGORIES.includes(category)) {
      return res.status(400).json({ error: `category must be one of: ${DOCUMENT_CATEGORIES.join(", ")}` });
    }

    const tenant = await findOwnedTenant(req.params.id, req.currentUser.id);
    if (!tenant) {
      return res.status(404).json({ error: "Tenant not found" });
    }
    if (!key.startsWith(`tenants/${tenant.id}/`)) {
      return res.status(400).json({ error: "Key does not belong to this tenant" });
    }

    const document = await prisma.tenantDocument.create({
      data: { tenantId: tenant.id, category, fileName, documentKey: key },
    });

    res.status(201).json(document);
  });

  router.get("/:id/documents/:documentId/download-url", async (req, res) => {
    const tenant = await findOwnedTenant(req.params.id, req.currentUser.id);
    if (!tenant) {
      return res.status(404).json({ error: "Tenant not found" });
    }

    const document = await prisma.tenantDocument.findUnique({ where: { id: req.params.documentId } });
    if (!document || document.tenantId !== tenant.id) {
      return res.status(404).json({ error: "Document not found" });
    }

    const downloadUrl = await r2.getDownloadUrl(document.documentKey);

    res.json({ downloadUrl });
  });

  router.delete("/:id/documents/:documentId", async (req, res) => {
    const tenant = await findOwnedTenant(req.params.id, req.currentUser.id);
    if (!tenant) {
      return res.status(404).json({ error: "Tenant not found" });
    }

    const document = await prisma.tenantDocument.findUnique({ where: { id: req.params.documentId } });
    if (!document || document.tenantId !== tenant.id) {
      return res.status(404).json({ error: "Document not found" });
    }

    await r2.deleteObject(document.documentKey);
    await prisma.tenantDocument.delete({ where: { id: document.id } });

    res.status(204).send();
  });

  return router;
}

module.exports = createTenantsRoutes;
