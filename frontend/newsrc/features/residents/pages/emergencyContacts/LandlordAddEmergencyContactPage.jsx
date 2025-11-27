// newsrc/features/tenants/pages/LandlordAddEmergencyContactPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import styles from "../tenants/LandlordTenantsPage.module.css";
import { emergencyContactsApi } from "@features/residents/api/emergencyContacts.api.js";

export default function LandlordAddEmergencyContactPage() {
  const navigate = useNavigate();
  const { token } = useUser() || {};

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [relation, setRelation] = useState("");
  const [email, setEmail] = useState("");
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

      await emergencyContactsApi.create(
        {
          name: name.trim(),
          phone: phone.trim(),
          relation: relation.trim(),
          email: email.trim(),
          // tenantId is intentionally omitted for now – emergency contacts are global
        },
        { token }
      );

      navigate("/landlord/residents?tab=emergencyContacts");
    } catch (err) {
      console.error("Failed to create emergency contact", err);
      setFormError("Failed to create emergency contact. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate("/landlord/residents?tab=emergencyContacts");
  };

  const saveDisabled = isSubmitting || !name.trim();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Add emergency contact</h1>
          <p className={styles.subtitle}>
            Create an emergency contact record. You’ll be able to connect emergency contacts to
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
              Emergency contact name <span style={{ color: "#b91c1c" }}>*</span>
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

          {/* Phone */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="phone"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              Phone
            </label>
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="phone number"
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

          {/* Email */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="email"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
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
              {isSubmitting ? "Saving…" : "Save emergency contact"}
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
