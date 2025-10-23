import { toISODate } from "./date";
import { resolveFeverStatus } from "./feverStatus";

/* ===================== DATE HELPERS ===================== */
function daysInMonthUTC(year, monthIndex /* 0..11 */) {
  return new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate();
}
function isoUTC(y, m, d) {
  return new Date(Date.UTC(y, m, d)).toISOString().slice(0, 10);
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

/** First due date strictly AFTER (or not earlier than) the lease start context.
 * If the due day in the start month is on/before the start date, move to next month. */
function firstDueDateISO(startISO, dueDay) {
  const s = new Date(startISO + "T00:00:00Z");
  const y = s.getUTCFullYear();
  const m = s.getUTCMonth();

  const dim = daysInMonthUTC(y, m);
  const day = Math.min(Math.max(1, Number(dueDay) || 1), dim);

  const candidate = new Date(Date.UTC(y, m, day));
  // If candidate is on/before start date, advance one month
  if (candidate <= s) {
    let ny = y;
    let nm = m + 1;
    if (nm >= 12) {
      ny += 1;
      nm -= 12;
    }
    const dim2 = daysInMonthUTC(ny, nm);
    const day2 = Math.min(day, dim2);
    return isoUTC(ny, nm, day2);
  }
  return candidate.toISOString().slice(0, 10);
}

/** Add N months to a base ISO date, clamping to a target dueDay (1..31). */
function addMonthsClamped(iso, n, dueDay) {
  const d = new Date(iso + "T00:00:00Z");
  const y = d.getUTCFullYear();
  const m = d.getUTCMonth();
  const targetM = m + Number(n || 0);
  const ty = y + Math.floor(targetM / 12);
  const tm = ((targetM % 12) + 12) % 12;
  const dim = daysInMonthUTC(ty, tm);
  const day = Math.min(Math.max(1, Number(dueDay) || 1), dim);
  return isoUTC(ty, tm, day);
}

/* ===================== NUMBER HELPERS ===================== */
function currency(n) {
  return Number.isFinite(Number(n)) ? +Number(n).toFixed(2) : 0;
}

/* ========== PET RENT RESOLVER (HARDENED & DEEP) ========== */
const PET_KEY_RE = /(pet|pets)/i;

function isNumericLike(v) {
  if (typeof v === "number" && Number.isFinite(v)) return true;
  if (typeof v === "string" && v.trim() !== "" && Number.isFinite(Number(v))) return true;
  return false;
}
function toNumber(v) {
  return typeof v === "number" ? v : Number(v);
}

function deepFindPetCandidates(obj, path = "", out = [], depth = 0) {
  if (!obj || typeof obj !== "object" || depth > 6) return out;

  if (Array.isArray(obj)) {
    obj.forEach((v, i) => deepFindPetCandidates(v, `${path}[${i}]`, out, depth + 1));
    return out;
  }

  for (const [k, v] of Object.entries(obj)) {
    const keyLower = String(k).toLowerCase();
    const nextPath = path ? `${path}.${k}` : k;

    if (
      /(deposit|one[-\s]?time|setup|count|num|number|qty|quantity|has|flag|enabled|active)/i.test(
        keyLower,
      )
    ) {
      // skip obvious non-monthlies & flags/counters
    } else if (PET_KEY_RE.test(keyLower) && isNumericLike(v)) {
      out.push({ path: nextPath, keyLower, value: toNumber(v) });
    }

    if (v && typeof v === "object") deepFindPetCandidates(v, nextPath, out, depth + 1);
  }
  return out;
}

// utils/finance.js
export function getPetRent(cfg) {
  if (!cfg || !cfg.petRentEnabled) return 0;
  const amt = Number(cfg.petRentAmount ?? 0);
  return Number.isFinite(amt) ? amt : 0;
}

/* ===================== TOTALS HELPERS ===================== */
function adjustmentsTotal(row) {
  if (Array.isArray(row?.adjustments)) {
    return row.adjustments.reduce((s, a) => s + currency(a.amount), 0);
  }
  return currency(row?.expectedAdjustments);
}

// Expected subtotal BEFORE any late fee.
function expectedWithoutLateFee(row, config) {
  const base = currency(row?.expectedBase);
  const pet = currency(getPetRent(config));
  const other = currency(row?.expectedOther);
  const adj = adjustmentsTotal(row);
  return +(base + pet + other + adj).toFixed(2);
}

function sumPaymentsUpTo(row, cutoffISO /* inclusive */) {
  const cutoff = cutoffISO ? new Date(cutoffISO + "T23:59:59Z") : null;
  return +(row?.payments || [])
    .reduce((s, p) => {
      if (!cutoff) return s + currency(p.amount || 0);
      const d = new Date((p.dateISO || "") + "T00:00:00Z");
      return d <= cutoff ? s + currency(p.amount || 0) : s;
    }, 0)
    .toFixed(2);
}

function graceEndISOOf(row, config = {}) {
  const graceDays = Number.isFinite(Number(config?.graceDays))
    ? Number(config.graceDays)
    : Number.isFinite(Number(config?.lateFeeDays))
      ? Number(config.lateFeeDays)
      : 0;

  const due = new Date(row.dueDateISO + "T00:00:00Z");
  const graceEnd = new Date(due.getTime());
  graceEnd.setUTCDate(graceEnd.getUTCDate() + graceDays);
  return graceEnd.toISOString().slice(0, 10);
}

/* ===================== PUBLIC TOTALS ===================== */
export function computeRowTotals(row, config) {
  const baseNoLate = expectedWithoutLateFee(row, config);
  const late = row?.lateFeeWaived ? 0 : currency(row?.lateFee || 0);

  const expected = +(baseNoLate + late).toFixed(2);
  const received = (row?.payments || []).reduce(
    (acc, p) => acc + currency(p.amount || 0),
    0,
  );
  const balance = +(expected - received).toFixed(2);
  const state = balance <= 0 ? "paid" : "unpaid";
  return { expected, receivedTotal: received, balance, state };
}

// ===================== LATE FEE (FIXED: assess by timing, not balance) =====================
// Apply after grace if, at the grace cutoff, the tenant had not fully covered
// the "no-late" expected amount (base + pet + other + adjustments).
// Remove only if: (a) waived, or (b) fully covered BY THE CUTOFF.
// Later payments that bring balance to zero do NOT remove an assessed fee.
export function maybeApplyLateFee(row, config = {}) {
  if (!row || !row.dueDateISO) return;

  // Waiver always wins.
  if (row.lateFeeWaived) {
    row.lateFee = 0;
    row.lateFeeAppliedAtISO = null;
    return;
  }

  const todayISO = new Date().toISOString().slice(0, 10);
  const graceEndISO = graceEndISOOf(row, config);

  // Compute what was needed without late and what was actually paid by cutoff.
  const neededNoLate = expectedWithoutLateFee(row, config);
  const paidByGrace = sumPaymentsUpTo(row, graceEndISO); // <= inclusive

  // If they were fully covered by the cutoff, there is no late fee (ever).
  if (paidByGrace >= neededNoLate) {
    row.lateFee = 0;
    row.lateFeeAppliedAtISO = null;
    return;
  }

  // Before grace end: do not assess yet (but also don't clear any existing).
  if (todayISO <= graceEndISO) return;

  // After grace: if they were short at cutoff, the fee is assessed (once),
  // regardless of what the balance looks like now.
  const pol = config?.lateFeePolicy || { type: "flat", value: 0 };

  // Fee base = base + pet (exclude "other" and adjustments from % base)
  const baseNoLate = expectedWithoutLateFee(row, config);
  const otherAdj = currency(row?.expectedOther) + adjustmentsTotal(row);
  const baseWithPet = Math.max(0, +(baseNoLate - otherAdj).toFixed(2));

  const computed =
    pol.type === "percent"
      ? +((baseWithPet * currency(pol.value)) / 100).toFixed(2)
      : +currency(pol.value).toFixed(2);

  // Only set if not already set; don't overwrite an existing assessed amount.
  if (!row.lateFee || row.lateFee === 0) {
    row.lateFee = Number.isFinite(computed) ? computed : 0;
    row.lateFeeAppliedAtISO = todayISO;
  }
  // Note: we do NOT clear an assessed fee here; clearing only happens via waiver
  // or by proving paid-in-full BY cutoff (handled above).
}

/* ===================== FINALIZE ===================== */
export function finalizeMonthIfPaid(row, config) {
  if (!row) return;

  const t = computeRowTotals(row, config);
  const balance = Number(t.balance ?? 0);

  if (balance <= 0) {
    // latest payment date if present, otherwise today
    const latestPayISO =
      (row.payments || [])
        .map((p) => p?.dateISO || "")
        .filter(Boolean)
        .sort()
        .pop() || new Date().toISOString().slice(0, 10);

    row.finalPaidAtISO = latestPayISO;
    row.state = "paid";
  } else {
    row.finalPaidAtISO = null;
    if (row.state === "paid") delete row.state;
  }
}

// Compute what the assessed late fee *would be* for this row based on policy,
// regardless of whether it's currently waived. Returns 0 if it wouldn't apply.
export function computeAssessedLateFeeAmount(row, config = {}) {
  if (!row || !row.dueDateISO) return 0;

  const graceEndISO = graceEndISOOf(row, config);
  const neededNoLate = expectedWithoutLateFee(row, config);
  const paidByGrace = sumPaymentsUpTo(row, graceEndISO);

  // If fully covered by cutoff, no fee would be assessed.
  if (paidByGrace >= neededNoLate) return 0;

  // Fee base = base + pet
  const baseNoLate = expectedWithoutLateFee(row, config);
  const otherAdj = currency(row?.expectedOther) + adjustmentsTotal(row);
  const baseWithPet = Math.max(0, +(baseNoLate - otherAdj).toFixed(2));

  const pol = config?.lateFeePolicy || { type: "flat", value: 0 };
  return pol.type === "percent"
    ? +((baseWithPet * currency(pol.value)) / 100).toFixed(2)
    : +currency(pol.value).toFixed(2);
}

/* ===================== SCHEDULE GENERATOR ===================== */
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
    depositPayment, // shown outside table
  } = cfg || {};

  if (!startDateISO) return [];

  // NOTE: pet rent is NOT forcibly added here; we resolve via getPetRent(config) at runtime.
  const otherSum = (otherRecurring || []).reduce(
    (s, c) => s + (Number(c.amount) || 0),
    0,
  );

  // First due date logic: roll to next month if start is on/after this month's due day
  const firstDueISO = firstDueDateISO(startDateISO, dueDay);

  const rows = [];
  for (let i = 0; i < Number(months || 0); i++) {
    const dueDateISO = i === 0 ? firstDueISO : addMonthsClamped(firstDueISO, i, dueDay);
    const date = new Date(dueDateISO + "T00:00:00Z");
    const periodLabel = date.toLocaleString("en-US", {
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    });

    rows.push({
      id: `${dueDateISO}-${i}`,
      periodLabel,
      dueDateISO,
      expectedBase: currency(monthlyRent),
      expectedOther: currency(otherSum),
      adjustments: [],
      expectedAdjustments: 0, // legacy support
      lateFee: 0,
      lateFeeWaived: false,
      payments: [],
    });
  }

  // Prepaid injections (stay as payments)
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

  return rows;
}

