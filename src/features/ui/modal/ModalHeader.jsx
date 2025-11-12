import React from "react";
import styles from "./modal.module.css";

export default function ModalHeader({ title, subtitle, onClose }) {
  return (
    <div className={styles.header}>
      <div>
        <div className={styles.title}>{title}</div>
        {subtitle ? <div className={styles.subtitle}>{subtitle}</div> : null}
      </div>
      {onClose ? (
        <button className={styles.iconBtn} aria-label="Close" onClick={onClose}>✕</button>
      ) : null}
    </div>
  );
}