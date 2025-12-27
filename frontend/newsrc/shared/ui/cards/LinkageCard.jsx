import React from "react";
import ui from "@shared/styles/CardLayout.module.css"

function LinkageLine({ parts = [], hint }) {
  const cleaned = (parts || []).filter(Boolean);
  if (!cleaned.length) return null;

  return (
    <div className={ui.muted} style={{ marginTop: 6 }}>
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
      ? ui.badgeActive
      : tone === "archived"
        ? ui.badgeArchived
        : ui.badgeIdle;

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
      className={`${ui.card} ${archived ? ui.cardArchived : ""}`}
      onClick={canClick ? onClick : undefined}
      role={canClick ? "button" : undefined}
      tabIndex={canClick ? 0 : undefined}
      onKeyDown={canClick ? handleKeyDown : undefined}
      style={{ cursor: canClick ? "pointer" : "default" }}
      aria-label={canClick ? (ariaLabel || `Open ${title || "item"}`) : undefined}
    >
      <div className={ui.cardHeader}>
        <div className={ui.cardTitle}>{title || "Untitled"}</div>
        {badgeText ? (
          <span className={`${ui.badge} ${badgeClass}`}>{badgeText}</span>
        ) : null}
      </div>

      <div className={ui.cardBody}>
        <LinkageLine parts={linkageParts} hint={linkageHint} />
      </div>

      {footer ? <div className={ui.inlineActions}>{footer}</div> : null}
    </div>
  );
}