/* ===================== DASHBOARD PICKER & STATUS ===================== */
// Mirror table's expectedDisplay math (rent + pet + other + adjustments + late if not waived)
export function expectedTotalIncludingLate(row, config) {
  const pet = getPetRent(config);
  const other = Number(row?.expectedOther) || 0;
  const adjs = Array.isArray(row?.adjustments)
    ? row.adjustments.reduce((s, a) => s + (Number(a.amount) || 0), 0)
    : Number(row?.expectedAdjustments) || 0;
  const late = row?.lateFeeWaived ? 0 : Number(row?.lateFee) || 0;
  return +((Number(row?.expectedBase) || 0) + pet + other + adjs + late).toFixed(2);
}

function _startOfDayLocal(iso) {
  if (!iso) return new Date(NaN);
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(y, m - 1, d || 1);
  dt.setHours(0, 0, 0, 0);
  return dt;
}
function _isFutureRow(row, today = new Date()) {
  const due = _startOfDayLocal(row?.dueDateISO);
  const t0 = new Date(today);
  t0.setHours(0, 0, 0, 0);
  return due > t0;
}
function _isResolved(row, config) {
  const { balance } = computeRowTotals(row, config);
  return balance <= 0;
}

/**
 * From a schedule, pick the single row the Dashboard fever light should represent.
 * Rule:
 *  1) Among rows with dueDate <= today, pick the earliest UNRESOLVED month.
 *  2) If all those are resolved, pick the latest RESOLVED month.
 *  3) If no eligible rows (empty/future-only), return null.
 */
