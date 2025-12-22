// newsrc/features/residents/components/LeaseCard.jsx
import React, { useMemo } from "react";
import card from "@shared/styles/CardLayout.module.css";

function moneyLabel(n) {
  if (n === null || n === undefined || n === "") return "—";
  const num = Number(n);
  if (!Number.isFinite(num)) return "—";
  return `$${num.toLocaleString()}/mo`;
}

export default function LeaseCard({ lease, onClick }) {
  if (!lease) return null;

  const vm = useMemo(() => {
    const status = (lease.status || "").toUpperCase();
    const isArchived = !!lease.archivedAt;

    const start = lease.startDate || "—";
    const end = lease.endDate || "—";

    const base =
      (lease.propertyLabel && String(lease.propertyLabel).trim()) ||
      (lease.property?.name && String(lease.property.name).trim()) ||
      (lease.property?.address1 && String(lease.property.address1).trim()) ||
      "";

    const title = base ? `Lease for ${base}` : "Lease";

    const badgeText = isArchived
      ? "Archived"
      : status
        ? status[0] + status.slice(1).toLowerCase()
        : "Draft";

    const badgeClass = isArchived
      ? `${card.badge} ${card.badgeArchived}`
      : status === "ACTIVE"
        ? `${card.badge} ${card.badgeActive}`
        : `${card.badge} ${card.badgeIdle}`;

    return {
      isArchived,
      title,
      badgeText,
      badgeClass,
      rent: moneyLabel(lease.rentAmount),
      dates: `${start} → ${end}`,
      status: lease.status || "—",
    };
  }, [lease]);

  return (
    <button
      type="button"
      className={`${card.card} ${vm.archivedAt ? card.cardArchived : ""}`}
      onClick={onClick}
      aria-label={`Open lease ${vm.title}`}
    >
      <div className={card.cardHeader}>
        <div className={card.cardTitle}>{vm.title}</div>
        <span className={vm.badgeClass}>{vm.badgeText}</span>
      </div>

      <div className={card.cardBody}>
        <div>Rent: {vm.rent}</div>
        <div className={card.muted}>Dates: {vm.dates}</div>
      </div>
    </button>
  );
}
