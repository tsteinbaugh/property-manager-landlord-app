import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";

const APPLICATION_STATUS_STYLES = {
  PENDING: "bg-amber-100 text-amber-800",
  APPROVED: "bg-emerald-100 text-emerald-800",
  REJECTED: "bg-red-100 text-red-800",
};

const LEASE_STATUS_STYLES = {
  ACTIVE: "bg-emerald-100 text-emerald-800",
  MONTH_TO_MONTH: "bg-amber-100 text-amber-800",
  EXPIRED: "bg-stone-100 text-stone-600",
  TERMINATED: "bg-red-100 text-red-800",
};

function money(amount) {
  if (amount === null || amount === undefined) return null;
  return `$${Number(amount).toLocaleString()}`;
}

const INCOME_CATEGORIES = ["RENT", "LATE_FEE", "PET_RENT", "DEPOSIT", "OTHER"];
const EXPENSE_CATEGORIES = [
  "MORTGAGE",
  "UTILITIES",
  "REPAIRS",
  "MAINTENANCE",
  "LANDSCAPING",
  "INSURANCE_PREMIUM",
  "TAX",
  "LEGAL",
  "OTHER",
];

const EMPTY_INCOME_FORM = { category: "RENT", amount: "", date: "", method: "", notes: "", leaseId: "" };
const EMPTY_EXPENSE_FORM = { category: "MORTGAGE", amount: "", date: "", payee: "", method: "", paid: true, notes: "" };

function categoryLabel(value) {
  return value
    .toLowerCase()
    .split("_")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}

const MAINTENANCE_STATUSES = ["OPEN", "IN_PROGRESS", "CLOSED"];
const MAINTENANCE_STATUS_STYLES = {
  OPEN: "bg-amber-100 text-amber-800",
  IN_PROGRESS: "bg-sky-100 text-sky-800",
  CLOSED: "bg-stone-100 text-stone-600",
};

const EMPTY_REQUEST_FORM = {
  title: "",
  description: "",
  tenantId: "",
  vendorId: "",
  reportedBy: "",
  status: "OPEN",
  estimatedCost: "",
  actualCost: "",
  notes: "",
};

const EMPTY_SCHEDULE_FORM = { title: "", description: "", intervalDays: "", vendorId: "", lastDoneDate: "", notes: "" };

