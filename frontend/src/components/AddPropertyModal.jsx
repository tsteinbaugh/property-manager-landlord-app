import styles from './AddPropertyModal.module.css';
import { useState } from 'react';

export default function AddPropertyModal({ onClose, onSave }) {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [squareFeet, setSquareFeet] = useState('');


  const handleSubmit = () => {
    if (
      !address.trim() ||
      !city.trim() ||
      !state.trim() ||
      !zip.trim() ||
      !bedrooms.trim() ||
      !bathrooms.trim() ||
      !squareFeet.trim()
    ) {
      alert('Please fill in all fields before saving.');
      return;
    }

    onSave({ address, city, state, zip, bedrooms, bathrooms, squareFeet });
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 style={{ marginBottom: '1rem' }}>Add Property</h2>

        <input
          type="text"
          placeholder="Street Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className={styles.input}
        />
        <input
          type="number"
          placeholder="Zip"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          className={styles.input}
        />
        <input
          type="number"
          placeholder="Number of Bedrooms"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          className={styles.input}
        />
        <input
          type="number"
          placeholder="Number of Bathrooms"
          value={bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
          className={styles.input}
        />
        <input
          type="number"
          placeholder="Square Feet"
          value={squareFeet}
          onChange={(e) => setSquareFeet(e.target.value)}
          className={styles.input}
        />




        <div className={styles.buttonRow}>
          <button onClick={onClose} className={styles.secondaryButton}>Cancel</button>
          <button onClick={handleSubmit} className={styles.primaryButton}>Save</button>
        </div>
      </div>
    </div>
  );
}
