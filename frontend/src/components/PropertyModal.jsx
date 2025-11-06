// frontend/src/components/PropertyModal.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import FormModal from "../features/ui/modal/FormModal.jsx";
import styles from "./PropertyModal.module.css"; // keep existing review styles if you use them elsewhere
import PropertyFormFields from "./PropertyFormFields.jsx";

const FORM_ID = "property-edit-form";
const REQUIRED = ["address","city","state","zip","owner"];

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

export default function PropertyModal({
  isOpen,
  initialData,
  onClose,
  onSave,
  title = "Edit Property",
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
  });

  const formRef = useRef(null);

  useEffect(() => {
    setFormData((cur) => ({ ...cur, ...(initialData || {}) }));
  }, [initialData]);

  const isValid = useMemo(
    () => REQUIRED.every((k) => String(formData[k] ?? "").trim() !== ""),
    [formData],
  );

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit() {
    if (!focusFirstInvalid(formRef.current)) return;
    onSave?.(formData);
  }

  return (
    <FormModal
      isOpen={!!isOpen}
      onClose={onClose}
      title={title}
      size="md"
      submitLabel="Save"
      cancelLabel="Cancel"
      onSubmit={handleSubmit}
      disabled={!isValid}
      formId={FORM_ID}
    >
      <form
        id={FORM_ID}
        ref={formRef}
        onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}
        className={styles.modalBodyEven /* just reusing your even body padding */}
      >
        <PropertyFormFields
          formData={formData}
          onChange={handleChange}
          requiredFields={REQUIRED}
        />
      </form>
    </FormModal>
  );
}
