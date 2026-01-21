// frontend/newsrc/shared/ui/cards/LinkageCard.jsx
import React from "react";

import shared from "@shared/styles/ui.shared.module.css";
import card from "@shared/styles/ui.cards.module.css";

function LinkageLine({ parts = [], hint }) {
  const cleaned = (parts || []).filter(Boolean);
  if (!cleaned.length) return null;

  return (
    <div className={shared.muted} style={{ marginTop: 6 }}>
      <div>
        <strong>Linkage: </strong>
        {cleaned.map((p, idx) => (
          <span key={`${String(p)}-${idx}`}>
            {idx > 0 ? " → " : ""}
            <label>{p}</label>
          </span>
        ))}
      </div>
      {hint ? <div style={{ marginTop: 2 }}>{hint}</div> : null}
    </div>
  );
}

/**
 * Optional standardized actions area.
 *
 * actions: [
 *   {
 *     key?: string,
 *     label: string,
 *     busyLabel?: string,
 *     danger?: boolean,
 *     onClick?: (e) => void,
 *     disabled?: boolean,
 *     busy?: boolean,
 *     disabledMessage?: string | ReactNode,
 *   }
 * ]
 *
 * Notes:
 * - busy implies disabled
 * - will stopPropagation and will NOT call onClick when disabled/busy (extra safety)
 */
function ActionsArea({ actions }) {
  if (!Array.isArray(actions) || actions.length === 0) return null;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 2 }}>
      {actions.map((a, idx) => {
        if (!a || !a.label) return null;

        const isBusy = !!a.busy;
        const isDisabled = !!a.disabled || isBusy;

        const onActionClick = (e) => {
          e.stopPropagation();
          if (isDisabled) return; // extra safety
          if (typeof a.onClick === "function") a.onClick(e);
        };

        const showMsg = !isBusy && !!a.disabledMessage;

        return (
          <div
            key={a.key || `${a.label}-${idx}`}
            style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 2 }}
          >
            <button
              type="button"
              className={`${card.inlineAction} ${a.danger ? card.inlineActionDanger : ""}`}
              onClick={onActionClick}
              disabled={isDisabled}
            >
              {isBusy ? a.busyLabel || "Working…" : a.label}
            </button>

            {showMsg ? <div className={shared.muted}>{a.disabledMessage}</div> : null}
          </div>
        );
      })}
    </div>
  );
}

export default function LinkageCard({
  title,
  archived = false,
  badgeText,
  badgeTone, // "idle" | "archived" | "active"
  onClick,
  linkageParts = [],
  linkageHint,

  // legacy
  footer,

  // new standardized actions
  actions,

  ariaLabel,
}) {
  const tone = badgeTone || (archived ? "archived" : "idle");

  const badgeClass =
    tone === "active"
      ? card.badgeActive
      : tone === "archived"
        ? card.badgeArchived
        : card.badgeIdle;

  const canClick = typeof onClick === "function";

  const handleKeyDown = (e) => {
    if (!canClick) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  const hasActions = Array.isArray(actions) && actions.length > 0;

  return (
    <div
      className={`${card.card} ${archived ? card.cardArchived : ""}`}
      onClick={canClick ? onClick : undefined}
      role={canClick ? "button" : undefined}
      tabIndex={canClick ? 0 : undefined}
      onKeyDown={canClick ? handleKeyDown : undefined}
      style={{ cursor: canClick ? "pointer" : "default" }}
      aria-label={canClick ? ariaLabel || `Open ${title || "item"}` : undefined}
    >
      <div className={card.cardHeader}>
        <div className={card.cardTitle}>{title || "Untitled"}</div>
        {badgeText ? <span className={`${card.badge} ${badgeClass}`}>{badgeText}</span> : null}
      </div>

      <div className={card.cardBody}>
        <LinkageLine parts={linkageParts} hint={linkageHint} />
      </div>

      {/* Prefer standardized actions if provided; fallback to legacy footer */}
      {hasActions ? (
        <div className={card.inlineActions}>
          <ActionsArea actions={actions} />
        </div>
      ) : footer ? (
        <div className={card.inlineActions}>{footer}</div>
      ) : null}
    </div>
  );
}
