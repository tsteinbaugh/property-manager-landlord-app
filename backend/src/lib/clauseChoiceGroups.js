// "Include exactly one of these" support for provided clause templates.
//
// A few templates are mutually exclusive alternatives — attaching both would
// make a lease contradict itself. California's pass (state #9) introduced the
// first two such sets, carried in `lease-clauses.csv`'s `choice_group` /
// `is_default` columns and compiled onto the template as `choiceGroup` /
// `choiceGroupDefault`:
//   - `ca-tpa-coverage`: `tpa-notice-ca` (default) vs `tpa-exemption-notice-ca`
//     — one tells the tenant the Tenant Protection Act covers them, the other
//     that it doesn't.
//   - `ca-sublet-consent`: `no-sublet-assign-ca` (default, reasonable consent)
//     vs `no-sublet-assign-discretion-ca` (sole discretion).
// See `lease-clause-decision-log-CA.md` §§5.32–5.33, 5.40.
//
// Unlike the for-cause-eviction variants (forCauseEvictionVariant.js), which
// only filter the automated paths, this IS enforced on manual attach too:
// that pair is two legitimate options, whereas two members of one choice
// group on the same lease is always a self-contradictory document.
//
// Only provided templates carry a choice group. A landlord's personal copy of
// one has no link back to its template, so it isn't policed here.

const { CLAUSE_TEMPLATES } = require("./clauseTemplates");

function templateById(templateId) {
  return CLAUSE_TEMPLATES.find((t) => t.id === templateId) || null;
}

function choiceGroupOf(templateId) {
  return templateById(templateId)?.choiceGroup || null;
}

function choiceGroupMembers(choiceGroup) {
  return CLAUSE_TEMPLATES.filter((t) => t.choiceGroup === choiceGroup);
}

// Returns the already-attached template that `templateId` would conflict
// with, or null. `attachedTemplateIds` is every sourceTemplateId on the lease.
function findChoiceGroupConflict(templateId, attachedTemplateIds) {
  const group = choiceGroupOf(templateId);
  if (!group) return null;
  for (const attachedId of attachedTemplateIds) {
    if (attachedId !== templateId && choiceGroupOf(attachedId) === group) {
      return templateById(attachedId);
    }
  }
  return null;
}

module.exports = { choiceGroupOf, choiceGroupMembers, findChoiceGroupConflict };
