// frontend/src/components/PropertyForm.jsx
import { useState, useRef } from "react";
import styles from "../features/ui/modal/modal.module.css";
import FloatingField from "./ui/FloatingField";

/**
 * Props:
 * - initialData
 * - onSave(data)        // called when form is valid & submitted
 * - onCancel()          // (not used here; footer is in FormModal)
 * - onChange(data)
 * - requiredFields
 * - submitLabel         // (ignored here; footer is in FormModal)
 */
export default function PropertyForm({
  onSave,
  onChange,
  initialData = {},
  requiredFields = ["address", "city", "state", "zip", "owner"],
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

  const formRef = useRef(null);

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

  function handleSubmit(e) {
    e.preventDefault();
    if (!focusFirstInvalid(formRef.current)) return;
    if (!isFormValid) return;
    onSave?.(formData);
  }

  return (
    <form
      id="property-form"                 // <-- critical: matches FormModal formId
      ref={formRef}
      onSubmit={handleSubmit}
      className={styles.form}
      noValidate
    >
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

      {/* Validation hint (optional; footer button state lives in FormModal) */}
      {!isFormValid && (
        <p className={styles.validationText} aria-live="polite">
          Please fill the required fields (marked *).
        </p>
      )}
    </form>
  );
}
