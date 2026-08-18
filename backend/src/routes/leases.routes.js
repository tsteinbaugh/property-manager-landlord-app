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
  "tenantInsuranceMinimumCoverage",
  "renewalRentIncreaseCap",
  "notes",
  "status",
];

const DATE_FIELDS = ["startDate", "endDate"];

const LEASE_TENANT_ROLES = ["PRIMARY", "CO_TENANT", "GUARANTOR"];

const ATTACHMENT_TYPES = ["application/pdf", "image/jpeg", "image/png"];

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
  leaseTenants: { include: { tenant: { include: { occupants: true } } } },
  leaseClauses: true,
  property: { include: { entity: true, appliances: { where: { active: true } } } },
  deposits: { where: { type: "PET" } },
  attachments: { orderBy: { createdAt: "asc" } },
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
  const occupants = (lease.leaseTenants || []).flatMap((lt) => lt.tenant.occupants || []);
  const petDeposit = (lease.deposits || []).find((d) => d.type === "PET");
  const context = buildVariableContext({
    lease,
    property: lease.property,
    entity: lease.property?.entity,
    tenants,
    occupants,
    appliances: lease.property?.appliances || [],
    petDepositAmount: petDeposit?.amountHeld ?? null,
  });
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

  // Supporting documents attached to the lease beyond the generated lease PDF itself — HOA
  // rules, a rules addendum, etc. Multiple files, free-text category (unlike TenantDocument's
  // fixed category enum, since these are open-ended/landlord-defined), same presigned-URL R2
  // pattern as every other document endpoint in this app.
  router.get("/:id/attachments", async (req, res) => {
    const lease = await prisma.lease.findUnique({ where: { id: req.params.id } });
    if (!lease || lease.userId !== req.currentUser.id) {
      return res.status(404).json({ error: "Lease not found" });
    }

    // Ascending — Taylor wants these to read as "appended in the order they were uploaded"
    // (unlike TenantDocument's newest-first listing, which is a browsing convenience, not a
    // sequence that matters).
    const attachments = await prisma.leaseAttachment.findMany({
      where: { leaseId: lease.id },
      orderBy: { createdAt: "asc" },
    });

    res.json(attachments);
  });

  router.post("/:id/attachments/upload-url", async (req, res) => {
    const { fileName, contentType, category } = req.body;

    if (!fileName || !contentType || !category) {
      return res.status(400).json({ error: "Missing required field(s): fileName, contentType, category" });
    }
    if (!ATTACHMENT_TYPES.includes(contentType)) {
      return res.status(400).json({ error: `contentType must be one of: ${ATTACHMENT_TYPES.join(", ")}` });
    }

    const lease = await prisma.lease.findUnique({ where: { id: req.params.id } });
    if (!lease || lease.userId !== req.currentUser.id) {
      return res.status(404).json({ error: "Lease not found" });
    }

    const key = `leases/${lease.id}/attachments/${crypto.randomUUID()}-${sanitizeFileName(fileName)}`;
    const uploadUrl = await r2.getUploadUrl(key, contentType);

    res.json({ uploadUrl, key });
  });

  router.post("/:id/attachments/confirm", async (req, res) => {
    const { key, category, fileName } = req.body;

    if (!key || !category || !fileName) {
      return res.status(400).json({ error: "Missing required field(s): key, category, fileName" });
    }

    const lease = await prisma.lease.findUnique({ where: { id: req.params.id } });
    if (!lease || lease.userId !== req.currentUser.id) {
      return res.status(404).json({ error: "Lease not found" });
    }
    if (!key.startsWith(`leases/${lease.id}/attachments/`)) {
      return res.status(400).json({ error: "Key does not belong to this lease" });
    }

    const attachment = await prisma.leaseAttachment.create({
      data: { leaseId: lease.id, category, fileName, documentKey: key },
    });

    res.status(201).json(attachment);
  });

  router.get("/:id/attachments/:attachmentId/download-url", async (req, res) => {
    const lease = await prisma.lease.findUnique({ where: { id: req.params.id } });
    if (!lease || lease.userId !== req.currentUser.id) {
      return res.status(404).json({ error: "Lease not found" });
    }

    const attachment = await prisma.leaseAttachment.findUnique({ where: { id: req.params.attachmentId } });
    if (!attachment || attachment.leaseId !== lease.id) {
      return res.status(404).json({ error: "Attachment not found" });
    }

    const downloadUrl = await r2.getDownloadUrl(attachment.documentKey);

    res.json({ downloadUrl });
  });

  router.delete("/:id/attachments/:attachmentId", async (req, res) => {
    const lease = await prisma.lease.findUnique({ where: { id: req.params.id } });
    if (!lease || lease.userId !== req.currentUser.id) {
      return res.status(404).json({ error: "Lease not found" });
    }

    const attachment = await prisma.leaseAttachment.findUnique({ where: { id: req.params.attachmentId } });
    if (!attachment || attachment.leaseId !== lease.id) {
      return res.status(404).json({ error: "Attachment not found" });
    }

    await r2.deleteObject(attachment.documentKey);
    await prisma.leaseAttachment.delete({ where: { id: attachment.id } });

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

  // Attaches every clause the landlord has marked "include by default" —
  // their own Clause rows with isDefault: true, plus any provided templates
  // they've toggled via DefaultClauseTemplate — in one action, instead of
  // attaching their usual set by hand on every new lease. Already-attached
  // defaults (by sourceClauseId/sourceTemplateId) are skipped rather than
  // duplicated, so this is safe to click more than once.
  router.post("/:id/clauses/add-defaults", async (req, res) => {
    const lease = await prisma.lease.findUnique({ where: { id: req.params.id }, include: leaseInclude });
    if (!lease || lease.userId !== req.currentUser.id) {
      return res.status(404).json({ error: "Lease not found" });
    }

    const alreadyAttachedClauseIds = new Set(lease.leaseClauses.map((lc) => lc.sourceClauseId).filter(Boolean));
    const alreadyAttachedTemplateIds = new Set(lease.leaseClauses.map((lc) => lc.sourceTemplateId).filter(Boolean));

    const [defaultClauses, defaultTemplateLinks] = await Promise.all([
      prisma.clause.findMany({ where: { userId: req.currentUser.id, isDefault: true } }),
      prisma.defaultClauseTemplate.findMany({ where: { userId: req.currentUser.id } }),
    ]);

    // A default only applies automatically if it's universal (states: []) or its states list
    // includes this lease's property state — a Colorado-tagged default shouldn't get silently
    // attached to a lease for a property in another state just because the landlord marked it
    // as a default.
    const propertyState = lease.property?.state ?? null;
    const appliesToThisLease = (states) => !states || states.length === 0 || states.includes(propertyState);

    const snapshots = [
      ...defaultClauses
        .filter((c) => !alreadyAttachedClauseIds.has(c.id) && appliesToThisLease(c.states))
        .map((c) => ({ sourceClauseId: c.id, title: c.title, bodyText: c.bodyText, group: c.group })),
      ...defaultTemplateLinks
        .map((link) => CLAUSE_TEMPLATES.find((t) => t.id === link.templateId))
        .filter((t) => t && !alreadyAttachedTemplateIds.has(t.id) && appliesToThisLease(t.states))
        .map((t) => ({ sourceTemplateId: t.id, title: t.title, bodyText: t.bodyText, group: t.group })),
    ];

    if (snapshots.length > 0) {
      const { _max } = await prisma.leaseClause.aggregate({
        where: { leaseId: lease.id },
        _max: { order: true },
      });
      let nextOrder = (_max.order ?? 0) + 1;

      await prisma.leaseClause.createMany({
        data: snapshots.map((snapshot) => ({ leaseId: lease.id, order: nextOrder++, ...snapshot })),
      });
    }

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
    const occupants = lease.leaseTenants.flatMap((lt) => lt.tenant.occupants || []);
    const petDeposit = (lease.deposits || []).find((d) => d.type === "PET");

    const context = buildVariableContext({
      lease,
      property,
      entity,
      tenants,
      occupants,
      appliances: property?.appliances || [],
      petDepositAmount: petDeposit?.amountHeld ?? null,
    });
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
