import css from "./FloatingField.module.css";

/**
 * Perfectly matched FloatingSelect
 * Uses same FloatingField CSS + spacing patch for select elements.
 */
export default function FloatingSelect({
  name,
  label,
  value,
  onChange,
  onBlur,
  required,
  disabled,
  options = [],
  placeholder = true,
  className,
  error,
  inputProps = {},
}) {
  const hasValue = value != null && String(value).length > 0;
  const wrapperClass = [css.wrap, className].filter(Boolean).join(" ");

  return (
    <div className={wrapperClass} data-has-value={hasValue || undefined}>
      <select
        name={name}
        value={value ?? ""}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        disabled={disabled}
        className={`${css.input} ${css.selectFix}`}
        {...inputProps}
      >
        {placeholder ? <option value="" /> : null}
        {options.map((opt) => {
          const val = typeof opt === "string" ? opt : opt.value;
          const lab = typeof opt === "string" ? opt : opt.label;
          return (
            <option key={val} value={val}>
              {lab}
            </option>
          );
        })}
      </select>

      <label className={css.label}>{label}</label>

      {error ? <div className={css.error}>{error}</div> : null}
    </div>
  );
}
