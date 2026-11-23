const express = require("express");
const prisma = require("../lib/prisma");
const { CLAUSE_TEMPLATES } = require("../lib/clauseTemplates");
const { choiceGroupMembers } = require("../lib/clauseChoiceGroups");
const { applicabilityNote, APPLICABILITY_RULE_IDS } = require("../lib/clauseApplicability");

const hasRule = (template) => APPLICABILITY_RULE_IDS.includes(template.id);

// A clause "Add my default clauses" includes on its own, which the landlord
// can't untick: one the law always requires, or a Required clause with an
// applicability rule (included whenever the rule says the lease needs it).
function isAutoDefault(template) {
  return Boolean(template.alwaysDefault) || (hasRule(template) && template.tag === "REQUIRED");
}

// A clause that is on by default but can be unticked: a Legal duty that
// always applies, or one with an applicability rule (Taylor, 2026-11-22).
function isOptOutDefault(template) {
  return Boolean(template.defaultOn) || (hasRule(template) && template.tag === "LEGAL_DUTY");
}

const router = express.Router();

// Whether this landlord has the template as a default: a required clause
// always; a legal duty (`defaultOn`) unless the landlord unticked it; any other
// clause only if the landlord ticked it.
function isDefaultFor(template, rowsByTemplateId) {
  if (isAutoDefault(template)) return true;
  const row = rowsByTemplateId.get(template.id);
  if (isOptOutDefault(template)) return !row?.excluded;
  return Boolean(row && !row.excluded);
}

const LEGAL_DUTY_NOTE =
  "The law requires you to give the tenant this information. It's included by default; untick it only if you give the tenant this another way.";
const CONDITIONAL_LEGAL_DUTY_NOTE =
  "When it applies, the law requires you to give the tenant this information. This clause is one way to do it.";

function defaultNote(template) {
  if (template.alwaysDefault) return "Required by law, so it's always included by default.";
  const when = applicabilityNote(template.id);
  if (when && template.tag === "REQUIRED") return `Required by law. It applies ${when}, so it's added automatically then.`;
  if (when)
    return `The law requires you to give the tenant this information. It applies ${when}, so it's added automatically then; untick it only if you give the tenant this another way.`;
  if (template.defaultOn) return LEGAL_DUTY_NOTE;
  if (template.tag === "LEGAL_DUTY") return CONDITIONAL_LEGAL_DUTY_NOTE;
  return null;
}

router.get("/", async (req, res) => {
  const defaults = await prisma.defaultClauseTemplate.findMany({
    where: { userId: req.currentUser.id },
  });
  const rowsByTemplateId = new Map(defaults.map((d) => [d.templateId, d]));

  res.json(
    CLAUSE_TEMPLATES.map((template) => ({
      ...template,
      autoDefault: isAutoDefault(template),
      autoDefaultNote: defaultNote(template),
      isDefault: isDefaultFor(template, rowsByTemplateId),
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
    update: { excluded: false },
  });

  res.status(201).json({ templateId: template.id, isDefault: true });
});

router.delete("/:templateId/default", async (req, res) => {
  const template = CLAUSE_TEMPLATES.find((t) => t.id === req.params.templateId);
  if (template && isAutoDefault(template)) {
    return res.status(409).json({ error: "This clause is required by law, so it's included by default automatically." });
  }
  // Unticking a clause that is on by default records the opt-out; any other
  // clause just loses its default row.
  if (template && isOptOutDefault(template)) {
    await prisma.defaultClauseTemplate.upsert({
      where: { userId_templateId: { userId: req.currentUser.id, templateId: template.id } },
      create: { userId: req.currentUser.id, templateId: template.id, excluded: true },
      update: { excluded: true },
    });
    return res.status(204).send();
  }
  await prisma.defaultClauseTemplate.deleteMany({
    where: { userId: req.currentUser.id, templateId: req.params.templateId },
  });

  res.status(204).send();
});

module.exports = router;
