import Header from '../components/Header';
import { useParams, Link } from 'react-router-dom';
import properties from '../data/properties';

export default function PropertyDetail({ role, setRole }) {
  const { id } = useParams();
  const property = properties[id];

  if (!property) return <p className="p-4">Property not found.</p>;

  return (
    <div className="p-4">
      <Header setRole={setRole} />
      <Link to="/dashboard" className="text-blue-500 underline">← Back to Properties</Link>
      <h1 className="text-2xl font-bold mt-2">{property.name}</h1>
      <p>{property.city}, {property.state}</p>
      <p>🛏️ {property.bedrooms} bed, 🛁 {property.bathrooms} bath</p>
      <p>📐 {property.squareFeet} sq ft</p>

      {role === 'landlord' && (
        <div className="mt-4 p-2 border rounded bg-gray-100">
          <h2 className="font-semibold">Lease Agreement</h2>
          <p>This is where lease agreement details would go (visible only to landlord).</p>
        </div>
      )}
    </div>
  );
}
