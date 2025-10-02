import ModalRoot from "./ui/ModalRoot";
import PropertyForm from "./PropertyForm";

export default function PropertyModal({ isOpen, initialData, onClose, onSave, title = "Edit Property" }) {
  return (
    <ModalRoot isOpen={isOpen} onClose={onClose} width={560}>
      <h2 className="modalTitle">{title}</h2>
      <PropertyForm
        initialData={initialData}
        onSave={(data) => onSave?.(data)}
        onCancel={onClose}
        submitLabel="Save"
      />
    </ModalRoot>
  );
}
