// newsrc/features/residents/components/PetCard.jsx
import { useMemo } from "react";
import card from "@shared/styles/ui.cards.module.css";
import { formatText, formatInt, formatWeight } from "@shared/utils/validation.js";

export default function PetCard({ pet, onClick, variant = "summary" }) {
  if (!pet) return null;

  const vm = useMemo(() => {
    const isArchived = !!pet.archivedAt;

    const type = formatText(pet.type, { fallback: null });
    const breed = formatText(pet.breed, { fallback: null });
    const weight = formatWeight(pet.weight, { fallback: null });
    const age = formatInt(pet.age, { fallback: null });
    const license = formatText(pet.license, { fallback: null });

    const notes = formatText(pet.notes, { fallback: null });

    const displayName = formatText(pet.name, { fallback: "Unnamed pet" });

    return {
      isArchived,
      displayName,

      type,
      breed,
      weight,
      age,
      license,
      notes,
    };
  }, [pet]);

  const badgeText = vm.isArchived ? "Archived" : "Pet";
  const badgeClass = vm.isArchived ? card.badgeArchived : card.badgeIdle;

  // ============================================================
  // DETAIL VARIANT (full info, non-clickable)
  // ============================================================
  if (variant === "detail") {
    const headerTitle = "Pet Info";

    return (
      <div className={`${card.card} ${card.cardForm} ${vm.isArchived ? card.cardArchived : ""}`}>
        <div className={card.cardHeader}>
          <div className={card.cardTitle}>{headerTitle}</div>
          <span className={`${card.badge} ${badgeClass}`}>{badgeText}</span>
        </div>

        <div className={card.cardBody}>
          {vm.type ? (
            <div>
              <strong>Type: </strong>
              {vm.type}
            </div>
          ) : null}
          {vm.breed ? (
            <div>
              <strong>Breed: </strong>
              {vm.breed}
            </div>
          ) : null}
          {vm.weight ? (
            <div>
              <strong>Weight: </strong>
              {vm.weight}
            </div>
          ) : null}
          {vm.age ? (
            <div>
              <strong>Age: </strong>
              {vm.age}
            </div>
          ) : null}
          {vm.license ?(
            <div>
              <strong>License: </strong>
              {vm.license}
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
  // SUMMARY VARIANT
  // ============================================================
  return (
    <button
      type="button"
      className={`${card.card} ${vm.isArchived ? card.cardArchived : ""}`}
      onClick={onClick}
      aria-label={`Open pet ${vm.displayName}`}
    >
      <div className={card.cardHeader}>
        <div className={card.cardTitle}>{vm.displayName}</div>
        <span className={`${card.badge} ${badgeClass}`}>{badgeText}</span>
      </div>

      <div className={card.cardBody}>
        {vm.type ? (
          <div>
            <strong>Type: </strong>
            {vm.type}
          </div>
        ) : null}
        {!vm.type ? (
          <div>
            Click for more details
          </div>
        ) : null}
      </div>
    </button>
  );
}
