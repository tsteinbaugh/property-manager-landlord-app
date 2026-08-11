import React, { useState } from "react";
import { useLegalCases } from "@features/legal/hooks/useLegalCases.js";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";

const STATUSES = ["open", "pending_court", "judgment", "closed"];

export default function LegalCasePanel({ caseId, leaseId, propertyId, role = ROLES.SYSADMIN }) {
  // load via lease or property, then pick the single case from the list
  const { data, isLoading, error, setStatus, addEvent } = useLegalCases({ leaseId, propertyId, role });
  const caze = data.find((c) => c.id === caseId);

  const [eventKind, setEventKind] = useState("note");
  const [eventNote, setEventNote] = useState("");

  if (!caseId && !leaseId && !propertyId) return <div style={{ color: "#888" }}>No case context.</div>;

  if (!can(role, R.LEGAL_CASES, A.VIEW)) {
    return (
      <div>
        <h3 style={{ margin: "8px 0" }}>Legal Case</h3>
        <div style={{ color: "#888" }}>Insufficient permissions to view this legal case.</div>
      </div>
    );
  }

  if (isLoading) return <div>Loading legal case…</div>;
  if (error && error.message !== "forbidden") return <div style={{ color: "crimson" }}>Error loading case.</div>;
  if (!caze) return <div>No matching case found.</div>;

  const canStatus = can(role, R.LEGAL_CASES, A.STATUS);
  const canUpdate = can(role, R.LEGAL_CASES, A.UPDATE);

  return (
    <div>
      <h3 style={{ margin: "8px 0" }}>Legal Case</h3>
      <div><strong>{caze.title || "Case"}</strong></div>
      <div style={{ marginTop: 6 }}>
        Status: <strong data-testid="case-status">{caze.status}</strong>
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
        {STATUSES.map((st) => (
          <button
            key={st}
            onClick={() => setStatus(caze.id, st)}
            disabled={caze.status === st || !canStatus}
            title={canStatus ? `Set status → ${st}` : "Insufficient permissions"}
          >
            {st}
          </button>
        ))}
      </div>

      <div style={{ marginTop: 12 }}>
        <div style={{ fontWeight: 600, marginBottom: 4 }}>Add timeline event</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <select value={eventKind} onChange={(e) => setEventKind(e.target.value)}>
            <option value="note">note</option>
            <option value="notice_posted">notice_posted</option>
            <option value="hearing_scheduled">hearing_scheduled</option>
            <option value="judgment_entered">judgment_entered</option>
            <option value="writ_issued">writ_issued</option>
          </select>
          <input
            type="text"
            placeholder="event note..."
            value={eventNote}
            onChange={(e) => setEventNote(e.target.value)}
            style={{ flex: "1 1 320px" }}
          />
          <button
            onClick={async () => {
              await addEvent(caze.id, { kind: eventKind, note: eventNote });
              setEventNote("");
            }}
            disabled={!eventNote.trim() || !canUpdate}
            title={canUpdate ? undefined : "Insufficient permissions"}
          >
            Add
          </button>
        </div>
      </div>

      {Array.isArray(caze.events) && caze.events.length > 0 && (
        <div style={{ marginTop: 12 }}>
          <div style={{ fontWeight: 600, marginBottom: 4 }}>Timeline</div>
          <ul style={{ paddingLeft: 16, lineHeight: 1.7 }}>
            {caze.events.slice().reverse().map((ev, idx) => (
              <li key={idx}>
                {new Date(ev.at).toLocaleString()} — <em>{ev.kind}</em>
                {ev.note ? ` — ${ev.note}` : ""}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
