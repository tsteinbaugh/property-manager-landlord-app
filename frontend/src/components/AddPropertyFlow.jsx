// frontend/src/components/AddPropertyFlow.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import FormModal from "../features/ui/modal/FormModal.jsx";
import styles from "./PropertyModal.module.css";
import modalStyles from "../features/ui/modal/modal.module.css";
import buttonStyles from "../styles/Buttons.module.css";
import { generateLeaseSchedule } from "../utils/finance";
import PropertyFormFields from "./PropertyFormFields.jsx";
import LeaseSection from "../components/properties/LeaseSection.jsx";
import FinancialForm from "./financials/FinancialForm.jsx";
import TenantModal from "./TenantModal.jsx";
import OccupantModal from "./OccupantModal.jsx";
import EmergencyContactModal from "./EmergencyContactModal.jsx";
import PetModal from "./PetModal.jsx";

const STEPS = { DETAILS: 1, LEASE: 2, FINANCIAL: 3, TENANTS: 4, OCCUPANTS: 5, PETS: 6, EMERGENCY: 7, REVIEW: 8 };
const REQUIRED = ["address","city","state","zip","owner"];
const DETAILS_FORM_ID = "add-prop-details-form";

function focusFirstInvalid(formEl) {
  if (!formEl) return false;
  const ok = formEl.reportValidity();
  if (ok) return true;
  const firstInvalid = formEl.querySelector(":invalid");
  if (firstInvalid) {
    firstInvalid.focus({ preventScroll: false });
    firstInvalid.scrollIntoView({ block: "center", behavior: "smooth" });
  }
  return false;
}

function getNestedMonthlyPetRent(obj) {
  if (!obj || typeof obj !== "object") return 0;
  let sum = 0;
  const stack = [obj];
  const isNumeric = (v) =>
    (typeof v === "number" && Number.isFinite(v)) ||
    (typeof v === "string" && /^[+-]?\d+(\.\d+)?$/.test(v));
  while (stack.length) {
    const cur = stack.pop();
    for (const [k, v] of Object.entries(cur || {})) {
      const key = k.toLowerCase();
      const looksMonthly =
        key.includes("pet") &&
        (key.includes("rent") || key.includes("monthly") || key.includes("permonth")) &&
        !key.includes("deposit") &&
        !key.includes("one") &&
        !key.includes("setup") &&
        !key.includes("fee");
      if (looksMonthly && isNumeric(v)) sum += Number(v);
      if (v && typeof v === "object") stack.push(v);
    }
  }
  return sum;
}

