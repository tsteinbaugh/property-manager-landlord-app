// newsrc/features/tenants/pages/LandlordEmergencyContactDetailsPage.jsx
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import ArchiveButton from "@shared/ui/ArchiveButton.jsx";
import { emergencyContactsApi } from "@features/residents/api/emergencyContacts.api.js";
import { ROLES } from "@lib/rbac/roles.js";

export default function LandlordEmergencyContactDetailsPage() {
  const { emergencyContactId } = useParams();
  const { effectiveRole, isSysAdmin, token } = useUser() || {};

  const role =
    isSysAdmin && effectiveRole !== ROLES.SYSADMIN
      ? ROLES.SYSADMIN
      : effectiveRole || ROLES.LANDLORD;

  const [emergencyContact, setEmergencyContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [relation, setRelation] = useState("");
  const [email, setEmail] = useState("");
  const [isSaving, setSaving] = useState(false);
  const [isArchiving, setArchiving] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const o = await emergencyContactsApi.get(emergencyContactId, { token });

        if (!cancelled) {
          if (!o) {
            setError(new Error("Emergency contact not found"));
          } else {
            setEmergencyContact(o);
          }
        }
      } catch (err) {
        console.error("Failed to load emergency contact", err);
        if (!cancelled) {
          setError(err);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (emergencyContactId && token) {
      load();
    } else if (!emergencyContactId) {
      setLoading(false);
      setError(new Error("Missing emergency contact id"));
    }

    return () => {
      cancelled = true;
    };
  }, [emergencyContactId, token]);

  useEffect(() => {
    if (emergencyContact) {
      setName(emergencyContact.name || "");
      setPhone(emergencyContact.phone || "");
      setRelation(emergencyContact.relation || "");
      setEmail(emergencyContact.email || "");
    }
  }, [emergencyContact]);

  const isArchived = !!emergencyContact?.archived;

  const handleSave = async () => {
    if (!name.trim()) {
      alert("Name is required.");
      return;
    }

    try {
      setSaving(true);
      const updated = await emergencyContactsApi.update(
        emergencyContact.id,
        {
          name: name.trim(),
          phone: phone.trim(),
          relation: relation.trim(),
          email: email.trim(),
        },
        { token }
      );
      setEmergencyContact(updated);
      setEditing(false);
    } catch (err) {
      console.error("Failed to update emergency contact", err);
      alert("Failed to update emergency contact. Check console for details.");
    } finally {
      setSaving(false);
    }
  };

  const handleCancelEdit = () => {
    if (emergencyContact) {
      setName(emergencyContact.name || "");
      setPhone(emergencyContact.phone || "");
      setRelation(emergencyContact.relation || "");
      setEmail(emergencyContact.email || "");
    }
    setEditing(false);
  };

  const handleToggleArchive = async () => {
    if (!emergencyContact) return;

    if (!isArchived) {
      const ok = window.confirm(
        "Are you sure you want to archive this emergency contact?\n\n" +
          "They will be hidden from active emergency contact lists. Only a system administrator can unarchive them."
      );
      if (!ok) return;
    } else {
      if (!isSysAdmin) {
        alert(
          "Only a system administrator can unarchive an archived emergency contact.\n\n" +
            "Please contact your system administrator if this needs to be reactivated."
        );
        return;
      }
    }

    try {
      setArchiving(true);
      const updated = await emergencyContactsApi.toggleArchive(emergencyContact.id, { token });
      setEmergencyContact(updated);
    } catch (err) {
      console.error("Failed to toggle emergency contact archived state", err);
      alert("Failed to change archive status. Check console for details.");
    } finally {
      setArchiving(false);
    }
  };

  if (loading) return <div>Loading emergency contact…</div>;

  if (error) {
    return (
      <div style={{ color: "crimson", padding: 16 }}>
        Error loading emergency contact: {String(error.message || error)}
      </div>
    );
  }

  if (!emergencyContact) {
    return <div style={{ padding: 16 }}>No data.</div>;
  }

  const title = emergencyContact.name || "Unnamed emergency contact";

  const canEditNow = !isArchived || isSysAdmin;
  const canArchiveNow = !isArchived; // any landlord can archive
  const canUnarchiveNow = isArchived && isSysAdmin;
  const showArchiveButton = canArchiveNow || canUnarchiveNow;

  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 8 }}>
        {/* mirror tenant details back-link to residents */}
        <Link to="/landlord/residents?tab=emergencyContacts">
          ← Back to residents
        </Link>
      </div>

      {/* header + actions */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 12,
          marginBottom: 12,
        }}
      >
        <div>
          {!isEditing ? (
            <>
              <h2 style={{ margin: "8px 0" }}>{title}</h2>
              <div style={{ color: "#555", marginBottom: 4 }}>
                {emergencyContact.phone && (
                  <div>Phone: {emergencyContact.phone}</div>
                )}
              </div>
              <div style={{ color: "#555", marginBottom: 4 }}>
                {emergencyContact.relation && (
                  <div>Relation: {emergencyContact.relation}</div>
                )}
              </div>
              <div style={{ color: "#555", marginBottom: 4 }}>
                {emergencyContact.email && (
                  <div>Email: {emergencyContact.email}</div>
                )}
              </div>
              {isArchived && (
                <div style={{ color: "#888", fontSize: 12 }}>
                  (Archived – read-only for landlords)
                </div>
              )}
            </>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
                maxWidth: 480,
              }}
            >
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="text"
                placeholder="Relation (roommate, child, partner, etc.)"
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                <button
                  type="button"
                  onClick={handleSave}
                  disabled={isSaving}
                >
                  {isSaving ? "Saving…" : "Save"}
                </button>
                <button type="button" onClick={handleCancelEdit}>
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          {canEditNow && !isEditing && (
            <button type="button" onClick={() => setEditing(true)}>
              Edit
            </button>
          )}

          {showArchiveButton ? (
            <ArchiveButton
              archived={isArchived}
              onToggle={handleToggleArchive}
              disabled={isArchiving}
            />
          ) : (
            <button
              type="button"
              disabled
              title={
                isArchived
                  ? "Only a system administrator can unarchive this emergency contact."
                  : "Insufficient permissions to archive this emergency contact."
              }
              style={{ opacity: 0.5 }}
            >
              {isArchived ? "Unarchive" : "Archive"}
            </button>
          )}
        </div>
      </div>

      <hr style={{ margin: "16px 0" }} />

      <section
        style={{
          padding: 16,
          borderRadius: 12,
          border: "1px solid #e5e7eb",
          background: "#ffffff",
          maxWidth: 640,
        }}
      >
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>
          Emergency contact info
        </h3>

        <dl
          style={{
            display: "grid",
            gridTemplateColumns: "120px 1fr",
            rowGap: 8,
            columnGap: 12,
            fontSize: 14,
          }}
        >
          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Name</dt>
          <dd>{emergencyContact.name || "—"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Phone</dt>
          <dd>{emergencyContact.phone || "Not set"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Relation</dt>
          <dd>{emergencyContact.relation || "Not set"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Email</dt>
          <dd>{emergencyContact.email || "Not set"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Status</dt>
          <dd>{isArchived ? "Archived" : "Active"}</dd>
        </dl>
      </section>
    </div>
  );
}
