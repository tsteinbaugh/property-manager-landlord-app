// newsrc/features/tenants/pages/LandlordLeaseDetailsPage.jsx
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import ArchiveButton from "@shared/ui/ArchiveButton.jsx";
import { leasesApi } from "@features/leases/api/leases.api.js";
import { ROLES } from "@lib/rbac/roles.js";

export default function LandlordLeaseDetailsPage() {
  const { leaseId } = useParams();
  const { effectiveRole, isSysAdmin, token } = useUser() || {};

  const role =
    isSysAdmin && effectiveRole !== ROLES.SYSADMIN
      ? ROLES.SYSADMIN
      : effectiveRole || ROLES.LANDLORD;

  const [lease, setLease] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isEditing, setEditing] = useState(false);
  const [rentAmount, setRentAmount] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isSaving, setSaving] = useState(false);
  const [isArchiving, setArchiving] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const o = await leasesApi.get(leaseId, { token });

        if (!cancelled) {
          if (!o) {
            setError(new Error("Lease not found"));
          } else {
            setLease(o);
          }
        }
      } catch (err) {
        console.error("Failed to load lease", err);
        if (!cancelled) {
          setError(err);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (leaseId && token) {
      load();
    } else if (!leaseId) {
      setLoading(false);
      setError(new Error("Missing lease id"));
    }

    return () => {
      cancelled = true;
    };
  }, [leaseId, token]);

  useEffect(() => {
    if (lease) {
      setRentAmount(
        lease.rentAmount === null || lease.rentAmount === undefined
          ? ""
          : String(lease.rentAmount));
      setStatus(lease.status || "");
      setStartDate(lease.startDate || "");
      setEndDate(lease.endDate || "");
    }
  }, [lease]);

  const isArchived = !!lease?.archived;

  const handleSave = async () => {
    try {
      setSaving(true);
      const rawRentAmount = rentAmount.trim();
      let normalizedRentAmount = null;
      if (rawRentAmount) {
        const parsed = Number(rawRentAmount);
        if (!Number.isNaN(parsed) && parsed >= 0) {
          normalizedRentAmount = parsed;
        } else {
          alert("Rent amount must be a positive number.");
          return;
        }
      }

      const updated = await leasesApi.update(
        lease.id,
        {
          rentAmount: normalizedRentAmount,
          status: status.trim(),
          startDate: startDate.trim(),
          endDate: endDate.trim(),
        },
        { token }
      );
      setLease(updated);
      setEditing(false);
    } catch (err) {
      console.error("Failed to update lease", err);
      alert("Failed to update lease. Check console for details.");
    } finally {
      setSaving(false);
    }
  };

  const handleCancelEdit = () => {
    if (lease) {
      setRentAmount(
        lease.rentAmount === null || lease.rentAmount === undefined
          ? ""
          : String(lease.rentAmount));
      setStatus(lease.status || "");
      setStartDate(lease.startDate || "");
      setEndDate(lease.endDate || "");
    }
    setEditing(false);
  };

  const handleToggleArchive = async () => {
    if (!lease) return;

    if (!isArchived) {
      const ok = window.confirm(
        "Are you sure you want to archive this lease?\n\n" +
          "They will be hidden from active lease lists. Only a system administrator can unarchive them."
      );
      if (!ok) return;
    } else {
      if (!isSysAdmin) {
        alert(
          "Only a system administrator can unarchive an archived lease.\n\n" +
            "Please contact your system administrator if this needs to be reactivated."
        );
        return;
      }
    }

    try {
      setArchiving(true);
      const updated = await leasesApi.toggleArchive(lease.id, { token });
      setLease(updated);
    } catch (err) {
      console.error("Failed to toggle lease archived state", err);
      alert("Failed to change archive status. Check console for details.");
    } finally {
      setArchiving(false);
    }
  };

  if (loading) return <div>Loading lease…</div>;

  if (error) {
    return (
      <div style={{ color: "crimson", padding: 16 }}>
        Error loading lease: {String(error.message || error)}
      </div>
    );
  }

  if (!lease) {
    return <div style={{ padding: 16 }}>No data.</div>;
  }

  const title = lease.name || "Unnamed lease";

  const canEditNow = !isArchived || isSysAdmin;
  const canArchiveNow = !isArchived; // any landlord can archive
  const canUnarchiveNow = isArchived && isSysAdmin;
  const showArchiveButton = canArchiveNow || canUnarchiveNow;

  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 8 }}>
        <Link to="/landlord/leases">
          ← Back to lease
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
                {lease.rentAmount && (
                  <div>Rent amount: {lease.rentAmount}</div>
                )}
              </div>
              <div style={{ color: "#555", marginBottom: 4 }}>
                {lease.status && (
                  <div>Status: {lease.status}</div>
                )}
              </div>
              <div style={{ color: "#555", marginBottom: 4 }}>
                {lease.startDate && (
                  <div>Start date: {lease.startDate}</div>
                )}
              </div>
              <div style={{ color: "#555", marginBottom: 4 }}>
                {lease.endDate && (
                  <div>End Date: {lease.endDate}</div>
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
                placeholder="Rent amount"
                value={rentAmount}
                onChange={(e) => setRentAmount(e.target.value)}
              />
              <input
                type="text"
                placeholder="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
              <input
                type="text"
                placeholder="Start date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <input
                type="text"
                placeholder="End Date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
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
                  ? "Only a system administrator can unarchive this lease."
                  : "Insufficient permissions to archive this lease."
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
          Lease info
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
          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Rent Amount</dt>
          <dd>{lease.rentAmount || "—"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Status</dt>
          <dd>{lease.status || "Not set"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Start Date</dt>
          <dd>{lease.startDate || "Not set"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>End Date</dt>
          <dd>{lease.endDate || "Not set"}</dd>

          <dt style={{ fontWeight: 500, color: "#4b5563" }}>Status</dt>
          <dd>{isArchived ? "Archived" : "Active"}</dd>
        </dl>
      </section>
    </div>
  );
}
