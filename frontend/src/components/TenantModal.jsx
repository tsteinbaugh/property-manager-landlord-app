import { useState, useEffect } from "react";
import styles from "../styles/SharedModal.module.css";
import buttonStyles from "../styles/Buttons.module.css";
import FloatingField from "./ui/FloatingField";
import ModalRoot from "./ui/ModalRoot";

export default function TenantModal({ isOpen, tenant, onClose, onSave, title = "Edit Tenant" }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    occupation: "",
    contact: { phone: "", email: "" },
    photoIdName: null,
    photoIdDataUrl: null,
  });
  const [photoIdFile, setPhotoIdFile] = useState(null);
  const [photoIdPreview, setPhotoIdPreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  // Normalize incoming data to strings
  useEffect(() => {
    if (!tenant) {
      setFormData({
        name: "",
        age: "",
        occupation: "",
        contact: { phone: "", email: "" },
        photoIdName: null,
        photoIdDataUrl: null,
      });
      setPhotoIdPreview(null);
      setPhotoIdFile(null);
      return;
    }
    setFormData({
      name: String(tenant.name ?? ""),
      age: String(tenant.age ?? ""),
      occupation: String(tenant.occupation ?? ""),
      contact: {
        phone: String(tenant?.contact?.phone ?? ""),
        email: String(tenant?.contact?.email ?? ""),
      },
      photoIdName: tenant.photoIdName || null,
      photoIdDataUrl: tenant.photoIdDataUrl || null,
    });
    setPhotoIdPreview(tenant.photoIdDataUrl || null);
    setPhotoIdFile(null);
  }, [tenant]);

  function onChoosePhotoId(e) {
    const file = e.target.files?.[0] || null;
    setPhotoIdFile(file);
    if (!file) { setPhotoIdPreview(null); return; }
    const reader = new FileReader();
    reader.onload = () => setPhotoIdPreview(reader.result);
    reader.readAsDataURL(file);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    // always coerce to string to keep trim() safe later
    const v = String(value ?? "");
    if (name === "phone" || name === "email") {
      setFormData(prev => ({ ...prev, contact: { ...(prev.contact || {}), [name]: v } }));
    } else {
      setFormData(prev => ({ ...prev, [name]: v }));
    }
  }

  // Safe validations (coerce to string first)
  const emailStr = String(formData.contact?.email ?? "");
  const phoneStr = String(formData.contact?.phone ?? "");
  const nameStr  = String(formData.name ?? "");

  const emailOk  = /^\S+@\S+\.\S+$/.test(emailStr.trim());
  const basicsOk = nameStr.trim() !== "" && phoneStr.trim() !== "" && emailOk;

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    const needPhotoId = !tenant && !photoIdPreview;
    if (!basicsOk || needPhotoId) return;

    const payload = {
      name: nameStr.trim(),
      age: String(formData.age ?? "").trim(),
      occupation: String(formData.occupation ?? "").trim(),
      contact: { phone: phoneStr.trim(), email: emailStr.trim() },
      photoIdName: photoIdFile?.name || formData.photoIdName || null,
      photoIdDataUrl: photoIdPreview || formData.photoIdDataUrl || null,
    };

    onSave?.(payload);
  }

  const requirePhoto = !tenant;

  return (
    <ModalRoot isOpen={!!isOpen} onClose={onClose} width={560}>
      <h2 className={styles.modalTitle}>{title}</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <FloatingField name="name" label="Name" value={formData.name} onChange={handleChange} required />
        <FloatingField name="age" label="Age" value={formData.age} onChange={handleChange} />
        <FloatingField name="occupation" label="Occupation" value={formData.occupation} onChange={handleChange} />
        <FloatingField name="phone" label="Phone" value={formData.contact?.phone || ""} onChange={handleChange} required />
        <FloatingField name="email" type="email" label="Email" value={formData.contact?.email || ""} onChange={handleChange} required />

        <div className={styles.input}>
          <label style={{ display: "block", marginBottom: 6 }}>
            Photo ID {requirePhoto && <span style={{ color: "red" }}>*</span>}
          </label>
          <input name="photoId" type="file" accept="image/*,.pdf" onChange={onChoosePhotoId} required={requirePhoto} />
          {photoIdPreview && (
            <div style={{ marginTop: 8 }}>
              {String(photoIdPreview).startsWith("data:image/")
                ? <img src={photoIdPreview} alt="Photo ID" style={{ maxWidth: 240, border: "1px solid #ddd" }} />
                : <a href={photoIdPreview} target="_blank" rel="noreferrer">View Photo ID</a>}
            </div>
          )}
        </div>

        {submitted && (!basicsOk || (requirePhoto && !photoIdPreview)) && (
          <p className={styles.validationText}>
            Please fill in name, phone, a valid email, and attach a Photo ID.
          </p>
        )}

        <div className={styles.modalButtons}>
          <button type="submit" className={buttonStyles.primaryButton}>Save</button>
          <button type="button" onClick={onClose} className={buttonStyles.secondaryButton}>Cancel</button>
        </div>
      </form>
    </ModalRoot>
  );
}
