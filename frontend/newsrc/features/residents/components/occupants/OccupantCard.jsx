//frontend/newsrc/features/residents/components/OccupantCard.jsx
import { useMemo } from "react";
import ui from "@shared/styles/CardLayout.module.css";

export default function OccupantCard({ occupant, onClick }) {
  if (!occupant) return null;

  const { displayName, relation, tenantName, isArchived } = useMemo(() => {
    const name =
      (occupant.name && String(occupant.name).trim()) ||
      "Unnamed occupant";

    return {
      displayName: name,
      relation: occupant.relation || "",
      tenantName: occupant.tenantName || "",
      isArchived: !!(occupant.isArchived ?? occupant.archived),
    };
  }, [occupant]);

  return (
    <button
      type="button"
      className={`${ui.card} ${isArchived ? ui.cardArchived : ""}`}
      onClick={onClick}
      aria-label={`Open occupant ${displayName}`}
    >
      <div className={ui.cardHeader}>
        <div className={ui.cardTitle}>{displayName}</div>

        {isArchived ? (
          <span className={`${ui.badge} ${ui.badgeArchived}`}>Archived</span>
        ) : (
          <span className={`${ui.badge} ${ui.badgeIdle}`}>Occupant</span>
        )}
      </div>

      <div className={ui.cardBody}>
        {relation ? <div>Relation: {relation}</div> : null}
        {tenantName ? <div className={ui.muted}>Tenant: {tenantName}</div> : null}
        {!relation && !tenantName ? (
          <div className={ui.muted}>No additional info yet</div>
        ) : null}
      </div>
    </button>
  );
}
