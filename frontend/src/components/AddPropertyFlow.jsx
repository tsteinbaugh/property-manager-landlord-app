import { useState } from 'react';
import styles from './PropertyModal.module.css';
import PropertyForm from './PropertyForm';
import TenantModal from './TenantModal';
import buttonStyles from '../styles/Buttons.module.css';
import PropertyModalWrapper from './PropertyModalWrapper';

export default function AddPropertyFlow({ onComplete, onCancel }) {
  const [step, setStep] = useState(1);
  const [propertyData, setPropertyData] = useState({});
  const [tenants, setTenants] = useState([]);
  const [showNewTenantModal, setNewShowTenantModal] = useState(false);

  const handlePropertySave = (data) => {
    setPropertyData(data);
    setStep(2);
    setShowTenantModal(true);
  };

  const handleTenantSave = (tenant) => {
    setTenants((prev) => [...prev, tenant]);
    setShowTenantModal(false);
    setStep(3);
  };

  const handleTenantNext = () => {
    if (tenants.length === 0) {
      alert('Please add at least one tenant.');
      return;
    }
    setStep(4); // placeholder for next step (occupants)
    onComplete({ ...propertyData, tenants });
  };

  const handleTenantCancel = () => {
    setShowTenantModal(false);
    setStep(1);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {step === 1 && (
          <PropertyModalWrapper
            onSave={(data) => {
              setPropertyData(data);
              setStep(2);
              setShowTenantModal(true);
            }}
            onCancel={onCancel}
          />
        )}

        {step === 2 && showTenantModal && (
          <TenantModal
            tenant={{ name: '', age: '', occupation: '', contact: { phone: '', email: '' } }}
            onClose={handleTenantCancel}
            onSave={handleTenantSave}
            title="Add Tenant"
          />
        )}

        {step === 3 && (
          <>
            <h2 className={styles.modalTitle}>Add Additional Tenants</h2>

            <ul className="mb-4 list-disc ml-6">
              {tenants.map((t, i) => (
                <li key={i}>{t.name}</li>
              ))}
            </ul>

            <div className={styles.modalButtons}>
              <button className={buttonStyles.primaryButton} onClick={() => setShowTenantModal(true)}>+ Add Another</button>
              <button className={buttonStyles.primaryButton} onClick={handleTenantNext}>Next</button>
              <button className={buttonStyles.secondaryButton} onClick={onCancel}>Cancel</button>
            </div>

            {showTenantModal && (
              <TenantModal
                isOpen={showNewTenantModal}
                tenant={{ name: '', age: '', occupation: '', contact: { phone: '', email: '' } }}
                onClose={() => setShowNewTenantModal(false)}
                onSave={handleTenantSave}
                title="Add Tenant"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
