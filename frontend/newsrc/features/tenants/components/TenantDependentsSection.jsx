import React from "react";
import OccupantList from "./OccupantList.jsx";
import PetsList from "./PetList.jsx";
import EmergencyContactList from "./EmergencyContactList.jsx";

export default function TenantDependentsSection({ tenantId }) {
  if (!tenantId) return null;

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
          <OccupantList tenantId={tenantId} />
        </div>

        <div>
          <h4 style={{ margin: "4px 0" }}>Pets</h4>
          <PetsList tenantId={tenantId} />
        </div>

        <div>
          <h4 style={{ margin: "4px 0" }}>Emergency contacts</h4>
          <EmergencyContactList tenantId={tenantId} />
        </div>
      </div>
    </div>
  );
}
