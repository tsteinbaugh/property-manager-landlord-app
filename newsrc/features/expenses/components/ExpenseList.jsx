import React from "react";
import { useExpenses } from "@features/expenses/hooks/useExpenses.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";

function fmtMoney(cents) {
  if (cents == null) return "";
  return `$${(cents / 100).toFixed(2)}`;
}

export default function ExpenseList({ propertyId, role = ROLES.SYSADMIN }) {
  const { data, isLoading, error } = useExpenses({ propertyId, role });

  if (!propertyId) return <div style={{ color: "#888" }}>No property selected.</div>;
  if (!can(role, R.EXPENSES, A.VIEW)) {
    return (
      <div>
        <h3 style={{ margin: "8px 0" }}>Expenses</h3>
        <div style={{ color: "#888" }}>Insufficient permissions to view expenses.</div>
      </div>
    );
  }
  if (isLoading) return <div>Loading expenses…</div>;
  if (error && error.message !== "forbidden") {
    return <div style={{ color: "crimson" }}>Error loading expenses.</div>;
  }
  if (!data.length) return <div style={{ color: "#888" }}>No expenses recorded.</div>;

  return (
    <div>
      <h3 style={{ margin: "8px 0" }}>Expenses</h3>
      <ul style={{ paddingLeft: 16, lineHeight: 1.7 }}>
        {data.map((e) => {
          const links = [];
          if (e.maintenanceTicketId) links.push(`maintenance ticket ${e.maintenanceTicketId}`);
          if (e.cleaningTicketId) links.push(`cleaning ticket ${e.cleaningTicketId}`);
          const linkText = links.length ? ` (${links.join(", ")})` : "";

          return (
            <li key={e.id}>
              <strong>{e.vendor || e.category || "Expense"}</strong>
              {e.description ? ` — ${e.description}` : ""}
              {e.dateISO ? ` — ${e.dateISO}` : ""} — {fmtMoney(e.amountCents)}
              {linkText}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
