// src/utils/feverStatus.js

// ===== Helpers =====
function atStart(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}
function fromISO(x) {
  try {
    return x ? new Date(x) : null;
  } catch {
    return null;
  }
}
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
  const sorted = [...payments].sort((a, b) =>
    (a.dateISO || "").localeCompare(b.dateISO || ""),
  );
  let sum = 0;
  for (const p of sorted) {
    sum += Number(p.amount) || 0;
    if (sum >= Number(expectedTotal || 0)) return fromISO(p.dateISO);
  }
  return null;
}

// ===== Tooltip dictionary =====
const BaseTips = {
  green: "Paid in full, on time",
  yellow: "Paid in full, late but within grace period",
  yellow_unpaid: "Within grace period — balance due.",
  orange_unpaid: "Past grace period, late fee applied — balance due (consider notice).",
  orange_paid_after_grace:
    "Paid in full, paid after grace (late fees applied if applicable).",
  red_unpaid: "In notice period - balance due.",
  red_paid_in_notice:
    "Paid in full, paid during notice period (late fees applied if applicable).",
  black_unpaid: "Notice period ended — filing/eviction should begin.",
  black_paid: "Paid in full, paid after notice period (late fees applied if applicable).",
  gray: "No financial data",
};
// Back-compat alias (prevents ReferenceError if other files import FeverTooltips)
export const FeverTooltips = BaseTips;

// ===== Core month status =====
export function resolveFeverStatus({
  dueDateISO,
  payments = [],
  expectedTotal,
  graceDays = 0,
  noticeGivenAtISO = null,
  noticeDays = 10,
  nowISO,
}) {
  if (!dueDateISO) {
    return { color: "gray", tooltip: BaseTips.gray, hidden: false, finalPaidAtISO: null };
  }

  const due = atStart(fromISO(dueDateISO));
  const now = atStart(fromISO(nowISO || new Date().toISOString()));
  const graceEnd = atStart(addDays(due, graceDays));
  const isFutureMonth = now.getTime() < due.getTime();

  const allowNotice = !!noticeGivenAtISO;
  const noticeStart = allowNotice ? atStart(fromISO(noticeGivenAtISO)) : null;
  const noticeEnd = allowNotice
    ? atStart(addDays(noticeStart, Math.max(0, noticeDays)))
    : null;

  // Hide future months
  if (isFutureMonth) {
    return { color: null, tooltip: "", hidden: true, finalPaidAtISO: null };
  }

  const finalPaidAt = finalPaymentAt(payments, expectedTotal);
  const fullyPaid = !!finalPaidAt;

  // Before (or on) due date and not fully paid — blank (no dot yet)
  if (!fullyPaid && now.getTime() <= due.getTime()) {
    return { color: null, tooltip: "", hidden: false, finalPaidAtISO: null };
  }

  // ===== FULLY PAID =====
  if (fullyPaid) {
    const fp = atStart(finalPaidAt);

    // On/before due -> green
    if (fp.getTime() <= due.getTime()) {
      return {
        color: "green",
        tooltip: BaseTips.green,
        hidden: false,
        finalPaidAtISO: finalPaidAt.toISOString(),
      };
    }

    // Within grace -> yellow
    if (fp.getTime() <= graceEnd.getTime()) {
      return {
        color: "yellow",
        tooltip: BaseTips.yellow,
        hidden: false,
        finalPaidAtISO: finalPaidAt.toISOString(),
      };
    }

    // Paid after grace, no notice configured
    if (!allowNotice) {
      return {
        color: "orange",
        tooltip: BaseTips.orange_paid_after_grace,
        hidden: false,
        finalPaidAtISO: finalPaidAt.toISOString(),
      };
    }

    // With notice configured:
    if (noticeStart && noticeEnd) {
      // Paid before notice actually started
      if (fp.getTime() < noticeStart.getTime()) {
        return {
          color: "orange",
          tooltip: BaseTips.orange_paid_after_grace,
          hidden: false,
          finalPaidAtISO: finalPaidAt.toISOString(),
        };
      }

      // Paid during notice window
      if (fp.getTime() >= noticeStart.getTime() && fp.getTime() <= noticeEnd.getTime()) {
        return {
          color: "red",
          tooltip: BaseTips.red_paid_in_notice,
          hidden: false,
          finalPaidAtISO: finalPaidAt.toISOString(),
        };
      }

      // Paid after notice window ended — keep BLACK color but use black_paid tooltip
      if (fp.getTime() > noticeEnd.getTime()) {
        return {
          color: "black",
          tooltip: BaseTips.black_paid,
          hidden: false,
          finalPaidAtISO: finalPaidAt.toISOString(),
        };
      }
    }

    // Fallback: paid after grace and some config missing
    return {
      color: "orange",
      tooltip: BaseTips.orange_paid_after_grace,
      hidden: false,
      finalPaidAtISO: finalPaidAt.toISOString(),
    };
  }

  // ===== NOT FULLY PAID =====
  // Late but still within grace window (after due, on/before grace end) — unpaid
  if (now.getTime() <= graceEnd.getTime() && now.getTime() > due.getTime()) {
    return {
      color: "yellow",
      tooltip: BaseTips.yellow_unpaid,
      hidden: false,
      finalPaidAtISO: null,
    };
  }

  // Past grace
  if (allowNotice && noticeStart) {
    // inside notice window -> red
    if (
      noticeEnd &&
      now.getTime() >= noticeStart.getTime() &&
      now.getTime() <= noticeEnd.getTime()
    ) {
      return {
        color: "red",
        tooltip: BaseTips.red_unpaid,
        hidden: false,
        finalPaidAtISO: null,
      };
    }

    // after notice window -> black (unpaid)
    if (noticeEnd && now.getTime() > noticeEnd.getTime()) {
      return {
        color: "black",
        tooltip: BaseTips.black_unpaid,
        hidden: false,
        finalPaidAtISO: null,
      };
    }

    // before noticeStart but after grace -> orange unpaid
    if (now.getTime() > graceEnd.getTime() && now.getTime() < noticeStart.getTime()) {
      return {
        color: "orange",
        tooltip: BaseTips.orange_unpaid,
        hidden: false,
        finalPaidAtISO: null,
      };
    }
  }

  // No notice configured and past grace -> orange unpaid
  return {
    color: "orange",
    tooltip: BaseTips.orange_unpaid,
    hidden: false,
    finalPaidAtISO: null,
  };
}

