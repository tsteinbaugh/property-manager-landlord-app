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

export default function LinkageCard({
  title,
  archived = false,
  badgeText,
  badgeTone, // "idle" | "archived" | "active"
  onClick,
  linkageParts = [],
  linkageHint,
  footer, // ReactNode (buttons)
  ariaLabel,
}) {
  const tone =
    badgeTone ||
    (archived ? "archived" : "idle");

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

  return (
    <div
      className={`${card.card} ${archived ? card.cardArchived : ""}`}
      onClick={canClick ? onClick : undefined}
      role={canClick ? "button" : undefined}
      tabIndex={canClick ? 0 : undefined}
      onKeyDown={canClick ? handleKeyDown : undefined}
      style={{ cursor: canClick ? "pointer" : "default" }}
      aria-label={canClick ? (ariaLabel || `Open ${title || "item"}`) : undefined}
    >
      <div className={card.cardHeader}>
        <div className={ucardi.cardTitle}>{title || "Untitled"}</div>
        {badgeText ? (
          <span className={`${card.badge} ${badgeClass}`}>{badgeText}</span>
        ) : null}
      </div>

      <div className={card.cardBody}>
        <LinkageLine parts={linkageParts} hint={linkageHint} />
      </div>

      {footer ? <div className={card.inlineActions}>{footer}</div> : null}
    </div>
  );
}
