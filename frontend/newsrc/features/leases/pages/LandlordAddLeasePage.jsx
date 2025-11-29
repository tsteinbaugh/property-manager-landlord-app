// newsrc/features/tenants/pages/LandlordAddLeasePage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import styles from "@features/residents/pages/tenants/LandlordTenantsPage.module.css";
import { leasesApi } from "@features/leases/api/leases.api.js";

export default function LandlordAddLeasePage() {
  const navigate = useNavigate();
  const { token } = useUser() || {};

  const [rentAmount, setRentAmount] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [file, setFile] = useState(null);
  const [isSubmitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const rawRentAmount = rentAmount.trim();
    let normalizedRentAmount = null;

    if (rawRentAmount) {
      const parsed = Number(rawRentAmount);
      if (Number.isNaN(parsed) || parsed < 0) {
        setFormError("Rent amount must be a positive number.");
        return;
      }
      normalizedRentAmount = parsed;
    }
  
    try {
      setSubmitting(true);
      setFormError("");
    
      // 1) Create the lease record (JSON only)
      const created = await leasesApi.create(
        {
          rentAmount: normalizedRentAmount,
          status: status.trim(),
          startDate: startDate.trim(),
          endDate: endDate.trim(),
          // tenantId is intentionally omitted for now – leases are global
        },
        { token }
      );
    
      // 2) If we have a file, upload it against the created lease
      if (file && created && created.id) {
        await leasesApi.uploadFile(created.id, file, { token });
      }
    
      navigate("/landlord/leases");
    } catch (err) {
      console.error("Failed to create lease", err);
      setFormError("Failed to create lease. Check console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate("/landlord/leases");
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Add lease</h1>
          <p className={styles.subtitle}>
            Create a lease record. You’ll be able to connect leases to
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
          {/* Rent Amount */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="rentAmount"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              Rent amount <span style={{ color: "#b91c1c" }}>*</span>
            </label>
            <input
              id="rentAmount"
              type="number"
              value={rentAmount}
              onChange={(e) => setRentAmount(e.target.value)}
              placeholder="Rent amount"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {/* Status */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="status"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              Status
            </label>
            <input
              id="status"
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              placeholder="status"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {/* Start Date */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="startDate"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              Start Date
            </label>
            <input
              id="startDate"
              type="text"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="Start date"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {/* End Date */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="endDate"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              End Date
            </label>
            <input
              id="endDate"
              type="text"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="End date"
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
              }}
              disabled={isSubmitting}
            />
          </div>

          {/* Lease file (optional) */}
          <div style={{ marginBottom: 12 }}>
            <label
              htmlFor="leaseFile"
              style={{ display: "block", fontWeight: 500, marginBottom: 4 }}
            >
              Lease file
            </label>
            <input
              id="leaseFile"
              type="file"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              onChange={(e) => {
                const selected = e.target.files && e.target.files[0];
                setFile(selected || null);
              }}
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
                background: "#f9fafb",
              }}
              disabled={isSubmitting}
            />
            {file && (
              <div style={{ marginTop: 4, fontSize: 12, color: "#4b5563" }}>
                Selected: {file.name}
              </div>
            )}
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
              {isSubmitting ? "Saving…" : "Save lease"}
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
