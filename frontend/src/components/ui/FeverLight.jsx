// property-manager-landlord-app/frontend/src/components/ui/FeverLight.jsx
import React from "react";
import styles from "./FeverLight.module.css";

export default function FeverLight({ state = "unknown", color, size = 14, title }) {
  const mapStateToColor = (s) => {
    switch (s) {
      case "on_time": return "green";
      case "late_paid": return "yellow";
      case "unpaid": return "red";
      default: return "gray";
    }
  };

  const chosen = color && styles[color] ? color : mapStateToColor(state);
  const colorClass = styles[chosen] || styles.gray;
  const label =
    title ||
    (state === "on_time" ? "On time" :
     state === "late_paid" ? "Late / partial" :
     state === "unpaid" ? "Unpaid" : "Unknown");

  return (
    <div className={styles.wrapper} title={label} style={{ width: size, height: size }}>
      <span className={`${styles.dot} ${colorClass}`} aria-label={label} role="img" />
    </div>
  );
}
