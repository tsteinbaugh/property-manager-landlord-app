// newsrc/features/tenants/pages/LandlordAddPetPage.jsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";

import page from "@shared/styles/ui.pages.module.css";
import card from "@shared/styles/ui.cards.module.css";
import shared from "@shared/styles/ui.shared.module.css";

import { petsApi } from "@features/residents/api/pets.api.js";
import { tenantsApi } from "@features/tenants/api/tenants.api.js";

import {
  validateObject,
  requiredTrimmedString,
  optionalTrimToNull,
  parseIntOrNullOpt,
} from "@shared/utils/validation.js";

export default function LandlordAddPetPage() {
  const navigate = useNavigate();
  const { token } = useUser() || {};
  const [searchParams] = useSearchParams();

  const tenantId = searchParams.get("tenantId") || "";
  const petId = searchParams.get("petId") || "";
  const returnTo = searchParams.get("returnTo") || "";

  const isEditMode = !!petId;

  // ---------- shared simple form state ----------
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [breed, setBreed] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [license, setLicense] = useState("");
  const [notes, setNotes] = useState("");

  const [isSubmitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  // ---------- tenant-context-only state ----------
  const [tenant, setTenant] = useState(null);
  const [loadingTenant, setLoadingTenant] = useState(!!tenantId);
  const [tenantError, setTenantError] = useState(null);

  const [allPets, setAllPets] = useState([]);
  const [loadingPets, setLoadingPets] = useState(!!tenantId);
  const [petsError, setPetsError] = useState(null);

  const [selectedExistingPetId, setSelectedExistingPetId] = useState("");
  const [isLinkingExisting, setIsLinkingExisting] = useState(false);

  const [touched, setTouched] = useState({ name: false });

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
        console.error("Failed to load tenant for Add Pet Page", err);
        if (!cancelled) setTenantError(err);
      } finally {
        if (!cancelled) setLoadingTenant(false);
      }
    }

    async function loadPets() {
      try {
        setLoadingPets(true);
        setPetsError(null);
        const list = await petsApi.listAll({ token, includeArchived: false });
        if (!cancelled) setAllPets(Array.isArray(list) ? list : []);
      } catch (err) {
        console.error("Failed to load pets for Add Pet Page", err);
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

  // ------------------------------------------------------------
  // Load pet for EDIT mode (global or tenant context)
  // ------------------------------------------------------------
  useEffect(() => {
    let cancelled = false;
    if (!petId || !token) return;

    async function loadPetForEdit() {
      try {
        setFormError("");
        const p = await petsApi.get(petId, { token });
        if (cancelled) return;

        if (!p) {
          setFormError("Pet not found.");
          return;
        }

        setName(p.name || "");
        setType(p.type || "");
        setBreed(p.breed || "");
        setWeight(p.weight != null ? String(p.weight) : "");
        setAge(p.age != null ? String(p.age) : "");
        setLicense(p.license || "");
        setNotes(p.notes || "");
      } catch (err) {
        console.error("Failed to load pet for edit", err);
        if (!cancelled) setFormError("Failed to load pet for editing.");
      }
    }

    loadPetForEdit();
    return () => {
      cancelled = true;
    };
  }, [petId, token]);

  // ------------------------------------------------------------
  // Derived lists (tenant context)
  // ------------------------------------------------------------
  const petLinks = Array.isArray(tenant?.petLinks) ? tenant.petLinks : [];
  const tenantPets = petLinks.map((l) => l.pet).filter(Boolean);

  const linkedIds = useMemo(() => new Set(petLinks.map((l) => l.petId)), [petLinks]);
  const availableExistingPets =
    tenant && allPets.length > 0 ? allPets.filter((p) => !linkedIds.has(p.id)) : allPets;

  // ------------------------------------------------------------
  // Navigation helpers
  // ------------------------------------------------------------
  const goBackFromTenantContext = () => {
    if (returnTo) navigate(returnTo);
    else if (tenantId) navigate(`/landlord/tenants/${tenantId}`);
    else navigate("/landlord/residents?tab=pets");
  };

  const handleCancel = () => {
    if (returnTo) return navigate(returnTo);
    if (tenantId) return goBackFromTenantContext();
    if (isEditMode) return navigate(`/landlord/pets/${petId}`);
    return navigate("/landlord/residents?tab=pets");
  };

  // ------------------------------------------------------------
  // Shared validation + payload builder
  // ------------------------------------------------------------
  const buildPayload = () => {
    const input = {
      name,
      type,
      breed,
      weight,
      age,
      license,
      notes,
    };

    const schema = {
      name: requiredTrimmedString,
      type: optionalTrimToNull,
      breed: optionalTrimToNull,
      weight: (v) => parseIntOrNullOpt(v, { min: 0, max: 2000 }),
      age: (v) => parseIntOrNullOpt(v, { min: 0, max: 80 }),
      license: optionalTrimToNull,
      notes: optionalTrimToNull,
    };

    return validateObject(input, schema, {
      errorMessages: {
        name: "Name is required.",
        weight: "Weight must be a valid number.",
        age: "Age must be a valid number.",
      },
    });
  };

  const validateAndSetError = () => {
    const { value: payload, ok, errors } = buildPayload();
    if (!ok) {
      const firstKey = Object.keys(errors || {})[0];
      setFormError(errors?.[firstKey] || "Please fix the highlighted fields.");
      return { ok: false, payload: null };
    }
    return { ok: true, payload };
  };

  // ------------------------------------------------------------
  // Global create/edit submit
  // ------------------------------------------------------------
  const handleSubmitGlobal = async (e) => {
    e.preventDefault();
    setTouched({ name: true });
    setFormError("");

    const { ok, payload } = validateAndSetError();
    if (!ok) return;

    try {
      setSubmitting(true);

      let saved;
      if (isEditMode) {
        saved = await petsApi.update(petId, payload, { token });
      } else {
        saved = await petsApi.create(payload, { token });
      }

      if (returnTo) {
        navigate(returnTo);
      } else if (isEditMode) {
        navigate(`/landlord/pets/${saved?.id || petId}`);
      } else {
        navigate("/landlord/residents?tab=pets");
      }
    } catch (err) {
      console.error("Failed to save pet", err);
      setFormError("Failed to save pet. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  // ------------------------------------------------------------
  // Tenant-context: link existing
  // ------------------------------------------------------------
  const handleLinkExisting = async () => {
    if (!tenantId || !selectedExistingPetId) return;

    const pet = availableExistingPets.find((p) => p.id === selectedExistingPetId);
    const petName = pet?.name || "this pet";

    const ok = window.confirm(
      `Link ${petName} to tenant "${tenant?.name || ""}"?\n\n` +
        "This will link the pet to this tenant in your records."
    );
    if (!ok) return;

    try {
      setIsLinkingExisting(true);
      await tenantsApi.linkPet(tenantId, selectedExistingPetId, { token });
      goBackFromTenantContext();
    } catch (err) {
      console.error("Failed to link existing pet", err);
      alert("Failed to link pet. Check console for details.");
    } finally {
      setIsLinkingExisting(false);
    }
  };

  // ------------------------------------------------------------
  // Tenant-context: create & link new
  // ------------------------------------------------------------
  const handleSubmitForTenant = async (e) => {
    e.preventDefault();
    setTouched({ name: true });
    setFormError("");

    const { ok, payload } = validateAndSetError();
    if (!ok) return;

    try {
      setSubmitting(true);

      const created = await petsApi.create(payload, { token });
      await tenantsApi.linkPet(tenantId, created.id, { token });

      goBackFromTenantContext();
    } catch (err) {
      console.error("Failed to create pet for tenant", err);
      setFormError("Failed to create pet. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  const saveDisabled = isSubmitting;

  const ctrl = (isError) => `${card.control} ${isError ? card.controlError : ""}`;

  // ------------------------------------------------------------
  // FORM JSX (no inner React components!)
  // ------------------------------------------------------------
  const renderForm = (onSubmit) => (
    <form className={card.form} onSubmit={onSubmit}>
      <section className={`${card.card} ${card.cardForm} ${page.narrow}`}>
        <div className={card.cardHeader}>
          <div className={card.cardTitle}>Basics</div>
        </div>

        <div className={card.cardBody}>        
          <div className={card.field}>
            <label className={card.label} htmlFor="name">
              Name <span className={card.required}>*</span>
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, name: true }))}
              placeholder="Name"
              className={ctrl(touched.name && !String(name).trim())}
              disabled={isSubmitting}
            />
            {touched.name && !String(name).trim() ? <div className={card.errorText}>Enter a name</div> : null}
          </div>        

          <div className={card.field}>
            <label className={card.label} htmlFor="type">
              Type <span className={shared.muted}>(optional)</span>
            </label>
            <input
              id="type"
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              placeholder="Type (dog, cat, bird, etc.)"
              className={card.control}
              disabled={isSubmitting}
            />
          </div>

          <div className={card.field}>
            <label className={card.label} htmlFor="breed">
              Breed <span className={shared.muted}>(optional)</span>
            </label>
            <input
              id="breed"
              type="text"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              placeholder="poodle, boxer, etc."
              className={card.control}
              disabled={isSubmitting}
            />
          </div>

          <div className={card.field}>
            <label className={card.label} htmlFor="weight">
              Weight <span className={shared.muted}>(optional)</span>
            </label>
            <input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, weight: true }))}
              placeholder="Weight (pounds)"
              className={ctrl(touched.weight && !String(weight).trim())}
              disabled={isSubmitting}
            />
          </div>
          
          <div className={card.field}>
            <label className={card.label} htmlFor="age">
              Age (years) <span className={shared.muted}>(optional)</span>
            </label>
            <input
              id="age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, age: true }))}
              placeholder="5"
              className={ctrl(touched.age && !String(age).trim())}
              disabled={isSubmitting}
            />
          </div>          
        </div>          
      </section>

      <section className={`${card.card} ${card.cardForm} ${page.narrow}`}>
        <div className={card.cardHeader}>
          <div className={card.cardTitle}>Registration</div>
        </div>

        <div className={card.cardBody}>
          <div className={card.field}>
            <label className={card.label} htmlFor="license">
              License <span className={shared.muted}>(optional)</span>
            </label>
            <input
              id="license"
              type="text"
              value={license}
              onChange={(e) => setLicense(e.target.value)}
              placeholder="License number"
              className={card.control}
              disabled={isSubmitting}
            />
          </div>
        </div>
      </section>

      <section className={`${card.card} ${card.cardForm} ${page.narrow}`}>
        <div className={card.cardHeader}>
          <div className={card.cardTitle}>Notes</div>
        </div>

        <div className={card.cardBody}>
          <div className={card.field}>
            <label className={card.label} htmlFor="notes">
              Additional notes <span className={shared.muted}>(optional)</span>
            </label>
            <input
              id="notes"
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add any additional information"
              className={card.control}
              disabled={isSubmitting}
            />
          </div>

          {formError ? <div className={shared.error}>{formError}</div> : null}

          <div className={card.formActions}>
            <button type="submit" className={card.primaryButton} disabled={saveDisabled}>
              {isSubmitting ? "Saving…" : isEditMode ? "Save changes" : "Save pet"}
            </button>

            <button type="button" className={card.linkAction} onClick={handleCancel} disabled={isSubmitting}>
              Cancel
            </button>
          </div>
        </div>
      </section>
    </form>
  );

  // ------------------------------------------------------------
  // RENDER
  // ------------------------------------------------------------

  // === Mode A: tenantId present (manage pets for tenant) ===
  if (tenantId) {
    return (
      <div className={page.page}>
        <header className={page.header}>
          <div>
            <h1 className={page.title}>Manage pet linking</h1>
            {loadingTenant ? (
              <p className={page.subtitle}>Loading tenant…</p>
            ) : tenantError || !tenant ? (
              <p className={page.subtitle} style={{ color: "#b91c1c" }}>
                Failed to load tenant. You can still add pets, but linking may not behave as expected.
              </p>
            ) : (
              <p className={page.subtitle}>
                Link an existing pet or create a new one for <strong>{tenant.name}</strong>.
              </p>
            )}
          </div>
        </header>

        <div className={page.grid}>

          {/* Link existing */}
          <section className={page.section}>
            <div className={page.sectionHeader}>
              <div className={page.sectionHeaderStack}>
                <div className={page.sectionTitle}>Link existing</div>
                <div className={page.sectionHint}>
                  Quickly associate an existing pet with this tenant
                </div>
              </div>
            </div>

            <div className={`${card.card} ${card.cardForm} ${page.narrow}`}>
              <div className={card.cardBody}>
                {loadingPets ? (
                  <div className={shared.muted}>Loading pets…</div>
                ) : petsError ? (
                  <div className={shared.error}>Failed to load pets list.</div>
                ) : availableExistingPets.length === 0 ? (
                  <div className={shared.muted}>No other pets available to link.</div>
                ) : (
                  <>
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <select
                        className={card.control}
                        value={selectedExistingPetId}
                        onChange={(e) => setSelectedExistingPetId(e.target.value)}
                        disabled={isLinkingExisting}
                        style={{ flex: 1 }}
                      >
                        <option value="">Select a pet…</option>
                        {availableExistingPets.map((v) => (
                          <option key={v.id} value={v.id}>
                            {[v.year, v.make, v.model].filter(Boolean).join(" ") || "Pet"}
                            {v.plate ? ` • ${v.plate}` : ""}
                            {v.state ? ` (${v.state})` : ""}
                          </option>
                        ))}
                      </select>

                      <button
                        type="button"
                        className={card.primaryButton}
                        onClick={handleLinkExisting}
                        disabled={!selectedExistingPetId || isLinkingExisting}
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {isLinkingExisting ? "Linking…" : "Link"}
                      </button>
                    </div>

                    {tenantPets.length > 0 ? (
                      <div className={shared.muted} style={{ marginTop: 10 }}>
                        Already linked:
                        <ul style={{ paddingLeft: 18, marginTop: 4 }}>
                          {tenantPets.map((v) => (
                            <li key={v.id}>
                              {[v.year, v.make, v.model].filter(Boolean).join(" ") || "Pet"}
                              {v.plate ? ` • ${v.plate}` : ""}
                              {v.state ? ` (${v.state})` : ""}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </>
                )}
              </div>
            </div>
          </section>

          {/* Create new (same form, different submit) */}
          <section className={page.section}>
            <div className={page.sectionHeader}>
              <div className={page.sectionHeaderStack}>
                <div className={page.sectionTitle}>Create new</div>
                <div className={page.sectionHint}>
                  Create a new pet record and link it to this tenant.
                </div>
              </div>
            </div>
          </section>

          {renderForm(handleSubmitForTenant)}
        </div>
      </div>
    );
  }

  // === Mode B: global add/edit ===
  return (
    <div className={page.page}>
      <header className={page.header}>
        <div>
          <h1 className={page.title}>{isEditMode ? "Edit pet" : "Create pet"}</h1>
          <p className={page.subtitle}>
            {isEditMode ? "Update pet details." : "Create a pet record.  It can be linked to a tenant."}
          </p>
        </div>
      </header>

      {renderForm(handleSubmitGlobal)}
    </div>
  );
}