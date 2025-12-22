// newsrc/features/residents/components/tenants/TenantCard.jsx
import { useMemo } from "react";
import ui from "@shared/styles/CardLayout.module.css";

export default function TenantCard({ tenant, onClick }) {
  if (!tenant) return null;

  const { displayName, email, phone, petsCount, occupantsCount, emergencyContactsCount, isArchived } =
    useMemo(() => {
      const name =
        (tenant.name && tenant.name.trim()) ||
        (tenant.email && tenant.email.trim()) ||
        "Unnamed tenant";

      const pets = Array.isArray(tenant.pets) ? tenant.pets.length : 0;
      const occs = Array.isArray(tenant.occupants) ? tenant.occupants.length : 0;
      const ecs = Array.isArray(tenant.emergencyContacts) ? tenant.emergencyContacts.length : 0;

      return {
        displayName: name,
        email: tenant.email || "",
        phone: tenant.phone || "",
        petsCount: pets,
        occupantsCount: occs,
        emergencyContactsCount: ecs,
        isArchived: !!tenant.archivedAt,
      };
    }, [tenant]);

  return (
    <button
      type="button"
      className={`${ui.card} ${isArchived ? ui.cardArchived : ""}`}
      onClick={onClick}
      aria-label={`Open tenant ${displayName}`}
    >
      <div className={ui.cardHeader}>
        <div className={ui.cardTitle}>{displayName}</div>

        {isArchived ? (
          <span className={`${ui.badge} ${ui.badgeArchived}`}>Archived</span>
        ) : (
          <span className={`${ui.badge} ${ui.badgeIdle}`}>Tenant</span>
        )}
      </div>

      <div className={ui.cardBody}>
        {email ? <div>{email}</div> : null}
        {phone ? <div>{phone}</div> : null}
        {!email && !phone ? <div className={ui.muted}>No contact info added yet</div> : null}

      </div>
    </button>
  );
}
