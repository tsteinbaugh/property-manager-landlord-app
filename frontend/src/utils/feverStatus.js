// src/utils/feverStatus.js

// ===== Helpers =====
function atStart(d) { const x = new Date(d); x.setHours(0,0,0,0); return x; }
function fromISO(x) { try { return x ? new Date(x) : null; } catch { return null; } }
function addDays(dateOrISO, n) {
  const d = typeof dateOrISO === "string" ? new Date(dateOrISO) : new Date(dateOrISO);
  const out = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  out.setDate(out.getDate() + Number(n || 0));
  return out;
}
function fmtUSD(n) {
  const v = Number(n || 0);
  return v.toLocaleString(undefined, { style: "currency", currency: "USD" });
}

// Find the date when payments first met/exceeded expectedTotal
function finalPaymentAt(payments = [], expectedTotal = 0) {
  if (!Array.isArray(payments) || payments.length === 0) return null;
  const sorted = [...payments].sort((a, b) => (a.dateISO || "").localeCompare(b.dateISO || ""));
  let sum = 0;
  for (const p of sorted) {
    sum += Number(p.amount) || 0;
    if (sum >= Number(expectedTotal || 0)) return fromISO(p.dateISO);
  }
  return null;
}

// Tooltip dictionary
export const FeverTooltips = {
  green:  "Paid in full, on time",
  yellow: "Paid in full , late but within grace period",
  orange: "Not paid in full after grace period, late fee applied, should start notice period",
  red:    "In notice period for non-payment",
  black:  "Notice period ended — filing/eviction should begin",
  gray:   "No financial data",
};

// ===== Core month status (table) =====
/**
 * Returns a rich status for one month.
 *
 * Rules you asked for:
 * - Status is based on the FINAL payment date that reaches expected total.
 * - Colors:
 *   green  = final paid on/before due date
 *   yellow = final paid after due but <= due+grace
 *   orange = final paid after grace; OR not fully paid and today > due+grace
 *   red    = ONLY if landlord has set noticeGivenAtISO and today within notice window
 *   black  = ONLY if landlord has set notice and today > noticeEnd
 *   gray   = no financial data (catch-all)
 * - Hide future months entirely (status === null, hidden: true).
 * - If the current month is BEFORE the due date and not fully paid, show blank (status === null).
 */
export function resolveFeverStatus({
  dueDateISO,
  payments = [],           // [{ amount, dateISO, ... }]
  expectedTotal,           // REQUIRED for final-payment logic
  graceDays = 0,           // late-fee/grace window in days
  // landlord inputs (optional; if absent, we DON'T go past ORANGE)
  noticeGivenAtISO = null,
  noticeDays = 10,
  nowISO,
}) {
  if (!dueDateISO) {
    return { color: "gray", tooltip: FeverTooltips.gray, hidden: false, finalPaidAtISO: null };
  }

  const due = atStart(fromISO(dueDateISO));
  const now = atStart(fromISO(nowISO || new Date().toISOString()));
  const isFutureMonth = now.getTime() < due.getTime();
  const graceEnd = atStart(addDays(due, graceDays));

  // Never advance beyond ORANGE unless landlord has intervened:
  const allowNotice = !!noticeGivenAtISO;
  const noticeStart = allowNotice ? atStart(fromISO(noticeGivenAtISO)) : null;
  const noticeEnd   = allowNotice ? atStart(addDays(noticeStart, Math.max(0, noticeDays))) : null;

  // 1) Hide all future months
  if (isFutureMonth) {
    return { color: null, tooltip: "", hidden: true, finalPaidAtISO: null };
  }

  // Compute whether this month is fully paid, and when it became fully paid
  const finalPaidAt = finalPaymentAt(payments, expectedTotal);
  const fullyPaid = !!finalPaidAt;

  // 2) If not fully paid and today <= due, blank (not green/gray)
  if (!fullyPaid && now.getTime() <= due.getTime()) {
    return { color: null, tooltip: "", hidden: false, finalPaidAtISO: null };
  }

  // 3) If fully paid — classify by final payment date
  if (fullyPaid) {
    const fp = atStart(finalPaidAt);
    if (fp.getTime() <= due.getTime()) {
      return { color: "green", tooltip: FeverTooltips.green, hidden: false, finalPaidAtISO: finalPaidAt.toISOString() };
    }
    if (fp.getTime() <= graceEnd.getTime()) {
      return { color: "yellow", tooltip: FeverTooltips.yellow, hidden: false, finalPaidAtISO: finalPaidAt.toISOString() };
    }

    // Paid after grace:
    // Do NOT go to RED/BLACK unless landlord set notice; otherwise cap at ORANGE.
    if (allowNotice && noticeStart && fp.getTime() >= noticeStart.getTime()) {
      if (noticeEnd && fp.getTime() <= noticeEnd.getTime()) {
        return { color: "red", tooltip: FeverTooltips.red, hidden: false, finalPaidAtISO: finalPaidAt.toISOString() };
      }
      if (noticeEnd && fp.getTime() > noticeEnd.getTime()) {
        return { color: "black", tooltip: FeverTooltips.black, hidden: false, finalPaidAtISO: finalPaidAt.toISOString() };
      }
    }
    return { color: "orange", tooltip: FeverTooltips.orange, hidden: false, finalPaidAtISO: finalPaidAt.toISOString() };
  }

  // 4) Not fully paid — compute by "today"
  if (now.getTime() <= graceEnd.getTime() && now.getTime() > due.getTime()) {
    return { color: "yellow", tooltip: FeverTooltips.yellow, hidden: false, finalPaidAtISO: null };
  }

  // Past grace: may escalate to RED/BLACK only if notice configured, else ORANGE
  if (allowNotice && noticeStart && now.getTime() >= noticeStart.getTime()) {
    if (noticeEnd && now.getTime() <= noticeEnd.getTime()) {
      return { color: "red", tooltip: FeverTooltips.red, hidden: false, finalPaidAtISO: null };
    }
    if (noticeEnd && now.getTime() > noticeEnd.getTime()) {
      return { color: "black", tooltip: FeverTooltips.black, hidden: false, finalPaidAtISO: null };
    }
  }
  return { color: "orange", tooltip: FeverTooltips.orange, hidden: false, finalPaidAtISO: null };
}

