// newsrc/features/tenants/pages/LandlordAddOccupantPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import styles from "./LandlordTenantsPage.module.css";
import { occupantsApi } from "@features/tenants/api/occupants.api.js";

export default function LandlordAddOccupantPage() {
  const navigate = useNavigate();
  const { token } = useUser() || {};

  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setFormError("Name is required.");
      return;
    }

    try {
      setSubmitting(true);
      setFormError("");

      await occupantsApi.create(
        {
          name: name.trim(),
          relation: relation.trim(),
          // tenantId is intentionally omitted for now – occupants are global
        },
        { token }
      );

      navigate("/landlord/residents?tab=occupants");
    } catch (err) {
      console.error("Failed to create occupant", err);
      setFormError("Failed to create occupant. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate("/landlord/residents?tab=occupants");
  };

  const saveDisabled = isSubmitting || !name.trim();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Add occupant</h1>
          <p className={styles.subtitle}>
            Create an occupant record. You’ll be able to connect occupants to
            leases (and optionally tenants) later.
          </p>
        </div>
      </header>

      <div style={{ marginTop: 12 }}>
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: 480,
            padding: 16,
            borderRadius: 12,
            border: "1px solid #e5e7eb",
            background: "#ffffff",
          }}
        >
          {/* Name */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="name"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              Occupant name <span style={{ color: "#b91c1c" }}>*</span>
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name (required)"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {/* Relation */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="relation"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              Relation
            </label>
            <input
              id="relation"
              type="text"
              value={relation}
              onChange={(e) => setRelation(e.target.value)}
              placeholder="roommate, child, partner, etc."
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {formError && (
            <div style={{ color: "#b91c1c", fontSize: 13, marginBottom: 8 }}>
              {formError}
            </div>
          )}

          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <button
              type="submit"
              className={styles.primaryButton}
              disabled={saveDisabled}
            >
              {isSubmitting ? "Saving…" : "Save occupant"}
            </button>

            <button
              type="button"
              onClick={handleCancel}
              style={{
                borderRadius: 999,
                padding: "8px 16px",
                border: "1px solid #d1d5db",
                background: "#ffffff",
                cursor: "pointer",
              }}
              disabled={isSubmitting}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
