import { createContext, useContext, useMemo, useState, useCallback } from "react";

import initialProperties from "../data/properties";

const PropertyContext = createContext(null);

const toNumOrNull = (v) => {
  if (v === "" || v === null || v === undefined) return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
};

export function PropertyProvider({ children }) {
  const [properties, setProperties] = useState(initialProperties);

  const addProperty = useCallback((payload) => {
    let newProperty;

    if (payload && !payload.property) {
      // FLAT SHAPE (Dashboard)
      newProperty = {
        id: payload.id ?? Date.now(),
        address: payload.address || "",
        city: payload.city || "",
        state: payload.state || "",
        zip: payload.zip || "",
        owner: payload.owner || "",
        bedrooms: toNumOrNull(payload.bedrooms),
        bathrooms: toNumOrNull(payload.bathrooms),
        squareFeet: toNumOrNull(payload.squareFeet),
        tenants: payload.tenants || [],
        occupants: payload.occupants || [],
        pets: payload.pets || [],
        emergencyContacts: payload.emergencyContacts || [],
        leaseFile: payload.leaseFile ?? null,
        leaseExtract: payload.leaseExtract ?? null,
        financialConfig: payload.financialConfig ?? null,
        financialSchedule: payload.financialSchedule || payload.schedule || [],
      };
    } else {
      // WIZARD SHAPE (property + parts)
      const {
        property = {},
        leaseFile,
        leaseExtract,
        financialConfig,
        schedule,
        tenants,
        occupants,
        pets,
        emergencyContacts,
      } = payload || {};

      newProperty = {
        id: Date.now(),
        address: property.address || "",
        city: property.city || "",
        state: property.state || "",
        zip: property.zip || "",
        owner: property.owner || "",
        bedrooms: toNumOrNull(property.bedrooms),
        bathrooms: toNumOrNull(property.bathrooms),
        squareFeet: toNumOrNull(property.squareFeet),
        tenants: tenants || [],
        occupants: occupants || [],
        pets: pets || [],
        emergencyContacts: emergencyContacts || [],
        leaseFile: leaseFile ? leaseFile.name : null,
        leaseExtract: leaseExtract || null,
        financialConfig: financialConfig || null,
        financialSchedule: Array.isArray(property.financialSchedule)
          ? property.financialSchedule
          : Array.isArray(schedule)
            ? schedule
            : [],
      };
    }

    setProperties((prev) => [...prev, newProperty]);
  }, []);

  const editProperty = useCallback((updatedProperty) => {
    setProperties((prev) =>
      prev.map((p) => (p.id === updatedProperty.id ? updatedProperty : p)),
    );
  }, []);

  const deleteProperty = useCallback((id) => {
    setProperties((prev) => prev.filter((p) => p.id !== id));
  }, []);

  // NEW: used by SmartBreadcrumbs / pages
  const getPropertyById = useCallback(
    (id) =>
      id == null ? undefined : properties.find((p) => String(p.id) === String(id)),
    [properties],
  );

  const value = useMemo(
    () => ({ properties, addProperty, editProperty, deleteProperty, getPropertyById }),
    [properties, addProperty, editProperty, deleteProperty, getPropertyById],
  );

  return <PropertyContext.Provider value={value}>{children}</PropertyContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProperties() {
  const ctx = useContext(PropertyContext);
  if (!ctx) throw new Error("useProperties must be used within a PropertyProvider");
  return ctx;
}
