import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@app/providers.jsx";
import PropertyCard from "../components/PropertyCard.jsx";
import styles from "./LandlordPropertiesPage.module.css";

const BASE_URL = "http://localhost:4000"; // or import from your api client

export default function LandlordPropertiesPage() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(`${BASE_URL}/api/properties`);
        if (!res.ok) {
          throw new Error(`Failed to load properties (status ${res.status})`);
        }
        const data = await res.json();
        if (!cancelled) {
          setProperties(Array.isArray(data) ? data : data.properties || []);
        }
      } catch (err) {
        if (!cancelled) {
          console.error("Failed to load properties", err);
          setError("Failed to load properties. Please try again.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  // Only show properties owned by this landlord
  const visibleProperties = useMemo(() => {
    if (!user) return properties || [];

    // TEMP: during migration, you can keep properties with no landlordId visible
    // so you don't think everything disappeared. Once you're happy with data,
    // change this to just `p.landlordId === user.id`.
    return (properties || []).filter((p) => {
      if (!p.landlordId) return true; // migration-friendly
      return p.landlordId === user.id;
    });
  }, [properties, user]);

  const hasVisibleProperties = visibleProperties.length > 0;

  const handleAddProperty = () => {
    navigate("/landlord/properties/new");
  };

  const handleOpenProperty = (propertyId) => {
    navigate(`/landlord/properties/${propertyId}`);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Your properties</h1>
          <p className={styles.subtitle}>
            Manage your rentals, track tenants, leases, and finances from one place.
          </p>
        </div>

        <div className={styles.actions}>
          {hasVisibleProperties && (
            <button
              type="button"
              className={styles.primaryButton}
              onClick={handleAddProperty}
            >
              + Add property
            </button>
          )}
        </div>
      </header>

      {isLoading && (
        <div className={styles.center}>
          <p className={styles.muted}>Loading your properties…</p>
        </div>
      )}

      {!isLoading && error && (
        <div className={styles.center}>
          <p className={styles.error}>{error}</p>
        </div>
      )}

      {!isLoading && !error && !hasVisibleProperties && (
        <div className={styles.empty}>
          <h2 className={styles.emptyTitle}>No properties yet</h2>
          <p className={styles.emptyText}>
            Once you add your first property, you’ll see it here with its tenants, lease, and
            financials.
          </p>
          <button
            type="button"
            className={styles.primaryButton}
            onClick={handleAddProperty}
          >
            Create your first property
          </button>
        </div>
      )}

      {!isLoading && !error && hasVisibleProperties && (
        <div className={styles.grid}>
          {visibleProperties.map((p) => (
            <PropertyCard
              key={p.id}
              property={p}
              onClick={() => handleOpenProperty(p.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
