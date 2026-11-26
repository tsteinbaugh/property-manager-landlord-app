import { useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";
import FactQuestionsCard from "../components/FactQuestions";

// The landlord's own answers that apply to every property, whichever owner
// holds it: questions about the user personally (a real estate license, a
// tenant portal). Where an owner lives is on each owner's page, since an owner
// can be an LLC (Taylor, 2026-11-26). Name and email stay in Clerk's account menu.
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
        intro="How you run your rentals. Some states' leases depend on these. Where an owner lives (or a business's principal office) is on each owner's page."
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
