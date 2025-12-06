import React, { useEffect, useState } from "react";
import { apiFetch } from "@lib/apiClient.js";
import { useUser } from "@app/providers.jsx";
import { Link } from "react-router-dom";
import ArchiveButton from "@shared/ui/ArchiveButton.jsx";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";
import { propertiesApi } from "@features/properties/api/properties.api.js";
import { leasesApi } from "@features/leases/api/leases.api.js";
import { tenantsApi } from "@features/residents/api/tenants.api.js";

// Shared helper: what counts as an ACTIVE lease?
function isActiveLease(lease) {
  if (!lease) return false;
  if (lease.status !== "ACTIVE") return false;
  if (!lease.landlordId) return false;
  if (!lease.propertyId) return false;

  const today = new Date();

  if (!lease.startDate) return false;
  const start = new Date(lease.startDate);
  if (Number.isNaN(start.getTime())) return false;
  if (today < start) return false;

  if (!lease.endDate) {
    // month-to-month / open ended
    return true;
  }

  const end = new Date(lease.endDate);
  if (Number.isNaN(end.getTime())) return true;

  // inclusive of end date
  return today <= end;
}

export default function LandlordPropertyDetailPage({ propertyId }) {
  const { token, effectiveRole, isSysAdmin } = useUser() || {};

  // Normalize role to match ROLE_GRANTS keys (lowercase)
  const role = isSysAdmin
    ? ROLES.SYSADMIN
    : typeof effectiveRole === "string"
      ? effectiveRole.toLowerCase()
      : ROLES.LANDLORD;

  const canUpdate = can(role, R.PROPERTIES, A.UPDATE);
  const canArchiveGrant = can(role, R.PROPERTIES, A.ARCHIVE);

  const [summary, setSummary] = useState(null);
  const [leases, setLeases] = useState([]); // all leases for this property
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // edit state
  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [address1, setAddress1] = useState("");
  const [city, setCity] = useState("");
  const [stateVal, setStateVal] = useState("CO");
  const [postalCode, setPostalCode] = useState("");
  const [isSaving, setSaving] = useState(false);
  const [isArchiving, setArchiving] = useState(false);

  // NEW: active leases + tenant details (used for pooled occupants)
  const [activeLeases, setActiveLeases] = useState([]);
  const [leasesLoading, setLeasesLoading] = useState(false);
  const [leasesError, setLeasesError] = useState(null);

  const [tenantDetails, setTenantDetails] = useState([]);
  const [tenantDetailsLoading, setTenantDetailsLoading] = useState(false);
  const [tenantDetailsError, setTenantDetailsError] = useState(null);

  // Convenience aliases from summary (safe even when summary is null)
  const property = summary?.property || null;
  const currentLease = summary?.lease || null;
  const currentTenant = summary?.tenant || null;
  const summaryPets = summary?.pets || [];
  const summaryEmergencyContacts = summary?.emergencyContacts || [];

  // Load summary + full leases
  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const [summaryData, detail] = await Promise.all([
          apiFetch(`/api/properties/${propertyId}/summary`, { token }),
          propertiesApi.get(propertyId, { token }),
        ]);

        if (!cancelled) {
          setSummary(summaryData || null);
          setLeases(Array.isArray(detail?.leases) ? detail.leases : []);
        }
      } catch (err) {
        console.error("Failed to load property", err);
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

  // When summary loads, initialize edit fields
  useEffect(() => {
    if (property) {
      setName(property.name || "");
      setAddress1(property.address1 || "");
      setCity(property.city || "");
      setStateVal(property.state || "CO");
      setPostalCode(property.postalCode || "");
    }
  }, [property]);

  // Load ACTIVE leases for this property
  useEffect(() => {
    if (!token) return;
    if (!property || !property.id) {
      setActiveLeases([]);
      setLeasesError(null);
      return;
    }

    let cancelled = false;

    async function loadLeases() {
      try {
        setLeasesLoading(true);
        setLeasesError(null);

        // includeArchived=0 gives us non-ARCHIVED; we'll still apply isActiveLease
        const allLeases = await leasesApi.listAll({
          includeArchived: false,
          token,
        });

        const filtered = (Array.isArray(allLeases) ? allLeases : []).filter(
          (l) => l.propertyId === property.id && isActiveLease(l)
        );

        if (!cancelled) {
          setActiveLeases(filtered);
        }
      } catch (err) {
        if (!cancelled) {
          console.error("Failed to load active leases for property", err);
          setLeasesError(err);
        }
      } finally {
        if (!cancelled) {
          setLeasesLoading(false);
        }
      }
    }

    loadLeases();

    return () => {
      cancelled = true;
    };
  }, [property, token]);

  // Load tenant details (including occupants) for ACTIVE leases on this property
  useEffect(() => {
    if (!token) return;
    if (!activeLeases || activeLeases.length === 0) {
      setTenantDetails([]);
      setTenantDetailsError(null);
      return;
    }

    // Collect tenant IDs from multi-tenant join table or fallback fields
    const tenantIds = new Set();

    for (const lease of activeLeases) {
      if (Array.isArray(lease.leaseTenants) && lease.leaseTenants.length > 0) {
        for (const lt of lease.leaseTenants) {
          if (lt.tenantId) tenantIds.add(lt.tenantId);
        }
      } else if (lease.tenant?.id) {
        tenantIds.add(lease.tenant.id);
      } else if (lease.tenantId) {
        tenantIds.add(lease.tenantId);
      }
    }

    const ids = Array.from(tenantIds);
    if (ids.length === 0) {
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
        for (const id of ids) {
          try {
            const t = await tenantsApi.detail(id, { token });
            if (t) results.push(t);
          } catch (err) {
            console.error(
              "Failed to load tenant detail for property occupants",
              err
            );
          }
        }

        if (!cancelled) {
          setTenantDetails(results);
        }
      } catch (err) {
        if (!cancelled) {
          console.error("Error loading tenant details for property", err);
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
  }, [activeLeases, token]);

  const handleSave = async () => {
    if (!address1 || !city || !stateVal || !postalCode) {
      alert("Address, city, state, and ZIP are required.");
      return;
    }

    try {
      setSaving(true);
      const updated = await apiFetch(`/api/properties/${propertyId}`, {
        method: "PATCH",
        token,
        body: {
          name: name || address1,
          address1,
          city,
          state: stateVal,
          postalCode,
        },
      });

      // Update local summary so UI reflects the change
      setSummary((prev) =>
        prev
          ? {
              ...prev,
              property: {
                ...prev.property,
                name: name || address1,
                address1,
                city,
                state: stateVal,
                postalCode,
                isArchived: updated.isArchived ?? prev.property.isArchived,
              },
            }
          : prev
      );

      setEditing(false);
    } catch (err) {
      console.error("Failed to update property", err);
      alert("Failed to update property. Check console for details.");
    } finally {
      setSaving(false);
    }
  };

  const handleCancelEdit = () => {
    if (property) {
      setName(property.name || "");
      setAddress1(property.address1 || "");
      setCity(property.city || "");
      setStateVal(property.state || "CO");
      setPostalCode(property.postalCode || "");
    }
    setEditing(false);
  };

  const handleToggleArchive = async () => {
    if (!property) return;

    const currentlyArchived = !!property.isArchived;

    // If we're archiving (active -> archived)
    if (!currentlyArchived) {
      const ok = window.confirm(
        "Are you sure you want to archive this property?\n\n" +
          "This will make it read-only for landlords. Only a system administrator can unarchive it."
      );
      if (!ok) return;
    } else {
      // Unarchive request
      if (!isSysAdmin) {
        alert(
          "Only a system administrator can unarchive an archived property. " +
            "Please contact your system admin if this needs to be reactivated."
        );
        return;
      }
    }

    try {
      setArchiving(true);
      const updated = await apiFetch(
        `/api/properties/${propertyId}/archive`,
        {
          method: "PATCH",
          token,
        }
      );

      // Update archive flag on the property
      setSummary((prev) =>
        prev
          ? {
              ...prev,
              property: {
                ...prev.property,
                isArchived: updated.isArchived,
              },
            }
          : prev
      );
    } catch (err) {
      console.error("Failed to toggle archived state", err);
      alert("Failed to change archive status. Check console for details.");
    } finally {
      setArchiving(false);
    }
  };

  if (loading) return <div>Loading property…</div>;
  if (error) {
    return (
      <div style={{ color: "crimson" }}>
        Error loading property: {String(error.message || error)}
      </div>
    );
  }
  if (!summary || !property) return <div>No data.</div>;

  const title = property.name || property.address1;
  const isArchived = !!property.isArchived;

  const canEditNow = canUpdate && (!isArchived || isSysAdmin);
  const canArchiveNow = !isArchived && canArchiveGrant;
  const canUnarchiveNow = isArchived && isSysAdmin;
  const showArchiveButton = canArchiveNow || canUnarchiveNow;

  // Pooled occupants across tenants on ACTIVE leases for this property
  const propertyOccupants = [];
  const seenOccupantIds = new Set();

  for (const t of tenantDetails || []) {
    const occs = Array.isArray(t.occupants) ? t.occupants : [];
    for (const o of occs) {
      if (!o || !o.id) continue;
      if (seenOccupantIds.has(o.id)) continue;

      seenOccupantIds.add(o.id);
      propertyOccupants.push({
        ...o,
        _tenantName: t.name || "(unnamed tenant)",
        _tenantId: t.id,
      });
    }
  }

  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 8 }}>
        {/* landlord landing page */}
        <Link to="/landlord/properties">← Back to properties</Link>
      </div>

      {/* Header + actions */}
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
                {property.address1}, {property.city}, {property.state}{" "}
                {property.postalCode}
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
                gap: 6,
                maxWidth: 480,
              }}
            >
              <input
                type="text"
                placeholder="Name (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Street address"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
              />
              <div style={{ display: "flex", gap: 6 }}>
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  style={{ flex: 2 }}
                />
                <input
                  type="text"
                  placeholder="State"
                  value={stateVal}
                  onChange={(e) => setStateVal(e.target.value)}
                  style={{ width: 70 }}
                />
                <input
                  type="text"
                  placeholder="ZIP"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  style={{ width: 100 }}
                />
              </div>
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
                  ? "Only a system administrator can unarchive this property."
                  : "Insufficient permissions to archive this property."
              }
              style={{ opacity: 0.5 }}
            >
              {isArchived ? "Unarchive" : "Archive"}
            </button>
          )}
        </div>
      </div>

      <hr style={{ margin: "16px 0" }} />

      {/* Current active lease (from /summary) */}
      <h3>Current Lease</h3>
      {currentLease ? (
        <div style={{ marginBottom: 12 }}>
          <div>
            Lease ID: <strong>{currentLease.id}</strong>
          </div>
          <div>
            Status: <strong>{currentLease.status}</strong>
          </div>
          <div>
            Rent:{" "}
            {currentLease.rentAmount != null
              ? `$${currentLease.rentAmount}`
              : "N/A"}
          </div>
          <div>Start: {currentLease.startDate || "—"}</div>
          <div>End: {currentLease.endDate || "(open-ended)"}</div>
          {currentLease.fileUrl && (
            <div style={{ marginTop: 4 }}>
              <a
                href={`http://localhost:4000${currentLease.fileUrl}`}
                target="_blank"
                rel="noreferrer"
              >
                View lease document
              </a>
              {currentLease.fileOriginalName && (
                <span style={{ marginLeft: 4 }}>
                  ({currentLease.fileOriginalName})
                </span>
              )}
            </div>
          )}
        </div>
      ) : (
        <div style={{ marginBottom: 12 }}>No active lease.</div>
      )}

      {/* All leases for this property (from /api/properties/:id) */}
      <hr style={{ margin: "16px 0" }} />
      <h3>All leases for this property</h3>
      {leases.length > 0 ? (
        <ul style={{ paddingLeft: 18 }}>
          {leases.map((l) => {
            const leaseTenants = Array.isArray(l.leaseTenants)
              ? l.leaseTenants
              : [];
            const tenantNames = leaseTenants
              .map((lt) => lt.tenant?.name || lt.tenantName)
              .filter(Boolean);

            return (
              <li key={l.id} style={{ marginBottom: 6 }}>
                <Link to={`/landlord/leases/${l.id}`}>
                  Lease {l.id.slice(0, 8)}
                </Link>{" "}
                – {l.status || "UNKNOWN"}
                {l.rentAmount != null && ` · $${l.rentAmount}/mo`}
                {l.startDate && ` · from ${l.startDate}`}
                {l.endDate && ` to ${l.endDate}`}
                {tenantNames.length > 0 && (
                  <div style={{ fontSize: 12, color: "#4b5563" }}>
                    Tenants: {tenantNames.join(", ")}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <div>No leases recorded for this property yet.</div>
      )}

      <div style={{ marginTop: 8, marginBottom: 8 }}>
        <Link to={`/landlord/leases/new?propertyId=${property.id}`}>
          + Add lease for this property
        </Link>
      </div>

      <hr style={{ margin: "16px 0" }} />

      <h3>Tenant</h3>
      {currentTenant ? (
        <div style={{ marginBottom: 12 }}>
          <div>
            <strong>{currentTenant.name}</strong>
          </div>
          <div>Email: {currentTenant.email || "—"}</div>
          <div>Phone: {currentTenant.phone || "—"}</div>
        </div>
      ) : (
        <div style={{ marginBottom: 12 }}>No tenant assigned.</div>
      )}

      <hr style={{ margin: "16px 0" }} />

      {/* Occupants at this property (via ACTIVE leases) */}
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
          Occupants at this property (active leases)
        </h3>

        {leasesLoading || tenantDetailsLoading ? (
          <div style={{ fontSize: 14, color: "#6b7280" }}>
            Loading occupants…
          </div>
        ) : leasesError || tenantDetailsError ? (
          <div style={{ fontSize: 14, color: "#b91c1c" }}>
            Failed to load occupants for this property.
          </div>
        ) : propertyOccupants.length > 0 ? (
          <ul style={{ paddingLeft: 18, fontSize: 14 }}>
            {propertyOccupants.map((o) => (
              <li key={o.id} style={{ marginBottom: 4 }}>
                <strong>{o.name || "Unnamed occupant"}</strong>
                {o.relation && (
                  <span
                    style={{
                      marginLeft: 6,
                      fontSize: 12,
                      color: "#4b5563",
                    }}
                  >
                    ({o.relation})
                  </span>
                )}
                <span
                  style={{
                    marginLeft: 8,
                    fontSize: 12,
                    color: "#6b7280",
                  }}
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
            No occupants linked through active leases at this property yet.
          </div>
        )}
      </section>

      <h3>Pets</h3>
      {summaryPets && summaryPets.length > 0 ? (
        <ul>
          {summaryPets.map((p) => (
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
      {summaryEmergencyContacts && summaryEmergencyContacts.length > 0 ? (
        <ul>
          {summaryEmergencyContacts.map((c) => (
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
