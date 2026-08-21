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
    if (property.archived) {
      return res.status(400).json({ error: "Property is archived — unarchive it before adding new records" });
    }

    // Optional "copy details from an existing tenant" link (e.g. Tim moves from one property
    // you own to another) — a pointer for traceability only, not a live reference to copy
    // fields from server-side; the frontend pre-fills the form itself before submitting.
    // Deliberately not filtered by `deleted` — the whole point is being able to link back to
    // a tenant even if their old record was itself soft-deleted.
    let previousTenantId;
    if (req.body.previousTenantId) {
      const previousTenant = await prisma.tenant.findUnique({ where: { id: req.body.previousTenantId } });
      if (!previousTenant || previousTenant.userId !== req.currentUser.id) {
        return res.status(400).json({ error: `Tenant ${req.body.previousTenantId} not found` });
      }
      previousTenantId = previousTenant.id;
    }

    const tenant = await prisma.tenant.create({
      data: {
        userId: req.currentUser.id,
        propertyId,
        ...(previousTenantId ? { previousTenantId } : {}),
        ...pickAssignableFields(req.body),
      },
    });

    res.status(201).json(tenant);
  });

  router.get("/", async (req, res) => {
    const { propertyId, deleted } = req.query;

    // Cross-property hub view (no propertyId) hides tenants whose property is archived,
    // same as the property itself is hidden from PropertiesPage — a live filter via the
    // relation, not a stored flag, so unarchiving instantly restores visibility here too.
    // A property-scoped request (propertyId given, e.g. from that property's own detail
    // page) always shows its tenants regardless of archived status.
    //
    // `deleted` is a separate, independent flag from the property's own archived status —
    // absent = active only (default), "true" = only soft-deleted ones (the "View deleted"
    // digging view), "all" = both (used by the "copy from an existing tenant" picker, which
    // needs to find someone regardless of status). "all" also bypasses the archived-property
    // hide above — the whole point of that mode is finding a tenant no matter why they'd
    // otherwise be hidden, which includes their property having been archived (e.g. Tim, at
    // 123 Oak, after it's archived).
    const tenants = await prisma.tenant.findMany({
      where: {
        userId: req.currentUser.id,
        ...(propertyId ? { propertyId } : deleted === "all" ? {} : { property: { archived: false } }),
        ...(deleted === "all" ? {} : { deleted: deleted === "true" }),
      },
      orderBy: { createdAt: "desc" },
    });

    res.json(tenants);
  });

  router.get("/:id", async (req, res) => {
    const tenant = await prisma.tenant.findUnique({
      where: { id: req.params.id },
      include: {
        previousTenant: { select: { id: true, firstName: true, lastName: true, propertyId: true, property: { select: { name: true, address1: true } } } },
        nextTenants: { select: { id: true, firstName: true, lastName: true, propertyId: true, property: { select: { name: true, address1: true } } } },
      },
    });
    if (!tenant || tenant.userId !== req.currentUser.id) {
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

    // Soft delete — hides the tenant from normal views but never destroys the row (memory
    // project_property_archiving_not_delete: rental history shouldn't be destroyable by
    // accident). Idempotent, matching standard DELETE semantics: calling it again on an
    // already-deleted tenant just re-confirms 204.
    await prisma.tenant.update({ where: { id: req.params.id }, data: { deleted: true, deletedAt: new Date() } });

    res.status(204).send();
  });

  router.post("/:id/restore", async (req, res) => {
    const existing = await findOwnedTenant(req.params.id, req.currentUser.id);
    if (!existing) {
      return res.status(404).json({ error: "Tenant not found" });
    }
    if (!existing.deleted) {
      return res.status(400).json({ error: "Tenant is not deleted" });
    }

    const tenant = await prisma.tenant.update({
      where: { id: req.params.id },
      data: { deleted: false, deletedAt: null },
    });

    res.json(tenant);
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
