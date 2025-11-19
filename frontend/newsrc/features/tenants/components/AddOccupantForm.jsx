import React, { useState } from "react";

export default function AddOccupantForm({ onCreate }) {
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Name is required");
      return;
    }

    try {
      setSubmitting(true);
      setError(null);
      await onCreate({
        name: name.trim(),
        relation: relation.trim() || null,
      });
      setName("");
      setRelation("");
    } catch (err) {
      console.error("AddOccupantForm submit error", err);
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
        maxWidth: 420,
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: 6 }}>Add Occupant</div>

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <input
          type="text"
          placeholder="Name (required)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: 6 }}
        />
        <input
          type="text"
          placeholder="Relation (optional)"
          value={relation}
          onChange={(e) => setRelation(e.target.value)}
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
        {isSubmitting ? "Saving…" : "Save occupant"}
      </button>
    </form>
  );
}
