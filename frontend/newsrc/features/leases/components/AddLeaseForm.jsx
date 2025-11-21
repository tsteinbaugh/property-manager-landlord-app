import React, { useState } from "react";

const BASE_URL = "http://localhost:4000";

export default function AddLeaseForm({ onCreated, tenants = [], properties = [] }) {
  const [tenantId, setTenantId] = useState("");
  const [tenantName, setTenantName] = useState("");
  const [propertyId, setPropertyId] = useState("");
  const [propertyLabel, setPropertyLabel] = useState("");
  const [rentAmount, setRentAmount] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [file, setFile] = useState(null);
  const [isSubmitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!tenantId) {
      alert("Please select a tenant.");
      return;
    }
    if (!propertyId) {
      alert("Please select a property.");
      return;
    }
    if (!file) {
      alert("Please select a lease file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("tenantId", tenantId);
    formData.append("propertyId", propertyId);

    if (tenantName.trim()) {
      formData.append("tenantName", tenantName.trim());
    }
    if (propertyLabel.trim()) {
      formData.append("propertyLabel", propertyLabel.trim());
    }
    if (rentAmount.trim()) {
      formData.append("rentAmount", rentAmount.trim());
    }
    if (startDate) {
      formData.append("startDate", startDate);
    }
    if (endDate) {
      formData.append("endDate", endDate);
    }
    formData.append("file", file);

    try {
      setSubmitting(true);
      setError(null);

      const res = await fetch(`${BASE_URL}/api/leases`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(
          `Failed to create lease: HTTP ${res.status} ${res.statusText} - ${text}`
        );
      }

      const lease = await res.json().catch(() => null);

      // clear form
      setTenantId("");
      setTenantName("");
      setPropertyId("");
      setPropertyLabel("");
      setRentAmount("");
      setStartDate("");
      setEndDate("");
      setFile(null);

      if (onCreated) {
        await onCreated(lease);
      }
    } catch (err) {
      console.error("AddLeaseForm submit error", err);
      setError(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: 12,
        padding: 8,
        borderRadius: 6,
        border: "1px solid #e5e7eb",
        maxWidth: 520,
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: 6 }}>Add Lease</div>

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {/* REQUIRED: Assign to tenant */}
        <select
          value={tenantId}
          onChange={(e) => setTenantId(e.target.value)}
          style={{ padding: 6 }}
        >
          <option value="">Assign to tenant (required)</option>
          {tenants.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name} ({t.id.slice(0, 6)})
            </option>
          ))}
        </select>

        {/* OPTIONAL: tenant label */}
        <input
          type="text"
          placeholder="Tenant label (text on lease, optional)"
          value={tenantName}
          onChange={(e) => setTenantName(e.target.value)}
          style={{ padding: 6 }}
        />

        {/* REQUIRED: Assign to property */}
        <select
          value={propertyId}
          onChange={(e) => setPropertyId(e.target.value)}
          style={{ padding: 6 }}
        >
          <option value="">Assign to property (required)</option>
          {properties.map((p) => (
            <option key={p.id} value={p.id}>
              {(p.name || p.address1) ?? p.id} ({p.id.slice(0, 6)})
            </option>
          ))}
        </select>

        {/* OPTIONAL: property label */}
        <input
          type="text"
          placeholder="Property label (text on lease, optional)"
          value={propertyLabel}
          onChange={(e) => setPropertyLabel(e.target.value)}
          style={{ padding: 6 }}
        />

        <input
          type="number"
          placeholder="Rent amount (optional)"
          value={rentAmount}
          onChange={(e) => setRentAmount(e.target.value)}
          style={{ padding: 6 }}
        />

        <label style={{ fontSize: 12 }}>
          Start date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            style={{ padding: 4, marginLeft: 4 }}
          />
        </label>

        <label style={{ fontSize: 12 }}>
          End date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            style={{ padding: 4, marginLeft: 4 }}
          />
        </label>

        <input
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          style={{ padding: 6 }}
        />
      </div>

      {error && (
        <div style={{ color: "crimson", marginTop: 4, fontSize: 12 }}>
          {String(error.message || error)}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        style={{ marginTop: 8, padding: "4px 10px" }}
      >
        {isSubmitting ? "Uploading…" : "Save lease"}
      </button>
    </form>
  );
}
