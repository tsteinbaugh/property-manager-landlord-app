import EntityModal from "../../ui/EntityModal.jsx";

const schema = [
  { key: "name", label: "Name" },
  { key: "age", label: "Age", type: "number", step: "1" },
  { key: "occupation", label: "Occupation" },
  { key: "contact.phone", label: "Phone", type: "tel" },
  { key: "contact.email", label: "Email", type: "email" },
];

export default function TenantModal({ isOpen, tenant, onClose, onSave, title = "Tenant" }) {
  const initial = tenant ?? { name: "", age: "", occupation: "", contact: { phone: "", email: "" } };
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
