import React, { useEffect, useState } from "react";
import IncludeArchivedToggle from "@shared/ui/IncludeArchivedToggle.jsx";
import { ROLES } from "@lib/rbac/roles.js";
import { adminUsersApi } from "../api/adminUsers.api.js";

const ROLE_LABEL = {
  [ROLES.SYSADMIN]: "System Admin",
  [ROLES.LANDLORD]: "Landlord",
  [ROLES.PROPERTY_MANAGER]: "Property Manager",
  [ROLES.MAINTENANCE_TECH]: "Maintenance Tech",
  [ROLES.TENANT]: "Tenant",
  [ROLES.CLEANER]: "Cleaner",
};

const STATUS_LABEL = {
  ACTIVE: "Active",
  INVITED: "Invited",
  DISABLED: "Disabled",
};

const STATUS_OPTIONS = ["ACTIVE", "INVITED", "DISABLED"];

function AddUserForm({ onCreate }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [baseRole, setBaseRole] = useState(ROLES.LANDLORD);
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("ACTIVE");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert("Email is required");
      return;
    }

    try {
      setSaving(true);
      setError(null);
      await onCreate({
        email: email.trim(),
        name: name.trim() || null,
        baseRole,
        password: password.trim() || undefined,
        status,
      });
      setEmail("");
      setName("");
      setPassword("");
      setBaseRole(ROLES.LANDLORD);
      setStatus("ACTIVE");
    } catch (err) {
      console.error("Failed to create user", err);
      setError(err);
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
        borderRadius: 8,
        border: "1px solid #e5e7eb",
        maxWidth: 600,
      }}
    >
      <h3 style={{ margin: "0 0 6px" }}>Add User</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          alignItems: "center",
        }}
      >
        <input
          type="email"
          placeholder="Email (required)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: 6, minWidth: 180 }}
        />
        <input
          type="text"
          placeholder="Name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: 6, minWidth: 160 }}
        />
        <select
          value={baseRole}
          onChange={(e) => setBaseRole(e.target.value)}
          style={{ padding: 6 }}
        >
          {Object.values(ROLES).map((r) => (
            <option key={r} value={r}>
              {ROLE_LABEL[r] || r}
            </option>
          ))}
        </select>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{ padding: 6 }}
        >
          {STATUS_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {STATUS_LABEL[s]}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Initial password (optional)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: 6, minWidth: 160 }}
        />
        <button
          type="submit"
          disabled={saving}
          style={{ padding: "6px 12px", marginLeft: "auto" }}
        >
          {saving ? "Creating…" : "Create"}
        </button>
      </div>
      {error && (
        <div style={{ color: "crimson", marginTop: 4, fontSize: 12 }}>
          {String(error.message || error)}
        </div>
      )}
    </form>
  );
}

