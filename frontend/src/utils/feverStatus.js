// src/utils/feverStatus.js

// --- tiny local helpers (avoid circular imports) ---
function addDays(dateOrISO, n) {
  const d = typeof dateOrISO === "string" ? new Date(dateOrISO) : new Date(dateOrISO);
  const out = new Date(d.getFullYear(), d.getMonth(), d.getDate()); // local date (no TZ drift)
  out.setDate(out.getDate() + Number(n || 0));
  return out;
}
function sameDay(a, b) {
  return a.getFullYear() === b.getFullYear() &&
         a.getMonth() === b.getMonth() &&
         a.getDate() === b.getDate();
}
function fmtUSD(n) {
  const v = Number(n || 0);
  return v.toLocaleString(undefined, { style: "currency", currency: "USD" });
}

// --- FINANCIAL FEVER CORE ---
// Named export used by finance.js and others
export function resolveFeverColor({
  dueDateISO,
  payments = [],        // [{ amount, dateISO }]
  balance,              // expected - received
  lateFeeDays = 7,      // late-fee date = due + 7
  noticeDays = 10,      // 10-day notice window starts the day after late-fee
  nowISO,               // optional override; default: today
}) {
  if (!dueDateISO) return "gray";

  const due = new Date(dueDateISO);
  const now = nowISO ? new Date(nowISO) : new Date();

  const lateFeeDate = addDays(due, lateFeeDays);  // orange threshold = late-fee day
  const noticeStart = addDays(lateFeeDate, 1);    // red starts the day after late-fee
  const noticeEnd   = addDays(noticeStart, noticeDays); // black after this

  // If fully paid, color depends on when it became fully paid
  if (Number(balance) <= 0) {
    const lastISO = payments.length ? payments[payments.length - 1].dateISO : null;
    if (!lastISO) return "gray";
    const last = new Date(lastISO);

    if (last <= due) return "green";                 // on time
    if (last < lateFeeDate) return "yellow";         // after due, before late-fee day
    if (sameDay(last, lateFeeDate)) return "orange"; // on late-fee day
    if (last < noticeEnd) return "red";              // during notice window
    return "black";                                  // after notice window
  }

  // Not fully paid: compare "today" to thresholds
  if (now <= due) return "green";                // up to date
  if (now < lateFeeDate) return "yellow";        // late, before late-fee day
  if (sameDay(now, lateFeeDate)) return "orange";// late-fee day
  if (now < noticeEnd) return "red";             // within notice window
  return "black";                                // past notice → file eviction
}

// --- Dashboard helpers your PropertyList imports ---
export function getFinancialFever({
  dueDate,
  monthlyRent = 0,
  payments = [],               // [{ amount, dateISO }]
  lateFeeDays = 7,
  noticeDays = 10,
  nowISO,
}) {
  if (!dueDate || !(Number(monthlyRent) > 0)) {
    return { color: "gray", tooltip: "No financial data." };
  }
  const expected = Number(monthlyRent) || 0;
  const received = payments.reduce((s, p) => s + (Number(p.amount) || 0), 0);
  const balance = +(expected - received).toFixed(2);

  const color = resolveFeverColor({
    dueDateISO: dueDate,
    payments,
    balance,
    lateFeeDays,
    noticeDays,
    nowISO,
  });

  const tooltip = `Due ${dueDate} — ${fmtUSD(received)} of ${fmtUSD(expected)} received`;
  return { color, tooltip };
}

export function getMaintenanceFever({
  items = [],                // [{title, dueDate, tenantClaim, emergency, completed}]
  approachingDays = 14,
  nowISO,
}) {
  if (!Array.isArray(items) || items.length === 0) {
    return { color: "green", tooltip: "No open maintenance items." };
  }
  const now = nowISO ? new Date(nowISO) : new Date();

  const open = items.filter(i => !i.completed);
  if (open.some(i => i.emergency)) {
    return { color: "red", tooltip: "Emergency maintenance open." };
  }

  const overdue = open.filter(i => i.dueDate && new Date(i.dueDate) < now);
  if (overdue.length) {
    return { color: "orange", tooltip: `${overdue.length} maintenance task(s) overdue.` };
  }

  const approaching = open.filter(i => {
    if (!i.dueDate) return false;
    const due = new Date(i.dueDate);
    const soon = addDays(now, approachingDays);
    return due >= now && due <= soon;
  });
  if (approaching.length) {
    return { color: "yellow", tooltip: `${approaching.length} maintenance task(s) due soon.` };
  }

  return { color: "green", tooltip: "All maintenance up to date." };
}
