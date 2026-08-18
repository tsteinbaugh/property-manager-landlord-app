// The fixed set of clause groups, in display/numbering order. A plain
// ordered list rather than a Prisma enum — Taylor wants to be able to
// rename/reorder these later without a migration (an enum value rename
// already needed a hand-written one, for ExpenseCategory.LANDSCAPING).
// "Other / Miscellaneous" is a deliberate catch-all, always last, so every
// clause always has a valid home.
const CLAUSE_GROUPS = [
  "Rent & Payment",
  "Security Deposit",
  "Tenant Responsibilities",
  "Landlord Responsibilities",
  "Access & Entry",
  "Default & Termination",
  "Notices & General",
  "Pets",
  "Parking & Storage",
  "Rules & Regulations",
  "Disclosures",
  "Other / Miscellaneous",
];

function isValidGroup(group) {
  return CLAUSE_GROUPS.includes(group);
}

module.exports = { CLAUSE_GROUPS, isValidGroup };
