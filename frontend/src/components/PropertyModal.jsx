// frontend/src/components/PropertyModal.jsx
import { useMemo, useRef, useState, useEffect } from "react";
import FormModal from "../features/ui/modal/FormModal.jsx";
import styles from "../features/ui/modal/modal.module.css";
import PropertyForm, { PROPERTY_FORM_ID } from "./PropertyForm.jsx";

export default function PropertyModal({
  isOpen,
  initialData,
  onClose,
  onSave,
  title = "Edit Property",
}) {
  const [data, setData] = useState(initialData || {});
  useEffect(() => { setData(initialData || {}); }, [initialData]);

  const requiredFields = useMemo(
    () => ["address", "city", "state", "zip", "owner"],
    []
  );

  const isValid = useMemo(
    () => requiredFields.every((k) => String(data?.[k] ?? "").trim() !== ""),
    [data, requiredFields]
  );

  async function handleSubmit() {
    if (!isValid) {
      // Focus the first invalid required field
      const form = document.getElementById(PROPERTY_FORM_ID);
      const first = form?.querySelector(
        'input[required]:invalid, select[required]:invalid, textarea[required]:invalid'
      );
      if (first) {
        first.focus({ preventScroll: false });
        first.scrollIntoView({ block: "center", behavior: "smooth" });
      }
      return;
    }
    onSave?.(data);
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
      formId={PROPERTY_FORM_ID}
    >
      <PropertyForm
        initialData={data}
        onChange={setData}
        requiredFields={requiredFields}
      />
    </FormModal>
  );
}
