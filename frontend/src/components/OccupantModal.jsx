import { useState, useEffect } from 'react';
import styles from '../styles/SharedModal.module.css';
import buttonStyles from '../styles/Buttons.module.css';

export default function OccupantModal({ occupant, onClose, onSave, title = 'Edit Occupant' }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    occupation: '',
    relationship: '',
    contact: {
      phone: '',
      email: '',
    }
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (occupant) {
      setFormData({...occupant});
    }
  }, [occupant]);

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

  const isFormValid = formData.name.trim() !== '';

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
          <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" className={styles.input} />
          <input name="occupation" value={formData.occupation} onChange={handleChange} placeholder="Occupation" className={styles.input} />
          <input type="text" name="relationship" value={formData.relationship} onChange={handleChange} placeholder="Relationship" className={styles.input} />
          <input name="phone" value={formData.contact?.phone || ''} onChange={handleChange} placeholder="Phone" className={styles.input} />
          <input name="email" value={formData.contact?.email || ''} onChange={handleChange} placeholder="Email" className={styles.input} />

          {submitted && !isFormValid && (
            <p className={styles.validationText}>Please enter the occupant's name.</p>
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
