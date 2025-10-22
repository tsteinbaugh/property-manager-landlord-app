import EntityModal from "../../ui/EntityModal.jsx";

const schema = [
  { key: "name", label: "Name" },
  { key: "contact.phone", label: "Phone", type: "tel" },
  { key: "contact.email", label: "Email", type: "email" },
];

export default function EmergencyContactModal({
  isOpen,
  emergencyContact,
  onClose,
  onSave,
  title = "Emergency Contact",
}) {
  const initial = emergencyContact ?? { name: "", contact: { phone: "", email: "" } };
  return (
    <EntityModal
      isOpen={isOpen}
      title={title}
      entity={initial}
      onClose={onClose}
      onSave={onSave}
      schema={schema}
    />
  );
}
