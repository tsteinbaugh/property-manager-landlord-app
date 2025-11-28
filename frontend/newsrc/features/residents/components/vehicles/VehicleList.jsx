import React, { useEffect, useState } from "react";
import ArchiveButton from "@shared/ui/ArchiveButton.jsx";
import { vehiclesApi } from "../../api/vehicles.api.js";

function AddvehicleForm({ onCreate, disabled }) {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");  
  const [state, setState] = useState("");  
  const [plate, setPlate] = useState("");  
  const [permit, setPermit] = useState("");  
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
        make: make.trim(),
        model: model.trim(),
        year: year.trim() || null,
        color: color.trim(),
        state: state.trim(),
        plate: plate.trim(),
        permit: permit.trim()
      });
      setMake("");
      setModel("");
      setYear("");
      setColor("");
      setState("");
      setPlate("");
      setPermit("");
    } catch (err) {
      console.error("AddvehicleForm submit error", err);
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
        maxWidth: 420,
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: 6 }}>Add vehicle</div>

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <input
          type="text"
          placeholder="Make (Honda, Toyota, Nissan, etc.)"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          style={{ padding: 6 }}
          disabled={disabled || isSubmitting}
        />
        <input
          type="text"
          placeholder="Model (Civic, Tacoma, Rouge, etc.)"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          style={{ padding: 6 }}
          disabled={disabled || isSubmitting}
        />
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          style={{ padding: 6 }}
          disabled={disabled || isSubmitting}
        />
        <input
          type="text"
          placeholder="Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{ padding: 6 }}
          disabled={disabled || isSubmitting}
        />
        <input
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
          style={{ padding: 6 }}
          disabled={disabled || isSubmitting}
        />
        <input
          type="text"
          placeholder="License Plate"
          value={plate}
          onChange={(e) => setPlate(e.target.value)}
          style={{ padding: 6 }}
          disabled={disabled || isSubmitting}
        />
        <input
          type="text"
          placeholder="Permit #"
          value={permit}
          onChange={(e) => setPermit(e.target.value)}
          style={{ padding: 6 }}
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
        {isSubmitting ? "Saving…" : "Save vehicle"}
      </button>
    </form>
  );
}

/**
 * vehicleList
 * Props:
 *   - tenantId: string (required)
 *   - includeArchived?: boolean (default false)
 *   - showAddForm?: boolean (default true)
 */
export default function vehicleList({
  tenantId,
  includeArchived = false,
  showAddForm = true,
}) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [editingId, setEditingId] = useState(null);
  const [draftMake, setDraftMake] = useState("");
  const [draftModel, setDraftModel] = useState("");
  const [draftYear, setDraftYear] = useState("");
  const [draftColor, setDraftColor] = useState("");
  const [draftState, setDraftState] = useState("");
  const [draftPlate, setDraftPlate] = useState("");
  const [draftPermit, setDraftPermit] = useState("");
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
      const rows = await vehiclesApi.list(tenantId, { includeArchived });
      setData(rows);
    } catch (e) {
      console.error("Failed to load vehicles", e);
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
    await vehiclesApi.create(tenantId, payload);
    await load();
  };

  const startEdit = (p) => {
    setEditingId(p.id);
    setDraftMake(p.make || "");
    setDraftModel(p.model || "");
    setDraftYear(
      p.year === null || p.year === undefined ? "" : String(p.year)
    );
    setDraftColor(p.color || "");
    setDraftState(p.state || "");
    setDraftPlate(p.plate || "");
    setDraftPermit(p.permit || "");
    setInlineError(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setDraftMake("");
    setDraftModel("");
    setDraftYear("");
    setDraftColor("");
    setDraftState("");
    setDraftPlate("");
    setDraftPermit("");
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
      await vehiclesApi.update(tenantId, id, {
        make: draftMake.trim(),
        model: draftModel.trim(),
        year: draftYear.trim() || null,
        color: draftColor.trim(),
        state: draftState.trim(),
        plate: draftPlate.trim(),
        permit: draftPermit.trim(),
      });
      await load();
      cancelEdit();
    } catch (err) {
      console.error("Failed to save vehicle", err);
      setInlineError(err);
    } finally {
      setSavingId(null);
    }
  };

  const handleToggleArchive = async (id) => {
    try {
      await vehiclesApi.toggleArchive(tenantId, id);
      await load();
    } catch (err) {
      console.error("Failed to toggle vehicle archive", err);
      setInlineError(err);
    }
  };

  if (!tenantId) {
    return (
      <div style={{ color: "#888" }}>
        Create a tenant first to attach vehicles.
      </div>
    );
  }

  if (isLoading) return <div>Loading vehicles…</div>;

  if (error) {
    return (
      <div style={{ color: "crimson" }}>
        Error loading vehicles: {String(error.message || error)}
      </div>
    );
  }

  return (
    <div>
      {showAddForm && (
        <AddvehicleForm onCreate={handleCreate} disabled={!tenantId} />
      )}

      {inlineError && (
        <div style={{ color: "crimson", marginBottom: 8, fontSize: 12 }}>
          {String(inlineError.message || inlineError)}
        </div>
      )}

      {data.length === 0 && (
        <div style={{ color: "#666", marginTop: 4 }}>No vehicles.</div>
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
                    maxWidth: 420,
                  }}
                >
                  <input
                    type="text"
                    value={draftMake}
                    onChange={(e) => setDraftMake(e.target.value)}
                    placeholder="Make"
                    style={{ padding: 4 }}
                  />
                  <input
                    type="text"
                    value={draftModel}
                    onChange={(e) => setDraftModel(e.target.value)}
                    placeholder="Model"
                    style={{ padding: 4 }}
                  />
                  <input
                    type="text"
                    value={draftYear}
                    onChange={(e) => setDraftYear(e.target.value)}
                    placeholder="Year"
                    style={{ padding: 4 }}
                  />
                  <input
                    type="text"
                    value={draftColor}
                    onChange={(e) => setDraftColor(e.target.value)}
                    placeholder="Color"
                    style={{ padding: 4 }}
                  />
                  <input
                    type="text"
                    value={draftState}
                    onChange={(e) => setDraftState(e.target.value)}
                    placeholder="State"
                    style={{ padding: 4 }}
                  />
                  <input
                    type="text"
                    value={draftPlate}
                    onChange={(e) => setDraftPlate(e.target.value)}
                    placeholder="Plate"
                    style={{ padding: 4 }}
                  />
                  <input
                    type="text"
                    value={draftPermit}
                    onChange={(e) => setDraftPermit(e.target.value)}
                    placeholder="Permit"
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
              {p.make && <> — {p.make}</>}
              {p.model && <> — {p.model}</>}
              {p.year && <> — {p.year}</>}
              {p.color && <> — {p.color}</>}
              {p.state && <> — {p.state}</>}
              {p.plate && <> — {p.plate}</>}
              {p.permit && <> — {p.permit}</>}
              {p.archived && (
                <span
                  style={{ marginLeft: 8, fontSize: 12, color: "#888" }}
                >
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
