import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import MaintenanceRequestSection from "../components/MaintenanceRequestSection";
import MaintenanceScheduleSection from "../components/MaintenanceScheduleSection";

const EMPTY_VENDOR_FORM = { name: "", trade: "", phone: "", email: "", preferred: false, notes: "" };

export default function MaintenancePage() {
  const api = useApi();
  const [requests, setRequests] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [vendorFormOpen, setVendorFormOpen] = useState(false);
  const [vendorForm, setVendorForm] = useState(EMPTY_VENDOR_FORM);
  const [submitting, setSubmitting] = useState(false);

  async function load() {
    setLoading(true);
    try {
      const [requestData, scheduleData, vendorData, propertyData] = await Promise.all([
        api.get("/api/maintenance-requests"),
        api.get("/api/maintenance-schedules"),
        api.get("/api/vendors"),
        api.get("/api/properties"),
      ]);
      setRequests(requestData);
      setSchedules(scheduleData);
      setVendors(vendorData);
      setProperties(propertyData);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleAddVendor(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const body = { ...vendorForm };
    if (!body.trade) delete body.trade;
    if (!body.phone) delete body.phone;
    if (!body.email) delete body.email;
    if (!body.notes) delete body.notes;

    try {
      await api.post("/api/vendors", body);
      setVendorForm(EMPTY_VENDOR_FORM);
      setVendorFormOpen(false);
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  const openRequests = requests.filter((r) => r.status !== "CLOSED");
  const upcomingSchedules = schedules
    .filter((s) => s.nextDueDate)
    .sort((a, b) => new Date(a.nextDueDate) - new Date(b.nextDueDate));

  if (loading) return <p className="text-sm text-stone-500">Loading...</p>;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl text-stone-900">Maintenance</h1>
        <p className="text-sm text-stone-500">Open tickets, upcoming preventive work, and your vendor directory.</p>
      </div>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      )}

      <MaintenanceRequestSection
        items={openRequests}
        vendors={vendors}
        properties={properties}
        onChange={load}
      />

      <MaintenanceScheduleSection
        items={upcomingSchedules}
        vendors={vendors}
        properties={properties}
        onChange={load}
      />

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-stone-900">Vendors</h2>
          <button
            onClick={() => setVendorFormOpen(true)}
            className="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-800"
          >
            Add vendor
          </button>
        </div>

        {vendorFormOpen && (
          <form
            onSubmit={handleAddVendor}
            className="space-y-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Name *</span>
                <input
                  required
                  value={vendorForm.name}
                  onChange={(e) => setVendorForm({ ...vendorForm, name: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  placeholder="Frederick Plumbing Co."
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Trade</span>
                <input
                  value={vendorForm.trade}
                  onChange={(e) => setVendorForm({ ...vendorForm, trade: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  placeholder="Plumber, electrician, HVAC..."
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Phone</span>
                <input
                  value={vendorForm.phone}
                  onChange={(e) => setVendorForm({ ...vendorForm, phone: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Email</span>
                <input
                  type="email"
                  value={vendorForm.email}
                  onChange={(e) => setVendorForm({ ...vendorForm, email: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="flex items-center gap-2 self-end pb-2 text-sm">
                <input
                  type="checkbox"
                  checked={vendorForm.preferred}
                  onChange={(e) => setVendorForm({ ...vendorForm, preferred: e.target.checked })}
                  className="h-4 w-4 rounded border-stone-300"
                />
                <span className="font-medium text-stone-700">Preferred</span>
              </label>
              <label className="block text-sm sm:col-span-2">
                <span className="mb-1 block font-medium text-stone-700">Notes</span>
                <input
                  value={vendorForm.notes}
                  onChange={(e) => setVendorForm({ ...vendorForm, notes: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={submitting}
                className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-50"
              >
                {submitting ? "Saving..." : "Create vendor"}
              </button>
              <button
                type="button"
                onClick={() => setVendorFormOpen(false)}
                className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {vendors.length === 0 ? (
          <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
            No vendors yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {vendors.map((vendor) => (
              <Link
                key={vendor.id}
                to={`/vendors/${vendor.id}`}
                className="block space-y-1 rounded-xl border border-stone-200 bg-white p-4 shadow-sm hover:border-emerald-300"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-medium text-stone-900">{vendor.name}</h3>
                  {vendor.preferred && (
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800">
                      Preferred
                    </span>
                  )}
                </div>
                {vendor.trade && <p className="text-sm text-stone-500">{vendor.trade}</p>}
                {(vendor.phone || vendor.email) && (
                  <p className="text-xs text-stone-400">
                    {[vendor.phone, vendor.email].filter(Boolean).join(" · ")}
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
