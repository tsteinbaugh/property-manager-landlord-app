const express = require("express");
const crypto = require("crypto");
const prisma = require("../lib/prisma");
const { pickFields } = require("../lib/pickFields");
const defaultR2 = require("../lib/r2");

const REQUIRED_FIELDS = ["propertyId", "category", "amount", "date"];

const ASSIGNABLE_FIELDS = ["category", "amount", "date", "method", "notes"];

const DATE_FIELDS = ["date"];

const INCOME_CATEGORIES = ["RENT", "LATE_FEE", "PET_RENT", "DEPOSIT", "OTHER"];
const ALLOWED_DOCUMENT_TYPES = ["application/pdf", "image/jpeg", "image/png"];

function pickAssignableFields(body) {
  return pickFields(body, ASSIGNABLE_FIELDS, DATE_FIELDS);
}

function validateIncomeBody(body) {
  const missing = REQUIRED_FIELDS.filter((field) => !body[field]);
  if (missing.length > 0) {
    return `Missing required field(s): ${missing.join(", ")}`;
  }
  if (body.category && !INCOME_CATEGORIES.includes(body.category)) {
    return `Invalid category. Must be one of: ${INCOME_CATEGORIES.join(", ")}`;
  }
  return null;
}

function sanitizeFileName(fileName) {
  return fileName.replace(/[^a-zA-Z0-9.\-_]/g, "_");
}

async function findOwnedIncome(id, userId) {
  const income = await prisma.income.findUnique({ where: { id } });
  if (!income || income.userId !== userId) return null;
  return income;
}

function createIncomeRoutes({ r2 = defaultR2 } = {}) {
  const router = express.Router();

  router.post("/", async (req, res) => {
    const validationError = validateIncomeBody(req.body);
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    const { propertyId, leaseId } = req.body;

    const property = await prisma.property.findUnique({ where: { id: propertyId } });
    if (!property || property.userId !== req.currentUser.id) {
      return res.status(400).json({ error: `Property ${propertyId} not found` });
    }

    if (leaseId) {
      const lease = await prisma.lease.findUnique({ where: { id: leaseId } });
      if (!lease || lease.userId !== req.currentUser.id || lease.propertyId !== propertyId) {
        return res.status(400).json({ error: `Lease ${leaseId} not found` });
      }
    }

    const income = await prisma.income.create({
      data: {
        userId: req.currentUser.id,
        entityId: property.entityId,
        propertyId,
        leaseId: leaseId || null,
        ...pickAssignableFields(req.body),
      },
    });

    res.status(201).json(income);
  });

  router.get("/", async (req, res) => {
    const { propertyId, leaseId } = req.query;

    const incomes = await prisma.income.findMany({
      where: {
        userId: req.currentUser.id,
        ...(propertyId ? { propertyId } : {}),
        ...(leaseId ? { leaseId } : {}),
      },
      include: { allocations: true },
      orderBy: { date: "desc" },
    });

    res.json(incomes);
  });

  router.get("/:id", async (req, res) => {
    const income = await findOwnedIncome(req.params.id, req.currentUser.id);
    if (!income) {
      return res.status(404).json({ error: "Income not found" });
    }

    res.json(income);
  });

  router.put("/:id", async (req, res) => {
    if (req.body.category && !INCOME_CATEGORIES.includes(req.body.category)) {
      return res.status(400).json({
        error: `Invalid category. Must be one of: ${INCOME_CATEGORIES.join(", ")}`,
      });
    }

    const existing = await findOwnedIncome(req.params.id, req.currentUser.id);
    if (!existing) {
      return res.status(404).json({ error: "Income not found" });
    }

    const income = await prisma.income.update({
      where: { id: req.params.id },
      data: pickAssignableFields(req.body),
    });

    res.json(income);
  });

  router.delete("/:id", async (req, res) => {
    const existing = await findOwnedIncome(req.params.id, req.currentUser.id);
    if (!existing) {
      return res.status(404).json({ error: "Income not found" });
    }

    await prisma.income.delete({ where: { id: req.params.id } });

    res.status(204).send();
  });

  // Receipts / proof of payment — same presigned-URL R2 pattern as lease and
  // tenant documents, just no categories (a flat list per record).
  router.get("/:id/documents", async (req, res) => {
    const income = await findOwnedIncome(req.params.id, req.currentUser.id);
    if (!income) {
      return res.status(404).json({ error: "Income not found" });
    }

    const documents = await prisma.incomeDocument.findMany({
      where: { incomeId: income.id },
      orderBy: { createdAt: "desc" },
    });

    res.json(documents);
  });

  router.post("/:id/documents/upload-url", async (req, res) => {
    const { fileName, contentType } = req.body;

    if (!fileName || !contentType) {
      return res.status(400).json({ error: "Missing required field(s): fileName, contentType" });
    }
    if (!ALLOWED_DOCUMENT_TYPES.includes(contentType)) {
      return res.status(400).json({ error: `contentType must be one of: ${ALLOWED_DOCUMENT_TYPES.join(", ")}` });
    }

    const income = await findOwnedIncome(req.params.id, req.currentUser.id);
    if (!income) {
      return res.status(404).json({ error: "Income not found" });
    }

    const key = `income/${income.id}/${crypto.randomUUID()}-${sanitizeFileName(fileName)}`;
    const uploadUrl = await r2.getUploadUrl(key, contentType);

    res.json({ uploadUrl, key });
  });

  router.post("/:id/documents/confirm", async (req, res) => {
    const { key, fileName } = req.body;

    if (!key || !fileName) {
      return res.status(400).json({ error: "Missing required field(s): key, fileName" });
    }

    const income = await findOwnedIncome(req.params.id, req.currentUser.id);
    if (!income) {
      return res.status(404).json({ error: "Income not found" });
    }
    if (!key.startsWith(`income/${income.id}/`)) {
      return res.status(400).json({ error: "Key does not belong to this income record" });
    }

    const document = await prisma.incomeDocument.create({
      data: { incomeId: income.id, fileName, documentKey: key },
    });

    res.status(201).json(document);
  });

  router.get("/:id/documents/:documentId/download-url", async (req, res) => {
    const income = await findOwnedIncome(req.params.id, req.currentUser.id);
    if (!income) {
      return res.status(404).json({ error: "Income not found" });
    }

    const document = await prisma.incomeDocument.findUnique({ where: { id: req.params.documentId } });
    if (!document || document.incomeId !== income.id) {
      return res.status(404).json({ error: "Document not found" });
    }

    const downloadUrl = await r2.getDownloadUrl(document.documentKey);

    res.json({ downloadUrl });
  });

  router.delete("/:id/documents/:documentId", async (req, res) => {
    const income = await findOwnedIncome(req.params.id, req.currentUser.id);
    if (!income) {
      return res.status(404).json({ error: "Income not found" });
    }

    const document = await prisma.incomeDocument.findUnique({ where: { id: req.params.documentId } });
    if (!document || document.incomeId !== income.id) {
      return res.status(404).json({ error: "Document not found" });
    }

    await r2.deleteObject(document.documentKey);
    await prisma.incomeDocument.delete({ where: { id: document.id } });

    res.status(204).send();
  });

  return router;
}

module.exports = createIncomeRoutes;