export default function PropertyDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const api = useApi();

  const [property, setProperty] = useState(null);
  const [entities, setEntities] = useState([]);
  const [tenants, setTenants] = useState([]);
  const [leases, setLeases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [tenantFormOpen, setTenantFormOpen] = useState(false);
  const [tenantForm, setTenantForm] = useState({ firstName: "", lastName: "", phone: "", email: "" });

  const [leaseFormOpen, setLeaseFormOpen] = useState(false);
  const [leaseForm, setLeaseForm] = useState({ startDate: "", endDate: "", monthlyRent: "", securityDepositAmount: "" });

  const [incomes, setIncomes] = useState([]);
  const [incomeFormOpen, setIncomeFormOpen] = useState(false);
  const [incomeForm, setIncomeForm] = useState(EMPTY_INCOME_FORM);
  const [editingIncomeId, setEditingIncomeId] = useState(null);
  const [expandedIncomeId, setExpandedIncomeId] = useState(null);

  const [expenses, setExpenses] = useState([]);
  const [expenseFormOpen, setExpenseFormOpen] = useState(false);
  const [expenseForm, setExpenseForm] = useState(EMPTY_EXPENSE_FORM);
  const [editingExpenseId, setEditingExpenseId] = useState(null);
  const [expandedExpenseId, setExpandedExpenseId] = useState(null);

  const [vendors, setVendors] = useState([]);

  const [requests, setRequests] = useState([]);
  const [requestFormOpen, setRequestFormOpen] = useState(false);
  const [requestForm, setRequestForm] = useState(EMPTY_REQUEST_FORM);
  const [editingRequestId, setEditingRequestId] = useState(null);
  const [expandedRequestId, setExpandedRequestId] = useState(null);

  const [schedules, setSchedules] = useState([]);
  const [scheduleFormOpen, setScheduleFormOpen] = useState(false);
  const [scheduleForm, setScheduleForm] = useState(EMPTY_SCHEDULE_FORM);
  const [editingScheduleId, setEditingScheduleId] = useState(null);
  const [expandedScheduleId, setExpandedScheduleId] = useState(null);

  async function load() {
    setLoading(true);
    try {
      const [propertyData, entityData, tenantData, leaseData, incomeData, expenseData, vendorData, requestData, scheduleData] =
        await Promise.all([
          api.get(`/api/properties/${id}`),
          api.get("/api/entities"),
          api.get(`/api/tenants?propertyId=${id}`),
          api.get(`/api/leases?propertyId=${id}`),
          api.get(`/api/income?propertyId=${id}`),
          api.get(`/api/expenses?propertyId=${id}`),
          api.get("/api/vendors"),
          api.get(`/api/maintenance-requests?propertyId=${id}`),
          api.get(`/api/maintenance-schedules?propertyId=${id}`),
        ]);
      setProperty(propertyData);
      setEntities(entityData);
      setTenants(tenantData);
      setLeases(leaseData);
      setIncomes(incomeData);
      setExpenses(expenseData);
      setVendors(vendorData);
      setRequests(requestData);
      setSchedules(scheduleData);
      setForm(propertyData);
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
  }, [id]);

  async function handleSave(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const updated = await api.put(`/api/properties/${id}`, form);
      setProperty(updated);
      setForm(updated);
      setEditing(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete() {
    if (!confirm(`Delete "${property.name || property.address1}"? This can't be undone.`)) return;
    try {
      await api.del(`/api/properties/${id}`);
      navigate("/properties");
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleAddTenant(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await api.post("/api/tenants", { ...tenantForm, propertyId: id });
      setTenantForm({ firstName: "", lastName: "", phone: "", email: "" });
      setTenantFormOpen(false);
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleAddLease(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const body = { ...leaseForm, propertyId: id };
      if (!body.endDate) delete body.endDate;
      if (!body.securityDepositAmount) delete body.securityDepositAmount;
      await api.post("/api/leases", body);
      setLeaseForm({ startDate: "", endDate: "", monthlyRent: "", securityDepositAmount: "" });
      setLeaseFormOpen(false);
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  function openIncomeForm(income) {
    if (income) {
      setIncomeForm({
        category: income.category,
        amount: income.amount,
        date: income.date.slice(0, 10),
        method: income.method || "",
        notes: income.notes || "",
        leaseId: income.leaseId || "",
      });
      setEditingIncomeId(income.id);
    } else {
      setIncomeForm(EMPTY_INCOME_FORM);
      setEditingIncomeId(null);
    }
    setIncomeFormOpen(true);
  }

  async function handleSaveIncome(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const body = { ...incomeForm, amount: Number(incomeForm.amount) };
      if (!body.method) delete body.method;
      if (!body.notes) delete body.notes;
      if (!body.leaseId) delete body.leaseId;

      if (editingIncomeId) {
        await api.put(`/api/income/${editingIncomeId}`, body);
      } else {
        await api.post("/api/income", { ...body, propertyId: id });
      }
      setIncomeFormOpen(false);
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDeleteIncome(incomeId) {
    if (!confirm("Delete this income record? This can't be undone.")) return;
    try {
      await api.del(`/api/income/${incomeId}`);
      await load();
    } catch (err) {
      setError(err.message);
    }
  }

  function openExpenseForm(expense) {
    if (expense) {
      setExpenseForm({
        category: expense.category,
        amount: expense.amount,
        date: expense.date.slice(0, 10),
        payee: expense.payee || "",
        method: expense.method || "",
        paid: expense.paid,
        notes: expense.notes || "",
      });
      setEditingExpenseId(expense.id);
    } else {
      setExpenseForm(EMPTY_EXPENSE_FORM);
      setEditingExpenseId(null);
    }
    setExpenseFormOpen(true);
  }

  async function handleSaveExpense(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const body = { ...expenseForm, amount: Number(expenseForm.amount) };
      if (!body.payee) delete body.payee;
      if (!body.method) delete body.method;
      if (!body.notes) delete body.notes;

      if (editingExpenseId) {
        await api.put(`/api/expenses/${editingExpenseId}`, body);
      } else {
        await api.post("/api/expenses", { ...body, propertyId: id });
      }
      setExpenseFormOpen(false);
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDeleteExpense(expenseId) {
    if (!confirm("Delete this expense record? This can't be undone.")) return;
    try {
      await api.del(`/api/expenses/${expenseId}`);
      await load();
    } catch (err) {
      setError(err.message);
    }
  }

  function openRequestForm(request) {
    if (request) {
      setRequestForm({
        title: request.title,
        description: request.description || "",
        tenantId: request.tenantId || "",
        vendorId: request.vendorId || "",
        reportedBy: request.reportedBy || "",
        status: request.status,
        estimatedCost: request.estimatedCost ?? "",
        actualCost: request.actualCost ?? "",
        notes: request.notes || "",
      });
      setEditingRequestId(request.id);
    } else {
      setRequestForm(EMPTY_REQUEST_FORM);
      setEditingRequestId(null);
    }
    setRequestFormOpen(true);
  }

  async function handleSaveRequest(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const body = { ...requestForm };
      if (!body.description) delete body.description;
      if (!body.tenantId) delete body.tenantId;
      if (!body.vendorId) delete body.vendorId;
      if (!body.reportedBy) delete body.reportedBy;
      if (!body.notes) delete body.notes;
      if (body.estimatedCost === "") delete body.estimatedCost;
      else body.estimatedCost = Number(body.estimatedCost);
      if (body.actualCost === "") delete body.actualCost;
      else body.actualCost = Number(body.actualCost);

      if (editingRequestId) {
        await api.put(`/api/maintenance-requests/${editingRequestId}`, body);
      } else {
        await api.post("/api/maintenance-requests", { ...body, propertyId: id });
      }
      setRequestFormOpen(false);
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDeleteRequest(requestId) {
    if (!confirm("Delete this maintenance request? This can't be undone.")) return;
    try {
      await api.del(`/api/maintenance-requests/${requestId}`);
      await load();
    } catch (err) {
      setError(err.message);
    }
  }

  function openScheduleForm(schedule) {
    if (schedule) {
      setScheduleForm({
        title: schedule.title,
        description: schedule.description || "",
        intervalDays: schedule.intervalDays,
        vendorId: schedule.vendorId || "",
        lastDoneDate: schedule.lastDoneDate ? schedule.lastDoneDate.slice(0, 10) : "",
        notes: schedule.notes || "",
      });
      setEditingScheduleId(schedule.id);
    } else {
      setScheduleForm(EMPTY_SCHEDULE_FORM);
      setEditingScheduleId(null);
    }
    setScheduleFormOpen(true);
  }

  async function handleSaveSchedule(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const body = { ...scheduleForm, intervalDays: Number(scheduleForm.intervalDays) };
      if (!body.description) delete body.description;
      if (!body.vendorId) delete body.vendorId;
      if (!body.lastDoneDate) delete body.lastDoneDate;
      if (!body.notes) delete body.notes;

      if (editingScheduleId) {
        await api.put(`/api/maintenance-schedules/${editingScheduleId}`, body);
      } else {
        await api.post("/api/maintenance-schedules", { ...body, propertyId: id });
      }
      setScheduleFormOpen(false);
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDeleteSchedule(scheduleId) {
    if (!confirm("Delete this maintenance schedule? This can't be undone.")) return;
    try {
      await api.del(`/api/maintenance-schedules/${scheduleId}`);
      await load();
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleMarkDone(scheduleId) {
    try {
      await api.post(`/api/maintenance-schedules/${scheduleId}/mark-done`, {});
      await load();
    } catch (err) {
      setError(err.message);
    }
  }

  const vendorLabel = (vendorId) => vendors.find((v) => v.id === vendorId)?.name || null;
  const tenantLabel = (tenantId) => {
    const t = tenants.find((tt) => tt.id === tenantId);
    return t ? `${t.firstName} ${t.lastName}` : null;
  };

  if (loading) return <p className="text-sm text-stone-500">Loading...</p>;
  if (!property) return <p className="text-sm text-red-700">{error || "Property not found."}</p>;

  return (
    <div className="space-y-8">
      <Link to="/properties" className="text-sm text-emerald-700 hover:underline">
        ← Back to properties
      </Link>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      )}

      <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h1 className="text-2xl text-stone-900">{property.name || property.address1}</h1>
            <p className="text-sm text-stone-500">
              {property.address1}
              {property.address2 ? `, ${property.address2}` : ""}, {property.city}, {property.state}{" "}
              {property.zip}
            </p>
          </div>
          {!editing && (
            <div className="flex shrink-0 gap-3 text-sm">
              <button onClick={() => setEditing(true)} className="text-emerald-700 hover:underline">
                Edit
              </button>
              <button onClick={handleDelete} className="text-red-600 hover:underline">
                Delete
              </button>
            </div>
          )}
        </div>

        {editing ? (
          <form onSubmit={handleSave} className="mt-4 space-y-4 border-t border-stone-200 pt-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Entity *</span>
                <select
                  required
                  value={form.entityId}
                  onChange={(e) => setForm({ ...form, entityId: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                >
                  {entities.map((entity) => (
                    <option key={entity.id} value={entity.id}>
                      {entity.legalName}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Nickname</span>
                <input
                  value={form.name || ""}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm sm:col-span-2">
                <span className="mb-1 block font-medium text-stone-700">Address line 1 *</span>
                <input
                  required
                  value={form.address1 || ""}
                  onChange={(e) => setForm({ ...form, address1: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm sm:col-span-2">
                <span className="mb-1 block font-medium text-stone-700">Address line 2</span>
                <input
                  value={form.address2 || ""}
                  onChange={(e) => setForm({ ...form, address2: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">City *</span>
                <input
                  required
                  value={form.city || ""}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">State *</span>
                  <input
                    required
                    value={form.state || ""}
                    onChange={(e) => setForm({ ...form, state: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">Zip *</span>
                  <input
                    required
                    value={form.zip || ""}
                    onChange={(e) => setForm({ ...form, zip: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </label>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={submitting}
                className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-50"
              >
                {submitting ? "Saving..." : "Save changes"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setForm(property);
                  setEditing(false);
                }}
                className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <p className="mt-3 text-sm text-stone-400">
            Owned by {entities.find((e) => e.id === property.entityId)?.legalName || "—"}
          </p>
        )}
      </div>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-stone-900">Tenants</h2>
          <button
            onClick={() => setTenantFormOpen(true)}
            className="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-800"
          >
            Add tenant
          </button>
        </div>

        {tenantFormOpen && (
          <form
            onSubmit={handleAddTenant}
            className="space-y-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">First name *</span>
                <input
                  required
                  value={tenantForm.firstName}
                  onChange={(e) => setTenantForm({ ...tenantForm, firstName: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Last name *</span>
                <input
                  required
                  value={tenantForm.lastName}
                  onChange={(e) => setTenantForm({ ...tenantForm, lastName: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Phone</span>
                <input
                  value={tenantForm.phone}
                  onChange={(e) => setTenantForm({ ...tenantForm, phone: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Email</span>
                <input
                  type="email"
                  value={tenantForm.email}
                  onChange={(e) => setTenantForm({ ...tenantForm, email: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
            </div>
            <p className="text-xs text-stone-400">
              Applications start as Pending. Add ID, credit check, employment, and other details from the
              tenant's page.
            </p>
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={submitting}
                className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-50"
              >
                {submitting ? "Saving..." : "Add tenant"}
              </button>
              <button
                type="button"
                onClick={() => setTenantFormOpen(false)}
                className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {tenants.length === 0 ? (
          <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
            No tenants or applicants for this property yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tenants.map((tenant) => (
              <Link
                key={tenant.id}
                to={`/tenants/${tenant.id}`}
                className="block space-y-2 rounded-xl border border-stone-200 bg-white p-4 shadow-sm hover:border-emerald-300"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-medium text-stone-900">
                    {tenant.firstName} {tenant.lastName}
                  </h3>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${APPLICATION_STATUS_STYLES[tenant.applicationStatus] || "bg-stone-100 text-stone-600"}`}
                  >
                    {tenant.applicationStatus}
                  </span>
                </div>
                {(tenant.phone || tenant.email) && (
                  <p className="text-sm text-stone-500">{[tenant.phone, tenant.email].filter(Boolean).join(" · ")}</p>
                )}
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-stone-900">Leases</h2>
          <button
            onClick={() => setLeaseFormOpen(true)}
            className="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-800"
          >
            Add lease
          </button>
        </div>

        {leaseFormOpen && (
          <form
            onSubmit={handleAddLease}
            className="space-y-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Start date *</span>
                <input
                  required
                  type="date"
                  value={leaseForm.startDate}
                  onChange={(e) => setLeaseForm({ ...leaseForm, startDate: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">End date</span>
                <input
                  type="date"
                  value={leaseForm.endDate}
                  onChange={(e) => setLeaseForm({ ...leaseForm, endDate: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Monthly rent *</span>
                <input
                  required
                  type="number"
                  min="0"
                  step="0.01"
                  value={leaseForm.monthlyRent}
                  onChange={(e) => setLeaseForm({ ...leaseForm, monthlyRent: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Security deposit</span>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={leaseForm.securityDepositAmount}
                  onChange={(e) => setLeaseForm({ ...leaseForm, securityDepositAmount: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
            </div>
            <p className="text-xs text-stone-400">
              Late fees, pet policy, tenants, and the lease PDF are managed from the lease's page.
            </p>
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={submitting}
                className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-50"
              >
                {submitting ? "Saving..." : "Add lease"}
              </button>
              <button
                type="button"
                onClick={() => setLeaseFormOpen(false)}
                className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {leases.length === 0 ? (
          <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
            No leases for this property yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {leases.map((lease) => (
              <Link
                key={lease.id}
                to={`/leases/${lease.id}`}
                className="block space-y-2 rounded-xl border border-stone-200 bg-white p-4 shadow-sm hover:border-emerald-300"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-medium text-stone-900">{money(lease.monthlyRent)}/mo</h3>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${LEASE_STATUS_STYLES[lease.status] || "bg-stone-100 text-stone-600"}`}
                  >
                    {lease.status}
                  </span>
                </div>
                <p className="text-sm text-stone-500">
                  {new Date(lease.startDate).toLocaleDateString()}
                  {lease.endDate ? ` – ${new Date(lease.endDate).toLocaleDateString()}` : " – open"}
                </p>
                <p className="text-xs text-stone-400">
                  {lease.leaseTenants.length === 0
                    ? "No tenants attached"
                    : lease.leaseTenants.map((lt) => `${lt.tenant.firstName} ${lt.tenant.lastName}`).join(", ")}
                </p>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-stone-900">Income</h2>
          <button
            onClick={() => openIncomeForm(null)}
            className="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-800"
          >
            Add income
          </button>
        </div>

        {incomeFormOpen && (
          <form
            onSubmit={handleSaveIncome}
            className="space-y-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Category *</span>
                <select
                  required
                  value={incomeForm.category}
                  onChange={(e) => setIncomeForm({ ...incomeForm, category: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                >
                  {INCOME_CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {categoryLabel(c)}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Amount *</span>
                <input
                  required
                  type="number"
                  min="0"
                  step="0.01"
                  value={incomeForm.amount}
                  onChange={(e) => setIncomeForm({ ...incomeForm, amount: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Date *</span>
                <input
                  required
                  type="date"
                  value={incomeForm.date}
                  onChange={(e) => setIncomeForm({ ...incomeForm, date: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Lease</span>
                <select
                  value={incomeForm.leaseId}
                  onChange={(e) => setIncomeForm({ ...incomeForm, leaseId: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                >
                  <option value="">None</option>
                  {leases.map((lease) => (
                    <option key={lease.id} value={lease.id}>
                      {money(lease.monthlyRent)}/mo — {new Date(lease.startDate).toLocaleDateString()}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Method</span>
                <input
                  value={incomeForm.method}
                  onChange={(e) => setIncomeForm({ ...incomeForm, method: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  placeholder="Check, cash, bank transfer"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Notes</span>
                <input
                  value={incomeForm.notes}
                  onChange={(e) => setIncomeForm({ ...incomeForm, notes: e.target.value })}
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
                {submitting ? "Saving..." : editingIncomeId ? "Save changes" : "Add income"}
              </button>
              <button
                type="button"
                onClick={() => setIncomeFormOpen(false)}
                className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {incomes.length === 0 ? (
          <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
            No income logged for this property yet.
          </p>
        ) : (
          <div className="space-y-2">
            {incomes.map((income) => (
              <div key={income.id} className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium text-stone-900">{money(income.amount)}</span>
                    <span className="ml-2 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800">
                      {categoryLabel(income.category)}
                    </span>
                    <p className="text-xs text-stone-400">
                      {new Date(income.date).toLocaleDateString()}
                      {income.method ? ` · ${income.method}` : ""}
                      {income.notes ? ` · ${income.notes}` : ""}
                    </p>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <button
                      onClick={() => setExpandedIncomeId(expandedIncomeId === income.id ? null : income.id)}
                      className="text-stone-500 hover:underline"
                    >
                      Receipts
                    </button>
                    <button onClick={() => openIncomeForm(income)} className="text-emerald-700 hover:underline">
                      Edit
                    </button>
                    <button onClick={() => handleDeleteIncome(income.id)} className="text-red-600 hover:underline">
                      Delete
                    </button>
                  </div>
                </div>
                {expandedIncomeId === income.id && (
                  <ReceiptsPanel api={api} basePath={`/api/income/${income.id}`} />
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-stone-900">Expenses</h2>
          <button
            onClick={() => openExpenseForm(null)}
            className="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-800"
          >
            Add expense
          </button>
        </div>

        {expenseFormOpen && (
          <form
            onSubmit={handleSaveExpense}
            className="space-y-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Category *</span>
                <select
                  required
                  value={expenseForm.category}
                  onChange={(e) => setExpenseForm({ ...expenseForm, category: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                >
                  {EXPENSE_CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {categoryLabel(c)}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Amount *</span>
                <input
                  required
                  type="number"
                  min="0"
                  step="0.01"
                  value={expenseForm.amount}
                  onChange={(e) => setExpenseForm({ ...expenseForm, amount: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Date *</span>
                <input
                  required
                  type="date"
                  value={expenseForm.date}
                  onChange={(e) => setExpenseForm({ ...expenseForm, date: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Payee</span>
                <input
                  value={expenseForm.payee}
                  onChange={(e) => setExpenseForm({ ...expenseForm, payee: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Method</span>
                <input
                  value={expenseForm.method}
                  onChange={(e) => setExpenseForm({ ...expenseForm, method: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  placeholder="Check, cash, bank transfer"
                />
              </label>
              <label className="flex items-center gap-2 self-end pb-2 text-sm">
                <input
                  type="checkbox"
                  checked={expenseForm.paid}
                  onChange={(e) => setExpenseForm({ ...expenseForm, paid: e.target.checked })}
                  className="h-4 w-4 rounded border-stone-300"
                />
                <span className="font-medium text-stone-700">Paid</span>
              </label>
              <label className="block text-sm sm:col-span-2">
                <span className="mb-1 block font-medium text-stone-700">Notes</span>
                <input
                  value={expenseForm.notes}
                  onChange={(e) => setExpenseForm({ ...expenseForm, notes: e.target.value })}
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
                {submitting ? "Saving..." : editingExpenseId ? "Save changes" : "Add expense"}
              </button>
              <button
                type="button"
                onClick={() => setExpenseFormOpen(false)}
                className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {expenses.length === 0 ? (
          <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
            No expenses logged for this property yet.
          </p>
        ) : (
          <div className="space-y-2">
            {expenses.map((expense) => (
              <div key={expense.id} className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium text-stone-900">{money(expense.amount)}</span>
                    <span className="ml-2 rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">
                      {categoryLabel(expense.category)}
                    </span>
                    {!expense.paid && (
                      <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
                        Unpaid
                      </span>
                    )}
                    <p className="text-xs text-stone-400">
                      {new Date(expense.date).toLocaleDateString()}
                      {expense.payee ? ` · ${expense.payee}` : ""}
                      {expense.method ? ` · ${expense.method}` : ""}
                      {expense.notes ? ` · ${expense.notes}` : ""}
                    </p>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <button
                      onClick={() => setExpandedExpenseId(expandedExpenseId === expense.id ? null : expense.id)}
                      className="text-stone-500 hover:underline"
                    >
                      Receipts
                    </button>
                    <button onClick={() => openExpenseForm(expense)} className="text-emerald-700 hover:underline">
                      Edit
                    </button>
                    <button onClick={() => handleDeleteExpense(expense.id)} className="text-red-600 hover:underline">
                      Delete
                    </button>
                  </div>
                </div>
                {expandedExpenseId === expense.id && (
                  <ReceiptsPanel api={api} basePath={`/api/expenses/${expense.id}`} />
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-stone-900">Maintenance requests</h2>
          <button
            onClick={() => openRequestForm(null)}
            className="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-800"
          >
            Add request
          </button>
        </div>

        {requestFormOpen && (
          <form
            onSubmit={handleSaveRequest}
            className="space-y-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <label className="block text-sm sm:col-span-2 lg:col-span-3">
                <span className="mb-1 block font-medium text-stone-700">Title *</span>
                <input
                  required
                  value={requestForm.title}
                  onChange={(e) => setRequestForm({ ...requestForm, title: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  placeholder="Leaking kitchen faucet"
                />
              </label>
              <label className="block text-sm sm:col-span-2 lg:col-span-3">
                <span className="mb-1 block font-medium text-stone-700">Description</span>
                <input
                  value={requestForm.description}
                  onChange={(e) => setRequestForm({ ...requestForm, description: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Status</span>
                <select
                  value={requestForm.status}
                  onChange={(e) => setRequestForm({ ...requestForm, status: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                >
                  {MAINTENANCE_STATUSES.map((s) => (
                    <option key={s} value={s}>
                      {s.replace("_", " ")}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Tenant</span>
                <select
                  value={requestForm.tenantId}
                  onChange={(e) => {
                    const tenantId = e.target.value;
                    const tenant = tenants.find((t) => t.id === tenantId);
                    setRequestForm({
                      ...requestForm,
                      tenantId,
                      reportedBy: tenant ? `${tenant.firstName} ${tenant.lastName}` : "",
                    });
                  }}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                >
                  <option value="">Not a tenant on file</option>
                  {tenants.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.firstName} {t.lastName}
                    </option>
                  ))}
                </select>
                <span className="mt-1 block text-xs text-stone-400">
                  Links this request to their record — pick this if a tenant on file reported it.
                </span>
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Reported by</span>
                <input
                  disabled={!!requestForm.tenantId}
                  value={requestForm.reportedBy}
                  onChange={(e) => setRequestForm({ ...requestForm, reportedBy: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none disabled:bg-stone-100 disabled:text-stone-400"
                  placeholder="Landlord, a neighbor, etc."
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Vendor</span>
                <select
                  value={requestForm.vendorId}
                  onChange={(e) => setRequestForm({ ...requestForm, vendorId: e.target.value })}
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
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Estimated cost</span>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={requestForm.estimatedCost}
                  onChange={(e) => setRequestForm({ ...requestForm, estimatedCost: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Actual cost</span>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={requestForm.actualCost}
                  onChange={(e) => setRequestForm({ ...requestForm, actualCost: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm sm:col-span-2 lg:col-span-3">
                <span className="mb-1 block font-medium text-stone-700">Notes</span>
                <textarea
                  value={requestForm.notes}
                  onChange={(e) => setRequestForm({ ...requestForm, notes: e.target.value })}
                  rows={3}
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
                {submitting ? "Saving..." : editingRequestId ? "Save changes" : "Add request"}
              </button>
              <button
                type="button"
                onClick={() => setRequestFormOpen(false)}
                className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {requests.length === 0 ? (
          <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
            No maintenance requests for this property yet.
          </p>
        ) : (
          <div className="space-y-2">
            {requests.map((request) => (
              <div key={request.id} className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium text-stone-900">{request.title}</span>
                    <span
                      className={`ml-2 rounded-full px-2 py-0.5 text-xs font-medium ${MAINTENANCE_STATUS_STYLES[request.status]}`}
                    >
                      {request.status.replace("_", " ")}
                    </span>
                    <p className="text-xs text-stone-400">
                      {new Date(request.reportedDate).toLocaleDateString()}
                      {tenantLabel(request.tenantId) ? ` · ${tenantLabel(request.tenantId)}` : ""}
                      {vendorLabel(request.vendorId) ? ` · ${vendorLabel(request.vendorId)}` : ""}
                      {request.actualCost ? ` · ${money(request.actualCost)}` : ""}
                    </p>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <button
                      onClick={() => setExpandedRequestId(expandedRequestId === request.id ? null : request.id)}
                      className="text-stone-500 hover:underline"
                    >
                      History
                    </button>
                    <button onClick={() => openRequestForm(request)} className="text-emerald-700 hover:underline">
                      Edit
                    </button>
                    <button onClick={() => handleDeleteRequest(request.id)} className="text-red-600 hover:underline">
                      Delete
                    </button>
                  </div>
                </div>
                {expandedRequestId === request.id && (
                  <div className="mt-3 space-y-2 border-t border-stone-200 pt-3 text-xs text-stone-500">
                    {request.notes && (
                      <p>
                        <span className="font-semibold text-stone-600">Notes: </span>
                        {request.notes}
                      </p>
                    )}
                    <div className="space-y-1">
                      {request.statusChanges.map((change) => (
                        <p key={change.id}>
                          {new Date(change.changedAt).toLocaleString()} —{" "}
                          {change.fromStatus ? `${change.fromStatus.replace("_", " ")} → ` : ""}
                          {change.toStatus.replace("_", " ")}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-stone-900">Preventive schedules</h2>
          <button
            onClick={() => openScheduleForm(null)}
            className="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-800"
          >
            Add schedule
          </button>
        </div>

        {scheduleFormOpen && (
          <form
            onSubmit={handleSaveSchedule}
            className="space-y-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <label className="block text-sm sm:col-span-2 lg:col-span-3">
                <span className="mb-1 block font-medium text-stone-700">Title *</span>
                <input
                  required
                  value={scheduleForm.title}
                  onChange={(e) => setScheduleForm({ ...scheduleForm, title: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  placeholder="HVAC filter change"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Interval (days) *</span>
                <input
                  required
                  type="number"
                  min="1"
                  step="1"
                  value={scheduleForm.intervalDays}
                  onChange={(e) => setScheduleForm({ ...scheduleForm, intervalDays: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Last done</span>
                <input
                  type="date"
                  value={scheduleForm.lastDoneDate}
                  onChange={(e) => setScheduleForm({ ...scheduleForm, lastDoneDate: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Vendor</span>
                <select
                  value={scheduleForm.vendorId}
                  onChange={(e) => setScheduleForm({ ...scheduleForm, vendorId: e.target.value })}
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
                  value={scheduleForm.notes}
                  onChange={(e) => setScheduleForm({ ...scheduleForm, notes: e.target.value })}
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
                {submitting ? "Saving..." : editingScheduleId ? "Save changes" : "Add schedule"}
              </button>
              <button
                type="button"
                onClick={() => setScheduleFormOpen(false)}
                className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {schedules.length === 0 ? (
          <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
            No preventive schedules for this property yet.
          </p>
        ) : (
          <div className="space-y-2">
            {schedules.map((schedule) => (
              <div key={schedule.id} className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium text-stone-900">{schedule.title}</span>
                    {schedule.overdue && (
                      <span className="ml-2 rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">
                        Overdue
                      </span>
                    )}
                    <p className="text-xs text-stone-400">
                      Every {schedule.intervalDays} days
                      {vendorLabel(schedule.vendorId) ? ` · ${vendorLabel(schedule.vendorId)}` : ""}
                      {schedule.nextDueDate
                        ? ` · Next due ${new Date(schedule.nextDueDate).toLocaleDateString()}`
                        : ""}
                    </p>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <button
                      onClick={() => setExpandedScheduleId(expandedScheduleId === schedule.id ? null : schedule.id)}
                      className="text-stone-500 hover:underline"
                    >
                      History
                    </button>
                    <button onClick={() => handleMarkDone(schedule.id)} className="text-emerald-700 hover:underline">
                      Mark done
                    </button>
                    <button onClick={() => openScheduleForm(schedule)} className="text-emerald-700 hover:underline">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteSchedule(schedule.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                {expandedScheduleId === schedule.id && (
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
                          <p key={completion.id}>
                            Marked done on {new Date(completion.completedDate).toLocaleDateString()}
                          </p>
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
    </div>
  );
}

const ALLOWED_RECEIPT_TYPES = ["application/pdf", "image/jpeg", "image/png"];

function ReceiptsPanel({ api, basePath }) {
  const fileInputRef = useRef(null);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [busyId, setBusyId] = useState(null);
  const [error, setError] = useState(null);

  async function load() {
    setLoading(true);
    try {
      const docs = await api.get(`${basePath}/documents`);
      setDocuments(docs);
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
  }, [basePath]);

  async function handleFileSelected(e) {
    const file = e.target.files[0];
    e.target.value = "";
    if (!file) return;

    if (!ALLOWED_RECEIPT_TYPES.includes(file.type)) {
      setError("Only PDF, JPEG, or PNG files are supported.");
      return;
    }

    setUploading(true);
    setError(null);
    try {
      const { uploadUrl, key } = await api.post(`${basePath}/documents/upload-url`, {
        fileName: file.name,
        contentType: file.type,
      });

      const putRes = await fetch(uploadUrl, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file,
      });
      if (!putRes.ok) throw new Error("Upload to storage failed");

      await api.post(`${basePath}/documents/confirm`, { key, fileName: file.name });
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  }

  async function handleView(documentId) {
    setBusyId(documentId);
    setError(null);
    try {
      const { downloadUrl } = await api.get(`${basePath}/documents/${documentId}/download-url`);
      window.open(downloadUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      setError(err.message);
    } finally {
      setBusyId(null);
    }
  }

  async function handleDelete(documentId) {
    if (!confirm("Remove this receipt?")) return;
    setBusyId(documentId);
    setError(null);
    try {
      await api.del(`${basePath}/documents/${documentId}`);
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div className="mt-3 border-t border-stone-200 pt-3">
      {error && <p className="mb-2 text-xs text-red-700">{error}</p>}
      {loading ? (
        <p className="text-xs text-stone-400">Loading...</p>
      ) : documents.length === 0 ? (
        <p className="text-xs text-stone-400">No receipts uploaded yet.</p>
      ) : (
        <div className="space-y-1">
          {documents.map((doc) => (
            <div key={doc.id} className="flex items-center justify-between text-xs">
              <button
                onClick={() => handleView(doc.id)}
                disabled={busyId === doc.id}
                className="text-emerald-700 hover:underline disabled:opacity-50"
              >
                {doc.fileName}
              </button>
              <button
                onClick={() => handleDelete(doc.id)}
                disabled={busyId === doc.id}
                className="text-red-600 hover:underline disabled:opacity-50"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <input
        ref={fileInputRef}
        type="file"
        accept="application/pdf,image/jpeg,image/png"
        onChange={handleFileSelected}
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        disabled={uploading}
        className="mt-2 text-xs text-emerald-700 hover:underline disabled:opacity-50"
      >
        {uploading ? "Uploading..." : "Upload receipt"}
      </button>
    </div>
  );
}
