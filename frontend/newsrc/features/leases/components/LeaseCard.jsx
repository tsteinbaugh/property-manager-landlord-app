// newsrc/features/residents/components/LeaseCard.jsx
import React from "react";
import styles from "@features/residents/components/tenants/TenantCard.module.css";

export default function LeaseCard({ lease, onClick, onToggleArchive }) {
  if (!lease) return null;

  const {
    rentAmount,
    status,
    startDate,
    endDate,
  } = lease;

  const displayName = "Unnamed lease";

  return (
    <div
      className={`${styles.card} ${archived ? styles.archived : ""}`}
      style={{ cursor: "pointer" }}
      onClick={onClick}
      aria-label={`Open lease ${displayName}`}
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
        {rentAmount && (
          <span className={styles.contactLine}>
            Rent Amount: {rentAmount}
          </span>
        )}
        {status && (
          <span className={styles.contactLine}>
            Status: {status}
          </span>
        )}
        {startDate && (
          <span className={styles.contactLine}>
            Start Date: {startDate}
          </span>
        )}
        {endDate && (
          <span className={styles.contactLine}>
            End Date: {endDate}
          </span>
        )}
        {tenantName && (
          <span className={styles.contactLine}>
            Tenant: {tenantName}
          </span>
        )}
        {!rentAmount && status && startDate && endDate && !tenantName && (
          <span className={styles.contactLineMuted}>
            No additional info yet
          </span>
        )}
      </div>

    </div>
  );
}
