// frontend/src/components/FeverLight.jsx
import React from "react";
import PropTypes from "prop-types";
import styles from "./FeverLight.module.css";

/**
 * A single circular "fever" light with hover tooltip.
 * Props:
 *  - color: "green" | "yellow" | "orange" | "red" | "black" | "gray"
 *  - label: short text shown next to the dot (e.g., "Financial")
 *  - tooltip: text shown on hover/focus explaining the state
 *  - size: px diameter (default 14)
 *  - ariaLabel: accessible label (falls back to `${label}: ${tooltip}`)
 */
export default function FeverLight({ color, label, tooltip, size = 14, ariaLabel }) {
  const style = { width: size, height: size };
  const a11y = ariaLabel || `${label}: ${tooltip}`;

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.dot} ${styles[color] || styles.gray}`}
        style={style}
        role="img"
        aria-label={a11y}
        tabIndex={0}
        data-tooltip={tooltip}
      />
      {label ? <span className={styles.text}>{label}</span> : null}
    </div>
  );
}

FeverLight.propTypes = {
  color: PropTypes.oneOf(["green", "yellow", "orange", "red", "black", "gray"]).isRequired,
  label: PropTypes.string,
  tooltip: PropTypes.string.isRequired,
  size: PropTypes.number,
  ariaLabel: PropTypes.string,
};
