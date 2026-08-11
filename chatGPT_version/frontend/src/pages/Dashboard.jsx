// property-manager-landlord-app/frontend/src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import dashStyles from "./Dashboard.module.css";
import { useProperties } from "../context/PropertyContext";
import buttonStyles from "../styles/Buttons.module.css";
import GlobalSearch from "../components/GlobalSearch.jsx"
import PropertyList from "./PropertyList.jsx"
import AddPropertyFlow from "../components/AddPropertyFlow.jsx"

export default function Dashboard({ role }) {
  const [showAddFlow, setShowAddFlow] = useState(false);
  const { properties, addProperty } = useProperties();
  const navigate = useNavigate();

  useEffect(() => {
    if (!role) navigate("/");
  }, [role, navigate]);

  function handleCreateProperty(payload) {
    // payload = { property, leaseFile, leaseExtract, financialConfig, schedule, tenants, occupants, pets, emergencyContacts }
    const base = payload.property || {};

    const bedrooms = base.bedrooms === "" ? "" : Number(base.bedrooms);
    const bathrooms = base.bathrooms === "" ? "" : Number(base.bathrooms);
    const squareFeet = base.squareFeet === "" ? "" : Number(base.squareFeet);

    const newProp = {
      id: Date.now(), // replace with backend id when ready

      address: base.address || "",
      city: base.city || "",
      state: base.state || "",
      zip: base.zip || "",
      owner: base.owner || "",

      bedrooms,
      bathrooms,
      squareFeet,

      tenants: payload.tenants || [],
      occupants: payload.occupants || [],
      pets: payload.pets || [],
      emergencyContacts: payload.emergencyContacts || [],
      financialConfig: payload.financialConfig || null,
      financialSchedule: payload.schedule || [],
      leaseFile: payload.leaseFile?.name || null,
      leaseExtract: payload.leaseExtract || null,
    };

    console.log("[AddProperty] saving new property:", newProp);
    addProperty(newProp);
    setShowAddFlow(false);
    navigate(`/property/${newProp.id}`);
  }

  return (
    <div className={dashStyles.container}>
      <div style={{ display: "flex", justifyContent: "flex-end", margin: "10px 0 16px" }}>
        <div style={{ width: 520, maxWidth: "100%" }}>
          <GlobalSearch
            properties={properties}
            onOpenProperty={(id) => navigate(`/property/${id}`)}
            placeholder="Search name, phone, email, address, pet…"
          />
        </div>
      </div>

      <h1 className={dashStyles.heading}>
        {role === "landlord" ? "Landlord" : "Property Manager"} Dashboard
      </h1>

      <PropertyList role={role} properties={properties} />

      {role === "landlord" && (
        <div className={dashStyles.buttonRow}>
          <button
            onClick={() => setShowAddFlow(true)}
            className={buttonStyles.primaryButton}
          >
            + Add Property
          </button>

          {showAddFlow && (
            <AddPropertyFlow
              onComplete={handleCreateProperty}
              onCancel={() => setShowAddFlow(false)}
            />
          )}
        </div>
      )}
    </div>
  );
}
