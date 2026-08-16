// Shared `include` shape for the 7 Property Specs categories' linked
// maintenance records — used by every category's route so the frontend can
// show read-only maintenance history on a spec item without an extra fetch.
const MAINTENANCE_INCLUDE = {
  maintenanceRequests: {
    select: { id: true, title: true, status: true, reportedDate: true, notes: true },
    orderBy: { reportedDate: "desc" },
  },
  maintenanceSchedules: {
    select: { id: true, title: true, intervalDays: true, lastDoneDate: true, nextDueDate: true },
    orderBy: { createdAt: "desc" },
  },
};

// Flooring/Countertop/Backsplash additionally embed their linked Expense —
// the real ledger entry that replaced their old standalone `cost` field.
const EXPENSE_INCLUDE = {
  expense: {
    select: { id: true, amount: true, date: true, category: true, payee: true },
  },
};

module.exports = { MAINTENANCE_INCLUDE, EXPENSE_INCLUDE };
