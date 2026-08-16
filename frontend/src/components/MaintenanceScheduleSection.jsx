import { useState } from "react";
import { useApi } from "../hooks/useApi";

const EMPTY_SCHEDULE_FORM = {
  title: "",
  description: "",
  intervalDays: "",
  vendorId: "",
  lastDoneDate: "",
  notes: "",
};

// Same fixed-property/picker dual mode as MaintenanceRequestSection — pass
// exactly one of `propertyId` / `properties`. No tenant concept here, so
// this one's simpler than the request section.
export default function MaintenanceScheduleSection({ items, vendors, onChange, propertyId, properties }) {
  const api = useApi();
  const isPickerMode = !propertyId;

  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState(EMPTY_SCHEDULE_FORM);
  const [formPropertyId, setFormPropertyId] = useState(propertyId || "");
  const [editingId, setEditingId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  function propertyLabel(pid) {
    const p = properties?.find((pp) => pp.id === pid);
    return p ? p.name || p.address1 : "—";
  }
  const vendorLabel = (vendorId) => vendors.find((v) => v.id === vendorId)?.name || null;

  function openForm(schedule) {
    if (schedule) {
      setForm({
        title: schedule.title,
        description: schedule.description || "",
        intervalDays: schedule.intervalDays,
        vendorId: schedule.vendorId || "",
        lastDoneDate: schedule.lastDoneDate ? schedule.lastDoneDate.slice(0, 10) : "",
        notes: schedule.notes || "",
      });
      setFormPropertyId(schedule.propertyId);
      setEditingId(schedule.id);
    } else {
      setForm(EMPTY_SCHEDULE_FORM);
      setFormPropertyId(propertyId || "");
      setEditingId(null);
    }
    setFormOpen(true);
  }

  async function handleSave(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const body = { ...form, intervalDays: Number(form.intervalDays) };
      if (!body.description) delete body.description;
      if (!body.vendorId) delete body.vendorId;
      if (!body.lastDoneDate) delete body.lastDoneDate;
      if (!body.notes) delete body.notes;

      if (editingId) {
        await api.put(`/api/maintenance-schedules/${editingId}`, body);
      } else {
        await api.post("/api/maintenance-schedules", { ...body, propertyId: formPropertyId });
      }
      setFormOpen(false);
      onChange();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(scheduleId) {
    if (!confirm("Delete this maintenance schedule? This can't be undone.")) return;
    try {
      await api.del(`/api/maintenance-schedules/${scheduleId}`);
      onChange();
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleMarkDone(scheduleId) {
    try {
      await api.post(`/api/maintenance-schedules/${scheduleId}/mark-done`, {});
      onChange();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-stone-900">Preventive schedules</h2>
        <button
          onClick={() => openForm(null)}
          className="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-800"
        >
          Add schedule
        </button>
      </div>

      {error && <p className="text-sm text-red-700">{error}</p>}

      {formOpen && (
        <form onSubmit={handleSave} className="space-y-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {isPickerMode && (
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Property *</span>
                {editingId ? (
                  <p className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-500">
                    {propertyLabel(formPropertyId)}
                  </p>
                ) : (
                  <select
                    required
                    value={formPropertyId}
                    onChange={(e) => setFormPropertyId(e.target.value)}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  >
                    <option value="">Select a property</option>
                    {properties.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name || p.address1}
                      </option>
                    ))}
                  </select>
                )}
              </label>
            )}
            <label className="block text-sm sm:col-span-2 lg:col-span-3">
              <span className="mb-1 block font-medium text-stone-700">Title *</span>
              <input
                required
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                placeholder="HVAC filter change"
              />
            </label>
            <label className="block text-sm sm:col-span-2 lg:col-span-3">
              <span className="mb-1 block font-medium text-stone-700">Description</span>
              <input
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Interval (days) *</span>
              <input
                required
                type="number"
                min="1"
                step="1"
                value={form.intervalDays}
                onChange={(e) => setForm({ ...form, intervalDays: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Last done</span>
              <input
                type="date"
                value={form.lastDoneDate}
                onChange={(e) => setForm({ ...form, lastDoneDate: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Vendor</span>
              <select
                value={form.vendorId}
                onChange={(e) => setForm({ ...form, vendorId: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              >
                <option value="">None</option>
                {vendors.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm sm:col-span-2 lg:col-span-3">
              <span className="mb-1 block font-medium text-stone-700">Notes</span>
              <input
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
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
              {submitting ? "Saving..." : editingId ? "Save changes" : "Add schedule"}
            </button>
            <button
              type="button"
              onClick={() => setFormOpen(false)}
              className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {items.length === 0 ? (
        <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
          {isPickerMode ? "No preventive schedules with a due date yet." : "No preventive schedules for this property yet."}
        </p>
      ) : (
        <div className="space-y-2">
          {items.map((schedule) => (
            <div key={schedule.id} className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium text-stone-900">{schedule.title}</span>
                  {schedule.overdue && (
                    <span className="ml-2 rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">
                      Overdue
                    </span>
                  )}
                  {isPickerMode && (
                    <span className="ml-2 rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600">
                      {propertyLabel(schedule.propertyId)}
                    </span>
                  )}
                  <p className="text-xs text-stone-400">
                    Every {schedule.intervalDays} days
                    {vendorLabel(schedule.vendorId) ? ` · ${vendorLabel(schedule.vendorId)}` : ""}
                    {schedule.nextDueDate ? ` · Next due ${new Date(schedule.nextDueDate).toLocaleDateString()}` : ""}
                  </p>
                </div>
                <div className="flex gap-3 text-sm">
                  <button
                    onClick={() => setExpandedId(expandedId === schedule.id ? null : schedule.id)}
                    className="text-stone-500 hover:underline"
                  >
                    History
                  </button>
                  <button onClick={() => handleMarkDone(schedule.id)} className="text-emerald-700 hover:underline">
                    Mark done
                  </button>
                  <button onClick={() => openForm(schedule)} className="text-emerald-700 hover:underline">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(schedule.id)} className="text-red-600 hover:underline">
                    Delete
                  </button>
                </div>
              </div>
              {expandedId === schedule.id && (
                <div className="mt-3 space-y-2 border-t border-stone-200 pt-3 text-xs text-stone-500">
                  {schedule.notes && (
                    <p>
                      <span className="font-semibold text-stone-600">Notes: </span>
                      {schedule.notes}
                    </p>
                  )}
                  {schedule.completions.length === 0 ? (
                    <p>No completions logged yet.</p>
                  ) : (
                    <div className="space-y-1">
                      {schedule.completions.map((completion) => (
                        <p key={completion.id}>Marked done on {new Date(completion.completedDate).toLocaleDateString()}</p>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
