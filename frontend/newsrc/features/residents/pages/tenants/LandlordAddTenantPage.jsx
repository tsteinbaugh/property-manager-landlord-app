// newsrc/features/tenants/pages/LandlordAddTenantPage.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import AddTenantForm from "@features/residents/components/tenants/AddTenantForm.jsx";
import { tenantsApi } from "@features/residents/api/tenants.api.js";
import { occupantsApi } from "@features/residents/api/occupants.api.js";
import styles from "./LandlordTenantsPage.module.css";

const LEASE_DRAFT_KEY = "leaseDraft";
const LEASE_DRAFT_RETURN_KEY = "leaseDraftReturnTo";

export default function LandlordAddTenantPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { token } = useUser() || {};

  const forLease = searchParams.get("forLease") === "1";

  // New: occupant context support
  const occupantId = searchParams.get("occupantId") || "";
  const rawReturnTo = searchParams.get("returnTo") || "";
  const returnTo = rawReturnTo ? decodeURIComponent(rawReturnTo) : "";

  const [tenants, setTenants] = useState([]);
  const [selectedTenantId, setSelectedTenantId] = useState("");

  // When in occupant context (and not in lease-draft mode), load tenants to link
  useEffect(() => {
    if (!occupantId || forLease || !token) return;

    let cancelled = false;

    async function loadTenants() {
      try {
        const rows = await tenantsApi.list({ token });
        if (!cancelled) {
          setTenants(Array.isArray(rows) ? rows : []);
        }
      } catch (err) {
        console.error("Failed to load tenants for occupant linking", err);
      }
    }

    loadTenants();

    return () => {
      cancelled = true;
    };
  }, [occupantId, forLease, token]);

  const handleLinkExistingTenant = async (e) => {
    e.preventDefault();
    if (!selectedTenantId) {
      alert("Select a tenant to link.");
      return;
    }

    try {
      await occupantsApi.update(
        occupantId,
        { tenantId: selectedTenantId },
        { token }
      );

      navigate(returnTo || `/landlord/occupants/${occupantId}`);
    } catch (err) {
      console.error("Failed to link tenant to occupant", err);
      alert("Failed to link tenant. Check console for details.");
    }
  };

  const handleCreate = async (payload) => {
    if (forLease) {
      // Special "draft for lease" mode: DO NOT hit the API here.
      try {
        const raw = sessionStorage.getItem(LEASE_DRAFT_KEY);
        const draft = raw ? JSON.parse(raw) : {};

        const nextDraftTenants = Array.isArray(draft.draftNewTenants)
          ? [...draft.draftNewTenants]
          : [];

        nextDraftTenants.push({
          name: payload.name?.trim() || "New tenant",
          email: payload.email?.trim() || "",
          phone: payload.phone?.trim() || "",
        });

        const updatedDraft = {
          ...draft,
          draftNewTenants: nextDraftTenants,
        };

        sessionStorage.setItem(LEASE_DRAFT_KEY, JSON.stringify(updatedDraft));

        const leaseReturnTo =
          sessionStorage.getItem(LEASE_DRAFT_RETURN_KEY) ||
          "/landlord/leases/new";

        navigate(leaseReturnTo);
      } catch (err) {
        console.error("Failed to stage tenant for lease", err);
        alert("Failed to stage tenant for lease. Check console for details.");
      }
      return;
    }

    // Normal / occupant-context behavior: create real tenant
    try {
      const created = await tenantsApi.create(payload, { token });

      // If we're in occupant context, immediately link this tenant to the occupant
      if (occupantId && created && created.id) {
        try {
          await occupantsApi.update(
            occupantId,
            { tenantId: created.id },
            { token }
          );
        } catch (linkErr) {
          console.error(
            "Tenant created but failed to link to occupant",
            linkErr
          );
          alert(
            "Tenant was created, but linking to the occupant failed. " +
              "You can try linking the tenant again from the occupant page."
          );
        }
      }

      if (occupantId) {
        navigate(returnTo || `/landlord/occupants/${occupantId}`);
      } else {
        // Normal behavior: go back to Residents → Tenants
        navigate("/landlord/residents?tab=tenants");
      }
    } catch (err) {
      console.error("Failed to create tenant", err);
      alert("Failed to create tenant. Check console for details.");
    }
  };

  const handleCancel = () => {
    if (forLease) {
      // Just go back to lease creation without changing draft
      const leaseReturnTo =
        sessionStorage.getItem(LEASE_DRAFT_RETURN_KEY) ||
        "/landlord/leases/new";
      navigate(leaseReturnTo);
    } else if (occupantId) {
      navigate(returnTo || `/landlord/occupants/${occupantId}`);
    } else {
      navigate("/landlord/residents?tab=tenants");
    }
  };

  const inOccupantContext = !!occupantId && !forLease;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Add tenant</h1>
          <p className={styles.subtitle}>
            {inOccupantContext
              ? "Create or link a tenant for this occupant."
              : "Create a tenant profile. You can add occupants, pets, and emergency contacts after this."}
          </p>
        </div>
      </header>

      <div style={{ marginTop: 12 }}>
        {/* Link existing tenant → occupant */}
        {inOccupantContext && (
          <section
            style={{
              marginBottom: 16,
              padding: 12,
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              background: "#ffffff",
              maxWidth: 480,
            }}
          >
            <h2 style={{ fontSize: 14, margin: "0 0 8px" }}>
              Link an existing tenant
            </h2>
            <p
              style={{
                fontSize: 12,
                color: "#6b7280",
                margin: "0 0 8px",
              }}
            >
              Choose an existing tenant to link to this occupant.
            </p>

            <form
              onSubmit={handleLinkExistingTenant}
              style={{
                display: "flex",
                gap: 8,
                alignItems: "center",
              }}
            >
              <select
                style={{ flex: 1 }}
                value={selectedTenantId}
                onChange={(e) => setSelectedTenantId(e.target.value)}
              >
                <option value="">Select a tenant…</option>
                {tenants.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name} {t.email ? `(${t.email})` : ""}
                  </option>
                ))}
              </select>
              <button type="submit" disabled={!selectedTenantId}>
                Link
              </button>
            </form>
          </section>
        )}

        {/* Create new tenant (normal + occupant context) */}
        <AddTenantForm onCreate={handleCreate} />

        <button
          type="button"
          onClick={handleCancel}
          style={{ marginTop: 8 }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
