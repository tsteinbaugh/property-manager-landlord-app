import { useState, useEffect } from "react";

import buttonStyles from "../styles/Buttons.module.css";
import styles from "../styles/SharedModal.module.css";

export default function FinancialModal({ isOpen, financial, onClose, onSave }) {
  const [formData, setFormData] = useState({
    rent: "",
    securityDeposit: "",
    petDeposit: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (financial) {
      setFormData({
        rent: String(financial.rent ?? ""),
        securityDeposit: String(financial.securityDeposit ?? ""),
        petDeposit: String(financial.petDeposit ?? ""),
      });
    }
  }, [financial]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid =
    String(formData.rent).trim() !== "" &&
    String(formData.securityDeposit).trim() !== "" &&
    String(formData.petDeposit).trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!isFormValid) return;
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modalTitle}>Edit Financials</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <FloatingField
            name="rent"
            value={formData.rent}
            onChange={handleChange}
            label="Rent"
            required
          />
          <FloatingField
            name="securityDeposit"
            value={formData.securityDeposit}
            onChange={handleChange}
            label="Security Deposit"
            required
          />
          <FloatingField
            name="petDeposit"
            value={formData.petDeposit}
            onChange={handleChange}
            label="Pet Deposit"
            required
          />

          {submitted && !isFormValid && (
            <p className={styles.validationText}>Please fill out all financial fields.</p>
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