// ===== Back-compat string-only color =====
export function resolveFeverColor(args) {
  const {
    dueDateISO,
    payments = [],
    balance,
    lateFeeDays = 0,
    noticeGivenAtISO = null,
    noticeDays = 10,
    nowISO,
    expectedTotal,
  } = args || {};

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
export function pickDashboardStatusFromRows(rows = [], config = {}) {
  const todayISO = new Date().toISOString();

  const statuses = rows.map((r) => {
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
      noticeGivenAtISO: r?.notice?.startISO ?? config?.noticeGivenAtISO ?? null,
      noticeDays: Number(r?.notice?.days ?? config?.noticeDays ?? 10),
      nowISO: todayISO,
    });
    return { ...st, monthKey: (r.periodLabel || r.dueDateISO)?.slice(0, 7) };
  });

  const unresolved = statuses
    .filter((s) => !s.hidden && !s.finalPaidAtISO && s.color)
    .sort((a, b) => (a.monthKey || "").localeCompare(b.monthKey || ""));
  if (unresolved.length) return unresolved[unresolved.length - 1];

  const now = new Date();
  const mkNow = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  const current = statuses.find((s) => s.monthKey === mkNow && !s.hidden);
  if (current) return current;

  const visible = statuses.filter((s) => !s.hidden);
  if (!visible.length) return null;
  visible.sort((a, b) => (a.monthKey || "").localeCompare(b.monthKey || ""));
  return visible[visible.length - 1];
}

// Tooltip helper for static color lookups
export function tooltipForColor(color) {
  switch (color) {
    case "green":
      return BaseTips.green;
    case "yellow":
      return BaseTips.yellow_unpaid; // generic when only color known
    case "red":
      return BaseTips.red_unpaid;
    case "black":
      return BaseTips.black_unpaid;
    case "orange":
      return BaseTips.orange_unpaid;
    default:
      return "";
  }
}

// Re-export helpers
export { addDays, fmtUSD };
