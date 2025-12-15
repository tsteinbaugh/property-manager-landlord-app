// newsrc/features/residents/components/emergencyContactCard.jsx
import React from "react";
import styles from "@features/residents/components/tenants/TenantCard.module.css";

export default function EmergencyContactCard({
  emergencyContact,
  onClick,
}) {
  if (!emergencyContact) return null;

  const {
    name,
    phone,
    email,
    relation,
    archived,
    address1,
    city,
    state,
    postalCode,
    notes,
  } = emergencyContact;

  const displayName = name && name.trim() ? name.trim() : "Unnamed emergency contact";

  const hasAnyInfo =
    !!phone ||
    !!email ||
    !!address1 ||
    !!city ||
    !!state ||
    !!postalCode ||
    !!relation ||
    !!notes;

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
          {archived ? "Archived" : "Active contact"}
        </span>
      </div>

      <div className={styles.contact}>
        {phone && <span className={styles.contactLine}>Phone: {phone}</span>}
        {email && <span className={styles.contactLine}>Email: {email}</span>}

        {!hasAnyInfo && (
          <span className={styles.contactLineMuted}>No additional info yet</span>
        )}
      </div>
    </div>
  );
}
