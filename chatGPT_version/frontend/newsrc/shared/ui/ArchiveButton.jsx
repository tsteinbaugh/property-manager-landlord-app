import React from "react";

export default function ArchiveButton({ archived, onToggle }) {
  return (
    <button
      onClick={onToggle}
      title={archived ? "Unarchive" : "Archive"}
      style={{
        fontSize: 12,
        padding: "2px 8px",
        borderRadius: 8,
        background: archived ? "#ccc" : "#f0f0f0",
        color: archived ? "#555" : "#222",
      }}
    >
      {archived ? "Unarchive" : "Archive"}
    </button>
  );
}
