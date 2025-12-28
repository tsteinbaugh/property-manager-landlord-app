// newsrc/features/residents/components/PetCard.jsx
import { useMemo } from "react";
import ui from "@shared/styles/CardLayout.module.css";
import { formatText, formatInt, formatWeight } from "@shared/utils/validation.js";

export default function PetCard({
  pet,
  onClick,
  variant = "summary", // "summary" | "detail"
}) {
  if (!pet) return null;

  const vm = useMemo(() => {
    const isArchived = !!pet.archivedAt;

    const displayName = formatText(pet.name, { fallback: "Unnamed pet" });

    return {
      isArchived,
      displayName,

      type: formatText(pet.type, { fallback: null }),
      breed: formatText(pet.breed, { fallback: null }),
      weight: formatWeight(pet.weight, { fallback: null }),
      age: formatInt(pet.age, { fallback: null }),
      license: formatText(pet.license, { fallback: null }),
      notes: formatText(pet.notes, { fallback: null }),
    };
  }, [pet]);

  const badgeText = vm.isArchived ? "Archived" : "Pet";
  const badgeClass = vm.isArchived ? ui.badgeArchived : ui.badgeIdle;

  // ============================================================
  // DETAIL VARIANT (full info, non-clickable)
  // ============================================================
  if (variant === "detail") {
    const headerTitle = "Pet Info";

    return (
      <div className={`${ui.card} ${vm.isArchived ? ui.cardArchived : ""}`}>
        <div className={ui.cardHeader}>
          <div className={ui.cardTitle}>{headerTitle}</div>
          <span className={`${ui.badge} ${badgeClass}`}>{badgeText}</span>
        </div>

        <div className={ui.cardBody}>
          {vm.type && (<div><strong>Type: </strong>{vm.type}</div>)}
          {vm.breed && (<div><strong>Breed: </strong>{vm.breed}</div>)}
          {vm.weight && (<div><strong>Weight: </strong>{vm.weight}</div>)}
          {vm.age && (<div><strong>Age: </strong>{vm.age}</div>)}
          {vm.license && (<div><strong>License: </strong>{vm.license}</div>)}
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
      aria-label={`Open pet ${vm.displayName}`}
    >
      <div className={ui.cardHeader}>
        <div className={ui.cardTitle}>{vm.displayName}</div>
        <span className={`${ui.badge} ${badgeClass}`}>{badgeText}</span>
      </div>

      <div className={ui.cardBody}>
        {vm.type && (<div><strong>Type: </strong>{vm.type}</div>)}
        {vm.breed && (<div><strong>Breed: </strong>{vm.breed}</div>)}

        {!vm.type && !vm.breed && <div>Click for more details</div>}
      </div>
    </button>
  );
}
