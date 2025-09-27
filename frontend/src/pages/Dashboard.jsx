import Header from '../components/Header';
import dashStyles from './Dashboard.module.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropertyList from './PropertyList';
import PropertyModal from '../components/PropertyModal';
import { useProperties } from '../context/PropertyContext';
import GlobalSearch from '../components/GlobalSearch';
import buttonStyles from '../styles/Buttons.module.css';

export default function Dashboard({ role, setRole }) {
  const [showModal, setShowModal] = useState(false);
  const { properties, addProperty } = useProperties();
  const navigate = useNavigate();

  useEffect(() => {
    if (!role) navigate('/');
  }, [role, navigate]);

  const handleAddProperty = (newProperty) => {
    addProperty(newProperty);
    setShowModal(false);
  };

  return (
    <div className={dashStyles.container}>
      <Header setRole={setRole} />

      <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '10px 0 16px' }}>
        <div style={{ width: 520, maxWidth: '100%' }}>
          <GlobalSearch
            properties={properties}
            onOpenProperty={(id) => navigate(`/property/${id}`)}
            placeholder="Search name, phone, email, address, pet…"
          />
        </div>
      </div>

      <h1 className={dashStyles.heading}>
        {role === 'landlord' ? 'Landlord' : 'Property Manager'} Dashboard
      </h1>

      <PropertyList role={role} properties={properties} />

      {role === 'landlord' && (
        <div className={dashStyles.buttonRow}>
          <button
            onClick={() => setShowModal(true)}
            className={buttonStyles.primaryButton}
          >
            + Add Property
          </button>
        </div>
      )}

      {/* Render the modal and control visibility via isOpen */}
      <PropertyModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleAddProperty}
      />
    </div>
  );
}
