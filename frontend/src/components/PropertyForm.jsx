import React, { useState, useEffect } from 'react';

export default function PropertyForm({ initialData = {}, onCancel, onSave }) {
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    state: '',
    zip: '',
    bedrooms: '',
    bathrooms: '',
    squareFeet: '',
    ...initialData,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.values(formData).every((val) => val !== '');
    if (!isValid) {
      alert('Please fill in all fields.');
      return;
    }
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        name="address"
        value={formData.address}
        onChange={handleChange} 
        placeholder="Street Address" 
        className="border p-2 w-full"
      />
      <input 
        name="city" 
        value={formData.city}
        onChange={handleChange}
        placeholder="City"
        className="border p-2 w-full" 
      />
      <input 
        name="state"
        value={formData.state}
        onChange={handleChange}
        placeholder="State"
        className="border p-2 w-full"
      />
      <input 
        name="zip" 
        value={formData.zip}
        onChange={handleChange} 
        placeholder="Zip" 
        className="border p-2 w-full" 
      />
      <input 
        name="bedrooms" 
        value={formData.bedrooms}
        onChange={handleChange}
        placeholder="Bedrooms"
        type="number" 
        className="border p-2 w-full"
      />
      <input
        name="bathrooms"
        value={formData.bathrooms}
        onChange={handleChange} 
        placeholder="Bathrooms"
        type="number"
        step="0.5"
        className="border p-2 w-full" 
      />
      <input
        name="squareFeet"
        value={formData.squareFeet} 
        onChange={handleChange} 
        placeholder="Square Feet" 
        type="number" 
        className="border p-2 w-full"
      />

      <div className="flex justify-end gap-2 pt-2">
        <button type="button" onClick={onCancel} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">Cancel</button>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save</button>
      </div>
    </form>
  );
}
