// property-manager-landlord-app/frontend/src/components/PropertyForm.jsx
import { useState, useEffect } from "react";
import styles from "../styles/SharedModal.module.css";
import buttonStyles from "../styles/Buttons.module.css";
import FloatingField from "./ui/FloatingField";

/**
 * Props:
 * - initialData: seed values
 * - onSave(data): called when valid
 * - onCancel(): cancel
 * - requiredFields: array of keys that must be non-empty (default address/city/state/zip/owner)
 * - submitLabel: button label (default "Save & Continue")
 */
export default function PropertyForm({
  onSave,
  onCancel,
  initialData = {},
  requiredFields = ["address", "city", "state", "zip", "owner"],
  submitLabel = "Save & Continue",
}) {
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    state: "",
    zip: "",
    owner: "",
    bedrooms: "",
    bathrooms: "",
    squareFeet: "",
    ...initialData,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialData && Object.keys(initialData).length) {
      setFormData(prev => ({ ...prev, ...initialData }));
    }
  }, [initialData]);

  const isFormValid = requiredFields.every(
    (k) => String(formData[k] ?? "").trim() !== ""
  );

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (!isFormValid) return;
    onSave?.(formData);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <FloatingField
        name="address"
        label="Street Address"
        value={formData.address}
        onChange={handleChange}
        required
      />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 120px 120px", gap: 8 }}>
        <FloatingField
          name="city"
          label="City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <FloatingField
          name="state"
          label="State"
          value={formData.state}
          onChange={handleChange}
          required
        />
        <FloatingField
          name="zip"
          label="Zip"
          value={formData.zip}
          onChange={handleChange}
          required
        />
      </div>

      <FloatingField
        name="owner"
        label="Property Owner"
        value={formData.owner}
        onChange={handleChange}
        required
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
        <FloatingField
          name="bedrooms"
          type="number"
          min="0"
          label="Bedrooms"
          value={formData.bedrooms}
          onChange={handleChange}
        />
        <FloatingField
          name="bathrooms"
          type="number"
          min="0"
          step="0.5"
          label="Bathrooms"
          value={formData.bathrooms}
          onChange={handleChange}
        />
        <FloatingField
          name="squareFeet"
          type="number"
          min="0"
          label="Square Feet"
          value={formData.squareFeet}
          onChange={handleChange}
        />
      </div>

      {submitted && !isFormValid && (
        <p className={styles.validationText}>
          Please fill the required fields (marked *).
        </p>
      )}

      <div className={styles.modalButtons}>
        <button type="submit" className={buttonStyles.primaryButton}>
          {submitLabel}
        </button>
        <button type="button" onClick={onCancel} className={buttonStyles.secondaryButton}>
          Cancel
        </button>
      </div>
    </form>
  );
}
