const express = require("express");
const prisma = require("../lib/prisma");
const { pickFields } = require("../lib/pickFields");

const REQUIRED_FIELDS = ["name"];

const ASSIGNABLE_FIELDS = ["name", "trade", "phone", "email", "preferred", "notes"];

function pickAssignableFields(body) {
  return pickFields(body, ASSIGNABLE_FIELDS);
}

function validateVendorBody(body) {
  const missing = REQUIRED_FIELDS.filter((field) => !body[field]);
  if (missing.length > 0) {
    return `Missing required field(s): ${missing.join(", ")}`;
  }
  return null;
}

const router = express.Router();

router.post("/", async (req, res) => {
  const validationError = validateVendorBody(req.body);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const vendor = await prisma.vendor.create({
    data: {
      userId: req.currentUser.id,
      ...pickAssignableFields(req.body),
    },
  });

  res.status(201).json(vendor);
});

router.get("/", async (req, res) => {
  const vendors = await prisma.vendor.findMany({
    where: { userId: req.currentUser.id },
    orderBy: { name: "asc" },
  });

  res.json(vendors);
});

router.get("/:id", async (req, res) => {
  const vendor = await prisma.vendor.findUnique({
    where: { id: req.params.id },
  });

  if (!vendor || vendor.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Vendor not found" });
  }

  res.json(vendor);
});

router.put("/:id", async (req, res) => {
  const existing = await prisma.vendor.findUnique({
    where: { id: req.params.id },
  });
  if (!existing || existing.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Vendor not found" });
  }

  const vendor = await prisma.vendor.update({
    where: { id: req.params.id },
    data: pickAssignableFields(req.body),
  });

  res.json(vendor);
});

router.delete("/:id", async (req, res) => {
  const existing = await prisma.vendor.findUnique({
    where: { id: req.params.id },
  });
  if (!existing || existing.userId !== req.currentUser.id) {
    return res.status(404).json({ error: "Vendor not found" });
  }

  await prisma.vendor.delete({ where: { id: req.params.id } });

  res.status(204).send();
});

module.exports = router;