/**
 * Back-compat: your code calls resolveFeverColor() and expects a string.
 * We keep it, but route through resolveFeverStatus. (No tooltips/hidden here.)
 */
export function resolveFeverColor(args) {
  const {
    dueDateISO,
    payments = [],
    balance,                  // legacy
    lateFeeDays = 0,          // legacy name for grace
    // optional landlord inputs
    noticeGivenAtISO = null,
    noticeDays = 10,
    nowISO,
    expectedTotal,            // new — preferred
  } = args || {};

  // If expectedTotal not provided, derive from legacy "balance" + totalPayments.
  let expected = expectedTotal;
  if (expected == null && Array.isArray(payments)) {
    const received = payments.reduce((s, p) => s + (Number(p.amount) || 0), 0);
    if (typeof balance === "number") expected = +(received + balance).toFixed(2);
  }

  const r = resolveFeverStatus({
    dueDateISO,
    payments,
    expectedTotal: expected,
    graceDays: lateFeeDays,
    noticeGivenAtISO,
    noticeDays,
    nowISO,
  });
  return r.color ?? null;
}

// ===== Dashboard picker =====
/**
 * Given a schedule array (your table rows) and config, compute per-row statuses and
 * return the "dashboard" status object for the most-current UNRESOLVED month.
 *
 * - Prefers the latest month with color and NOT fully paid (finalPaidAtISO === null).
 * - If no unresolved, prefers the current month (even if blank early in the month).
 * - Else falls back to latest visible month.
 */
export function pickDashboardStatusFromRows(rows = [], config = {}) {
  const todayISO = new Date().toISOString();

  const statuses = rows.map(r => {
    const expected =
      Number(r.expectedBase || 0) +
      Number(r.expectedOther || 0) +
      Number(r.expectedAdjustments || 0) +
      (r.lateFeeWaived ? 0 : Number(r.lateFee || 0));

    const st = resolveFeverStatus({
      dueDateISO: r.dueDateISO,
      payments: r.payments || [],
      expectedTotal: expected,
      graceDays: Number(config?.graceDays ?? config?.lateFeeDays ?? 0),
      noticeGivenAtISO: config?.noticeGivenAtISO || null,
      noticeDays: Number(config?.noticeDays ?? 10),
      nowISO: todayISO,
    });
    return { ...st, monthKey: (r.periodLabel || r.dueDateISO)?.slice(0, 7) };
  });

  // unresolved = not fully paid AND has a color (visible)
  const unresolved = statuses
    .filter(s => !s.hidden && !s.finalPaidAtISO && s.color)
    .sort((a, b) => (a.monthKey || "").localeCompare(b.monthKey || ""));
  if (unresolved.length) return unresolved[unresolved.length - 1];

  // current month
  const now = new Date();
  const mkNow = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  const current = statuses.find(s => s.monthKey === mkNow && !s.hidden);
  if (current) return current;

  // latest visible
  const visible = statuses.filter(s => !s.hidden);
  if (!visible.length) return null;
  visible.sort((a, b) => (a.monthKey || "").localeCompare(b.monthKey || ""));
  return visible[visible.length - 1];
}

// Convenience for tooltips wherever you only have color:
export function tooltipForColor(color) {
  return FeverTooltips[color] || "";
}

// Re-export legacy helpers you had in this file
export { addDays, fmtUSD };
