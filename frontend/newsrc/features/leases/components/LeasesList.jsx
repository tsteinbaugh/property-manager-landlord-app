import React, { useEffect, useState } from "react";
import { useLeases } from "@features/leases/hooks/useLeases.js";
import { leasesApi } from "@features/leases/api/leases.api.js";
import ArchiveButton from "@shared/ui/ArchiveButton.jsx";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";
import AddLeaseForm from "../components/AddLeaseForm.jsx";

const BASE_URL = "http://localhost:4000";

function toDateInputValue(iso) {
  if (!iso) return "";
  try {
    return iso.slice(0, 10);
  } catch {
    return "";
  }
}

function LeaseRow({ lease, tenants, properties, canArchive, onArchive, onUpdated }) {
  const [isEditing, setEditing] = useState(false);

  const archived = lease.archived ?? lease.isArchived ?? false;

  const [tenantId, setTenantId] = useState(lease.tenantId || "");
  const [tenantName, setTenantName] = useState(lease.tenantName || "");
  const [propertyId, setPropertyId] = useState(lease.propertyId || "");
  const [propertyLabel, setPropertyLabel] = useState(lease.propertyLabel || "");
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

  const resetFields = () => {
    setTenantId(lease.tenantId || "");
    setTenantName(lease.tenantName || "");
    setPropertyId(lease.propertyId || "");
    setPropertyLabel(lease.propertyLabel || "");
    setRentAmount(lease.rentAmount != null ? String(lease.rentAmount) : "");
    setStartDate(toDateInputValue(lease.startDate || lease.startDateISO));
    setEndDate(toDateInputValue(lease.endDate || lease.endDateISO));
  };

  const handleSave = async () => {
    if (!tenantId) {
      alert("Please select a tenant.");
      return;
    }
    if (!propertyId) {
      alert("Please select a property.");
      return;
    }

    const patch = {
      tenantId,
      tenantName,
      propertyId,
      propertyLabel,
    };

    if (rentAmount.trim() !== "") {
      const parsed = Number(rentAmount.replace(/[^0-9.-]/g, ""));
      if (!Number.isFinite(parsed)) {
        alert("Rent must be a number.");
        return;
      }
      patch.rentAmount = parsed;
    } else {
      patch.rentAmount = null;
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

  const buildFileUrl = () => {
    if (!lease.fileUrl) return null;
    if (
      lease.fileUrl.startsWith("http://") ||
      lease.fileUrl.startsWith("https://")
    ) {
      return lease.fileUrl;
    }
    return `http://localhost:4000${lease.fileUrl}`;
  };

  const fileHref = buildFileUrl();

  if (isEditing) {
    return (
      <li style={{ opacity: archived ? 0.6 : 1 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div>
            <strong>Lease #{lease.id}</strong>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            {/* Tenant select + label */}
            <select
              value={tenantId || ""}
              onChange={(e) => setTenantId(e.target.value)}
              style={{ minWidth: 200 }}
            >
              <option value="">(Select tenant – required)</option>
              {tenants.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name} ({t.id.slice(0, 6)})
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Tenant label (text on lease, optional)"
              value={tenantName}
              onChange={(e) => setTenantName(e.target.value)}
              style={{ minWidth: 200 }}
            />

            {/* Property select + label */}
            <select
              value={propertyId || ""}
              onChange={(e) => setPropertyId(e.target.value)}
              style={{ minWidth: 220 }}
            >
              <option value="">(Select property – required)</option>
              {properties.map((p) => (
                <option key={p.id} value={p.id}>
                  {(p.name || p.address1) ?? p.id} ({p.id.slice(0, 6)})
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Property label (text on lease, optional)"
              value={propertyLabel}
              onChange={(e) => setPropertyLabel(e.target.value)}
              style={{ minWidth: 220 }}
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
                resetFields();
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

  const tenantLabel =
    lease.tenant && lease.tenant.name
      ? `${lease.tenant.name} (${lease.tenant.id.slice(0, 6)})`
      : lease.tenantName || "(no tenant assigned)";

  const propertyLabelDisplay =
    lease.property && (lease.property.name || lease.property.address1)
      ? `${lease.property.name || lease.property.address1} (${lease.property.id.slice(0, 6)})`
      : lease.propertyLabel || "(no property)";

  return (
    <li style={{ opacity: archived ? 0.6 : 1 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <div>
          <strong>Lease #{lease.id}</strong> — {fmt(start)} → {fmt(end)}
          {archived && (
            <span style={{ marginLeft: 8, fontSize: 12, color: "#888" }}>
              (Archived)
            </span>
          )}
        </div>

        <div style={{ fontSize: 13, color: "#333" }}>
          Tenant: {tenantLabel}
        </div>

        <div style={{ fontSize: 13, color: "#333" }}>
          Property: {propertyLabelDisplay}
        </div>

        {fileHref && (
          <div style={{ fontSize: 13 }}>
            <a href={fileHref} target="_blank" rel="noreferrer">
              View lease document
            </a>
            {lease.fileOriginalName && (
              <span style={{ marginLeft: 4 }}>({lease.fileOriginalName})</span>
            )}
          </div>
        )}

        <div style={{ marginTop: 4 }}>
          <button
            type="button"
            style={{ marginRight: 8 }}
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
        </div>
      </div>
    </li>
  );
}

/**
 * LeasesList
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

  const [tenants, setTenants] = useState([]);
  const [tenantsError, setTenantsError] = useState(null);
  const [properties, setProperties] = useState([]);
  const [propertiesError, setPropertiesError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadTenants() {
      try {
        const res = await fetch(`${BASE_URL}/api/tenants`);
        if (!res.ok) throw new Error(`Failed to load tenants: ${res.status}`);
        const json = await res.json();
        if (!cancelled) setTenants(Array.isArray(json) ? json : []);
      } catch (err) {
        console.error("Failed to load tenants", err);
        if (!cancelled) setTenantsError(err);
      }
    }

    async function loadProperties() {
      try {
        const res = await fetch(`${BASE_URL}/api/properties`);
        if (!res.ok) throw new Error(`Failed to load properties: ${res.status}`);
        const json = await res.json();
        if (!cancelled) setProperties(Array.isArray(json) ? json : []);
      } catch (err) {
        console.error("Failed to load properties", err);
        if (!cancelled) setPropertiesError(err);
      }
    }

    loadTenants();
    loadProperties();

    return () => {
      cancelled = true;
    };
  }, []);

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

  const handleCreated = async () => {
    await refetch();
  };

  return (
    <div>
      <h3 style={{ margin: "8px 0" }}>Leases</h3>

      {tenantsError && (
        <div style={{ color: "darkorange", marginBottom: 4, fontSize: 12 }}>
          Warning: failed to load tenants:{" "}
          {String(tenantsError.message || tenantsError)}
        </div>
      )}

      {propertiesError && (
        <div style={{ color: "darkorange", marginBottom: 4, fontSize: 12 }}>
          Warning: failed to load properties:{" "}
          {String(propertiesError.message || propertiesError)}
        </div>
      )}

      <AddLeaseForm
        onCreated={handleCreated}
        tenants={tenants}
        properties={properties}
      />

      <ul style={{ paddingLeft: 16, lineHeight: 1.7 }}>
        {data.map((l) => (
          <LeaseRow
            key={l.id}
            lease={l}
            tenants={tenants}
            properties={properties}
            canArchive={canArchive}
            onArchive={async () => {
              await toggleArchive(l.id);
            }}
            onUpdated={refetch}
          />
        ))}
      </ul>

      {data.length === 0 && (
        <div style={{ color: "#666", marginTop: 4 }}>No leases yet.</div>
      )}
    </div>
  );
}
