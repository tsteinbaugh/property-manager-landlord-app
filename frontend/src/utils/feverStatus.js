// frontend/src/utils/feverStatus.js

/**
 * Date helpers (no external deps).
 */
function startOfDay(d) { const x = new Date(d); x.setHours(0,0,0,0); return x; }
function addDays(d, n) { const x = new Date(d); x.setDate(x.getDate() + n); return x; }
function isAfter(a, b) { return startOfDay(a).getTime() > startOfDay(b).getTime(); }
function isOnOrAfter(a, b) { return startOfDay(a).getTime() >= startOfDay(b).getTime(); }
function isBefore(a, b) { return startOfDay(a).getTime() < startOfDay(b).getTime(); }
function inRange(d, from, toIncl) {
  const x = startOfDay(d).getTime();
  return x >= startOfDay(from).getTime() && x <= startOfDay(toIncl).getTime();
}

/**
 * FINANCIAL STATUS
 *
 * Inputs:
 *  - today: Date | string
 *  - dueDate: Date | string   (the RENT due date for the current period)
 *  - monthlyRent: number
 *  - payments: Array<{ date: string|Date, amount: number }> for the current period
 *  - lateFeeDays: number (default 7) — late fee date = dueDate + lateFeeDays
 *  - noticeDays: number (default 10) — 10-day notice starts the day after late fee date
 *
 * Color logic (highest severity wins):
 *  BLACK:   unpaid and today >= (lateFeeDate + noticeDays + 1 day) → "file eviction"
 *  RED:     unpaid and in the 10-day notice window (day after late fee through its end)
 *  ORANGE:  unpaid and after late fee date but BEFORE notice window (i.e., the late-fee zone)
 *  YELLOW:  unpaid and after due date but BEFORE late fee date
 *  GREEN:   paid in full OR not yet due
 *
 * Tooltips returned alongside color.
 */
export function getFinancialFever({
  today = new Date(),
  dueDate,
  monthlyRent,
  payments = [],
  lateFeeDays = 7,
  noticeDays = 10,
}) {
  const now = startOfDay(today);
  const due = startOfDay(dueDate);

  const totalPaid = payments.reduce((s, p) => s + (Number(p.amount) || 0), 0);
  const paidInFull = totalPaid >= (Number(monthlyRent) || 0);

  const lateFeeDate = addDays(due, lateFeeDays);                 // D + 7
  const noticeStart = addDays(lateFeeDate, 1);                   // D + 8
  const noticeEnd = addDays(noticeStart, noticeDays - 1);        // D + 17
  const fileDate = addDays(noticeEnd, 1);                        // D + 18

  if (paidInFull || isBefore(now, due)) {
    return {
      color: "green",
      tooltip: "Paid and up to date.",
    };
  }

  // Unpaid paths from here
  if (isAfter(now, fileDate) || isOnOrAfter(now, fileDate)) {
    return {
      color: "black",
      tooltip: "No payment after 10-day notice — file eviction.",
    };
  }

  if (inRange(now, noticeStart, noticeEnd)) {
    return {
      color: "red",
      tooltip: "In default: 10-day notice period (no payment).",
    };
  }

  if (isAfter(now, lateFeeDate)) {
    return {
      color: "orange",
      tooltip: "Past late-fee date (no payment).",
    };
  }

  if (isAfter(now, due)) {
    return {
      color: "yellow",
      tooltip: "Late: past due date (no payment).",
    };
  }

  // Fallback (shouldn’t reach here)
  return { color: "green", tooltip: "Up to date." };
}

/**
 * MAINTENANCE STATUS
 *
 * Inputs:
 *  - items: Array<{
 *      title?: string,
 *      dueDate?: string|Date,
 *      tenantClaim?: boolean,
 *      emergency?: boolean,
 *      completed?: boolean
 *    }>
 *  - today: Date | string
 *  - approachingDays: number (default 14) — “approaching due” window
 *
 * Color logic (highest severity wins):
 *  BLACK:   any emergency item (open)
 *  RED:     any tenant claim (open)
 *  ORANGE:  any item past due and not completed
 *  YELLOW:  any item due within approachingDays (and not completed)
 *  GREEN:   nothing open, nothing approaching
 */
export function getMaintenanceFever({
  items = [],
  today = new Date(),
  approachingDays = 14,
}) {
  const now = startOfDay(today);
  const soonCutoff = addDays(now, approachingDays);

  const open = items.filter(i => !i?.completed);

  if (open.some(i => i?.emergency)) {
    return { color: "black", tooltip: "Emergency issue reported." };
  }

  if (open.some(i => i?.tenantClaim)) {
    return { color: "red", tooltip: "Tenant reported an issue." };
  }

  if (open.some(i => i?.dueDate && isBefore(i.dueDate, now))) {
    return { color: "orange", tooltip: "Maintenance past due." };
  }

  if (open.some(i => i?.dueDate && inRange(i.dueDate, now, soonCutoff))) {
    return { color: "yellow", tooltip: "Maintenance coming due soon." };
  }

  return { color: "green", tooltip: "All maintenance up to date." };
}
