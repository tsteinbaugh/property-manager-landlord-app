// frontend/src/components/EmergencyContactModal.jsx
import { useState, useEffect, useRef } from "react";
import styles from "../styles/SharedModal.module.css";
import FormModal from "../features/ui/modal/FormModal.jsx";
import FloatingField from "./ui/FloatingField.jsx";

const FORM_ID = "emergency-contact-form";

export default function EmergencyContactModal({
  isOpen,
  emergencyContact,
  onClose,
  onSave,
  title = "Edit Emergency Contact",
}) {
  const [formData, setFormData] = useState({
    name: "",
    contact: { phone: "", email: "" },
  });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (!emergencyContact) {
      setFormData({ name: "", contact: { phone: "", email: "" } });
      return;
    }
    setFormData({
      name: String(emergencyContact.name || ""),
      contact: {
        phone: String(emergencyContact?.contact?.phone || ""),
        email: String(emergencyContact?.contact?.email || ""),
      },
    });
  }, [emergencyContact]);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "phone" || name === "email") {
      setFormData((prev) => ({
        ...prev,
        contact: { ...(prev.contact || {}), [name]: String(value ?? "") },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: String(value ?? "") }));
    }
  }

  const isFormValid =
    formData.name.trim() !== "" && (formData.contact?.phone || "").trim() !== "";

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

  async function handleSubmit() {
    setSubmitted(true);
    if (!focusFirstInvalid(formRef.current)) return;
    onSave?.({
      name: formData.name.trim(),
      contact: {
        phone: (formData.contact?.phone || "").trim(),
        email: (formData.contact?.email || "").trim(),
      },
    });
  }

  return (
    <FormModal
      isOpen={!!isOpen}
      onClose={onClose}
      title={title}
      size="sm"
      submitLabel="Save"
      cancelLabel="Cancel"
      onSubmit={handleSubmit}
      disabled={!isFormValid}
      formId={FORM_ID}
    >
      <form
        id={FORM_ID}
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const tag = e.target.tagName;
            const type = (e.target.type || "").toLowerCase();
            const isButtonLike =
              tag === "BUTTON" ||
              (tag === "INPUT" && (type === "submit" || type === "button"));
            if (tag !== "TEXTAREA" && !isButtonLike) {
              e.preventDefault();
              handleSubmit();
            }
          }
        }}
        className={styles.form}
      >
        {/* Hidden submit so Enter always has an in-form target */}
        <button type="submit" style={{ display: "none" }} aria-hidden="true" />

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
            name="phone"
            label="Phone"
            value={formData.contact?.phone || ""}
            onChange={handleChange}
            required
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
          <p className={styles.validationText}>
            Please enter name and phone number.
          </p>
        )}
      </form>
    </FormModal>
  );
}
