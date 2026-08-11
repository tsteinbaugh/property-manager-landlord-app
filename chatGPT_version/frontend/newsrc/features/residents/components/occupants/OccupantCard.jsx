//frontend/newsrc/features/residents/components/OccupantCard.jsx
import { useMemo } from "react";
import card from "@shared/styles/ui.cards.module.css";
import {
  formatText,
  formatInt,
  formatEnumLabel,
  formatHeightFeetInches,
  formatWeight,
  formatPhonePretty,
  formatEmail,
} from "@shared/utils/validation.js";

export default function OccupantCard({ occupant, onClick, variant = "summary" }) {
  if (!occupant) return null;

  const vm = useMemo(() => {
    const isArchived = !!occupant.archivedAt;

    const phone = formatPhonePretty(occupant.phone, { fallback: null});
    const email = formatEmail(occupant.email, { fallback: null});
    
    const relation = formatText(occupant.relation, { fallback: null });
    
    const age = formatInt(occupant.age, { fallback: null });
    const height = formatHeightFeetInches(occupant.heightFeet, occupant.heightInches, { fallback: null });
    const weight = formatWeight(occupant.weight, { fallback: null });
    const sex = formatEnumLabel(occupant.sex);
    const hairColor = formatEnumLabel(occupant.hairColor);
    const eyeColor = formatEnumLabel(occupant.eyeColor);
    const bodyBuild = formatEnumLabel(occupant.bodyBuild);
    const markings = formatText(occupant.markings, { fallback: null });
    
    const notes = formatText(occupant.notes, { fallback: null });

    const displayName = formatText(occupant.name, { fallback: "Unnamed occupant" });

    return {
      isArchived,
      displayName,
      phone,
      email,
      relation,
      age,
      height,
      weight ,
      sex,
      hairColor,
      eyeColor,
      bodyBuild,
      markings,
      notes,
    };
  }, [occupant]);

  const badgeText = vm.isArchived ? "Archived" : "Occupant";
  const badgeClass = vm.isArchived ? card.badgeArchived : card.badgeIdle;

  // ============================================================
  // DETAIL VARIANT (full info, non-clickable)
  // ============================================================
  if (variant === "detail") {
    const headerTitle = "Occupant Info";

    return (
      <div className={`${card.card} ${vm.isArchived ? card.cardArchived : ""}`}>
        <div className={card.cardHeader}>
          <div className={card.cardTitle}>{headerTitle}</div>
          <span className={`${card.badge} ${badgeClass}`}>{badgeText}</span>
        </div>

        <div className={card.cardBody}>
          {vm.phone ? (
            <div>
              <strong>Phone: </strong>
              {vm.phone}
            </div>
          ) : null}
          {vm.email ? (
            <div>
              <strong>Email: </strong>
              {vm.email}
            </div>
          ) : null}
          {vm.relation ? (
            <div>
              <strong>Relation to Tenant: </strong>
              {vm.relation}
            </div>
          ) : null}
          {vm.age ? (
            <div>
              <strong>Age: </strong>
              {vm.age}
            </div>
          ) : null}
          {vm.height ? (
            <div>
              <strong>Height: </strong>
              {vm.height}
            </div>
          ) : null}
          {vm.weight ? (
            <div>
              <strong>Weight: </strong>
              {vm.weight}
            </div>
          ) : null}
          {vm.sex ? (
            <div>
              <strong>Sex: </strong>
              {vm.sex}
            </div>
          ) : null}
          {vm.hairColor ? (
            <div>
              <strong>Hair Color: </strong>
              {vm.hairColor}
            </div>
          ) : null}
          {vm.eyeColor ? (
            <div>
              <strong>Eye Color: </strong>
              {vm.eyeColor}
            </div>
          ) : null}
          {vm.bodyBuild ? (
            <div>
              <strong>Body Build: </strong>{
              vm.bodyBuild}
            </div>
          ) : null}
          {vm.markings ? (
            <div>
              <strong>Physical Markings: </strong>
              {vm.markings}
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
  // - show phone/email if present
  // - show age only when BOTH phone/email are missing (as your original intent)
  // ============================================================
  return (
    <button
      type="button"
      className={`${card.card} ${vm.isArchived ? card.cardArchived : ""}`}
      onClick={onClick}
      aria-label={`Open occupant ${vm.displayName}`}
    >
      <div className={card.cardHeader}>
        <div className={card.cardTitle}>{vm.displayName}</div>
        <span className={`${card.badge} ${badgeClass}`}>{badgeText}</span>
      </div>

      <div className={card.cardBody}>
        {vm.phone ? (
          <div>
            <strong>Phone: </strong>
            {vm.phone}
          </div>
        ) : null}
        {vm.email ? (
          <div>
            <strong>Email: </strong>
            {vm.email}
          </div>
         ) : null}
        {vm.age && !vm.phone && !vm.email ? (
          <div>
            <strong>Age: </strong>
            {vm.age}
          </div>
        ) : null}
        {!vm.phone && !vm.email && !vm.age ? (
          <div>
            Click for more details
          </div>
        ) : null}
      </div>
    </button>
  );
}
