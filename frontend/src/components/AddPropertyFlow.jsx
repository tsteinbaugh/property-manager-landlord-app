// property-manager-landlord-app/frontend/src/components/AddPropertyFlow.jsx
import { useState, useMemo } from "react";
import styles from "./PropertyModal.module.css";
import buttonStyles from "../styles/Buttons.module.css";

import ModalRoot from "./ui/ModalRoot";
import useModalKeys from "../hooks/useModalKeys";

import PropertyModalWrapper from "./PropertyModalWrapper";
import LeaseSection from "./properties/LeaseSection";
import FinancialForm from "./financials/FinancialForm";
import TenantModal from "./TenantModal";
import OccupantModal from "./OccupantModal";
import PetModal from "./PetModal";
import EmergencyContactModal from "./EmergencyContactModal";
import { generateLeaseSchedule } from "../utils/finance";

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

      // must include "pet" and (rent|monthly|perMonth); exclude one-time words
      const looksMonthly =
        key.includes("pet") &&
        (key.includes("rent") || key.includes("monthly") || key.includes("permonth")) &&
        !key.includes("deposit") &&
        !key.includes("one") &&
        !key.includes("setup") &&
        !key.includes("fee"); // exclude generic fees

      if (looksMonthly && isNumeric(v)) sum += Number(v);
      if (v && typeof v === "object") stack.push(v);
    }
  }
  return sum;
}

