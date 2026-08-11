// frontend/src/components/AddPropertyFlow.jsx
import { useState, useMemo } from "react";

import FormModal from "../features/ui/modal/FormModal.jsx";
import styles from "../features/ui/modal/modal.module.css";

import { generateLeaseSchedule } from "../utils/finance";
import PropertyForm from "./PropertyForm.jsx";
import LeaseSection from "../components/properties/LeaseSection.jsx";
import FinancialForm from "./financials/FinancialForm.jsx";
import TenantModal from "./TenantModal.jsx";
import OccupantModal from "./OccupantModal.jsx";
import EmergencyContactModal from "./EmergencyContactModal.jsx";
import PetModal from "./PetModal.jsx";

const STEPS = {
  DETAILS: 1,
  LEASE: 2,
  FINANCIAL: 3,
  TENANTS: 4,
  OCCUPANTS: 5,
  PETS: 6,
  EMERGENCY: 7,
  REVIEW: 8,
};

// --- helper: find monthly pet rent anywhere in the config (numeric only) ---
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
  const [reviewJump, setReviewJump] = useState(null); // jumped from Review?

  // Accumulated payload
  const [propertyData, setPropertyData] = useState({});
  const [leaseFile, setLeaseFile] = useState(null);
  const [leaseExtract, setLeaseExtract] = useState(null);

  const [financialConfig, setFinancialConfig] = useState(null);
  const [financialValid, setFinancialValid] = useState(false);

  // Tenants
  const [tenants, setTenants] = useState([]);
  const [tenantsWarn, setTenantsWarn] = useState(false);
  const [tenantsShake, setTenantsShake] = useState(false);
  const [showTenantModal, setShowTenantModal] = useState(false);
  const [editTenantIndex, setEditTenantIndex] = useState(null);

  // Occupants
  const [occupants, setOccupants] = useState([]);
  const [showOccupantModal, setShowOccupantModal] = useState(false);
  const [editOccupantIndex, setEditOccupantIndex] = useState(null);

  // Pets
  const [pets, setPets] = useState([]);
  const [showPetModal, setShowPetModal] = useState(false);
  const [editPetIndex, setEditPetIndex] = useState(null);

  // Emergency Contacts
  const [emergencyContacts, setEmergencyContacts] = useState([]);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [editEmergencyIndex, setEditEmergencyIndex] = useState(null);

  // ---- navigation helpers
  function prev() {
    setStep((s) => Math.max(STEPS.DETAILS, s - 1));
  }

  function goNext() {
    if (step === STEPS.LEASE) return setStep(STEPS.FINANCIAL);
    if (step === STEPS.FINANCIAL) return financialValid ? setStep(STEPS.TENANTS) : null;

    if (step === STEPS.TENANTS) {
      if (tenants.length === 0) {
        setTenantsWarn(true);
        setTenantsShake(true);
        setTimeout(() => setTenantsShake(false), 350);
        return;
      }
      return setStep(STEPS.OCCUPANTS);
    }

    if (step === STEPS.OCCUPANTS) return setStep(STEPS.PETS);
    if (step === STEPS.PETS) return setStep(STEPS.EMERGENCY);
    if (step === STEPS.EMERGENCY) return setStep(STEPS.REVIEW);
  }

  const enterDisabled = useMemo(() => {
    if (step === STEPS.FINANCIAL) return !financialValid;
    if (step === STEPS.TENANTS) return tenants.length === 0;
    return false;
  }, [step, financialValid, tenants.length]);

  function jumpTo(targetStep) {
    setReviewJump(true);
    setStep(targetStep);
  }
  function backToReview() {
    setStep(STEPS.REVIEW);
    setReviewJump(null);
  }

  // ---- review helpers
  const beds = propertyData?.bedrooms ?? "";
  const baths = propertyData?.bathrooms ?? "";
  const sqFt = propertyData?.squareFeet ?? "";

  const baseRent =
    Number(
      financialConfig?.rent ??
        financialConfig?.monthlyRent ??
        financialConfig?.rentAmount ??
        financialConfig?.baseRent ??
        0,
    ) || 0;

  const directPetRent =
    Number(
      financialConfig?.petRent ??
        financialConfig?.petMonthly ??
        financialConfig?.petRentPerMonth ??
        financialConfig?.pet_rent ??
        financialConfig?.monthlyPetRent ??
        0,
    ) || 0;

  const nestedPetRent = getNestedMonthlyPetRent(financialConfig);
  const petRent = Math.max(directPetRent, nestedPetRent);

  const rentDisplay =
    baseRent + petRent > 0 ? `$${(baseRent + petRent).toFixed(2)}` : "missing";

  // ---------- FOOTER middle buttons ----------
  const middleButtons =
    step === STEPS.DETAILS ? (
      // Step 1: Save & Create alongside Cancel/Next
      <button
        type="button"
        className={styles.btnPrimary}
        onClick={() => {
          const requiredOk =
            String(propertyData.address || "").trim() &&
            String(propertyData.city || "").trim() &&
            String(propertyData.state || "").trim() &&
            String(propertyData.zip || "").trim() &&
            String(propertyData.owner || "").trim();

          if (!requiredOk) return; // PropertyForm shows validation itself
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
        disabled={
          !String(propertyData.address || "").trim() ||
          !String(propertyData.city || "").trim() ||
          !String(propertyData.state || "").trim() ||
          !String(propertyData.zip || "").trim() ||
          !String(propertyData.owner || "").trim()
        }
      >
        Save &amp; Create
      </button>
    ) : step > STEPS.DETAILS ? (
      // Steps 2..8: show Back between Cancel and Next
      <button type="button" className={styles.btnPrimary} onClick={prev}>
        Back
      </button>
    ) : null;

  return (
    <FormModal
      isOpen={true}
      onClose={onCancel}
      title="Add Property"
      size="md"
      submitLabel={step < STEPS.REVIEW ? "Next" : "Create Property"}
      cancelLabel="Cancel"
      onSubmit={() => {
        if (step < STEPS.REVIEW) {
          goNext();
        } else {
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
      }}
      disabled={enterDisabled}
      formId={step === STEPS.DETAILS ? "property-form" : undefined} // Enter submits details
      middleButtons={middleButtons}
    >
      {/* ------- STEP CONTENT ------- */}
      {step === STEPS.DETAILS && (
        <>
          <h3 style={{ marginBottom: 8 }}>Property Details</h3>
          <PropertyForm
            initialData={propertyData}
            onChange={setPropertyData}
            onSave={(data) => {
              setPropertyData(data);
              setStep(STEPS.LEASE);
            }}
            onCancel={onCancel}
            requiredFields={["address", "city", "state", "zip", "owner"]}
            submitLabel="Save & Continue"
            buttonMinWidth={180}
          />
          {reviewJump ? (
            <div style={{ marginTop: 6 }}>
              <button className={styles.btnGhost} onClick={backToReview}>
                Back to Review &amp; Create
              </button>
            </div>
          ) : null}
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

      {step === STEPS.TENANTS && (
        <div>
          <h3>Tenants</h3>

          {tenants.length > 0 && (
            <ul style={{ margin: "8px 0 8px 0", paddingLeft: 0 }}>
              {tenants.map((t, i) => (
                <li
                  key={i}
                  style={{
                    listStyle: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "6px 0",
                    borderBottom: "1px dashed #e5e7eb",
                  }}
                >
                  <div>
                    <strong>{t.name || "(no name)"}</strong>
                    {t.contact?.email || t.contact?.phone ? (
                      <span style={{ color: "#6b7280" }}>
                        {" "}
                        — {t.contact?.phone || ""} {t.contact?.email || ""}
                      </span>
                    ) : null}
                  </div>
                  <div style={{ display: "inline-flex", gap: 8 }}>
                    <button
                      className={styles.btnGhost}
                      onClick={() => {
                        setEditTenantIndex(i);
                        setShowTenantModal(true);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className={styles.btnPrimary}
                      onClick={() => {
                        if (!confirm("Remove this tenant?")) return;
                        setTenants((prev) => prev.filter((_, idx) => idx !== i));
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div style={{ marginTop: tenants.length ? 4 : 8, marginBottom: 8 }}>
            <button
              className={styles.btnPrimary}
              onClick={() => {
                setEditTenantIndex(null);
                setShowTenantModal(true);
              }}
            >
              + Add Tenant
            </button>
          </div>

          {tenants.length === 0 && (
            <p aria-live="polite" className={styles.message}>
              Add at least one tenant to continue.
            </p>
          )}

          {showTenantModal && (
            <TenantModal
              isOpen={true}
              tenant={
                editTenantIndex != null
                  ? tenants[editTenantIndex]
                  : {
                      name: "",
                      age: "",
                      occupation: "",
                      contact: { phone: "", email: "" },
                    }
              }
              onClose={() => {
                setShowTenantModal(false);
                setEditTenantIndex(null);
              }}
              onSave={(t) => {
                setTenants((prev) => {
                  if (editTenantIndex != null) {
                    const copy = [...prev];
                    copy[editTenantIndex] = t;
                    return copy;
                  }
                  return [...prev, t];
                });
                setTenantsWarn(false);
                setShowTenantModal(false);
                setEditTenantIndex(null);
              }}
              title={editTenantIndex != null ? "Edit Tenant" : "Add Tenant"}
            />
          )}
        </div>
      )}

      {step === STEPS.OCCUPANTS && (
        <div>
          <h3>Occupants (optional)</h3>

          {!!occupants.length && (
            <ul style={{ margin: "8px 0 8px 0", paddingLeft: 0 }}>
              {occupants.map((o, i) => (
                <li
                  key={i}
                  style={{
                    listStyle: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "6px 0",
                    borderBottom: "1px dashed #e5e7eb",
                  }}
                >
                  <div>
                    <strong>{o.name || "(no name)"}</strong>
                  </div>
                  <div style={{ display: "inline-flex", gap: 8 }}>
                    <button
                      className={styles.btnGhost}
                      onClick={() => {
                        setEditOccupantIndex(i);
                        setShowOccupantModal(true);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className={styles.btnPrimary}
                      onClick={() => {
                        if (!confirm("Remove this occupant?")) return;
                        setOccupants((prev) => prev.filter((_, idx) => idx !== i));
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div style={{ marginTop: occupants.length ? 4 : 8, marginBottom: 8 }}>
            <button
              className={styles.btnPrimary}
              onClick={() => {
                setEditOccupantIndex(null);
                setShowOccupantModal(true);
              }}
            >
              + Add Occupant
            </button>
          </div>

          {showOccupantModal && (
            <OccupantModal
              isOpen={true}
              occupant={
                editOccupantIndex != null
                  ? occupants[editOccupantIndex]
                  : {
                      name: "",
                      age: "",
                      occupation: "",
                      relationship: "",
                      contact: { phone: "", email: "" },
                    }
              }
              onClose={() => {
                setShowOccupantModal(false);
                setEditOccupantIndex(null);
              }}
              onSave={(o) => {
                setOccupants((prev) => {
                  if (editOccupantIndex != null) {
                    const copy = [...prev];
                    copy[editOccupantIndex] = o;
                    return copy;
                  }
                  return [...prev, o];
                });
                setShowOccupantModal(false);
                setEditOccupantIndex(null);
              }}
              title={editOccupantIndex != null ? "Edit Occupant" : "Add Occupant"}
            />
          )}
        </div>
      )}

      {step === STEPS.PETS && (
        <div>
          <h3>Pets (optional)</h3>

          {!!pets.length && (
            <ul style={{ margin: "8px 0 8px 0", paddingLeft: 0 }}>
              {pets.map((p, i) => (
                <li
                  key={i}
                  style={{
                    listStyle: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "6px 0",
                    borderBottom: "1px dashed #e5e7eb",
                  }}
                >
                  <div>
                    <strong>{p.name || "(no name)"}</strong>{" "}
                    {p.type ? `— ${p.type}` : ""}
                  </div>
                  <div style={{ display: "inline-flex", gap: 8 }}>
                    <button
                      className={styles.btnGhost}
                      onClick={() => {
                        setEditPetIndex(i);
                        setShowPetModal(true);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className={styles.btnPrimary}
                      onClick={() => {
                        if (!confirm("Remove this pet?")) return;
                        setPets((prev) => prev.filter((_, idx) => idx !== i));
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div style={{ marginTop: pets.length ? 4 : 8, marginBottom: 8 }}>
            <button
              className={styles.btnPrimary}
              onClick={() => {
                setEditPetIndex(null);
                setShowPetModal(true);
              }}
            >
              + Add Pet
            </button>
          </div>

          {showPetModal && (
            <PetModal
              isOpen={true}
              pet={
                editPetIndex != null
                  ? pets[editPetIndex]
                  : { name: "", type: "", size: "", license: "" }
              }
              onClose={() => {
                setShowPetModal(false);
                setEditPetIndex(null);
              }}
              onSave={(p) => {
                setPets((prev) => {
                  if (editPetIndex != null) {
                    const copy = [...prev];
                    copy[editPetIndex] = p;
                    return copy;
                  }
                  return [...prev, p];
                });
                setShowPetModal(false);
                setEditPetIndex(null);
              }}
              title={editPetIndex != null ? "Edit Pet" : "Add Pet"}
            />
          )}
        </div>
      )}

      {step === STEPS.EMERGENCY && (
        <div>
          <h3>Emergency Contacts (optional)</h3>

          {!!emergencyContacts.length && (
            <ul style={{ margin: "8px 0 8px 0", paddingLeft: 0 }}>
              {emergencyContacts.map((c, i) => (
                <li
                  key={i}
                  style={{
                    listStyle: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "6px 0",
                    borderBottom: "1px dashed #e5e7eb",
                  }}
                >
                  <div>
                    <strong>{c.name || "(no name)"}</strong>
                  </div>
                  <div style={{ display: "inline-flex", gap: 8 }}>
                    <button
                      className={styles.btnGhost}
                      onClick={() => {
                        setEditEmergencyIndex(i);
                        setShowEmergencyModal(true);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className={styles.btnPrimary}
                      onClick={() => {
                        if (!confirm("Remove this contact?")) return;
                        setEmergencyContacts((prev) =>
                          prev.filter((_, idx) => idx !== i),
                        );
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div style={{ marginTop: emergencyContacts.length ? 4 : 8, marginBottom: 8 }}>
            <button
              className={styles.btnPrimary}
              onClick={() => {
                setEditEmergencyIndex(null);
                setShowEmergencyModal(true);
              }}
            >
              + Add Contact
            </button>
          </div>

          {showEmergencyModal && (
            <EmergencyContactModal
              isOpen={true}
              emergencyContact={
                editEmergencyIndex != null
                  ? emergencyContacts[editEmergencyIndex]
                  : { name: "", contact: { phone: "", email: "" } }
              }
              onClose={() => {
                setShowEmergencyModal(false);
                setEditEmergencyIndex(null);
              }}
              onSave={(c) => {
                setEmergencyContacts((prev) => {
                  if (editEmergencyIndex != null) {
                    const copy = [...prev];
                    copy[editEmergencyIndex] = c;
                    return copy;
                  }
                  return [...prev, c];
                });
                setShowEmergencyModal(false);
                setEditEmergencyIndex(null);
              }}
              title={
                editEmergencyIndex != null
                  ? "Edit Emergency Contact"
                  : "Add Emergency Contact"
              }
            />
          )}
        </div>
      )}

      {step === STEPS.REVIEW && (
        <div>
          <h3>Review &amp; Create</h3>
          <div
            style={{
              display: "grid",
              gap: 10,
              marginTop: 8,
              marginBottom: 12,
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 10 }}>
              <button
                style={{ fontWeight: 700, background: "transparent", border: "none", textAlign: "left", cursor: "pointer", color: "#111827" }}
                onClick={() => jumpTo(STEPS.DETAILS)}
              >
                Address
              </button>
              <div style={{ color: "#374151" }}>
                {propertyData.address}, {propertyData.city}, {propertyData.state} {propertyData.zip}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 10 }}>
              <button
                style={{ fontWeight: 700, background: "transparent", border: "none", textAlign: "left", cursor: "pointer", color: "#111827" }}
                onClick={() => jumpTo(STEPS.DETAILS)}
              >
                Bed / Bath / Sq Ft
              </button>
              <div style={{ color: "#374151" }}>
                {beds || "—"} / {baths || "—"} / {sqFt || "—"}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 10 }}>
              <button
                style={{ fontWeight: 700, background: "transparent", border: "none", textAlign: "left", cursor: "pointer", color: "#111827" }}
                onClick={() => jumpTo(STEPS.LEASE)}
              >
                Lease file
              </button>
              <div style={{ color: "#374151" }}>{leaseFile?.name || "none"}</div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 10 }}>
              <button
                style={{ fontWeight: 700, background: "transparent", border: "none", textAlign: "left", cursor: "pointer", color: "#111827" }}
                onClick={() => jumpTo(STEPS.FINANCIAL)}
              >
                Financial (Rent)
              </button>
              <div style={{ color: "#374151" }}>{rentDisplay}</div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 10 }}>
              <button
                style={{ fontWeight: 700, background: "transparent", border: "none", textAlign: "left", cursor: "pointer", color: "#111827" }}
                onClick={() => jumpTo(STEPS.TENANTS)}
              >
                Tenants
              </button>
              <div style={{ color: "#374151" }}>
                {tenants.length
                  ? tenants.map((t, i) => <div key={i}>{t?.name || "(no name)"}</div>)
                  : "none"}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 10 }}>
              <button
                style={{ fontWeight: 700, background: "transparent", border: "none", textAlign: "left", cursor: "pointer", color: "#111827" }}
                onClick={() => jumpTo(STEPS.OCCUPANTS)}
              >
                Occupants
              </button>
              <div style={{ color: "#374151" }}>
                {occupants.length
                  ? occupants.map((o, i) => <div key={i}>{o?.name || "(no name)"}</div>)
                  : "none"}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 10 }}>
              <button
                style={{ fontWeight: 700, background: "transparent", border: "none", textAlign: "left", cursor: "pointer", color: "#111827" }}
                onClick={() => jumpTo(STEPS.PETS)}
              >
                Pets
              </button>
              <div style={{ color: "#374151" }}>
                {pets.length
                  ? pets.map((p, i) => <div key={i}>{p?.name || "(no name)"}</div>)
                  : "none"}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 10, marginBottom: 4 }}>
              <button
                style={{ fontWeight: 700, background: "transparent", border: "none", textAlign: "left", cursor: "pointer", color: "#111827" }}
                onClick={() => jumpTo(STEPS.EMERGENCY)}
              >
                Emergency Contacts
              </button>
              <div style={{ color: "#374151" }}>
                {emergencyContacts.length
                  ? emergencyContacts.map((c, i) => <div key={i}>{c?.name || "(no name)"}</div>)
                  : "none"}
              </div>
            </div>
          </div>
        </div>
      )}
    </FormModal>
  );
}
