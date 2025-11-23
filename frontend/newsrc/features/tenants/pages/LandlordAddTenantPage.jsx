// newsrc/features/tenants/pages/LandlordAddTenantPage.jsx
import { useNavigate } from "react-router-dom";
import AddTenantForm from "@features/tenants/components/AddTenantForm.jsx";
import { tenantsApi } from "@features/tenants/api/tenants.api.js";
import styles from "./LandlordTenantsPage.module.css";

export default function LandlordAddTenantPage() {
  const navigate = useNavigate();

  const handleCreate = async (payload) => {
    const created = await tenantsApi.create(payload);
    if (created && created.id) {
      navigate(`/landlord/tenants/${created.id}`);
    } else {
      // fallback if something is weird
      navigate("/landlord/tenants");
    }
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Add tenant</h1>
          <p className={styles.subtitle}>
            Create a tenant profile. You can add occupants, pets, and emergency
            contacts right after this.
          </p>
        </div>
      </header>

      <div style={{ marginTop: 12 }}>
        <AddTenantForm onCreate={handleCreate} />
        <button
          type="button"
          onClick={() => navigate("/landlord/tenants")}
          style={{ marginTop: 8 }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
