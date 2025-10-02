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

export default function AddPropertyFlow({ onComplete, onCancel }) {
  const [step, setStep] = useState(STEPS.DETAILS);

  // Accumulated payload
  const [propertyData, setPropertyData] = useState({});
  const [leaseFile, setLeaseFile] = useState(null);
  const [leaseExtract, setLeaseExtract] = useState(null);

  const [financialConfig, setFinancialConfig] = useState(null);
  const [financialValid, setFinancialValid] = useState(false);
  const [showFinErrors, setShowFinErrors] = useState(false);

  const [tenants, setTenants] = useState([]);
  const [showTenantModal, setShowTenantModal] = useState(false);

  const [occupants, setOccupants] = useState([]);
  const [showOccupantModal, setShowOccupantModal] = useState(false);

  const [pets, setPets] = useState([]);
  const [showPetModal, setShowPetModal] = useState(false);

  const [emergencyContacts, setEmergencyContacts] = useState([]);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  function prev() { setStep((s) => Math.max(STEPS.DETAILS, s - 1)); }
  function goNext() {
    if (step === STEPS.LEASE) return setStep(STEPS.FINANCIAL);
    if (step === STEPS.FINANCIAL) return financialValid ? setStep(STEPS.TENANTS) : null;
    if (step === STEPS.TENANTS) return tenants.length > 0 ? setStep(STEPS.OCCUPANTS) : alert("Add at least one tenant.");
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

  // ---- Render wrapper (modal shell)
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
            onSave={(data) => { setPropertyData(data); setStep(STEPS.LEASE); }}
            onCancel={onCancel}
          />
        )}

        {step === STEPS.LEASE && (
          <>
            <h3>Lease</h3>
            <LeaseSection
              value={{ file: leaseFile }}
              onChange={(v) => setLeaseFile(v?.file || null)}
              onExtracted={({ fields, matches }) => setLeaseExtract({ fields, matches })}
            />
          </>
        )}

        {step === STEPS.FINANCIAL && (
          <FinancialForm
            initialValues={leaseExtract?.fields || financialConfig || {}}
            onLiveChange={setFinancialConfig}
            onLiveValid={setFinancialValid}
            onCreate={(cfg) => { setFinancialConfig(cfg); setFinancialValid(true); }}
            showPrimaryAction={false}  // <— hides the button in the wizard
          />
        )}
        {step === STEPS.TENANTS && (
          <div>
            <div style={{ marginBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3>Tenants</h3>
              <button className={buttonStyles.primaryButton} onClick={() => setShowTenantModal(true)}>+ Add Tenant</button>
            </div>
            {tenants.length === 0 && <p className="text-gray-500">Add at least one tenant to continue.</p>}
            {tenants.length > 0 && (
              <ul style={{ margin: "0 0 12px 18px" }}>
                {tenants.map((t, i) => <li key={i}>{t.name || "(no name)"} — {t.contact?.phone || ""} {t.contact?.email || ""}</li>)}
              </ul>
            )}
            {showTenantModal && (
              <TenantModal
                isOpen={true}
                tenant={{ name: "", age: "", occupation: "", contact: { phone: "", email: "" } }}
                onClose={() => setShowTenantModal(false)}
                onSave={(t) => { setTenants(prev => [...prev, t]); setShowTenantModal(false); }}
                title="Add Tenant"
              />
            )}
          </div>
        )}
        {step === STEPS.OCCUPANTS && (
          <div>
            <div style={{ marginBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3>Occupants (optional)</h3>
              <button className={buttonStyles.primaryButton} onClick={() => setShowOccupantModal(true)}>+ Add Occupant</button>
            </div>
            {!!occupants.length && (
              <ul style={{ margin: "0 0 12px 18px" }}>
                {occupants.map((o, i) => <li key={i}>{o.name || "(no name)"} — {o.contact?.phone || ""} {o.contact?.email || ""}</li>)}
              </ul>
            )}
            {showOccupantModal && (
              <OccupantModal
                isOpen={true}
                occupant={{ name: "", age: "", occupation: "", relationship: "", contact: { phone: "", email: "" } }}
                onClose={() => setShowOccupantModal(false)}
                onSave={(o) => { setOccupants(prev => [...prev, o]); setShowOccupantModal(false); }}
                title="Add Occupant"
              />
            )}
          </div>
        )}
        {step === STEPS.PETS && (
          <div>
            <div style={{ marginBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3>Pets (optional)</h3>
              <button className={buttonStyles.primaryButton} onClick={() => setShowPetModal(true)}>+ Add Pet</button>
            </div>
            {!!pets.length && (
              <ul style={{ margin: "0 0 12px 18px" }}>
                {pets.map((p, i) => <li key={i}>{p.name || "(no name)"} — {p.type || ""}</li>)}
              </ul>
            )}
            {showPetModal && (
              <PetModal
                isOpen={true}
                pet={{ name: "", type: "", size: "", license: "" }}
                onClose={() => setShowPetModal(false)}
                onSave={(p) => { setPets(prev => [...prev, p]); setShowPetModal(false); }}
                title="Add Pet"
              />
            )}
          </div>
        )}
        {step === STEPS.EMERGENCY && (
          <div>
            <div style={{ marginBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3>Emergency Contacts (optional)</h3>
              <button className={buttonStyles.primaryButton} onClick={() => setShowEmergencyModal(true)}>+ Add Contact</button>
            </div>
            {!!emergencyContacts.length && (
              <ul style={{ margin: "0 0 12px 18px" }}>
                {emergencyContacts.map((c, i) => <li key={i}>{c.name || "(no name)"} — {c.contact?.phone || ""} {c.contact?.email || ""}</li>)}
              </ul>
            )}
            {showEmergencyModal && (
              <EmergencyContactModal
                isOpen={true}
                emergencyContact={{ name: "", contact: { phone: "", email: "" } }}
                onClose={() => setShowEmergencyModal(false)}
                onSave={(c) => { setEmergencyContacts(prev => [...prev, c]); setShowEmergencyModal(false); }}
                title="Add Emergency Contact"
              />
            )}
          </div>
        )}
        {step === STEPS.REVIEW && (
          <div>
            <h3>Review & Create</h3>
            <ul style={{ marginLeft: 18 }}>
              <li><strong>Address:</strong> {propertyData.address}, {propertyData.city}, {propertyData.state} {propertyData.zip}</li>
              <li><strong>Lease file:</strong> {leaseFile?.name || "none"}</li>
              <li><strong>Financial:</strong> {financialConfig ? "configured" : "missing"}</li>
              <li><strong>Tenants:</strong> {tenants.length}</li>
              <li><strong>Occupants:</strong> {occupants.length}</li>
              <li><strong>Pets:</strong> {pets.length}</li>
              <li><strong>Emergency Contacts:</strong> {emergencyContacts.length}</li>
            </ul>
          </div>
        )}
      </div>
      {/* FOOTER – HIDE while on DETAILS to avoid duplicate buttons */}
      {step !== STEPS.DETAILS && (
      <div className={styles.modalButtons}>
        {step !== STEPS.DETAILS && (
          <button className={buttonStyles.primaryButton} onClick={prev}>
            Back
          </button>
        )}
        {step < STEPS.REVIEW && (
          <button
            className={buttonStyles.primaryButton}
            onClick={goNext}
            disabled={enterDisabled}
          >
            Next
          </button>
        )}
        {step === STEPS.REVIEW && (
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
      )}
    </ModalRoot>
  );
}