import { useState, useEffect } from 'react';
import styles from '../styles/SharedModal.module.css';
import buttonStyles from '../styles/Buttons.module.css';

export default function PetModal({ pet, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name:'',
    type:'',
    size:'',
    license:'',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (pet) {
      setFormData({...pet});
    }
  }, [pet]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = formData.name.trim() !== '' && formData.type.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!isFormValid) return;
    onSave(formData);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div 
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={styles.modalTitle}>Edit Pet</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className={styles.input} />
          <input name="type" value={formData.type} onChange={handleChange} placeholder="Type of pet (dog, cat...)" className={styles.input} />
          <input name="size" value={formData.size} onChange={handleChange} placeholder="Size (small, medium, large, or weight)" className={styles.input} />
          <input name="license" value={formData.license} onChange={handleChange} placeholder="License #" className={styles.input} />

          {submitted && !isFormValid && (
            <p className={styles.validationText}>Please fill in name and type of pet.</p>
          )}

          <div className={styles.modalButtons}>
            <button 
              type="submit"
              className={buttonStyles.primaryButton}
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className={buttonStyles.secondaryButton}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
