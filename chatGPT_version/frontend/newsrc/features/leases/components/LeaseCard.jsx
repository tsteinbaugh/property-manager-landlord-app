// newsrc/features/residents/components/LeaseCard.jsx
import { useMemo } from "react";
import card from "@shared/styles/ui.cards.module.css";
import { formatText, formatDateLong, formatMoney, formatEnumLabel } from "@shared/utils/validation.js";
import AttachmentsSection from "@shared/ui/AttachmentsSection.jsx";

export default function LeaseCard({
  lease,
  onArchiveAttachment,
  showArchivedAttachs = false,
  onToggleShowArchivedAttachs,
  onClick,
  variant = "summary",
}) {
  if (!lease) return null;

  const vm = useMemo(() => {
    const isArchived = !!lease.archivedAt;

    const propName = formatText(lease?.property?.name, { fallback: null });
    const street = formatText(lease?.property?.address1, { fallback: null });
    const unit = formatText(lease?.property?.address2, { fallback: null});
    const base = propName || (street && unit ? `${street} ${unit}` : street && !unit ? `${street}` : null) || null;
    const displayName = base ? `Lease for ${base}` : "Lease";

    const startDate = formatDateLong(lease?.startDate, { fallback: null });
    const endDate = formatDateLong(lease?.endDate, { fallback: null });
    const term = startDate || endDate ? `${startDate || "—"} → ${endDate || "—"}` : null;

    const rentAmountCents = formatMoney(lease?.rentAmountCents, { fallback: null });

    const leaseType = formatEnumLabel(lease?.leaseType, { fallback: null });

    const notes = formatText(lease?.notes, { fallback: null });

    const attachments = Array.isArray(lease?.attachments) ? lease.attachments : [];

    return {
      isArchived,
      displayName,
      term,
      leaseType,
      rentAmountCents,
      notes,
      attachments,
    };
  }, [lease]);

  const badgeText = vm.isArchived ? "Archived" : "Lease";
  const badgeClass = vm.isArchived ? card.badgeArchived : card.badgeIdle;

  // ============================================================
  // DETAIL VARIANT (full info, non-clickable)
  // ============================================================
  if (variant === "detail") {
    const headerTitle = "Lease Info";

    return (
      <div className={`${card.card} ${card.cardForm} ${vm.isArchived ? card.cardArchived : ""}`}>
        <div className={card.cardHeader}>
          <div className={card.cardTitle}>{headerTitle}</div>
          <span className={`${card.badge} ${badgeClass}`}>{badgeText}</span>
        </div>

        <div className={card.cardBody}>
          {vm.leaseType ? (
            <div>
              <strong>Lease Type: </strong>
              {vm.leaseType}
            </div>
          ) : null}
          {vm.term ? (
            <div>
              <strong>Term: </strong>
              {vm.term}
            </div>
          ) : null}
          {vm.rentAmountCents ? (
            <div>
              <strong>Total Rent: </strong>
              ${vm.rentAmountCents}/month
            </div>
          ) : null}
          {vm.notes ? (
            <div>
              <strong>Notes: </strong>
              {vm.notes}
            </div>
          ) : null}

          <AttachmentsSection
            title="Attachments"
            attachments={vm.attachments}
            showArchived={showArchivedAttachs}
            onToggleShowArchived={onToggleShowArchivedAttachs}
            onArchive={(attachId, reason) =>
              onArchiveAttachment?.(attachId, reason)
            }
          />
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
      aria-label={`Open lease ${vm.displayName}`}
    >
      <div className={card.cardHeader}>
        <div className={card.cardTitle}>{vm.displayName}</div>
        <span className={`${card.badge} ${badgeClass}`}>{badgeText}</span>
      </div>

      <div className={card.cardBody}>
        {vm.term ? (
          <div>
            <strong>Term: </strong>
            {vm.term}
          </div>
        ) : null}
        {vm.rentAmountCents ? (
          <div>
            <strong>Total Rent: </strong>
            ${vm.rentAmountCents}/month
          </div>
        ) : null}
        {!vm.term && !vm.rentAmountCents ? (
          <div>
            Click for more details
          </div>
        ) : null}
      </div>
    </button>
  );
}
