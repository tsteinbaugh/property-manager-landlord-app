import React, { useEffect, useState } from "react";
import OccupantList from "../occupants/OccupantList.jsx";
import PetsList from "../pets/PetList.jsx";
import EmergencyContactList from "../emergencyContacts/EmergencyContactList.jsx";

const BASE_URL = "http://localhost:4000";

export default function AddTenantDependentsForm() {
  const [tenants, setTenants] = useState([]);
  const [selectedTenantId, setSelectedTenantId] = useState("");
  const [loadingTenants, setLoadingTenants] = useState(true);
  const [tenantsError, setTenantsError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadTenants() {
      try {
        setLoadingTenants(true);
        setTenantsError(null);
        const res = await fetch(`${BASE_URL}/api/tenants`);
        if (!res.ok) {
          throw new Error(`Failed to load tenants: ${res.status}`);
        }
        const json = await res.json();
        if (!cancelled) {
          const list = Array.isArray(json) ? json : [];
          setTenants(list);

          // if nothing selected yet, default to first non-archived tenant
          if (!selectedTenantId && list.length > 0) {
            const firstActive =
              list.find((t) => !t.isArchived) || list[0];
            setSelectedTenantId(firstActive.id);
          }
        }
      } catch (err) {
        console.error("Failed to load tenants for dependents form", err);
        if (!cancelled) {
          setTenantsError(err);
        }
      } finally {
        if (!cancelled) {
          setLoadingTenants(false);
        }
      }
    }

    loadTenants();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTenantChange = (e) => {
    setSelectedTenantId(e.target.value);
  };

  return (
    <div
      style={{
        marginTop: 16,
        padding: 12,
        borderRadius: 8,
        border: "1px solid #e5e7eb",
      }}
    >
      <h3 style={{ marginTop: 0, marginBottom: 8 }}>
        Tenant dependents (occupants, pets, emergency contacts)
      </h3>

      {loadingTenants && <div>Loading tenants…</div>}

      {tenantsError && (
        <div style={{ color: "crimson", marginBottom: 8, fontSize: 12 }}>
          Error loading tenants: {String(tenantsError.message || tenantsError)}
        </div>
      )}

      {tenants.length === 0 && !loadingTenants && (
        <div style={{ color: "#888", marginBottom: 8 }}>
          No tenants found. Create a tenant first to attach occupants, pets,
          and emergency contacts.
        </div>
      )}

      {tenants.length > 0 && (
        <div style={{ marginBottom: 12 }}>
          <label style={{ fontSize: 14 }}>
            Tenant:&nbsp;
            <select
              value={selectedTenantId}
              onChange={handleTenantChange}
              style={{ padding: 4, minWidth: 220 }}
            >
              <option value="">Select tenant…</option>
              {tenants.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name || "(no name)"} ({t.id.slice(0, 6)})
                </option>
              ))}
            </select>
          </label>
        </div>
      )}

      {!selectedTenantId && tenants.length > 0 && (
        <div style={{ color: "#888", marginBottom: 8 }}>
          Select a tenant above to manage their occupants, pets, and emergency
          contacts.
        </div>
      )}

      {selectedTenantId && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
            alignItems: "flex-start",
          }}
        >
          <div>
            <h4 style={{ margin: "4px 0" }}>Occupants</h4>
            <OccupantList tenantId={selectedTenantId} />
          </div>

          <div>
            <h4 style={{ margin: "4px 0" }}>Pets</h4>
            <PetsList tenantId={selectedTenantId} />
          </div>

          <div>
            <h4 style={{ margin: "4px 0" }}>Emergency contacts</h4>
            <EmergencyContactList tenantId={selectedTenantId} />
          </div>
        </div>
      )}
    </div>
  );
}
