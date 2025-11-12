import React, { useState } from "react";
import { usePets } from "@features/tenants/hooks/usePets.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";

/**
 * Props:
 *  - tenantId
 *  - role (optional; defaults to SYSADMIN for tests/demo)
 */
export default function PetList({ tenantId, role = ROLES.SYSADMIN }) {
  const canView    = can(role, R.TENANT_PETS, A.VIEW);
  const canCreate  = can(role, R.TENANT_PETS, A.CREATE);
  const canRemove  = can(role, R.TENANT_PETS, A.DELETE) || can(role, R.TENANT_PETS, A.ARCHIVE);

  const { data, isLoading, error, add, remove } =
    usePets(tenantId, { role });

  const [form, setForm] = useState({ name: "", species: "", breed: "", weightLbs: "" });

  if (!tenantId) return <div style={{ color: "#888" }}>No tenant selected.</div>;
  if (!canView)   return <div style={{ color: "#888" }}>You don’t have permission to view pets.</div>;
  if (isLoading)  return <div>Loading pets…</div>;
  if (error)      return <div style={{ color: "crimson" }}>Error loading pets.</div>;

  return (
    <div>
      <h3 style={{ margin: "8px 0" }}>Pets</h3>

      {data.length === 0 ? (
        <div style={{ color: "#888" }}>No pets on file.</div>
      ) : (
        <ul style={{ paddingLeft: 16, lineHeight: 1.7 }}>
          {data.map(p => (
            <li key={p.id}>
              <strong>{p.name}</strong>
              {p.species ? ` — ${p.species}` : ""}
              {p.breed ? ` (${p.breed})` : ""}
              {p.weightLbs ? ` — ${p.weightLbs} lbs` : ""}
              {canRemove && (
                <button style={{ marginLeft: 8 }} onClick={() => remove(p.id)}>
                  Remove
                </button>
              )}
            </li>
          ))}
        </ul>
      )}

      {canCreate && (
        <div style={{ marginTop: 12 }}>
          <div style={{ fontWeight: 600, marginBottom: 4 }}>Add pet</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            <input
              placeholder="name"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            />
            <input
              placeholder="species"
              value={form.species}
              onChange={e => setForm(f => ({ ...f, species: e.target.value }))}
            />
            <input
              placeholder="breed"
              value={form.breed}
              onChange={e => setForm(f => ({ ...f, breed: e.target.value }))}
            />
            <input
              placeholder="weight (lbs)"
              value={form.weightLbs}
              onChange={e => setForm(f => ({ ...f, weightLbs: e.target.value }))}
              inputMode="numeric"
            />
            <button
              onClick={async () => {
                if (!form.name.trim()) return;
                await add({
                  ...form,
                  weightLbs: form.weightLbs ? Number(form.weightLbs) : undefined
                });
                setForm({ name: "", species: "", breed: "", weightLbs: "" });
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