export function pickDashboardFinancialRow(schedule = [], config, opts = {}) {
  const { today = new Date() } = opts;
  if (!Array.isArray(schedule) || schedule.length === 0) return null;

  const eligible = schedule
    .filter((r) => r && !_isFutureRow(r, today))
    .sort((a, b) => _startOfDayLocal(a.dueDateISO) - _startOfDayLocal(b.dueDateISO));

  if (eligible.length === 0) return null;

  const earliestUnresolved = eligible.find((r) => !_isResolved(r, config));
  if (earliestUnresolved) return earliestUnresolved;

  // otherwise take the latest resolved up to today
  for (let i = eligible.length - 1; i >= 0; i--) {
    if (_isResolved(eligible[i], config)) return eligible[i];
  }
  return null;
}

/**
 * Compute the Dashboard fever color/tooltip/label using the same resolveFeverStatus() as the table.
 */
export function resolveDashboardFeverStatus(schedule = [], config, opts = {}) {
  const picked = pickDashboardFinancialRow(schedule, config, opts);
  if (!picked) {
    return {
      color: "gray",
      label: "",
      tooltip: "No eligible months",
      pickedRow: null,
      paid: false,
    };
  }

  const expectedTotal = expectedTotalIncludingLate(picked, config);
  const status = resolveFeverStatus({
    dueDateISO: picked.dueDateISO,
    payments: picked.payments || [],
    expectedTotal,
    graceDays: Number(config?.graceDays ?? config?.lateFeeDays ?? 0),
    noticeGivenAtISO: picked?.notice?.startISO ?? config?.noticeGivenAtISO ?? null,
    noticeDays: Number(picked?.notice?.days ?? config?.noticeDays ?? 10),
  });

  const label =
    picked.periodLabel || (picked.dueDateISO ? picked.dueDateISO.slice(0, 7) : "");

  return {
    color: status?.color || "gray",
    tooltip: status?.tooltip || "",
    label,
    pickedRow: picked,
    paid: !!status?.finalPaidAtISO,
  };
}
