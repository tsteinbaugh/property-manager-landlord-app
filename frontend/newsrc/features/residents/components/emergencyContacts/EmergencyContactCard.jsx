// newsrc/features/residents/components/emergencyContactCard.jsx
import { useMemo } from "react";
import ui from "@shared/styles/CardLayout.module.css";

export default function EmergencyContactCard({
  emergencyContact,
  onClick,
  variant = "summary", // "summary" | "detail" 
}) {
  if (!emergencyContact) return null;

  const vm = useMemo(() => {
    const isArchived = !!emergencyContact.archivedAt;

    const displayName =
      (emergencyContact.name && String(emergencyContact.name).trim()) ||
      "Unnamed emergency contact";

    const phone = emergencyContact.phone ? String(emergencyContact.phone).trim() : "";
    const email = emergencyContact.email ? String(emergencyContact.email).trim() : "";

    const address1 = emergencyContact.address1 ? String(emergencyContact.address1).trim() : "";
    const city = emergencyContact.city ? String(emergencyContact.city).trim() : "";
    const state = emergencyContact.state ? String(emergencyContact.state).trim() : "";
    const postalCode = emergencyContact.postalCode ? String(emergencyContact.postalCode).trim() : "";
    const cityLine = [city, state, postalCode].filter(Boolean).join(", ");

    const relation = emergencyContact.relation ? String(emergencyContact.relation).trim() : "";
    const notes = emergencyContact.notes ? String(emergencyContact.notes).trim() : "";

    return {
      isArchived,
      displayName,
      phone,
      email,
      address1,
      cityLine,
      relation,
      notes,
    };
  }, [emergencyContact]);

  const badgeText = vm.isArchived ? "Archived" : "Emergency Contact";
  const badgeClass = vm.isArchived ? ui.badgeArchived : ui.badgeIdle;

  // ============================================================
  // DETAIL VARIANT (full info, non-clickable)
  // ============================================================
  if (variant === "detail") {
    const headerTitle = "Emergency Contact Info";

    return (
      <div className={`${ui.card} ${vm.isArchived ? ui.cardArchived : ""}`}>
        <div className={ui.cardHeader}>
          <div className={ui.cardTitle}>{headerTitle}</div>
          <span className={`${ui.badge} ${badgeClass}`}>
            ${badgeText}
          </span>
        </div>

        <div className={ui.cardBody}>
          <div><strong>Phone: </strong>{vm.phone}</div>
          <div><strong>Email: </strong>{vm.email}</div>

          <div><strong>Address:</strong></div>
          <div className={ui.indent}>
            <div>
              {vm.address1 || "—"}
              {vm.cityLine ? <div className={ui.muted}>{vm.cityLine}</div> : null}
            </div>
          </div>

          {vm.relation ? (
            <div><strong>Relation: </strong>{vm.relation}</div>
          ) : null}

          {vm.notes ? (
            <div><strong>Notes: </strong>{vm.notes}</div>
          ) : null}
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
      aria-label={`Open emergency contact ${vm.displayName}`}
    >
      <div className={ui.cardHeader}>
        <div className={ui.cardTitle}>{headerTitle}</div>
        <span className={`${ui.badge} ${badgeClass}`}>
          {vm.isArchived ? "Archived" : "Emergency contact"}
        </span>
      </div>

      <div className={ui.cardBody}>
        <div>
          <strong>Phone: </strong>{vm.phone}
        </div>
        <div>
          <strong>Email: </strong>{vm.email}
        </div>
      </div>
    </button>
  );
}
