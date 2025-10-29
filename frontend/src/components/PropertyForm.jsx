import { useState } from "react";

import buttonStyles from "../styles/Buttons.module.css";
import styles from "../styles/SharedModal.module.css";
import FloatingField from "./ui/FloatingField";

/**
 * Props:
 * - initialData
 * - onSave(data)
 * - onCancel()
 * - onChange(data)
 * - requiredFields
 * - submitLabel
 * - onQuickCreate(formData)
 * - quickCreateLabel
 * - buttonMinWidth
 */
export default function PropertyForm({
  onSave,
  onCancel,
  onChange,
  initialData = {},
  requiredFields = ["address", "city", "state", "zip", "owner"],
  submitLabel = "Save & Continue",
  onQuickCreate,
  quickCreateLabel = "Save & Create",
  buttonMinWidth = 180,
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

  const isFormValid = requiredFields.every(
    (k) => String(formData[k] ?? "").trim() !== "",
  );

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => {
      const next = { ...prev, [name]: value };
      onChange?.(next);
      return next;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (!isFormValid) return;
    onSave?.(formData);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.fieldWrap}>
        <FloatingField
          name="address"
          label="Street Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.gridTernaryTight}>
        <div className={styles.fieldWrap}>
          <FloatingField
            name="city"
            label="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.fieldWrap}>
          <FloatingField
            name="state"
            label="State"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.fieldWrap}>
          <FloatingField
            name="zip"
            label="Zip"
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className={styles.fieldWrap}>
        <FloatingField
          name="owner"
          label="Property Owner"
          value={formData.owner}
          onChange={handleChange}
          required={requiredFields.includes("owner")}
        />
      </div>

      <div className={styles.gridTernaryTight}>
        <div className={styles.fieldWrap}>
          <FloatingField
            name="bedrooms"
            type="number"
            min="0"
            label="Bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
          />
        </div>
        <div className={styles.fieldWrap}>
          <FloatingField
            name="bathrooms"
            type="number"
            min="0"
            step="0.5"
            label="Bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
          />
        </div>
        <div className={styles.fieldWrap}>
          <FloatingField
            name="squareFeet"
            type="number"
            min="0"
            label="Square Feet"
            value={formData.squareFeet}
            onChange={handleChange}
          />
        </div>
      </div>

      {submitted && !isFormValid && (
        <p className={styles.validationText} aria-live="polite">
          Please fill the required fields (marked *).
        </p>
      )}

      {/* --- FOOTER BUTTONS (FLUSH LEFT) --- */}
      {onQuickCreate ? (
        <div className={styles.modalButtonsRow}>
          <button
            type="button"
            onClick={() => onQuickCreate(formData)}
            className={buttonStyles.primaryButton}
            style={{ minWidth: buttonMinWidth }}
          >
            {quickCreateLabel}
          </button>

          <button
            type="submit"
            className={buttonStyles.primaryButton}
            style={{ minWidth: buttonMinWidth }}
          >
            {submitLabel}
          </button>

          <button
            type="button"
            onClick={onCancel}
            className={buttonStyles.secondaryButton}
            style={{ minWidth: buttonMinWidth }}
          >
            Cancel
          </button>
        </div>
      ) : (
        // Compact mode for Edit Property (no quick create)
        <div className={styles.modalButtonsRow}>
          <button
            type="submit"
            className={buttonStyles.primaryButton}
            style={{ minWidth: buttonMinWidth }}
          >
            {submitLabel}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className={buttonStyles.secondaryButton}
            style={{ minWidth: buttonMinWidth }}
          >
            Cancel
          </button>
        </div>
      )}
    </form>
  );
}
