// newsrc/features/residents/components/vehicleCard.jsx
import React from "react";
import styles from "@shared/styles/CardLayout.module.css";

export default function vehicleCard({ vehicle, onClick, onToggleArchive }) {
  if (!vehicle) return null;

  const {
    make,
    model,
    year,
    color,
    state,
    plate,
    permit,
    archived,
    tenantName,
  } = vehicle;

  const displayName = name && name.trim() ? name.trim() : "Unnamed vehicle";

  return (
    <div
      className={`${styles.card} ${archived ? styles.archived : ""}`}
      style={{ cursor: "pointer" }}
      onClick={onClick}
      aria-label={`Open vehicle ${displayName}`}
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
        {make && (
          <span className={styles.contactLine}>
            Make: {make}
          </span>
        )}
        {model && (
          <span className={styles.contactLine}>
            Model: {model}
          </span>
        )}
        {year && (
          <span className={styles.contactLine}>
            Year: {year}
          </span>
        )}
        {color && (
          <span className={styles.contactLine}>
            Color: {color}
          </span>
        )}
        {state && (
          <span className={styles.contactLine}>
            State: {state}
          </span>
        )}
        {plate && (
          <span className={styles.contactLine}>
            License Plate: {plate}
          </span>
        )}
        {permit && (
          <span className={styles.contactLine}>
            Permit #: {permit}
          </span>
        )}
        {tenantName && (
          <span className={styles.contactLine}>
            Tenant: {tenantName}
          </span>
        )}
        {!make && !model && !year && !color && !state && !plate && !permit && !tenantName && (
          <span className={styles.contactLineMuted}>
            No additional info yet
          </span>
        )}
      </div>

    </div>
  );
}
