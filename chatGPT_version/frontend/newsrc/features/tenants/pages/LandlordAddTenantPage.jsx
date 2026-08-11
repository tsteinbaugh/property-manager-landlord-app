// frontend/newsrc/features/residents/pages/tenants/LandlordAddTenantPage.jsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";

import page from "@shared/styles/ui.pages.module.css";
import card from "@shared/styles/ui.cards.module.css";
import shared from "@shared/styles/ui.shared.module.css";

import { tenantsApi } from "@features/tenants/api/tenants.api.js";
import { leasesApi } from "@features/leases/api/leases.api.js";

import { occupantsApi } from "@features/residents/api/occupants.api.js";
import { petsApi } from "@features/residents/api/pets.api.js";
import { emergencyContactsApi } from "@features/residents/api/emergencyContacts.api.js";
import { vehiclesApi } from "@features/residents/api/vehicles.api.js";

import {
  INVALID,
  isValidEmail,
  isValidPhone,
  normalizeEmail,
  normalizePhone,
  optionalTrimToNull,
  requiredTrimmedString,
  parseIntOrNullOpt,
  parseMoneyOrNullOpt,
  parseEnumOrNullOpt,
  validateObject,
  SEX,
  HAIR_COLOR,
  EYE_COLOR,
  BODY_BUILD,
  optionsFromEnumMap,
  formatEnumLabel,
} from "@shared/utils/validation.js";

function tenantTitle(t) {
  return t?.name || t?.email || "Tenant";
}

function propertyTitle(p) {
  return p?.name
    ?? (p?.address1 && p?.address2
        ? `${p.address1} ${p.address2}`
        : p?.address1
          ?? "Property");
}

function leaseTitle(lease) {
  const prop =
    lease?.propertyName ||
    lease?.property?.name ||
    (lease?.property?.address1 && lease?.property?.address2
      ? `${lease.property.address1} ${lease.property.address2}`
      : lease?.property?.address1) ||
    null;
    propertyTitle(lease?.property);
  return prop ? `Lease for ${prop}` : "Lease";
}

function vehicleLabel(v) {
  if (!v) return "Vehicle";
  const year = v.year ? String(v.year).trim() : "";
  const make = v.make ? String(v.make).trim() : "";
  const model = v.model ? String(v.model).trim() : "";
  const ymm = [year, make, model].filter(Boolean).join(" ");
  if (v.plate) return `${ymm || "Vehicle"} • ${v.plate}`;
  return ymm || "Vehicle";
}

