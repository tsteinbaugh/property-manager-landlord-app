// src/utils/finance.js
import { toISODate } from "./date";

/* ===================== DATE HELPERS ===================== */
function daysInMonthUTC(year, monthIndex /* 0..11 */) {
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

    if (/(deposit|one[-\s]?time|setup|count|num|number|qty|quantity|has|flag|enabled|active)/i.test(keyLower)) {
      // skip obvious non-monthlies & flags/counters
    } else if (PET_KEY_RE.test(keyLower) && isNumericLike(v)) {
      out.push({ path: nextPath, keyLower, value: toNumber(v) });
    }

    if (v && typeof v === "object") deepFindPetCandidates(v, nextPath, out, depth + 1);
  }
  return out;
}

export function getPetRent(config) {
  if (!config) return 0;

  // 1) Known direct keys (strict priority)
  const directKeys = [
    "petRent","petRentMonthly","petRentPerMonth","petMonthly","monthlyPetRent",
    "petFee","petCharge","pet_amount",
    "pets.monthlyFee","pets[0].monthlyFee","pets[0].rent",
  ];
  for (const key of directKeys) {
    const parts = key.replace(/\[(\d+)\]/g, ".$1").split(".");
    let cur = config;
    for (const p of parts) cur = cur?.[p];
    if (isNumericLike(cur)) return +toNumber(cur);
  }

  // 2) otherRecurring item named "pet"
  if (Array.isArray(config?.otherRecurring)) {
    const item = config.otherRecurring.find((x) =>
      String(x?.label || x?.name || "").toLowerCase().includes("pet")
    );
    if (item && isNumericLike(item.amount)) return +toNumber(item.amount);
  }

  // 3) Deep scan anywhere; score results
  const candidates = deepFindPetCandidates(config);

  function score(c) {
    const k = c.keyLower;
    let s = 0;
    if (/rent/.test(k)) s += 5;
    if (/month|monthly|per[-\s]?month/.test(k)) s += 4;
    if (/fee/.test(k)) s += 2;
    if (/charge/.test(k)) s += 1;

    // penalties
    if (/deposit|one[-\s]?time|setup|count|num|number|qty|quantity|has|flag|enabled|active/.test(k)) s -= 100;
    if (c.value === true || c.value === false) s -= 100;
    if (c.value <= 2) s -= 3; // avoid boolean/count slip-through
    return s;
  }

  let best = null;
  for (const c of candidates) {
    if (typeof c.value === "boolean") continue;
    const sc = score(c);
    if (best === null || sc > best.sc) best = { ...c, sc };
  }

  return best && best.sc > 0 ? +Number(best.value).toFixed(2) : 0;
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
  const pet  = currency(getPetRent(config));
  const other = currency(row?.expectedOther);
  const adj = adjustmentsTotal(row);
  return +(base + pet + other + adj).toFixed(2);
}

function sumPaymentsUpTo(row, cutoffISO /* inclusive */) {
  const cutoff = cutoffISO ? new Date(cutoffISO + "T23:59:59Z") : null;
  return +((row?.payments || []).reduce((s, p) => {
    if (!cutoff) return s + currency(p.amount || 0);
    const d = new Date((p.dateISO || "") + "T00:00:00Z");
    return d <= cutoff ? s + currency(p.amount || 0) : s;
  }, 0)).toFixed(2);
}

function graceEndISOOf(row, config = {}) {
  const graceDays =
    Number.isFinite(Number(config?.graceDays)) ? Number(config.graceDays)
    : Number.isFinite(Number(config?.lateFeeDays)) ? Number(config.lateFeeDays)
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
  const received = (row?.payments || []).reduce((acc, p) => acc + currency(p.amount || 0), 0);
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
  const paidByGrace  = sumPaymentsUpTo(row, graceEndISO); // <= inclusive

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
  // We derive base+pet robustly from row math:
  const baseNoLate = expectedWithoutLateFee(row, config);
  const otherAdj   = currency(row?.expectedOther) + adjustmentsTotal(row);
  const baseWithPet = Math.max(0, +(baseNoLate - otherAdj).toFixed(2));

  const computed =
    pol.type === "percent"
      ? +(baseWithPet * currency(pol.value) / 100).toFixed(2)
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
export function finalizeMonthIfPaid(row, config = {}) {
  const { balance } = computeRowTotals(row, config);
  if (balance <= 0) {
    if (!row.lockedState) {
      row.lockedState = "paid";
      row.lockedAtISO = new Date().toISOString().slice(0, 10);
      row.lockedColor = "green";
    }
  } else {
    if (row.lockedState === "paid") {
      row.lockedState = null;
      row.lockedAtISO = null;
      row.lockedColor = null;
    }
  }
}

// Compute what the assessed late fee *would be* for this row based on policy,
// regardless of whether it's currently waived. Returns 0 if it wouldn't apply.
export function computeAssessedLateFeeAmount(row, config = {}) {
  if (!row || !row.dueDateISO) return 0;

  const graceEndISO = graceEndISOOf(row, config);
  const neededNoLate = expectedWithoutLateFee(row, config);
  const paidByGrace  = sumPaymentsUpTo(row, graceEndISO);

  // If fully covered by cutoff, no fee would be assessed.
  if (paidByGrace >= neededNoLate) return 0;

  // Fee base = base + pet
  const baseNoLate = expectedWithoutLateFee(row, config);
  const otherAdj   = currency(row?.expectedOther) + adjustmentsTotal(row);
  const baseWithPet = Math.max(0, +(baseNoLate - otherAdj).toFixed(2));

  const pol = config?.lateFeePolicy || { type: "flat", value: 0 };
  return pol.type === "percent"
    ? +(baseWithPet * currency(pol.value) / 100).toFixed(2)
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
  const otherSum = (otherRecurring || []).reduce((s, c) => s + (Number(c.amount) || 0), 0);

  const rows = [];
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
