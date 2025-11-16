import React, { useState } from "react";
import { useOccupants } from "@features/tenants/hooks/useOccupants.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";

/**
 * Props:
 *  - tenantId
 *  - role (optional; defaults SYSADMIN for tests/demo)
 */
export default function OccupantList({ tenantId, role = ROLES.SYSADMIN }) {
  const canView   = can(role, R.TENANT_OCCUPANTS, A.VIEW);
  const canCreate = can(role, R.TENANT_OCCUPANTS, A.CREATE);
  const canRemove = can(role, R.TENANT_OCCUPANTS, A.DELETE) || can(role, R.TENANT_OCCUPANTS, A.ARCHIVE);

  const { data, isLoading, error, add, remove } =
    useOccupants(tenantId, { role });

  const [form, setForm] = useState({ name: "", relationship: "", age: "" });

  if (!tenantId) return <div style={{ color: "#888" }}>No tenant selected.</div>;
  if (!canView)   return <div style={{ color: "#888" }}>You don’t have permission to view occupants.</div>;
  if (isLoading)  return <div>Loading occupants…</div>;
  if (error)      return <div style={{ color: "crimson" }}>Error loading occupants.</div>;

  return (
    <div>
      <h3 style={{ margin: "8px 0" }}>Occupants</h3>

      {data.length === 0 ? (
        <div style={{ color: "#888" }}>No occupants on file.</div>
      ) : (
        <ul style={{ paddingLeft: 16, lineHeight: 1.7 }}>
          {data.map(o => (
            <li key={o.id}>
              <strong>{o.name}</strong>
              {o.relationship ? ` — ${o.relationship}` : ""}
              {o.age ? ` — ${o.age} yrs` : ""}
              {canRemove && (
                <button style={{ marginLeft: 8 }} onClick={() => remove(o.id)}>
                  Remove
                </button>
              )}
            </li>
          ))}
        </ul>
      )}

      {canCreate && (
        <div style={{ marginTop: 12 }}>
          <div style={{ fontWeight: 600, marginBottom: 4 }}>Add occupant</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            <input
              placeholder="name"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            />
            <input
              placeholder="relationship"
              value={form.relationship}
              onChange={e => setForm(f => ({ ...f, relationship: e.target.value }))}
            />
            <input
              placeholder="age"
              value={form.age}
              onChange={e => setForm(f => ({ ...f, age: e.target.value }))}
              inputMode="numeric"
            />
            <button
              onClick={async () => {
                if (!form.name.trim()) return;
                await add({ ...form, age: form.age ? Number(form.age) : undefined });
                setForm({ name: "", relationship: "", age: "" });
              }}
              disabled={!form.name.trim()}
            >
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
