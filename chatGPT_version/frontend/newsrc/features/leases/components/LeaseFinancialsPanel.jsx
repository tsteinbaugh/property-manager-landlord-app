import React, { useState } from "react";
import { useLeaseFinancials } from "@features/leases/hooks/useLeaseFinancials.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";

function formatCurrency(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}

function buildCsv(rows) {
  const headers = ["dateISO", "type", "description", "amountCents"];
  const esc = (v) => {
    if (v == null) return "";
    const s = String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  return [
    headers.join(","),
    ...rows.map((e) => [e.dateISO, e.type, e.description, e.amountCents].map(esc).join(",")),
  ].join("\n");
}

export default function LeaseFinancialsPanel({ leaseId, role = ROLES.SYSADMIN }) {
  const { data, isLoading, error, add, remove, balanceCents } = useLeaseFinancials(leaseId);
  const [form, setForm] = useState({ type: "charge", description: "", amount: "" });
  const [csvText, setCsvText] = useState("");

  const canView = can(role, R.LEASE_FINANCIALS, A.VIEW);
  const canUpdate = can(role, R.LEASE_FINANCIALS, A.UPDATE);
  const canExport = can(role, R.LEASE_FINANCIALS, A.EXPORT);

  if (!leaseId) return <div style={{ color: "#888" }}>No lease selected.</div>;
  if (isLoading) return <div>Loading lease financials…</div>;
  if (error) return <div style={{ color: "crimson" }}>Error loading lease financials.</div>;
  if (!canView) return <div style={{ color: "#888" }}>You don’t have permission to view lease financials.</div>;

  return (
    <div>
      <h3 style={{ margin: "8px 0" }}>Lease Financials</h3>

      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
        <div><strong>Balance:</strong> {formatCurrency(balanceCents)}</div>

        {canExport && (
          <button
            onClick={async () => {
              const csv = buildCsv(data);
              setCsvText(csv);
              try {
                if (navigator?.clipboard?.writeText) {
                  await navigator.clipboard.writeText(csv);
                }
              } catch {
                /* clipboard may be unavailable in test/node */
              }
            }}
            title="Export visible ledger to CSV"
          >
            Export CSV
          </button>
        )}
      </div>

      {csvText && (
        <div style={{ marginBottom: 8 }}>
          <div style={{ color: "#666", marginBottom: 4 }}>
            CSV rows: {csvText.split("\n").length - 1 /* minus header */}
          </div>
          <textarea readOnly rows={8} style={{ width: "100%" }} value={csvText} />
        </div>
      )}

      {data.length === 0 ? (
        <div style={{ color: "#888" }}>No ledger entries yet.</div>
      ) : (
        <ul style={{ paddingLeft: 16, lineHeight: 1.7 }}>
          {data.map((e) => (
            <li key={e.id}>
              {e.dateISO} — <em>{e.type}</em> — {e.description} — {formatCurrency(e.amountCents)}
              {canUpdate && (
                <button style={{ marginLeft: 8 }} onClick={() => remove(e.id)}>
                  Remove
                </button>
              )}
            </li>
          ))}
        </ul>
      )}

      <div style={{ marginTop: 12 }}>
        <div style={{ fontWeight: 600, marginBottom: 4 }}>Add entry</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <select
            value={form.type}
            onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}
            disabled={!canUpdate}
          >
            <option value="charge">charge</option>
            <option value="payment">payment</option>
          </select>
          <input
            placeholder="description"
            value={form.description}
            onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
            disabled={!canUpdate}
          />
          <input
            placeholder="amount (USD)"
            value={form.amount}
            onChange={(e) => setForm((f) => ({ ...f, amount: e.target.value }))}
            inputMode="decimal"
            disabled={!canUpdate}
          />
          <button
            disabled={!canUpdate || !form.description.trim() || !form.amount}
            onClick={async () => {
              const amountCents = Math.round(parseFloat(form.amount) * 100);
              if (isNaN(amountCents)) return;
              await add({ ...form, amountCents, dateISO: new Date().toISOString().slice(0, 10) });
              setForm({ type: "charge", description: "", amount: "" });
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