export default function AddPropertyFlow({ onComplete, onCancel }) {
  const [step, setStep] = useState(STEPS.DETAILS);
  const [reviewJump, setReviewJump] = useState(null); // were we jumped from Review?

  // Accumulated payload
  const [propertyData, setPropertyData] = useState({});
  const [leaseFile, setLeaseFile] = useState(null);
  const [leaseExtract, setLeaseExtract] = useState(null);

  const [financialConfig, setFinancialConfig] = useState(null);
  const [financialValid, setFinancialValid] = useState(false);

  const [tenants, setTenants] = useState([]);
  const [tenantsWarn, setTenantsWarn] = useState(false);
  const [tenantsShake, setTenantsShake] = useState(false);
  const [showTenantModal, setShowTenantModal] = useState(false);

  const [occupants, setOccupants] = useState([]);
  const [showOccupantModal, setShowOccupantModal] = useState(false);

  const [pets, setPets] = useState([]);
  const [showPetModal, setShowPetModal] = useState(false);

  const [emergencyContacts, setEmergencyContacts] = useState([]);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  function prev() {
    setStep((s) => Math.max(STEPS.DETAILS, s - 1));
  }

  function goNext() {
    if (step === STEPS.LEASE) return setStep(STEPS.FINANCIAL);
    if (step === STEPS.FINANCIAL)
      return financialValid ? setStep(STEPS.TENANTS) : null;

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

  useModalKeys({ onEscape: onCancel, onEnter: goNext, enterDisabled });

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

  // Base rent (covers common variants)
  const baseRent =
    Number(
      financialConfig?.rent ??
      financialConfig?.monthlyRent ??
      financialConfig?.rentAmount ??
      financialConfig?.baseRent ??
      0
    ) || 0;

  // Direct pet-rent keys (top-level)
  const directPetRent =
    Number(
      financialConfig?.petRent ??
      financialConfig?.petMonthly ??
      financialConfig?.petRentPerMonth ??
      financialConfig?.pet_rent ??
      financialConfig?.monthlyPetRent ??
      0
    ) || 0;

  // Nested monthly pet rent (numeric only; excludes deposits/fees/booleans)
  const nestedPetRent = getNestedMonthlyPetRent(financialConfig);

  // Use the larger of direct vs nested to avoid double-counting
  const petRent = Math.max(directPetRent, nestedPetRent);

  const rentDisplay =
    baseRent + petRent > 0 ? `$${(baseRent + petRent).toFixed(2)}` : "missing";

  return (
    <ModalRoot isOpen={true} onClose={onCancel}>
      {/* HEADER */}
      <div className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>Add Property</h2>
      </div>

      {/* BODY */}
      <div className={styles.modalBody}>
        {step === STEPS.DETAILS && (
          <PropertyModalWrapper
            initialData={propertyData}
            onSave={(data) => {
              setPropertyData(data);
              setStep(STEPS.LEASE);
            }}
            onQuickCreate={(data) => {
              setPropertyData(data);
              onComplete?.({
                property: data,
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
            onCancel={onCancel}
            /* Render the "Back to Review" inside the form area so it aligns */
            renderBelowSubmit={
              reviewJump
                ? () => (
                    <button
                      className={buttonStyles.secondaryButton}
                      onClick={backToReview}
                    >
                      Back to Review &amp; Create
                    </button>
                  )
                : undefined
            }
          />
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
              <ul style={{ margin: "8px 0 8px 18px" }}>
                {tenants.map((t, i) => (
                  <li key={i}>
                    {t.name || "(no name)"} — {t.contact?.phone || ""}{" "}
                    {t.contact?.email || ""}
                  </li>
                ))}
              </ul>
            )}

            <div style={{ marginTop: tenants.length ? 4 : 8, marginBottom: 8 }}>
              <button
                className={buttonStyles.primaryButton}
                onClick={() => setShowTenantModal(true)}
              >
                + Add Tenant
              </button>
            </div>

            {tenants.length === 0 && (
              <p
                className={
                  tenantsWarn
                    ? `${styles.warnText} ${tenantsShake ? styles.warnShake : ""}`
                    : "mutedText"
                }
                aria-live="polite"
              >
                Add at least one tenant to continue.
              </p>
            )}

            {showTenantModal && (
              <TenantModal
                isOpen={true}
                tenant={{
                  name: "",
                  age: "",
                  occupation: "",
                  contact: { phone: "", email: "" },
                }}
                onClose={() => setShowTenantModal(false)}
                onSave={(t) => {
                  setTenants((prev) => [...prev, t]);
                  setTenantsWarn(false);
                  setShowTenantModal(false);
                }}
                title="Add Tenant"
              />
            )}
          </div>
        )}

        {step === STEPS.OCCUPANTS && (
          <div>
            <h3>Occupants (optional)</h3>

            {!!occupants.length && (
              <ul style={{ margin: "8px 0 8px 18px" }}>
                {occupants.map((o, i) => (
                  <li key={i}>
                    {o.name || "(no name)"} — {o.contact?.phone || ""}{" "}
                    {o.contact?.email || ""}
                  </li>
                ))}
              </ul>
            )}

            <div style={{ marginTop: occupants.length ? 4 : 8, marginBottom: 8 }}>
              <button
                className={buttonStyles.primaryButton}
                onClick={() => setShowOccupantModal(true)}
              >
                + Add Occupant
              </button>
            </div>

            {showOccupantModal && (
              <OccupantModal
                isOpen={true}
                occupant={{
                  name: "",
                  age: "",
                  occupation: "",
                  relationship: "",
                  contact: { phone: "", email: "" },
                }}
                onClose={() => setShowOccupantModal(false)}
                onSave={(o) => {
                  setOccupants((prev) => [...prev, o]);
                  setShowOccupantModal(false);
                }}
                title="Add Occupant"
              />
            )}
          </div>
        )}

        {step === STEPS.PETS && (
          <div>
            <h3>Pets (optional)</h3>

            {!!pets.length && (
              <ul style={{ margin: "8px 0 8px 18px" }}>
                {pets.map((p, i) => (
                  <li key={i}>{p.name || "(no name)"} — {p.type || ""}</li>
                ))}
              </ul>
            )}

            <div style={{ marginTop: pets.length ? 4 : 8, marginBottom: 8 }}>
              <button
                className={buttonStyles.primaryButton}
                onClick={() => setShowPetModal(true)}
              >
                + Add Pet
              </button>
            </div>

            {showPetModal && (
              <PetModal
                isOpen={true}
                pet={{ name: "", type: "", size: "", license: "" }}
                onClose={() => setShowPetModal(false)}
                onSave={(p) => {
                  setPets((prev) => [...prev, p]);
                  setShowPetModal(false);
                }}
                title="Add Pet"
              />
            )}
          </div>
        )}

        {step === STEPS.EMERGENCY && (
          <div>
            <h3>Emergency Contacts (optional)</h3>

            {!!emergencyContacts.length && (
              <ul style={{ margin: "8px 0 8px 18px" }}>
                {emergencyContacts.map((c, i) => (
                  <li key={i}>
                    {c.name || "(no name)"} — {c.contact?.phone || ""}{" "}
                    {c.contact?.email || ""}
                  </li>
                ))}
              </ul>
            )}

            <div style={{ marginTop: emergencyContacts.length ? 4 : 8, marginBottom: 8 }}>
              <button
                className={buttonStyles.primaryButton}
                onClick={() => setShowEmergencyModal(true)}
              >
                + Add Contact
              </button>
            </div>

            {showEmergencyModal && (
              <EmergencyContactModal
                isOpen={true}
                emergencyContact={{ name: "", contact: { phone: "", email: "" } }}
                onClose={() => setShowEmergencyModal(false)}
                onSave={(c) => {
                  setEmergencyContacts((prev) => [...prev, c]);
                  setShowEmergencyModal(false);
                }}
                title="Add Emergency Contact"
              />
            )}
          </div>
        )}

        {step === STEPS.REVIEW && (
          <div>
            <h3>Review &amp; Create</h3>
            <div className={styles.reviewRows}>
              <div className={styles.reviewRow}>
                <button className={styles.reviewKey} onClick={() => jumpTo(STEPS.DETAILS)}>Address</button>
                <div className={styles.reviewVal}>
                  {propertyData.address}, {propertyData.city}, {propertyData.state} {propertyData.zip}
                </div>
              </div>

              <div className={styles.reviewRow}>
                <button className={styles.reviewKey} onClick={() => jumpTo(STEPS.DETAILS)}>Bed / Bath / Sq Ft</button>
                <div className={styles.reviewVal}>
                  {(beds || "—")} / {(baths || "—")} / {(sqFt || "—")}
                </div>
              </div>

              <div className={styles.reviewRow}>
                <button className={styles.reviewKey} onClick={() => jumpTo(STEPS.LEASE)}>Lease file</button>
                <div className={styles.reviewVal}>{leaseFile?.name || "none"}</div>
              </div>

              <div className={styles.reviewRow}>
                <button className={styles.reviewKey} onClick={() => jumpTo(STEPS.FINANCIAL)}>Financial (Rent)</button>
                <div className={styles.reviewVal}>{rentDisplay}</div>
              </div>

              <div className={styles.reviewRow}>
                <button className={styles.reviewKey} onClick={() => jumpTo(STEPS.TENANTS)}>Tenants</button>
                <div className={styles.reviewVal}>
                  {tenants.length ? tenants.map((t, i) => <div key={i}>{t?.name || "(no name)"}</div>) : "none"}
                </div>
              </div>

              <div className={styles.reviewRow}>
                <button className={styles.reviewKey} onClick={() => jumpTo(STEPS.OCCUPANTS)}>Occupants</button>
                <div className={styles.reviewVal}>
                  {occupants.length ? occupants.map((o, i) => <div key={i}>{o?.name || "(no name)"}</div>) : "none"}
                </div>
              </div>

              <div className={styles.reviewRow}>
                <button className={styles.reviewKey} onClick={() => jumpTo(STEPS.PETS)}>Pets</button>
                <div className={styles.reviewVal}>
                  {pets.length ? pets.map((p, i) => <div key={i}>{p?.name || "(no name)"}</div>) : "none"}
                </div>
              </div>

              <div className={styles.reviewRow} style={{ marginBottom: 4 }}>
                <button className={styles.reviewKey} onClick={() => jumpTo(STEPS.EMERGENCY)}>Emergency Contacts</button>
                <div className={styles.reviewVal}>
                  {emergencyContacts.length ? emergencyContacts.map((c, i) => <div key={i}>{c?.name || "(no name)"}</div>) : "none"}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FOOTER */}
      {step !== STEPS.DETAILS && (
        <>
          <div className={styles.modalButtons}>
            <button className={buttonStyles.primaryButton} onClick={prev}>Back</button>

            {step < STEPS.REVIEW ? (
              <button className={buttonStyles.primaryButton} onClick={goNext} disabled={enterDisabled}>Next</button>
            ) : (
              <button
                className={buttonStyles.primaryButton}
                onClick={() => {
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
                }}
              >
                Create Property
              </button>
            )}

            <button className={buttonStyles.secondaryButton} onClick={onCancel}>Cancel</button>
          </div>

          {reviewJump && step !== STEPS.REVIEW && (
            <div className={styles.footerReturnRow}>
              <button className={buttonStyles.secondaryButton} onClick={backToReview}>
                Back to Review &amp; Create
              </button>
            </div>
          )}
        </>
      )}
    </ModalRoot>
  );
}
