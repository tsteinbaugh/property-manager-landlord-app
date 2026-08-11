import React from "react";

export default function IncludeArchivedToggle({ value, onChange, label = "Include archived" }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14 }}>
      <input
        type="checkbox"
        checked={!!value}
        onChange={(e) => onChange?.(e.target.checked)}
        aria-label={label}
      />
      {label}
    </label>
  );
}
