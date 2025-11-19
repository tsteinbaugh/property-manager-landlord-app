import React, { useState } from "react";
import { useLeases } from "@features/leases/hooks/useLeases.js";
import { leasesApi } from "@features/leases/api/leases.api.js";
import ArchiveButton from "@shared/ui/ArchiveButton.jsx";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";

function toDateInputValue(iso) {
  if (!iso) return "";
  try {
    return iso.slice(0, 10);
  } catch {
    return "";
  }
}

function LeaseRow({ lease, canArchive, onArchive, onUpdated }) {
  const [isEditing, setEditing] = useState(false);

  const archived = lease.archived ?? lease.isArchived ?? false;

  const [tenantName, setTenantName] = useState(lease.tenantName || "");
  const [rentAmount, setRentAmount] = useState(
    lease.rentAmount != null ? String(lease.rentAmount) : ""
  );
  const [startDate, setStartDate] = useState(
    toDateInputValue(lease.startDate || lease.startDateISO)
  );
  const [endDate, setEndDate] = useState(
    toDateInputValue(lease.endDate || lease.endDateISO)
  );
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    const patch = {
      tenantName,
    };

    if (rentAmount.trim() !== "") {
      const parsed = Number(rentAmount.replace(/[^0-9.-]/g, ""));
      if (!Number.isFinite(parsed)) {
        alert("Rent must be a number.");
        return;
      }
      patch.rentAmount = parsed;
    }

    if (startDate) {
      patch.startDate = new Date(startDate).toISOString();
    }

    if (endDate) {
      patch.endDate = new Date(endDate).toISOString();
    } else {
      patch.endDate = null;
    }

    try {
      setSaving(true);
      await leasesApi.update(lease.id, patch);
      setEditing(false);
      if (onUpdated) onUpdated();
    } catch (err) {
      console.error("Failed to update lease", err);
      alert("Failed to update lease. See console for details.");
    } finally {
      setSaving(false);
    }
  };

  if (isEditing) {
    return (
      <li style={{ opacity: archived ? 0.6 : 1 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div>
            <strong>Lease #{lease.id}</strong>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            <input
              type="text"
              placeholder="Tenant name"
              value={tenantName}
              onChange={(e) => setTenantName(e.target.value)}
              style={{ minWidth: 160 }}
            />
            <input
              type="text"
              placeholder="Rent amount"
              value={rentAmount}
              onChange={(e) => setRentAmount(e.target.value)}
              style={{ width: 120 }}
            />
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
            <button type="button" onClick={handleSave} disabled={saving}>
              {saving ? "Saving…" : "Save"}
            </button>
            <button
              type="button"
              onClick={() => {
                setEditing(false);
                setTenantName(lease.tenantName || "");
                setRentAmount(
                  lease.rentAmount != null ? String(lease.rentAmount) : ""
                );
                setStartDate(
                  toDateInputValue(lease.startDate || lease.startDateISO)
                );
                setEndDate(
                  toDateInputValue(lease.endDate || lease.endDateISO)
                );
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </li>
    );
  }

  const start = lease.startDateISO || lease.startDate || "";
  const end = lease.endDateISO || lease.endDate || "";
  const fmt = (iso) => (iso ? iso : "");

  return (
    <li style={{ opacity: archived ? 0.6 : 1 }}>
      <strong>Lease #{lease.id}</strong> — {fmt(start)} → {fmt(end)}
      {archived && (
        <span style={{ marginLeft: 8, fontSize: 12, color: "#888" }}>
          (Archived)
        </span>
      )}
      <button
        type="button"
        style={{ marginLeft: 8 }}
        onClick={() => setEditing(true)}
      >
        Edit
      </button>
      {canArchive && (
        <ArchiveButton
          archived={archived}
          data-testid={`archive-btn-${lease.id}`}
          onToggle={async () => {
            await onArchive();
          }}
        />
      )}
    </li>
  );
}

/**
 * LeasesList
 * - Uses useLeases for list + archive
 * - Adds inline edit via leasesApi.update
 */
export default function LeasesList({
  includeArchived = false,
  role = ROLES.SYSADMIN,
}) {
  const canView = can(role, R.LEASES, A.VIEW);
  const canArchive = can(role, R.LEASES, A.ARCHIVE);

  const { data, isLoading, error, toggleArchive, refetch } = useLeases({
    includeArchived,
    role,
  });

  if (!canView)
    return (
      <div style={{ color: "#888" }}>
        You don’t have permission to view leases.
      </div>
    );
  if (isLoading) return <div>Loading leases…</div>;
  if (error)
    return (
      <div style={{ color: "crimson" }}>
        Error loading leases: {String(error.message || error)}
      </div>
    );

  return (
    <div>
      <h3 style={{ margin: "8px 0" }}>Leases</h3>
      <ul style={{ paddingLeft: 16, lineHeight: 1.7 }}>
        {data.map((l) => (
          <LeaseRow
            key={l.id}
            lease={l}
            canArchive={canArchive}
            onArchive={async () => {
              await toggleArchive(l.id);
            }}
            onUpdated={refetch}
          />
        ))}
      </ul>
    </div>
  );
}
