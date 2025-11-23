import { useMemo } from "react";
import styles from "./PropertyCard.module.css";

export default function PropertyCard({ property, onClick }) {
  if (!property) return null;

  const {
    displayName,
    street,
    city,
    state,
    postalCode,
    activeLease,
    tenantCount,
  } = useMemo(() => {
    const addr = property.address || {};
    const lease = property.activeLease || null;
  
    const displayName =
      (property.name && property.name.trim()) ||
      (property.nickname && property.nickname.trim()) ||
      (addr.street && addr.street.trim()) ||
      "Unnamed property";
  
    return {
      displayName,
      street: addr.street || "",
      city: addr.city || "",
      state: addr.state || "",
      postalCode: addr.postalCode || "",
      activeLease: lease,
      tenantCount: property.tenantCount ?? (property.tenants?.length || 0),
    };
  }, [property]);

  return (
    <button
      type="button"
      className={styles.card}
      onClick={onClick}
      aria-label={`Open property ${displayName}`}
    >
      <div className={styles.header}>
        <div className={styles.title}>{displayName}</div>
        {activeLease ? (
          <span className={`${styles.badge} ${styles.badgeActive}`}>
            Active lease
          </span>
        ) : (
          <span className={`${styles.badge} ${styles.badgeIdle}`}>
            No active lease
          </span>
        )}
      </div>

      <div className={styles.address}>
        <span>{street}</span>
        {(city || state || postalCode) && (
          <span className={styles.addressLine2}>
            {[city, state, postalCode].filter(Boolean).join(", ")}
          </span>
        )}
      </div>

      <div className={styles.metaRow}>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Tenants</span>
          <span className={styles.metaValue}>{tenantCount}</span>
        </div>
        {activeLease && (
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Rent</span>
            <span className={styles.metaValue}>
              ${activeLease.rentAmount?.toLocaleString?.() ?? "—"}/mo
            </span>
          </div>
        )}
      </div>

      {activeLease && (
        <div className={styles.footer}>
          <span className={styles.metaLabel}>Lease</span>
          <span className={styles.footerValue}>
            {activeLease.startDate} → {activeLease.endDate}
          </span>
        </div>
      )}
    </button>
  );
}
