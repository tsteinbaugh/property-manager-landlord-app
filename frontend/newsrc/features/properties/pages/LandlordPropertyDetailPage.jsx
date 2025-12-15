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

  // Summary from /api/properties/:id/summary
  const [summary, setSummary] = useState(null);

  // Full detail (leases + tenants + occupants + pets + emergency contacts+ vehicles) from /api/properties/:id
  const [propertyDetail, setPropertyDetail] = useState(null);

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

  // Convenience aliases from summary
  const currentLease = summary?.lease || null;
  const currentTenant = summary?.tenant || null;

  // Property from summary and/or detail
  const propertyFromSummary = summary?.property || null;
  const richProperty = propertyDetail || propertyFromSummary || null;
  const property = propertyFromSummary || richProperty;

  const leasesForProperty = Array.isArray(richProperty?.leases)
    ? richProperty.leases
    : [];

  const tenantsForProperty = Array.isArray(richProperty?.tenants)
    ? richProperty.tenants
    : [];

  const occupantsForProperty = Array.isArray(richProperty?.occupants)
    ? richProperty.occupants
    : [];

  const petsForProperty = Array.isArray(richProperty?.pets)
    ? richProperty.pets
    : [];

  const emergencyContactsForProperty = Array.isArray(richProperty?.emergencyContacts)
    ? richProperty.emergencyContacts
    : [];

  const vehiclesForProperty = Array.isArray(richProperty?.vehicles)
    ? richProperty.vehicles
    : [];

  // Load summary + full detail
  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const [summaryData, detail] = await Promise.all([
          apiFetch(`/api/properties/${propertyId}/summary`, { token }),
          propertiesApi.detail(propertyId, { token }),
        ]);

        if (!cancelled) {
          setSummary(summaryData || null);
          setPropertyDetail(detail || null);
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

  // When property loads (from summary), initialize edit fields
  useEffect(() => {
    if (property) {
      setName(property.name || "");
      setAddress1(property.address1 || "");
      setCity(property.city || "");
      setStateVal(property.state || "CO");
      setPostalCode(property.postalCode || "");
    }
  }, [property]);

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

      // Update summary copy
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

      // Update detail copy
      setPropertyDetail((prev) =>
        prev
          ? {
              ...prev,
              name: name || address1,
              address1,
              city,
              state: stateVal,
              postalCode,
              isArchived: updated.isArchived ?? prev.isArchived,
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

    if (!currentlyArchived) {
      const ok = window.confirm(
        "Are you sure you want to archive this property?\n\n" +
          "This will make it read-only for landlords. Only a system administrator can unarchive it."
      );
      if (!ok) return;
    } else {
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

      // Update summary flag
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

      // Update detail flag
      setPropertyDetail((prev) =>
        prev
          ? {
              ...prev,
              isArchived: updated.isArchived,
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

  const handleUnlinkLease = async (leaseId) => {
    if (!leaseId || !property) return;

    const ok = window.confirm(
      "Unlink this lease from the property?\n\n" +
        "This does NOT delete the lease; it just removes the property association."
    );
    if (!ok) return;

    try {
      // 1) Update the lease: drop the propertyId
      await leasesApi.update(
        leaseId,
        { propertyId: null },
        { token }
      );

      // 2) Reload BOTH summary and rich detail so everything is in sync
      const [summaryData, detail] = await Promise.all([
        apiFetch(`/api/properties/${property.id}/summary`, { token }),
        propertiesApi.detail(property.id, { token }),
      ]);

      setSummary(summaryData || null);
      setPropertyDetail(detail || null);
    } catch (err) {
      console.error("Failed to unlink lease from property", err);
      alert("Failed to unlink lease. Check console for details.");
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
  if (!property) return <div>No data.</div>;

  const title = property.name || property.address1;
  const isArchived = !!property.isArchived;

  const canEditNow = canUpdate && (!isArchived || isSysAdmin);
  const canArchiveNow = !isArchived && canArchiveGrant;
  const canUnarchiveNow = isArchived && isSysAdmin;
  const showArchiveButton = canArchiveNow || canUnarchiveNow;

  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 8 }}>
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

      {/* Property info */}
      <section
        style={{
          marginTop: 16,
          padding: 16,
          borderRadius: 12,
          border: "1px solid #e5e7eb",
          background: "#ffffff",
          maxWidth: 720,
        }}
      >
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
          Property info
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
          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Address</dt>
          <dd>{property.address1 || "———"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}></dt>
          <dd>{`${property.city}, ${property.state} ${property.postalCode}` || " "}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>No. of Bedrooms</dt>
          <dd>{property.bedrooms || "———"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>No. of Bathrooms</dt>
          <dd>{property.bathrooms || "———"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Square Feet</dt>
          <dd>{property.sqft || "———"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Year built</dt>
          <dd>{property.yearBuilt || "———"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Additional notes</dt>
          <dd>{property.notes || "———"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Archive</dt>
          <dd>{isArchived ? "Archived" : "Active"}</dd>
        </dl>
      </section>

      {/* Leases on this property (from richProperty) */}
      <section
        style={{
          marginTop: 16,
          padding: 16,
          borderRadius: 12,
          border: "1px solid #e5e7eb",
          background: "#ffffff",
          maxWidth: 720,
        }}
      >
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
          Leases for this property
        </h3>

        {leasesForProperty.length > 0 ? (
          <ul style={{ paddingLeft: 18 }}>
            {leasesForProperty.map((lease) => (
              <li key={lease.id} style={{ marginBottom: 8 }}>
                <div>
                  <Link to={`/landlord/leases/${lease.id}`}>
                    Lease
                  </Link>{" "}
                  – {lease.status || "UNKNOWN"}
                  {lease.rentAmount != null && ` · $${lease.rentAmount}/mo`}
                </div>

                {Array.isArray(lease.leaseTenants) &&
                  lease.leaseTenants.length > 0 && (
                    <div style={{ fontSize: 13, color: "#4b5563" }}>
                      Tenants:{" "}
                      {lease.leaseTenants
                        .map(
                          (lt) =>
                            lt.tenant?.name ||
                            lt.tenantName ||
                            "(unnamed)"
                        )
                        .join(", ")}
                    </div>
                  )}

                <button
                  type="button"
                  onClick={() => handleUnlinkLease(lease.id)}
                  style={{ fontSize: 12, marginTop: 4 }}
                >
                  Unlink lease from this property
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div style={{ fontSize: 14, color: "#6b7280" }}>
            No leases linked to this property yet.
          </div>
        )}
        <div style={{ marginTop: 8, marginBottom: 8 }}>
          <Link to={`/landlord/leases/new?propertyId=${property.id}`}>
            + Add lease for this property
          </Link>
        </div>
      </section>

      {/* Tenants aggregated across leases */}
      <section
        style={{
          marginTop: 16,
          padding: 16,
          borderRadius: 12,
          border: "1px solid #e5e7eb",
          background: "#ffffff",
          maxWidth: 720,
        }}
      >
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
          Tenants for this property
        </h3>

        {tenantsForProperty.length > 0 ? (
          <ul style={{ paddingLeft: 18 }}>
            {tenantsForProperty.map((t) => (
              <li key={t.id} style={{ marginBottom: 4 }}>
                <Link to={`/landlord/tenants/${t.id}`}>
                  {t.name || "(unnamed tenant)"}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div style={{ fontSize: 14, color: "#6b7280" }}>
            No tenants associated with this property yet.
          </div>
        )}
      </section>

      {/* Occupants aggregated via tenant links */}
      <section
        style={{
          marginTop: 16,
          padding: 16,
          borderRadius: 12,
          border: "1px solid #e5e7eb",
          background: "#ffffff",
          maxWidth: 720,
        }}
      >
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
          Occupants for this property
        </h3>

        {occupantsForProperty.length > 0 ? (
          <ul style={{ paddingLeft: 18 }}>
            {occupantsForProperty.map((o) => (
              <li key={o.id} style={{ marginBottom: 4 }}>
                <Link to={`/landlord/occupants/${o.id}`}>
                  {o.name || "(unnamed occupant)"}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div style={{ fontSize: 14, color: "#6b7280" }}>
            No occupants associated with this property yet.
          </div>
        )}
      </section>

      {/* Pets aggregated via tenant links */}
      <section
        style={{
          marginTop: 16,
          padding: 16,
          borderRadius: 12,
          border: "1px solid #e5e7eb",
          background: "#ffffff",
          maxWidth: 720,
        }}
      >
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
          Pets for this property
        </h3>

        {petsForProperty.length > 0 ? (
          <ul style={{ paddingLeft: 18 }}>
            {petsForProperty.map((p) => (
              <li key={p.id} style={{ marginBottom: 4 }}>
                <Link to={`/landlord/pets/${p.id}`}>
                  {p.name || "(unnamed pet)"}
                </Link>
                {p.type ? ` — ${p.type}` : ""}
                {p.breed ? ` — ${p.breed}` : ""}
                {p.weightLb != null ? ` (${p.weightLb} lb)` : ""}
              </li>
            ))}
          </ul>
        ) : (
          <div style={{ fontSize: 14, color: "#6b7280" }}>
            No pets associated with this property yet.
          </div>
        )}
      </section>

      {/* Emergency contacts aggregated via tenant links */}
      <section
        style={{
          marginTop: 16,
          padding: 16,
          borderRadius: 12,
          border: "1px solid #e5e7eb",
          background: "#ffffff",
          maxWidth: 720,
        }}
      >
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
          Emergency contacts for this property
        </h3>

        {emergencyContactsForProperty.length > 0 ? (
          <ul style={{ paddingLeft: 18 }}>
            {emergencyContactsForProperty.map((e) => (
              <li key={e.id} style={{ marginBottom: 4 }}>
                <Link to={`/landlord/emergencyContacts/${e.id}`}>
                  {e.name || "(unnamed emergency contact)"}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div style={{ fontSize: 14, color: "#6b7280" }}>
            No emergency contacts associated with this property yet.
          </div>
        )}
      </section>
      {/* Vehicles aggregated via tenant links */}
      <section
        style={{
          marginTop: 16,
          padding: 16,
          borderRadius: 12,
          border: "1px solid #e5e7eb",
          background: "#ffffff",
          maxWidth: 720,
        }}
      >
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
          Vehicles for this property
        </h3>

        {vehiclesForProperty.length > 0 ? (
          <ul style={{ paddingLeft: 18 }}>
            {vehiclesForProperty.map((v) => (
              <li key={v.id} style={{ marginBottom: 4 }}>
                <Link to={`/landlord/vehicles/${v.id}`}>
                  {v.permit || 
                  v.plate || 
                  (v.make && v.model && v.year ? `${v.year}, ${v.make} ${v.model}`: 
                  "(unnamed vehicle)")}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div style={{ fontSize: 14, color: "#6b7280" }}>
            No vehicles associated with this property yet.
          </div>
        )}
      </section>
    </div>
  );
}
