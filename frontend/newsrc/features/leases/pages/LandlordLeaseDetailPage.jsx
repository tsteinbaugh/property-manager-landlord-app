// newsrc/features/leases/pages/LandlordLeaseDetailPage.jsx
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import ArchiveButton from "@shared/ui/ArchiveButton.jsx";
import { leasesApi } from "@features/leases/api/leases.api.js";
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

  const [isEditing, setEditing] = useState(false);
  const [rentAmount, setRentAmount] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [isSaving, setSaving] = useState(false);
  const [isArchiving, setArchiving] = useState(false);

  const [tenantDetails, setTenantDetails] = useState([]);
  const [tenantDetailsLoading, setTenantDetailsLoading] = useState(false);
  const [tenantDetailsError, setTenantDetailsError] = useState(null);

  // Load lease
  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const leaseRow = await leasesApi.get(leaseId, { token });

        if (cancelled) return;

        if (!leaseRow) {
          setError(new Error("Lease not found"));
          setLoading(false);
          return;
        }

        setLease(leaseRow);
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
  }, [lease]);

  // Load full tenant details (including occupants) for this lease
  useEffect(() => {
    if (!lease || !token) {
      setTenantDetails([]);
      setTenantDetailsError(null);
      return;
    }

    // Collect tenant IDs from multi-tenant join table or fallback to single tenant
    let tenantIds = [];

    if (Array.isArray(lease.leaseTenants) && lease.leaseTenants.length > 0) {
      tenantIds = lease.leaseTenants
        .map((lt) => lt.tenantId)
        .filter(Boolean);
    } else if (lease.tenant?.id) {
      tenantIds = [lease.tenant.id];
    } else if (lease.tenantId) {
      tenantIds = [lease.tenantId];
    }

    const uniqueTenantIds = Array.from(new Set(tenantIds));

    if (uniqueTenantIds.length === 0) {
      setTenantDetails([]);
      setTenantDetailsError(null);
      return;
    }

    let cancelled = false;

    async function loadTenantDetails() {
      try {
        setTenantDetailsLoading(true);
        setTenantDetailsError(null);

        const results = [];
        for (const id of uniqueTenantIds) {
          try {
            const t = await tenantsApi.detail(id, { token });
            if (t) results.push(t);
          } catch (err) {
            console.error(
              "Failed to load tenant detail for lease occupants",
              err
            );
          }
        }

        if (!cancelled) {
          setTenantDetails(results);
        }
      } catch (err) {
        if (!cancelled) {
          console.error("Error loading tenant details for lease", err);
          setTenantDetailsError(err);
        }
      } finally {
        if (!cancelled) {
          setTenantDetailsLoading(false);
        }
      }
    }

    loadTenantDetails();

    return () => {
      cancelled = true;
    };
  }, [lease, token]);

  const isArchived = !!lease?.archived;

  const handleSave = async () => {
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
  const leaseTenants = Array.isArray(lease.leaseTenants)
    ? lease.leaseTenants
    : [];

  // Pooled occupants across all tenants on this lease
  const leaseOccupants = [];
  const seenOccupantIds = new Set();

  for (const t of tenantDetails || []) {
    const occs = Array.isArray(t.occupants) ? t.occupants : [];
    for (const o of occs) {
      if (!o || !o.id) continue;
      if (seenOccupantIds.has(o.id)) continue;

      seenOccupantIds.add(o.id);
      leaseOccupants.push({
        ...o,
        _tenantName: t.name || "(unnamed tenant)",
        _tenantId: t.id,
      });
    }
  }

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

        <div style={{ marginTop: 8 }}>
          <Link to={`/landlord/properties/new?forLease=1&leaseId=${lease.id}`}>
            Add / link property for this lease
          </Link>
        </div>
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
                  <span
                    style={{ marginLeft: 6, fontSize: 12, color: "#2563eb" }}
                  >
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

        {/* NEW: link to tenant add/link flow for this lease */}
        <div style={{ marginTop: 8 }}>
          <Link to={`/landlord/tenants/new?forLease=1&leaseId=${lease.id}`}>
            Add / link tenant for this lease
          </Link>
        </div>
      </section>
      
      {/* Pooled occupants for this lease (via tenants) */}
      <section
        style={{
          marginTop: 16,
          padding: 16,
          borderRadius: 12,
          border: "1px solid #e5e7eb",
          background: "#ffffff",
          maxWidth: 640,
        }}
      >
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
          Occupants on this lease
        </h3>

        {tenantDetailsLoading ? (
          <div style={{ fontSize: 14, color: "#6b7280" }}>
            Loading occupants…
          </div>
        ) : tenantDetailsError ? (
          <div style={{ fontSize: 14, color: "#b91c1c" }}>
            Failed to load occupants for this lease.
          </div>
        ) : leaseOccupants.length > 0 ? (
          <ul style={{ paddingLeft: 18, fontSize: 14 }}>
            {leaseOccupants.map((o) => (
              <li key={o.id} style={{ marginBottom: 4 }}>
                <strong>{o.name || "Unnamed occupant"}</strong>
                {o.relation && (
                  <span
                    style={{ marginLeft: 6, fontSize: 12, color: "#4b5563" }}
                  >
                    ({o.relation})
                  </span>
                )}
                <span
                  style={{ marginLeft: 8, fontSize: 12, color: "#6b7280" }}
                >
                  via{" "}
                  <Link to={`/landlord/tenants/${o._tenantId}`}>
                    {o._tenantName}
                  </Link>
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <div style={{ fontSize: 14, color: "#6b7280" }}>
            No occupants linked through tenants on this lease yet.
          </div>
        )}
      </section>
    </div>
  );
}
