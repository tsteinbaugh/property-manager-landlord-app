// newsrc/features/tenants/pages/LandlordAddEmergencyContactPage.jsx
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import styles from "../tenants/LandlordTenantsPage.module.css";
import { emergencyContactsApi } from "@features/residents/api/emergencyContacts.api.js";
import { tenantsApi } from "@features/residents/api/tenants.api.js";

export default function LandlordAddEmergencyContactPage() {
  const navigate = useNavigate();
  const { token } = useUser() || {};
  const [searchParams] = useSearchParams();

  const tenantId = searchParams.get("tenantId") || "";
  const returnTo = searchParams.get("returnTo") || "";

  // ---------- shared simple form state (name/relation) ----------
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [relation, setRelation] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  // ---------- tenant-context-only state ----------
  const [tenant, setTenant] = useState(null);
  const [loadingTenant, setLoadingTenant] = useState(!!tenantId);
  const [tenantError, setTenantError] = useState(null);

  const [allEmergencyContacts, setAllEmergencyContacts] = useState([]);
  const [loadingEmergencyContacts, setLoadingEmergencyContacts] = useState(!!tenantId);
  const [emergencyContactsError, setEmergencyContactsError] = useState(null);

  const [selectedExistingEmergencyContactId, setSelectedExistingEmergencyContactId] =
    useState("");
  const [isLinkingExisting, setIsLinkingExisting] = useState(false);

  // ------------------------------------------------------------
  // Load tenant + emergencyContacts list when tenantId is present
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
        console.error("Failed to load tenant for AddEmergencyContactPage", err);
        if (!cancelled) setTenantError(err);
      } finally {
        if (!cancelled) setLoadingTenant(false);
      }
    }

    async function loadEmergencyContacts() {
      try {
        setLoadingEmergencyContacts(true);
        setEmergencyContactsError(null);
        const list = await emergencyContactsApi.listAll({
          token,
          includeArchived: false,
        });
        if (!cancelled) setAllEmergencyContacts(Array.isArray(list) ? list : []);
      } catch (err) {
        console.error("Failed to load emergency contacts for AddEmergencyContactPage", err);
        if (!cancelled) setEmergencyContactsError(err);
      } finally {
        if (!cancelled) setLoadingEmergencyContacts(false);
      }
    }

    loadTenant();
    loadEmergencyContacts();

    return () => {
      cancelled = true;
    };
  }, [tenantId, token]);
  // Emergency contacts currently linked to this tenant via join table
  const emergencyContactLinks = Array.isArray(tenant?.emergencyContactLinks)
    ? tenant.emergencyContactLinks
    : [];

  const tenantEmergencyContacts = emergencyContactLinks
    .map((link) => link.emergencyContact)
    .filter(Boolean);

  // existing emergency contacts that are NOT already linked to this tenant
  const linkedIds = new Set(emergencyContactLinks.map((l) => l.emergencyContactId));

  const availableExistingEmergencyContacts =
    tenant && allEmergencyContacts.length > 0
      ? allEmergencyContacts.filter((e) => !linkedIds.has(e.id))
      : allEmergencyContacts;

  // ------------------------------------------------------------
  // Navigation helpers
  // ------------------------------------------------------------
  const goBackFromTenantContext = () => {
    if (returnTo) {
      navigate(returnTo);
    } else if (tenantId) {
      navigate(`/landlord/tenants/${tenantId}`);
    } else {
      navigate("/landlord/residents?tab=emergencyContacts");
    }
  };

  const handleCancel = () => {
    if (tenantId) {
      goBackFromTenantContext();
    } else {
      navigate("/landlord/residents?tab=emergencyContacts");
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

      await emergencyContactsApi.create(
        {
          name: name.trim(),
          phone: phone.trim(),
          relation: relation.trim(),
          email: email.trim(),
          // tenantId intentionally omitted – global emergency contact
        },
        { token }
      );

      navigate("/landlord/residents?tab=emergencyContacts");
    } catch (err) {
      console.error("Failed to create emergency contact", err);
      setFormError("Failed to create emergency contact. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  // ------------------------------------------------------------
  // TENANT-CONTEXT MODE: link existing + create & link new
  // ------------------------------------------------------------

  const handleLinkExisting = async () => {
    if (!tenantId || !selectedExistingEmergencyContactId) return;

    const emc = availableExistingEmergencyContacts.find(
      (e) => e.id === selectedExistingEmergencyContactId
    );
    const emcName = emc?.name || "this emergency contact";

    const ok = window.confirm(
      `Link ${emcName} to tenant "${tenant?.name || ""}"?\n\n` +
        "This will link the emergency contact to this tenant in your records."
    );
    if (!ok) return;

    try {
      setIsLinkingExisting(true);

      // New many-to-many link
      await tenantsApi.linkEmergencyContact(tenantId, selectedExistingEmergencyContactId, {
        token,
      });

      goBackFromTenantContext();
    } catch (err) {
      console.error("Failed to link existing emergency contact", err);
      alert("Failed to link emergency contact. Check console for details.");
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

      // 1) create the emergency contact globally
      const created = await emergencyContactsApi.create(
        {
          name: name.trim(),
          phone: phone.trim(),
          relation: relation.trim(),
          email: email.trim(),
        },
        { token }
      );

      // 2) link to this tenant via join table
      await tenantsApi.linkEmergencyContact(tenantId, created.id, { token });

      goBackFromTenantContext();
    } catch (err) {
      console.error("Failed to create emergency contact for tenant", err);
      setFormError("Failed to create emergency contact. Check console for details.");
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
            <h1 className={styles.title}>Manage emergency contacts</h1>
            {loadingTenant ? (
              <p className={styles.subtitle}>Loading tenant…</p>
            ) : tenantError || !tenant ? (
              <p className={styles.subtitle} style={{ color: "#b91c1c" }}>
                Failed to load tenant. You can still add emergency contacts, but
                linking may not behave as expected.
              </p>
            ) : (
              <p className={styles.subtitle}>
                Link existing emergency contacts or create new ones for{" "}
                <strong>{tenant.name}</strong>.
              </p>
            )}
          </div>
        </header>

        <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Section 1: Link existing emergency contact */}
          <section
            style={{
              maxWidth: 520,
              padding: 16,
              borderRadius: 12,
              border: "1px solid #e5e7eb",
              background: "#ffffff",
            }}
          >
            <h2 style={{ fontSize: 16, marginBottom: 8 }}>Link existing emergency contact</h2>

            {loadingEmergencyContacts ? (
              <div style={{ fontSize: 13, color: "#6b7280" }}>
                Loading emergency contacts…
              </div>
            ) : emergencyContactsError ? (
              <div style={{ fontSize: 13, color: "#b91c1c" }}>
                Failed to load emergency contacts list.
              </div>
            ) : availableExistingEmergencyContacts.length === 0 ? (
              <div style={{ fontSize: 13, color: "#6b7280" }}>
                No other emergency contacts available to link.
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
                    value={selectedExistingEmergencyContactId}
                    onChange={(e) =>
                      setSelectedExistingEmergencyContactId(e.target.value)
                    }
                    disabled={isLinkingExisting}
                  >
                    <option value="">Select an emergency contact…</option>
                    {availableExistingEmergencyContacts.map((e) => (
                      <option key={e.id} value={e.id}>
                        {e.name}
                        {e.phone ? ` (${e.phone})` : ""}
                        {e.relation ? ` (${e.relation})` : ""}
                        {e.email ? ` (${e.email})` : ""}
                        {e.tenantId ? " – linked to another tenant" : ""}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    className={styles.primaryButton}
                    style={{ whiteSpace: "nowrap" }}
                    onClick={handleLinkExisting}
                    disabled={!selectedExistingEmergencyContactId || isLinkingExisting}
                  >
                    {isLinkingExisting ? "Linking…" : "Link"}
                  </button>
                </div>

                {tenantEmergencyContacts.length > 0 && (
                  <div style={{ fontSize: 12, color: "#6b7280" }}>
                    Already linked to this tenant:
                    <ul style={{ paddingLeft: 18, marginTop: 4 }}>
                      {tenantEmergencyContacts.map((e) => (
                        <li key={e.id}>
                          {e.name}
                          {e.phone ? ` (${e.phone})` : ""}
                          {e.relation ? ` (${e.relation})` : ""}
                          {e.email ? ` (${e.email})` : ""}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </section>

          {/* Section 2: Create & link new emergency contact */}
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
              Create new emergency contact for this tenant
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
                  Emergency contact name{" "}
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

              {/* Phone */}
              <div style={{ marginBottom: 12 }}>
                <label
                  htmlFor="phone"
                  style={{
                    display: "block",
                    fontWeight: 500,
                    marginBottom: 4,
                  }}
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone number"
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

              {/* Email */}
              <div style={{ marginBottom: 12 }}>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    fontWeight: 500,
                    marginBottom: 4,
                  }}
                >
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
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
                  {isSubmitting ? "Saving…" : "Save emergency contact"}
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

  // === Mode B: NO tenantId → original global "add emergency contact" behavior ===
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Add emergency contact</h1>
          <p className={styles.subtitle}>
            Create an emergency contact record. You’ll be able to connect emergency contacts to
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
              Emergency contact name <span style={{ color: "#b91c1c" }}>*</span>
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

          {/* Phone */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="phone"
              style={{
                display: "block",
                fontWeight: 500,
                marginBottom: 4,
              }}
            >
              Phone
            </label>
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone number"
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
       {/* Email */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                fontWeight: 500,
                marginBottom: 4,
              }}
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
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
              {isSubmitting ? "Saving…" : "Save emergency contact"}
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
