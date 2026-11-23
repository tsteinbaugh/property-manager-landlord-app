import { useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";
import FactQuestionsCard from "../components/FactQuestions";

// The landlord's own answers that apply to every property, whichever entity
// owns it: the primary residence (and the island, for Hawaii), plus any
// account question a property's state asks. Name and email stay in Clerk's
// account menu.
export default function AccountPage() {
  const api = useApi();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get("/api/me/facts").then(setData).catch((err) => setError(err.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) return <p className="text-sm text-red-600">{error}</p>;
  if (!data) return <p className="text-sm text-stone-500">Loading...</p>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-stone-900">Your account</h1>
        <p className="mt-1 text-sm text-stone-500">
          Your name and email are in the account menu (top right). The answers below apply to all of your properties.
        </p>
      </div>
      <FactQuestionsCard
        title="About you"
        intro="Some states' leases depend on where the landlord lives, for example whether you live in the same state or on the same island as the rental."
        target="account"
        states={data.propertyStates}
        answers={data.facts}
        onSave={async (facts) => {
          const updated = await api.put("/api/me/facts", { facts });
          setData({ ...data, facts: updated.facts });
        }}
      />
    </div>
  );
}
