import React, { useEffect, useState } from "react";
import ArchiveButton from "@shared/ui/ArchiveButton.jsx";
import { leasesApi } from "../api/leases.api.js";

function AddLeaseForm({ onCreate, disabled }) {
  const [rentAmount, setRentAmount] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      setError(null);
      await onCreate({
        rentAmount: rentAmount.trim(),
        status: status.trim(),
        startDate: startDate.trim(),
        endDate: endDate.trim(),
      });
      setRentAmount("");
      setStatus("");
      setStartDate("");
      setEndDate("");
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
        marginBottom: 8,
        padding: 8,
        borderRadius: 6,
        border: "1px solid #e5e7eb",
        maxWidth: 420,
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: 6 }}>Add Lease</div>

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <input
          type="number"
          placeholder="Rent amount"
          value={rentAmount}
          onChange={(e) => setRentAmount(e.target.value)}
          style={{ padding: 6 }}
          disabled={disabled || isSubmitting}
        />
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{ padding: 6 }}
          disabled={disabled || isSubmitting}
        />
        <input
          type="text"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={{ padding: 6 }}
          disabled={disabled || isSubmitting}
        />
        <input
          type="text"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
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
        {isSubmitting ? "Saving…" : "Save lease"}
      </button>
    </form>
  );
}

/**
 * LeaseList
 * Props:
 *   - tenantId: string (required)
 *   - includeArchived?: boolean (default false)
 *   - showAddForm?: boolean (default true)
 */
export default function LeaseList({
  tenantId,
  includeArchived = false,
  showAddForm = true,
}) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [editingId, setEditingId] = useState(null);
  const [draftRentAmount, setDraftRentAmount] = useState("");
  const [draftStatus, setDraftStatus] = useState("");
  const [draftStartDate, setDraftStartDate] = useState("");
  const [draftEndDate, setDraftEndDate] = useState("");
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
      const rows = await leasesApi.list(tenantId, { includeArchived });
      setData(rows);
    } catch (e) {
      console.error("Failed to load leases", e);
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
    await leasesApi.create(tenantId, payload);
    await load();
  };

  const startEdit = (o) => {
    setEditingId(o.id);
    setDraftRentAmount(o.rentAmount || "");
    setDraftStatus(o.status || "");
    setDraftStartDate(o.startDate || "");
    setDraftendDate(o.endDate || "");
    setInlineError(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setDraftRentAmount("");
    setDraftStatus("");
    setDraftStartDate("");
    setDraftEndDate("");
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
      await leasesApi.update(tenantId, id, {
        rentAmount: draftName.trim(),
        status: draftStatus.trim(),
        startDate: draftStartDate.trim(),
        endDate: draftEndDate.trim(),
      });
      await load();
      cancelEdit();
    } catch (err) {
      console.error("Failed to save lease", err);
      setInlineError(err);
    } finally {
      setSavingId(null);
    }
  };

  const handleToggleArchive = async (id) => {
    try {
      await leasesApi.toggleArchive(tenantId, id);
      await load();
    } catch (err) {
      console.error("Failed to toggle lease archive", err);
      setInlineError(err);
    }
  };

  if (!tenantId) {
    return (
      <div style={{ color: "#888" }}>
        Create a tenant first to attach leases.
      </div>
    );
  }

  if (isLoading) return <div>Loading leases…</div>;

  if (error) {
    return (
      <div style={{ color: "crimson" }}>
        Error loading leases: {String(error.message || error)}
      </div>
    );
  }

  return (
    <div>
      {showAddForm && (
        <AddLeaseForm onCreate={handleCreate} disabled={!tenantId} />
      )}

      {inlineError && (
        <div style={{ color: "crimson", marginBottom: 8, fontSize: 12 }}>
          {String(inlineError.message || inlineError)}
        </div>
      )}

      {data.length === 0 && (
        <div style={{ color: "#666", marginTop: 4 }}>No leases.</div>
      )}

      <ul style={{ paddingLeft: 16, lineHeight: 1.7 }}>
        {data.map((o) => {
          const isEditing = editingId === o.id;
          const isSaving = savingId === o.id;

          if (isEditing) {
            return (
              <li key={o.id} style={{ opacity: o.archived ? 0.6 : 1 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    maxWidth: 420,
                  }}
                >
                  <input
                    type="number"
                    value={draftRentAmount}
                    onChange={(e) => setDraftRentAmount(e.target.value)}
                    placeholder="Rent Amount"
                    style={{ padding: 4 }}
                  />
                  <input
                    type="text"
                    value={draftStatus}
                    onChange={(e) => setDraftStatus(e.target.value)}
                    placeholder="Status"
                    style={{ padding: 4 }}
                  />
                  <input
                    type="text"
                    value={draftStartDate}
                    onChange={(e) => setDraftStartDate(e.target.value)}
                    placeholder="Status"
                    style={{ padding: 4 }}
                  />
                  <input
                    type="text"
                    value={draftEndDate}
                    onChange={(e) => setDraftEndDate(e.target.value)}
                    placeholder="Status"
                    style={{ padding: 4 }}
                  />
                  <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
                    <button
                      type="button"
                      onClick={() => saveEdit(o.id)}
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
                      archived={o.archived}
                      onToggle={() => handleToggleArchive(o.id)}
                    />
                  </div>
                </div>
              </li>
            );
          }

          return (
            <li key={o.id} style={{ opacity: o.archived ? 0.6 : 1 }}>
              <strong>Lease Name</strong>
              {o.rentAmount && <> — {o.rentAmount}</>}
              {o.status && <> — {o.status}</>}
              {o.startDate && <> — {o.startDate}</>}
              {o.endDate && <> — {o.endDate}</>}
              {o.archived && (
                <span
                  style={{ marginLeft: 8, fontSize: 12, color: "#888" }}
                >
                  (Archived)
                </span>
              )}

              <button
                type="button"
                style={{ marginLeft: 8 }}
                onClick={() => startEdit(o)}
              >
                Edit
              </button>

              <ArchiveButton
                archived={o.archived}
                onToggle={() => handleToggleArchive(o.id)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
