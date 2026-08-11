import React, { useRef, useEffect } from "react";
import Modal from "../../features/ui/modal/Modal.jsx";
import ModalHeader from "../../features/ui/modal/ModalHeader.jsx";
import ModalBody from "../../features/ui/modal/ModalBody.jsx";
import ModalFooter from "../../features/ui/modal/ModalFooter.jsx";
import styles from "../../features/ui/modal/modal.module.css";
import FloatingField from "../ui/FloatingField";

export default function EditFinancialModal({
  isOpen,
  onClose,
  initialData = {},
  onSave,
}) {
  const formRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    // focus first field when modal opens
    const firstInput = formRef.current?.querySelector("input, select, textarea");
    if (firstInput) firstInput.focus();
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formEl = formRef.current;
    const ok = formEl?.reportValidity?.() ?? true;
    if (!ok) return;

    const fd = new FormData(formEl);
    const data = Object.fromEntries(fd.entries());
    onSave?.(data);
    onClose?.();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalHeader title="Edit Financials" onClose={onClose} />
      <ModalBody>
        <form ref={formRef} id="financial-form" onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.fieldWrap}>
            <FloatingField
              name="rent"
              label="Monthly Rent"
              type="number"
              min="0"
              defaultValue={initialData.rent || ""}
              required
            />
          </div>

          <div className={styles.fieldWrap}>
            <FloatingField
              name="deposit"
              label="Security Deposit"
              type="number"
              min="0"
              defaultValue={initialData.deposit || ""}
              required
            />
          </div>

          <div className={styles.fieldWrap}>
            <FloatingField
              name="dueDate"
              label="Payment Due Date"
              type="text"
              defaultValue={initialData.dueDate || ""}
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <div className={styles.footerRow}>
          <button
            type="button"
            className={styles.btnGhost}
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            form="financial-form"
            className={styles.btnPrimary}
          >
            Save
          </button>
        </div>
      </ModalFooter>
    </Modal>
  );
}
