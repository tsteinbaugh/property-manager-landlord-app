import { useEffect, useRef } from "react";

import styles from "../../styles/SharedModal.module.css";

/**
 * Props:
 * - isOpen
 * - onClose
 * - children
 * - width (optional) -> maxWidth override
 * - submitOnEnter (default true)
 */
export default function ModalRoot({
  isOpen,
  onClose,
  children,
  width, // e.g. 820 for wide wizard
  submitOnEnter = true,
}) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(e) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose?.();
      } else if (submitOnEnter && e.key === "Enter") {
        // Don’t auto-submit if user is inside a textarea
        const tag = (document.activeElement?.tagName || "").toLowerCase();
        if (tag === "textarea") return;

        const form = contentRef.current?.querySelector("form");
        if (form) {
          // requestSubmit triggers the form’s onSubmit (supported widely)
          if (typeof form.requestSubmit === "function") form.requestSubmit();
          else
            form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
        }
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose, submitOnEnter]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={styles.modalContent}
        style={width ? { maxWidth: width } : undefined}
        onClick={(e) => e.stopPropagation()}
        ref={contentRef}
      >
        {children}
      </div>
    </div>
  );
}
