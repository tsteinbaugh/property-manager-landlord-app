// newsrc/features/tenants/pages/LandlordAddTenantPage.jsx
import { useNavigate } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import AddTenantForm from "@features/tenants/components/AddTenantForm.jsx";
import { tenantsApi } from "@features/tenants/api/tenants.api.js";
import styles from "./LandlordTenantsPage.module.css";

export default function LandlordAddTenantPage() {
  const navigate = useNavigate();
  const { token } = useUser() || {};

  const handleCreate = async (payload) => {
    try {
      await tenantsApi.create(payload, { token });
      // After creation, go back to Residents page on the Tenants tab
      navigate("/landlord/residents?tab=tenants");
    } catch (err) {
      console.error("Failed to create tenant", err);
      alert("Failed to create tenant. Check console for details.");
    }
  };

  const handleCancel = () => {
    // Just go back to the Residents page, tenants tab
    navigate("/landlord/residents?tab=tenants");
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
