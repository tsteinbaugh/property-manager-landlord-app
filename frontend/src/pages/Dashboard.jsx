import Header from '../components/Header';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropertyList from './PropertyList';
import PropertyModal from '../components/PropertyModal';
import { useProperties } from '../context/PropertyContext';
import styles from './Dashboard.module.css';
import buttonStyles from '../styles/Buttons.module.css';


export default function Dashboard({ role, setRole }) {
  const [showModal, setShowModal] = useState(false);
  const { properties, addProperty } = useProperties();
  const navigate = useNavigate();

  useEffect(() => {
    if (!role) {
      navigate('/');
    }
  }, [role, navigate]);

  const handleAddProperty = (newProperty) => {
    addProperty(newProperty);
    setShowModal(false);
  };

  return (
    <div className="p-4">
      <Header setRole={setRole} />
      <h1 className="text-3xl font-bold mb-4">
        {role === 'landlord' ? 'Landlord' : 'Property Manager'} Dashboard
      </h1>

      <PropertyList role={role} properties={properties} />

      {role === 'landlord' && (
        <div className="mb-4">

          <button
            onClick={() => setShowModal(true)}
            className={buttonStyles.primaryButton}
          >
            + Add Property
          </button>
        </div>
      )}

      {showModal && (
        <PropertyModal
          onClose={() => setShowModal(false)}
          onSave={(newProperty) => {
            addProperty(newProperty);
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}
