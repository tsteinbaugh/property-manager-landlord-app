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

          {property.tenants && (
            <div className="mt-6 border-t pt-4">
              <h2 className="text-xl font-semibold mb-2">Tenant Information</h2>

              <div className="mb-2">
                <strong>Tenant(s):</strong>
                {property.tenants.length ? (
                  property.tenants.map((tenant, idx) => (
                    <ul key={idx} className="list-disc list-inside ml-4">
                      <li>Name: {tenant.name}</li>
                      <ul key ={idx} className="list-disc list-inside ml-6">
                        <li>Contact Information:</li>
                        <ul key ={idx} className="list-disc list-inside ml-8">
                          <li>Phone: {tenant.contact.phone}</li>
                          <li>Email: {tenant.contact.email}</li>
                        </ul>
                      <li>Age: {tenant.age}</li>
                      <li>Occupation: {tenant.occupation}</li>
                      </ul>
                    </ul>
                  ))
                ) : (
                  ' None'
                )}
              </div>

              {role === 'landlord' && (
                <>

                  <div className="mb-2">
                    <strong>Occupant(s):</strong>
                    {property.occupants?.length ? (
                      property.occupants.map((occupant, idx) => (
                        <ul key={idx} className="list-disc list-inside ml-4">
                          <li>Name: {occupant.name}</li>
                          <ul key={idx} className="list-disc list-inside ml-6">
                            <li>Age: {occupant.age}</li>
                          </ul>
                        </ul>
                      ))
                    ) : (
                      ' None'
                    )}
                  </div>

                  <div className="mb-2">
                    <strong>Pet(s):</strong>
                    {property.pets?.length ? (
                      property.pets.map((pet, idx) => (
                        <ul key={idx} className="list-disc list-inside ml-4">
                          <li>Name: {pet.name}</li>
                          <ul key={idx} className="list-disc list-inside ml-6">
                            <li>Type: {pet.type}</li>
                            <li>Size: {pet.size}</li>
                            <li>License #: {pet.license}</li>
                          </ul>
                        </ul>
                      ))
                    ) : (
                      ' None'
                    )}
                  </div>

                  <div className="mb-2">
                    <strong>Emergency Contact:</strong>
                    {property.emergencyContact?.length ? (
                      property.emergencyContact.map((eContact, idx) => (
                        <ul key={idx} className="list-disc list-inside ml-4">
                          <li>Name: {eContact.name}</li>
                          <ul key={idx} className="list-disc list-inside ml-6">
                            <li>Contact Information:</li>
                            <ul key={idx} className="list-disc list-inside ml-8">
                              <li>Phone: {eContact.contact.phone}</li>
                              <li>Email: {eContact.contact.email}</li>
                            </ul>
                          </ul>
                        </ul>
                       ))
                    ) : (
                      ' None'
                    )}
                  </div>

                  <div className="mb-2">
                    <strong>Financials:</strong>
                    {property.financials?.[0] ? (
                      <ul className="list-disc list-inside ml-4">
                        <li>Rent: ${property.financials[0].rent}</li>
                        <li>Security Deposit: ${property.financials[0].securityDeposit}</li>
                        <li>Pet Deposit: ${property.financials[0].petDeposit}</li>
                      </ul>
                    ) : (
                      ' None'
                    )}
                  </div>

                  <div className="mb-2">
                    <strong>Lease Agreement:</strong>{' '}
                    <a
                      href={`/leases/${property.leaseFile}`}
                      download
                      className="text-blue-500 underline"
                    >
                      Download Lease
                    </a>
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
