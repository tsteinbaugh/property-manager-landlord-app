//frontend/newsrc/features/residents/components/OccupantCard.jsx
import { useMemo } from "react";
import ui from "@shared/styles/CardLayout.module.css";
import {
  formatText,
  formatInt,
  formatEnumLabel,
  formatHeightFeetInches,
  formatWeight,
  formatPhoneRaw,
  formatEmail,
} from "@shared/utils/validation.js";

export default function OccupantCard({
  occupant,
  onClick,
  variant = "summary", // "summary" | "detail"
}) {
  if (!occupant) return null;

  const vm = useMemo(() => {
    const isArchived = !!occupant.archivedAt;

    const displayName = formatText(occupant.name, { fallback: "Unnamed occupant" });

    return {
      isArchived,
      displayName,

      phone: formatPhoneRaw(occupant.phone, { fallback: null}),
      email: formatEmail(occupant.email, { fallback: null}),

      relation: formatText(occupant.relation, { fallback: null }),
      age: formatInt(occupant.age, { fallback: null }),

      height: formatHeightFeetInches(occupant.heightFeet, occupant.heightInches, { fallback: null }),
      weight: formatWeight(occupant.weight, { fallback: null }),

      sex: formatEnumLabel(occupant.sex),
      hairColor: formatEnumLabel(occupant.hairColor),
      eyeColor: formatEnumLabel(occupant.eyeColor),
      bodyBuild: formatEnumLabel(occupant.bodyBuild),
      markings: formatText(occupant.markings, { fallback: null }),
      notes: formatText(occupant.notes, { fallback: null }),
    };
  }, [occupant]);

  const badgeText = vm.isArchived ? "Archived" : "Occupant";
  const badgeClass = vm.isArchived ? ui.badgeArchived : ui.badgeIdle;

  // ============================================================
  // DETAIL VARIANT (full info, non-clickable)
  // ============================================================
  if (variant === "detail") {
    const headerTitle = "Occupant Info";

    return (
      <div className={`${ui.card} ${vm.isArchived ? ui.cardArchived : ""}`}>
        <div className={ui.cardHeader}>
          <div className={ui.cardTitle}>{headerTitle}</div>
          <span className={`${ui.badge} ${badgeClass}`}>{badgeText}</span>
        </div>

        <div className={ui.cardBody}>
          {vm.phone && (<div><strong>Phone: </strong>  {vm.phone}</div>)}
          {vm.email && (<div><strong>Email: </strong>{vm.email}</div>)}
          {vm.relation && (<div><strong>Relation to Tenant: </strong>{vm.relation}</div>)}
          {vm.age && (<div><strong>Age: </strong>{vm.age}</div>)}
          {vm.height && (<div><strong>Height: </strong>{vm.height}</div>)}
          {vm.weight && (<div><strong>Weight: </strong>{vm.weight}</div>)}
          {vm.sex && (<div><strong>Sex: </strong>{vm.sex}</div>)}
          {vm.hairColor && (<div><strong>Hair Color: </strong>{vm.hairColor}</div>)}
          {vm.eyeColor && (<div><strong>Eye Color: </strong>{vm.eyeColor}</div>)}
          {vm.bodyBuild && (<div><strong>Body Build: </strong>{vm.bodyBuild}</div>)}
          {vm.markings && (<div><strong>Physical Markings: </strong>{vm.markings}</div>)}
          {vm.notes && (<div><strong>Notes: </strong>{vm.notes}</div>)}
        </div>
      </div>
    );
  }

  // ============================================================
  // SUMMARY VARIANT
  // - show phone/email if present
  // - show age only when BOTH phone/email are missing (as your original intent)
  // ============================================================
  return (
    <button
      type="button"
      className={`${ui.card} ${vm.isArchived ? ui.cardArchived : ""}`}
      onClick={onClick}
      aria-label={`Open occupant ${vm.displayName}`}
    >
      <div className={ui.cardHeader}>
        <div className={ui.cardTitle}>{vm.displayName}</div>
        <span className={`${ui.badge} ${badgeClass}`}>{badgeText}</span>
      </div>

      <div className={ui.cardBody}>
        {vm.phone && (<div><strong>Phone:</strong>{vm.phone}</div>)}
        {vm.email && (<div><strong>Email:</strong>{vm.email}</div>)} 
        {vm.age && !vm.phone && !vm.email && (<div><strong>Age: </strong>{vm.age}</div>)}
        {!vm.phone && !vm.email && !vm.age && (
          <div>Click for more details</div>
        )}            
      </div>
    </button>
  );
}
