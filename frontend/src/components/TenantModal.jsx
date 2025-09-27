import styles from '../styles/SharedModal.module.css';
import buttonStyles from '../styles/Buttons.module.css';
import { useState, useEffect } from 'react';

export default function TenantModal({ isOpen, tenant, onClose, onSave, title = 'Edit Tenant' }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    occupation: '',
    contact: { phone: '', email: '' },
    // we’ll attach photoId fields on submit
  });

  const [photoIdFile, setPhotoIdFile] = useState(null);
  const [photoIdPreview, setPhotoIdPreview] = useState(tenant?.photoIdDataUrl || null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (tenant) {
      setFormData({ ...tenant });
      setPhotoIdPreview(tenant.photoIdDataUrl || null);
      setPhotoIdFile(null);
    }
  }, [tenant]);

  const onChoosePhotoId = (e) => {
    const file = e.target.files?.[0];
    setPhotoIdFile(file || null);
    if (!file) {
      setPhotoIdPreview(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setPhotoIdPreview(reader.result); // base64 string
    reader.readAsDataURL(file);
  };

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

  const basicsOk =
    formData.name.trim() !== '' &&
    formData.contact.phone.trim() !== '' &&
    formData.contact.email.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Require Photo ID only when adding a new tenant
    const needPhotoId = !tenant && !photoIdPreview;
    if (!basicsOk || needPhotoId) return;

    const payload = {
      ...formData,
      // keep filename like Lease, plus dataURL for preview
      photoIdName: photoIdFile?.name || formData.photoIdName || null,
      photoIdDataUrl: photoIdPreview || formData.photoIdDataUrl || null,
    };

    onSave(payload);
  };

  const isImg =
    typeof photoIdPreview === 'string' && photoIdPreview.startsWith('data:image/');
  const isPdf =
    typeof photoIdPreview === 'string' && photoIdPreview.startsWith('data:application/pdf');

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modalTitle}>{title}</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className={styles.input}
          />
          <input
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            className={styles.input}
          />
          <input
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            placeholder="Occupation"
            className={styles.input}
          />
          <input
            name="phone"
            value={formData.contact?.phone || ''}
            onChange={handleChange}
            placeholder="Phone"
            className={styles.input}
          />
          <input
            name="email"
            type="email"
            value={formData.contact?.email || ''}
            onChange={handleChange}
            placeholder="Email"
            className={styles.input}
          />

          {/* Photo ID (required on Add, optional on Edit) */}
          <div className={styles.input}>
            <label style={{ display: 'block', marginBottom: 6 }}>
              Photo ID <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              name="photoId"
              type="file"
              accept="image/*,.pdf"
              onChange={onChoosePhotoId}
              required={!tenant}
            />

            {photoIdPreview && (
              <div style={{ marginTop: 8 }}>
                {isImg ? (
                  <img
                    src={photoIdPreview}
                    alt="Photo ID"
                    style={{ maxWidth: 240, border: '1px solid #ddd' }}
                  />
                ) : isPdf ? (
                  <a href={photoIdPreview} target="_blank" rel="noreferrer">
                    View Photo ID (PDF)
                  </a>
                ) : (
                  <a href={photoIdPreview} target="_blank" rel="noreferrer">
                    View Photo ID
                  </a>
                )}
              </div>
            )}
          </div>

          {submitted && (!basicsOk || (!tenant && !photoIdPreview)) && (
            <p className={styles.validationText}>
              Please fill in name, phone, and email, and attach a Photo ID.
            </p>
          )}

          <div className={styles.modalButtons}>
            <button type="submit" className={buttonStyles.primaryButton}>
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
