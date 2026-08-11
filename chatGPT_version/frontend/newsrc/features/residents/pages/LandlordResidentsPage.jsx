// newsrc/features/residents/pages/LandlordResidentsPage.jsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useUser } from "@app/providers.jsx";
import { tenantsApi } from "@features/tenants/api/tenants.api.js";
import { occupantsApi } from "@features/residents/api/occupants.api.js";
import { petsApi } from "@features/residents/api/pets.api.js";
import { emergencyContactsApi } from "@features/residents/api/emergencyContacts.api.js";
import { vehiclesApi } from "@features/residents/api/vehicles.api.js";

import TenantCard from "@features/tenants/components/TenantCard.jsx";
import OccupantCard from "@features/residents/components/occupants/OccupantCard.jsx"
import PetCard from "@features/residents/components/pets/PetCard.jsx";
import EmergencyContactCard from "@features/residents/components/emergencyContacts/EmergencyContactCard.jsx";
import VehicleCard from "@features/residents/components/vehicles/VehicleCard.jsx";

import page from "@shared/styles/ui.pages.module.css";
import card from "@shared/styles/ui.cards.module.css";
import shared from "@shared/styles/ui.shared.module.css";

export default function LandlordResidentsPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { token } = useUser() || {};

  const VALID_TABS = [
    "tenants",
    "occupants",
    "pets",
    "emergencyContacts",
    "vehicles",
  ];

  const normalizeTab = (raw) => {
    if (!raw) return "tenants";
    return VALID_TABS.includes(raw) ? raw : "tenants";
  };

  const [activeTab, setActiveTab] = useState(
    normalizeTab(searchParams.get("tab"))
  );

  // Keep activeTab in sync with ?tab in the URL (e.g. when sidebar links are clicked)
  useEffect(() => {
    const tabFromUrl = normalizeTab(searchParams.get("tab"));
    setActiveTab(tabFromUrl);
  }, [searchParams]);

  const handleTabChange = (nextTab) => {
    const safeTab = normalizeTab(nextTab);
    setActiveTab(safeTab);

    // keep URL in sync; omit ?tab when on tenants
    if (safeTab === "tenants") {
      setSearchParams({});
    } else {
      setSearchParams({ tab: safeTab });
    }
  };

  // ---------------- TENANTS STATE ----------------

  const [tenants, setTenants] = useState([]);
  const [tenantsLoading, setTenantsLoading] = useState(true);
  const [tenantsError, setTenantsError] = useState("");
  const [showArchivedTenants, setShowArchivedTenants] = useState(false);

  // Load tenants when Tenants tab is active
  useEffect(() => {
    if (activeTab !== "tenants") return;
    if (!token) {
      setTenantsLoading(false);
      setTenantsError("Not signed in.");
      return;
    }

    let cancelled = false;

    async function load() {
      try {
        setTenantsLoading(true);
        setTenantsError("");
        const data = await tenantsApi.listAll({
          includeArchived: true,
          token,
        });        
        if (!cancelled) {
          setTenants(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        console.error("Failed to load tenants (Residents page)", err);
        if (!cancelled) {
          setTenantsError("Failed to load tenants. Please try again.");
        }
      } finally {
        if (!cancelled) setTenantsLoading(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [activeTab, token]);

  const visibleTenants = useMemo(() => {
    if (showArchivedTenants) return tenants;
    return (tenants || []).filter((t) => !t.archived);
  }, [tenants, showArchivedTenants]);

  const hasVisibleTenants = visibleTenants.length > 0;
  const hasAnyArchivedTenants = (tenants || []).some((t) => t.archived);

  const handleAddTenant = () => {
    navigate("/landlord/tenants/new");
  };

  const handleOpenTenant = (tenantId) => {
    navigate(`/landlord/tenants/${tenantId}`);
  };

  const renderTenantsTab = () => (
    <>
      {tenantsLoading && (
        <div className={page.center}>
          <p className={shared.muted}>Loading your tenants…</p>
        </div>
      )}

      {!tenantsLoading && tenantsError && (
        <div className={page.center}>
          <p className={shared.error}>{tenantsError}</p>
        </div>
      )}

      {!tenantsLoading && !tenantsError && !hasVisibleTenants && (
        <div className={page.empty}>
          <h2 className={page.emptyTitle}>
            {hasAnyArchivedTenants ? "No active tenants" : "No tenants yet"}
          </h2>
          <p className={page.emptyText}>
            {hasAnyArchivedTenants
              ? "Archived tenants are hidden from your active list. You can view them using the link above."
              : "Once you add your first tenant, you’ll see them here."}
          </p>
          {!hasAnyArchivedTenants && (
            <button
              type="button"
              className={card.primaryButton}
              onClick={handleAddTenant}
            >
              Create your first tenant
            </button>
          )}
        </div>
      )}

      {!tenantsLoading && !tenantsError && hasVisibleTenants && (
        <div className={page.grid}>
          {visibleTenants.map((t) => (
            <TenantCard
              key={t.id}
              tenant={t}
              onClick={() => handleOpenTenant(t.id)}
            />
          ))}
        </div>
      )}
    </>
  );

  // ---------------- OCCUPANTS STATE ----------------

  const [occupants, setOccupants] = useState([]);
  const [occupantsLoading, setOccupantsLoading] = useState(true);
  const [occupantsError, setOccupantsError] = useState("");
  const [showArchivedOccupants, setShowArchivedOccupants] = useState(false);

  // Load occupants when Occupants tab is active
  useEffect(() => {
    if (activeTab !== "occupants") return;
    if (!token) {
      setOccupantsLoading(false);
      setOccupantsError("Not signed in.");
      return;
    }

    let cancelled = false;

    async function load() {
      try {
        setOccupantsLoading(true);
        setOccupantsError("");
        const data = await occupantsApi.listAll({
          includeArchived: true,
          token,
        });
        if (!cancelled) {
          setOccupants(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        console.error("Failed to load occupants (Residents page)", err);
        if (!cancelled) {
          setOccupantsError("Failed to load occupants. Please try again.");
        }
      } finally {
        if (!cancelled) setOccupantsLoading(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [activeTab, token]);

  const visibleOccupants = useMemo(() => {
    if (showArchivedOccupants) return occupants;
    return (occupants || []).filter((o) => !o.archived);
  }, [occupants, showArchivedOccupants]);

  const hasVisibleOccupants = visibleOccupants.length > 0;
  const hasAnyArchivedOccupants = (occupants || []).some((o) => o.archived);

  const handleAddOccupant = () => {
    navigate("/landlord/occupants/new");
  };

  const handleOpenOccupant = (occupantId) => {
    navigate(`/landlord/occupants/${occupantId}`);
  };

  const renderOccupantsTab = () => (
    <>
      {occupantsLoading && (
        <div className={page.center}>
          <p className={shared.muted}>Loading your occupants…</p>
        </div>
      )}

      {!occupantsLoading && occupantsError && (
        <div className={page.center}>
          <p className={shared.error}>{occupantsError}</p>
        </div>
      )}

      {!occupantsLoading && !occupantsError && !hasVisibleOccupants && (
        <div className={page.empty}>
          <h2 className={page.emptyTitle}>
            {hasAnyArchivedOccupants ? "No active occupants" : "No occupants yet"}
          </h2>
          <p className={page.emptyText}>
            {hasAnyArchivedOccupants
              ? "Archived occupants are hidden from your active list. You can view them using the link above."
              : "Once you add your first occupant, you’ll see them here. You can link them to leases later."}
          </p>
          {!hasAnyArchivedOccupants && (
            <button
              type="button"
              className={card.primaryButton}
              onClick={handleAddOccupant}
            >
              Create your first occupant
            </button>
          )}
        </div>
      )}

      {!occupantsLoading && !occupantsError && hasVisibleOccupants && (
        <div className={page.grid}>
          {visibleOccupants.map((o) => (
            <OccupantCard
              key={o.id || `${o.name || "occupant"}:${o.createdAt || ""}`}
              occupant={o}
              onClick={() => handleOpenOccupant(o.id)}
            />
          ))}
        </div>
      )}
    </>
  );

    // ---------------- PETS STATE ----------------

  const [pets, setPets] = useState([]);
  const [petsLoading, setPetsLoading] = useState(true);
  const [petsError, setPetsError] = useState("");
  const [showArchivedPets, setShowArchivedPets] = useState(false);

  // Load pets when Pets tab is active
  useEffect(() => {
    if (activeTab !== "pets") return;
    if (!token) {
      setPetsLoading(false);
      setPetsError("Not signed in.");
      return;
    }

    let cancelled = false;

    async function load() {
      try {
        setPetsLoading(true);
        setPetsError("");
        const data = await petsApi.listAll({
          includeArchived: true,
          token,
        });
        if (!cancelled) {
          setPets(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        console.error("Failed to load pets (Residents page)", err);
        if (!cancelled) {
          setPetsError("Failed to load pets. Please try again.");
        }
      } finally {
        if (!cancelled) setPetsLoading(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [activeTab, token]);

  const visiblePets = useMemo(() => {
    if (showArchivedPets) return pets;
    return (pets || []).filter((o) => !o.archived);
  }, [pets, showArchivedPets]);

  const hasVisiblePets = visiblePets.length > 0;
  const hasAnyArchivedPets = (pets || []).some((o) => o.archived);

  const handleAddPet = () => {
    navigate("/landlord/pets/new");
  };

  const handleOpenPet = (petId) => {
    navigate(`/landlord/pets/${petId}`);
  };

  const renderPetsTab = () => (
    <>
      {petsLoading && (
        <div className={page.center}>
          <p className={shared.muted}>Loading your pets…</p>
        </div>
      )}

      {!petsLoading && petsError && (
        <div className={page.center}>
          <p className={shared.error}>{petsError}</p>
        </div>
      )}

      {!petsLoading && !petsError && !hasVisiblePets && (
        <div className={page.empty}>
          <h2 className={page.emptyTitle}>
            {hasAnyArchivedPets ? "No active pets" : "No pets yet"}
          </h2>
          <p className={page.emptyText}>
            {hasAnyArchivedPets
              ? "Archived pets are hidden from your active list. You can view them using the link above."
              : "Once you add your first pet, you’ll see them here. You can link them to leases later."}
          </p>
          {!hasAnyArchivedPets && (
            <button
              type="button"
              className={card.primaryButton}
              onClick={handleAddPet}
            >
              Create your first pet
            </button>
          )}
        </div>
      )}

      {!petsLoading && !petsError && hasVisiblePets && (
        <div className={page.grid}>
          {visiblePets.map((o) => (
            <PetCard
              key={o.id || `${o.name || "pet"}:${o.createdAt || ""}`}
              pet={o}
              onClick={() => handleOpenPet(o.id)}
            />
          ))}
        </div>
      )}
    </>
  );

  // ---------------- EMERGENCY CONTACTS STATE ----------------

  const [emergencyContacts, setEmergencyContacts] = useState([]);
  const [emergencyContactsLoading, setEmergencyContactsLoading] = useState(true);
  const [emergencyContactsError, setEmergencyContactsError] = useState("");
  const [showArchivedEmergencyContacts, setShowArchivedEmergencyContacts] = useState(false);

  // Load emergency contacts when Emergency Contacts tab is active
  useEffect(() => {
    if (activeTab !== "emergencyContacts") return;
    if (!token) {
      setEmergencyContactsLoading(false);
      setEmergencyContactsError("Not signed in.");
      return;
    }

    let cancelled = false;

    async function load() {
      try {
        setEmergencyContactsLoading(true);
        setEmergencyContactsError("");
        const data = await emergencyContactsApi.listAll({
          includeArchived: true,
          token,
        });
        if (!cancelled) {
          setEmergencyContacts(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        console.error("Failed to load emergency contacts (Residents page)", err);
        if (!cancelled) {
          setEmergencyContactsError("Failed to load emergency contacts. Please try again.");
        }
      } finally {
        if (!cancelled) setEmergencyContactsLoading(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [activeTab, token]);

  const visibleEmergencyContacts = useMemo(() => {
    if (showArchivedEmergencyContacts) return emergencyContacts;
    return (emergencyContacts || []).filter((o) => !o.archived);
  }, [emergencyContacts, showArchivedEmergencyContacts]);

  const hasVisibleEmergencyContacts = visibleEmergencyContacts.length > 0;
  const hasAnyArchivedEmergencyContacts = (emergencyContacts || []).some((o) => o.archived);

  const handleAddEmergencyContact = () => {
    navigate("/landlord/emergencyContacts/new");
  };

  const handleOpenEmergencyContact = (emergencyContactId) => {
    navigate(`/landlord/emergencyContacts/${emergencyContactId}`);
  };

  const renderEmergencyContactsTab = () => (
    <>
      {emergencyContactsLoading && (
        <div className={page.center}>
          <p className={shared.muted}>Loading your emergency contacts…</p>
        </div>
      )}

      {!emergencyContactsLoading && emergencyContactsError && (
        <div className={page.center}>
          <p className={shared.error}>{emergencyContactsError}</p>
        </div>
      )}

      {!emergencyContactsLoading && !emergencyContactsError && !hasVisibleEmergencyContacts && (
        <div className={page.empty}>
          <h2 className={page.emptyTitle}>
            {hasAnyArchivedEmergencyContacts ? "No active emergency contacts" : "No emergency contacts yet"}
          </h2>
          <p className={page.emptyText}>
            {hasAnyArchivedEmergencyContacts
              ? "Archived emergency contacts are hidden from your active list. You can view them using the link above."
              : "Once you add your first emergency contact, you’ll see them here. You can link them to leases later."}
          </p>
          {!hasAnyArchivedEmergencyContacts && (
            <button
              type="button"
              className={card.primaryButton}
              onClick={handleAddEmergencyContact}
            >
              Create your first emergency contact
            </button>
          )}
        </div>
      )}

      {!emergencyContactsLoading && !emergencyContactsError && hasVisibleEmergencyContacts && (
        <div className={page.grid}>
          {visibleEmergencyContacts.map((o) => (
            <EmergencyContactCard
              key={o.id || `${o.name || "emergency contact"}:${o.createdAt || ""}`}
              emergencyContact={o}
              onClick={() => handleOpenEmergencyContact(o.id)}
            />
          ))}
        </div>
      )}
    </>
  );

  // ---------------- VEHICLES STATE ----------------

  const [vehicles, setVehicles] = useState([]);
  const [vehiclesLoading, setVehiclesLoading] = useState(true);
  const [vehiclesError, setVehiclesError] = useState("");
  const [showArchivedVehicles, setShowArchivedVehicles] = useState(false);

  // Load vehicles when Vehicles tab is active
  useEffect(() => {
    if (activeTab !== "vehicles") return;
    if (!token) {
      setVehiclesLoading(false);
      setVehiclesError("Not signed in.");
      return;
    }

    let cancelled = false;

    async function load() {
      try {
        setVehiclesLoading(true);
        setVehiclesError("");
        const data = await vehiclesApi.listAll({
          includeArchived: true,
          token,
        });
        if (!cancelled) {
          setVehicles(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        console.error("Failed to load vehicles (Residents page)", err);
        if (!cancelled) {
          setVehiclesError("Failed to load vehicles. Please try again.");
        }
      } finally {
        if (!cancelled) setVehiclesLoading(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [activeTab, token]);

  const visibleVehicles = useMemo(() => {
    if (showArchivedVehicles) return vehicles;
    return (vehicles || []).filter((o) => !o.archived);
  }, [vehicles, showArchivedVehicles]);

  const hasVisibleVehicles = visibleVehicles.length > 0;
  const hasAnyArchivedVehicles = (vehicles || []).some((o) => o.archived);

  const handleAddVehicle = () => {
    navigate("/landlord/vehicles/new");
  };

  const handleOpenVehicle = (vehicleId) => {
    navigate(`/landlord/vehicles/${vehicleId}`);
  };

  const renderVehiclesTab = () => (
    <>
      {vehiclesLoading && (
        <div className={page.center}>
          <p className={shared.muted}>Loading your vehicles…</p>
        </div>
      )}

      {!vehiclesLoading && vehiclesError && (
        <div className={page.center}>
          <p className={shared.error}>{vehiclesError}</p>
        </div>
      )}

      {!vehiclesLoading && !vehiclesError && !hasVisibleVehicles && (
        <div className={page.empty}>
          <h2 className={page.emptyTitle}>
            {hasAnyArchivedVehicles ? "No active vehicles" : "No vehicles yet"}
          </h2>
          <p className={page.emptyText}>
            {hasAnyArchivedVehicles
              ? "Archived vehicles are hidden from your active list. You can view them using the link above."
              : "Once you add your first vehicle, you’ll see them here. You can link them to leases later."}
          </p>
          {!hasAnyArchivedVehicles && (
            <button
              type="button"
              className={card.primaryButton}
              onClick={handleAddVehicle}
            >
              Create your first vehicle
            </button>
          )}
        </div>
      )}

      {!vehiclesLoading && !vehiclesError && hasVisibleVehicles && (
        <div className={page.grid}>
          {visibleVehicles.map((o) => (
            <VehicleCard
              key={o.id || `${o.plate || o.permit || "vehicle"}:${o.createdAt || ""}`}
              vehicle={o}
              onClick={() => handleOpenVehicle(o.id)}
            />
          ))}
        </div>
      )}
    </>
  );

  // ---------------- RENDER ----------------

  return (
    <div className={page.page}>
      {/* Header */}
      <header className={page.header}>
        <div>
          <h1 className={page.title}>Your residents</h1>
          <p className={page.subtitle}>
            Tenants, occupants, pets, emergency contacts and vehicles all live here.
          </p>
        </div>

        {/* Tab-specific header actions */}
        {activeTab === "tenants" && (
          <div
            className={page.actions}
            style={{ display: "flex", flexDirection: "column", gap: 8 }}
          >
            {/* Always allow adding a tenant (matches LandlordTenantsPage) */}
            <button
              type="button"
              className={card.primaryButton}
              onClick={handleAddTenant}
            >
              + Add tenant
            </button>

            {hasAnyArchivedTenants && (
              <button
                type="button"
                onClick={() => setShowArchivedTenants((s) => !s)}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  fontSize: 14,
                  textDecoration: "underline",
                  cursor: "pointer",
                  alignSelf: "flex-end",
                  color: "#4b5563",
                }}
              >
                {showArchivedTenants
                  ? "Hide archived tenants"
                  : "View archived tenants"}
              </button>
            )}
          </div>
        )}

        {activeTab === "occupants" && (
          <div
            className={page.actions}
            style={{ display: "flex", flexDirection: "column", gap: 8 }}
          >
            {/* Always allow adding an occupant, even if all are archived */}
            <button
              type="button"
              className={card.primaryButton}
              onClick={handleAddOccupant}
            >
              + Add occupant
            </button>

            {hasAnyArchivedOccupants && (
              <button
                type="button"
                onClick={() => setShowArchivedOccupants((s) => !s)}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  fontSize: 14,
                  textDecoration: "underline",
                  cursor: "pointer",
                  alignSelf: "flex-end",
                  color: "#4b5563",
                }}
              >
                {showArchivedOccupants
                  ? "Hide archived occupants"
                  : "View archived occupants"}
              </button>
            )}
          </div>
        )}

        {activeTab === "pets" && (
          <div
            className={page.actions}
            style={{ display: "flex", flexDirection: "column", gap: 8 }}
          >
            {/* Always allow adding an pet, even if all are archived */}
            <button
              type="button"
              className={card.primaryButton}
              onClick={handleAddPet}
            >
              + Add pet
            </button>

            {hasAnyArchivedPets && (
              <button
                type="button"
                onClick={() => setShowArchivedPets((s) => !s)}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  fontSize: 14,
                  textDecoration: "underline",
                  cursor: "pointer",
                  alignSelf: "flex-end",
                  color: "#4b5563",
                }}
              >
                {showArchivedPets
                  ? "Hide archived pets"
                  : "View archived pets"}
              </button>
            )}
          </div>
        )}

        {activeTab === "emergencyContacts" && (
          <div
            className={page.actions}
            style={{ display: "flex", flexDirection: "column", gap: 8 }}
          >
            {/* Always allow adding an emergency contact, even if all are archived */}
            <button
              type="button"
              className={card.primaryButton}
              onClick={handleAddEmergencyContact}
            >
              + Add emergency contact
            </button>

            {hasAnyArchivedEmergencyContacts && (
              <button
                type="button"
                onClick={() => setShowArchivedEmergencyContacts((s) => !s)}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  fontSize: 14,
                  textDecoration: "underline",
                  cursor: "pointer",
                  alignSelf: "flex-end",
                  color: "#4b5563",
                }}
              >
                {showArchivedEmergencyContacts
                  ? "Hide archived emergency contacts"
                  : "View archived emergency contacts"}
              </button>
            )}
          </div>
        )}

        {activeTab === "vehicles" && (
          <div
            className={page.actions}
            style={{ display: "flex", flexDirection: "column", gap: 8 }}
          >
            {/* Always allow adding an vehicle, even if all are archived */}
            <button
              type="button"
              className={card.primaryButton}
              onClick={handleAddVehicle}
            >
              + Add vehicle
            </button>

            {hasAnyArchivedVehicles && (
              <button
                type="button"
                onClick={() => setShowArchivedVehicles((s) => !s)}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  fontSize: 14,
                  textDecoration: "underline",
                  cursor: "pointer",
                  alignSelf: "flex-end",
                  color: "#4b5563",
                }}
              >
                {showArchivedVehicles
                  ? "Hide archived vehicles"
                  : "View archived vehicles"}
              </button>
            )}
          </div>
        )}

      </header>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: 8,
          marginBottom: 12,
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        {[
          { key: "tenants", label: "Tenants" },
          { key: "occupants", label: "Occupants" },
          { key: "pets", label: "Pets" },
          { key: "emergencyContacts", label: "Emergency Contacts" },
          { key: "vehicles", label: "Vehicles" },
        ].map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => handleTabChange(tab.key)}
              style={{
                border: "none",
                background: "none",
                padding: "6px 10px",
                borderBottom: isActive
                  ? "2px solid #4f46e5"
                  : "2px solid transparent",
                color: isActive ? "#111827" : "#6b7280",
                fontSize: 14,
                fontWeight: isActive ? 600 : 500,
                cursor: "pointer",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      {activeTab === "tenants" && renderTenantsTab()}
      {activeTab === "occupants" && renderOccupantsTab()}
      {activeTab === "pets" && renderPetsTab()}
      {activeTab === "emergencyContacts" && renderEmergencyContactsTab() }
      {activeTab === "vehicles" && renderVehiclesTab()}
    </div>
  );
}
