import { useState, useEffect } from 'react';
import styles from '../styles/SharedModal.module.css';
import buttonStyles from '../styles/Buttons.module.css';

export default function EmergencyContactModal({ emergencyContact, onClose, onSave, title = 'Edit Emergency Contact' }) {
  const [formData, setFormData] = useState({
    name: '',
    contact: {
      phone: '',
      email: '',
    },
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (emergencyContact) {
      setFormData({...emergencyContact});
    }
  }, [emergencyContact]);

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

  const isFormValid = formData.name.trim() !== '' && formData.contact.phone.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!isFormValid) return;
    onSave(formData);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modalTitle}>{title}</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className={styles.input} />
          <input type="text" name="phone" value={formData.contact?.phone || ''} onChange={handleChange} placeholder="Phone" className={styles.input} />
          <input type="text" name="email" value={formData.contact?.email || ''} onChange={handleChange} placeholder="Email" className={styles.input} />

          {submitted && !isFormValid && (
            <p className={styles.validationText}>Please enter name and phone number.</p>
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
