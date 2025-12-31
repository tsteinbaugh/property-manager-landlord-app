// newsrc/features/residents/components/LeaseCard.jsx
import { useMemo } from "react";
import ui from "@shared/styles/CardLayout.module.css";
import { formatText, formatDateLong, formatMoney } from "@shared/utils/validation.js";
import AttachmentsSection from "@shared/ui/AttachmentsSection.jsx";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

function toAbsoluteUrl(url) {
  if (!url) return "";
  if (/^https?:\/\//i.test(url)) return url;
  return `${API_BASE}${url.startsWith("/") ? "" : "/"}${url}`;
}

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
    const city = formatText(lease?.property?.city, { fallback: null });
    const state = formatText(lease?.property?.state, { fallback: null });
    const postalCode = formatText(lease?.property?.postalCode, { fallback: null });

    const cityStateZip =
      city && state && postalCode ? `${city}, ${state} ${postalCode}` : null;

    const base =
      propName ||
      (street && cityStateZip ? `${street}, ${cityStateZip}` : null) ||
      null;

    const displayName = base ? `Lease for ${base}` : "Lease";

    const startDate = formatDateLong(lease?.startDate, { fallback: null });
    const endDate = formatDateLong(lease?.endDate, { fallback: null });

    const term =
      startDate || endDate ? `${startDate || "—"} → ${endDate || "—"}` : null;

    const rentAmount = formatMoney(lease?.rentAmount, { fallback: null });

    const leaseType = formatText(lease?.leaseType, { fallback: null });
    const notes = formatText(lease?.notes, { fallback: null });

    // IMPORTANT: this component expects lease.attachments to include BOTH active + archived attachs.
    // (Fetch all attachs in detail view and filter client-side.)
    const attachments = Array.isArray(lease?.attachments) ? lease.attachments : [];

    return {
      isArchived,
      displayName,
      term,
      leaseType,
      rentAmount,
      notes,
      attachments,
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
          <span className={`${ui.badge} ${badgeClass}`}>{badgeText}</span>
        </div>

        <div className={ui.cardBody}>
          {vm.leaseType && (
            <div>
              <strong>Lease Type: </strong>
              {vm.leaseType}
            </div>
          )}
          {vm.term && (
            <div>
              <strong>Term: </strong>
              {vm.term}
            </div>
          )}
          {vm.rentAmount && (
            <div>
              <strong>Total Rent: </strong>
              {vm.rentAmount}/month
            </div>
          )}
          {vm.notes && (
            <div>
              <strong>Notes: </strong>
              {vm.notes}
            </div>
          )}

          <AttachmentsSection
            title="Attachments"
            attachments={lease.attachments}
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
      className={`${ui.card} ${vm.isArchived ? ui.cardArchived : ""}`}
      onClick={onClick}
      aria-label={`Open lease ${vm.displayName}`}
    >
      <div className={ui.cardHeader}>
        <div className={ui.cardTitle}>{vm.displayName}</div>
        <span className={`${ui.badge} ${badgeClass}`}>{badgeText}</span>
      </div>

      <div className={ui.cardBody}>
        {vm.term && (
          <div>
            <strong>Term: </strong>
            {vm.term}
          </div>
        )}
        {vm.rentAmount && (
          <div>
            <strong>Total Rent: </strong>
            {vm.rentAmount}/month
          </div>
        )}

        {!vm.term && !vm.rentAmount && <div>Click for more details</div>}
      </div>
    </button>
  );
}
