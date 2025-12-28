// newsrc/features/properties/components/PropertyCard.jsx
import { useMemo } from "react";
import ui from "@shared/styles/CardLayout.module.css";
import { formatText, formatInt } from "@shared/utils/validation.js";

export default function PropertyCard({
  property,
  onClick,
  variant = "summary", // "summary" | "detail"
}) {
  if (!property) return null;

  const vm = useMemo(() => {
    const isArchived = !!property.archivedAt;

    const name = formatText(property.name, { fallback: null });

    const street = formatText(property.address1, { fallback: null });
    const city = formatText(property.city, { fallback: null });
    const state = formatText(property.state, { fallback: null });
    const postalCode = formatText(property.postalCode, { fallback: null });

    const cityStateZip =
      city && state && postalCode ? `${city}, ${state} ${postalCode}` : null;

    const displayName =
      name ||
      (street && cityStateZip ? `${street}, ${cityStateZip}` : null) ||
      "Unnamed property";

    return {
      isArchived,
      displayName,

      street,
      cityStateZip,

      bedrooms: formatInt(property.bedrooms, { fallback: null }),
      bathrooms: formatInt(property.bathrooms, { fallback: null }),
      sqft: formatInt(property.sqft, { fallback: null }),
      yearBuilt: formatInt(property.yearBuilt, { fallback: null }),

      notes: formatText(property.notes, { fallback: null }),
    };
  }, [property]);

  const badgeText = vm.isArchived ? "Archived" : "Property";
  const badgeClass = vm.isArchived ? ui.badgeArchived : ui.badgeIdle;

  const AddressBlock = (
    <>
      <div>
        <strong>Address:</strong>
      </div>
      <div className={ui.indent}>
        <div>
          {vm.street || null}
          {vm.cityStateZip && <div className={ui.muted}>{vm.cityStateZip}</div>}
        </div>
      </div>
    </>
  );

  // ============================================================
  // DETAIL VARIANT (full info, non-clickable)
  // ============================================================
  if (variant === "detail") {
    const headerTitle = "Property Info";

    return (
      <div className={`${ui.card} ${vm.isArchived ? ui.cardArchived : ""}`}>
        <div className={ui.cardHeader}>
          <div className={ui.cardTitle}>{headerTitle}</div>
          <span className={`${ui.badge} ${badgeClass}`}>{badgeText}</span>
        </div>

        <div className={ui.cardBody}>
          {AddressBlock}

          {vm.bedrooms && (<div><strong>Bedrooms: </strong>{vm.bedrooms}</div>)}
          {vm.bathrooms && (<div><strong>Bathrooms: </strong>{vm.bathrooms}</div>)}
          {vm.sqft && (<div><strong>Size: </strong>{vm.sqft} square feet</div>)} 
          {vm.yearBuilt && (<div><strong>Year Built: </strong>{vm.yearBuilt}</div>)}
          {vm.notes && (<div><strong>Notes: </strong>{vm.notes}</div>)}
        </div>
      </div>
    );
  }

  // ============================================================
  // SUMMARY VARIANT (address only)
  // ============================================================
  return (
    <button
      type="button"
      className={`${ui.card} ${vm.isArchived ? ui.cardArchived : ""}`}
      onClick={onClick}
      aria-label={`Open property ${vm.displayName}`}
    >
      <div className={ui.cardHeader}>
        <div className={ui.cardTitle}>{vm.displayName}</div>
        <span className={`${ui.badge} ${badgeClass}`}>{badgeText}</span>
      </div>

      <div className={ui.cardBody}>{AddressBlock}

        {!AddressBlock && (
          <div>Click for more details</div>
        )}
      </div>
    </button>
  );
}
