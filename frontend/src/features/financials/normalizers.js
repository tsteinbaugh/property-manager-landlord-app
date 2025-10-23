export const dedupePayments = (payments = []) => {
  const seen = new Set();
  const out = [];
  for (const p of payments) {
    const key = [
      Number(p.amount), p.dateISO || "", (p.method || "").trim(), (p.note || "").trim(),
    ].join("|");
    if (!seen.has(key)) {
      seen.add(key);
      out.push({ ...p, amount: Number(p.amount) });
    }
  }
  return out;
};

export const normalizeSchedule = (rows = []) =>
  rows.map((r) => ({ ...r, payments: dedupePayments(r.payments || []) }));
