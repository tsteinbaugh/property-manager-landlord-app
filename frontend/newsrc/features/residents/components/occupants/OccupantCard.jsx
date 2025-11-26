// newsrc/features/residents/components/OccupantCard.jsx
import React from "react";
import styles from "@features/residents/components/tenants/TenantCard.module.css";

/**
 * OccupantCard
 * Props:
 *   - occupant: {
 *       id, name, relation, archived,
 *       tenantId, tenantName
 *     }
 *   - onClick: () => void          (open details)
 *   - onToggleArchive: () => void  (archive/unarchive)
 */
export default function OccupantCard({ occupant, onClick, onToggleArchive }) {
  if (!occupant) return null;

  const {
    name,
    relation,
    archived,
    tenantName,
  } = occupant;

  const displayName = name && name.trim() ? name.trim() : "Unnamed occupant";

  return (
    <div
      className={`${styles.card} ${archived ? styles.archived : ""}`}
      style={{ cursor: "pointer" }}
      onClick={onClick}
      aria-label={`Open occupant ${displayName}`}
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
        {relation && (
          <span className={styles.contactLine}>
            Relation: {relation}
          </span>
        )}
        {tenantName && (
          <span className={styles.contactLine}>
            Tenant: {tenantName}
          </span>
        )}
        {!relation && !tenantName && (
          <span className={styles.contactLineMuted}>
            No additional info yet
          </span>
        )}
      </div>

    </div>
  );
}
