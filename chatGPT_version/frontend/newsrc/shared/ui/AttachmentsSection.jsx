// newsrc/shared/ui/attachments/AttachmentsSection.jsx
import { formatDateLong } from "@shared/utils/validation.js";
import card from "@shared/styles/ui.cards.module.css";


const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

function toAbsoluteUrl(url) {
  if (!url) return "";
  if (/^https?:\/\//i.test(url)) return url;
  return `${API_BASE}${url.startsWith("/") ? "" : "/"}${url}`;
}

export default function AttachmentsSection({
  title = "Attachments",
  attachments = [],
  showArchived = false,
  onToggleShowArchived,
  onArchive,
}) {
  if (!Array.isArray(attachments)) return null;

  const totalCount = attachments.length;
  if (totalCount === 0) return null;

  const archivedCount = attachments.filter(a => a.archivedAt).length;
  const hasArchived = archivedCount > 0;

  const visible = showArchived
    ? attachments
    : attachments.filter(a => !a.archivedAt);

  const allHiddenBecauseArchived =
    !showArchived && visible.length === 0 && archivedCount === totalCount;

  return (
    <div style={{ marginTop: 12 }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          marginBottom: 6,
        }}
      >
        <div style={{ fontWeight: 600 }}>{title}</div>

        {hasArchived && (
          <button
            type="button"
            className={card.linkAction}
            style={{ fontSize: "inherit" }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onToggleShowArchived?.();
            }}
          >
            {showArchived ? "Hide archived" : "Show archived"}
          </button>
        )}
      </div>

      {/* All archived message */}
      {allHiddenBecauseArchived ? (
        <div style={{ fontSize: 12, color: "#6b7280" }}>
          All existing {title.toLowerCase()} are archived.
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {visible.map((a) => (
            <div key={a.id} style={{ display: "flex", gap: 8 }}>
              <a
                href={toAbsoluteUrl(a.url)}
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
                    {a.originalName || "Attachment"}
                  </div>

                  {a.createdAt && (
                    <div style={{ fontSize: 12, color: "#6b7280" }}>
                      Uploaded {formatDateLong(a.createdAt, { fallback: "" })}
                    </div>
                  )}

                  {showArchived && a.archivedAt && (
                    <div style={{ fontSize: 12, color: "#6b7280" }}>
                      Archived {formatDateLong(a.archivedAt, { fallback: "" })}
                      {a.archiveReason ? ` — ${a.archiveReason}` : ""}
                    </div>
                  )}
                </div>

                {/* RIGHT */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: 4,
                    fontSize: 12,
                    color: "#6b7280",
                  }}
                >
                  {typeof a.size === "number" && (
                    <div>{Math.round(a.size / 1024)} KB</div>
                  )}

                  <button
                    type="button"
                    className={card.linkAction}
                    style={{ fontSize: 12, padding: 0 }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();

                      if (a.archivedAt) {
                        onArchive?.(a.id, "");
                        return;
                      }

                      const reason = window.prompt("Archive reason?");
                      if (!reason || !reason.trim()) return;
                      onArchive?.(a.id, reason.trim());
                    }}
                  >
                    {a.archivedAt ? "Unarchive" : "Archive"}
                  </button>
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
