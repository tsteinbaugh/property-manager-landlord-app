// newsrc/features/residents/components/emergencyContactCard.jsx
import React from "react";
import styles from "@features/residents/components/tenants/TenantCard.module.css";

export default function emergencyContactCard({ emergencyContact, onClick, onToggleArchive }) {
  if (!emergencyContact) return null;

  const {
    name,
    phone,
    relation,
    email,
    archived,
    tenantName,
  } = emergencyContact;

  const displayName = name && name.trim() ? name.trim() : "Unnamed emergency contact";

  return (
    <div
      className={`${styles.card} ${archived ? styles.archived : ""}`}
      style={{ cursor: "pointer" }}
      onClick={onClick}
      aria-label={`Open emergency contact ${displayName}`}
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
        {phone && (
          <span className={styles.contactLine}>
            Phone: {phone}
          </span>
        )}
        {relation && (
          <span className={styles.contactLine}>
            Relation: {relation}
          </span>
        )}
        {email && (
          <span className={styles.contactLine}>
            Email: {email}
          </span>
        )}
        {tenantName && (
          <span className={styles.contactLine}>
            Tenant: {tenantName}
          </span>
        )}
        {!phone && !relation && !email && !tenantName && (
          <span className={styles.contactLineMuted}>
            No additional info yet
          </span>
        )}
      </div>

    </div>
  );
}
