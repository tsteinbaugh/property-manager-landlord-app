import React, { useState } from "react";
import { apiFetch } from "@lib/apiClient.js";
import { useUser } from "@app/providers.jsx";

export default function AddPropertyForm({ onCreated, onSubmit }) {
  const { user, token } = useUser() || {};
  const [name, setName] = useState("");
  const [address1, setAddress1] = useState("");
  const [city, setCity] = useState("");
  const [state, setStateVal] = useState("CO");
  const [postalCode, setPostalCode] = useState("");
  const [isSaving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!address1 || !city || !state || !postalCode) {
      alert("Address, city, state, and postal code are required.");
      return;
    }

    const payload = {
      name: name || address1,
      address1,
      city,
      state,
      postalCode,
      landlordId: user?.id ?? null,
    };

    // If parent provided a custom onSubmit (e.g., staging for a lease),
    // use that instead of calling the API here.
    if (onSubmit) {
      onSubmit(payload);
      return;
    }

    try {
      setSaving(true);
      await apiFetch("/api/properties", {
        method: "POST",
        token,
        body: payload,
      });

      // Clear form
      setName("");
      setAddress1("");
      setCity("");
      setStateVal("CO");
      setPostalCode("");

      if (onCreated) onCreated();
    } catch (err) {
      console.error("Failed to create property", err);
      alert("Failed to create property. Check console for details.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: 12,
        padding: 8,
        border: "1px solid #e5e7eb",
        borderRadius: 8,
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        alignItems: "flex-end",
      }}
    >
      <input
        type="text"
        placeholder="Name (optional)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ minWidth: 180 }}
      />
      <input
        type="text"
        placeholder="Street address"
        value={address1}
        onChange={(e) => setAddress1(e.target.value)}
        style={{ minWidth: 220 }}
      />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ minWidth: 140 }}
      />
      <input
        type="text"
        placeholder="State"
        value={state}
        onChange={(e) => setStateVal(e.target.value)}
        style={{ width: 70 }}
      />
      <input
        type="text"
        placeholder="ZIP"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
        style={{ width: 90 }}
      />

      <button type="submit" disabled={isSaving}>
        {isSaving ? "Saving…" : "Add property"}
      </button>
    </form>
  );
}
