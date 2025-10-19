import { useState, useEffect } from "react";
import styles from "../styles/SharedModal.module.css";
import buttonStyles from "../styles/Buttons.module.css";
import FloatingField from "./ui/FloatingField";
import ModalRoot from "./ui/ModalRoot";

export default function OccupantModal({
  isOpen,
  occupant,
  onClose,
  onSave,
  title = "Edit Occupant",
}) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    occupation: "",
    relationship: "",
    contact: { phone: "", email: "" },
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!occupant) {
      setFormData({
        name: "",
        age: "",
        occupation: "",
        relationship: "",
        contact: { phone: "", email: "" },
      });
      return;
    }
    setFormData({
      name: occupant.name || "",
      age: occupant.age || "",
      occupation: occupant.occupation || "",
      relationship: occupant.relationship || "",
      contact: {
        phone: occupant?.contact?.phone || "",
        email: occupant?.contact?.email || "",
      },
    });
  }, [occupant]);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "phone" || name === "email") {
      setFormData((prev) => ({
        ...prev,
        contact: { ...(prev.contact || {}), [name]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }

  const isFormValid = (formData.name || "").trim() !== "";

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (!isFormValid) return;
    onSave?.(formData);
  }

  return (
    <ModalRoot isOpen={!!isOpen} onClose={onClose} width={560}>
      <h2 className={styles.modalTitle}>{title}</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.fieldWrap}>
          <FloatingField
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.fieldWrap}>
          <FloatingField
            name="age"
            label="Age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div className={styles.fieldWrap}>
          <FloatingField
            name="occupation"
            label="Occupation"
            value={formData.occupation}
            onChange={handleChange}
          />
        </div>
        <div className={styles.fieldWrap}>
          <FloatingField
            name="relationship"
            label="Relationship"
            value={formData.relationship}
            onChange={handleChange}
          />
        </div>
        <div className={styles.fieldWrap}>
          <FloatingField
            name="phone"
            label="Phone"
            value={formData.contact?.phone || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles.fieldWrap}>
          <FloatingField
            name="email"
            type="email"
            label="Email"
            value={formData.contact?.email || ""}
            onChange={handleChange}
          />
        </div>

        {submitted && !isFormValid && (
          <p className={styles.validationText}>Please enter the occupant's name.</p>
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
