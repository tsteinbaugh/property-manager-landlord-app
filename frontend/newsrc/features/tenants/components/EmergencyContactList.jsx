import React, { useEffect, useState } from "react";
import ArchiveButton from "@shared/ui/ArchiveButton.jsx";
import { emergencyContactsApi } from "../api/emergencyContacts.api.js";

function AddEmergencyContactForm({ onCreate, disabled }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [relation, setRelation] = useState("");
  const [email, setEmail] = useState("");
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
        phone: phone.trim() || null,
        relation: relation.trim() || null,
        email: email.trim() || null,
      });
      setName("");
      setPhone("");
      setRelation("");
      setEmail("");
    } catch (err) {
      console.error("AddEmergencyContactForm submit error", err);
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
      <div style={{ fontWeight: 600, marginBottom: 6 }}>
        Add emergency contact
      </div>

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
          type="tel"
          placeholder="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ padding: 6, minWidth: 140 }}
          disabled={disabled || isSubmitting}
        />
        <input
          type="text"
          placeholder="relation"
          value={relation}
          onChange={(e) => setRelation(e.target.value)}
          style={{ padding: 6, minWidth: 140 }}
          disabled={disabled || isSubmitting}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: 6, minWidth: 180 }}
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
 * EmergencyContactList
 * Props:
 *   - tenantId: string (required)
 *   - includeArchived?: boolean (default false)
 */
export default function EmergencyContactList({
  tenantId,
  includeArchived = false,
}) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [editingId, setEditingId] = useState(null);
  const [draftName, setDraftName] = useState("");
  const [draftPhone, setDraftPhone] = useState("");
  const [draftRelation, setDraftRelation] = useState("");
  const [draftEmail, setDraftEmail] = useState("");
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
      const rows = await emergencyContactsApi.list(tenantId, {
        includeArchived,
      });
      setData(rows);
    } catch (e) {
      console.error("Failed to load emergency contacts", e);
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
    await emergencyContactsApi.create(tenantId, payload);
    await load();
  };

  const startEdit = (c) => {
    setEditingId(c.id);
    setDraftName(c.name || "");
    setDraftPhone(c.phone || "");
    setDraftRelation(c.relation || "");
    setDraftEmail(c.email || "");
    setInlineError(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setDraftName("");
    setDraftPhone("");
    setDraftRelation("");
    setDraftEmail("");
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
      await emergencyContactsApi.update(tenantId, id, {
        name: draftName.trim(),
        phone: draftPhone.trim(),
        relation: draftRelation.trim(),
        email: draftEmail.trim(),
      });
      await load();
      cancelEdit();
    } catch (err) {
      console.error("Failed to save emergency contact", err);
      setInlineError(err);
    } finally {
      setSavingId(null);
    }
  };

  const handleToggleArchive = async (id) => {
    try {
      await emergencyContactsApi.toggleArchive(tenantId, id);
      await load();
    } catch (err) {
      console.error("Failed to toggle emergency contact archive", err);
      setInlineError(err);
    }
  };

  if (!tenantId) {
    return (
      <div style={{ color: "#888" }}>
        Create a tenant first to attach emergency contacts.
      </div>
    );
  }

  if (isLoading) return <div>Loading emergency contacts…</div>;

  if (error) {
    return (
      <div style={{ color: "crimson" }}>
        Error loading emergency contacts: {String(error.message || error)}
      </div>
    );
  }

  return (
    <div>
      <AddEmergencyContactForm onCreate={handleCreate} disabled={!tenantId} />

      {inlineError && (
        <div style={{ color: "crimson", marginBottom: 8, fontSize: 12 }}>
          {String(inlineError.message || inlineError)}
        </div>
      )}

      {data.length === 0 && (
        <div style={{ color: "#666", marginTop: 4 }}>No emergency contacts.</div>
      )}

      <ul style={{ paddingLeft: 16, lineHeight: 1.7 }}>
        {data.map((c) => {
          const isEditing = editingId === c.id;
          const isSaving = savingId === c.id;

          if (isEditing) {
            return (
              <li key={c.id} style={{ opacity: c.archived ? 0.6 : 1 }}>
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
                    type="tel"
                    value={draftPhone}
                    onChange={(e) => setDraftPhone(e.target.value)}
                    placeholder="Phone"
                    style={{ padding: 4 }}
                  />
                  <input
                    type="text"
                    value={draftRelation}
                    onChange={(e) => setDraftRelation(e.target.value)}
                    placeholder="Relation"
                    style={{ padding: 4 }}
                  />
                  <input
                    type="email"
                    value={draftEmail}
                    onChange={(e) => setDraftEmail(e.target.value)}
                    placeholder="Email"
                    style={{ padding: 4 }}
                  />
                  <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
                    <button
                      type="button"
                      onClick={() => saveEdit(c.id)}
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
                      archived={c.archived}
                      onToggle={() => handleToggleArchive(c.id)}
                    />
                  </div>
                </div>
              </li>
            );
          }

          return (
            <li key={c.id} style={{ opacity: c.archived ? 0.6 : 1 }}>
              <strong>{c.name}</strong>
              {c.relation && <> — {c.relation}</>}
              {c.phone && <> — {c.phone}</>}
              {c.email && <> — {c.email}</>}
              {c.archived && (
                <span style={{ marginLeft: 8, fontSize: 12, color: "#888" }}>
                  (Archived)
                </span>
              )}

              <button
                type="button"
                style={{ marginLeft: 8 }}
                onClick={() => startEdit(c)}
              >
                Edit
              </button>

              <ArchiveButton
                archived={c.archived}
                onToggle={() => handleToggleArchive(c.id)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
