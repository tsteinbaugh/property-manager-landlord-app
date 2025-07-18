import PropertyForm from './PropertyForm';

export default function AddPropertyModal({ onSave, onCancel }) {
  const handleSave = (data) => {
    const newProperty = {
      id: Date.now().toString(),
      ...data
    };

    onSave(newProperty);
  };


return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4">Add Property</h2>
        <PropertyForm onSave={handleSave} onCancel={onCancel} />
      </div>
    </div>
  );
}
