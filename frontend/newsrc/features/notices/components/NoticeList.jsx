import React from "react";
import { useNotices } from "@features/notices/hooks/useNotices.js";

const STATUSES = ["draft","prepared","sent","posted","delivered","acknowledged","withdrawn","closed"];

export default function NoticeList({ propertyId, leaseId, role, includeArchived = false }) {
  const { data, isLoading, setStatus } = useNotices({ propertyId, leaseId, role, includeArchived });

  if (!propertyId && !leaseId) return <div style={{ color:"#888" }}>No scope selected.</div>;
  if (isLoading) return <div>Loading notices…</div>;
  if (!data.length) return <div style={{ color:"#888" }}>No notices.</div>;

  return (
    <div>
      <h3 style={{ margin: "8px 0" }}>Notices</h3>
      <ul style={{ paddingLeft:16, lineHeight:1.7 }}>
        {data.map(n => (
          <li key={n.id}>
            <strong>{n.type || "Notice"}</strong>
            {n.status ? <> — <em data-testid={`notice-status-${n.id}`}>{n.status}</em></> : null}
            {n.mode ? ` — ${n.mode}` : ""}
            {n.servedAt ? ` — served ${new Date(n.servedAt).toLocaleString()}` : ""}
            <span style={{ marginLeft:8 }}>
              {STATUSES.map(s => (
                <button key={s} onClick={() => setStatus(n.id, s)} disabled={n.status === s} style={{ marginLeft:4 }}>
                  {s}
                </button>
              ))}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
