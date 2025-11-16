import { useEffect, useRef } from "react";
import Modal from "../../features/ui/modal/Modal.jsx";
import ModalHeader from "../../features/ui/modal/ModalHeader.jsx";
import ModalBody from "../../features/ui/modal/ModalBody.jsx";
import ModalFooter from "../../features/ui/modal/ModalFooter.jsx";
import styles from "../../features/ui/modal/modal.module.css";

export default function ModalRoot({
  isOpen,
  onClose,
  children,
  width,            // legacy: map to size
  submitOnEnter = true,
  title,            // optional: if present, we render a header
  footer            // optional: if present, we render a footer
}) {
  const bodyRef = useRef(null);

  // ENTER submits the first <form> inside body
  useEffect(() => {
    if (!isOpen || !submitOnEnter) return;
    function onKeyDown(e) {
      if (e.key === "Escape") return onClose?.();
      if (e.key !== "Enter") return;
      const tag = (document.activeElement?.tagName || "").toLowerCase();
      if (tag === "textarea") return;
      const form = bodyRef.current?.querySelector("form");
      if (form) form.requestSubmit ? form.requestSubmit() : form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose, submitOnEnter]);

  // simple width→size mapping (keeps your 820px wizard)
  let size = "md";
  if (width >= 960) size = "xl";
  else if (width >= 820) size = "lg";
  else if (width <= 560) size = "sm";

  return (
    <Modal isOpen={!!isOpen} onClose={onClose} size={size}>
      {title ? <ModalHeader title={title} onClose={onClose} /> : null}
      <ModalBody>
        <div ref={bodyRef} className={styles.body}>
          {children}
        </div>
      </ModalBody>
      {footer ? <ModalFooter>{footer}</ModalFooter> : null}
    </Modal>
  );
}
