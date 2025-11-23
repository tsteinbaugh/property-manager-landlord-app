import React, { useEffect, useState } from "react";
import { apiFetch } from "@lib/apiClient.js";
import { useUser } from "@app/providers.jsx";
import { Link } from "react-router-dom";

export default function PropertyDetails({ propertyId }) {
  const { token } = useUser() || {};
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await apiFetch(`/api/properties/${propertyId}/summary`, {
          token,
        });
        if (!cancelled) {
          setSummary(data);
        }
      } catch (err) {
        console.error("Failed to load property summary", err);
        if (!cancelled) {
          setError(err);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (propertyId) {
      load();
    }

    return () => {
      cancelled = true;
    };
  }, [propertyId, token]);

  if (loading) return <div>Loading property…</div>;
  if (error) {
    return (
      <div style={{ color: "crimson" }}>
        Error loading property: {String(error.message || error)}
      </div>
    );
  }
  if (!summary) return <div>No data.</div>;

  const { property, lease, tenant, occupants, pets, emergencyContacts } = summary;

  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 8 }}>
        <Link to="/dashboard">← Back to properties</Link>
      </div>

      <h2 style={{ margin: "8px 0" }}>
        {property.name || property.address1}
      </h2>
      <div style={{ color: "#555", marginBottom: 4 }}>
        {property.address1}, {property.city}, {property.state}{" "}
        {property.postalCode}
      </div>
      {property.isArchived && (
        <div style={{ color: "#888", fontSize: 12 }}>(Archived)</div>
      )}

      <hr style={{ margin: "16px 0" }} />

      <h3>Current Lease</h3>
      {lease ? (
        <div style={{ marginBottom: 12 }}>
          <div>Lease ID: <strong>{lease.id}</strong></div>
          <div>Status: <strong>{lease.status}</strong></div>
          <div>
            Rent:{" "}
            {lease.rentAmount != null ? `$${lease.rentAmount}` : "N/A"}
          </div>
          <div>Start: {lease.startDate || "—"}</div>
          <div>End: {lease.endDate || "(open-ended)"}</div>
          {lease.fileUrl && (
            <div style={{ marginTop: 4 }}>
              <a
                href={`http://localhost:4000${lease.fileUrl}`}
                target="_blank"
                rel="noreferrer"
              >
                View lease document
              </a>
              {lease.fileOriginalName && (
                <span style={{ marginLeft: 4 }}>
                  ({lease.fileOriginalName})
                </span>
              )}
            </div>
          )}
        </div>
      ) : (
        <div style={{ marginBottom: 12 }}>No active lease.</div>
      )}

      <hr style={{ margin: "16px 0" }} />

      <h3>Tenant</h3>
      {tenant ? (
        <div style={{ marginBottom: 12 }}>
          <div>
            <strong>{tenant.name}</strong>
          </div>
          <div>Email: {tenant.email || "—"}</div>
          <div>Phone: {tenant.phone || "—"}</div>
        </div>
      ) : (
        <div style={{ marginBottom: 12 }}>No tenant assigned.</div>
      )}

      <hr style={{ margin: "16px 0" }} />

      <h3>Occupants</h3>
      {occupants && occupants.length > 0 ? (
        <ul>
          {occupants.map((o) => (
            <li key={o.id}>
              {o.name}
              {o.relation ? ` (${o.relation})` : ""}
            </li>
          ))}
        </ul>
      ) : (
        <div>No occupants.</div>
      )}

      <h3>Pets</h3>
      {pets && pets.length > 0 ? (
        <ul>
          {pets.map((p) => (
            <li key={p.id}>
              {p.name}
              {p.type ? ` — ${p.type}` : ""}
              {p.weightLb != null ? ` (${p.weightLb} lb)` : ""}
            </li>
          ))}
        </ul>
      ) : (
        <div>No pets.</div>
      )}

      <h3>Emergency Contacts</h3>
      {emergencyContacts && emergencyContacts.length > 0 ? (
        <ul>
          {emergencyContacts.map((c) => (
            <li key={c.id}>
              {c.name}
              {c.relation ? ` (${c.relation})` : ""} —{" "}
              {c.phone || "no phone"}
            </li>
          ))}
        </ul>
      ) : (
        <div>No emergency contacts.</div>
      )}
    </div>
  );
}
