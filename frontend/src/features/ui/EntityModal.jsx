import { useEffect, useState } from "react";

import ModalRoot from "./ModalRoot.jsx";
import FloatingField from "./FloatingField.jsx";

import buttons from "../../styles/Buttons.module.css";
import modalStyles from "../../styles/SharedModal.module.css";

// -- helpers -------------------------------------------------
function getAt(obj, path) {
  if (!obj || !path) return undefined;
  return path.split(".").reduce((acc, key) => {
    if (acc == null || typeof acc !== "object") return undefined;
    return acc[key];
  }, obj);
}

function setAt(obj, path, value) {
  const keys = path.split(".");
  const clone = structuredClone(obj ?? {});
  let cur = clone;
  keys.forEach((k, i) => {
    if (i === keys.length - 1) {
      cur[k] = value;
    } else {
      cur[k] = cur[k] ?? {};
      cur = cur[k];
    }
  });
  return clone;
}

function coerceValue(type, raw) {
  if (type === "number") {
    if (raw === "" || raw == null) return "";
    const n = Number(raw);
    return Number.isFinite(n) ? n : "";
  }
  return raw;
}

/**
 * EntityModal
 * @param {Object} props
 *  - isOpen, title, entity, onClose, onSave
 *  - onDelete? (optional) -> shows a left-aligned Delete action
 *  - schema: [{ key, label, type?, placeholder?, step?, options? }]
 *      type: "text" | "number" | "select" | "tel" | "email"
 *      options (for select): [{label, value}]
 */
export default function EntityModal({
  isOpen,
  title = "Edit",
  entity,
  onClose,
  onSave,
  onDelete, // <-- optional delete action
  schema = [],
}) {
  const [draft, setDraft] = useState(entity ?? {});

  useEffect(() => {
    setDraft(entity ?? {});
  }, [entity, isOpen]);

  const update = (key, value) => setDraft((d) => setAt(d, key, value));

  const handleSubmit = (e) => {
    e?.preventDefault?.();
    onSave?.(draft);
  };

  if (!isOpen) return null;

  return (
    <ModalRoot isOpen={isOpen} onClose={onClose} title={title}>
      {/* Explicit header ensures the title is always visible, even if ModalRoot title is styled minimally */}
      <div className={modalStyles.modalHeader}>
        <h3 className={modalStyles.title}>{title}</h3>
      </div>

      {/* Keep legacy containers so spacing is consistent */}
      <form onSubmit={handleSubmit} className={modalStyles.modalContent}>
        <div className={modalStyles.formBody}>
          <div className={modalStyles.formGrid}>
            {schema.map(({ key, label, type = "text", placeholder, step, options }) => {
              const value = getAt(draft, key) ?? "";

              if (type === "select") {
                return (
                  <label key={key} className={`${modalStyles.field} ${modalStyles.selectField}`}>
                    <span className={modalStyles.fieldLabel}>{label}</span>
                    <select
                      className={modalStyles.select}
                      value={value}
                      onChange={(e) => update(key, e.target.value)}
                    >
                      <option value="">—</option>
                      {options?.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </label>
                );
              }

              return (
                <div key={key} className={modalStyles.field}>
                  <FloatingField
                    label={label}
                    type={type}
                    placeholder={placeholder}
                    step={step}
                    value={value}
                    onChange={(e) => update(key, coerceValue(type, e.target.value))}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className={modalStyles.actions}>
          <div className={modalStyles.leftActions}>
            {onDelete && (
              <button
                type="button"
                onClick={onDelete}
                className={buttons.outlineDeleteButton}
              >
                Delete
              </button>
            )}
          </div>
          <div className={modalStyles.rightActions}>
            <button
              type="button"
              onClick={onClose}
              className={buttons.secondaryButton}
            >
              Cancel
            </button>
            <button type="submit" className={buttons.primaryButton}>
              Save
            </button>
          </div>
        </div>
      </form>
    </ModalRoot>
  );
}