export default function LandlordAddTenantPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { token } = useUser() || {};

  // ------------------------------------------------------------
  // Context params
  // ------------------------------------------------------------
  const leaseId = searchParams.get("leaseId") || "";
  const occupantId = searchParams.get("occupantId") || "";
  const petId = searchParams.get("petId") || "";
  const emergencyContactId = searchParams.get("emergencyContactId") || "";
  const vehicleId = searchParams.get("vehicleId") || "";
  const tenantId = searchParams.get("tenantId") || "";
  const returnTo = searchParams.get("returnTo") || "";

  const isEditMode = !!tenantId;

  const isLeaseContext = !!leaseId;
  const isOccupantContext = !!occupantId;
  const isPetContext = !!petId;
  const isEmergencyContactContext = !!emergencyContactId;
  const isVehicleContext = !!vehicleId;

  const isAnyLinkContext =
    isLeaseContext ||
    isOccupantContext ||
    isPetContext ||
    isEmergencyContactContext ||
    isVehicleContext;

  // ------------------------------------------------------------
  // Form state
  // ------------------------------------------------------------
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [age, setAge] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [weight, setWeight] = useState("");

  const [sex, setSex] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [bodyBuild, setBodyBuild] = useState("");
  const [markings, setMarkings] = useState("");

  const [occupation, setOccupation] = useState("");
  const [employer, setEmployer] = useState("");
  const [income, setIncome] = useState("");
  const [creditScore, setCreditScore] = useState("");

  const [tenantFiles, setTenantFiles] = useState([]);
  const [notes, setNotes] = useState("");

  const [isSubmitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const [touched, setTouched] = useState({
    name: false,
    phone: false,
    email: false,
  });

  // ------------------------------------------------------------
  // Context entity + tenants list (context mode only)
  // ------------------------------------------------------------
  const [ctxEntity, setCtxEntity] = useState(null);
  const [ctxLoading, setCtxLoading] = useState(!!isAnyLinkContext);
  const [ctxError, setCtxError] = useState(null);

  const [allTenants, setAllTenants] = useState([]);
  const [loadingTenants, setLoadingTenants] = useState(!!isAnyLinkContext);
  const [tenantsError, setTenantsError] = useState(null);

  const [selectedExistingTenantId, setSelectedExistingTenantId] = useState("");
  const [isLinkingExisting, setIsLinkingExisting] = useState(false);

  // ------------------------------------------------------------
  // Dropdown options
  // ------------------------------------------------------------
  const sexOptions = useMemo(
    () =>
      optionsFromEnumMap(SEX, {
        sortBy: "key",
        toOption: (n, code) => ({
          value: code,
          label: `${formatEnumLabel(n, { hideUnknown: false })}`,
        }),
      }),
    []
  );

  const hairColorOptions = useMemo(
    () =>
      optionsFromEnumMap(HAIR_COLOR, {
        sortBy: "key",
        toOption: (n, code) => ({
          value: code,
          label: `${formatEnumLabel(n, { hideUnknown: false })}`,
        }),
      }),
    []
  );

  const eyeColorOptions = useMemo(
    () =>
      optionsFromEnumMap(EYE_COLOR, {
        sortBy: "key",
        toOption: (n, code) => ({
          value: code,
          label: `${formatEnumLabel(n, { hideUnknown: false })}`,
        }),
      }),
    []
  );

  const bodyBuildOptions = useMemo(
    () =>
      optionsFromEnumMap(BODY_BUILD, {
        sortBy: "key",
        toOption: (n, code) => ({
          value: code,
          label: `${formatEnumLabel(n, { hideUnknown: false })}`,
        }),
      }),
    []
  );

  // ------------------------------------------------------------
  // Load context entity + all tenants (context mode)
  // ------------------------------------------------------------
  useEffect(() => {
    let cancelled = false;
    if (!isAnyLinkContext || !token) return;

    async function loadContextEntity() {
      try {
        setCtxLoading(true);
        setCtxError(null);

        let entity = null;
        if (isLeaseContext) entity = await leasesApi.get(leaseId, { token });
        else if (isOccupantContext) entity = await occupantsApi.get(occupantId, { token });
        else if (isPetContext) entity = await petsApi.get(petId, { token });
        else if (isEmergencyContactContext)
          entity = await emergencyContactsApi.get(emergencyContactId, { token });
        else if (isVehicleContext) entity = await vehiclesApi.get(vehicleId, { token });

        if (!cancelled) setCtxEntity(entity || null);
      } catch (err) {
        console.error("Failed to load context entity for AddTenantPage", err);
        if (!cancelled) setCtxError(err);
      } finally {
        if (!cancelled) setCtxLoading(false);
      }
    }

    async function loadTenants() {
      try {
        setLoadingTenants(true);
        setTenantsError(null);
        const list = await tenantsApi.listAll({ token, includeArchived: false });
        if (!cancelled) setAllTenants(Array.isArray(list) ? list : []);
      } catch (err) {
        console.error("Failed to load tenants list for Add Tenant Page", err);
        if (!cancelled) setTenantsError(err);
      } finally {
        if (!cancelled) setLoadingTenants(false);
      }
    }

    loadContextEntity();
    loadTenants();

    return () => {
      cancelled = true;
    };
  }, [
    isAnyLinkContext,
    isLeaseContext,
    isOccupantContext,
    isPetContext,
    isEmergencyContactContext,
    isVehicleContext,
    leaseId,
    occupantId,
    petId,
    emergencyContactId,
    vehicleId,
    token,
  ]);

  // ------------------------------------------------------------
  // Edit mode: load tenant
  // ------------------------------------------------------------
  useEffect(() => {
    let cancelled = false;
    if (!isEditMode || !tenantId || !token) return;

    async function loadTenantForEdit() {
      try {
        setFormError("");
        const t = await tenantsApi.get(tenantId, { token });
        if (cancelled) return;

        if (!t) {
          setFormError("Tenant not found.");
          return;
        }

        setName(t.name || "");
        setPhone(t.phone || "");
        setEmail(t.email || "");

        setAge(t.age != null ? String(t.age) : "");
        setHeightFeet(t.heightFeet != null ? String(t.heightFeet) : "");
        setHeightInches(t.heightInches != null ? String(t.heightInches) : "");
        setWeight(t.weight != null ? String(t.weight) : "");

        setSex(t.sex || "");
        setHairColor(t.hairColor || "");
        setEyeColor(t.eyeColor || "");
        setBodyBuild(t.bodyBuild || "");

        setMarkings(t.markings || "");

        setOccupation(t.occupation || "");
        setEmployer(t.employer || "");
        setIncome(t.income != null ? String(t.income) : "");
        setCreditScore(t.creditScore != null ? String(t.creditScore) : "");

        setNotes(t.notes || "");
      } catch (err) {
        console.error("Failed to load tenant for edit", err);
        if (!cancelled) setFormError("Failed to load tenant. Check console for details.");
      }
    }

    loadTenantForEdit();
    return () => {
      cancelled = true;
    };
  }, [isEditMode, tenantId, token]);

  // ------------------------------------------------------------
  // Linked tenants (derived)
  // - Lease: from lease.leaseTenants rows
  // - Others: from tenant.*Links scanning allTenants
  // ------------------------------------------------------------
  const linkedTenantIds = useMemo(() => {
    const ids = new Set();

    if (isLeaseContext) {
      const rows = Array.isArray(ctxEntity?.leaseTenants) ? ctxEntity.leaseTenants : [];
      for (const r of rows) {
        const tid = r?.tenantId || r?.tenant?.id;
        if (tid) ids.add(tid);
      }
      return ids;
    }

    if (isOccupantContext) {
      for (const t of allTenants) {
        const links = Array.isArray(t?.occupantLinks) ? t.occupantLinks : [];
        if (links.some((l) => l?.occupantId === occupantId)) ids.add(t.id);
      }
      return ids;
    }

    if (isPetContext) {
      for (const t of allTenants) {
        const links = Array.isArray(t?.petLinks) ? t.petLinks : [];
        if (links.some((l) => l?.petId === petId)) ids.add(t.id);
      }
      return ids;
    }

    if (isEmergencyContactContext) {
      for (const t of allTenants) {
        const links = Array.isArray(t?.emergencyContactLinks) ? t.emergencyContactLinks : [];
        if (links.some((l) => l?.emergencyContactId === emergencyContactId)) ids.add(t.id);
      }
      return ids;
    }

    if (isVehicleContext) {
      for (const t of allTenants) {
        const links = Array.isArray(t?.vehicleLinks) ? t.vehicleLinks : [];
        if (links.some((l) => l?.vehicleId === vehicleId)) ids.add(t.id);
      }
      return ids;
    }

    return ids;
  }, [
    isLeaseContext,
    isOccupantContext,
    isPetContext,
    isEmergencyContactContext,
    isVehicleContext,
    ctxEntity,
    allTenants,
    occupantId,
    petId,
    emergencyContactId,
    vehicleId,
  ]);

  const linkedTenants = useMemo(() => {
    if (!isAnyLinkContext) return [];
    if (isLeaseContext) {
      const rows = Array.isArray(ctxEntity?.leaseTenants) ? ctxEntity.leaseTenants : [];
      return rows
        .map((r) => r?.tenant)
        .filter(Boolean)
        .filter((t) => t?.id);
    }

    // for non-lease contexts, tenant objects are in allTenants
    return (Array.isArray(allTenants) ? allTenants : []).filter((t) => t?.id && linkedTenantIds.has(t.id));
  }, [isAnyLinkContext, isLeaseContext, ctxEntity, allTenants, linkedTenantIds]);

  const availableExistingTenants = useMemo(() => {
    const list = Array.isArray(allTenants) ? allTenants : [];
    if (!isAnyLinkContext) return list;
    return list.filter((t) => t?.id && !linkedTenantIds.has(t.id));
  }, [allTenants, isAnyLinkContext, linkedTenantIds]);

  // ------------------------------------------------------------
  // Navigation helpers
  // ------------------------------------------------------------
  const goBack = () => {
    if (returnTo) return navigate(returnTo);
    if (isLeaseContext) return navigate(`/landlord/leases/${leaseId}`);
    if (isOccupantContext) return navigate(`/landlord/occupants/${occupantId}`);
    if (isPetContext) return navigate(`/landlord/pets/${petId}`);
    if (isEmergencyContactContext) return navigate(`/landlord/emergencyContacts/${emergencyContactId}`);
    if (isVehicleContext) return navigate(`/landlord/vehicles/${vehicleId}`);
    if (isEditMode) return navigate(`/landlord/tenants/${tenantId}`);
    return navigate("/landlord/residents?tab=tenants");
  };

  const handleCancel = () => goBack();

  // ------------------------------------------------------------
  // Validation + payload
  // REQUIRED: name, phone, email  (per your A)
  // ------------------------------------------------------------
  const buildPayload = () => {
    const input = {
      name,
      phone,
      email,
      age,
      heightFeet,
      heightInches,
      weight,
      sex,
      hairColor,
      eyeColor,
      bodyBuild,
      markings,
      occupation,
      employer,
      income,
      creditScore,
      notes,
    };

    const schema = {
      name: requiredTrimmedString,

      phone: (v) => {
        const out = normalizePhone(v);
        if (!out) return INVALID; // required
        return isValidPhone(out) ? out : INVALID;
      },

      email: (v) => {
        const out = normalizeEmail(v);
        if (!out) return INVALID; // required
        return isValidEmail(out) ? out : INVALID;
      },

      age: (v) => parseIntOrNullOpt(v, { min: 0, max: 130 }),
      heightFeet: (v) => parseIntOrNullOpt(v, { min: 0, max: 8 }),
      heightInches: (v) => parseIntOrNullOpt(v, { min: 0, max: 11 }),
      weight: (v) => parseIntOrNullOpt(v, { min: 0, max: 2000 }),

      sex: (v) => parseEnumOrNullOpt(v, SEX),
      hairColor: (v) => parseEnumOrNullOpt(v, HAIR_COLOR),
      eyeColor: (v) => parseEnumOrNullOpt(v, EYE_COLOR),
      bodyBuild: (v) => parseEnumOrNullOpt(v, BODY_BUILD),

      markings: optionalTrimToNull,
      occupation: optionalTrimToNull,
      employer: optionalTrimToNull,
      income: (v) => parseMoneyOrNullOpt(v, { min: 0, max: 1_000_000_000 }),
      creditScore: (v) => parseIntOrNullOpt(v, { min: 0, max: 900 }),
      notes: optionalTrimToNull,
    };

    return validateObject(input, schema, {
      errorMessages: {
        name: "Name is required.",
        phone: "Phone is required and must be valid.",
        email: "Email is required and must be valid.",
        sex: "Invalid sex value.",
        hairColor: "Invalid hair color value.",
        eyeColor: "Invalid eye color value.",
        bodyBuild: "Invalid body build value.",
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
  // Attachments upload helper
  // ------------------------------------------------------------
  const maybeUploadAttachments = async (tenantIdToUse) => {
    const list = Array.isArray(tenantFiles) ? tenantFiles : [];
    if (!tenantIdToUse) return;
    if (!list.length) return;

    try {
      await tenantsApi.uploadAttachments(tenantIdToUse, list, { token });
    } catch (err) {
      console.error("Tenant saved but attachment upload failed", err);
      alert("Tenant was saved, but uploading attachments failed. You can upload them later.");
    }
  };

  // ------------------------------------------------------------
  // Link existing tenant (context mode)
  // ------------------------------------------------------------
  const handleLinkExisting = async () => {
    if (!token || !selectedExistingTenantId) return;

    const ten = availableExistingTenants.find((t) => t?.id === selectedExistingTenantId);
    const tenName = tenantTitle(ten);

    let targetLabel = "this item";
    if (isLeaseContext) targetLabel = leaseTitle(ctxEntity);
    else if (isOccupantContext) targetLabel = ctxEntity?.name || "this occupant";
    else if (isPetContext) targetLabel = ctxEntity?.name || "this pet";
    else if (isEmergencyContactContext) targetLabel = ctxEntity?.name || "this emergency contact";
    else if (isVehicleContext) targetLabel = vehicleLabel(ctxEntity);

    const ok = window.confirm(
      `Link ${tenName} to ${targetLabel}?\n\nThis link them in your records.`
    );
    if (!ok) return;

    try {
      setIsLinkingExisting(true);

      if (isLeaseContext) {
        await leasesApi.linkTenant(leaseId, selectedExistingTenantId, { token });
        goBack();
        return;
      }

      if (isOccupantContext) {
        await tenantsApi.linkOccupant(selectedExistingTenantId, occupantId, { token });
        goBack();
        return;
      }

      if (isPetContext) {
        await tenantsApi.linkPet(selectedExistingTenantId, petId, { token });
        goBack();
        return;
      }

      if (isEmergencyContactContext) {
        await tenantsApi.linkEmergencyContact(selectedExistingTenantId, emergencyContactId, { token });
        goBack();
        return;
      }

      if (isVehicleContext) {
        await tenantsApi.linkVehicle(selectedExistingTenantId, vehicleId, { token });
        goBack();
        return;
      }
    } catch (err) {
      console.error("Failed to link existing tenant", err);
      alert("Failed to link tenant. Check console for details.");
    } finally {
      setIsLinkingExisting(false);
    }
  };

  // ------------------------------------------------------------
  // Submit: global create/edit
  // ------------------------------------------------------------
  const handleSubmitGlobal = async (e) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, email: true });
    setFormError("");

    const { ok, payload } = validateAndSetError();
    if (!ok) return;

    try {
      setSubmitting(true);

      if (isEditMode) {
        await tenantsApi.update(tenantId, payload, { token });
        await maybeUploadAttachments(tenantId);
        goBack();
        return;
      }

      const created = await tenantsApi.create(payload, { token });
      const newId = created?.id;
      if (newId) await maybeUploadAttachments(newId);

      if (returnTo) return navigate(returnTo);
      if (newId) return navigate(`/landlord/tenants/${newId}`);
      return navigate("/landlord/residents?tab=tenants");
    } catch (err) {
      console.error("Failed to save tenant", err);
      setFormError("Failed to save tenant. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  // ------------------------------------------------------------
  // Submit: create tenant + link (context mode)
  // ------------------------------------------------------------
  const handleSubmitForContext = async (e) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, email: true });
    setFormError("");

    const { ok, payload } = validateAndSetError();
    if (!ok) return;

    try {
      setSubmitting(true);

      const created = await tenantsApi.create(payload, { token });
      const newId = created?.id;

      if (newId) {
        await maybeUploadAttachments(newId);

        try {
          if (isLeaseContext) {
            await leasesApi.linkTenant(leaseId, newId, { token });
          } else if (isOccupantContext) {
            await tenantsApi.linkOccupant(newId, occupantId, { token });
          } else if (isPetContext) {
            await tenantsApi.linkPet(newId, petId, { token });
          } else if (isEmergencyContactContext) {
            await tenantsApi.linkEmergencyContact(newId, emergencyContactId, { token });
          } else if (isVehicleContext) {
            await tenantsApi.linkVehicle(newId, vehicleId, { token });
          }
        } catch (err) {
          console.error("Tenant created but linking failed", err);
          alert("Tenant was created, but linking failed. You can link it later.");
        }
      }

      goBack();
    } catch (err) {
      console.error("Failed to create tenant in context", err);
      setFormError("Failed to create tenant. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  // ------------------------------------------------------------
  // UI strings (context aware)
  // ------------------------------------------------------------
  const entityLabel = useMemo(() => {
    if (!isAnyLinkContext) return "";
    if (isLeaseContext) return leaseTitle(ctxEntity);
    if (isOccupantContext) return ctxEntity?.name || "Occupant";
    if (isPetContext) return ctxEntity?.name || "Pet";
    if (isEmergencyContactContext) return ctxEntity?.name || "Emergency Contact";
    if (isVehicleContext) return vehicleLabel(ctxEntity);
    return "Entity";
  }, [
    isAnyLinkContext,
    isLeaseContext,
    isOccupantContext,
    isPetContext,
    isEmergencyContactContext,
    isVehicleContext,
    ctxEntity,
  ]);

  const subtitle = isEditMode
    ? "Update this tenant’s information."
    : isAnyLinkContext
      ? `Link an existing tenant or create a new one for ${entityLabel}.`
      : "Create a tenant profile. You can add occupants, pets, emergency contacts and vehicles after this.";

  const linkHint = isLeaseContext
    ? "Quickly associate an existing tenant with this lease"
    : isOccupantContext
      ? "Quickly associate an existing tenant with this occupant"
      : isPetContext
        ? "Quickly associate an existing tenant with this pet"
        : isEmergencyContactContext
          ? "Quickly associate an existing tenant with this emergency contact"
          : isVehicleContext
            ? "Quickly associate an existing tenant with this vehicle"
            : "Link existing tenant";

  const saveDisabled = isSubmitting;

  const ctrl = (isError) => `${card.control} ${isError ? card.controlError : ""}`;

  // ------------------------------------------------------------
  // FORM JSX (shared)
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
              placeholder="Name (required)"
              className={ctrl(touched.name && !String(name).trim())}
              disabled={isSubmitting}
            />
            {touched.name && !String(name).trim() ? <div className={shared.error}>Enter a name</div> : null}
          </div>

          <fieldset className={shared.groupRow}>
            <legend className={`${card.label} ${shared.groupLegend}`}>
              Contact <span className={card.required}>*</span>
            </legend>

            <div className={`${card.field} ${shared.groupField}`}>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                placeholder="Phone (123-123-1234)"
                className={ctrl(touched.phone && !String(phone).trim())}
                disabled={isSubmitting}
              />
              {touched.phone && !String(phone).trim() ? (
                <div className={shared.error}>Enter a phone number</div>
              ) : null}
            </div>

            <div className={`${card.field} ${shared.groupField}`}>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                placeholder="Email (john.doe@example.com)"
                className={ctrl(touched.email && !String(email).trim())}
                disabled={isSubmitting}
              />
              {touched.email && !String(email).trim() ? (
                <div className={shared.error}>Enter an email</div>
              ) : null}
            </div>
          </fieldset>
        </div>
      </section>

      <section className={`${card.card} ${card.cardForm} ${page.narrow}`}>
        <div className={card.cardHeader}>
          <div className={page.sectionHeaderStack}>
            <div className={card.cardTitle}>Physical characteristics</div>
            <div className={shared.muted}>Used for identifying purposes</div>
          </div>
        </div>

        <div className={card.cardBody}>
          <div className={card.field}>
            <label className={card.label} htmlFor="age">
              Age <span className={shared.muted}>(optional)</span>
            </label>
            <input
              id="age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="30"
              className={card.control}
              disabled={isSubmitting}
            />
          </div>

          <fieldset className={shared.groupRow}>
            <legend className={`${card.label} ${shared.groupLegend}`}>
              Height <span className={shared.muted}>(optional)</span>
            </legend>

            <div className={`${card.field} ${shared.groupField}`}>
              <input
                id="heightFeet"
                type="number"
                value={heightFeet}
                onChange={(e) => setHeightFeet(e.target.value)}
                placeholder="Feet"
                className={card.control}
                disabled={isSubmitting}
              />
            </div>

            <div className={`${card.field} ${shared.groupField}`}>
              <input
                id="heightInches"
                type="number"
                value={heightInches}
                onChange={(e) => setHeightInches(e.target.value)}
                placeholder="Inches"
                className={card.control}
                disabled={isSubmitting}
              />
            </div>
          </fieldset>

          <div className={card.field}>
            <label className={card.label} htmlFor="weight">
              Weight <span className={shared.muted}>(optional)</span>
            </label>
            <input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Weight (pounds)"
              className={card.control}
              disabled={isSubmitting}
            />
          </div>

          <div className={card.field}>
            <label className={card.label} htmlFor="sex">
              Sex <span className={shared.muted}>(optional)</span>
            </label>
            <select
              id="sex"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              className={card.control}
              disabled={isSubmitting}
            >
              <option value="">— Select —</option>
              {sexOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div className={card.field}>
            <label className={card.label} htmlFor="hairColor">
              Hair color <span className={shared.muted}>(optional)</span>
            </label>
            <select
              id="hairColor"
              value={hairColor}
              onChange={(e) => setHairColor(e.target.value)}
              className={card.control}
              disabled={isSubmitting}
            >
              <option value="">— Select —</option>
              {hairColorOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div className={card.field}>
            <label className={card.label} htmlFor="eyeColor">
              Eye color <span className={shared.muted}>(optional)</span>
            </label>
            <select
              id="eyeColor"
              value={eyeColor}
              onChange={(e) => setEyeColor(e.target.value)}
              className={card.control}
              disabled={isSubmitting}
            >
              <option value="">— Select —</option>
              {eyeColorOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div className={card.field}>
            <label className={card.label} htmlFor="bodyBuild">
              Body build <span className={shared.muted}>(optional)</span>
            </label>
            <select
              id="bodyBuild"
              value={bodyBuild}
              onChange={(e) => setBodyBuild(e.target.value)}
              className={card.control}
              disabled={isSubmitting}
            >
              <option value="">— Select —</option>
              {bodyBuildOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div className={card.field}>
            <label className={card.label} htmlFor="markings">
              Markings <span className={shared.muted}>(optional)</span>
            </label>
            <input
              id="markings"
              type="text"
              value={markings}
              onChange={(e) => setMarkings(e.target.value)}
              placeholder="Identifying markings (tattoos, scars, etc.)"
              className={card.control}
              disabled={isSubmitting}
            />
          </div>
        </div>
      </section>

      <section className={`${card.card} ${card.cardForm} ${page.narrow}`}>
        <div className={card.cardHeader}>
          <div className={card.cardTitle}>Financial background</div>
        </div>

        <div className={card.cardBody}>
          <div className={card.field}>
            <label className={card.label} htmlFor="occupation">
              Occupation <span className={shared.muted}>(optional)</span>
            </label>
            <input
              id="occupation"
              type="text"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              placeholder="plumber, teacher, nurse..."
              className={card.control}
              disabled={isSubmitting}
            />
          </div>

          <div className={card.field}>
            <label className={card.label} htmlFor="employer">
              Employer <span className={shared.muted}>(optional)</span>
            </label>
            <input
              id="employer"
              type="text"
              value={employer}
              onChange={(e) => setEmployer(e.target.value)}
              placeholder="Google, Amazon, Apple..."
              className={card.control}
              disabled={isSubmitting}
            />
          </div>

          <div className={card.field}>
            <label className={card.label} htmlFor="income">
              Monthly income <span className={shared.muted}>(optional)</span>
            </label>
            <input
              id="income"
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              placeholder="8352.43"
              className={card.control}
              disabled={isSubmitting}
            />
          </div>

          <div className={card.field}>
            <label className={card.label} htmlFor="creditScore">
              Credit score <span className={shared.muted}>(optional)</span>
            </label>
            <input
              id="creditScore"
              type="number"
              value={creditScore}
              onChange={(e) => setCreditScore(e.target.value)}
              placeholder="650"
              className={card.control}
              disabled={isSubmitting}
            />
          </div>
        </div>
      </section>

      <section className={`${card.card} ${card.cardForm} ${page.narrow}`}>
        <div className={card.cardHeader}>
          <div className={card.cardTitle}>
            Attachments <span className={shared.muted}>(optional)</span>
          </div>
        </div>

        <div className={card.cardBody}>
          <div className={card.field}>
            <label className={shared.srOnly} htmlFor="tenantFiles">
              Attachments
            </label>
            <input
              id="tenantFiles"
              type="file"
              multiple
              className={card.fileControl}
              onChange={(e) => setTenantFiles(Array.from(e.target.files || []))}
              disabled={isSubmitting}
            />
            <div className={shared.muted} style={{ marginTop: 10 }}>
              Upload multiple attachments by selecting multiple files.
            </div>

            {tenantFiles.length > 0 ? (
              <div style={{ marginTop: 6 }}>
                <div className={shared.muted}>Selected:</div>
                <ul style={{ margin: "4px 0 0 16px", padding: 0 }}>
                  {tenantFiles.map((f) => (
                    <li key={`${f.name}:${f.size}:${f.lastModified}`} style={{ listStyleType: "disc" }}>
                      {f.name}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
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
          {isSubmitting ? "Saving…" : isEditMode ? "Save changes" : "Save tenant"}
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

  // === Mode A: context linking (lease/occupant/pet/emergency contact/vehicle) ===
  if (isAnyLinkContext && !isEditMode) {
    return (
      <div className={page.page}>
        <header className={page.header}>
          <div>
            <h1 className={page.title}>Manage tenant linking</h1>
            {ctxLoading ? (
              <p className={page.subtitle}>Loading tenant…</p>
            ) : ctxError ? (
              <p className={`${page.subtitle} ${shared.error}`}>
                Failed to load context. You can still add tenants, but linking may not behave as expected.
              </p>
            ) : (
              <p className={page.subtitle}>{subtitle}</p>
            )}
          </div>
        </header>

        <div className={page.grid}>
          {/* Link existing */}
          <section className={page.section}>
            <div className={page.sectionHeader}>
              <div className={page.sectionHeaderStack}>
                <div className={page.sectionTitle}>Link existing</div>
                <div className={page.sectionHint}>{linkHint}</div>
              </div>
            </div>

            <div className={`${card.card} ${card.cardForm} ${page.narrow}`}>
              <div className={card.cardBody}>
                {loadingTenants ? (
                  <div className={shared.muted}>Loading tenants…</div>
                ) : tenantsError ? (
                  <div className={shared.error}>Failed to load tenants list.</div>
                ) : availableExistingTenants.length === 0 ? (
                  <div className={shared.muted}>No other tenants available to link.</div>
                ) : (
                  <>
                    <div className={shared.groupRow} style={{ alignItems: "center" }}>
                      <div className={shared.groupField} style={{ flex: 1 }}>
                        <select
                          className={card.control}
                          value={selectedExistingTenantId}
                          onChange={(e) => setSelectedExistingTenantId(e.target.value)}
                          disabled={isLinkingExisting}
                          style={{ flex: 1 }}
                        >
                          <option value="">Select a tenant…</option>
                          {availableExistingTenants.map((t) => (
                            <option key={t.id} value={t.id}>
                              {tenantTitle(t)}
                            </option>
                          ))}
                        </select>
                      </div>

                      <button
                        type="button"
                        className={card.primaryButton}
                        onClick={handleLinkExisting}
                        disabled={!selectedExistingTenantId || isLinkingExisting}
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {isLinkingExisting ? "Linking…" : "Link"}
                      </button>
                    </div>

                    {linkedTenants.length > 0 ? (
                      <div className={shared.muted} style={{ marginTop: 10 }}>
                        Already linked:
                        <ul style={{ paddingLeft: 18, marginTop: 4 }}>
                          {linkedTenants.map((t) => (
                            <li key={t.id}>{tenantTitle(t)}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </>
                )}
              </div>
            </div>
          </section>

          {/* Create new */}
          <section className={page.section}>
            <div className={page.sectionHeader}>
              <div className={page.sectionHeaderStack}>
                <div className={page.sectionTitle}>Create new</div>
                <div className={page.sectionHint}>Create a new tenant record and link it automatically.</div>
              </div>
            </div>

            {renderForm(handleSubmitForContext)}
          </section>
        </div>
      </div>
    );
  }

  // === Mode B: global add/edit ===
  return (
    <div className={page.page}>
      <header className={page.header}>
        <div>
          <h1 className={page.title}>{isEditMode ? "Edit tenant" : "Create tenant"}</h1>
          <p className={page.subtitle}>
            {isEditMode
              ? "Update tenant details."
              : "Create a tenant record. It can be linked to leases, occupants, pets, emergency contacts and vehicles."}
          </p>
        </div>
      </header>

      {renderForm(handleSubmitGlobal)}
    </div>
  );
}
