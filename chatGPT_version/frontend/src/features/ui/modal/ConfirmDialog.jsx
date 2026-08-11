import React, { useRef } from "react";
import Modal from "./Modal";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import styles from "./modal.module.css";

export default function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title = "Are you sure?",
  message = "This action cannot be undone.",
  confirmText = "Confirm",
  cancelText = "Cancel",
  intent = "destructive",
}) {
  const confirmRef = useRef(null);
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm" intent={intent} initialFocusRef={confirmRef}>
      <ModalHeader title={title} onClose={onClose} />
      <ModalBody>
        <p className={styles.message}>{message}</p>
      </ModalBody>
      <ModalFooter>
        <div className={styles.footerRow}>
          <button className={styles.btnGhost} type="button" onClick={onClose}>{cancelText}</button>
          <button ref={confirmRef} className={styles.btnPrimary} type="button" onClick={onConfirm}>{confirmText}</button>
        </div>
      </ModalFooter>
    </Modal>
  );
}