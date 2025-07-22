import styles from '../styles/SharedModal.module.css';
import buttonStyles from '../styles/Buttons.module.css';
import { useState, useEffect } from 'react';

export default function FinancialModal({ financial, onClose, onSave }) {
  const [formData, setFormData] = useState({
    rent: '',
    securityDeposit: '',
    petDeposit: '',
  });

  useEffect(() => {
    if (financial) {
      setFormData({ ...financial });
    }
  }, [financial]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.rent || !formData.securityDeposit || !formData.petDeposit) {
      alert('Please fill out all fields.');
      return;
    }

    onSave(formData);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div 
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={styles.modalTitle}>Edit Financials</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            name="rent"
            value={formData.rent}
            onChange={handleChange}
            placeholder="Rent"
            className={styles.input}
          />
          <input
            name="securityDeposit"
            value={formData.securityDeposit}
            onChange={handleChange}
            placeholder="Security Deposit"
            className={styles.input}
          />
          <input
            name="petDeposit"
            value={formData.petDeposit}
            onChange={handleChange}
            placeholder="Pet Deposit"
            className={styles.input}
          />

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
