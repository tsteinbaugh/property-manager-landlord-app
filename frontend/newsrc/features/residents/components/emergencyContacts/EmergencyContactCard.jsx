// newsrc/features/residents/components/emergencyContactCard.jsx
import { useMemo } from "react";
import ui from "@shared/styles/CardLayout.module.css";

export default function EmergencyContactCard({ emergencyContact, onClick }) {
  if (!emergencyContact) return null;

  const vm = useMemo(() => {
    const isArchived = !!emergencyContact.archivedAt;

    const displayName =
      (emergencyContact.name && String(emergencyContact.name).trim()) ||
      "Unnamed emergency contact";

    const phone = emergencyContact.phone ? String(emergencyContact.phone).trim() : "";
    const email = emergencyContact.email ? String(emergencyContact.email).trim() : "";
    const relation = emergencyContact.relation ? String(emergencyContact.relation).trim() : "";

    const hasAnyInfo = !!phone || !!email || !!relation;

    return { isArchived, displayName, phone, email, relation, hasAnyInfo };
  }, [emergencyContact]);

  return (
    <button
      type="button"
      className={`${ui.card} ${vm.archivedAt ? ui.cardArchived : ""}`}
      onClick={onClick}
      aria-label={`Open emergency contact ${vm.displayName}`}
    >
      <div className={ui.cardHeader}>
        <div className={ui.cardTitle}>{vm.displayName}</div>

        {vm.archivedAt ? (
          <span className={`${ui.badge} ${ui.badgeArchived}`}>Archived</span>
        ) : (
          <span className={`${ui.badge} ${ui.badgeIdle}`}>Emergency contact</span>
        )}
      </div>

      <div className={ui.cardBody}>
        {vm.phone ? <div>Phone: {vm.phone}</div> : null}
        {vm.email ? <div>Email: {vm.email}</div> : null}
        {vm.relation ? <div>Relation: {vm.relation}</div> : null}

        {!vm.hasAnyInfo ? <div className={ui.muted}>No additional info yet</div> : null}
      </div>
    </button>
  );
}
