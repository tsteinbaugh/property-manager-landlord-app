import React from "react";

export default function ArchivedHeaderActions({
  isArchived = false,
  isBusy = false,

  archivedMessage =
    "Cannot edit an archived item. To edit, contact a system admin to unarchive first.",

  canEdit = false,
  onEdit,
  editLabel = "Edit",

  canArchive = false,
  onArchive,
  archiveLabel = "Archive",

  canUnarchive = false,
  onUnarchive,
  unarchiveLabel = "Unarchive",

  card,
  shared,
}) {
  if (!card || !shared) return null;

  const hasEditHandler = typeof onEdit === "function";
  const hasArchiveHandler = typeof onArchive === "function";
  const hasUnarchiveHandler = typeof onUnarchive === "function";

  const editDisabled = isBusy || !canEdit || !hasEditHandler || isArchived;
  const archiveDisabled = isBusy || !canArchive || !hasArchiveHandler || isArchived;

  const showUnarchive = isArchived && canUnarchive && hasUnarchiveHandler;
  const unarchiveDisabled = isBusy;

  return (
    <>
      <div className={card.headerLinksRow}>
        <button
          type="button"
          className={card.linkAction}
          onClick={onEdit}
          disabled={editDisabled}
          aria-disabled={editDisabled ? "true" : "false"}
        >
          {editLabel}
        </button>

        <button
          type="button"
          className={card.linkAction}
          onClick={onArchive}
          disabled={archiveDisabled}
          aria-disabled={archiveDisabled ? "true" : "false"}
        >
          {archiveLabel}
        </button>

        {showUnarchive ? (
          <button
            type="button"
            className={card.linkAction}
            onClick={onUnarchive}
            disabled={unarchiveDisabled}
            aria-disabled={unarchiveDisabled ? "true" : "false"}
          >
            {unarchiveLabel}
          </button>
        ) : null}
      </div>

      {isArchived ? <div className={shared.muted}>{archivedMessage}</div> : null}
    </>
  );
}
