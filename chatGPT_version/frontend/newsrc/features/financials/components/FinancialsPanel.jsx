import React, { useState } from "react";
import { useFinancials } from "@features/financials/hooks/useFinancials.js";

function fmt(c) { return `$${(c/100).toFixed(2)}`; }

export default function FinancialsPanel({ propertyId, leaseId, role }) {
  const { data, isLoading, error, add, remove, balanceCents } =
    useFinancials({ propertyId, leaseId, role });

  const [form, setForm] = useState({ type: "charge", description: "", amount: "" });

  if (!propertyId && !leaseId) return <div style={{ color:"#888" }}>No scope selected.</div>;
  if (isLoading) return <div>Loading financials…</div>;
  if (error) return <div style={{ color:"crimson" }}>Error loading financials.</div>;

  return (
    <div>
      <h3 style={{ margin: "8px 0" }}>Financials</h3>
      <div style={{ marginBottom: 8 }}><strong>Balance:</strong> {fmt(balanceCents)}</div>

      {data.length === 0 ? (
        <div style={{ color:"#888" }}>No entries yet.</div>
      ) : (
        <ul style={{ paddingLeft:16, lineHeight:1.7 }}>
          {data.map(e => (
            <li key={e.id}>
              {e.dateISO} — <em>{e.type}</em> — {e.description} — {fmt(e.amountCents)}
              <button style={{ marginLeft:8 }} onClick={() => remove(e.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      <div style={{ marginTop:12 }}>
        <div style={{ fontWeight:600, marginBottom:4 }}>Add entry</div>
        <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
          <select value={form.type} onChange={e=>setForm(f=>({ ...f, type:e.target.value }))}>
            <option value="charge">charge</option>
            <option value="payment">payment</option>
          </select>
          <input placeholder="description" value={form.description}
                 onChange={e=>setForm(f=>({ ...f, description:e.target.value }))}/>
          <input placeholder="amount (USD)" inputMode="decimal" value={form.amount}
                 onChange={e=>setForm(f=>({ ...f, amount:e.target.value }))}/>
          <button
            disabled={!form.description.trim() || !form.amount}
            onClick={async () => {
              const amountCents = Math.round(parseFloat(form.amount)*100);
              if (isNaN(amountCents)) return;
              await add({ ...form, amountCents, dateISO: new Date().toISOString().slice(0,10) });
              setForm({ type:"charge", description:"", amount:"" });
            }}
          >Add</button>
        </div>
      </div>
    </div>
  );
}
