import { useState, useEffect } from 'react';
import styles from '../styles/SharedModal.module.css';
import buttonStyles from '../styles/Buttons.module.css';

export default function PropertyForm({ onSubmit, onCancel, initialData = {} }) {
  const [formData, setFormData] = useState({
    address: initialData?.address || '',
    city: initialData?.city || '',
    state: initialData?.state || '',
    zip: initialData?.zip || '',
    bedrooms: initialData?.bedrooms || '',
    bathrooms: initialData?.bathrooms || '',
    squareFeet: initialData?.squareFeet || '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData({...initialData});
    }
  }, [initialData]);

  const isFormValid = Object.values(formData).every(val =>
    typeof val === 'string' ? val.trim() !== '' : val !== undefined && val !== null
  );


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      alert('Please fill in all fields.');
      return;
    }
    onSubmit(formData);
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

      <div className={styles.modalButtons}>
        <button type="submit" className={buttonStyles.primaryButton} disabled={!isFormValid}>Save</button>
        <button type="button" onClick={onCancel} className={buttonStyles.secondaryButton}>Cancel</button>
      </div>
    </form>
  );
}
