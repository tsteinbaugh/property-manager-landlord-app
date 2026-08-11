// frontend/src/components/ui/FloatingField.jsx
import css from "./FloatingField.module.css";

/**
 * Props: value, onChange, onBlur, label, type, name, as, options, inputProps,
 * error, required, placeholder, className, blankOption
 */
export default function FloatingField({
  as = "input",
  type = "text",
  name,
  value,
  onChange,
  onBlur,
  label,
  options = [],
  inputProps = {},
  error,
  required,
  placeholder,
  className,
  blankOption = true, // control auto blank option
}) {
  const hasValue = value != null && String(value).length > 0;
  const wrapperClass = [css.wrap, className].filter(Boolean).join(" ");

  // If caller already provides a blank option, don't add another
  const callerHasBlank =
    Array.isArray(options) && options.some((opt) => (opt?.value ?? opt) === "");

  return (
    <div className={wrapperClass} data-has-value={hasValue || undefined}>
      {as === "select" ? (
        <select
          name={name}
          value={value ?? ""}
          onChange={onChange}
          onBlur={onBlur}
          className={css.input}
          required={required}
          aria-required={required || undefined}
          onKeyDown={(e) => {
            // Allow up/down to change value without opening native menu
            if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
            e.preventDefault();
            const el = e.currentTarget;
            const dir = e.key === "ArrowDown" ? 1 : -1;
            const opts = el.options;
            let idx = el.selectedIndex < 0 ? 0 : el.selectedIndex;
            const next = Math.max(0, Math.min(opts.length - 1, idx + dir));
            if (next === idx) return;
            const nextVal = opts[next].value;
            onChange?.({ target: { name, value: nextVal } });
          }}
          {...inputProps}
        >
          {/* Only add our blank when caller didn't supply one */}
          {blankOption && !callerHasBlank ? <option value="" /> : null}
          {options.map((opt) => (
            <option key={opt.value ?? opt} value={opt.value ?? opt}>
              {opt.label ?? opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          name={name}
          type={type}
          value={value ?? ""}
          onChange={onChange}
          onBlur={onBlur}
          className={css.input}
          placeholder={placeholder}
          required={required}
          {...inputProps}
        />
      )}

      <label className={css.label}>{label}</label>
      {error ? <div className={css.error}>{error}</div> : null}
    </div>
  );
}
