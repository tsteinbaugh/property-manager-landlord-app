import { useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";

import { useProperties } from "../../context/PropertyContext";
import { formatPropertyBreadcrumb } from "../../utils/formatAddress";

/**
 * Builds items for Breadcrumbs (keeps your UI component).
 * Supports /property/:id and /properties/:id/* paths.
 */
export default function SmartBreadcrumbs() {
  const location = useLocation();
  const { id: idParam } = useParams();
  const { getPropertyById } = useProperties();

  const items = useMemo(() => {
    const parts = location.pathname.split("/").filter(Boolean); // e.g., ["properties","123","financials"]
    const itemsBase = [{ label: "Dashboard", to: "/dashboard" }];

    const isSingular = parts[0] === "property";
    const isPlural = parts[0] === "properties";
    const inPropertyScope = isSingular || isPlural;

    if (!inPropertyScope) {
      // dashboard route should not be a link to itself
      if (parts[0] === "dashboard") {
        return [{ label: "Dashboard" }];
      }
      // fallback
      return [{ label: parts.join(" / ") || "Home" }];
    }

    // Identify current property + section
    const propertyId = parts[1] ?? idParam;
    const section = parts[2]; // e.g., "financials"
    const property = getPropertyById(propertyId);
    const propLabel = property
      ? formatPropertyBreadcrumb(property)
      : `Property ${propertyId}`;

    // Your app uses the singular details route:
    const detailPath = `/property/${propertyId}`;

    if (!section) {
      // We are on the Property Details page
      itemsBase.push({ label: propLabel }); // current page => NOT a link
      return itemsBase;
    }

    // On a sub-page (e.g., Financials)
    itemsBase.push({ label: propLabel, to: detailPath }); // link back to details
    const titled = section.charAt(0).toUpperCase() + section.slice(1);
    itemsBase.push({ label: titled }); // current page => NOT a link
    return itemsBase;
  }, [location.pathname, idParam, getPropertyById]);

  return <Breadcrumbs items={items} />;
}
