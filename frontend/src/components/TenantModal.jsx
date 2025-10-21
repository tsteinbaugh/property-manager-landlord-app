import { useState, useEffect, useRef } from "react";
import styles from "../styles/SharedModal.module.css";
import buttonStyles from "../styles/Buttons.module.css";
import FloatingField from "./ui/FloatingField";
import ModalRoot from "./ui/ModalRoot";

// require dot in domain, min 2 chars TLD
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function TenantModal({
  isOpen,
  tenant,
  onClose,
  onSave,
  title = "Edit Tenant",
}) {
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
  const [, setSubmitted] = useState(false);

  const formRef = useRef(null);
  const fileInputRef = useRef(null);

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
    if (!file) {
      setPhotoIdPreview(null);
      return;
    }
    const reader = new window.FileReader();
    reader.onload = () => setPhotoIdPreview(reader.result);
    reader.readAsDataURL(file);
  }

  function getEmailInputEl() {
    const el = formRef.current?.elements?.namedItem?.("email");
    return el && "setCustomValidity" in el ? el : null;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    const v = String(value ?? "");
    if (name === "phone" || name === "email") {
      setFormData((prev) => ({
        ...prev,
        contact: { ...(prev.contact || {}), [name]: v },
      }));
      if (name === "email") {
        const emailEl = getEmailInputEl();
        if (emailEl) emailEl.setCustomValidity("");
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: v }));
    }
  }

  // --- validations for inline summary
  const emailStr = String(formData.contact?.email ?? "");
  const phoneStr = String(formData.contact?.phone ?? "");
  const nameStr = String(formData.name ?? "");
  const emailOk = EMAIL_REGEX.test(emailStr.trim());
  const basicsOk = nameStr.trim() !== "" && phoneStr.trim() !== "" && emailOk;

  const tenantHasExistingPhoto = Boolean(tenant?.photoIdDataUrl || tenant?.photoIdName);
  const hasPhotoNow = Boolean(photoIdFile || photoIdPreview || formData.photoIdDataUrl);
  const mustRequirePhoto = !tenant || !tenantHasExistingPhoto;

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    if (fileInputRef.current) {
      if (mustRequirePhoto && !hasPhotoNow) {
        fileInputRef.current.setCustomValidity("Please attach a Photo ID.");
      } else {
        fileInputRef.current.setCustomValidity("");
      }
    }

    const emailEl = getEmailInputEl();
    if (emailEl) {
      if (!EMAIL_REGEX.test(emailStr.trim())) {
        emailEl.setCustomValidity("Enter a valid email like name@example.com");
      } else {
        emailEl.setCustomValidity("");
      }
    }

    if (formRef.current && !formRef.current.reportValidity()) return;

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

  return (
    <ModalRoot isOpen={!!isOpen} onClose={onClose} width={560}>
      <h2 className={styles.modalTitle}>{title}</h2>
      {/* Keep native validation enabled */}
      <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.fieldWrap}>
          <FloatingField
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.fieldWrap}>
          <FloatingField
            name="age"
            label="Age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        <div className={styles.fieldWrap}>
          <FloatingField
            name="occupation"
            label="Occupation"
            value={formData.occupation}
            onChange={handleChange}
          />
        </div>

        <div className={styles.fieldWrap}>
          <FloatingField
            name="phone"
            label="Phone"
            value={formData.contact?.phone || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.fieldWrap}>
          <FloatingField
            name="email"
            type="email"
            label="Email"
            value={formData.contact?.email || ""}
            onChange={handleChange}
            required
            autoComplete="email"
            inputMode="email"
          />
        </div>

        <div className={`${styles.fieldWrap}`} style={{ marginTop: 6 }}>
          <label style={{ display: "block", marginBottom: 6 }}>
            Photo ID {mustRequirePhoto && <span style={{ color: "red" }}>*</span>}
          </label>
          <input
            ref={fileInputRef}
            name="photoId"
            type="file"
            accept="image/*,.pdf"
            onChange={onChoosePhotoId}
            required={mustRequirePhoto && !hasPhotoNow}
          />
          {hasPhotoNow && (
            <div style={{ marginTop: 8 }}>
              {String(photoIdPreview || formData.photoIdDataUrl).startsWith(
                "data:image/",
              ) ? (
                <img
                  src={photoIdPreview || formData.photoIdDataUrl}
                  alt="Photo ID"
                  style={{ maxWidth: 240, border: "1px solid #ddd" }}
                />
              ) : (
                <a
                  href={photoIdPreview || formData.photoIdDataUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Photo ID
                </a>
              )}
            </div>
          )}
        </div>

        <div className={styles.modalButtons}>
          <button
            type="submit"
            className={buttonStyles.primaryButton}
            disabled={!basicsOk || (mustRequirePhoto && !hasPhotoNow)}
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
    </ModalRoot>
  );
}
