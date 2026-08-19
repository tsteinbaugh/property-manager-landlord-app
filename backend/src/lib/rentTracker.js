// Computes the Rent Tracker's per-month table for one lease, and suggests
// how to split a lump payment across what's outstanding. Pure functions,
// no Prisma calls — same "compute on read" pattern as leaseClauseOrdering.js
// and MaintenanceSchedule.overdue, deliberately: no scheduler/cron writes
// any of this, it's recomputed fresh from Income rows every time the lease
// is loaded.
//
// A period is that calendar month's 1st (UTC), matching Income.appliesToPeriod
// and LateFeeWaiver.period's convention. Rent is assumed due on the 1st of
// each period — Lease has no separate "day of month due" field to do
// otherwise.
//
// Late fee accrual (per period, independent of other periods): a period's
// late fee is triggered — and stays triggered permanently, even once rent
// is eventually paid — if the rent (+ pet rent) expected for that period
// had not been fully collected by that period's own grace deadline
// (dueDate + lateFeeGraceDays), based only on Income rows dated on or
// before that deadline. This mirrors real practice: a late fee doesn't
// retroactively un-apply just because a late payment eventually arrives —
// see memory `project_late_fees_not_eviction_basis` for why this bookkeeping
// treatment is NOT the same thing as legal eviction eligibility.
//
// How a period's *balance* differs from whether a late fee is *triggered*:
// balance sums every Income row ever applied to that period regardless of
// date, so a later payment does pay the balance down (including paying off
// the fee itself) — it just doesn't erase the fact that a fee was incurred.

const RENT_TRACKER_CATEGORIES = ["RENT", "LATE_FEE", "PET_RENT"];

function monthStart(date) {
  const d = new Date(date);
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1));
}

function addMonths(date, n) {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + n, 1));
}

function daysBetween(a, b) {
  return Math.floor((a.getTime() - b.getTime()) / (1000 * 60 * 60 * 24));
}

function toNumber(decimal) {
  return decimal == null ? 0 : Number(decimal);
}

// startDate..endDate inclusive, both truncated to their month. MONTH_TO_MONTH
// (or no endDate at all) ignores endDate entirely and grows to the current
// month instead — a lease that rolled over past its original fixed term is
// treated identically to one that was month-to-month from day one.
function periodRange(lease, today) {
  const start = monthStart(lease.startDate);
  const useEndDate = lease.status !== "MONTH_TO_MONTH" && lease.endDate;
  const end = monthStart(useEndDate ? lease.endDate : today);

  const periods = [];
  for (let p = start; p.getTime() <= end.getTime(); p = addMonths(p, 1)) {
    periods.push(p);
  }
  return periods;
}

// `incomes` is a flat list of {id, leaseId, category, amount, appliesToPeriod,
// date, method} units — one per plain single-category Income row, or one per
// IncomeAllocation for a split payment (in which case several units share the
// same `id`, since they're line items on the same real Income row). That
// shared `id` is what a period's `payments` list reports back, so the UI can
// link straight to the one ledger row a given dollar actually lives on.
function buildRentTracker({ lease, incomes, waivers = [], today = new Date() }) {
  const relevantIncomes = (incomes || []).filter(
    (i) => i.leaseId === lease.id && i.appliesToPeriod && RENT_TRACKER_CATEGORIES.includes(i.category),
  );
  const waivedPeriods = new Set((waivers || []).map((w) => monthStart(w.period).toISOString()));

  const expectedRent = toNumber(lease.monthlyRent);
  const expectedPetRent = lease.petPolicy ? toNumber(lease.petRentAmount) : 0;
  const lateFeeAmount = toNumber(lease.lateFeeAmount);
  const graceDays = lease.lateFeeGraceDays ?? 0;

  return periodRange(lease, today).map((period) => {
    const periodKey = period.toISOString();
    const forPeriod = (category) =>
      relevantIncomes.filter((i) => i.category === category && monthStart(i.appliesToPeriod).toISOString() === periodKey);
    const sum = (rows) => rows.reduce((acc, r) => acc + toNumber(r.amount), 0);

    const rentRows = forPeriod("RENT");
    const petRentRows = forPeriod("PET_RENT");
    const lateFeeRows = forPeriod("LATE_FEE");

    const collectedRent = sum(rentRows);
    const collectedPetRent = sum(petRentRows);
    const collectedLateFeePaid = sum(lateFeeRows);

    const dueDate = period;
    const deadline = new Date(dueDate.getTime() + graceDays * 24 * 60 * 60 * 1000);
    const isWaived = waivedPeriods.has(periodKey);

    const earlyCollected = sum([...rentRows, ...petRentRows].filter((r) => new Date(r.date) <= deadline));
    const deadlinePassed = deadline.getTime() < today.getTime();
    const lateFeeTriggered = !isWaived && deadlinePassed && earlyCollected < expectedRent + expectedPetRent && lateFeeAmount > 0;

    const expectedLateFee = lateFeeTriggered ? lateFeeAmount : 0;
    const totalExpected = expectedRent + expectedPetRent + expectedLateFee;
    const totalCollected = collectedRent + collectedPetRent + collectedLateFeePaid;
    const balance = Math.round((totalExpected - totalCollected) * 100) / 100;

    const hasStarted = period.getTime() <= monthStart(today).getTime();
    let status;
    let daysLate = 0;

    if (!hasStarted) {
      status = "UPCOMING";
    } else if (balance <= 0) {
      const allRows = [...rentRows, ...petRentRows, ...lateFeeRows];
      const completedDate = allRows.length > 0 ? new Date(Math.max(...allRows.map((r) => new Date(r.date).getTime()))) : null;
      status = completedDate && completedDate.getTime() > deadline.getTime() ? "PAID_LATE" : "PAID";
    } else if (today.getTime() <= deadline.getTime()) {
      status = "DUE";
    } else {
      status = totalCollected > 0 ? "PARTIAL" : "OVERDUE";
      daysLate = Math.max(0, daysBetween(today, deadline));
    }

    const payments = [...rentRows, ...petRentRows, ...lateFeeRows].map((r) => ({
      incomeId: r.id,
      category: r.category,
      amount: toNumber(r.amount),
      method: r.method || null,
    }));

    return {
      period: period.toISOString(),
      dueDate: dueDate.toISOString(),
      graceDeadline: deadline.toISOString(),
      expectedRent,
      expectedPetRent,
      expectedLateFee,
      totalExpected: Math.round(totalExpected * 100) / 100,
      collectedRent,
      collectedPetRent,
      collectedLateFee: collectedLateFeePaid,
      totalCollected: Math.round(totalCollected * 100) / 100,
      balance,
      isLateFeeWaived: isWaived,
      status,
      daysLate,
      payments,
    };
  });
}

