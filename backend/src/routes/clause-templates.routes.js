const express = require("express");
const prisma = require("../lib/prisma");
const { CLAUSE_TEMPLATES } = require("../lib/clauseTemplates");
const { choiceGroupMembers } = require("../lib/clauseChoiceGroups");
const { applicabilityNote, APPLICABILITY_RULE_IDS } = require("../lib/clauseApplicability");

// A clause "Add my default clauses" includes on its own, which the landlord
// can't untick: one the law always requires, or one with an applicability rule
// (included whenever the rule says the property needs it).
function isAutoDefault(template) {
  return Boolean(template.alwaysDefault) || APPLICABILITY_RULE_IDS.includes(template.id);
}

const router = express.Router();

router.get("/", async (req, res) => {
  const defaults = await prisma.defaultClauseTemplate.findMany({
    where: { userId: req.currentUser.id },
  });
  const defaultIds = new Set(defaults.map((d) => d.templateId));

  res.json(
    CLAUSE_TEMPLATES.map((template) => ({
      ...template,
      autoDefault: isAutoDefault(template),
      autoDefaultNote: template.alwaysDefault
        ? "Required by law, so it's always included by default."
        : applicabilityNote(template.id),
      isDefault: isAutoDefault(template) || defaultIds.has(template.id),
    })),
  );
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

  // Only one member of a choice group can be a default — marking one clears
  // the others, so "Add my default clauses" never has to pick between them.
  if (template.choiceGroup) {
    const siblingIds = choiceGroupMembers(template.choiceGroup)
      .map((t) => t.id)
      .filter((id) => id !== template.id);
    await prisma.defaultClauseTemplate.deleteMany({
      where: { userId: req.currentUser.id, templateId: { in: siblingIds } },
    });
  }

  await prisma.defaultClauseTemplate.upsert({
    where: { userId_templateId: { userId: req.currentUser.id, templateId: template.id } },
    create: { userId: req.currentUser.id, templateId: template.id },
    update: {},
  });

  res.status(201).json({ templateId: template.id, isDefault: true });
});

router.delete("/:templateId/default", async (req, res) => {
  const template = CLAUSE_TEMPLATES.find((t) => t.id === req.params.templateId);
  if (template && isAutoDefault(template)) {
    return res.status(409).json({ error: "This clause is required by law, so it's included by default automatically." });
  }
  await prisma.defaultClauseTemplate.deleteMany({
    where: { userId: req.currentUser.id, templateId: req.params.templateId },
  });

  res.status(204).send();
});

module.exports = router;
