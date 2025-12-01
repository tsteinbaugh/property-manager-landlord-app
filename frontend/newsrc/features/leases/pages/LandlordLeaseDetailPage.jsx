import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import ArchiveButton from "@shared/ui/ArchiveButton.jsx";
import { leasesApi } from "@features/leases/api/leases.api.js";
import { propertiesApi } from "@features/properties/api/properties.api.js";
import { tenantsApi } from "@features/residents/api/tenants.api.js";
import { ROLES } from "@lib/rbac/roles.js";

export default function LandlordLeaseDetailPage() {
  const { leaseId } = useParams();
  const { effectiveRole, isSysAdmin, token } = useUser() || {};

  const role =
    isSysAdmin && effectiveRole !== ROLES.SYSADMIN
      ? ROLES.SYSADMIN
      : effectiveRole || ROLES.LANDLORD;

  const [lease, setLease] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [properties, setProperties] = useState([]);
  const [tenants, setTenants] = useState([]);

  const [isEditing, setEditing] = useState(false);
  const [rentAmount, setRentAmount] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedPropertyId, setSelectedPropertyId] = useState("");
  const [selectedTenantId, setSelectedTenantId] = useState("");

  const [isSaving, setSaving] = useState(false);
  const [isArchiving, setArchiving] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const [leaseRow, props, ts] = await Promise.all([
          leasesApi.get(leaseId, { token }),
          propertiesApi.list(),
          tenantsApi.list({ token }),
        ]);

        if (cancelled) return;

        if (!leaseRow) {
          setError(new Error("Lease not found"));
          setLoading(false);
          return;
        }

        setLease(leaseRow);
        setProperties(Array.isArray(props) ? props : []);
        setTenants(Array.isArray(ts) ? ts : []);
      } catch (err) {
        console.error("Failed to load lease", err);
        if (!cancelled) {
          setError(err);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (leaseId && token) {
      load();
    } else if (!leaseId) {
      setLoading(false);
      setError(new Error("Missing lease id"));
    }

    return () => {
      cancelled = true;
    };
  }, [leaseId, token]);

  // Initialize edit state when lease changes
  useEffect(() => {
    if (!lease) return;

    setRentAmount(
      lease.rentAmount === null || lease.rentAmount === undefined
        ? ""
        : String(lease.rentAmount)
    );
    setStatus(lease.status || "");
    setStartDate(lease.startDate || "");
    setEndDate(lease.endDate || "");

    // property/tenant selections
    setSelectedPropertyId(lease.property?.id || "");
    setSelectedTenantId(lease.tenant?.id || "");
  }, [lease]);

  const isArchived = !!lease?.archived;

  const handleSave = async () => {
    if (!selectedPropertyId) {
      alert("Property is required.");
      return;
    }
    if (!selectedTenantId) {
      alert("Tenant is required.");
      return;
    }

    // confirmation if linkages changed
    const originalPropertyId = lease.property?.id || "";
    const originalTenantId = lease.tenant?.id || "";

    const propertyChanged = originalPropertyId && originalPropertyId !== selectedPropertyId;
    const tenantChanged = originalTenantId && originalTenantId !== selectedTenantId;

    if (propertyChanged || tenantChanged) {
      const messageLines = [];
      if (propertyChanged) {
        messageLines.push(
          "You are changing the property linked to this lease. " +
            "This will move the lease to a different property."
        );
      }
      if (tenantChanged) {
        messageLines.push(
          "You are changing the tenant linked to this lease. " +
            "This will move the lease to a different tenant."
        );
      }
      messageLines.push("");
      messageLines.push("Are you sure you want to continue?");

      const ok = window.confirm(messageLines.join("\n"));
      if (!ok) return;
    }

    try {
      setSaving(true);

      const rawRentAmount = rentAmount.trim();
      let normalizedRentAmount = null;
      if (rawRentAmount) {
        const parsed = Number(rawRentAmount);
        if (!Number.isNaN(parsed) && parsed >= 0) {
          normalizedRentAmount = parsed;
        } else {
          alert("Rent amount must be a positive number.");
          return;
        }
      }

      const updated = await leasesApi.update(
        lease.id,
        {
          propertyId: selectedPropertyId,
          tenantId: selectedTenantId,
          rentAmount: normalizedRentAmount,
          status: status.trim(),
          startDate: startDate.trim(),
          endDate: endDate.trim(),
        },
        { token }
      );

      setLease(updated);
      setEditing(false);
    } catch (err) {
      console.error("Failed to update lease", err);
      alert("Failed to update lease. Check console for details.");
    } finally {
      setSaving(false);
    }
  };

  const handleCancelEdit = () => {
    if (lease) {
      setRentAmount(
        lease.rentAmount === null || lease.rentAmount === undefined
          ? ""
          : String(lease.rentAmount)
      );
      setStatus(lease.status || "");
      setStartDate(lease.startDate || "");
      setEndDate(lease.endDate || "");
      setSelectedPropertyId(lease.property?.id || "");
      setSelectedTenantId(lease.tenant?.id || "");
    }
    setEditing(false);
  };

  const handleToggleArchive = async () => {
    if (!lease) return;

    if (!isArchived) {
      const ok = window.confirm(
        "Are you sure you want to archive this lease?\n\n" +
          "It will be hidden from active lease lists. Only a system administrator can unarchive it."
      );
      if (!ok) return;
    } else {
      if (!isSysAdmin) {
        alert(
          "Only a system administrator can unarchive an archived lease.\n\n" +
            "Please contact your system administrator if this needs to be reactivated."
        );
        return;
      }
    }

    try {
      setArchiving(true);
      const updated = await leasesApi.toggleArchive(lease.id, { token });
      setLease(updated);
    } catch (err) {
      console.error("Failed to toggle lease archived state", err);
      alert("Failed to change archive status. Check console for details.");
    } finally {
      setArchiving(false);
    }
  };

  if (loading) return <div>Loading lease…</div>;

  if (error) {
    return (
      <div style={{ color: "crimson", padding: 16 }}>
        Error loading lease: {String(error.message || error)}
      </div>
    );
  }

  if (!lease) {
    return <div style={{ padding: 16 }}>No data.</div>;
  }

  const property = lease.property || null;
  const primaryTenant = lease.tenant || null;
  const leaseTenants = Array.isArray(lease.leaseTenants)
    ? lease.leaseTenants
    : [];

  const title =
    lease.propertyLabel ||
    property?.name ||
    property?.address1 ||
    "Lease";

  const canEditNow = !isArchived || isSysAdmin;
  const canArchiveNow = !isArchived; // any landlord can archive
  const canUnarchiveNow = isArchived && isSysAdmin;
  const showArchiveButton = canArchiveNow || canUnarchiveNow;

  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 8 }}>
        <Link to="/landlord/leases">← Back to leases</Link>
      </div>

      {/* header + actions */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 12,
          marginBottom: 12,
        }}
      >
        <div>
          {!isEditing ? (
            <>
              <h2 style={{ margin: "8px 0" }}>{title}</h2>
              <div style={{ color: "#555", marginBottom: 4 }}>
                {lease.rentAmount && (
                  <div>Rent amount: {lease.rentAmount}</div>
                )}
              </div>
              <div style={{ color: "#555", marginBottom: 4 }}>
                {lease.status && <div>Status: {lease.status}</div>}
              </div>
              <div style={{ color: "#555", marginBottom: 4 }}>
                {lease.startDate && <div>Start date: {lease.startDate}</div>}
              </div>
              <div style={{ color: "#555", marginBottom: 4 }}>
                {lease.endDate && <div>End Date: {lease.endDate}</div>}
              </div>
              {isArchived && (
                <div style={{ color: "#888", fontSize: 12 }}>
                  (Archived – read-only for landlords)
                </div>
              )}
            </>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                maxWidth: 520,
              }}
            >
              {/* Property selector */}
              <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span>Property</span>
                <select
                  value={selectedPropertyId}
                  onChange={(e) => setSelectedPropertyId(e.target.value)}
                >
                  <option value="">Select a property…</option>
                  {properties.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name || p.address || p.address1 || p.id}
                    </option>
                  ))}
                </select>
              </label>

              {/* Tenant selector */}
              <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span>Primary tenant</span>
                <select
                  value={selectedTenantId}
                  onChange={(e) => setSelectedTenantId(e.target.value)}
                >
                  <option value="">Select a tenant…</option>
                  {tenants.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name} {t.email ? `(${t.email})` : ""}
                    </option>
                  ))}
                </select>
              </label>

              <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span>Rent amount</span>
                <input
                  type="number"
                  min="0"
                  step="1"
                  placeholder="Rent amount"
                  value={rentAmount}
                  onChange={(e) => setRentAmount(e.target.value)}
                />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span>Status</span>
                <input
                  type="text"
                  placeholder="Status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span>Start date</span>
                <input
                  type="text"
                  placeholder="YYYY-MM-DD"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span>End date</span>
                <input
                  type="text"
                  placeholder="YYYY-MM-DD"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </label>
              <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                <button
                  type="button"
                  onClick={handleSave}
                  disabled={isSaving}
                >
                  {isSaving ? "Saving…" : "Save"}
                </button>
                <button type="button" onClick={handleCancelEdit}>
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          {canEditNow && !isEditing && (
            <button type="button" onClick={() => setEditing(true)}>
              Edit
            </button>
          )}

          {showArchiveButton ? (
            <ArchiveButton
              archived={isArchived}
              onToggle={handleToggleArchive}
              disabled={isArchiving}
            />
          ) : (
            <button
              type="button"
              disabled
              title={
                isArchived
                  ? "Only a system administrator can unarchive this lease."
                  : "Insufficient permissions to archive this lease."
              }
              style={{ opacity: 0.5 }}
            >
              {isArchived ? "Unarchive" : "Archive"}
            </button>
          )}
        </div>
      </div>

      <hr style={{ margin: "16px 0" }} />

      {/* Lease info */}
      <section
        style={{
          padding: 16,
          borderRadius: 12,
          border: "1px solid #e5e7eb",
          background: "#ffffff",
          maxWidth: 640,
          marginBottom: 16,
        }}
      >
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>
          Lease info
        </h3>

        <dl
          style={{
            display: "grid",
            gridTemplateColumns: "120px 1fr",
            rowGap: 8,
            columnGap: 12,
            fontSize: 14,
          }}
        >
          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Rent Amount</dt>
          <dd>{lease.rentAmount || "—"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Status</dt>
          <dd>{lease.status || "Not set"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Start Date</dt>
          <dd>{lease.startDate || "Not set"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>End Date</dt>
          <dd>{lease.endDate || "Not set"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Archive</dt>
          <dd>{isArchived ? "Archived" : "Active"}</dd>
        </dl>
      </section>

      <hr style={{ margin: "16px 0" }} />

      {/* Linked property */}
      <section
        style={{
          padding: 16,
          borderRadius: 12,
          border: "1px solid #e5e7eb",
          background: "#ffffff",
          maxWidth: 640,
          marginBottom: 16,
        }}
      >
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
          Property
        </h3>
        {lease.property ? (
          <div style={{ fontSize: 14 }}>
            <div>
              <strong>{lease.property.name || lease.property.address1}</strong>
            </div>
            <div>
              {lease.property.address1}, {lease.property.city},{" "}
              {lease.property.state} {lease.property.postalCode}
            </div>
          </div>
        ) : lease.propertyId ? (
          <div style={{ fontSize: 14 }}>
            Linked to property ID <code>{lease.propertyId}</code>, but details
            are unavailable.
          </div>
        ) : (
          <div style={{ fontSize: 14, color: "#6b7280" }}>
            No property linked yet.
          </div>
        )}
      </section>

      {/* Linked tenants */}
      <section
        style={{
          padding: 16,
          borderRadius: 12,
          border: "1px solid #e5e7eb",
          background: "#ffffff",
          maxWidth: 640,
        }}
      >
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
          Tenants on this lease
        </h3>

        {Array.isArray(lease.leaseTenants) && lease.leaseTenants.length > 0 ? (
          <ul style={{ paddingLeft: 18, fontSize: 14 }}>
            {lease.leaseTenants.map((lt) => (
              <li key={lt.id}>
                {lt.tenantName || lt.tenantId || "Unnamed tenant"}
                {lt.isPrimary && (
                  <span style={{ marginLeft: 6, fontSize: 12, color: "#2563eb" }}>
                    (primary)
                  </span>
                )}
              </li>
            ))}
          </ul>
        ) : lease.tenant ? (
          <div style={{ fontSize: 14 }}>
            <strong>{lease.tenant.name}</strong>
            {lease.tenant.email && <> — {lease.tenant.email}</>}
          </div>
        ) : lease.tenantId ? (
          <div style={{ fontSize: 14 }}>
            Linked to tenant ID <code>{lease.tenantId}</code>, but details are
            unavailable.
          </div>
        ) : (
          <div style={{ fontSize: 14, color: "#6b7280" }}>
            No tenants linked yet.
          </div>
        )}
      </section>
    </div>
  );
}
