const express = require("express");
const crypto = require("crypto");
const prisma = require("../lib/prisma");
const { pickFields } = require("../lib/pickFields");
const defaultR2 = require("../lib/r2");
const { buildLeasePdf } = require("../lib/generateLeasePdf");
const { isValidGroup } = require("../lib/clauseGroups");
const { CLAUSE_TEMPLATES } = require("../lib/clauseTemplates");
const { buildVariableContext, substituteVariables } = require("../lib/clauseVariables");
const { orderAndLabelClauses } = require("../lib/leaseClauseOrdering");

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

const leaseInclude = {
  leaseTenants: { include: { tenant: true } },
  leaseClauses: true,
  property: { include: { entity: true } },
};

const CLAUSE_REQUIRED_FIELDS = ["title", "bodyText", "group"];
const CLAUSE_ASSIGNABLE_FIELDS = ["title", "bodyText", "group", "order"];

function pickClauseFields(body) {
  return pickFields(body, CLAUSE_ASSIGNABLE_FIELDS);
}

function sanitizeFileName(fileName) {
  return fileName.replace(/[^a-zA-Z0-9.\-_]/g, "_");
}

// Compute-on-read: orders/groups/numbers the lease's clauses (see
// leaseClauseOrdering.js) and resolves each clause's {{variables}} against
// the lease's own linked Property/Entity/Tenant data — the same ordering and
// substitution the generated PDF uses, so on-screen display can never drift
// from what generate-document actually produces.
function withComputedLeaseFields(lease) {
  const tenants = (lease.leaseTenants || []).map((lt) => ({
    firstName: lt.tenant.firstName,
    lastName: lt.tenant.lastName,
  }));
  const context = buildVariableContext({ lease, property: lease.property, entity: lease.property?.entity, tenants });
  const leaseClauses = orderAndLabelClauses(lease.leaseClauses || []).map((clause) => ({
    ...clause,
    resolvedBodyText: substituteVariables(clause.bodyText, context),
  }));
  return { ...lease, leaseClauses };
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
      include: leaseInclude,
    });

    res.status(201).json(withComputedLeaseFields(lease));
  });

  router.get("/", async (req, res) => {
    const { propertyId } = req.query;

    const leases = await prisma.lease.findMany({
      where: {
        userId: req.currentUser.id,
        ...(propertyId ? { propertyId } : {}),
      },
      include: leaseInclude,
      orderBy: { createdAt: "desc" },
    });

    res.json(leases.map(withComputedLeaseFields));
  });

  router.get("/:id", async (req, res) => {
    const lease = await prisma.lease.findUnique({
      where: { id: req.params.id },
      include: leaseInclude,
    });

    if (!lease || lease.userId !== req.currentUser.id) {
      return res.status(404).json({ error: "Lease not found" });
    }

    res.json(withComputedLeaseFields(lease));
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
      include: leaseInclude,
    });

    res.json(withComputedLeaseFields(lease));
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
      include: leaseInclude,
    });

    res.status(201).json(withComputedLeaseFields(updatedLease));
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
      include: leaseInclude,
    });

    res.json(withComputedLeaseFields(updatedLease));
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

  // Attach a clause to this lease from one of three sources — the
  // landlord's own library (`clauseId`), the provided/locked starter set
  // (`templateId`), or a custom one-off clause for this lease only (never
  // touches the library). All three snapshot the fields onto a fresh
  // LeaseClause rather than referencing the source live, so editing the
  // library — or us shipping a change to the provided set later — never
  // rewrites what a past, possibly signed, lease says.
  router.post("/:id/clauses", async (req, res) => {
    const lease = await prisma.lease.findUnique({ where: { id: req.params.id } });
    if (!lease || lease.userId !== req.currentUser.id) {
      return res.status(404).json({ error: "Lease not found" });
    }

    let snapshot;
    if (req.body.clauseId) {
      const clause = await prisma.clause.findUnique({ where: { id: req.body.clauseId } });
      if (!clause || clause.userId !== req.currentUser.id) {
        return res.status(400).json({ error: `Clause ${req.body.clauseId} not found` });
      }
      snapshot = {
        sourceClauseId: clause.id,
        title: clause.title,
        bodyText: clause.bodyText,
        group: clause.group,
      };
    } else if (req.body.templateId) {
      const template = CLAUSE_TEMPLATES.find((t) => t.id === req.body.templateId);
      if (!template) {
        return res.status(400).json({ error: `Template ${req.body.templateId} not found` });
      }
      snapshot = {
        sourceTemplateId: template.id,
        title: template.title,
        bodyText: template.bodyText,
        group: template.group,
      };
    } else {
      const missing = CLAUSE_REQUIRED_FIELDS.filter((f) => !req.body[f]);
      if (missing.length > 0) {
        return res.status(400).json({ error: `Missing required field(s): ${missing.join(", ")}` });
      }
      if (!isValidGroup(req.body.group)) {
        return res.status(400).json({ error: `Invalid group: ${req.body.group}` });
      }
      snapshot = pickClauseFields(req.body);
    }

    const { _max } = await prisma.leaseClause.aggregate({
      where: { leaseId: lease.id },
      _max: { order: true },
    });

    await prisma.leaseClause.create({
      data: { leaseId: lease.id, order: (_max.order ?? 0) + 1, ...snapshot },
    });

    const updatedLease = await prisma.lease.findUnique({
      where: { id: lease.id },
      include: leaseInclude,
    });

    res.status(201).json(withComputedLeaseFields(updatedLease));
  });

  router.put("/:id/clauses/:leaseClauseId", async (req, res) => {
    const lease = await prisma.lease.findUnique({ where: { id: req.params.id } });
    if (!lease || lease.userId !== req.currentUser.id) {
      return res.status(404).json({ error: "Lease not found" });
    }

    const leaseClause = await prisma.leaseClause.findUnique({ where: { id: req.params.leaseClauseId } });
    if (!leaseClause || leaseClause.leaseId !== lease.id) {
      return res.status(404).json({ error: "Clause not found on this lease" });
    }
    if (req.body.group !== undefined && !isValidGroup(req.body.group)) {
      return res.status(400).json({ error: `Invalid group: ${req.body.group}` });
    }

    await prisma.leaseClause.update({
      where: { id: leaseClause.id },
      data: pickClauseFields(req.body),
    });

    const updatedLease = await prisma.lease.findUnique({
      where: { id: lease.id },
      include: leaseInclude,
    });

    res.json(withComputedLeaseFields(updatedLease));
  });

  router.delete("/:id/clauses/:leaseClauseId", async (req, res) => {
    const lease = await prisma.lease.findUnique({ where: { id: req.params.id } });
    if (!lease || lease.userId !== req.currentUser.id) {
      return res.status(404).json({ error: "Lease not found" });
    }

    const leaseClause = await prisma.leaseClause.findUnique({ where: { id: req.params.leaseClauseId } });
    if (!leaseClause || leaseClause.leaseId !== lease.id) {
      return res.status(404).json({ error: "Clause not found on this lease" });
    }

    await prisma.leaseClause.delete({ where: { id: leaseClause.id } });

    res.status(204).send();
  });

  // Assembles the lease's key terms + ordered clause snapshots into a real
  // PDF and uploads it directly (not a presigned client PUT — the backend
  // generates the bytes itself), replacing any existing document the same
  // way document-confirm does. The result then shows up in the same
  // Document section as an uploaded PDF, downloaded through the same
  // presigned-GET flow.
  router.post("/:id/generate-document", async (req, res) => {
    const lease = await prisma.lease.findUnique({
      where: { id: req.params.id },
      include: leaseInclude,
    });
    if (!lease || lease.userId !== req.currentUser.id) {
      return res.status(404).json({ error: "Lease not found" });
    }

    const property = lease.property;
    const entity = property.entity;

    const tenants = lease.leaseTenants.map((lt) => ({
      firstName: lt.tenant.firstName,
      lastName: lt.tenant.lastName,
      role: lt.role,
    }));

    const context = buildVariableContext({ lease, property, entity, tenants });
    const clauses = orderAndLabelClauses(lease.leaseClauses).map((clause) => ({
      ...clause,
      resolvedBodyText: substituteVariables(clause.bodyText, context),
    }));

    const pdfBuffer = await buildLeasePdf({
      lease,
      property,
      entity,
      tenants,
      clauses,
    });

    const key = `leases/${lease.id}/generated-${Date.now()}.pdf`;

    if (lease.documentKey) {
      await r2.deleteObject(lease.documentKey);
    }
    await r2.putObject(key, pdfBuffer, "application/pdf");

    const updatedLease = await prisma.lease.update({
      where: { id: lease.id },
      data: { documentKey: key },
      include: leaseInclude,
    });

    res.json(withComputedLeaseFields(updatedLease));
  });

  return router;
}

module.exports = createLeasesRoutes;
