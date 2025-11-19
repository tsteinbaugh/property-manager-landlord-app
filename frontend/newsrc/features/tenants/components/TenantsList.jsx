// newsrc/features/tenants/components/TenantsList.jsx
import React, { useState } from "react";
import { useTenants } from "@features/tenants/hooks/useTenants.js";
import ArchiveButton from "@shared/ui/ArchiveButton.jsx";
import { can } from "@lib/rbac/index.js";
import { RESOURCES as R, ACTIONS as A } from "@lib/rbac/resources.js";
import { ROLES } from "@lib/rbac/roles.js";
import AddTenantForm from "./AddTenantForm.jsx";
import { tenantsApi } from "../api/tenants.api.js";

export default function TenantsList({
  includeArchived = false,
  role = ROLES.SYSADMIN,
}) {
  const canView = can(role, R.TENANTS, A.VIEW);
  const canArchive = can(role, R.TENANTS, A.ARCHIVE);

  const {
    data,
    isLoading,
    error,
    toggleArchive,
    refetch,
  } = useTenants({ includeArchived, role });

  // inline edit state
  const [editingId, setEditingId] = useState(null);
  const [draftName, setDraftName] = useState("");
  const [draftEmail, setDraftEmail] = useState("");
  const [draftPhone, setDraftPhone] = useState("");
  const [savingId, setSavingId] = useState(null);
  const [inlineError, setInlineError] = useState(null);

  if (!canView) {
    return (
      <div style={{ color: "#888" }}>
        You don’t have permission to view tenants.
      </div>
    );
  }

  if (isLoading) return <div>Loading tenants…</div>;

  if (error && error.message !== "forbidden") {
    return (
      <div style={{ color: "crimson" }}>
        Error loading tenants: {String(error.message || error)}
      </div>
    );
  }

  const handleCreate = async (payload) => {
    await tenantsApi.create(payload);
    await refetch();
  };

  const startEdit = (t) => {
    setEditingId(t.id);
    setDraftName(t.name || "");
    setDraftEmail(t.email || "");
    setDraftPhone(t.phone || "");
    setInlineError(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setDraftName("");
    setDraftEmail("");
    setDraftPhone("");
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
      await tenantsApi.update(id, {
        name: draftName.trim(),
        email: draftEmail.trim(),
        phone: draftPhone.trim(),
      });
      await refetch();
      cancelEdit();
    } catch (err) {
      console.error("Failed to save tenant", err);
      setInlineError(err);
    } finally {
      setSavingId(null);
    }
  };

  return (
    <div>
      <h3 style={{ margin: "8px 0" }}>Tenants</h3>

      {/* Add-new form at top */}
      <AddTenantForm onCreate={handleCreate} />

      {inlineError && (
        <div style={{ color: "crimson", marginBottom: 8, fontSize: 12 }}>
          {String(inlineError.message || inlineError)}
        </div>
      )}

      <ul style={{ paddingLeft: 16, lineHeight: 1.7 }}>
        {data.map((t) => {
          const isEditing = editingId === t.id;
          const isSaving = savingId === t.id;

          if (isEditing) {
            return (
              <li key={t.id} style={{ opacity: t.archived ? 0.6 : 1 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 4, maxWidth: 420 }}>
                  <input
                    type="text"
                    value={draftName}
                    onChange={(e) => setDraftName(e.target.value)}
                    placeholder="Name"
                    style={{ padding: 4 }}
                  />
                  <input
                    type="email"
                    value={draftEmail}
                    onChange={(e) => setDraftEmail(e.target.value)}
                    placeholder="Email"
                    style={{ padding: 4 }}
                  />
                  <input
                    type="tel"
                    value={draftPhone}
                    onChange={(e) => setDraftPhone(e.target.value)}
                    placeholder="Phone"
                    style={{ padding: 4 }}
                  />
                  <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
                    <button
                      type="button"
                      onClick={() => saveEdit(t.id)}
                      disabled={isSaving}
                    >
                      {isSaving ? "Saving…" : "Save"}
                    </button>
                    <button type="button" onClick={cancelEdit} disabled={isSaving}>
                      Cancel
                    </button>
                    {canArchive && (
                      <ArchiveButton
                        archived={t.archived}
                        onToggle={async () => {
                          await toggleArchive(t.id);
                        }}
                      />
                    )}
                  </div>
                </div>
              </li>
            );
          }

          // non-editing row
          return (
            <li key={t.id} style={{ opacity: t.archived ? 0.6 : 1 }}>
              <strong>{t.name}</strong>
              {t.email && <> — {t.email}</>}
              {t.phone && <> — {t.phone}</>}
              {t.archived && (
                <span style={{ marginLeft: 8, fontSize: 12, color: "#888" }}>
                  (Archived)
                </span>
              )}

              <button
                type="button"
                style={{ marginLeft: 8 }}
                onClick={() => startEdit(t)}
              >
                Edit
              </button>

              {canArchive && (
                <ArchiveButton
                  archived={t.archived}
                  onToggle={async () => {
                    await toggleArchive(t.id);
                  }}
                />
              )}
            </li>
          );
        })}
      </ul>

      {data.length === 0 && (
        <div style={{ color: "#666", marginTop: 4 }}>No tenants yet.</div>
      )}
    </div>
  );
}
