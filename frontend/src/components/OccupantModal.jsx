import { useState, useEffect } from "react";
import styles from "../styles/SharedModal.module.css";
import FormModal from "../features/ui/modal/FormModal.jsx";
import FloatingField from "./ui/FloatingField.jsx";

const FORM_ID = "occupant-form";

export default function OccupantModal({ isOpen, occupant, onClose, onSave, title = "Edit Occupant" }) {
  const [formData, setFormData] = useState({ name: "", age: "", occupation: "", relationship: "", contact: { phone: "", email: "" } });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!occupant) { setFormData({ name: "", age: "", occupation: "", relationship: "", contact: { phone: "", email: "" } }); return; }
    setFormData({ name: String(occupant.name || ""), age: String(occupant.age || ""), occupation: String(occupant.occupation || ""), relationship: String(occupant.relationship || ""), contact: { phone: String(occupant?.contact?.phone || ""), email: String(occupant?.contact?.email || "") } });
  }, [occupant]);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "phone" || name === "email") setFormData((prev) => ({ ...prev, contact: { ...(prev.contact || {}), [name]: String(value ?? "") } }));
    else setFormData((prev) => ({ ...prev, [name]: String(value ?? "") }));
  }

  const isFormValid = formData.name.trim() !== "";

  async function handleSubmit() {
    setSubmitted(true);
    if (!isFormValid) return;
    onSave?.({ name: formData.name.trim(), age: formData.age.trim(), occupation: formData.occupation.trim(), relationship: formData.relationship.trim(), contact: { phone: (formData.contact?.phone || "").trim(), email: (formData.contact?.email || "").trim() } });
  }

  return (
    <FormModal isOpen={!!isOpen} onClose={onClose} title={title} size="sm" submitLabel="Save" cancelLabel="Cancel" onSubmit={handleSubmit} disabled={!isFormValid} formId={FORM_ID}>
      <form id={FORM_ID} onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className={styles.form}>
        <div className={styles.fieldWrap}><FloatingField name="name" label="Name" value={formData.name} onChange={handleChange} required /></div>
        <div className={styles.fieldWrap}><FloatingField name="age" label="Age" value={formData.age} onChange={handleChange} /></div>
        <div className={styles.fieldWrap}><FloatingField name="occupation" label="Occupation" value={formData.occupation} onChange={handleChange} /></div>
        <div className={styles.fieldWrap}><FloatingField name="relationship" label="Relationship" value={formData.relationship} onChange={handleChange} /></div>
        <div className={styles.fieldWrap}><FloatingField name="phone" label="Phone" value={formData.contact?.phone || ""} onChange={handleChange} /></div>
        <div className={styles.fieldWrap}><FloatingField name="email" type="email" label="Email" value={formData.contact?.email || ""} onChange={handleChange} /></div>
        {submitted && !isFormValid && (<p className={styles.validationText}>Please enter the occupant&apos;s name.</p>)}
      </form>
    </FormModal>
  );
}