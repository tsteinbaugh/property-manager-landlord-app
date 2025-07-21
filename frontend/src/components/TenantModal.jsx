import styles from './TenantModal.module.css';
import buttonStyles from '../styles/Buttons.module.css';
import { useState, useEffect } from 'react';

export default function TenantModal({ tenant, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    occupation: '',
    contact: {
      phone: '',
      email: '',
    },
  });

  useEffect(() => {
    if (tenant) {
      setFormData({ ...tenant });
    }
  }, [tenant]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone' || name === 'email') {
      setFormData((prev) => ({
        ...prev,
        contact: { ...prev.contact, [name]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Edit Tenant</h2>

        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className={styles.input}
        />
        <input
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
          className={styles.input}
        />
        <input
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          placeholder="Occupation"
          className={styles.input}
        />
        <input
          name="phone"
          value={formData.contact?.phone || ''}
          onChange={handleChange}
          placeholder="Phone"
          className={styles.input}
        />
        <input
          name="email"
          value={formData.contact?.email || ''}
          onChange={handleChange}
          placeholder="Email"
          className={styles.input}
        />

        <div className={styles.buttonRow}>
          <button onClick={onClose} className={buttonStyles.secondaryButton}>Cancel</button>
          <button onClick={handleSubmit} className={buttonStyles.primaryButton}>Save</button>
        </div>
      </div>
    </div>
  );
}
