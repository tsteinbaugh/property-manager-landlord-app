// /home/tsteinbaugh/property-manager-landlord-app/frontend/src/features/ui/EntityModal.jsx
import { useEffect, useState } from "react";
import FloatingField from "./FloatingField.jsx";
import ModalRoot from "./ModalRoot.jsx";
import buttons from "../../styles/Buttons.module.css";
import modalStyles from "../../styles/SharedModal.module.css";

function deepClone(obj) {
  // Safe JSON clone for plain data (forms). Falls back to empty object for null/undefined.
  if (obj == null) return {};
  try {
    return JSON.parse(JSON.stringify(obj));
  } catch {
    // Extremely defensive; should never hit for our usage.
    return { ...(obj || {}) };
  }
}

function getAt(obj, path) {
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

function setAt(obj, path, value) {
  const keys = path.split(".");
  const clone = deepClone(obj ?? {});
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

/**
 * EntityModal
 * @param {Object} props
 *  - isOpen, title, entity, onClose, onSave
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
      <form onSubmit={handleSubmit} className={modalStyles.modalContent}>
        <div className={modalStyles.formBody}>
          <div className={modalStyles.formGrid}>
            {schema.map(({ key, label, type = "text", placeholder, step, options }) => {
              const value = getAt(draft, key) ?? "";

              if (type === "select") {
                return (
                  <label
                    key={key}
                    className={`${modalStyles.field} ${modalStyles.selectField}`}
                  >
                    <span>{label}</span>
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
                    onChange={(e) =>
                      update(key, type === "number" ? Number(e.target.value) : e.target.value)
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className={modalStyles.actions}>
          <div className={modalStyles.leftActions}>
            {/* Consumers can conditionally render a Delete button before Save/Cancel if needed */}
          </div>
          <div className={modalStyles.rightActions}>
            <button type="button" onClick={onClose} className={buttons.secondaryButton}>
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
