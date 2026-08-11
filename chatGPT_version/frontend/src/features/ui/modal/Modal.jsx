import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./modal.module.css";

function stop(e) { e.stopPropagation(); }

export default function Modal({
  isOpen,
  onClose,
  children,
  size = "sm",
  intent = "default",
  closeOnBackdrop = true,
  closeOnEsc = true,
  ariaLabel,
  initialFocusRef,
  testId,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const docEl = document.documentElement;
    const body = document.body;
    const scrollBarWidth = window.innerWidth - docEl.clientWidth; // 0 if none

    const prevOverflow = body.style.overflow;
    const prevPaddingRight = body.style.paddingRight;

    body.style.overflow = "hidden";
    if (scrollBarWidth > 0) {
      // add right padding so content doesn't shift and margins look identical
      body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPaddingRight;
    };
  }, [isOpen]);  

  useEffect(() => {
    if (!isOpen || !closeOnEsc) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeOnEsc, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const container = containerRef.current;
    const focusables = container?.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const first = (initialFocusRef && initialFocusRef.current) || focusables?.[0];
    const last = focusables?.[focusables.length - 1];

    const handleTab = (e) => {
      if (e.key !== "Tab" || !first || !last) return;
      const active = document.activeElement;
      if (e.shiftKey) {
        if (active === first) { e.preventDefault(); last.focus(); }
      } else {
        if (active === last) { e.preventDefault(); first.focus(); }
      }
    };

    first && first.focus && first.focus();
    window.addEventListener("keydown", handleTab);
    return () => window.removeEventListener("keydown", handleTab);
  }, [isOpen, initialFocusRef]);

  if (typeof document === "undefined") return null;

  const sizeClass = styles[size] || styles.md;
  const intentKey =
    intent === "destructive" ? "intentDestructive" :
    intent === "success" ? "intentSuccess" :
    intent === "warning" ? "intentWarning" :
    "intentDefault";

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onMouseDown={() => closeOnBackdrop && onClose()}
          data-testid={testId ? `${testId}-overlay` : undefined}
        >
          <motion.div
            className={`${styles.modal} ${sizeClass} ${styles[intentKey]}`}
            role="dialog"
            aria-modal="true"
            aria-label={ariaLabel}
            onMouseDown={stop}
            ref={containerRef}
            initial={{ y: 16, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 10, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            data-testid={testId}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}