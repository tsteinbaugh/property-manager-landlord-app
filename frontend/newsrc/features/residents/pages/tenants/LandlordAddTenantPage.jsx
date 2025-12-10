// newsrc/features/residents/pages/LandlordAddTenantPage.jsx
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import AddTenantForm from "@features/residents/components/tenants/AddTenantForm.jsx";
import { tenantsApi } from "@features/residents/api/tenants.api.js";
import { leasesApi } from "@features/leases/api/leases.api.js";
import styles from "./LandlordTenantsPage.module.css";

const LEASE_DRAFT_KEY = "leaseDraft";
const LEASE_DRAFT_RETURN_KEY = "leaseDraftReturnTo";

export default function LandlordAddTenantPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { token } = useUser() || {};

  const forLease = searchParams.get("forLease") === "1";
  const leaseId = searchParams.get("leaseId") || "";
  const occupantId = searchParams.get("occupantId") || "";
  const returnTo = searchParams.get("returnTo") || "";

  const inLeaseContext = forLease && !!leaseId;
  const inOccupantContext = !!occupantId && !inLeaseContext;

  // For "link existing tenant to lease/occupant"
  const [tenants, setTenants] = useState([]);
  const [tenantsLoading, setTenantsLoading] = useState(false);
  const [tenantsError, setTenantsError] = useState(null);
  const [selectedTenantId, setSelectedTenantId] = useState("");
  const [linkSaving, setLinkSaving] = useState(false);

  // Load tenants when we need to link an existing one
  useEffect(() => {
    if (!(inLeaseContext || inOccupantContext) || !token) return;

    let cancelled = false;

    async function loadTenants() {
      try {
        setTenantsLoading(true);
        setTenantsError(null);
        const list = await tenantsApi.list({ token });
        if (!cancelled) {
          setTenants(Array.isArray(list) ? list : []);
        }
      } catch (err) {
        console.error("Failed to load tenants for context", err);
        if (!cancelled) setTenantsError(err);
      } finally {
        if (!cancelled) setTenantsLoading(false);
      }
    }

    loadTenants();
    return () => {
      cancelled = true;
    };
  }, [inLeaseContext, inOccupantContext, token]);

  const handleLinkExisting = async (e) => {
    e.preventDefault();
    if (!token || !selectedTenantId) {
      alert("Select a tenant to link.");
      return;
    }

    try {
      setLinkSaving(true);

      if (inLeaseContext) {
        // ✅ Link tenant to lease via many-to-many join
        await leasesApi.linkTenant(leaseId, selectedTenantId, { token });
        navigate(`/landlord/leases/${leaseId}`);
      } else if (inOccupantContext) {
        // Link tenant to occupant via join table
        await tenantsApi.linkOccupant(selectedTenantId, occupantId, { token });

        const target = returnTo || `/landlord/occupants/${occupantId}`;
        navigate(target);
      }
    } catch (err) {
      console.error("Failed to link tenant", err);
      alert("Failed to link tenant. Check console for details.");
    } finally {
      setLinkSaving(false);
    }
  };

  const handleCreate = async (payload) => {
    if (!token) {
      alert("Missing auth token.");
      return;
    }

    // 1) Lease context: create tenant and link to specific lease
    if (inLeaseContext) {
      try {
        const created = await tenantsApi.create(payload, { token });

        if (created && created.id) {
          try {
            // ✅ link new tenant to this lease via LeaseTenant
            await leasesApi.linkTenant(leaseId, created.id, { token });
          } catch (err) {
            console.error("Tenant created but failed to link to lease", err);
            alert(
              "Tenant was created, but linking it to the lease failed. " +
                "You can link it later from the lease or tenant detail pages."
            );
          }
        }

        navigate(`/landlord/leases/${leaseId}`);
      } catch (err) {
        console.error("Failed to create tenant in lease context", err);
        alert("Failed to create tenant. Check console for details.");
      }

      return;
    }

    // 2) "Draft for lease" mode (no leaseId) used by Add Lease wizard
    if (forLease && !leaseId) {
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

        const draftReturn =
          sessionStorage.getItem(LEASE_DRAFT_RETURN_KEY) ||
          "/landlord/leases/new";

        navigate(draftReturn);
      } catch (err) {
        console.error("Failed to stage tenant for lease draft", err);
        alert("Failed to stage tenant for lease. Check console for details.");
      }
      return;
    }

    // 3) Occupant context: create tenant and link to occupant
    if (inOccupantContext) {
      try {
        const created = await tenantsApi.create(payload, { token });

        if (created && created.id) {
          try {
            await tenantsApi.linkOccupant(created.id, occupantId, { token });
          } catch (err) {
            console.error(
              "Tenant created but failed to link to occupant",
              err
            );
            alert(
              "Tenant was created, but linking it to the occupant failed. " +
                "You can link it later from the occupant or tenant detail pages."
            );
          }
        }

        const target = returnTo || `/landlord/occupants/${occupantId}`;
        navigate(target);
      } catch (err) {
        console.error("Failed to create tenant in occupant context", err);
        alert("Failed to create tenant. Check console for details.");
      }

      return;
    }

    // 4) Normal behavior: create tenant and go back to Residents → Tenants
    try {
      await tenantsApi.create(payload, { token });
      navigate("/landlord/residents?tab=tenants");
    } catch (err) {
      console.error("Failed to create tenant", err);
      alert("Failed to create tenant. Check console for details.");
    }
  };

  const handleCancel = () => {
    // Lease context: go back to lease details
    if (inLeaseContext) {
      navigate(`/landlord/leases/${leaseId}`);
      return;
    }

    // Draft-for-lease mode
    if (forLease && !leaseId) {
      const draftReturn =
        sessionStorage.getItem(LEASE_DRAFT_RETURN_KEY) ||
        "/landlord/leases/new";
      navigate(draftReturn);
      return;
    }

    // Occupant context: go back to occupant detail
    if (inOccupantContext) {
      const target = returnTo || `/landlord/occupants/${occupantId}`;
      navigate(target);
      return;
    }

    // Normal mode
    navigate("/landlord/residents?tab=tenants");
  };

  const heading = inLeaseContext
    ? "Add or link tenant for lease"
    : inOccupantContext
    ? "Add or link tenant for occupant"
    : "Add tenant";

  const subtitle = inLeaseContext
    ? "Link an existing tenant to this lease or create a new tenant that will be automatically linked."
    : inOccupantContext
    ? "Link an existing tenant to this occupant or create a new tenant that will be automatically linked."
    : "Create a tenant profile. You can add occupants, pets, and emergency contacts after this.";

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>{heading}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </header>

      {/* Context-only: link existing tenant */}
      {(inLeaseContext || inOccupantContext) && (
        <section
          style={{
            marginTop: 12,
            marginBottom: 16,
            padding: 12,
            borderRadius: 8,
            border: "1px solid #e5e7eb",
            maxWidth: 480,
          }}
        >
          <h2 style={{ fontSize: 14, margin: "0 0 8px" }}>
            {inLeaseContext
              ? "Link an existing tenant to this lease"
              : "Link an existing tenant to this occupant"}
          </h2>

          {tenantsLoading ? (
            <div style={{ fontSize: 13 }}>Loading tenants…</div>
          ) : tenantsError ? (
            <div style={{ fontSize: 13, color: "crimson" }}>
              Failed to load tenants:{" "}
              {String(tenantsError.message || tenantsError)}
            </div>
          ) : tenants.length === 0 ? (
            <div style={{ fontSize: 13, color: "#6b7280" }}>
              You don&apos;t have any tenants yet. Use the form below to create
              one and it will be linked to this{" "}
              {inLeaseContext ? "lease" : "occupant"}.
            </div>
          ) : (
            <form
              onSubmit={handleLinkExisting}
              style={{ display: "flex", flexDirection: "column", gap: 8 }}
            >
              <label
                style={{ display: "flex", flexDirection: "column", gap: 4 }}
              >
                <span>Select tenant</span>
                <select
                  value={selectedTenantId}
                  onChange={(e) => setSelectedTenantId(e.target.value)}
                  disabled={linkSaving}
                >
                  <option value="">Choose a tenant…</option>
                  {tenants.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name} {t.email ? `(${t.email})` : ""}
                    </option>
                  ))}
                </select>
              </label>

              <button
                type="submit"
                disabled={linkSaving || !selectedTenantId}
                style={{ marginTop: 4 }}
              >
                {linkSaving ? "Linking…" : "Link tenant"}
              </button>
            </form>
          )}
        </section>
      )}

      <div style={{ marginTop: 12 }}>
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
