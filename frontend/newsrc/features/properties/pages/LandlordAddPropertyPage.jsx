import { useNavigate, useSearchParams } from "react-router-dom";
import AddPropertyForm from "../components/AddPropertyForm.jsx";
import styles from "./LandlordPropertiesPage.module.css";

const LEASE_DRAFT_KEY = "leaseDraft";
const LEASE_DRAFT_RETURN_KEY = "leaseDraftReturnTo";

export default function LandlordAddPropertyPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const forLease = searchParams.get("forLease") === "1";

  const handleCreated = () => {
    // Normal flow: just go back to properties list
    navigate("/landlord/properties");
  };

  // Called only in forLease mode: stage the property instead of creating it.
  const handleSubmitForLease = (payload) => {
    // Merge into existing lease draft (if any)
    let draft = {};
    const raw = sessionStorage.getItem(LEASE_DRAFT_KEY);
    if (raw) {
      try {
        draft = JSON.parse(raw) || {};
      } catch {
        draft = {};
      }
    }

    draft.draftProperty = {
      name: payload.name,
      address1: payload.address1,
      city: payload.city,
      state: payload.state,
      postalCode: payload.postalCode,
    };

    try {
      sessionStorage.setItem(LEASE_DRAFT_KEY, JSON.stringify(draft));
    } catch (e) {
      console.warn("Failed to persist leaseDraft (property)", e);
    }

    const returnTo = sessionStorage.getItem(LEASE_DRAFT_RETURN_KEY);
    if (returnTo) {
      navigate(returnTo);
    } else {
      navigate("/landlord/leases/new");
    }
  };

  const handleCancel = () => {
    if (forLease) {
      const returnTo = sessionStorage.getItem(LEASE_DRAFT_RETURN_KEY);
      if (returnTo) {
        navigate(returnTo);
      } else {
        navigate("/landlord/leases/new");
      }
    } else {
      navigate("/landlord/properties");
    }
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Add property</h1>
          <p className={styles.subtitle}>
            Create a new rental property. You can add tenants, leases, and
            financials later.
          </p>
        </div>
      </header>

      <div style={{ marginTop: 12 }}>
        <AddPropertyForm
          // Normal mode: real creation via API
          onCreated={forLease ? undefined : handleCreated}
          // Lease mode: stage into leaseDraft instead of hitting the API
          onSubmit={forLease ? handleSubmitForLease : undefined}
        />
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
