// Shared severity model for rolling up per-domain status (Rent, Maintenance,
// and any future domain) into one portfolio-card color + flag list on the
// Dashboard. Each domain's own status computation stays server-side
// (backend/src/lib/rentTracker.js's summarizeRentStatus, and the equivalent
// worst-case logic in maintenance-status.routes.js) — this file only maps
// those already-computed statuses to a shared visual severity so the two
// domains can be combined into one card without one page's color scale
// silently drifting from another's.

const RENT_SEVERITY = { OVERDUE: 3, PARTIAL: 2, DUE: 1, PAID: 0, NONE: 0 };
const MAINTENANCE_SEVERITY = { OVERDUE: 3, OPEN: 2, OK: 0 };

const SEVERITY_STYLE = {
  3: { card: "border-red-300 bg-red-50", flag: "text-red-700" },
  2: { card: "border-amber-300 bg-amber-50", flag: "text-amber-700" },
  1: { card: "border-sky-300 bg-sky-50", flag: "text-sky-700" },
  0: { card: "border-stone-200 bg-white", flag: "text-stone-500" },
};

export function rentSeverity(status) {
  return RENT_SEVERITY[status] ?? 0;
}

export function maintenanceSeverity(status) {
  return MAINTENANCE_SEVERITY[status] ?? 0;
}

export function severityStyle(severity) {
  return SEVERITY_STYLE[severity] || SEVERITY_STYLE[0];
}

function money(amount) {
  return `$${Number(amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// One line per real thing worth surfacing — nothing printed for a clean
// domain, matching the existing "hide the pill when paid up" instinct
// instead of a card full of reassuring non-news.
export function buildFlags({ rent, maintenance }) {
  const flags = [];

  if (rent) {
    if (rent.status === "OVERDUE") {
      flags.push({ text: `Rent overdue — ${money(rent.totalOwed)}${rent.maxDaysLate > 0 ? ` · ${rent.maxDaysLate}d late` : ""}`, severity: 3 });
    } else if (rent.status === "PARTIAL") {
      flags.push({ text: `Partial rent payment — ${money(rent.totalOwed)} owed`, severity: 2 });
    } else if (rent.status === "NONE") {
      flags.push({ text: "No active lease", severity: 0 });
    }
  }

  if (maintenance) {
    if (maintenance.overdueSchedulesCount > 0) {
      flags.push({
        text: `${maintenance.overdueSchedulesCount} preventive item${maintenance.overdueSchedulesCount === 1 ? "" : "s"} overdue`,
        severity: 3,
      });
    }
    if (maintenance.openRequestsCount > 0) {
      flags.push({
        text: `${maintenance.openRequestsCount} open maintenance request${maintenance.openRequestsCount === 1 ? "" : "s"}`,
        severity: 2,
      });
    }
  }

  return flags;
}
