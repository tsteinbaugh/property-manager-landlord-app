// newsrc/features/residents/components/emergencyContactCard.jsx
import { useMemo } from "react";
import card from "@shared/styles/ui.cards.module.css";
import shared from "@shared/styles/ui.shared.module.css";
import { formatText, formatPhonePretty, formatEmail, formatEnumLabel } from "@shared/utils/validation.js";

export default function EmergencyContactCard({ emergencyContact, onClick, variant = "summary" }) {
  if (!emergencyContact) return null;

  const vm = useMemo(() => {
    const isArchived = !!emergencyContact.archivedAt;


    const phone = formatPhonePretty(emergencyContact.phone, { fallback: "—" });
    const email = formatEmail(emergencyContact.email, { fallback: "—" });

    const relation = formatText(emergencyContact.relation, { fallback: null });

    const street = formatText(emergencyContact.address1, { fallback: null });
    const unit = formatText(emergencyContact.address2, { fallback: null });
    const city = formatText(emergencyContact.city, { fallback: null });
    const state = formatEnumLabel(emergencyContact.state, { fallback: null });
    const postalCode = formatText(emergencyContact.postalCode, { fallback: null });

    const cityStateZip =
      city && state && postalCode ? `${city}, ${state} ${postalCode}` : null;


    const addressBlock = (
      <>
        <div>
          <strong>Address:</strong>
        </div>
        <div className={shared.indent}>
          <div>
            {street && !unit ? <div>{street}</div> : null}
            {street && unit ? <div>{street} {unit}</div> : null}
            {cityStateZip ? <div className={shared.muted}>{cityStateZip}</div> : null}
          </div>
        </div>
      </>
    );      

    const notes = formatText(emergencyContact.notes, { fallback: null });

    const displayName = formatText(emergencyContact.name, { fallback: "Unnamed emergency contact" });

    return {
      isArchived,
      displayName,
      phone,
      email,
      street,
      unit,
      cityStateZip,
      addressBlock,
      relation,
      notes,
    };
  }, [emergencyContact]);

  const badgeText = vm.isArchived ? "Archived" : "Emergency Contact";
  const badgeClass = vm.isArchived ? card.badgeArchived : card.badgeIdle;

  // ============================================================
  // DETAIL VARIANT (full info, non-clickable)
  // ============================================================
  if (variant === "detail") {
    const headerTitle = "Emergency Contact Info";

    return (
      <div className={`${card.card} ${vm.isArchived ? card.cardArchived : ""}`}>
        <div className={card.cardHeader}>
          <div className={card.cardTitle}>{headerTitle}</div>
          <span className={`${card.badge} ${badgeClass}`}>{badgeText}</span>
        </div>

        <div className={card.cardBody}>
          <div>
            <strong>Phone: </strong>
            {vm.phone}
          </div>
          <div>
            <strong>Email: </strong>
            {vm.email}
          </div>
          {vm.addressBlock ? (
            <div>{vm.addressBlock}</div>
          ) : null}
          {vm.relation ? (
            <div>
              <strong>Relation: </strong>
              {vm.relation}
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
  // SUMMARY VARIANT (phone + email only)
  // ============================================================
  return (
    <button
      type="button"
      className={`${card.card} ${vm.isArchived ? card.cardArchived : ""}`}
      onClick={onClick}
      aria-label={`Open emergency contact ${vm.displayName}`}
    >
      <div className={card.cardHeader}>
        <div className={card.cardTitle}>{vm.displayName}</div>
        <span className={`${card.badge} ${badgeClass}`}>{badgeText}</span>
      </div>

      <div className={card.cardBody}>
        <div>
          <strong>Phone: </strong>
          {vm.phone}
        </div>
        <div>
          <strong>Email: </strong>
          {vm.email}
        </div>
        {!vm.phone && !vm.email ? (
          <div>
            Click for more details
          </div>
        ) : null}
      </div>
    </button>
  );
}
