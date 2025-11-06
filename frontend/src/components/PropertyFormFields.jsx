// frontend/src/components/PropertyFormFields.jsx
import styles from "../styles/SharedModal.module.css";
import FloatingField from "./ui/FloatingField.jsx";

/**
 * Controlled field list for Property forms (no buttons here).
 * Props:
 *   formData, onChange(e), requiredFields (array)
 */
export default function PropertyFormFields({ formData, onChange, requiredFields = ["address","city","state","zip","owner"] }) {
  return (
    <>
      <div className={styles.fieldWrap}>
        <FloatingField
          name="address"
          label="Street Address"
          value={formData.address || ""}
          onChange={onChange}
          required={requiredFields.includes("address")}
        />
      </div>

      <div className={styles.gridTernaryTight}>
        <div className={styles.fieldWrap}>
          <FloatingField
            name="city"
            label="City"
            value={formData.city || ""}
            onChange={onChange}
            required={requiredFields.includes("city")}
          />
        </div>
        <div className={styles.fieldWrap}>
          <FloatingField
            name="state"
            label="State"
            value={formData.state || ""}
            onChange={onChange}
            required={requiredFields.includes("state")}
          />
        </div>
        <div className={styles.fieldWrap}>
          <FloatingField
            name="zip"
            label="Zip"
            value={formData.zip || ""}
            onChange={onChange}
            required={requiredFields.includes("zip")}
          />
        </div>
      </div>

      <div className={styles.fieldWrap}>
        <FloatingField
          name="owner"
          label="Property Owner"
          value={formData.owner || ""}
          onChange={onChange}
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
            value={formData.bedrooms || ""}
            onChange={onChange}
          />
        </div>
        <div className={styles.fieldWrap}>
          <FloatingField
            name="bathrooms"
            type="number"
            min="0"
            step="0.5"
            label="Bathrooms"
            value={formData.bathrooms || ""}
            onChange={onChange}
          />
        </div>
        <div className={styles.fieldWrap}>
          <FloatingField
            name="squareFeet"
            type="number"
            min="0"
            label="Square Feet"
            value={formData.squareFeet || ""}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
}
