export default function PropertyCard({ property }) {
  return (
    <div className="bg-white shadow-md rounded-md p-6 mb-4">
      <h2 className="text-xl font-semibold mb-2">{property.address}</h2>
      <p>{property.city}, {property.state} {property.zip}</p>
      <p className="mt-2 text-gray-600">Tenants: {property.tenants.length}</p>
      <p className="text-gray-600">Maintenance requests: {property.maintenance.length}</p>
    </div>
  )
}
