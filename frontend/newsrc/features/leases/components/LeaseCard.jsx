// newsrc/features/residents/components/LeaseCard.jsx
import { useMemo } from "react";
import ui from "@shared/styles/CardLayout.module.css";
import { formatText, formatDateLong, formatMoney } from "@shared/utils/validation.js";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

function toAbsoluteUrl(url) {
  if (!url) return "";
  if (/^https?:\/\//i.test(url)) return url;
  return `${API_BASE}${url.startsWith("/") ? "" : "/"}${url}`;
}

export default function LeaseCard({
  lease,
  onArchiveDocument,
  showArchivedDocs = false,
  onToggleShowArchivedDocs,
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

    // IMPORTANT: this component expects lease.documents to include BOTH active + archived docs.
    // (Fetch all docs in detail view and filter client-side.)
    const documents = Array.isArray(lease?.documents) ? lease.documents : [];

    return {
      isArchived,
      displayName,
      term,
      leaseType,
      rentAmount,
      notes,
      documents,
    };
  }, [lease]);

  const badgeText = vm.isArchived ? "Archived" : "Lease";
  const badgeClass = vm.isArchived ? ui.badgeArchived : ui.badgeIdle;

  // ============================================================
  // DETAIL VARIANT (full info, non-clickable)
  // ============================================================
  if (variant === "detail") {
    const headerTitle = "Lease Info";

    const docs = vm.documents; // all docs (archived + non-archived)
    const hasAnyDocs = docs.length > 0;
    const hasArchivedDocs = docs.some((d) => !!d?.archivedAt);

    const visibleDocs = showArchivedDocs ? docs : docs.filter((d) => !d?.archivedAt);
    const allHiddenBecauseArchived = !showArchivedDocs && hasAnyDocs && visibleDocs.length === 0;

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

          {/* Documents section: ONLY render if ANY docs exist (including archived) */}
          {hasAnyDocs ? (
            <div style={{ marginTop: 12 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  marginBottom: 6,
                }}
              >
                <div style={{ fontWeight: 600 }}>Documents</div>

                {/* Only show toggle if there are archived docs to reveal/hide */}
                {hasArchivedDocs ? (
                  <button
                    type="button"
                    className={ui.linkAction}
                    style={{ fontSize: "inherit" }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onToggleShowArchivedDocs?.();
                    }}
                  >
                    {showArchivedDocs ? "Hide archived documents" : "Show archived documents"}
                  </button>
                ) : null}
              </div>

              {allHiddenBecauseArchived ? (
                <div style={{ fontSize: 12, color: "#6b7280" }}>
                  All existing documents are archived.
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {visibleDocs.map((d) => (
                    <div
                      key={d.id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <a
                        href={toAbsoluteUrl(d.url)}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          flex: 1,
                          display: "flex",
                          justifyContent: "space-between",
                          gap: 12,
                          padding: "8px 10px",
                          border: "1px solid #e5e7eb",
                          borderRadius: 10,
                          textDecoration: "none",
                          color: "inherit",
                          minWidth: 0,
                        }}
                      >
                        {/* LEFT */}
                        <div style={{ minWidth: 0 }}>
                          <div
                            style={{
                              fontWeight: 500,
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {d.originalName || "Document"}
                          </div>

                          {d.createdAt && (
                            <div style={{ fontSize: 12, color: "#6b7280" }}>
                              Uploaded {formatDateLong(d.createdAt, { fallback: "" })}
                            </div>
                          )}

                          {/* Optional: show archived metadata when viewing archived docs */}
                          {showArchivedDocs && d.archivedAt ? (
                            <div style={{ fontSize: 12, color: "#6b7280" }}>
                              Archived {formatDateLong(d.archivedAt, { fallback: "" })}
                              {d.archiveReason ? ` — ${d.archiveReason}` : ""}
                            </div>
                          ) : null}
                        </div>

                        {/* RIGHT (size + archive/unarchive stacked) */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                            gap: 4,
                            flexShrink: 0,
                            fontSize: 12,
                            color: "#6b7280",
                          }}
                        >
                          <div>
                            {typeof d.size === "number" ? `${Math.round(d.size / 1024)} KB` : ""}
                          </div>

                          <button
                            type="button"
                            className={ui.linkAction}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();

                              const isArchivedDoc = !!d.archivedAt;
                              if (isArchivedDoc) {
                                // unarchive: backend toggle accepts empty reason
                                onArchiveDocument?.(d.id, "");
                                return;
                              }

                              const reason = window.prompt("Archive reason?");
                              if (reason == null) return;
                              if (!String(reason).trim()) return;
                              onArchiveDocument?.(d.id, String(reason).trim());
                            }}
                            title={d.archivedAt ? "Unarchive this document" : "Archive this document"}
                            style={{
                              fontSize: 12,
                              lineHeight: "14px",
                              padding: 0,
                              margin: 0,
                              alignSelf: "flex-end",
                            }}
                          >
                            {d.archivedAt ? "Unarchive" : "Archive"}
                          </button>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : null}
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
