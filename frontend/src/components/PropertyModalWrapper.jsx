// property-manager-landlord-app/frontend/src/components/PropertyModalWrapper.jsx
import { useState } from "react";
import styles from "./PropertyModal.module.css";
import PropertyForm from "./PropertyForm";

export default function PropertyModalWrapper({ initialData, onSave, onCancel }) {
  const [form, setForm] = useState(initialData || {});

  return (
    <div className={styles.modalBody}>
      <h3 className={styles.modalTitle}>Property Details</h3>
      <PropertyForm
        initialData={form}
        onSave={(data) => {
          setForm(data);
          onSave?.(data); // AddPropertyFlow will set state and step→LEASE
        }}
        onCancel={onCancel}
        requiredFields={["address", "city", "state", "zip"]}
        submitLabel="Save & Continue"
      />
    </div>
  );
}
