// src/utils/finance.js
import { toISODate } from "./date";

// --- tiny date helpers scoped here to make month math robust ---
function daysInMonthUTC(year, monthIndex/* 0..11 */) {
  // monthIndex+1 day 0 -> last day of target month
  return new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate();
}
function makeDueDateISO(startISO, monthOffset, dueDay /* 1..31 */) {
  const start = new Date(startISO + "T00:00:00Z");
  const y = start.getUTCFullYear();
  const m0 = start.getUTCMonth();
  const targetM = m0 + monthOffset;

  const targetY = y + Math.floor(targetM / 12);
  const targetMonthIndex = ((targetM % 12) + 12) % 12;

  const dim = daysInMonthUTC(targetY, targetMonthIndex);
  const day = Math.min(Math.max(1, Number(dueDay) || 1), dim);

  const dt = new Date(Date.UTC(targetY, targetMonthIndex, day));
  return dt.toISOString().slice(0, 10);
}

function currency(n) {
  return Number.isFinite(n) ? +Number(n).toFixed(2) : 0;
}

export function computeRowTotals(row, config) {
  const adj =
    Array.isArray(row.adjustments)
      ? row.adjustments.reduce((s, a) => s + (Number(a.amount) || 0), 0)
      : Number(row.expectedAdjustments || 0);

  const expected =
    currency(row.expectedBase) +
    currency(row.expectedOther) +
    currency(adj) +
    (row.lateFeeWaived ? 0 : currency(row.lateFee || 0));

  const received = (row.payments || []).reduce((acc, p) => acc + currency(p.amount || 0), 0);
  const balance = +(expected - received).toFixed(2);
  const state = balance <= 0 ? "paid" : "unpaid";
  return { expected, receivedTotal: received, balance, state };
}

// --- PUBLIC: late fee mutator (called by table) ---
// Keep your policy: if today > due and not fully paid, apply lateFee based on policy.
export function maybeApplyLateFee(row, config) {
  if (!row || !config) return;

  const todayISO = new Date().toISOString().slice(0, 10);
  if (row.dueDateISO >= todayISO) {
    // due is in the future (or today) → no automatic late fee
    row.lateFee = 0;
    return;
  }

  const { receivedTotal, balance } = computeRowTotals(row, config);
  if (balance <= 0) {
    row.lateFee = 0; // paid in full, no late fee
    return;
  }

  // compute a late fee from config.lateFeePolicy
  const base = currency(row.expectedBase);
  const pol = config?.lateFeePolicy || { type: "flat", value: 0 };
  const val =
    pol.type === "percent"
      ? (base * (Number(pol.value) || 0)) / 100
      : Number(pol.value) || 0;

  row.lateFee = currency(val);
}

// --- PUBLIC: snapshot/lock when fully paid (table calls this) ---
export function finalizeMonthIfPaid(row /*, config */) {
  const { balance } = computeRowTotals(row, {});
  if (balance <= 0 && !row.lockedState) {
    row.lockedState = "paid";
    row.lockedAtISO = new Date().toISOString().slice(0, 10);
    row.lockedColor = "green";
  }
}

export function generateLeaseSchedule(cfg) {
  const {
    startDateISO,
    months = 12,
    dueDay = 1,
    monthlyRent = 0,
    otherRecurring = [],
    // flags & details
    firstMonthPrepaid,
    lastMonthPrepaid,
    firstMonthPayment,
    lastMonthPayment,
    securityDeposit = 0,
    depositPayment, // {dateISO, method, amount, note} (shown outside table)
  } = cfg || {};

  if (!startDateISO) return [];

  // build rows (as you already have with makeDueDateISO …)
  const rows = []; // … your fixed generator code from earlier …
  // (Keep your robust month-building code you just pasted earlier.)

  // Add recurring “other” sum:
  const otherSum = (otherRecurring || []).reduce((s, c) => s + (Number(c.amount) || 0), 0);

  for (let i = 0; i < Number(months || 0); i++) {
    const dueDateISO = makeDueDateISO(startDateISO, i, dueDay);
    const date = new Date(dueDateISO + "T00:00:00Z");
    const periodLabel = date.toLocaleString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });

    rows.push({
      id: `${dueDateISO}-${i}`,
      periodLabel,
      dueDateISO,
      expectedBase: currency(monthlyRent),
      expectedOther: currency(otherSum),
      // switch to array of adjustments to hold reasons later
      adjustments: [],            // << NEW (replaces expectedAdjustments)
      expectedAdjustments: 0,     // keep for backward-compat (computed if still used)
      lateFee: 0,
      lateFeeWaived: false,
      payments: [],
    });
  }

  // Apply prepaid month payments to the correct row
  if (firstMonthPrepaid && rows[0] && firstMonthPayment?.dateISO) {
    rows[0].payments.push({
      amount: currency(firstMonthPayment.amount || monthlyRent),
      dateISO: firstMonthPayment.dateISO,
      method: firstMonthPayment.method || "Prepaid",
      note: firstMonthPayment.note || "First month prepaid",
    });
  }
  if (lastMonthPrepaid && rows.length && lastMonthPayment?.dateISO) {
    const lastIdx = rows.length - 1;
    rows[lastIdx].payments.push({
      amount: currency(lastMonthPayment.amount || monthlyRent),
      dateISO: lastMonthPayment.dateISO,
      method: lastMonthPayment.method || "Prepaid",
      note: lastMonthPayment.note || "Last month prepaid",
    });
  }

  // DO NOT attach deposit to a row anymore; we'll show it separately in the table view
  // (You still keep cfg.securityDeposit and cfg.depositPayment in config.)

  return rows;
}
