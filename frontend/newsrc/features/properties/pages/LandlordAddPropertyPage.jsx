// newsrc/features/properties/pages/LandlordAddPropertyPage.jsx
import { useNavigate } from "react-router-dom";
import AddPropertyForm from "../components/AddPropertyForm.jsx";
import styles from "./LandlordPropertiesPage.module.css";

export default function LandlordAddPropertyPage() {
  const navigate = useNavigate();

  const handleCreated = () => {
    navigate("/landlord/properties");
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Add property</h1>
          <p className={styles.subtitle}>
            Create a new rental property. You can add tenants, leases, and financials later.
          </p>
        </div>
      </header>

      <div style={{ marginTop: 12 }}>
        <AddPropertyForm onCreated={handleCreated} />
        <button
          type="button"
          onClick={() => navigate("/landlord/properties")}
          style={{ marginTop: 8 }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
