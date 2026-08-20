export const INCOME_CATEGORIES = ["RENT", "LATE_FEE", "PET_RENT", "DEPOSIT", "OTHER"];

export const EXPENSE_CATEGORIES = [
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

export function categoryLabel(value) {
  return value
    .toLowerCase()
    .split("_")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}
