import styles from './PropertyForm.module.css';
import { useState } from 'react';

export default function PropertyForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    state: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        className={styles.input}
      />
      <input
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        className={styles.input}
      />
      <input
        name="state"
        placeholder="State"
        value={formData.state}
        onChange={handleChange}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Submit</button>
    </form>
  );
}
