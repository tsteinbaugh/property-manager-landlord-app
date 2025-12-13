// newsrc/features/tenants/pages/LandlordAddPetPage.jsx
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import styles from "../tenants/LandlordTenantsPage.module.css";
import { petsApi } from "@features/residents/api/pets.api.js";
import { tenantsApi } from "@features/residents/api/tenants.api.js";

export default function LandlordAddPetPage() {
  const navigate = useNavigate();
  const { token } = useUser() || {};
  const [searchParams] = useSearchParams();

  const tenantId = searchParams.get("tenantId") || "";
  const returnTo = searchParams.get("returnTo") || "";

  // ---------- shared simple form state (name/type/breed/weight) ----------
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [breed, setBreed] = useState("");
  const [weightLb, setWeightLb] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  // ---------- tenant-context-only state ----------
  const [tenant, setTenant] = useState(null);
  const [loadingTenant, setLoadingTenant] = useState(!!tenantId);
  const [tenantError, setTenantError] = useState(null);

  const [allPets, setAllPets] = useState([]);
  const [loadingPets, setLoadingPets] = useState(!!tenantId);
  const [petsError, setPetsError] = useState(null);

  const [selectedExistingPetId, setSelectedExistingPetId] =
    useState("");
  const [isLinkingExisting, setIsLinkingExisting] = useState(false);

  // ------------------------------------------------------------
  // Load tenant + pets list when tenantId is present
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
        console.error("Failed to load tenant for AddPetPage", err);
        if (!cancelled) setTenantError(err);
      } finally {
        if (!cancelled) setLoadingTenant(false);
      }
    }

    async function loadPets() {
      try {
        setLoadingPets(true);
        setPetsError(null);
        const list = await petsApi.listAll({
          token,
          includeArchived: false,
        });
        if (!cancelled) setAllPets(Array.isArray(list) ? list : []);
      } catch (err) {
        console.error("Failed to load pets for AddPetPage", err);
        if (!cancelled) setPetsError(err);
      } finally {
        if (!cancelled) setLoadingPets(false);
      }
    }

    loadTenant();
    loadPets();

    return () => {
      cancelled = true;
    };
  }, [tenantId, token]);
  // Pets currently linked to this tenant via join table
  const petLinks = Array.isArray(tenant?.petLinks)
    ? tenant.petLinks
    : [];

  const tenantPets = petLinks
    .map((link) => link.pet)
    .filter(Boolean);

  // existing pets that are NOT already linked to this tenant
  const linkedIds = new Set(petLinks.map((l) => l.petId));

  const availableExistingPets =
    tenant && allPets.length > 0
      ? allPets.filter((p) => !linkedIds.has(p.id))
      : allPets;

  // ------------------------------------------------------------
  // Navigation helpers
  // ------------------------------------------------------------
  const goBackFromTenantContext = () => {
    if (returnTo) {
      navigate(returnTo);
    } else if (tenantId) {
      navigate(`/landlord/tenants/${tenantId}`);
    } else {
      navigate("/landlord/residents?tab=pets");
    }
  };

  const handleCancel = () => {
    if (tenantId) {
      goBackFromTenantContext();
    } else {
      navigate("/landlord/residents?tab=pets");
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
    const rawWeight = weightLb.trim();
    let normalizedWeight = null;

    if (rawWeight) {
      const parsed = Number(rawWeight);
      if (Number.isNaN(parsed) || parsed < 0) {
        setFormError("Weight must be a positive number.");
        return;
      }
      normalizedWeight = parsed;
    }

    try {
      setSubmitting(true);
      setFormError("");

      await petsApi.create(
        {
          name: name.trim(),
          type: type.trim(),
          breed: breed.trim(),
          weightLb: normalizedWeight,
        },
        { token }
      );

      navigate("/landlord/residents?tab=pets");
    } catch (err) {
      console.error("Failed to create pet", err);
      setFormError("Failed to create pet. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  // ------------------------------------------------------------
  // TENANT-CONTEXT MODE: link existing + create & link new
  // ------------------------------------------------------------

  const handleLinkExisting = async () => {
    if (!tenantId || !selectedExistingPetId) return;

    const pet = availableExistingPets.find(
      (p) => p.id === selectedExistingPetId
    );
    const petName = pet?.name || "this pet";

    const ok = window.confirm(
      `Link ${petName} to tenant "${tenant?.name || ""}"?\n\n` +
        "This will link the pet to this tenant in your records."
    );
    if (!ok) return;

    try {
      setIsLinkingExisting(true);

      // New many-to-many link
      await tenantsApi.linkPet(tenantId, selectedExistingPetId, {
        token,
      });

      goBackFromTenantContext();
    } catch (err) {
      console.error("Failed to link existing pet", err);
      alert("Failed to link pet. Check console for details.");
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

    const rawWeight = weightLb.trim();
    let normalizedWeight = null;

    if (rawWeight) {
      const parsed = Number(rawWeight);
      if (Number.isNaN(parsed) || parsed < 0) {
        setFormError("Weight must be a positive number.");
        return;
      }
      normalizedWeight = parsed;
    }

    try {
      setSubmitting(true);
      setFormError("");

      // 1) create the pet globally
      const created = await petsApi.create(
        {
          name: name.trim(),
          type: type.trim(),
          breed: breed.trim(),
          weightLb: normalizedWeight,
        },
        { token }
      );

      // 2) link to this tenant via join table
      await tenantsApi.linkPet(tenantId, created.id, { token });

      goBackFromTenantContext();
    } catch (err) {
      console.error("Failed to create pet for tenant", err);
      setFormError("Failed to create pet. Check console for details.");
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
            <h1 className={styles.title}>Manage pets</h1>
            {loadingTenant ? (
              <p className={styles.subtitle}>Loading tenant…</p>
            ) : tenantError || !tenant ? (
              <p className={styles.subtitle} style={{ color: "#b91c1c" }}>
                Failed to load tenant. You can still add pets, but
                linking may not behave as expected.
              </p>
            ) : (
              <p className={styles.subtitle}>
                Link existing pets or create new ones for{" "}
                <strong>{tenant.name}</strong>.
              </p>
            )}
          </div>
        </header>

        <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Section 1: Link existing pet */}
          <section
            style={{
              maxWidth: 520,
              padding: 16,
              borderRadius: 12,
              border: "1px solid #e5e7eb",
              background: "#ffffff",
            }}
          >
            <h2 style={{ fontSize: 16, marginBottom: 8 }}>Link existing pet</h2>

            {loadingPets ? (
              <div style={{ fontSize: 13, color: "#6b7280" }}>
                Loading pets…
              </div>
            ) : petsError ? (
              <div style={{ fontSize: 13, color: "#b91c1c" }}>
                Failed to load pets list.
              </div>
            ) : availableExistingPets.length === 0 ? (
              <div style={{ fontSize: 13, color: "#6b7280" }}>
                No other pets available to link.
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
                    value={selectedExistingPetId}
                    onChange={(e) =>
                      setSelectedExistingPetId(e.target.value)
                    }
                    disabled={isLinkingExisting}
                  >
                    <option value="">Select an pet…</option>
                    {availableExistingPets.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                        {p.type ? ` (${p.type})` : ""}
                        {p.breed ? ` (${p.breed})` : ""}
                        {p.weightLb ? ` (${p.weightLb})` : ""}
                        {p.tenantId ? " – linked to another tenant" : ""}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    className={styles.primaryButton}
                    style={{ whiteSpace: "nowrap" }}
                    onClick={handleLinkExisting}
                    disabled={!selectedExistingPetId || isLinkingExisting}
                  >
                    {isLinkingExisting ? "Linking…" : "Link"}
                  </button>
                </div>

                {tenantPets.length > 0 && (
                  <div style={{ fontSize: 12, color: "#6b7280" }}>
                    Already linked to this tenant:
                    <ul style={{ paddingLeft: 18, marginTop: 4 }}>
                      {tenantPets.map((p) => (
                        <li key={p.id}>
                          {p.name}
                          {p.type ? ` (${p.type})` : ""}
                          {p.breed ? ` (${p.breed})` : ""}
                          {p.weightLb ? ` (${p.weightLb})` : ""}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </section>

          {/* Section 2: Create & link new pet */}
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
              Create new pet for this tenant
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
                  Pet name{" "}
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

              {/* Type*/}
              <div style={{ marginBottom: 12 }}>
                <label
                  htmlFor="type"
                  style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
                >
                  Type
                </label>
                <input
                  id="type"
                  type="text"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  placeholder="Type (dog, cat, bird, etc.)"
                  style={{
                    width: "100%",
                    padding: "6px 8px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                  }}
                  disabled={isSubmitting}
                />
              </div>
                
              {/* Breed */}
              <div style={{ marginBottom: 12 }}>
                <label
                  htmlFor="breed"
                  style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
                >
                  Breed
                </label>
                <input
                  id="breed"
                  type="text"
                  value={breed}
                  onChange={(e) => setBreed(e.target.value)}
                  placeholder="poodle, boxer, etc."
                  style={{
                    width: "100%",
                    padding: "6px 8px",
                    borderRadius: 8,
                    border: "1px solid #d1d5db",
                  }}
                  disabled={isSubmitting}
                />
              </div>
                
              {/* WeightLb */}
              <div style={{ marginBottom: 12 }}>
                <label
                  htmlFor="weightLb"
                  style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
                >
                  Weight (Lb)
                </label>
                <input
                  id="weightLb"
                  type="number"
                  value={weightLb}
                  onChange={(e) => setWeightLb(e.target.value)}
                  placeholder="Weight (Lb)"
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
                  {isSubmitting ? "Saving…" : "Save pet"}
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

  // === Mode B: NO tenantId → original global "add pet" behavior ===
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Add pet</h1>
          <p className={styles.subtitle}>
            Create an pet record. You’ll be able to connect pets to
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
              Pet name <span style={{ color: "#b91c1c" }}>*</span>
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

          {/* Type*/}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="type"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              Type
            </label>
            <input
              id="type"
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              placeholder="Type (dog, cat, bird, etc.)"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {/* Breed */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="breed"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              Breed
            </label>
            <input
              id="breed"
              type="text"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              placeholder="poodle, boxer, etc."
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {/* WeightLb */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="weightLb"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              Weight (Lb)
            </label>
            <input
              id="weightLb"
              type="number"
              value={weightLb}
              onChange={(e) => setWeightLb(e.target.value)}
              placeholder="Weight (Lb)"
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
              {isSubmitting ? "Saving…" : "Save pet"}
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
