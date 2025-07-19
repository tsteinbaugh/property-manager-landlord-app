import { useParams, useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import { useProperties } from '../context/PropertyContext';
import { useState } from 'react';

export default function PropertyDetail({ role, setRole }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { properties, editProperty, deleteProperty } = useProperties();

  const property = properties.find((p) => p.id === Number(id));
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(property ? { ...property } : {});

  if (!property) return <p className="p-4">Property not found.</p>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    editProperty({ ...formData, id: property.id });
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this property?')) {
      deleteProperty(property.id);
      navigate('/dashboard');
    }
  };

  return (
    <div className="p-4">
      <Header setRole={setRole} />
      <Link to="/dashboard" className="text-blue-500 underline">← Back to Properties</Link>

      {isEditing ? (
        <div className="space-y-2 mt-4">
          <h1 className="text-2xl font-bold">Edit Property</h1>
          <input name="address" value={formData.address} onChange={handleChange} className="border p-2 w-full" />
          <input name="city" value={formData.city} onChange={handleChange} className="border p-2 w-full" />
          <input name="state" value={formData.state} onChange={handleChange} className="border p-2 w-full" />
          <input name="bedrooms" type="number" value={formData.bedrooms} onChange={handleChange} className="border p-2 w-full" />
          <input name="bathrooms" type="number" value={formData.bathrooms} onChange={handleChange} className="border p-2 w-full" />
          <input name="squareFeet" type="number" value={formData.squareFeet} onChange={handleChange} className="border p-2 w-full" />
          <div className="flex gap-2 mt-2">
            <button onClick={handleSave} className="bg-green-600 text-white px-4 py-2 rounded">Save</button>
            <button onClick={() => setIsEditing(false)} className="bg-gray-400 px-4 py-2 rounded">Cancel</button>
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold mt-2">{property.address}, {property.city}, {property.state}</h1>
          <p>🛏️ {property.bedrooms} bed</p>
          <p>🛁 {property.bathrooms} bath</p>
          <p>📐 {property.squareFeet} sq ft</p>

          {role === 'landlord' && (
            <div className="mt-6 flex gap-4">
              <button onClick={() => setIsEditing(true)} className="px-4 py-2 bg-blue-600 text-white rounded">
                Edit Property
              </button>
              <button onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white rounded">
                Delete Property
              </button>
            </div>
          )}

          {property.tenant && (
            <div className="mt-6 border-t pt-4">
              <h2 className="text-xl font-semibold mb-2">Tenant Information</h2>

              <div className="mb-2">
                <strong>Tenant(s):</strong> {property.tenant.names?.join(', ') || 'N/A'}
              </div>

              <div className="mb-2">
                <strong>Contact:</strong> {property.tenant.contact?.phone} | {property.tenant.contact?.email}
              </div>

              {role === 'landlord' && (
                <>
                  <div className="mb-2">
                    <strong>Occupants:</strong> {property.tenant.occupants?.join(', ') || 'N/A'}
                  </div>
                  <div className="mb-2">
                    <strong>Ages:</strong> {property.tenant.ages?.join(', ') || 'N/A'}
                  </div>
                  <div className="mb-2">
                    <strong>Emergency Contact:</strong> {property.tenant.emergencyContact || 'N/A'}
                  </div>
                  <div className="mb-2">
                    <strong>Pets:</strong>
                    {property.tenant.pets?.length ? (
                      <ul className="list-disc list-inside ml-4">
                        {property.tenant.pets.map((pet, idx) => (
                          <li key={idx}>
                            {pet.name} ({pet.type}, {pet.size}) - License: {pet.license}
                          </li>
                       ))}
                      </ul>
                    ) : ' None'}
                  </div>
                 <div className="mb-2">
                    <strong>Lease Agreement:</strong>{' '}
                    <a
                      href={`/leases/${property.tenant.leaseFile}`}
                      download
                      className="text-blue-500 underline"
                    >
                      Download Lease
                    </a>
                  </div>
                  <div className="mb-2">
                    <strong>Rent:</strong> ${property.tenant.rent}
                  </div>
                  <div className="mb-2">
                    <strong>Security Deposit:</strong> ${property.tenant.securityDeposit}
                  </div>
                 <div className="mb-2">
                    <strong>Pet Deposit:</strong> ${property.tenant.petDeposit || 0}
                 </div>
                </>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
