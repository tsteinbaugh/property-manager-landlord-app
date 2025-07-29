import PropertyForm from './PropertyForm';
import styles from './PropertyModal.module.css';

export default function PropertyModalWrapper({ onSave, onCancel }) {
  return (
    <>
      <h2 className={styles.modalTitle}>Add Property</h2>
      <PropertyForm onSave={onSave} onCancel={onCancel} />
    </>
  );
}
