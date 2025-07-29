import { useState, useEffect } from 'react';
import styles from '../styles/SharedModal.module.css';
import buttonStyles from '../styles/Buttons.module.css';

export default function PropertyForm({ onSave, onCancel, initialData = {} }) {
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    state: '',
    zip: '',
    bedrooms: '',
    bathrooms: '',
    squareFeet: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData({ ...initialData });
    }
  }, [initialData]);

  const isFormValid = Object.values(formData).every((val) =>
    String(val).trim() !== ''
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!isFormValid) return;
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input name="address" placeholder="Street Address" value={formData.address} onChange={handleChange} className={styles.input} />
      <input name="city" placeholder="City" value={formData.city} onChange={handleChange} className={styles.input} />
      <input name="state" placeholder="State" value={formData.state} onChange={handleChange} className={styles.input} />
      <input name="zip" placeholder="Zip" value={formData.zip} onChange={handleChange} className={styles.input} />
      <input name="bedrooms" placeholder="Bedrooms" value={formData.bedrooms} onChange={handleChange} className={styles.input} />
      <input name="bathrooms" placeholder="Bathrooms" value={formData.bathrooms} onChange={handleChange} className={styles.input} />
      <input name="squareFeet" placeholder="Square Feet" value={formData.squareFeet} onChange={handleChange} className={styles.input} />

      {submitted && !isFormValid && (
        <p className={styles.validationText}>Please fill in all fields.</p>
      )}

      <div className={styles.modalButtons}>
        <button type="submit" className={buttonStyles.primaryButton}>Save</button>
        <button type="button" onClick={onCancel} className={buttonStyles.secondaryButton}>Cancel</button>
      </div>
    </form>
  );
}
