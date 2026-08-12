const express = require("express");
const prisma = require("../lib/prisma");
const { pickFields } = require("../lib/pickFields");

const ASSIGNABLE_FIELDS = [
  "name",
  "phone",
  "email",
  "dateOfBirth",
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

function pickAssignableFields(body) {
  return pickFields(body, ASSIGNABLE_FIELDS, DATE_FIELDS);
}

const router = express.Router();

router.post("/", async (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ error: "Missing required field: name" });
  }

  const tenant = await prisma.tenant.create({
    data: {
      userId: req.currentUser.id,
      ...pickAssignableFields(req.body),
    },
  });

  res.status(201).json(tenant);
});

router.get("/", async (req, res) => {
  const tenants = await prisma.tenant.findMany({
    where: { userId: req.currentUser.id },
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
