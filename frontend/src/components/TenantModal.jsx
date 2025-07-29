import styles from '../styles/SharedModal.module.css';
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

  const [submitted, setSubmitted] = useState(false);

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

  const isFormValid = formData.name.trim() !== '' &&
    formData.contact.phone.trim() !== '' &&
    formData.contact.email.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!isFormValid) return;
    onSave(formData);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modalTitle}>Edit Tenant</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className={styles.input} />
          <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" className={styles.input} />
          <input name="occupation" value={formData.occupation} onChange={handleChange} placeholder="Occupation" className={styles.input} />
          <input name="phone" value={formData.contact?.phone || ''} onChange={handleChange} placeholder="Phone" className={styles.input} />
          <input name="email" value={formData.contact?.email || ''} onChange={handleChange} placeholder="Email" className={styles.input} />

          {submitted && !isFormValid && (
            <p className={styles.validationText}>Please fill in name, phone, and email.</p>
          )}

          <div className={styles.modalButtons}>
            <button type="submit" className={buttonStyles.primaryButton}>Save</button>
            <button type="button" onClick={onClose} className={buttonStyles.secondaryButton}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
