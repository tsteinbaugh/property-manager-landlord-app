// frontend/src/components/PetModal.jsx
import { useState, useEffect } from "react";

import buttonStyles from "../styles/Buttons.module.css";
import styles from "../styles/SharedModal.module.css";
import ModalRoot from "./ui/ModalRoot.jsx";
import FloatingField from "./ui/FloatingField.jsx";
import FloatingSelect from "./ui/FloatingSelect.jsx"

export default function PetModal({ isOpen, pet, onClose, onSave, title = "Edit Pet" }) {
  const [formData, setFormData] = useState({ name: "", type: "", size: "", license: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!pet) {
      setFormData({ name: "", type: "", size: "", license: "" });
      return;
    }
    setFormData({
      name: pet.name || "",
      type: (pet.type || "").toLowerCase(),
      size: pet.size || "",
      license: pet.license || "",
    });
  }, [pet]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const isFormValid =
    (formData.name || "").trim() !== "" && (formData.type || "").trim() !== "";

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (!isFormValid) return;
    onSave?.(formData);
  }

  const isDog = formData.type === "dog";

  return (
    <ModalRoot isOpen={!!isOpen} onClose={onClose} width={560}>
      <h2 className={styles.modalTitle}>{title}</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Name */}
        <div className={styles.fieldWrap}>
          <FloatingField
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Type (dropdown) */}
        <div className={styles.fieldWrap}>
          <FloatingField
            as="select"
            name="type"
            label="Type"
            value={formData.type}
            onChange={handleChange}
            // render initial blank so label acts as placeholder (no overlap)
            options={[
              { value: "dog", label: "Dog" },
              { value: "cat", label: "Cat" },
              { value: "other", label: "Other" },
            ]}
          />
        </div>
          
        {/* Size: Dog → dropdown; Cat/Other → text */}
        <div className={styles.fieldWrap}>
          {formData.type === "dog" ? (
            <FloatingField
              as="select"
              name="size"
              label="Size"
              value={formData.size}
              onChange={handleChange}
              options={[
                { value: "small", label: "Small" },
                { value: "medium", label: "Medium" },
                { value: "large", label: "Large" },
              ]}
            />
          ) : (
            <FloatingField
              name="size"
              label="Size (e.g., small / 12 lb)"
              value={formData.size}
              onChange={handleChange}
            />
          )}
        </div>

        {/* License */}
        <div className={styles.fieldWrap}>
          <FloatingField
            name="license"
            label="License #"
            value={formData.license}
            onChange={handleChange}
          />
        </div>

        {submitted && !isFormValid && (
          <p className={styles.validationText}>
            Please fill in name and type of pet.
          </p>
        )}

        <div className={styles.modalButtons}>
          <button type="submit" className={buttonStyles.primaryButton}>
            Save
          </button>
          <button
            type="button"
            onClick={onClose}
            className={buttonStyles.secondaryButton}
          >
            Cancel
          </button>
        </div>
      </form>
    </ModalRoot>
  );
}
