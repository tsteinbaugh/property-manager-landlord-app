import React from "react";
import styles from "./modal.module.css";

export default function ModalFooter({ children }) {
  return <div className={styles.footer}>{children}</div>;
}