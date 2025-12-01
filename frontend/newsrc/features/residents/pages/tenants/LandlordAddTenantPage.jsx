// newsrc/features/tenants/pages/LandlordAddTenantPage.jsx
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import AddTenantForm from "@features/residents/components/tenants/AddTenantForm.jsx";
import { tenantsApi } from "@features/residents/api/tenants.api.js";
import styles from "./LandlordTenantsPage.module.css";

const LEASE_DRAFT_KEY = "leaseDraft";
const LEASE_DRAFT_RETURN_KEY = "leaseDraftReturnTo";

export default function LandlordAddTenantPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { token } = useUser() || {};

  const forLease = searchParams.get("forLease") === "1";

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

        sessionStorage.setItem(
          LEASE_DRAFT_KEY,
          JSON.stringify(updatedDraft)
        );

        const returnTo =
          sessionStorage.getItem(LEASE_DRAFT_RETURN_KEY) ||
          "/landlord/leases/new";

        navigate(returnTo);
      } catch (err) {
        console.error("Failed to stage tenant for lease", err);
        alert("Failed to stage tenant for lease. Check console for details.");
      }
      return;
    }

    // Normal behavior: create real tenant and go back to Residents → Tenants
    try {
      await tenantsApi.create(payload, { token });
      navigate("/landlord/residents?tab=tenants");
    } catch (err) {
      console.error("Failed to create tenant", err);
      alert("Failed to create tenant. Check console for details.");
    }
  };

  const handleCancel = () => {
    if (forLease) {
      // Just go back to lease creation without changing draft
      const returnTo =
        sessionStorage.getItem(LEASE_DRAFT_RETURN_KEY) ||
        "/landlord/leases/new";
      navigate(returnTo);
    } else {
      navigate("/landlord/residents?tab=tenants");
    }
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Add tenant</h1>
          <p className={styles.subtitle}>
            Create a tenant profile. You can add occupants, pets, and emergency
            contacts after this.
          </p>
        </div>
      </header>

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
