import EntityModal from "../../ui/EntityModal.jsx";

const schema = [
  { key: "name", label: "Name" },
  { key: "type", label: "Type" },
  { key: "size", label: "Size", type: "select", options: [
    { label: "Small", value: "small" },
    { label: "Medium", value: "medium" },
    { label: "Large", value: "large" },
  ]},
  { key: "license", label: "License #" },
];

export default function PetModal({ isOpen, pet, onClose, onSave, title = "Pet" }) {
  const initial = pet ?? { name: "", type: "", size: "", license: "" };
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
