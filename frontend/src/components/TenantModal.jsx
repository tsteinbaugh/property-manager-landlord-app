import { useState, useEffect, useRef } from "react";
import styles from "../features/ui/modal/modal.module.css";
import FormModal from "../features/ui/modal/FormModal.jsx";
import FloatingField from "./ui/FloatingField.jsx";

const FORM_ID = "tenant-form";

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
  const formRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!tenant) {
      setFormData({ name: "", age: "", occupation: "", contact: { phone: "", email: "" }, photoIdName: null, photoIdDataUrl: null });
      setPhotoIdPreview(null); setPhotoIdFile(null); return;
    }
    setFormData({
      name: String(tenant.name ?? ""),
      age: String(tenant.age ?? ""),
      occupation: String(tenant.occupation ?? ""),
      contact: { phone: String(tenant?.contact?.phone ?? ""), email: String(tenant?.contact?.email ?? "") },
      photoIdName: tenant.photoIdName || null,
      photoIdDataUrl: tenant.photoIdDataUrl || null,
    });
    setPhotoIdPreview(tenant.photoIdDataUrl || null);
    setPhotoIdFile(null);
  }, [tenant]);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "phone" || name === "email") {
      setFormData((prev) => ({ ...prev, contact: { ...(prev.contact || {}), [name]: String(value ?? "") } }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: String(value ?? "") }));
    }
  }

  const emailStr = String(formData.contact?.email ?? "");
  const phoneStr = String(formData.contact?.phone ?? "");
  const nameStr = String(formData.name ?? "");
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const emailOk = EMAIL_REGEX.test(emailStr.trim());
  const basicsOk = nameStr.trim() !== "" && phoneStr.trim() !== "" && emailOk;

  const tenantHasExistingPhoto = Boolean(tenant?.photoIdDataUrl || tenant?.photoIdName);
  const hasPhotoNow = Boolean(photoIdFile || photoIdPreview || formData.photoIdDataUrl);
  const mustRequirePhoto = !tenant || !tenantHasExistingPhoto;

  function onChoosePhotoId(e) {
    const file = e.target.files?.[0] || null;
    setPhotoIdFile(file);
    if (!file) { setPhotoIdPreview(null); return; }
    const reader = new window.FileReader();
    reader.onload = () => setPhotoIdPreview(reader.result);
    reader.readAsDataURL(file);
  }

  async function handleSave() {
    if (!focusFirstInvalid(formRef.current)) return;
    onSave?.({
      name: nameStr.trim(),
      age: String(formData.age ?? "").trim(),
      occupation: String(formData.occupation ?? "").trim(),
      contact: { phone: phoneStr.trim(), email: emailStr.trim() },
      photoIdName: photoIdFile?.name || formData.photoIdName || null,
      photoIdDataUrl: photoIdPreview || formData.photoIdDataUrl || null,
    });
  }

function focusFirstInvalid(formEl) {
  if (!formEl) return false;
  // This triggers built-in messages and returns false if any are invalid
  const ok = formEl.reportValidity();
  if (ok) return true;
  const firstInvalid = formEl.querySelector(":invalid");
  if (firstInvalid) {
    firstInvalid.focus({ preventScroll: false });
    firstInvalid.scrollIntoView({ block: "center", behavior: "smooth" });
  }
  return false;
}


  return (
    <FormModal
      isOpen={!!isOpen}
      onClose={onClose}
      title={title}
      size="sm"
      submitLabel="Save"
      cancelLabel="Cancel"
      onSubmit={handleSave}
      disabled={!basicsOk || (mustRequirePhoto && !hasPhotoNow)}
      formId={FORM_ID}
    >
      <form
        id={FORM_ID}
        ref={formRef}
        onSubmit={(e) => { e.preventDefault(); handleSave(); }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const tag = e.target.tagName;
            const type = (e.target.type || "").toLowerCase();
            const isButtonLike = tag === "BUTTON" || (tag === "INPUT" && (type === "submit" || type === "button"));
            if (tag !== "TEXTAREA" && !isButtonLike) {
              e.preventDefault();
              handleSave();
            }
          }
        }}
        className={styles.form}
      >
        {/* Hidden submit so Enter always has an in-form target */}
        <button type="submit" style={{ display: "none" }} aria-hidden="true" />

        <div className={styles.fieldWrap}>
          <FloatingField name="name" label="Name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className={styles.fieldWrap}>
          <FloatingField name="age" label="Age" value={formData.age} onChange={handleChange} />
        </div>
        <div className={styles.fieldWrap}>
          <FloatingField name="occupation" label="Occupation" value={formData.occupation} onChange={handleChange} />
        </div>
        <div className={styles.fieldWrap}>
          <FloatingField name="phone" label="Phone" value={formData.contact?.phone || ""} onChange={handleChange} required />
        </div>
        <div className={styles.fieldWrap}>
          <FloatingField name="email" type="email" label="Email" value={formData.contact?.email || ""} onChange={handleChange} required />
        </div>
        <div className={styles.fieldWrap} style={{ marginTop: 6 }}>
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
              {String(photoIdPreview || formData.photoIdDataUrl).startsWith("data:image/") ? (
                <img src={photoIdPreview || formData.photoIdDataUrl} alt="Photo ID" style={{ maxWidth: 240, border: "1px solid #ddd" }} />
              ) : (
                <a href={photoIdPreview || formData.photoIdDataUrl} target="_blank" rel="noreferrer">View Photo ID</a>
              )}
            </div>
          )}
        </div>
      </form>
    </FormModal>
  );
}