// Suggests how to split a lump payment across what's outstanding, per the
// lease's own "Application of Payments" clause: fees before rent, oldest
// period first within each. This is bookkeeping categorization only — see
// memory `project_late_fees_not_eviction_basis` for why this must never be
// used to decide legal eviction eligibility. Any leftover after every
// period in the table is satisfied (an overpayment) is applied forward as a
// rent prepayment against the next period(s) in order; `unapplied` catches
// the rare case where the payment exceeds the entire lease term's rows.
function suggestPaymentAllocation({ rows, amount }) {
  let remaining = Math.round(amount * 100) / 100;
  const allocations = [];

  function take(period, category, owed) {
    if (remaining <= 0 || owed <= 0) return;
    const alloc = Math.min(remaining, Math.round(owed * 100) / 100);
    allocations.push({ period, category, amount: alloc });
    remaining = Math.round((remaining - alloc) * 100) / 100;
  }

  const balances = rows.map((r) => ({
    period: r.period,
    feeOwed: Math.max(0, r.expectedLateFee - r.collectedLateFee),
    rentOwed: Math.max(0, r.expectedRent - r.collectedRent),
    petRentOwed: Math.max(0, r.expectedPetRent - r.collectedPetRent),
  }));

  for (const b of balances) take(b.period, "LATE_FEE", b.feeOwed);
  for (const b of balances) {
    take(b.period, "RENT", b.rentOwed);
    take(b.period, "PET_RENT", b.petRentOwed);
  }

  return { allocations, unapplied: remaining };
}

// Rolls a lease's per-period rows up into one status, for places that need
// "is this lease okay at a glance" (the property list, the Dashboard) without
// showing the full table. Worst-case wins: one overdue period anywhere in
// the lease's history outranks a since-caught-up PARTIAL, which outranks the
// current period merely being DUE.
function summarizeRentStatus(rows) {
  if (!rows || rows.length === 0) return "NONE";
  if (rows.some((r) => r.status === "OVERDUE")) return "OVERDUE";
  if (rows.some((r) => r.status === "PARTIAL")) return "PARTIAL";
  if (rows.some((r) => r.status === "DUE")) return "DUE";
  return "PAID";
}

// The single ledger row for a split payment still needs one top-level
// IncomeCategory (for the existing category badge/filtering everywhere else
// in Finances) — whichever category the payment was mostly for, by dollar
// amount. The real breakdown lives on the row's IncomeAllocation children;
// this is just a reasonable one-word summary of it.
function dominantCategory(allocations) {
  const totals = {};
  for (const a of allocations) totals[a.category] = (totals[a.category] || 0) + Number(a.amount);
  return Object.entries(totals).sort((a, b) => b[1] - a[1])[0][0];
}

module.exports = {
  buildRentTracker,
  suggestPaymentAllocation,
  summarizeRentStatus,
  dominantCategory,
  RENT_TRACKER_CATEGORIES,
  monthStart,
};
