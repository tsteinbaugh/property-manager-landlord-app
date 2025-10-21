// property-manager-landlord-app/frontend/src/components/PropertyModalWrapper.jsx
import { useState, useMemo } from "react";

import styles from "./PropertyModal.module.css";
import buttonStyles from "../styles/Buttons.module.css";

export default function PropertyModalWrapper({
  initialData,
  onSave, // continues the wizard to LEASE
  onQuickCreate, // creates property with details only
  onCancel,
  renderBelowSubmit, // NEW: pass-through to position "Back to Review & Create" aligned
}) {
  const [form, setForm] = useState(initialData || {});
  const requiredFields = useMemo(() => ["address", "city", "state", "zip", "owner"], []);

  function isValidDetails(d) {
    if (!d) return false;
    return requiredFields.every((k) => String(d[k] ?? "").trim().length > 0);
  }

  function handleQuickCreate() {
    if (!isValidDetails(form)) {
      alert(
        "Please fill in Address, City, State, Zip, and Owner before creating the property.",
      );
      return;
    }
    onQuickCreate?.(form);
  }

  return (
    <div className={styles.modalBodyEven}>
      <h3 className={styles.modalTitle}>Property Details</h3>

      <PropertyForm
        initialData={form}
        onChange={setForm}
        onSave={(data) => {
          setForm(data);
          onSave?.(data); // → step → LEASE
        }}
        onCancel={onCancel}
        requiredFields={requiredFields}
        submitLabel="Save & Continue"
        renderAboveSubmit={() => (
          <button
            type="button"
            className={buttonStyles.primaryButton}
            style={{ minWidth: 180 }}
            onClick={handleQuickCreate}
          >
            Save & Create
          </button>
        )}
        renderBelowSubmit={renderBelowSubmit}
      />
    </div>
  );
}
