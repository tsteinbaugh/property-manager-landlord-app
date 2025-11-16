import { useState, useEffect, useRef } from "react";
import styles from "../features/ui/modal/modal.module.css";
import FormModal from "../features/ui/modal/FormModal.jsx";
import FloatingField from "./ui/FloatingField.jsx";

const FORM_ID = "pet-form";

export default function PetModal({ isOpen, pet, onClose, onSave, title = "Edit Pet" }) {
  const [formData, setFormData] = useState({ name: "", type: "", size: "", license: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!pet) { setFormData({ name: "", type: "", size: "", license: "" }); return; }
    setFormData({ name: String(pet.name || ""), type: String(pet.type || "").toLowerCase(), size: String(pet.size || ""), license: String(pet.license || "") });
  }, [pet]);

  function handleChange(e) {
    const { name, value } = e.target; setFormData((p) => ({ ...p, [name]: String(value ?? "") }));
  }

  const isFormValid = formData.name.trim() !== "" && formData.type.trim() !== "";

  async function handleSubmit() {
    setSubmitted(true);
    if (!focusFirstInvalid(formRef.current)) return;
    onSave?.({ name: formData.name.trim(), type: formData.type.trim(), size: formData.size.trim(), license: formData.license.trim() });
  }

  const isDog = formData.type === "dog";
  
  function focusFirstInvalid(formEl) {
    if (!formEl) return false;
    // This triggers built-in messages and returns false if any are invalid
    const ok = formEl.reportValidity();
    if (ok) return true;
    const firstInvalid = formEl.querySelector(":invalid");
    if (firstInvalid) {
      firstInvalid.focus({ preventScroll: false });
      firstInvalid.scrollIntoView({ block: "center", behavior: "smooth" });
    }
    return false;
  }

  const formRef = useRef(null);
  return (
    <FormModal isOpen={!!isOpen} onClose={onClose} title={title} size="sm" submitLabel="Save" cancelLabel="Cancel" onSubmit={handleSubmit} disabled={!isFormValid} formId={FORM_ID}>
      <form
        id={FORM_ID}
        ref={formRef}
        onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const tag = e.target.tagName;
            const type = (e.target.type || "").toLowerCase();
            const isButtonLike = tag === "BUTTON" || (tag === "INPUT" && (type === "submit" || type === "button"));
            if (tag !== "TEXTAREA" && !isButtonLike) {
              e.preventDefault();
              handleSubmit();
            }
          }
        }}
        className={styles.form}
      >
        <button type="submit" style={{ display: "none" }} aria-hidden="true" />

        <div className={styles.fieldWrap}>
          <FloatingField name="name" label="Name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className={styles.fieldWrap}>
          <FloatingField as="select" name="type" label="Type" value={formData.type} onChange={handleChange} required options={[{ value: "dog", label: "Dog" }, { value: "cat", label: "Cat" }, { value: "other", label: "Other" }]} />
        </div>
        <div className={styles.fieldWrap}>
          {isDog ? (
            <FloatingField as="select" name="size" label="Size" value={formData.size} onChange={handleChange} options={[{ value: "small", label: "Small" }, { value: "medium", label: "Medium" }, { value: "large", label: "Large" }]} />
          ) : (
            <FloatingField name="size" label="Size (e.g., small / 12 lb)" value={formData.size} onChange={handleChange} />
          )}
        </div>
        <div className={styles.fieldWrap}>
          <FloatingField name="license" label="License #" value={formData.license} onChange={handleChange} />
        </div>
        {submitted && !isFormValid && (<p className={styles.validationText}>Please fill in name and type of pet.</p>)}
      </form>
    </FormModal>
  );
}