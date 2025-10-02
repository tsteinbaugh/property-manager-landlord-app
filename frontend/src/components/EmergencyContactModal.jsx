// src/components/EmergencyContactModal.jsx
import { useState, useEffect } from "react";
import styles from "../styles/SharedModal.module.css";
import buttonStyles from "../styles/Buttons.module.css";
import FloatingField from "./ui/FloatingField";
import ModalRoot from "./ui/ModalRoot";

export default function EmergencyContactModal({ isOpen, emergencyContact, onClose, onSave, title = "Edit Emergency Contact" }) {
  const [formData, setFormData] = useState({ name: "", contact: { phone: "", email: "" } });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!emergencyContact) {
      setFormData({ name: "", contact: { phone: "", email: "" } });
      return;
    }
    setFormData({
      name: emergencyContact.name || "",
      contact: {
        phone: emergencyContact?.contact?.phone || "",
        email: emergencyContact?.contact?.email || "",
      },
    });
  }, [emergencyContact]);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "phone" || name === "email") {
      setFormData(prev => ({ ...prev, contact: { ...(prev.contact || {}), [name]: value } }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  }

  const isFormValid = (formData.name || "").trim() !== "" && (formData.contact.phone || "").trim() !== "";

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
        <FloatingField name="phone" label="Phone" value={formData.contact?.phone || ""} onChange={handleChange} required />
        <FloatingField name="email" type="email" label="Email" value={formData.contact?.email || ""} onChange={handleChange} />

        {submitted && !isFormValid && (
          <p className={styles.validationText}>Please enter name and phone number.</p>
        )}

        <div className={styles.modalButtons}>
          <button type="submit" className={buttonStyles.primaryButton}>Save</button>
          <button type="button" onClick={onClose} className={buttonStyles.secondaryButton}>Cancel</button>
        </div>
      </form>
    </ModalRoot>
  );
}