export default function Users() {
  const [includeArchived, setIncludeArchived] = useState(false);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [editingId, setEditingId] = useState(null);
  const [draftEmail, setDraftEmail] = useState("");
  const [draftName, setDraftName] = useState("");
  const [draftRole, setDraftRole] = useState(ROLES.LANDLORD);
  const [draftStatus, setDraftStatus] = useState("ACTIVE");
  const [savingId, setSavingId] = useState(null);
  const [inlineError, setInlineError] = useState(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await adminUsersApi.list({ includeArchived });
      setRows(data);
    } catch (e) {
      console.error("Failed to load users", e);
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [includeArchived]);

  const startEdit = (u) => {
    setEditingId(u.id);
    setDraftEmail(u.email || "");
    setDraftName(u.name || "");
    setDraftRole(u.baseRole || ROLES.LANDLORD);
    setDraftStatus(u.status || "ACTIVE");
    setInlineError(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setDraftEmail("");
    setDraftName("");
    setDraftRole(ROLES.LANDLORD);
    setDraftStatus("ACTIVE");
    setInlineError(null);
  };

  const saveEdit = async (id) => {
    if (!draftEmail.trim()) {
      setInlineError(new Error("Email is required"));
      return;
    }

    try {
      setSavingId(id);
      setInlineError(null);
      await adminUsersApi.update(id, {
        email: draftEmail.trim(),
        name: draftName.trim(),
        baseRole: draftRole,
        status: draftStatus,
      });
      await load();
      cancelEdit();
    } catch (err) {
      console.error("Failed to save user", err);
      setInlineError(err);
    } finally {
      setSavingId(null);
    }
  };

  const handleCreate = async (payload) => {
    await adminUsersApi.create(payload);
    await load();
  };

  const handleToggleArchive = async (id) => {
    try {
      await adminUsersApi.toggleArchive(id);
      await load();
    } catch (err) {
      console.error("Failed to toggle archive", err);
      setInlineError(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Permanently delete this user? This cannot be undone.")) {
      return;
    }
    try {
      await adminUsersApi.remove(id);
      await load();
    } catch (err) {
      console.error("Failed to delete user", err);
      setInlineError(err);
    }
  };

  return (
    <section>
      <h2 style={{ marginTop: 0 }}>Users</h2>
      <p style={{ marginTop: 0 }}>
        Invite, change roles, disable / archive accounts.
      </p>

      <div style={{ marginBottom: 8 }}>
        <IncludeArchivedToggle
          value={includeArchived}
          onChange={setIncludeArchived}
        />
      </div>

      <AddUserForm onCreate={handleCreate} />

      {inlineError && (
        <div style={{ color: "crimson", marginBottom: 8, fontSize: 12 }}>
          {String(inlineError.message || inlineError)}
        </div>
      )}

      {loading && <div>Loading users…</div>}
      {error && !loading && (
        <div style={{ color: "crimson" }}>
          Error loading users: {String(error.message || error)}
        </div>
      )}

      {!loading && !error && (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th align="left">Name</th>
              <th align="left">Email</th>
              <th align="left">Role</th>
              <th align="left">Status</th>
              <th align="left">Archived</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((u) => {
              const isEditing = editingId === u.id;
              const isSaving = savingId === u.id;

              if (isEditing) {
                return (
                  <tr key={u.id} style={{ borderTop: "1px solid #eee" }}>
                    <td>
                      <input
                        type="text"
                        value={draftName}
                        onChange={(e) => setDraftName(e.target.value)}
                        style={{ padding: 4, width: "100%" }}
                        placeholder="Name"
                      />
                    </td>
                    <td>
                      <input
                        type="email"
                        value={draftEmail}
                        onChange={(e) => setDraftEmail(e.target.value)}
                        style={{ padding: 4, width: "100%" }}
                        placeholder="Email"
                      />
                    </td>
                    <td>
                      <select
                        value={draftRole}
                        onChange={(e) => setDraftRole(e.target.value)}
                        style={{ padding: 4, width: "100%" }}
                      >
                        {Object.values(ROLES).map((r) => (
                          <option key={r} value={r}>
                            {ROLE_LABEL[r] || r}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <select
                        value={draftStatus}
                        onChange={(e) => setDraftStatus(e.target.value)}
                        style={{ padding: 4, width: "100%" }}
                      >
                        {STATUS_OPTIONS.map((s) => (
                          <option key={s} value={s}>
                            {STATUS_LABEL[s]}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>{u.archived ? "Yes" : "No"}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => saveEdit(u.id)}
                        disabled={isSaving}
                      >
                        {isSaving ? "Saving…" : "Save"}
                      </button>{" "}
                      <button
                        type="button"
                        onClick={cancelEdit}
                        disabled={isSaving}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                );
              }

              return (
                <tr
                  key={u.id}
                  style={{
                    borderTop: "1px solid #eee",
                    opacity: u.archived ? 0.6 : 1,
                  }}
                >
                  <td>{u.name || "—"}</td>
                  <td>{u.email}</td>
                  <td>{ROLE_LABEL[u.baseRole] || u.baseRole}</td>
                  <td>{STATUS_LABEL[u.status] || u.status}</td>
                  <td>{u.archived ? "Yes" : "No"}</td>
                  <td>
                    <button type="button" onClick={() => startEdit(u)}>
                      Edit
                    </button>{" "}
                    <button
                      type="button"
                      onClick={() => handleToggleArchive(u.id)}
                    >
                      {u.archived ? "Unarchive" : "Archive"}
                    </button>{" "}
                    <button
                      type="button"
                      onClick={() => handleDelete(u.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}

            {rows.length === 0 && (
              <tr>
                <td colSpan={6} style={{ paddingTop: 8, color: "#666" }}>
                  No users.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </section>
  );
}