export default function AddPropertyFlow({ onComplete, onCancel }) {
  const [step, setStep] = useState(STEPS.DETAILS);
  const [reviewJump, setReviewJump] = useState(null);

  const [propertyData, setPropertyData] = useState({});
  const [leaseFile, setLeaseFile] = useState(null);
  const [leaseExtract, setLeaseExtract] = useState(null);
  const [financialConfig, setFinancialConfig] = useState(null);
  const [financialValid, setFinancialValid] = useState(false);

  const [tenants, setTenants] = useState([]);
  const [tenantsWarn, setTenantsWarn] = useState(false);
  const [tenantsShake, setTenantsShake] = useState(false);
  const [showTenantModal, setShowTenantModal] = useState(false);
  const [editTenantIndex, setEditTenantIndex] = useState(null);

  const [occupants, setOccupants] = useState([]);
  const [showOccupantModal, setShowOccupantModal] = useState(false);
  const [editOccupantIndex, setEditOccupantIndex] = useState(null);

  const [pets, setPets] = useState([]);
  const [showPetModal, setShowPetModal] = useState(false);
  const [editPetIndex, setEditPetIndex] = useState(null);

  const [emergencyContacts, setEmergencyContacts] = useState([]);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [editEmergencyIndex, setEditEmergencyIndex] = useState(null);

  const detailsFormRef = useRef(null);

  function prev() {
    setStep((s) => Math.max(STEPS.DETAILS, s - 1));
  }
  function jumpTo(targetStep) {
    setReviewJump(true);
    setStep(targetStep);
  }
  function backToReview() {
    setStep(STEPS.REVIEW);
    setReviewJump(null);
  }

  const beds = propertyData?.bedrooms ?? "";
  const baths = propertyData?.bathrooms ?? "";
  const sqFt = propertyData?.squareFeet ?? "";

  const baseRent =
    Number(
      financialConfig?.rent ??
      financialConfig?.monthlyRent ??
      financialConfig?.rentAmount ??
      financialConfig?.baseRent ?? 0
    ) || 0;

  const directPetRent =
    Number(
      financialConfig?.petRent ??
      financialConfig?.petMonthly ??
      financialConfig?.petRentPerMonth ??
      financialConfig?.pet_rent ??
      financialConfig?.monthlyPetRent ?? 0
    ) || 0;

  const nestedPetRent = getNestedMonthlyPetRent(financialConfig);
  const petRent = Math.max(directPetRent, nestedPetRent);
  const rentDisplay = baseRent + petRent > 0 ? `$${(baseRent + petRent).toFixed(2)}` : "missing";

  const detailsValid = useMemo(
    () => REQUIRED.every((k) => String((propertyData || {})[k] ?? "").trim() !== ""),
    [propertyData]
  );

  const submitLabel = step < STEPS.REVIEW ? "Next" : "Create Property";
  const submitDisabled =
    (step === STEPS.DETAILS && !detailsValid) ||
    (step === STEPS.FINANCIAL && !financialValid) ||
    (step === STEPS.TENANTS && tenants.length === 0);

  function handleSubmit() {
    // Respect disabled state for Enter key, too.
    if (submitDisabled) return;

    if (step === STEPS.DETAILS) {
      if (!focusFirstInvalid(detailsFormRef.current)) return;
      setStep(STEPS.LEASE);
      return;
    }
    if (step === STEPS.LEASE) return setStep(STEPS.FINANCIAL);
    if (step === STEPS.FINANCIAL) return setStep(STEPS.TENANTS);
    if (step === STEPS.TENANTS) return setStep(STEPS.OCCUPANTS);
    if (step === STEPS.OCCUPANTS) return setStep(STEPS.PETS);
    if (step === STEPS.PETS) return setStep(STEPS.EMERGENCY);
    if (step === STEPS.EMERGENCY) return setStep(STEPS.REVIEW);

    // REVIEW → finalize
    if (step === STEPS.REVIEW) {
      const schedule = financialConfig ? generateLeaseSchedule(financialConfig) : [];
      onComplete?.({
        property: propertyData,
        leaseFile,
        leaseExtract,
        financialConfig,
        schedule,
        tenants,
        occupants,
        pets,
        emergencyContacts,
      });
    }
  }

  /* ---------- ENTER KEY BEHAVIOR ACROSS STEPS ---------- */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "Enter") return;

      // Let native form submission handle DETAILS (we already wired formId there).
      // But still prevent stray submits on content-editable or buttons.
      const tag = (e.target?.tagName || "").toLowerCase();
      const isTextish = tag === "input" || tag === "textarea";
      const isSelect = tag === "select";
      const isButtonish = tag === "button" || tag === "a";

      // Ignore with modifiers
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;

      // In DETAILS step, let the form's native submit fire—so we do nothing here.
      if (step === STEPS.DETAILS) return;

      // Avoid double triggering when focused on buttons/links
      if (isButtonish) return;

      // Prevent inserting newlines in textareas; we'll drive submit/next instead
      if (isTextish || isSelect) {
        e.preventDefault();
        handleSubmit();
        return;
      }

      // Generic: advance
      e.preventDefault();
      handleSubmit();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step, submitDisabled, handleSubmit]);

  /* ---------- MIDDLE BUTTONS (Back + Quick Create) ---------- */
  const middleButtons = (
    <>
      {step > STEPS.DETAILS && (
        <button
          type="button"
          className={modalStyles.btnPrimary} // <- same look as Next/Save
          onClick={prev}
        >
          Back
        </button>
      )}
  
      {step === STEPS.DETAILS && (
        <button
          type="button"
          className={modalStyles.btnPrimary} // <- same look as Next/Save
          onClick={() => {
            if (!focusFirstInvalid(detailsFormRef.current)) return;
            onComplete?.({
              property: propertyData,
              leaseFile: null,
              leaseExtract: null,
              financialConfig: null,
              schedule: [],
              tenants: [],
              occupants: [],
              pets: [],
              emergencyContacts: [],
            });
          }}
        >
          Save &amp; Create
        </button>
      )}
    </>
  );

  return (
    <FormModal
      isOpen={true}
      onClose={onCancel}
      title="Add Property"
      size="md"
      submitLabel={submitLabel}
      cancelLabel="Cancel"
      onSubmit={handleSubmit}
      disabled={submitDisabled}
      formId={step === STEPS.DETAILS ? DETAILS_FORM_ID : undefined}
      middleButtons={middleButtons}  /* <— NEW placement */
    >
      {/* BODY */}
      <div className={styles.modalBody}>
        {step === STEPS.DETAILS && (
          <>
            <h3 className={styles.modalTitle} style={{ marginBottom: 8 }}>Property Details</h3>
            <form
              id={DETAILS_FORM_ID}
              ref={detailsFormRef}
              onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}
              className="form"
            >
              <PropertyFormFields
                formData={propertyData}
                onChange={(e) => {
                  const { name, value } = e.target;
                  setPropertyData((prev) => ({ ...prev, [name]: value }));
                }}
                requiredFields={REQUIRED}
              />
            </form>
          </>
        )}

        {step === STEPS.LEASE && (
          <>
            <h3 style={{ marginBottom: 8 }}>Lease</h3>
            <div style={{ marginTop: 8, marginBottom: 8 }}>
              <LeaseSection
                value={{ file: leaseFile }}
                onChange={(v) => setLeaseFile(v?.file || null)}
                onExtracted={({ fields, matches }) =>
                  setLeaseExtract({ fields, matches })
                }
              />
            </div>
          </>
        )}

        {step === STEPS.FINANCIAL && (
          <>
            <h3 style={{ marginBottom: 8 }}>Financial Info</h3>
            <FinancialForm
              initialValues={leaseExtract?.fields || financialConfig || {}}
              onLiveChange={setFinancialConfig}
              onLiveValid={setFinancialValid}
              onCreate={(cfg) => setFinancialConfig(cfg)}
              showPrimaryAction={false}
            />
            <div style={{ height: 12 }} />
          </>
        )}

        {/* Tenants / Occupants / Pets / Emergency — unchanged rendering, keep your current mapping & modals */}
        {/* ... keep your existing sections here exactly as you have them now ... */}

        {step === STEPS.REVIEW && (
          <div>
            <h3>Review &amp; Create</h3>
            <div className={styles.reviewRows}>
              {/* ... same review rows you already have ... */}
              <div className={styles.reviewRow}>
                <button className={styles.reviewKey} onClick={() => jumpTo(STEPS.DETAILS)}>Address</button>
                <div className={styles.reviewVal}>
                  {propertyData.address}, {propertyData.city}, {propertyData.state} {propertyData.zip}
                </div>
              </div>
              {/* (rest of review rows unchanged for brevity) */}
            </div>
          </div>
        )}
      </div>
    </FormModal>
  );
}
