// newsrc/features/tenants/pages/LandlordAddVehiclePage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import styles from "../tenants/LandlordTenantsPage.module.css";
import { vehiclesApi } from "@features/residents/api/vehicles.api.js";

export default function LandlordAddVehiclePage() {
  const navigate = useNavigate();
  const { token } = useUser() || {};

  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [state, setState] = useState("");
  const [plate, setPlate] = useState("");
  const [permit, setPermit] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const rawYear = year.trim();
    let normalizedYear = null;

    if (rawYear) {
      const parsed = Number(rawYear);
      if (Number.isNaN(parsed) || parsed < 0) {
        setFormError("Year must be a positive number.");
        return;
      }
      normalizedYear = parsed;
    }

    try {
      setSubmitting(true);
      setFormError("");

      await vehiclesApi.create(
        {
          make: make.trim(),
          model: model.trim(),
          year: normalizedYear,
          color: color.trim(),
          state: state.trim(),
          plate: plate.trim(),
          permit: permit.trim(),
        },
        { token }
      );

      navigate("/landlord/residents?tab=vehicles");
    } catch (err) {
      console.error("Failed to create vehicle", err);
      setFormError("Failed to create vehicle. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate("/landlord/residents?tab=vehicles");
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Add vehicle</h1>
          <p className={styles.subtitle}>
            Create a vehicle record. You’ll be able to connect vehicles to
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
          {/* Make */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="make"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              Vehicle make <span style={{ color: "#b91c1c" }}>*</span>
            </label>
            <input
              id="make"
              type="text"
              value={make}
              onChange={(e) => setMake(e.target.value)}
              placeholder="Make (Honda, Toyota, Nissan, etc.)"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {/* Model*/}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="model"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              Model
            </label>
            <input
              id="model"
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="Model (Civic, Tacoma, Rouge, etc."
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {/* Year */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="year"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              Year
            </label>
            <input
              id="year"
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Year"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {/* Color */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="color"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              Color
            </label>
            <input
              id="color"
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="Color"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {/* State */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="state"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              State
            </label>
            <input
              id="state"
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="state"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {/* Plate */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="plate"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              Plate
            </label>
            <input
              id="plate"
              type="text"
              value={plate}
              onChange={(e) => setPlate(e.target.value)}
              placeholder="License Plate"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {/* Permit */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="permit"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              Permit
            </label>
            <input
              id="permit"
              type="text"
              value={permit}
              onChange={(e) => setPermit(e.target.value)}
              placeholder="Permit #"
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
            >
              {isSubmitting ? "Saving…" : "Save vehicle"}
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
