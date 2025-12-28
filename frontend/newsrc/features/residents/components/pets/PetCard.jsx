// newsrc/features/residents/components/PetCard.jsx
import { useMemo } from "react";
import ui from "@shared/styles/CardLayout.module.css";

export default function PetCard({ 
  pet, 
  onClick,
  variant = "summary", // "summary" | "detail" 
}) {
  if (!pet) return null;

  const vm = useMemo(() => {
    const isArchived = !!pet.archivedAt;

    const displayName =
      (pet.name && String(pet.name).trim()) || "Unnamed pet";

    const type = pet.type ? String(pet.type).trim() : "";
    const breed = pet.breed ? String(pet.breed).trim() : "";
    const weight =
      pet.weightLb === null || pet.weightLb === undefined || pet.weightLb === ""
        ? null
        : String(pet.weightLb);
    const age = 
      pet.age === null || pet.age === undefined || pet.age === ""
        ? null
        : String(pet.age);
    const license = pet.license ? String(pet.license).trim() : "";
    const notes = pet.notes ? String(pet.notes).trim() : "";

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
          <span className={`${ui.badge} ${badgeClass}`}>
            {badgeText}
          </span>
        </div>

        <div className={ui.cardBody}>
          {vm.type ? (
            <div><strong>Type: </strong>{vm.type}</div>
            ) : null}

          {vm.breed ? (
            <div><strong>Breed: </strong>{vm.breed}</div>
            ) : null}

          {vm.weight ? (
            <div><strong>Weight: </strong>{vm.weight} pounds</div>
            ) : null}

          {vm.age ? (
            <div><strong>Age: </strong>{vm.age}</div>
            ) : null}

          {vm.license ? (
            <div><strong>License: </strong>{vm.license}</div>
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
  const headerTitle = vm.displayName

  return (
    <button
      type="button"
      className={`${ui.card} ${vm.archivedAt ? ui.cardArchived : ""}`}
      onClick={onClick}
      aria-label={`Open pet ${vm.displayName}`}
    >
     <div className={ui.cardHeader}>
        <div className={ui.cardTitle}>{headerTitle}</div>
        <span className={`${ui.badge} ${badgeClass}`}>
          {badgeText}
        </span>
      </div>

      <div className={ui.cardBody}>
        {vm.type ? (
          <div><strong>Type: </strong>{vm.type}</div>
          ) : null}

        {vm.breed ? (
          <div><strong>Breed: </strong>{vm.breed}</div>
          ) : null}
        {!vm.type && !vm.breed ? (
          <div>Click for more details</div>
          ) : null}
      </div>
    </button>
  );
}      