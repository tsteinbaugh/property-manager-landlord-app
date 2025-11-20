import React, { useEffect, useState } from "react";
import { useUser } from "@app/providers.jsx";
import { ROLES } from "@lib/rbac/roles.js";

const BASE_URL = "http://localhost:4000";

async function fetchOverview() {
  const res = await fetch(`${BASE_URL}/api/admin/overview`);
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `HTTP ${res.status} ${res.statusText} - ${text || "<no body>"}`
    );
  }
  return res.json();
}

export default function AdminHome() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { effectiveRole, impersonate, clearImpersonation } = useUser();
  const allRoles = Object.values(ROLES);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        setLoading(true);
        const data = await fetchOverview();
        if (!cancelled) {
          setStats(data);
          setError(null);
        }
      } catch (e) {
        console.error("Admin overview error", e);
        if (!cancelled) setError(e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section>
      <h2>Admin Overview</h2>

      {/* Impersonation controls */}
      <div
        style={{
          margin: "12px 0 20px",
          padding: 12,
          borderRadius: 8,
          border: "1px solid #e5e7eb",
          maxWidth: 420,
        }}
      >
        <h3 style={{ margin: "0 0 8px", fontSize: 16 }}>Impersonation</h3>
        <p style={{ margin: "0 0 8px", fontSize: 13, color: "#555" }}>
          Change your effective role to test permissions. This only affects your
          current session.
        </p>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <select
            value={effectiveRole || ""}
            onChange={(e) => impersonate && impersonate(e.target.value)}
          >
            {allRoles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={() => clearImpersonation && clearImpersonation()}
          >
            Clear impersonation
          </button>
        </div>
      </div>

      {/* Stats block (same as before) */}
      {loading && <p>Loading stats…</p>}
      {error && (
        <p style={{ color: "crimson" }}>
          Failed to load admin overview: {String(error.message || error)}
        </p>
      )}

      {stats && (
        <ul>
          <li>Total users: {stats.totalUsers}</li>
          <li>Landlords: {stats.landlords}</li>
          <li>Property managers: {stats.propertyManagers}</li>
          <li>Tenants (user accounts): {stats.tenants}</li>
          <li>Pending invites: {stats.pendingInvites}</li>
        </ul>
      )}

      {!loading && !error && !stats && (
        <p style={{ color: "#666" }}>No stats available.</p>
      )}
    </section>
  );
}
