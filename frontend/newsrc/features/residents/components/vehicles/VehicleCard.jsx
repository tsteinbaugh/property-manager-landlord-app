// newsrc/features/residents/components/vehicleCard.jsx
import { useMemo } from "react";
import ui from "@shared/styles/CardLayout.module.css";
import { formatText, formatInt } from "@shared/utils/validation.js";

export default function vehicleCard({
  vehicle,
  onClick,
  variant = "summary", // "summary" | "detail"
}) {
  if (!vehicle) return null;

  const vm = useMemo(() => {
    const isArchived = !!vehicle.archivedAt;

    const year = formatInt(vehicle.year, { fallback: null });
    const make = formatText(vehicle.make, { fallback: null });
    const model = formatText(vehicle.model, { fallback: null });

    const color = formatText(vehicle.color, { fallback: null });
    const state = formatText(vehicle.state, { fallback: null });
    const parking = formatText(vehicle.parking, { fallback: null });
    const plate = formatText(vehicle.plate, { fallback: null });
    const permit = formatText(vehicle.permit, { fallback: null });
    const notes = formatText(vehicle.notes, { fallback: null });

    const displayName =
      [`${year},`, make, model].filter(Boolean).join(" ") || "Unnamed vehicle";

    const plateLine = plate && state ? `${plate} • ${state}` : null;

    return {
      isArchived,
      displayName,

      make,
      model,
      year,

      color,
      plateLine,
      permit,
      parking,
      notes,
    };
  }, [vehicle]);

  const badgeText = vm.isArchived ? "Archived" : "Vehicle";
  const badgeClass = vm.isArchived ? ui.badgeArchived : ui.badgeIdle;

  // ============================================================
  // DETAIL VARIANT (full info, non-clickable)
  // ============================================================
  if (variant === "detail") {
    const headerTitle = "Vehicle Info";

    return (
      <div className={`${ui.card} ${vm.isArchived ? ui.cardArchived : ""}`}>
        <div className={ui.cardHeader}>
          <div className={ui.cardTitle}>{headerTitle}</div>
          <span className={`${ui.badge} ${badgeClass}`}>{badgeText}</span>
        </div>

        <div className={ui.cardBody}>
          {vm.make && (<div><strong>Make: </strong>{vm.make}</div>)}
          {vm.model && (<div><strong>Model: </strong>{vm.model}</div>)}
          {vm.year && (<div><strong>Year: </strong>{vm.year}</div>)}
          {vm.color && (<div><strong>Color: </strong>{vm.color}</div>)}
          {vm.plateLine && (<div><strong>License Plate # and State: </strong>{vm.plateLine}</div>)}
          {vm.permit && (<div><strong>Permit #: </strong>{vm.permit}</div>)}
          {vm.parking && (<div><strong>Parking #: </strong>{vm.parking}</div>)}
          {vm.notes && (<div><strong>Notes: </strong>{vm.notes}</div>)}
        </div>
      </div>
    );
  }

  // ============================================================
  // SUMMARY VARIANT
  // ============================================================
  return (
    <button
      type="button"
      className={`${ui.card} ${vm.isArchived ? ui.cardArchived : ""}`}
      onClick={onClick}
      aria-label={`Open vehicle ${vm.displayName}`}
    >
      <div className={ui.cardHeader}>
        <div className={ui.cardTitle}>{vm.displayName}</div>
        <span className={`${ui.badge} ${badgeClass}`}>{badgeText}</span>
      </div>

      <div className={ui.cardBody}>
        {vm.color && (<div><strong>Color: </strong>{vm.color}</div>)}
        {vm.plateLine && (<div><strong>License Plate # and State: </strong>{vm.plateLine}</div>)}
        {vm.permit && (<div><strong>Permit #: </strong>{vm.permit}</div>)}
        {vm.parking && (<div><strong>Parking #: </strong>{vm.parking}</div>)}
        {!vm.color && !vm.plateLine && !vm.permit && !vm.parking && (
          <div>Click for more details</div>
        )}
      </div>
    </button>
  );
}
