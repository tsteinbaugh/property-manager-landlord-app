// newsrc/features/tenants/pages/LandlordAddPetPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import styles from "../tenants/LandlordTenantsPage.module.css";
import { petsApi } from "@features/residents/api/pets.api.js";

export default function LandlordAddPetPage() {
  const navigate = useNavigate();
  const { token } = useUser() || {};

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [breed, setBreed] = useState("");
  const [weightLb, setWeightLb] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setFormError("Name is required.");
      return;
    }

     const rawWeight = weightLb.trim();
    let normalizedWeight = null;

    if (rawWeight) {
      const parsed = Number(rawWeight);
      if (Number.isNaN(parsed) || parsed < 0) {
        setFormError("Weight must be a positive number.");
        return;
      }
      normalizedWeight = parsed;
    }

    try {
      setSubmitting(true);
      setFormError("");

      await petsApi.create(
        {
          name: name.trim(),
          type: type.trim(),
          breed: breed.trim(),
          weightLb: normalizedWeight,
        },
        { token }
      );

      navigate("/landlord/residents?tab=pets");
    } catch (err) {
      console.error("Failed to create pet", err);
      setFormError("Failed to create pet. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate("/landlord/residents?tab=pets");
  };

  const saveDisabled = isSubmitting || !name.trim();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Add pet</h1>
          <p className={styles.subtitle}>
            Create an pet record. You’ll be able to connect pets to
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
              Pet name <span style={{ color: "#b91c1c" }}>*</span>
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

          {/* Type*/}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="type"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              Type
            </label>
            <input
              id="type"
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              placeholder="dog, cat, bird, etc."
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {/* Breed */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="breed"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              Breed
            </label>
            <input
              id="breed"
              type="text"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              placeholder="poodle, boxer, etc."
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {/* WeightLb */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="weightLb"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              Weight (Lb)
            </label>
            <input
              id="weightLb"
              type="number"
              value={weightLb}
              onChange={(e) => setWeightLb(e.target.value)}
              placeholder="(Lb)"
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
              {isSubmitting ? "Saving…" : "Save pet"}
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
