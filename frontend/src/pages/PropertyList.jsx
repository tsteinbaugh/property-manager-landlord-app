import { Link } from 'react-router-dom';

export default function PropertyList({ role, properties }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {properties.map((property) => (
        <Link
          to={`/property/${property.id}`}
          key={property.id}
          className="p-2 rounded-2xl cursor-pointer hover:bg-gray-100 block border"
        >
          <h2 className="text-xl font-semibold">
            {property.address}, {property.city}, {property.state}
          </h2>
        </Link>
      ))}
    </div>
  );
}
