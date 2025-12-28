// newsrc/features/residents/components/vehicleCard.jsx
import { useMemo } from "react";
import ui from "@shared/styles/CardLayout.module.css";

export default function vehicleCard({ 
  vehicle, 
  onClick, 
  variant = "summary", // "summary" | "detail" 
}) {
  if (!vehicle) return null;

  const vm = useMemo(() => {
    const isArchived = !!vehicle.archivedAt;

    const year = 
      vehicle.year === null || vehicle.year === undefined || vehicle.year === ""
        ? null
        : String(vehicle.year);
    const make = vehicle.make ? String(vehicle.make).trim() : "";
    const model = vehicle.model ? String(vehicle.model).trim() : "";
    const color = vehicle.color ? String(vehicle.color).trim() : "";
    const state = vehicle.state ? String(vehicle.state).trim() : "";
    const parking = vehicle.parking ? String(vehicle.parking).trim() : "";
    const plate = vehicle.plate ? String(vehicle.plate).trim() : "";
    const permit = vehicle.permit ? String(vehicle.permit).trim() : "";
    const notes = vehicle.notes ? String(vehicle.notes).trim() : "";
    const displayName = [`${year},`, make, model].filter(Boolean).join(" ") || "Unnamed vehicle"

    return {
      isArchived,
      displayName,
      make,
      model,
      year,
      color,
      state,
      plate,
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
          <span className={`${ui.badge} ${badgeClass}`}>
            {badgeText}
          </span>
        </div>

        <div className={ui.cardBody}>
          <div><strong>Make: </strong>{vm.make}</div>
          <div><strong>Model: </strong>{vm.model}</div>
          <div><strong>Year: </strong>{vm.year}</div>

          {vm.color ? (
            <div><strong>Color: </strong>{vm.color}</div>
          ) : null}

          {vm.plate ? (
            <div><strong>License Plate # and State: </strong>{vm.plate} • {vm.state}</div>
          ) : null}

          {vm.permit ? (
            <div><strong>Permit #: </strong>{vm.permit}</div>
          ) : null}

          {vm.parking ? (
            <div><strong>Parking #: </strong>{vm.parking}</div>
          ) : null}

          {vm.notes ? (
            <div><strong>Notes: </strong>{vm.notes}</div>
          ) : null}
        </div>
      </div>
    );
  }

  // ============================================================
  // SUMMARY VARIANT (phone + email, + age if no phone/email)
  // ============================================================
  const headerTitle = vm.displayName;

  return (
    <button
      type="button"
      className={`${ui.card} ${vm.isArchived ? ui.cardArchived : ""}`}
      onClick={onClick}
      aria-label={`Open vehicle ${vm.displayName}`}
    >
      <div className={ui.cardHeader}>
        <div className={ui.cardTitle}>{headerTitle}</div>
        <span className={`${ui.badge} ${badgeClass}`}>
          {badgeText}
        </span>
      </div>

      <div className={ui.cardBody}>
        {vm.color ? (
          <div><strong>Color: </strong>{vm.color}</div>
        ) : null}
        {vm.plate && vm.state ? (
          <div><strong>License Plate # and State: </strong>{vm.plate} • {vm.state}</div>
        ) : null}
        {vm.permit ? (
          <div><strong>Permit #: </strong>{vm.permit}</div>
        ) : null}
        {vm.parking ? (
          <div><strong>Parking #: </strong>{vm.parking}</div>
        ) : null}
        {!vm.color && !vm.plate && !vm.permit && !vm.parking && !vm.state ? (
          <div>Click for more details</div>
          ) : null}
      </div>
    </button>
  );  
}
