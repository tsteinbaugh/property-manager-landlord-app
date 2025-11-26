import React, { useEffect, useState } from "react";
import ArchiveButton from "@shared/ui/ArchiveButton.jsx";
import { petsApi } from "../../api/pets.api.js";

function AddPetForm({ onCreate, disabled }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [breed, setBreed] = useState("");
  const [weightLb, setWeightLb] = useState("");
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
        type: type.trim() || null,
        breed: breed.trim() || null,
        weightLb: weightLb.trim() || null,
      });
      setName("");
      setType("");
      setBreed("");
      setWeightLb("");
    } catch (err) {
      console.error("AddPetForm submit error", err);
      setError(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: 8,
        padding: 8,
        borderRadius: 6,
        border: "1px solid #e5e7eb",
        maxWidth: 600,
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: 6 }}>Add pet</div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
        }}
      >
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: 6, minWidth: 140 }}
          disabled={disabled || isSubmitting}
        />
        <input
          type="text"
          placeholder="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{ padding: 6, minWidth: 120 }}
          disabled={disabled || isSubmitting}
        />
        <input
          type="text"
          placeholder="breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          style={{ padding: 6, minWidth: 140 }}
          disabled={disabled || isSubmitting}
        />
        <input
          type="number"
          placeholder="weight (lbs)"
          value={weightLb}
          onChange={(e) => setWeightLb(e.target.value)}
          style={{ padding: 6, width: 120 }}
          disabled={disabled || isSubmitting}
        />
      </div>

      {error && (
        <div style={{ color: "crimson", marginTop: 4, fontSize: 12 }}>
          {String(error.message || error)}
        </div>
      )}

      <button
        type="submit"
        disabled={disabled || isSubmitting}
        style={{ marginTop: 8, padding: "4px 10px" }}
      >
        {isSubmitting ? "Saving…" : "Add"}
      </button>
    </form>
  );
}

/**
 * PetsList
 * Props:
 *   - tenantId: string (required)
 *   - includeArchived?: boolean (default false)
 *   - showAddForm?: boolean (default true)
 */
export default function PetsList({
  tenantId,
  includeArchived = false,
  showAddForm = true,
}) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [editingId, setEditingId] = useState(null);
  const [draftName, setDraftName] = useState("");
  const [draftType, setDraftType] = useState("");
  const [draftBreed, setDraftBreed] = useState("");
  const [draftWeight, setDraftWeight] = useState("");
  const [savingId, setSavingId] = useState(null);
  const [inlineError, setInlineError] = useState(null);

  const load = async () => {
    if (!tenantId) {
      setData([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const rows = await petsApi.list(tenantId, { includeArchived });
      setData(rows);
    } catch (e) {
      console.error("Failed to load pets", e);
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tenantId, includeArchived]);

  const handleCreate = async (payload) => {
    await petsApi.create(tenantId, payload);
    await load();
  };

  const startEdit = (p) => {
    setEditingId(p.id);
    setDraftName(p.name || "");
    setDraftType(p.type || "");
    setDraftBreed(p.breed || "");
    setDraftWeight(
      p.weightLb !== null && p.weightLb !== undefined ? String(p.weightLb) : ""
    );
    setInlineError(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setDraftName("");
    setDraftType("");
    setDraftBreed("");
    setDraftWeight("");
    setInlineError(null);
  };

  const saveEdit = async (id) => {
    if (!draftName.trim()) {
      setInlineError(new Error("Name is required"));
      return;
    }

    try {
      setSavingId(id);
      setInlineError(null);
      await petsApi.update(tenantId, id, {
        name: draftName.trim(),
        type: draftType.trim(),
        breed: draftBreed.trim(),
        weightLb: draftWeight.trim(),
      });
      await load();
      cancelEdit();
    } catch (err) {
      console.error("Failed to save pet", err);
      setInlineError(err);
    } finally {
      setSavingId(null);
    }
  };

  const handleToggleArchive = async (id) => {
    try {
      await petsApi.toggleArchive(tenantId, id);
      await load();
    } catch (err) {
      console.error("Failed to toggle pet archive", err);
      setInlineError(err);
    }
  };

  if (!tenantId) {
    return (
      <div style={{ color: "#888" }}>
        Create a tenant first to attach pets.
      </div>
    );
  }

  if (isLoading) return <div>Loading pets…</div>;

  if (error) {
    return (
      <div style={{ color: "crimson" }}>
        Error loading pets: {String(error.message || error)}
      </div>
    );
  }

  return (
    <div>
      {showAddForm && (
        <AddPetForm onCreate={handleCreate} disabled={!tenantId} />
      )}

      {inlineError && (
        <div style={{ color: "crimson", marginBottom: 8, fontSize: 12 }}>
          {String(inlineError.message || inlineError)}
        </div>
      )}

      {data.length === 0 && (
        <div style={{ color: "#666", marginTop: 4 }}>No pets.</div>
      )}

      <ul style={{ paddingLeft: 16, lineHeight: 1.7 }}>
        {data.map((p) => {
          const isEditing = editingId === p.id;
          const isSaving = savingId === p.id;

          if (isEditing) {
            return (
              <li key={p.id} style={{ opacity: p.archived ? 0.6 : 1 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    maxWidth: 600,
                  }}
                >
                  <input
                    type="text"
                    value={draftName}
                    onChange={(e) => setDraftName(e.target.value)}
                    placeholder="Name"
                    style={{ padding: 4 }}
                  />
                  <input
                    type="text"
                    value={draftType}
                    onChange={(e) => setDraftType(e.target.value)}
                    placeholder="Type"
                    style={{ padding: 4 }}
                  />
                  <input
                    type="text"
                    value={draftBreed}
                    onChange={(e) => setDraftBreed(e.target.value)}
                    placeholder="Breed"
                    style={{ padding: 4 }}
                  />
                  <input
                    type="number"
                    value={draftWeight}
                    onChange={(e) => setDraftWeight(e.target.value)}
                    placeholder="Weight (lbs)"
                    style={{ padding: 4 }}
                  />
                  <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
                    <button
                      type="button"
                      onClick={() => saveEdit(p.id)}
                      disabled={isSaving}
                    >
                      {isSaving ? "Saving…" : "Save"}
                    </button>
                    <button
                      type="button"
                      onClick={cancelEdit}
                      disabled={isSaving}
                    >
                      Cancel
                    </button>
                    <ArchiveButton
                      archived={p.archived}
                      onToggle={() => handleToggleArchive(p.id)}
                    />
                  </div>
                </div>
              </li>
            );
          }

          return (
            <li key={p.id} style={{ opacity: p.archived ? 0.6 : 1 }}>
              <strong>{p.name}</strong>
              {p.type && <> — {p.type}</>}
              {p.breed && <> ({p.breed})</>}
              {p.weightLb != null && <> — {p.weightLb} lbs</>}
              {p.archived && (
                <span style={{ marginLeft: 8, fontSize: 12, color: "#888" }}>
                  (Archived)
                </span>
              )}

              <button
                type="button"
                style={{ marginLeft: 8 }}
                onClick={() => startEdit(p)}
              >
                Edit
              </button>

              <ArchiveButton
                archived={p.archived}
                onToggle={() => handleToggleArchive(p.id)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
