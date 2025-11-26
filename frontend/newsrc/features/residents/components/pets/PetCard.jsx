// newsrc/features/residents/components/petCard.jsx
import React from "react";
import styles from "@features/residents/components/tenants/TenantCard.module.css";

export default function petCard({ pet, onClick, onToggleArchive }) {
  if (!pet) return null;

  const {
    name,
    type,
    breed,
    weightLb,
    archived,
    tenantName,
  } = pet;

  const displayName = name && name.trim() ? name.trim() : "Unnamed pet";

  return (
    <div
      className={`${styles.card} ${archived ? styles.archived : ""}`}
      style={{ cursor: "pointer" }}
      onClick={onClick}
      aria-label={`Open pet ${displayName}`}
    >
      <div className={styles.header}>
        <div className={styles.title}>{displayName}</div>

        <span
          className={`${styles.badge} ${
            archived ? styles.badgeArchived : styles.badgeIdle
          }`}
        >
          {archived ? "Archived" : "Active resident"}
        </span>
      </div>

      <div className={styles.contact}>
        {type && (
          <span className={styles.contactLine}>
            Type: {type}
          </span>
        )}
        {breed && (
          <span className={styles.contactLine}>
            Breed: {breed}
          </span>
        )}
        {weightLb && (
          <span className={styles.contactLine}>
            Weight (lbs): {weightLb}
          </span>
        )}
        {tenantName && (
          <span className={styles.contactLine}>
            Tenant: {tenantName}
          </span>
        )}
        {!type && !breed && !weightLb && !tenantName && (
          <span className={styles.contactLineMuted}>
            No additional info yet
          </span>
        )}
      </div>

    </div>
  );
}
