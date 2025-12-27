// newsrc/features/properties/components/PropertyCard.jsx
import { useMemo } from "react";
import ui from "@shared/styles/CardLayout.module.css";

export default function PropertyCard({ 
  property, 
  onClick,
  variant = "summary", // "summary" | "detail" 
 }) {

  if (!property) return null;

  const vm = useMemo(() => {
    const isArchived = !!property.archivedAt;
    
    const name =
      (property.name && String(property.name).trim()) ||
      "";    

    const street =
      (property.address1 && String(property.address1).trim()) ||
      "";

    const city =
      (property.city && String(property.city).trim()) ||
      "";

    const state =
      (property.state && String(property.state).trim()) ||
      "";

    const postalCode =
      (property.postalCode && String(property.postalCode).trim()) ||
      "";

    const displayName =
      (property.name && property.name.trim()) ||
      (street && street.trim())
      (city && city.trim())
      (state && state.trim())
      (postalCode && postalCode.trim()) ||
      "Unnamed property";

    const bedrooms = 
      property.bedrooms === null || property.bedrooms === undefined || property.bedrooms === ""
        ? null
        : String(property.bedrooms);

    const bathrooms = 
      property.bathrooms === null || property.bathrooms === undefined || property.bathrooms === ""
        ? null
        : String(property.bathrooms);
        
    const sqft = 
      property.sqft === null || property.sqft === undefined || property.sqft === ""
        ? null
        : String(property.sqft);
        
    const yearBuilt = 
      property.yearBuilt === null || property.yearBuilt === undefined || property.yearBuilt === ""
        ? null
        : String(property.yearBuilt);
        
    const notes = property.notes ? String(property.notes).trim() : "";        

    return {
      isArchived,
      name,
      displayName,
      street,
      city,
      state,
      postalCode,
      bedrooms,
      bathrooms,
      sqft,
      yearBuilt,
      notes,
    };
  }, [property]);

  const badgeText = vm.isArchived ? "Archived" : "Property";
  const badgeClass = vm.isArchived ? ui.badgeArchived : ui.badgeIdle;

  // ============================================================
  // DETAIL VARIANT (full info, non-clickable)
  // ============================================================
  if (variant === "detail") {
    const headerTitle = "Property Info";

    return (
      <div className={`${ui.card} ${vm.isArchived ? ui.cardArchived : ""}`}>
        <div className={ui.cardHeader}>
          <div className={ui.cardTitle}>{headerTitle}</div>
          <span className={`${ui.badge} ${badgeClass}`}>
            {badgeText}
          </span>
        </div>

        <div className={ui.cardBody}>
          <div><strong>Address:</strong></div>
          <div className={ui.indent}>
            <div>
              {vm.street || "—"}
              {vm.city && vm.state && vm.postalCode ? <div className={ui.muted}>{vm.city}, {vm.state} {vm.postalCode}</div> : null}
            </div>
          </div>
          {vm.bedrooms ? <div><strong>Bedrooms: </strong>{vm.bedrooms}</div> : null}
          {vm.bathrooms ? <div><strong>Bathrooms: </strong>{vm.bathrooms}</div> : null}
          {vm.sqft ? <div><strong>Size: </strong>{vm.sqft} square feet</div> : null}
          {vm.yearBuilt ? <div><strong>Year Built: </strong>{vm.yearBuilt}</div> : null}
          {vm.notes ? <div><strong>Notes: </strong>{vm.notes}</div> : null}          
        </div>
      </div>
    );
  }

  // ============================================================
  // SUMMARY VARIANT (phone + email only)
  // ============================================================
  const headerTitle = vm.displayName;

  return (
    <button
      type="button"
      className={`${ui.card} ${vm.isArchived ? ui.cardArchived : ""}`}
      onClick={onClick}
      aria-label={`Open property ${vm.displayName}`}
    >
      <div className={ui.cardHeader}>
        <div className={ui.cardTitle}>{headerTitle}</div>
        <span className={`${ui.badge} ${badgeClass}`}>
          {vm.isArchived ? "Archived" : "Property"}
        </span>
      </div>

      <div className={ui.cardBody}>
        <div><strong>Address:</strong></div>
        <div className={ui.indent}>
          <div>
            {vm.street || "—"}
            {vm.city && vm.state && vm.postalCode ? <div className={ui.muted}>{vm.city}, {vm.state} {vm.postalCode}</div> : null}
          </div>
        </div>
      </div>
    </button>
  );
}
