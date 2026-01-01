// newsrc/features/residents/components/vehicleCard.jsx
import { useMemo } from "react";
import card from "@shared/styles/ui.cards.module.css";
import shared from "@shared/styles/ui.shared.module.css";
import { formatText, formatInt, formatEnumLabel } from "@shared/utils/validation.js";

export default function VehicleCard({ vehicle, onClick, variant = "summary" }) {
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
    const vehicleType = formatEnumLabel(vehicle.vehicleType);
    const vehicleSubType = formatText(vehicle.vehicleSubType, { fallback: null });

    const notes = formatText(vehicle.notes, { fallback: null });

    const displayName = [`${year},`, make, model].filter(Boolean).join(" ") || "Unnamed vehicle";
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
      vehicleType,
      vehicleSubType,
      notes,
    };
  }, [vehicle]);

  const badgeText = vm.isArchived ? "Archived" : "Vehicle";
  const badgeClass = vm.isArchived ? card.badgeArchived : card.badgeIdle;

  // ============================================================
  // DETAIL VARIANT (full info, non-clickable)
  // ============================================================
  if (variant === "detail") {
    const headerTitle = "Vehicle Info";

    return (
      <div className={`${card.card} ${card.cardForm} ${vm.isArchived ? card.cardArchived : ""}`}>
        <div className={card.cardHeader}>
          <div className={card.cardTitle}>{headerTitle}</div>
          <span className={`${card.badge} ${badgeClass}`}>{badgeText}</span>
        </div>

        <div className={card.cardBody}>
          {vm.vehicleType ? (
            <div>
              <strong>Type: </strong>
              {vm.vehicleType}
              {vm.vehicleSubType ? ` • ${vm.vehicleSubType}` : null}
            </div>
          ) : null}
          {vm.make ? (
            <div>
              <strong>Make: </strong>
              {vm.make}
            </div>
          ) : null}
          {vm.model ? (
            <div>
              <strong>Model: </strong>
              {vm.model}
            </div>
          ) : null}
          {vm.year ? (
            <div>
              <strong>Year: </strong>
              {vm.year}
            </div>
          ) : null}
          {vm.color ? (
            <div>
              <strong>Color: </strong>
              {vm.color}
            </div>
          ) : null}
          {vm.plateLine ? (
            <div>
              <strong>License Plate: </strong>
              {vm.plateLine}
            </div>
          ) : null}
          {vm.permit || vm.parking ? (
            <>
              <div>
                <strong>Parking details:</strong>
              </div>
          
              <div className={shared.indent}>
                {vm.permit ? (
                  <div>
                    Permit #: 
                    <span className={shared.muted}> {vm.permit}</span>
                  </div>
                ) : null}

                {vm.parking ? (
                  <div>
                    Parking space: 
                    <span className={shared.muted}> {vm.parking}</span>
                  </div>
                ) : null}
              </div>
            </>
          ) : null}
          {vm.notes ? (
            <div>
              <strong>Notes: </strong>
              {vm.notes}
            </div>
          ) : null}
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
      className={`${card.card} ${vm.isArchived ? card.cardArchived : ""}`}
      onClick={onClick}
      aria-label={`Open vehicle ${vm.displayName}`}
    >
      <div className={card.cardHeader}>
        <div className={card.cardTitle}>{vm.displayName}</div>
        <span className={`${card.badge} ${badgeClass}`}>{badgeText}</span>
      </div>

      <div className={card.cardBody}>
        {vm.vehicleType && vm.vehicleSubType ? (
          <div>
            <strong>Vehicle Type: </strong>
            {vm.vehicleType} • {vm.vehicleSubType}
          </div>
        ) : null}
        {vm.vehicleType && !vm.vehicleSubType ? (
          <div>
            <strong>Vehicle Type: </strong>
            {vm.vehicleType}
          </div>
        ) : null}
        {!vm.color && !vm.plateLine && !vm.permit && !vm.parking ? (
          <div>
            Click for more details
            </div>
        ) : null}
      </div>
    </button>
  );
}
