// newsrc/features/properties/pages/LandlordAddPropertyPage.jsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { propertiesApi } from "@features/properties/api/properties.api.js";
import { leasesApi } from "@features/leases/api/leases.api.js";

import page from "@shared/styles/ui.pages.module.css";
import card from "@shared/styles/ui.cards.module.css";
import shared from "@shared/styles/ui.shared.module.css";

import {
  INVALID,
  optionalTrimToNull,
  requiredTrimmedString,
  normalizeState,
  normalizeZipUS,
  parseIntOrNullOpt,
  US_STATE_NAME_TO_CODE,
  optionsFromEnumMap,
  formatEnumLabel,
  validateObject,
} from "@shared/utils/validation.js";

function propertyLabel(p) {
  if (!p) return "Property";
  return (
    p.name ||
    [p.address1, p.address2, p.city, p.state, p.postalCode].filter(Boolean).join(", ") ||
    "Property"
  );
}

export default function LandlordAddPropertyPage() {
  const navigate = useNavigate();
  const { token } = useUser() || {};
  const [searchParams] = useSearchParams();

  const leaseId = searchParams.get("leaseId") || "";
  const propertyId = searchParams.get("propertyId") || "";
  const returnTo = searchParams.get("returnTo") || "";

  const isLeaseContext = !!leaseId;
  const isEditMode = !!propertyId;

  // ---------- form state ----------
  const [name, setName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [sqft, setSqft] = useState("");
  const [yearBuilt, setYearBuilt] = useState("");

  const [notes, setNotes] = useState("");

  const [isSubmitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  // ---------- lease-context-only state ----------
  const [lease, setLease] = useState(null);
  const [loadingLease, setLoadingLease] = useState(!!leaseId);
  const [leaseError, setLeaseError] = useState(null);

  const [allProperties, setAllProperties] = useState([]);
  const [loadingProperties, setLoadingProperties] = useState(!!leaseId);
  const [propertiesError, setPropertiesError] = useState(null);

  const [selectedExistingPropertyId, setSelectedExistingPropertyId] = useState("");
  const [isLinkingExisting, setIsLinkingExisting] = useState(false);

  const [touched, setTouched] = useState({
    address1: false,
    city: false,
    state: false,
    postalCode: false,
  });

  // ------------------------------------------------------------
  // State dropdown options
  // ------------------------------------------------------------
  const stateOptions = useMemo(
    () =>
      optionsFromEnumMap(US_STATE_NAME_TO_CODE, {
        sortBy: "key", // state name
        toOption: (name, code) => ({
          value: code,
          label: `${formatEnumLabel(name, { hideUnknown: false })} (${code})`,
        }),
      }),
    []
  );

  // ------------------------------------------------------------
  // Load lease + properties list when leaseId is present
  // ------------------------------------------------------------
  useEffect(() => {
    let cancelled = false;
    if (!isLeaseContext || !token) return;

    async function loadLease() {
      try {
        setLoadingLease(true);
        setLeaseError(null);
        const list = await leasesApi.get(leaseId, { token });
        if (!cancelled) setLease(list || null);
      } catch (err) {
        console.error("Failed to load lease for Add Property Page", err);
        if (!cancelled) setLeaseError(err);
      } finally {
        if (!cancelled) setLoadingLease(false);
      }
    }

    async function loadProperties() {
      try {
        setLoadingProperties(true);
        setPropertiesError(null);
        const list = await propertiesApi.listAll({ token, includeArchived: false });
        if (!cancelled) setAllProperties(Array.isArray(list) ? list : []);
      } catch (err) {
        console.error("Failed to load properties for Add Property Page", err);
        if (!cancelled) setPropertiesError(err);
      } finally {
        if (!cancelled) setLoadingProperties(false);
      }
    }

    loadLease();
    loadProperties();

    return () => {
      cancelled = true;
    };
  }, [isLeaseContext, token]);

  // ------------------------------------------------------------
  // Load property for EDIT mode
  // ------------------------------------------------------------
  useEffect(() => {
    let cancelled = false;
    if (!isEditMode || !propertyId || !token) return;

    async function loadPropertyForEdit() {
      try {
        setFormError("");
        const p = await propertiesApi.get(propertyId, { token });
        if (cancelled) return;

        if (!p) {
          setFormError("Property not found.");
          return;
        }

        setName(p.name || "");
        setAddress1(p.address1 || "");
        setAddress2(p.address2 || "");
        setCity(p.city || "");
        setState(p.state || "");
        setPostalCode(p.postalCode || "");

        setBedrooms(p.bedrooms == null ? "" : String(p.bedrooms));
        setBathrooms(p.bathrooms == null ? "" : String(p.bathrooms));
        setSqft(p.sqft == null ? "" : String(p.sqft));
        setYearBuilt(p.yearBuilt == null ? "" : String(p.yearBuilt));

        setNotes(p.notes || "");
      } catch (err) {
        console.error("Failed to load property for edit", err);
        if (!cancelled) setFormError("Failed to load property for editing.");
      }
    }

    loadPropertyForEdit();
    return () => {
      cancelled = true;
    };
  }, [isEditMode, propertyId, token]);

  // ------------------------------------------------------------
  // Lease-context: already linked? (lease -> 0/1 property)
  // ------------------------------------------------------------
  const leaseAlreadyLinked = !!lease?.propertyId;

  const linkedProperty = useMemo(() => {
    if (!lease?.propertyId) return null;
    const list = Array.isArray(allProperties) ? allProperties : [];
    return list.find((p) => p?.id === lease.propertyId) || lease?.property || null;
  }, [lease, allProperties]);

  const availableExistingProperties = useMemo(() => {
																					   
    const list = Array.isArray(allProperties) ? allProperties : [];
    // If lease already linked, we block anyway — return empty list to simplify UI logic
    if (leaseAlreadyLinked) return [];
    return list;
  }, [allProperties, leaseAlreadyLinked]);

  // ------------------------------------------------------------
  // Navigation helpers
  // ------------------------------------------------------------
  const goBack = () => {
    if (returnTo) return navigate(returnTo);
    if (isLeaseContext) return navigate(`/landlord/leases/${leaseId}`);
    if (isEditMode) return navigate(`/landlord/properties/${propertyId}`);
    return navigate("/landlord/properties");
  };

  const handleCancel = () => goBack();

  // ------------------------------------------------------------
  // Build payload (validation.js)
  // ------------------------------------------------------------
  const buildPayload = () => {
    const input = {
      name,
      address1,
      assress2,
      city,
      state,
      postalCode,
      bedrooms,
      bathrooms,
      sqft,
      yearBuilt,
      notes,
    };
    
    const schema = {
      name: optionalTrimToNull,
      address1: requiredTrimmedString,
      address2: optionalTrimToNull,
      city: requiredTrimmedString,
      state: (v) => {
        const out = normalizeState(v);
        if (out === null) return INVALID;
        return out;
      },
      postalCode: (v) => {
        const out = normalizeZipUS(v);
        if (out === null) return INVALID;
        return out;
      },      
      bedrooms: (v) => parseIntOrNullOpt(v, { min: 0, max: 50 }),
      bathrooms: (v) => parseMoneyOrNullOpt(v, { min: 0, max: 50 }),
      sqft: (v) => parseIntOrNullOpt(v, { min: 0, max: 200_000 }),
      yearBuilt: (v) => parseIntOrNullOpt(v, { min: 1600, max: 2200 }),
      notes: optionalTrimToNull,
    };

    return validateObject(input, schema, {
      errorMessages: {
        address1: "Address is required.",
        city: "City is required.",
        state: "State is required and must be a valid US state or DC.",
        postalCode: "Zip is required and must be in the form 12345 or 12345-6789.",

        bedrooms: "Bedrooms must be a whole number.",
        bathrooms: "Bathrooms must be a number (e.g. 2 or 2.5).",
        sqft: "Size must be a whole number.",
        yearBuilt: "Year built must be a whole number.",
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
  // Submit
  // ------------------------------------------------------------
  const handleSubmitGlobal = async (e) => {
    e.preventDefault();
    setTouched({ address1: true, city: true, state: true, postalCode: true });
    setFormError("");

    const { ok, payload } = validateAndSetError();
    if (!ok) return;

    try {
      setSubmitting(true);

      let saved;
      if (isEditMode) saved = await propertiesApi.update(propertyId, payload, { token });
      else saved = await propertiesApi.create(payload, { token });
      if (returnTo) return navigate(returnTo);
      if (isEditMode) return navigate(`/landlord/properties/${saved?.id || propertyId}`);
      return navigate("/landlord/properties");
    } catch (err) {
      console.error("Failed to save property", err);
      setFormError("Failed to save property. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  // ------------------------------------------------------------
  // Lease-context: link existing
  // ------------------------------------------------------------
  const handleLinkExisting = async () => {
    if (!leaseId || !selectedExistingPropertyId || leaseAlreadyLinked) return;

    const prop = availableExistingProperties.find((v) => v?.id === selectedExistingPropertyId);
    const propName = propertyLabel(prop);

    const ok = window.confirm(
      `Link "${propName}" to this lease?\n\n` +
        "This will set the lease’s property. To link a different property later, unlink it from the lease detail page first."
    );

    if (!ok) return;

    try {
      setIsLinkingExisiting(true);
      await leasesApi.update(leaseId, { propertyId: selectedExistingPropertyId }, { token });
      goBack();
    } catch (err) {
      console.error("Failed to link property to lease", err);
      alert("Failed to link property. Check console for details.");
    } finally {
      setIsLinkingExisting(false);
    }
  };

  // ------------------------------------------------------------
  // Lease-context: create & link new
  // ------------------------------------------------------------
  const handleSubmitForLease = async (e) => {
    e.preventDefault();
    setTouched({ address1: true, city: true, state: true, postalCode: true });
    setFormError("");

    if (leaseAlreadyLinked) return;

    const { ok, payload } = validateAndSetError();
    if (!ok) return;

    try {
      setSubmitting(true);

      const created = await propertiesApi.create(payload, { token });
      await leasesApi.update(leaseId, { propertyId: created.id }, { token });

      goBack();
    } catch (err) {
      console.error("Failed to create property for lease", err);
      setFormError("Failed to create property. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  const saveDisabled = isSubmitting;

  const ctrl = (isError) => `${card.control} ${isError ? card.controlError : ""}`;
  
  // ------------------------------------------------------------
  // FORM JSX
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
              Name <span className={shared.muted}>(optional)</span>
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Amazing Properties LLC"
              className={card.control}
              disabled={isSubmitting}
            />
          </div>           
          <fieldset style={{ border: 0, padding: 0, margin: 0, minInlineSize: 0 }}>
            <legend className={`${card.label} ${shared.groupLegend}`}>
              Address <span className={card.required}>*</span>
            </legend>

            <div className={shared.rowWrap}>
              <div className={`${card.field} ${shared.full}`}>
                <input
                  id="address1"
                  type="text"
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, address1: true }))}
                  placeholder="Street address (123 Oak Street)"
                  className={ctrl(touched.address1 && !String(address1).trim())}
                  disabled={isSubmitting}
                />
                {touched.address1 && !String(address1).trim() ? <div className={shared.error}>Enter a street address</div> : null}
              </div>
            </div>

            <div className={shared.rowWrap}>
              <div className={`${card.field} ${shared.full}`}>
                <input
                  id="address2"
                  type="text"
                  value={address2}
                  onChange={(e) => setAddress2(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, address2: true }))}
                  placeholder="Unit (3E)"
                  className={card.control}
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className={`${shared.rowNoWrap} ${shared.mt3}`}>
              <div className={`${card.field} ${shared.growEqual}`}>
                <input
                  id="city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, city: true }))}
                  placeholder="City (New York)"
                  className={ctrl(touched.city && !String(city).trim())}
                  disabled={isSubmitting}
                />
                {touched.city && !String(city).trim() ? <div className={shared.error}>Enter a city</div> : null}
              </div>
  
              <div className={`${card.field} ${shared.growEqual}`}>
                <select
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, state: true }))}
                  className={ctrl(touched.state && !String(state).trim())}
                  disabled={isSubmitting}
                >
                  <option value="">— Select —</option>
                  {stateOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
                {touched.state && !String(state).trim() ? <div className={shared.error}>Select a state</div> : null}
              </div>
              
              <div className={`${card.field} ${shared.growEqual}`}>
                <input
                  id="postalCode"
                  type="text"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, postalCode: true }))}
                  placeholder="Zip (12345-1234)"
                  className={ctrl(touched.postalCode && !String(postalCode).trim())}
                  disabled={isSubmitting}
                />
                {touched.postalCode && !String(postalCode).trim() ? <div className={shared.error}>Enter a zip code</div> : null}
              </div>
            </div>
          </fieldset>

          <div className={shared.groupRow}>
            <div className={`${card.field} ${shared.groupField}`}>
              <label className={card.label} htmlFor="bedrooms">
                Bedrooms <span className={shared.muted}>(optional)</span>
              </label>
              <input
                id="bedrooms"
                type="number"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                placeholder="4"
                className={card.control}
                disabled={isSubmitting}
              />
            </div>

            <div className={`${card.field} ${shared.groupField}`}>
              <label className={card.label} htmlFor="bathrooms">
                Bathrooms <span className={shared.muted}>(optional)</span>
              </label>
              <input
                id="bathrooms"
                type="number"
                step="0.5"
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
                placeholder="2.5"
                className={card.control}
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className={shared.groupRow}>
            <div className={`${card.field} ${shared.groupField}`}>
              <label className={card.label} htmlFor="sqft">
                Size <span className={shared.muted}>(optional)</span>
              </label>
              <input
                id="sqft"
                type="number"
                value={sqft}
                onChange={(e) => setSqft(e.target.value)}
                placeholder="2400"
                className={card.control}
                disabled={isSubmitting}
              />
            </div>

            <div className={`${card.field} ${shared.groupField}`}>
              <label className={card.label} htmlFor="yearBuilt">
                Year built <span className={shared.muted}>(optional)</span>
              </label>
              <input
                id="yearBuilt"
                type="number"
                value={yearBuilt}
                onChange={(e) => setYearBuilt(e.target.value)}
                placeholder="2016"
                className={card.control}
                disabled={isSubmitting}
              />
            </div>
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

        </div>
      </section>

      <div className={card.formActions}>
        <button type="submit" className={card.primaryButton} disabled={saveDisabled}>
          {isSubmitting ? "Saving…" : isEditMode ? "Save changes" : "Save property"}
        </button>
        <button type="button" className={card.linkAction} onClick={handleCancel} disabled={isSubmitting}>
          Cancel
        </button>
      </div>      
    </form>
  );

    // ------------------------------------------------------------
  // RENDER
  // ------------------------------------------------------------

  // === Mode A: isLeaseContext present (manage properties for lease) ===
  if (isLeaseContext) {
    const linkedName = linkedProperty ? propertyLabel(linkedProperty) : "";

    return (
      <div className={page.page}>
        <header className={page.header}>
          <div>
            <h1 className={page.title}>Manage property linking</h1>
            {loadingLease ? (
              <p className={page.subtitle}>Loading lease…</p>
            ) : leaseError || !lease ? (
              <p className={`${page.subtitle} ${shared.error}`}>
                Failed to load lease. You can still add properties, but linking may not behave as expected.
              </p>
            ) : leaseAlreadyLinked ? (
              <p className={page.subtitle}>
                This lease is already linked to <strong>{linkedName || "a property"}</strong>. To link a different
                property, unlink it from the lease detail page first.
              </p>              
            ) : (
              <p className={page.subtitle}>
                Link an existing property or create a new one for this lease.
              </p>
            )}
          </div>
        </header>

        {leaseAlreadyLinked ? null : (
          <div className={page.grid}>
          
            {/* Link existing */}
            <section className={page.section}>
              <div className={page.sectionHeader}>
                <div className={page.sectionHeaderStack}>
                  <div className={page.sectionTitle}>Link existing</div>
                  <div className={page.sectionHint}>
                    Quickly associate an existing property with this lease
                  </div>
                </div>
              </div>
          
              <div className={`${card.card} ${card.cardForm} ${page.narrow}`}>
                <div className={card.cardBody}>
                  {loadingProperties ? (
                    <div className={shared.muted}>Loading properties…</div>
                  ) : propertiesError ? (
                    <div className={shared.error}>Failed to load properties list.</div>
                  ) : availableExistingProperties.length === 0 ? (
                    <div className={shared.muted}>No properties available to link.</div>
                  ) : (
                  
                    <div className={shared.groupRow} style={{ alignItems: "center" }}>
                      <div className={shared.groupField} style={{ flex: 1 }}>                            
                        <select
                          className={card.control}
                          value={selectedExistingPropertyId}
                          onChange={(e) => setSelectedExistingPropertyId(e.target.value)}
                          disabled={isLinkingExisting}
                          style={{ flex: 1 }}
                        >
                          <option value="">Select a property…</option>
                          {availableExistingProperties.map((p) => (
                            <option key={p.id} value={p.id}>
                              {propertyLabel(p)}
                            </option>
                          ))}
                        </select>
                      </div>
                        
                      <button
                        type="button"
                        className={card.primaryButton}
                        onClick={handleLinkExisting}
                        disabled={!selectedExistingPropertyId || isLinkingExisting}
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {isLinkingExisting ? "Linking…" : "Link"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </section>
                
            {/* Create new */}
            <section className={page.section}>
              <div className={page.sectionHeader}>
                <div className={page.sectionHeaderStack}>
                  <div className={page.sectionTitle}>Create new</div>
                  <div className={page.sectionHint}>
                    Create a new property record and link it to this lease.
                  </div>
                </div>
              </div>
              {renderForm(handleSubmitForLease)}
            </section>
            </div>
          )}
        </div>
      );
    }
    // === Mode B: global add/edit ===
    return (
      <div className={page.page}>
        <header className={page.header}>
            <div>
            <h1 className={page.title}>{isEditMode ? "Edit property" : "Create property"}</h1>
            <p className={page.subtitle}>
              {isEditMode ? "Update property details." : "Create a property record. It can be linked to a lease."}
            </p>
            </div>
        </header>
        {renderForm(handleSubmitGlobal)}
      </div>
    );
  }