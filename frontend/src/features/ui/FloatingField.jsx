// property-manager-landlord-app/frontend/src/components/ui/FloatingField.jsx
import React from "react";
import css from "./FloatingField.module.css";

/**
 * Props: value, onChange, onBlur, label, type, name, as, options, inputProps, error, required, placeholder
 */
export default function FloatingField({
  as = "input",
  type = "text",
  name,
  value,
  onChange,
  onBlur, // ✅ accept onBlur
  label,
  options = [],
  inputProps = {},
  error,
  required,
  placeholder,
  className,
}) {
  const hasValue = value != null && String(value).length > 0;

  const wrapperClass = [css.wrap, className].filter(Boolean).join(" ");

  return (
    <div className={wrapperClass} data-has-value={hasValue || undefined}>
      {as === "select" ? (
        <select
          name={name}
          value={value ?? ""}
          onChange={onChange}
          onBlur={onBlur}
          className={css.input}
          {...inputProps}
        >
          {/* If you want a blank option so the label floats only after selection, keep an empty option */}
          <option value="" />
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
