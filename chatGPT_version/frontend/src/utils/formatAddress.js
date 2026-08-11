export function formatAddress(property) {
  if (!property) return "";
  const parts = [
    property.address?.street || property.street,
    property.address?.city || property.city,
  ].filter(Boolean);
  return parts.join(", ");
}

export function formatPropertyBreadcrumb(property) {
  if (!property) return "";
  const parts = [property.address, property.city].filter(Boolean);
  return parts.join(", "); // "123 Main St., Denver"
}
