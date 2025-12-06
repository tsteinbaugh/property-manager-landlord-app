// newsrc/features/tenants/pages/LandlordAddOccupantPage.jsx
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import styles from "../tenants/LandlordTenantsPage.module.css";
import { occupantsApi } from "@features/residents/api/occupants.api.js";
import { tenantsApi } from "@features/residents/api/tenants.api.js";

export default function LandlordAddOccupantPage() {
  const navigate = useNavigate();
  const { token } = useUser() || {};
  const [searchParams] = useSearchParams();

  const tenantId = searchParams.get("tenantId") || "";
  const returnTo = searchParams.get("returnTo") || "";

  // ---------- shared simple form state (name/relation) ----------
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  // ---------- tenant-context-only state ----------
  const [tenant, setTenant] = useState(null);
  const [loadingTenant, setLoadingTenant] = useState(!!tenantId);
  const [tenantError, setTenantError] = useState(null);

  const [allOccupants, setAllOccupants] = useState([]);
  const [loadingOccupants, setLoadingOccupants] = useState(!!tenantId);
  const [occupantsError, setOccupantsError] = useState(null);

  const [selectedExistingOccupantId, setSelectedExistingOccupantId] =
    useState("");
  const [isLinkingExisting, setIsLinkingExisting] = useState(false);

  // ------------------------------------------------------------
  // Load tenant + occupants list when tenantId is present
  // ------------------------------------------------------------
  useEffect(() => {
    let cancelled = false;

    if (!tenantId || !token) return;

    async function loadTenant() {
      try {
        setLoadingTenant(true);
        setTenantError(null);
        const t = await tenantsApi.detail(tenantId, { token });
        if (!cancelled) setTenant(t || null);
      } catch (err) {
        console.error("Failed to load tenant for AddOccupantPage", err);
        if (!cancelled) setTenantError(err);
      } finally {
        if (!cancelled) setLoadingTenant(false);
      }
    }

    async function loadOccupants() {
      try {
        setLoadingOccupants(true);
        setOccupantsError(null);
        const list = await occupantsApi.listAll({
          token,
          includeArchived: false,
        });
        if (!cancelled) setAllOccupants(Array.isArray(list) ? list : []);
      } catch (err) {
        console.error("Failed to load occupants for AddOccupantPage", err);
        if (!cancelled) setOccupantsError(err);
      } finally {
        if (!cancelled) setLoadingOccupants(false);
      }
    }

    loadTenant();
    loadOccupants();

    return () => {
      cancelled = true;
    };
  }, [tenantId, token]);

  // occupants currently linked to this tenant (from tenant detail, when present)
  const tenantOccupants = Array.isArray(tenant?.occupants)
    ? tenant.occupants
    : [];

  // existing occupants that are NOT already linked to this tenant
  const availableExistingOccupants =
    tenant && allOccupants.length > 0
      ? allOccupants.filter((o) => o.tenantId !== tenant.id)
      : allOccupants;

  // ------------------------------------------------------------
  // Navigation helpers
  // ------------------------------------------------------------
  const goBackFromTenantContext = () => {
    if (returnTo) {
      navigate(returnTo);
    } else if (tenantId) {
      navigate(`/landlord/tenants/${tenantId}`);
    } else {
      navigate("/landlord/residents?tab=occupants");
    }
  };

  const handleCancel = () => {
    if (tenantId) {
      goBackFromTenantContext();
    } else {
      navigate("/landlord/residents?tab=occupants");
    }
  };

  // ------------------------------------------------------------
  // GLOBAL MODE (no tenantId): original behavior
  // ------------------------------------------------------------
  const handleSubmitGlobal = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setFormError("Name is required.");
      return;
    }

    try {
      setSubmitting(true);
      setFormError("");

      await occupantsApi.create(
        {
          name: name.trim(),
          relation: relation.trim(),
          // tenantId intentionally omitted – global occupant
        },
        { token }
      );

      navigate("/landlord/residents?tab=occupants");
    } catch (err) {
      console.error("Failed to create occupant", err);
      setFormError("Failed to create occupant. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  // ------------------------------------------------------------
  // TENANT-CONTEXT MODE: link existing + create & link new
  // ------------------------------------------------------------

  const handleLinkExisting = async () => {
    if (!tenantId || !selectedExistingOccupantId) return;

    const occ = availableExistingOccupants.find(
      (o) => o.id === selectedExistingOccupantId
    );
    const occName = occ?.name || "this occupant";

    const ok = window.confirm(
      `Link ${occName} to tenant "${tenant?.name || ""}"?\n\n` +
        "This will move the occupant under this tenant in your records."
    );
    if (!ok) return;

    try {
      setIsLinkingExisting(true);

      await occupantsApi.update(
        selectedExistingOccupantId,
        { tenantId },
        { token }
      );

      goBackFromTenantContext();
    } catch (err) {
      console.error("Failed to link existing occupant", err);
      alert("Failed to link occupant. Check console for details.");
    } finally {
      setIsLinkingExisting(false);
    }
  };

  const handleSubmitForTenant = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setFormError("Name is required.");
      return;
    }

    try {
      setSubmitting(true);
      setFormError("");

      // 1) create the occupant globally (same pattern that already works)
      const created = await occupantsApi.create(
        {
          name: name.trim(),
          relation: relation.trim(),
        },
        { token }
      );

      // 2) link to this tenant (PATCH)
      await occupantsApi.update(
        created.id,
        { tenantId },
        { token }
      );

      goBackFromTenantContext();
    } catch (err) {
      console.error("Failed to create occupant for tenant", err);
      setFormError("Failed to create occupant. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  const saveDisabled = isSubmitting || !name.trim();

  // ------------------------------------------------------------
  // RENDER
  // ------------------------------------------------------------

  // === Mode A: tenantId is present → tenant-context management page ===
  if (tenantId) {
    return (
      <div className={styles.page}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>Manage occupants</h1>
            {loadingTenant ? (
              <p className={styles.subtitle}>Loading tenant…</p>
            ) : tenantError || !tenant ? (
              <p className={styles.subtitle} style={{ color: "#b91c1c" }}>
                Failed to load tenant. You can still add occupants, but
                linking may not behave as expected.
              </p>
            ) : (
              <p className={styles.subtitle}>
                Link existing occupants or create new ones for{" "}
                <strong>{tenant.name}</strong>.
              </p>
            )}
          </div>
        </header>

        <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Section 1: Link existing occupant */}
          <section
            style={{
              maxWidth: 520,
              padding: 16,
              borderRadius: 12,
              border: "1px solid #e5e7eb",
              background: "#ffffff",
            }}
          >
            <h2 style={{ fontSize: 16, marginBottom: 8 }}>Link existing occupant</h2>

            {loadingOccupants ? (
              <div style={{ fontSize: 13, color: "#6b7280" }}>
                Loading occupants…
              </div>
            ) : occupantsError ? (
              <div style={{ fontSize: 13, color: "#b91c1c" }}>
                Failed to load occupants list.
              </div>
            ) : availableExistingOccupants.length === 0 ? (
              <div style={{ fontSize: 13, color: "#6b7280" }}>
                No other occupants available to link.
              </div>
            ) : (
              <>
                <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                  <select
                    style={{
                      flex: 1,
                      padding: "6px 8px",
                      borderRadius: 8,
                      border: "1px solid #d1d5db",
                    }}
                    value={selectedExistingOccupantId}
                    onChange={(e) =>
                      setSelectedExistingOccupantId(e.target.value)
                    }
                    disabled={isLinkingExisting}
                  >
                    <option value="">Select an occupant…</option>
                    {availableExistingOccupants.map((o) => (
                      <option key={o.id} value={o.id}>
                        {o.name}
                        {o.relation ? ` (${o.relation})` : ""}
                        {o.tenantId ? " – linked to another tenant" : ""}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    className={styles.primaryButton}
                    style={{ whiteSpace: "nowrap" }}
                    onClick={handleLinkExisting}
                    disabled={!selectedExistingOccupantId || isLinkingExisting}
                  >
                    {isLinkingExisting ? "Linking…" : "Link"}
                  </button>
                </div>

                {tenantOccupants.length > 0 && (
                  <div style={{ fontSize: 12, color: "#6b7280" }}>
                    Already linked to this tenant:
                    <ul style={{ paddingLeft: 18, marginTop: 4 }}>
                      {tenantOccupants.map((o) => (
                        <li key={o.id}>
                          {o.name}
                          {o.relation ? ` (${o.relation})` : ""}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </section>

          {/* Section 2: Create & link new occupant */}
          <section
            style={{
              maxWidth: 520,
              padding: 16,
              borderRadius: 12,
              border: "1px solid #e5e7eb",
              background: "#ffffff",
            }}
          >
            <h2 style={{ fontSize: 16, marginBottom: 8 }}>
              Create new occupant for this tenant
            </h2>

            <form onSubmit={handleSubmitForTenant}>
              {/* Name */}
              <div style={{ marginBottom: 12 }}>
                <label
                  htmlFor="name"
                  style={{
                    display: "block",
                    fontWeight: 500,
                    marginBottom: 4,
                  }}
                >
                  Occupant name{" "}
                  <span style={{ color: "#b91c1c" }}>*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name (required)"
                  style={{
                    width: "100%",
                    padding: "6px 8px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                  }}
                  disabled={isSubmitting}
                />
              </div>

              {/* Relation */}
              <div style={{ marginBottom: 12 }}>
                <label
                  htmlFor="relation"
                  style={{
                    display: "block",
                    fontWeight: 500,
                    marginBottom: 4,
                  }}
                >
                  Relation
                </label>
                <input
                  id="relation"
                  type="text"
                  value={relation}
                  onChange={(e) => setRelation(e.target.value)}
                  placeholder="roommate, child, partner, etc."
                  style={{
                    width: "100%",
                    padding: "6px 8px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                  }}
                  disabled={isSubmitting}
                />
              </div>

              {formError && (
                <div
                  style={{
                    color: "#b91c1c",
                    fontSize: 13,
                    marginBottom: 8,
                  }}
                >
                  {formError}
                </div>
              )}

              <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                <button
                  type="submit"
                  className={styles.primaryButton}
                  disabled={saveDisabled}
                >
                  {isSubmitting ? "Saving…" : "Save occupant"}
                </button>

                <button
                  type="button"
                  onClick={handleCancel}
                  style={{
                    borderRadius: 999,
                    padding: "8px 16px",
                    border: "1px solid #d1d5db",
                    background: "#ffffff",
                    cursor: "pointer",
                  }}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    );
  }

  // === Mode B: NO tenantId → original global "add occupant" behavior ===
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Add occupant</h1>
          <p className={styles.subtitle}>
            Create an occupant record. You’ll be able to connect occupants to
            leases (and tenants) later.
          </p>
        </div>
      </header>

      <div style={{ marginTop: 12 }}>
        <form
          onSubmit={handleSubmitGlobal}
          style={{
            maxWidth: 480,
            padding: 16,
            borderRadius: 12,
            border: "1px solid #e5e7eb",
            background: "#ffffff",
          }}
        >
          {/* Name */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="name"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              Occupant name <span style={{ color: "#b91c1c" }}>*</span>
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name (required)"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {/* Relation */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="relation"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              Relation
            </label>
            <input
              id="relation"
              type="text"
              value={relation}
              onChange={(e) => setRelation(e.target.value)}
              placeholder="roommate, child, partner, etc."
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {formError && (
            <div style={{ color: "#b91c1c", fontSize: 13, marginBottom: 8 }}>
              {formError}
            </div>
          )}

          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <button
              type="submit"
              className={styles.primaryButton}
              disabled={saveDisabled}
            >
              {isSubmitting ? "Saving…" : "Save occupant"}
            </button>

            <button
              type="button"
              onClick={handleCancel}
              style={{
                borderRadius: 999,
                padding: "8px 16px",
                border: "1px solid #d1d5db",
                background: "#ffffff",
                cursor: "pointer",
              }}
              disabled={isSubmitting}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
