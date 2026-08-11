/**
 * Tax Exports API (stub)
 * Produces simple CSV/JSON for a given property + year.
 * Pulls from the expenses stub (supports maintenance + cleaning links).
 */
import { expensesApi } from "@features/expenses/api/expenses.api.js";

function toCSV(rows, headers) {
  const esc = (v) => {
    if (v == null) return "";
    const s = String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  return [
    headers.join(","),
    ...rows.map((r) => headers.map((h) => esc(r[h])).join(",")),
  ].join("\n");
}

export const taxExportsApi = {
  async exportExpensesCSV({ propertyId, year }) {
    const all = await expensesApi.listByProperty(propertyId);
    const rows = (all || []).filter((e) => (e.dateISO || "").startsWith(String(year)));

    // Include both maintenance and cleaning ticket references in CSV
    const headers = [
      "dateISO",
      "vendor",
      "category",
      "description",
      "amountCents",
      "maintenanceTicketId",
      "cleaningTicketId",
      "notes",
    ];

    const csv = toCSV(rows, headers);
    return { csv, count: rows.length };
  },

  async exportSummaryJSON({ propertyId, year }) {
    const all = await expensesApi.listByProperty(propertyId);
    const rows = (all || []).filter((e) => (e.dateISO || "").startsWith(String(year)));
    const totals = rows.reduce((acc, e) => {
      const key = e.category || "other";
      acc[key] = (acc[key] || 0) + (e.amountCents || 0);
      return acc;
    }, {});
    return { year, propertyId, totalsCents: totals, items: rows };
  },
};
