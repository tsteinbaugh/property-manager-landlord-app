import React, { useState } from "react";
import { useEmergencyContacts } from "@features/tenants/hooks/useEmergencyContacts.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";

/**
 * Props:
 *  - tenantId
 *  - role (optional; defaults to SYSADMIN for tests/demo)
 */
export default function EmergencyContactList({ tenantId, role = ROLES.SYSADMIN }) {
  const canView    = can(role, R.TENANT_ECONTACTS, A.VIEW);
  const canCreate  = can(role, R.TENANT_ECONTACTS, A.CREATE);
  const canRemove  = can(role, R.TENANT_ECONTACTS, A.DELETE) || can(role, R.TENANT_ECONTACTS, A.ARCHIVE);

  const { data, isLoading, error, add, remove } =
    useEmergencyContacts(tenantId, { role });

  const [form, setForm] = useState({ name: "", relation: "", phone: "" });

  if (!tenantId) return <div style={{ color: "#888" }}>No tenant selected.</div>;
  if (!canView)   return <div style={{ color: "#888" }}>You don’t have permission to view emergency contacts.</div>;
  if (isLoading)  return <div>Loading emergency contacts…</div>;
  if (error)      return <div style={{ color: "crimson" }}>Error loading emergency contacts.</div>;

  return (
    <div>
      <h3 style={{ margin: "8px 0" }}>Emergency Contacts</h3>

      {data.length === 0 ? (
        <div style={{ color: "#888" }}>No emergency contacts on file.</div>
      ) : (
        <ul style={{ paddingLeft: 16, lineHeight: 1.7 }}>
          {data.map(c => (
            <li key={c.id}>
              <strong>{c.name}</strong>
              {c.relation ? ` — ${c.relation}` : ""}
              {c.phone ? ` — ${c.phone}` : ""}
              {canRemove && (
                <button style={{ marginLeft: 8 }} onClick={() => remove(c.id)}>
                  Remove
                </button>
              )}
            </li>
          ))}
        </ul>
      )}

      {canCreate && (
        <div style={{ marginTop: 12 }}>
          <div style={{ fontWeight: 600, marginBottom: 4 }}>Add emergency contact</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            <input
              placeholder="name"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            />
            <input
              placeholder="relation"
              value={form.relation}
              onChange={e => setForm(f => ({ ...f, relation: e.target.value }))}
            />
            <input
              placeholder="phone"
              value={form.phone}
              onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
            />
            <button
              onClick={async () => {
                if (!form.name.trim()) return;
                await add({ ...form });
                setForm({ name: "", relation: "", phone: "" });
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
