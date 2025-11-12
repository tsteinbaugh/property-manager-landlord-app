import styles from "./FeverLight.module.css";

/**
 * Split fever light:
 * - Left half: status color (green/yellow/orange/red/black/gray)
 * - Right half: payment color (green if fully paid, gray if not)
 *
 * Props:
 *  - color: left/status color (existing behavior)
 *  - paid: boolean -> right half green if true, gray if false
 *  - split: boolean -> if true, render split; else render single-color dot
 *  - size: number (px)
 *  - title: tooltip string
 */
export default function FeverLight({
  state = "unknown",
  color,
  paid = false,
  split = true,
  size = 14,
  title,
}) {
  const mapStateToColor = (s) => {
    switch (s) {
      case "on_time":
        return "green";
      case "late_paid":
        return "yellow";
      case "unpaid":
        return "red";
      default:
        return "gray";
    }
  };

  const left = color && styles[color] ? color : mapStateToColor(state);
  const right = paid ? "green" : "gray";

  const label =
    title ||
    (state === "on_time"
      ? "On time"
      : state === "late_paid"
        ? "Late / partial"
        : state === "unpaid"
          ? "Unpaid"
          : "Unknown");

  if (!split) {
    // classic single-color dot
    const colorClass = styles[left] || styles.gray;
    return (
      <div className={styles.wrapper} title={label} style={{ width: size, height: size }}>
        <span className={`${styles.dot} ${colorClass}`} aria-label={label} role="img" />
      </div>
    );
  }

  // split dot: two half-capsules side-by-side, clipped to a circle
  const leftClass = styles[left] || styles.gray;
  const rightClass = styles[right] || styles.gray;

  return (
    <div
      className={`${styles.wrapper} ${styles.split}`}
      title={label}
      style={{ width: size, height: size }}
      role="img"
      aria-label={label}
    >
      <span className={`${styles.half} ${styles.left} ${leftClass}`} />
      <span className={`${styles.half} ${styles.right} ${rightClass}`} />
    </div>
  );
}
