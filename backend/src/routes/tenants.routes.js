const express = require("express");
const prisma = require("../lib/prisma");
const { pickFields } = require("../lib/pickFields");

const REQUIRED_FIELDS = ["name", "propertyId"];

const ASSIGNABLE_FIELDS = [
  "name",
  "phone",
  "email",
  "dateOfBirth",
  "applicationStatus",
  "idVerified",
  "creditCheckStatus",
  "creditCheckDate",
  "employer",
  "employmentStatus",
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

const DATE_FIELDS = ["dateOfBirth", "creditCheckDate", "rentersInsuranceExpirationDate"];

const APPLICATION_STATUSES = ["PENDING", "APPROVED", "REJECTED"];

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
  const tenant = await prisma.tenant.findUnique({
    where: { id: req.params.id },
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

  const existing = await prisma.tenant.findUnique({
    where: { id: req.params.id },
  });
  if (!existing || existing.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Tenant not found" });
  }

  const tenant = await prisma.tenant.update({
    where: { id: req.params.id },
    data: pickAssignableFields(req.body),
  });

  res.json(tenant);
});

router.delete("/:id", async (req, res) => {
  const existing = await prisma.tenant.findUnique({
    where: { id: req.params.id },
  });
  if (!existing || existing.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Tenant not found" });
  }

  await prisma.tenant.delete({ where: { id: req.params.id } });

  res.status(204).send();
});

module.exports = router;
