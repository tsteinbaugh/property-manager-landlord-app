import React, { useEffect, useRef, useState } from "react";
import Modal from "./Modal.jsx";
import ModalHeader from "./ModalHeader.jsx";
import ModalBody from "./ModalBody.jsx";
import ModalFooter from "./ModalFooter.jsx";
import styles from "./modal.module.css"; // <- use the same styles as other modals

export default function FormModal({
  isOpen,
  onClose,
  title,
  subtitle,
  size = "md",
  submitLabel = "Save",
  cancelLabel = "Cancel",
  isSubmitting,
  onSubmit,
  disabled,
  footerExtra,
  initialFocus,
  children,
  formId, // when present, "Save/Next" will be a native submit targeting this id
  middleButtons, // optional: extra buttons rendered between Cancel and Save
}) {
  const submitBtnRef = useRef(null);
  const [internalSubmitting, setInternalSubmitting] = useState(false);

  useEffect(() => {
    if (initialFocus && initialFocus.current) return;
    if (isOpen && submitBtnRef.current) submitBtnRef.current.focus();
  }, [isOpen, initialFocus]);

  const handleSubmit = async () => {
    try {
      setInternalSubmitting(true);
      await (onSubmit && onSubmit());
    } finally {
      setInternalSubmitting(false);
    }
  };

  const loading = typeof isSubmitting === "boolean" ? isSubmitting : internalSubmitting;

  // If formId is provided, make Save/Next a submit button targeting that form
  const saveButtonProps = formId
    ? { type: "submit", form: formId }
    : { type: "button", onClick: handleSubmit };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={size}
      initialFocusRef={initialFocus || submitBtnRef}
    >
      <ModalHeader title={title} subtitle={subtitle} onClose={onClose} />
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <div className={styles.footerRow}>
          <button
            type="button"
            className={styles.btnGhost}
            onClick={onClose}
            disabled={loading}
          >
            {cancelLabel}
          </button>

          {/* middle slot (e.g., Back, Save & Create) — styled by the same css when you use styles.btnPrimary/btnGhost */}
          {middleButtons ? middleButtons : null}

          <button
            ref={submitBtnRef}
            className={styles.btnPrimary}
            disabled={loading || disabled}
            {...saveButtonProps}
          >
            {loading ? "Saving…" : submitLabel}
          </button>
        </div>
        {footerExtra}
      </ModalFooter>
    </Modal>
  );
}
