import EntityModal from "../../ui/EntityModal.jsx";

const schema = [
  { key: "name", label: "Name" },
  { key: "age", label: "Age", type: "number", step: "1" },
  { key: "occupation", label: "Occupation" },
  { key: "relationship", label: "Relationship" },
  { key: "contact.phone", label: "Phone", type: "tel" },
  { key: "contact.email", label: "Email", type: "email" },
];

export default function OccupantModal({ isOpen, occupant, onClose, onSave, title = "Occupant" }) {
  const initial = occupant ?? {
    name: "",
    age: "",
    occupation: "",
    relationship: "",
    contact: { phone: "", email: "" },
  };
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
