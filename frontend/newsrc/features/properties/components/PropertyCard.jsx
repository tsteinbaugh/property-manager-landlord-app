// newsrc/features/properties/components/PropertyCard.jsx
import { useMemo } from "react";
import card from "@shared/styles/ui.cards.module.css";
import shared from "@shared/styles/ui.shared.module.css";
import { formatText, formatInt } from "@shared/utils/validation.js";

export default function PropertyCard({ property, onClick, variant = "summary" }) {
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

    const addressBlock = (
      <>
        <div>
          <strong>Address:</strong>
        </div>
        <div className={shared.indent}>
          <div>
            {street ? <div>{street}</div> : null}
            {cityStateZip ? <div className={shared.muted}>{cityStateZip}</div> : null}
          </div>
        </div>
      </>
    ); 

    const displayName = name || (street) || "Unnamed property";

    const bedrooms = formatInt(property.bedrooms, { fallback: null });
    const bathrooms = formatInt(property.bathrooms, { fallback: null });
    const size = formatInt(property.sqft, { fallback: null });
    const yearBuilt = formatInt(property.yearBuilt, { fallback: null });

    const notes = formatText(property.notes, { fallback: null });


    return {
      isArchived,
      displayName,
      street,
      cityStateZip,
      addressBlock,
      bedrooms,
      bathrooms,
      size,
      yearBuilt,
      notes,
    };
  }, [property]);

  const badgeText = vm.isArchived ? "Archived" : "Property";
  const badgeClass = vm.isArchived ? card.badgeArchived : card.badgeIdle;

  // ============================================================
  // DETAIL VARIANT (full info, non-clickable)
  // ============================================================
  if (variant === "detail") {
    const headerTitle = "Property Info";

    return (
      <div className={`${card.card} ${vm.isArchived ? card.cardArchived : ""}`}>
        <div className={card.cardHeader}>
          <div className={card.cardTitle}>{headerTitle}</div>
          <span className={`${card.badge} ${badgeClass}`}>{badgeText}</span>
        </div>

        <div className={card.cardBody}>
          {vm.addressBlock ? (
            <div>{vm.addressBlock}</div>
          ) : null}
          {vm.bedrooms ? (
            <div>
              <strong>Bedrooms: </strong>
             {vm.bedrooms}
            </div>
          ) : null}
          {vm.bathrooms ? (
            <div>
              <strong>Bathrooms: </strong>
              {vm.bathrooms}
            </div>
          ) : null}
          {vm.size ? (
            <div>
              <strong>Size: </strong>
              {vm.size} square feet
            </div>
          ) : null}
          {vm.yearBuilt ? (
            <div>
              <strong>Year Built: </strong>
              {vm.yearBuilt}
            </div>
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
  // SUMMARY VARIANT (address only)
  // ============================================================
  return (
    <button
      type="button"
      className={`${card.card} ${vm.isArchived ? card.cardArchived : ""}`}
      onClick={onClick}
      aria-label={`Open property ${vm.displayName}`}
    >
      <div className={card.cardHeader}>
        <div className={card.cardTitle}>{vm.displayName}</div>
        <span className={`${card.badge} ${badgeClass}`}>{badgeText}</span>
      </div>

      <div className={card.cardBody}>
        {vm.addressBlock ? (
          <div>{vm.addressBlock}</div>
        ) :
          <div>Click for more details</div>
        }
      </div>
    </button>
  );
}
