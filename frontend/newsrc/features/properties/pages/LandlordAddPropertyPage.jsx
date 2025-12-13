// newsrc/features/properties/pages/LandlordAddPropertyPage.jsx
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import { propertiesApi } from "@features/properties/api/properties.api.js";
import { leasesApi } from "@features/leases/api/leases.api.js";
import AddPropertyForm from "../components/AddPropertyForm.jsx";
import styles from "./LandlordPropertiesPage.module.css";

export default function LandlordAddPropertyPage() {
  const navigate = useNavigate();
  const { token } = useUser() || {};
  const [searchParams] = useSearchParams();

  const leaseId = searchParams.get("leaseId") || "";
  const forLease = searchParams.get("forLease") === "1";
  const inLeaseContext = !!leaseId && forLease;

  const [properties, setProperties] = useState([]);
  const [loadingProps, setLoadingProps] = useState(false);
  const [propsError, setPropsError] = useState(null);
  const [selectedPropertyId, setSelectedPropertyId] = useState("");
  const [linkSaving, setLinkSaving] = useState(false);

  // When in lease context, load existing properties for the link-dropdown
  useEffect(() => {
    if (!inLeaseContext || !token) return;

    let cancelled = false;

    async function loadProps() {
      try {
        setLoadingProps(true);
        setPropsError(null);
        const list = await propertiesApi.list({ token });
        if (!cancelled) {
          setProperties(Array.isArray(list) ? list : []);
        }
      } catch (err) {
        console.error("Failed to load properties for lease context", err);
        if (!cancelled) setPropsError(err);
      } finally {
        if (!cancelled) setLoadingProps(false);
      }
    }

    loadProps();
    return () => {
      cancelled = true;
    };
  }, [inLeaseContext, token]);

  // Called after AddPropertyForm successfully creates a property
  // NOTE: AddPropertyForm should call onCreated(createdProperty).
  // If it calls with no argument, "created" will just be undefined and
  // we quietly fall back to the old behavior.
  const handleCreated = async (created) => {
    if (inLeaseContext && created && created.id && token) {
      try {
        await leasesApi.update(
          leaseId,
          { propertyId: created.id },
          { token }
        );
      } catch (err) {
        console.error("Property created but failed to link to lease", err);
        alert(
          "Property was created, but linking it to the lease failed. " +
            "You can link it later from the lease or property detail pages."
        );
      }
      navigate(`/landlord/leases/${leaseId}`);
      return;
    }

    // Default behavior: no lease context → back to properties list
    navigate("/landlord/properties");
  };

  const handleLinkExisting = async (e) => {
    e.preventDefault();
    if (!inLeaseContext || !token) return;
    if (!selectedPropertyId) {
      alert("Select a property to link.");
      return;
    }

    try {
      setLinkSaving(true);
      await leasesApi.update(
        leaseId,
        { propertyId: selectedPropertyId },
        { token }
      );
      navigate(`/landlord/leases/${leaseId}`);
    } catch (err) {
      console.error("Failed to link property to lease", err);
      alert("Failed to link property. Check console for details.");
    } finally {
      setLinkSaving(false);
    }
  };

  const handleCancel = () => {
    // lease context → go back to that lease
    if (inLeaseContext && leaseId) {
      navigate(`/landlord/leases/${leaseId}`);
      return;
    }

    // default → back to properties list
    navigate("/landlord/properties");
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>
            {inLeaseContext
              ? "Add or link property for lease"
              : "Add property"}
          </h1>
          <p className={styles.subtitle}>
            {inLeaseContext
              ? "Link an existing property to this lease or create a new property that will be automatically linked."
              : "Create a new rental property. You can add tenants, leases, and financials later."}
          </p>
        </div>
      </header>

      {inLeaseContext && (
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
            Link an existing property to this lease
          </h2>
          {loadingProps ? (
            <div style={{ fontSize: 13 }}>Loading properties…</div>
          ) : propsError ? (
            <div style={{ fontSize: 13, color: "crimson" }}>
              Failed to load properties:{" "}
              {String(propsError.message || propsError)}
            </div>
          ) : properties.length === 0 ? (
            <div style={{ fontSize: 13, color: "#6b7280" }}>
              You don&apos;t have any properties yet. Use the form below to
              create one and it will be linked to this lease.
            </div>
          ) : (
            <form
              onSubmit={handleLinkExisting}
              style={{ display: "flex", flexDirection: "column", gap: 8 }}
            >
              <label
                style={{ display: "flex", flexDirection: "column", gap: 4 }}
              >
                <span>Select property</span>
                <select
                  value={selectedPropertyId}
                  onChange={(e) => setSelectedPropertyId(e.target.value)}
                  disabled={linkSaving}
                >
                  <option value="">Choose a property…</option>
                  {properties.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name || p.address1 || p.address || p.id}
                    </option>
                  ))}
                </select>
              </label>
              <button
                type="submit"
                disabled={linkSaving || !selectedPropertyId}
                style={{ marginTop: 4 }}
              >
                {linkSaving ? "Linking…" : "Link property to lease"}
              </button>
            </form>
          )}
        </section>
      )}

      <div style={{ marginTop: 12 }}>
        <AddPropertyForm onCreated={handleCreated} />

        <div style={{ marginTop: 12 }}>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
