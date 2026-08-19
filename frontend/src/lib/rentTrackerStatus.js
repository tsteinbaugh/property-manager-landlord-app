// Presentation only — the actual status computation (worst-period-wins
// rollup, per-period DUE/PARTIAL/OVERDUE/etc.) lives server-side in
// backend/src/lib/rentTracker.js so the property list, Dashboard, and the
// Rent Tracker table itself can never disagree about what a status means.

export const PORTFOLIO_STATUS = {
  OVERDUE: { label: "Overdue", className: "bg-red-100 text-red-800" },
  PARTIAL: { label: "Partial payment", className: "bg-amber-100 text-amber-800" },
  DUE: { label: "Due", className: "bg-sky-100 text-sky-700" },
  PAID: { label: "Paid up", className: "bg-emerald-100 text-emerald-800" },
  NONE: { label: "No active lease", className: "bg-stone-100 text-stone-500" },
};

export const PERIOD_STATUS = {
  UPCOMING: { label: "Upcoming", className: "bg-stone-100 text-stone-500" },
  DUE: { label: "Due", className: "bg-sky-100 text-sky-700" },
  PARTIAL: { label: "Partial", className: "bg-amber-100 text-amber-800" },
  OVERDUE: { label: "Overdue", className: "bg-red-100 text-red-800" },
  PAID: { label: "Paid", className: "bg-emerald-100 text-emerald-800" },
  PAID_LATE: { label: "Paid (late)", className: "bg-amber-100 text-amber-800" },
};

export function monthLabel(isoDate) {
  return new Date(isoDate).toLocaleDateString(undefined, { year: "numeric", month: "long", timeZone: "UTC" });
}
