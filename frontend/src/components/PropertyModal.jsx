import styles from './PropertyModal.module.css';
import PropertyForm from './PropertyForm';

export default function PropertyModal({ onClose, onSubmit, initialData }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 style={{ marginBottom: '1rem' }}>
          {initialData ? 'Edit Property' : 'Add Property'}
        </h2>
        <PropertyForm onSubmit={onSubmit} onCancel={onClose} initialData={initialData} />
      </div>
    </div>
  );
}
