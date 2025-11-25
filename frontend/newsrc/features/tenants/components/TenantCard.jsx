import { useMemo } from "react";
import styles from "./TenantCard.module.css";

export default function TenantCard({ tenant, onClick }) {
  if (!tenant) return null;

  const { displayName, email, phone, petsCount, occupantsCount, econtactsCount, isArchived } =
    useMemo(() => {
      const name =
        (tenant.name && tenant.name.trim()) ||
        (tenant.email && tenant.email.trim()) ||
        "Unnamed tenant";

      const pets = Array.isArray(tenant.pets) ? tenant.pets.length : 0;
      const occs = Array.isArray(tenant.occupants) ? tenant.occupants.length : 0;
      const ecs = Array.isArray(tenant.emergencyContacts)
        ? tenant.emergencyContacts.length
        : 0;

      return {
        displayName: name,
        email: tenant.email || "",
        phone: tenant.phone || "",
        petsCount: pets,
        occupantsCount: occs,
        econtactsCount: ecs,
        isArchived: !!(tenant.isArchived ?? tenant.archived),
      };
    }, [tenant]);

  return (
    <button
      type="button"
      className={`${styles.card} ${isArchived ? styles.archived : ""}`}
      onClick={onClick}
      aria-label={`Open tenant ${displayName}`}
    >
      <div className={styles.header}>
        <div className={styles.title}>{displayName}</div>

        {isArchived ? (
          <span className={`${styles.badge} ${styles.badgeArchived}`}>
            Archived
          </span>
        ) : (
          <span className={`${styles.badge} ${styles.badgeIdle}`}>
            Active tenant
          </span>
        )}
      </div>

      <div className={styles.contact}>
        {email && <span className={styles.contactLine}>{email}</span>}
        {phone && <span className={styles.contactLine}>{phone}</span>}
        {!email && !phone && (
          <span className={styles.contactLineMuted}>No contact info added yet</span>
        )}
      </div>
    </button>
  );
}
