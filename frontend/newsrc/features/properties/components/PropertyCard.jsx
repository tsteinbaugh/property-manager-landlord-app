// newsrc/features/properties/components/PropertyCard.jsx
import { useMemo } from "react";
import card from "@shared/styles/CardLayout.module.css";

function moneyLabel(n) {
  if (n === null || n === undefined || n === "") return "—";
  const num = Number(n);
  if (!Number.isFinite(num)) return "—";
  return `$${num.toLocaleString()}/mo`;
}

export default function PropertyCard({ property, onClick }) {
  if (!property) return null;

  const {
    displayName,
    line1,
    line2,
    activeLease,
    tenantCount,
    rentLabel,
    leaseDates,
    isArchived,
  } = useMemo(() => {
    const isArchived = !!(property.isArchived ?? property.archived);

    // Support BOTH shapes:
    // - old: property.address = { street, city, state, postalCode }
    // - new (your api mapper): property.address1, city, state, postalCode
    const addrObj = property.address && typeof property.address === "object" ? property.address : null;

    const street =
      (addrObj?.street && String(addrObj.street).trim()) ||
      (property.address1 && String(property.address1).trim()) ||
      "";

    const city =
      (addrObj?.city && String(addrObj.city).trim()) ||
      (property.city && String(property.city).trim()) ||
      "";

    const state =
      (addrObj?.state && String(addrObj.state).trim()) ||
      (property.state && String(property.state).trim()) ||
      "";

    const postalCode =
      (addrObj?.postalCode && String(addrObj.postalCode).trim()) ||
      (property.postalCode && String(property.postalCode).trim()) ||
      "";

    const activeLease = property.activeLease || null;

    const displayName =
      (property.name && property.name.trim()) ||
      (property.nickname && property.nickname.trim()) ||
      (street && street.trim()) ||
      "Unnamed property";

    const tenantCount = property.tenantCount ?? (Array.isArray(property.tenants) ? property.tenants.length : 0);

    const rentLabel = activeLease ? moneyLabel(activeLease.rentAmount) : null;

    const leaseDates =
      activeLease && (activeLease.startDate || activeLease.endDate)
        ? `${activeLease.startDate || "—"} → ${activeLease.endDate || "—"}`
        : null;

    const line1 = street || "—";
    const line2 = [city, state, postalCode].filter(Boolean).join(", ");

    return {
      displayName,
      line1,
      line2,
      activeLease,
      tenantCount,
      rentLabel,
      leaseDates,
      isArchived,
    };
  }, [property]);

  const badgeClass = isArchived
    ? `${card.badge} ${card.badgeArchived}`
    : activeLease
      ? `${card.badge} ${card.badgeActive}`
      : `${card.badge} ${card.badgeIdle}`;

  const badgeText = isArchived ? "Archived" : activeLease ? "Active lease" : "No active lease";

  return (
    <button
      type="button"
      className={`${card.card} ${isArchived ? card.cardArchived : ""}`}
      onClick={onClick}
      aria-label={`Open property ${displayName}`}
    >
      <div className={card.cardHeader}>
        <div className={card.cardTitle}>{displayName}</div>
        <span className={badgeClass}>{badgeText}</span>
      </div>

      <div className={card.cardBody}>
        <div>{line1}</div>
        {line2 ? <div className={card.muted}>{line2}</div> : null}

      </div>
    </button>
  );
}
