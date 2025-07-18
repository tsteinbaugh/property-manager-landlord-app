import { createContext, useContext, useState } from 'react';
import initialProperties from '../data/properties';

const PropertyContext = createContext();

export function PropertyProvider({ children }) {
  const [properties, setProperties] = useState(initialProperties);

  const addProperty = (property) => {
    setProperties((prev) => [...prev, property]);
  };

  const editProperty = (updatedProperty) => {
    setProperties((prev) =>
      prev.map((p) => (p.id === updatedProperty.id ? updatedProperty : p))
    );
  };

  const deleteProperty = (id) => {
    setProperties((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <PropertyContext.Provider
      value={{ properties, addProperty, editProperty, deleteProperty }}
    >
      {children}
    </PropertyContext.Provider>
  );
}

export function useProperties() {
  return useContext(PropertyContext);
}
