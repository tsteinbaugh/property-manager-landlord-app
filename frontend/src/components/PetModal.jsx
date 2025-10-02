// src/components/PetModal.jsx
import { useState, useEffect } from "react";
import styles from "../styles/SharedModal.module.css";
import buttonStyles from "../styles/Buttons.module.css";
import FloatingField from "./ui/FloatingField";
import ModalRoot from "./ui/ModalRoot";

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
      type: pet.type || "",
      size: pet.size || "",
      license: pet.license || "",
    });
  }, [pet]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  const isFormValid = (formData.name || "").trim() !== "" && (formData.type || "").trim() !== "";

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
        <FloatingField name="name" label="Name" value={formData.name} onChange={handleChange} required />
        <FloatingField name="type" label="Type of pet (dog, cat…)" value={formData.type} onChange={handleChange} required />
        <FloatingField name="size" label="Size (small/medium/large or weight)" value={formData.size} onChange={handleChange} />
        <FloatingField name="license" label="License #" value={formData.license} onChange={handleChange} />

        {submitted && !isFormValid && (
          <p className={styles.validationText}>Please fill in name and type of pet.</p>
        )}

        <div className={styles.modalButtons}>
          <button type="submit" className={buttonStyles.primaryButton}>Save</button>
          <button type="button" onClick={onClose} className={buttonStyles.secondaryButton}>Cancel</button>
        </div>
      </form>
    </ModalRoot>
  );
}
