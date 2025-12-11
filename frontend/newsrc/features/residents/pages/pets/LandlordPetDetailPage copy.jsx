// newsrc/features/tenants/pages/LandlordPetDetailsPage.jsx
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import ArchiveButton from "@shared/ui/ArchiveButton.jsx";
import { petsApi } from "@features/residents/api/pets.api.js";
import { ROLES } from "@lib/rbac/roles.js";

export default function LandlordPetDetailsPage() {
  const { petId } = useParams();
  const { effectiveRole, isSysAdmin, token } = useUser() || {};

  const role =
    isSysAdmin && effectiveRole !== ROLES.SYSADMIN
      ? ROLES.SYSADMIN
      : effectiveRole || ROLES.LANDLORD;

  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [breed, setBreed] = useState("");
  const [weightLb, setWeightLb] = useState("");
  const [isSaving, setSaving] = useState(false);
  const [isArchiving, setArchiving] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const p = await petsApi.get(petId, { token });

        if (!cancelled) {
          if (!p) {
            setError(new Error("Pet not found"));
          } else {
            setPet(p);
          }
        }
      } catch (err) {
        console.error("Failed to load pet", err);
        if (!cancelled) {
          setError(err);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (petId && token) {
      load();
    } else if (!petId) {
      setLoading(false);
      setError(new Error("Missing pet id"));
    }

    return () => {
      cancelled = true;
    };
  }, [petId, token]);

  useEffect(() => {
    if (pet) {
      setName(pet.name || "");
      setType(pet.type || "");
      setBreed(pet.breed || "");
      setWeightLb(
        pet.weightLb === null || pet.weightLb === undefined
          ? ""
          : String(pet.weightLb)
      );
    }
  }, [pet]);

  const isArchived = !!pet?.archived;

  const handleSave = async () => {
    if (!name.trim()) {
      alert("Name is required.");
      return;
    }

    try {
      setSaving(true);
      const rawWeight = weightLb.trim();
      let normalizedWeight = null;
      if (rawWeight) {
        const parsed = Number(rawWeight);
        if (!Number.isNaN(parsed) && parsed >= 0) {
          normalizedWeight = parsed;
        } else {
          alert("Weight must be a positive number.");
          return;
        }
      }

      const updated = await petsApi.update(
        pet.id,
        {
          name: name.trim(),
          type: type.trim(),
          breed: breed.trim(),
          weightLb: normalizedWeight,
        },
        { token }
      );
      setPet(updated);
      setEditing(false);
    } catch (err) {
      console.error("Failed to update pet", err);
      alert("Failed to update pet. Check console for details.");
    } finally {
      setSaving(false);
    }
  };

  const handleCancelEdit = () => {
    if (pet) {
      setName(pet.name || "");
      setType(pet.type || "");
      setBreed(pet.breed || "");
      setWeightLb(
        pet.weightLb === null || pet.weightLb === undefined
          ? ""
          : String(pet.weightLb)
      );
    }
    setEditing(false);
  };

  const handleToggleArchive = async () => {
    if (!pet) return;

    if (!isArchived) {
      const ok = window.confirm(
        "Are you sure you want to archive this pet?\n\n" +
          "They will be hidden from active pet lists. Only a system administrator can unarchive them."
      );
      if (!ok) return;
    } else {
      if (!isSysAdmin) {
        alert(
          "Only a system administrator can unarchive an archived pet.\n\n" +
            "Please contact your system administrator if this needs to be reactivated."
        );
        return;
      }
    }

    try {
      setArchiving(true);
      const updated = await petsApi.toggleArchive(pet.id, { token });
      setPet(updated);
    } catch (err) {
      console.error("Failed to toggle pet archived state", err);
      alert("Failed to change archive status. Check console for details.");
    } finally {
      setArchiving(false);
    }
  };

  if (loading) return <div>Loading pet…</div>;

  if (error) {
    return (
      <div style={{ color: "crimson", padding: 16 }}>
        Error loading pet: {String(error.message || error)}
      </div>
    );
  }

  if (!pet) {
    return <div style={{ padding: 16 }}>No data.</div>;
  }

  const title = pet.name || "Unnamed pet";

  const canEditNow = !isArchived || isSysAdmin;
  const canArchiveNow = !isArchived; // any landlord can archive
  const canUnarchiveNow = isArchived && isSysAdmin;
  const showArchiveButton = canArchiveNow || canUnarchiveNow;

  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 8 }}>
        {/* mirror tenant details back-link to residents */}
        <Link to="/landlord/residents?tab=pets">
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
                {pet.type && (
                  <div>Type: {pet.type}</div>
                )}
              </div>
              <div style={{ color: "#555", marginBottom: 4 }}>
                {pet.breed && (
                  <div>Breed: {pet.breed}</div>
                )}
              </div>
              <div style={{ color: "#555", marginBottom: 4 }}>
                {pet.weightLb && (
                  <div>Weight (Lb): {pet.weightLb}</div>
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
                placeholder="Type (dog, cat, bird, etc.)"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
              <input
                type="text"
                placeholder="Breed (Poodle, Boxer, etc.)"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
              />
              <input
                type="text"
                placeholder="Weight (Lb)"
                value={weightLb}
                onChange={(e) => setWeightLb(e.target.value)}
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
                  ? "Only a system administrator can unarchive this pet."
                  : "Insufficient permissions to archive this pet."
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
          Pet info
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
          <dd>{pet.name || "—"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Type</dt>
          <dd>{pet.type || "Not set"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Breed</dt>
          <dd>{pet.breed || "Not set"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Weight</dt>
          <dd>{pet.weightLb || "Not set"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Status</dt>
          <dd>{isArchived ? "Archived" : "Active"}</dd>
        </dl>
      </section>
    </div>
  );
}
