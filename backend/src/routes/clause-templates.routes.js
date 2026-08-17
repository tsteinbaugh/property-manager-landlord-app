const express = require("express");
const prisma = require("../lib/prisma");
const { CLAUSE_TEMPLATES } = require("../lib/clauseTemplates");

const router = express.Router();

router.get("/", async (req, res) => {
  const defaults = await prisma.defaultClauseTemplate.findMany({
    where: { userId: req.currentUser.id },
  });
  const defaultIds = new Set(defaults.map((d) => d.templateId));

  res.json(CLAUSE_TEMPLATES.map((template) => ({ ...template, isDefault: defaultIds.has(template.id) })));
});

// Marks a provided template as one of this landlord's defaults without
// copying it into their own library — "Add my default clauses" resolves
// this back to the static template at attach time, so the wording can
// never drift from what's shipped.
router.post("/:templateId/default", async (req, res) => {
  const template = CLAUSE_TEMPLATES.find((t) => t.id === req.params.templateId);
  if (!template) {
    return res.status(404).json({ error: "Template not found" });
  }

  await prisma.defaultClauseTemplate.upsert({
    where: { userId_templateId: { userId: req.currentUser.id, templateId: template.id } },
    create: { userId: req.currentUser.id, templateId: template.id },
    update: {},
  });

  res.status(201).json({ templateId: template.id, isDefault: true });
});

router.delete("/:templateId/default", async (req, res) => {
  await prisma.defaultClauseTemplate.deleteMany({
    where: { userId: req.currentUser.id, templateId: req.params.templateId },
  });

  res.status(204).send();
});

module.exports = router;
