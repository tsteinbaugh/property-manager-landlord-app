import FormModal from "../features/ui/modal/FormModal.jsx";
import PropertyForm from "./PropertyForm.jsx";

export default function PropertyModal({
  isOpen,
  initialData,
  onClose,
  onSave,
  title = "Edit Property",
}) {
  // Single source of truth for the form id; no imports needed.
  const FORM_ID = "property-form";

  return (
    <FormModal
      isOpen={!!isOpen}
      onClose={onClose}
      title={title}
      size="md"
      submitLabel="Save"
      cancelLabel="Cancel"
      formId={FORM_ID}        // makes the footer button submit the form
      onSubmit={() => { /* safety: handled by form submit */ }}
    >
      <PropertyForm
        initialData={initialData}
        onSave={onSave}
        onCancel={onClose}
        submitLabel="Save"
        formId={FORM_ID}
      />
    </FormModal>
  );
}
