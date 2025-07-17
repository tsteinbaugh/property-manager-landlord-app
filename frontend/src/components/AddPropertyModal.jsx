import { useState } from 'react';

export default function AddPropertyModal({ onSave, onCancel }) {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [squareFeet, setSquareFeet] = useState('');

  const handleSubmit = () => {
    if (!address || !city || !state || !zip || !bedrooms || !bathrooms || !squareFeet) {
      alert('Please fill in all required fields.');
      return;
    }

const newProperty = {
      id: Date.now().toString(),
      address,
      city,
      state,
      zip,
      bedrooms,
      bathrooms,
      squareFeet,
    };

    onSave(newProperty);
  };


return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4">Add Property</h2>

        <input
          type="text"
          placeholder="Street Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border p-2 w-full mb-2"
        />

        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2 w-full mb-2"
        />

        <input
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="border p-2 w-full mb-2"
        />

        <input
          type="number"
          placeholder="Zip"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          className="border p-2 w-full mb-2"
        />

        <input
          type="number"
          placeholder="Bedrooms"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          className="border p-2 w-full mb-2"
        />

        <input
          type="number"
          placeholder="Bathrooms"
          value={bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
          className="border p-2 w-full mb-2"
        />

        <input
          type="number"
          placeholder="Square Feet"
          value={squareFeet}
          onChange={(e) => setSquareFeet(e.target.value)}
          className="border p-2 w-full mb-4"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
