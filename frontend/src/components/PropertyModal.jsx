import styles from './PropertyModal.module.css';
import PropertyForm from './PropertyForm';

export default function PropertyModal({ onClose, onSave, initialData }) {
  console.log('PropertyModal props:', { onSave, onClose, initialData });

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 style={{ marginBottom: '1rem' }}>
          {initialData ? 'Edit Property' : 'Add Property'}
        </h2>
        <PropertyForm onSave={onSave} onCancel={onClose} initialData={initialData || null} />
      </div>
    </div>
  );
}
