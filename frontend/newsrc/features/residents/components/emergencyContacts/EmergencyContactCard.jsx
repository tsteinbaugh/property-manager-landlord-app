// newsrc/features/residents/components/emergencyContactCard.jsx
import { useMemo } from "react";
import ui from "@shared/styles/CardLayout.module.css";
import { formatText, formatPhoneRaw, formatEmail } from "@shared/utils/validation.js";

export default function EmergencyContactCard({
  emergencyContact,
  onClick,
  variant = "summary", // "summary" | "detail"
}) {
  if (!emergencyContact) return null;

  const vm = useMemo(() => {
    const isArchived = !!emergencyContact.archivedAt;

    const displayName = formatText(emergencyContact.name, {
      fallback: "Unnamed emergency contact",
    });

    const phone = formatPhoneRaw(emergencyContact.phone, { fallback: "—" });
    const email = formatEmail(emergencyContact.email, { fallback: "—" });

    const street = formatText(emergencyContact.address1, { fallback: null });
    const city = formatText(emergencyContact.city, { fallback: null });
    const state = formatText(emergencyContact.state, { fallback: null });
    const postalCode = formatText(emergencyContact.postalCode, { fallback: null });

    const cityStateZip =
      city && state && postalCode ? `${city}, ${state} ${postalCode}` : null;

    const relation = formatText(emergencyContact.relation, { fallback: null });
    const notes = formatText(emergencyContact.notes, { fallback: null });

    return {
      isArchived,
      displayName,
      phone,
      email,
      street,
      cityStateZip,
      relation,
      notes,
    };
  }, [emergencyContact]);

  const badgeText = vm.isArchived ? "Archived" : "Emergency Contact";
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
    const headerTitle = "Emergency Contact Info";

    return (
      <div className={`${ui.card} ${vm.isArchived ? ui.cardArchived : ""}`}>
        <div className={ui.cardHeader}>
          <div className={ui.cardTitle}>{headerTitle}</div>
          <span className={`${ui.badge} ${badgeClass}`}>{badgeText}</span>
        </div>

        <div className={ui.cardBody}>
          <div><strong>Phone: </strong>{vm.phone}</div>
          <div><strong>Email: </strong>{vm.email}</div>
          {AddressBlock}
          {vm.relation && (<div><strong>Relation: </strong>{vm.relation}</div>)}
          {vm.notes && (<div><strong>Notes: </strong>{vm.notes}</div>)}
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
      className={`${ui.card} ${vm.isArchived ? ui.cardArchived : ""}`}
      onClick={onClick}
      aria-label={`Open emergency contact ${vm.displayName}`}
    >
      <div className={ui.cardHeader}>
        <div className={ui.cardTitle}>{vm.displayName}</div>
        <span className={`${ui.badge} ${badgeClass}`}>{badgeText}</span>
      </div>

      <div className={ui.cardBody}>
        <div><strong>Phone: </strong>{vm.phone}</div>
        <div><strong>Email: </strong>{vm.email}</div>
        {!vm.phone && !vm.email && (
          <div>Click for more details</div>
        )}      
      </div>
    </button>
  );
}
