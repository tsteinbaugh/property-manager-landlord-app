// newsrc/features/residents/components/PetCard.jsx
import { useMemo } from "react";
import ui from "@shared/styles/CardLayout.module.css";

export default function PetCard({ pet, onClick }) {
  if (!pet) return null;

  const vm = useMemo(() => {
    const isArchived = !!(pet.isArchived ?? pet.archived);

    const displayName =
      (pet.name && String(pet.name).trim()) || "Unnamed pet";

    const type = pet.type ? String(pet.type).trim() : "";
    const breed = pet.breed ? String(pet.breed).trim() : "";
    const weight =
      pet.weightLb === null || pet.weightLb === undefined || pet.weightLb === ""
        ? null
        : String(pet.weightLb);

    return {
      isArchived,
      displayName,
      type,
      breed,
      weight,
    };
  }, [pet]);

  return (
    <button
      type="button"
      className={`${ui.card} ${vm.isArchived ? ui.cardArchived : ""}`}
      onClick={onClick}
      aria-label={`Open pet ${vm.displayName}`}
    >
      <div className={ui.cardHeader}>
        <div className={ui.cardTitle}>{vm.displayName}</div>

        {vm.isArchived ? (
          <span className={`${ui.badge} ${ui.badgeArchived}`}>Archived</span>
        ) : (
          <span className={`${ui.badge} ${ui.badgeIdle}`}>Pet</span>
        )}
      </div>

      <div className={ui.cardBody}>
        {vm.type ? <div>Type: {vm.type}</div> : null}
        {vm.breed ? <div>Breed: {vm.breed}</div> : null}
        {vm.weight ? <div>Weight (lbs): {vm.weight}</div> : null}

        {!vm.type && !vm.breed && !vm.weight ? (
          <div className={ui.muted}>No additional info yet</div>
        ) : null}
      </div>
    </button>
  );
}
