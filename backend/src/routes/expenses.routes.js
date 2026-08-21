const express = require("express");
const crypto = require("crypto");
const prisma = require("../lib/prisma");
const { pickFields } = require("../lib/pickFields");
const defaultR2 = require("../lib/r2");

const REQUIRED_FIELDS = ["propertyId", "category", "amount", "date"];

const ASSIGNABLE_FIELDS = ["category", "amount", "date", "payee", "method", "paid", "notes"];

const DATE_FIELDS = ["date"];

const EXPENSE_CATEGORIES = [
  "MORTGAGE",
  "UTILITIES",
  "REPAIRS",
  "MAINTENANCE",
  "LANDSCAPING",
  "INSURANCE_PREMIUM",
  "TAX",
  "LEGAL",
  "OTHER",
];
const ALLOWED_DOCUMENT_TYPES = ["application/pdf", "image/jpeg", "image/png"];

function pickAssignableFields(body) {
  return pickFields(body, ASSIGNABLE_FIELDS, DATE_FIELDS);
}

function validateExpenseBody(body) {
  const missing = REQUIRED_FIELDS.filter((field) => !body[field]);
  if (missing.length > 0) {
    return `Missing required field(s): ${missing.join(", ")}`;
  }
  if (body.category && !EXPENSE_CATEGORIES.includes(body.category)) {
    return `Invalid category. Must be one of: ${EXPENSE_CATEGORIES.join(", ")}`;
  }
  return null;
}

function sanitizeFileName(fileName) {
  return fileName.replace(/[^a-zA-Z0-9.\-_]/g, "_");
}

async function findOwnedExpense(id, userId) {
  const expense = await prisma.expense.findUnique({ where: { id } });
  if (!expense || expense.userId !== userId) return null;
  return expense;
}

function createExpensesRoutes({ r2 = defaultR2 } = {}) {
  const router = express.Router();

  router.post("/", async (req, res) => {
    const validationError = validateExpenseBody(req.body);
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    const { propertyId } = req.body;

    const property = await prisma.property.findUnique({ where: { id: propertyId } });
    if (!property || property.userId !== req.currentUser.id) {
      return res.status(400).json({ error: `Property ${propertyId} not found` });
    }

    const expense = await prisma.expense.create({
      data: {
        userId: req.currentUser.id,
        entityId: property.entityId,
        propertyId,
        ...pickAssignableFields(req.body),
      },
    });

    res.status(201).json(expense);
  });

  router.get("/", async (req, res) => {
    const { propertyId, deleted } = req.query;

    // `deleted` — same 3-mode convention as tenants/leases (absent = active, "true" = only
    // deleted, "all" = both).
    const expenses = await prisma.expense.findMany({
      where: {
        userId: req.currentUser.id,
        ...(propertyId ? { propertyId } : {}),
        ...(deleted === "all" ? {} : { deleted: deleted === "true" }),
      },
      orderBy: { date: "desc" },
    });

    res.json(expenses);
  });

  router.get("/:id", async (req, res) => {
    const expense = await findOwnedExpense(req.params.id, req.currentUser.id);
    if (!expense) {
      return res.status(404).json({ error: "Expense not found" });
    }

    res.json(expense);
  });

  router.put("/:id", async (req, res) => {
    if (req.body.category && !EXPENSE_CATEGORIES.includes(req.body.category)) {
      return res.status(400).json({
        error: `Invalid category. Must be one of: ${EXPENSE_CATEGORIES.join(", ")}`,
      });
    }

    const existing = await findOwnedExpense(req.params.id, req.currentUser.id);
    if (!existing) {
      return res.status(404).json({ error: "Expense not found" });
    }

    const expense = await prisma.expense.update({
      where: { id: req.params.id },
      data: pickAssignableFields(req.body),
    });

    res.json(expense);
  });

  router.delete("/:id", async (req, res) => {
    const existing = await findOwnedExpense(req.params.id, req.currentUser.id);
    if (!existing) {
      return res.status(404).json({ error: "Expense not found" });
    }

    // Soft delete — see tenants.routes.js's DELETE handler for the full reasoning.
    await prisma.expense.update({ where: { id: req.params.id }, data: { deleted: true, deletedAt: new Date() } });

    res.status(204).send();
  });

  router.post("/:id/restore", async (req, res) => {
    const existing = await findOwnedExpense(req.params.id, req.currentUser.id);
    if (!existing) {
      return res.status(404).json({ error: "Expense not found" });
    }
    if (!existing.deleted) {
      return res.status(400).json({ error: "Expense is not deleted" });
    }

    const expense = await prisma.expense.update({
      where: { id: req.params.id },
      data: { deleted: false, deletedAt: null },
    });

    res.json(expense);
  });

  // Receipts / proof of payment — same presigned-URL R2 pattern as lease and
  // tenant documents, just no categories (a flat list per record).
  router.get("/:id/documents", async (req, res) => {
    const expense = await findOwnedExpense(req.params.id, req.currentUser.id);
    if (!expense) {
      return res.status(404).json({ error: "Expense not found" });
    }

    const documents = await prisma.expenseDocument.findMany({
      where: { expenseId: expense.id },
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

    const expense = await findOwnedExpense(req.params.id, req.currentUser.id);
    if (!expense) {
      return res.status(404).json({ error: "Expense not found" });
    }

    const key = `expenses/${expense.id}/${crypto.randomUUID()}-${sanitizeFileName(fileName)}`;
    const uploadUrl = await r2.getUploadUrl(key, contentType);

    res.json({ uploadUrl, key });
  });

  router.post("/:id/documents/confirm", async (req, res) => {
    const { key, fileName } = req.body;

    if (!key || !fileName) {
      return res.status(400).json({ error: "Missing required field(s): key, fileName" });
    }

    const expense = await findOwnedExpense(req.params.id, req.currentUser.id);
    if (!expense) {
      return res.status(404).json({ error: "Expense not found" });
    }
    if (!key.startsWith(`expenses/${expense.id}/`)) {
      return res.status(400).json({ error: "Key does not belong to this expense record" });
    }

    const document = await prisma.expenseDocument.create({
      data: { expenseId: expense.id, fileName, documentKey: key },
    });

    res.status(201).json(document);
  });

  router.get("/:id/documents/:documentId/download-url", async (req, res) => {
    const expense = await findOwnedExpense(req.params.id, req.currentUser.id);
    if (!expense) {
      return res.status(404).json({ error: "Expense not found" });
    }

    const document = await prisma.expenseDocument.findUnique({ where: { id: req.params.documentId } });
    if (!document || document.expenseId !== expense.id) {
      return res.status(404).json({ error: "Document not found" });
    }

    const downloadUrl = await r2.getDownloadUrl(document.documentKey);

    res.json({ downloadUrl });
  });

  router.delete("/:id/documents/:documentId", async (req, res) => {
    const expense = await findOwnedExpense(req.params.id, req.currentUser.id);
    if (!expense) {
      return res.status(404).json({ error: "Expense not found" });
    }

    const document = await prisma.expenseDocument.findUnique({ where: { id: req.params.documentId } });
    if (!document || document.expenseId !== expense.id) {
      return res.status(404).json({ error: "Document not found" });
    }

    await r2.deleteObject(document.documentKey);
    await prisma.expenseDocument.delete({ where: { id: document.id } });

    res.status(204).send();
  });

  return router;
}

module.exports = createExpensesRoutes;
