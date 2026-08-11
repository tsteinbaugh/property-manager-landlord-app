import React from "react";
import styles from "./modal.module.css";

export default function ModalBody({ children }) {
  return <div className={styles.body}>{children}</div>;
}