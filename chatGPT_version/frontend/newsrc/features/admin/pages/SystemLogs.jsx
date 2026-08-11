import React from "react";

export default function SystemLogs() {
  return (
    <section>
      <h2>System Logs</h2>
      <p>Plumb to your log source later. For now this is a stub page.</p>
      <pre style={{ background: "#0b1020", color: "#cde1ff", padding: 12, borderRadius: 8 }}>
2025-11-14T23:59:00Z INFO  app started
2025-11-14T23:59:02Z WARN  slow query /api/users
2025-11-14T23:59:05Z ERROR auth: invalid token …
      </pre>
    </section>
  );
}
