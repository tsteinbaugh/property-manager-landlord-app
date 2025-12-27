// newsrc/features/residents/components/LeaseCard.jsx
import { useMemo } from "react";
import ui from "@shared/styles/CardLayout.module.css";

export default function LeaseCard({ 
  lease,
  onClick,
  variant = "summary", // "summary" | "detail" 
 }) {

  if (!lease) return null;

  const vm = useMemo(() => {
    const isArchived = !!lease.archivedAt;

    const base =
      (lease.property?.name && String(lease.property.name).trim()) ||
      (lease.property?.address1 && String(lease.property.address1).trim()) 
      (lease.property?.city && String(lease.property.city).trim()) 
      (lease.property?.state && String(lease.property.state).trim()) 
      (lease.property?.postalCode && String(lease.property.postalCode).trim()) ||
      "";

    const displayName = base ? `Lease for ${base}` : "Lease";

    const startDate = 
      lease.startDate === null || lease.startDate === undefined || lease.startDate === ""
        ? "─"
        : String(lease.startDate);
    const endDate = 
      lease.endDate === null || lease.endDate === undefined || lease.endDate === ""
        ? "─"
        : String(lease.endDate);

    const rentAmount = 
      lease.rentAmount === null || lease.rentAmount === undefined || lease.rentAmount === ""
        ? null
        : String(lease.rentAmount);

    const leaseType = lease.leaseType ? String(lease.leaseType).trim() : "";

    const notes = lease.notes ? String(lease.notes).trim() : "";

    return {
      isArchived,
      displayName,
      startDate,
      endDate,
      leaseType,
      notes,
    };
  }, [lease]);

  const badgeText = vm.isArchived ? "Archived" : "Lease";
  const badgeClass = vm.isArchived ? ui.badgeArchived : ui.badgeIdle;

  // ============================================================
  // DETAIL VARIANT (full info, non-clickable)
  // ============================================================
  if (variant === "detail") {
    const headerTitle = "Lease Info";

    return (
      <div className={`${ui.card} ${vm.isArchived ? ui.cardArchived : ""}`}>
        <div className={ui.cardHeader}>
          <div className={ui.cardTitle}>{headerTitle}</div>
          <span className={`${ui.badge} ${badgeClass}`}>
            {badgeText}
          </span>
        </div>

        <div className={ui.cardBody}>
          <div><strong>Lease Type: </strong>{vm.leaseType}</div>
          <div><strong>Term: </strong>{vm.startDate} → {vm.endDate}</div>
          {vm.rentAmount ? (
            <div><strong>Total Rent: </strong>${vm.rentAmount}/month</div>
          ) : null}          
        </div>
      </div>
    );
  }    

  // ============================================================
  // SUMMARY VARIANT (phone + email, + age if no phone/email)
  // ============================================================
  const headerTitle = vm.displayName;

  return (
    <button
      type="button"
      className={`${ui.card} ${vm.isArchived ? ui.cardArchived : ""}`}
      onClick={onClick}
      aria-label={`Open occupant ${vm.displayName}`}
    >
      <div className={ui.cardHeader}>
        <div className={ui.cardTitle}>{headerTitle}</div>
        <span className={`${ui.badge} ${badgeClass}`}>
          {badgeText}
        </span>
      </div>

      <div className={ui.cardBody}>
        <div><strong>Term: </strong>{vm.startDate} → {vm.endDate}</div>
        {vm.rentAmount ? (
          <div><strong>Total Rent: </strong>${vm.rentAmount}/month</div>
        ) : null}       
      </div>
    </button>
  );
}