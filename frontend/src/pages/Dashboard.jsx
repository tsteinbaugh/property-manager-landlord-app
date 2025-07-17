import Header from '../components/Header';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropertyList from './PropertyList';
import AddPropertyModal from '../components/AddPropertyModal';
import properties from '../data/properties';

export default function Dashboard({ role, setRole }) {
  const [showModal, setShowModal] = useState(false);
  const [allProperties, setAllProperties] = useState(properties);
  const navigate = useNavigate();

  useEffect(() => {
    if (!role) {
      navigate('/');
    }
  }, [role, navigate]);

  const handleAddProperty = (newProperty) => {
    setAllProperties((prev) => [...prev, newProperty]);
    setShowModal(false);
  };

  return (
    <div className="p-4">
      <Header setRole={setRole} />
      <h1 className="text-3xl font-bold mb-4">
        {role === 'landlord' ? 'Landlord' : 'Property Manager'} Dashboard
      </h1>

      <PropertyList role={role} properties={allProperties} />

      {role === 'landlord' && (
        <div className="mb-4">
          <button
            onClick={() => setShowModal(true)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            + Add Property
          </button>
        </div>
      )}

      {showModal && (
        <AddPropertyModal
          onClose={() => setShowModal(false)}
          onSave={handleAddProperty}
        />
      )}
    </div>
  );
}
