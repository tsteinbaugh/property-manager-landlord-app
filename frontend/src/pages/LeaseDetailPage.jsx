import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";

const LEASE_STATUSES = ["ACTIVE", "EXPIRED", "MONTH_TO_MONTH", "TERMINATED"];
const LEASE_TENANT_ROLES = ["PRIMARY", "CO_TENANT", "GUARANTOR"];

const TEXT_FIELDS = ["renewalRentIncreaseCap", "notes"];
const NUMBER_FIELDS = ["monthlyRent", "securityDepositAmount", "lateFeeAmount", "lateFeeGraceDays", "petRentAmount"];
const DATE_FIELDS = ["startDate", "endDate"];

function toForm(lease) {
  const form = { status: lease.status, petPolicy: !!lease.petPolicy };
  for (const f of TEXT_FIELDS) form[f] = lease[f] || "";
  for (const f of NUMBER_FIELDS) form[f] = lease[f] ?? "";
  for (const f of DATE_FIELDS) form[f] = lease[f] ? lease[f].slice(0, 10) : "";
  return form;
}

function money(amount) {
  if (amount === null || amount === undefined) return null;
  return `$${Number(amount).toLocaleString()}`;
}

const OCCUPANT_FIELDS = [
  { key: "name", label: "Name", required: true },
  { key: "age", label: "Age", type: "number" },
  { key: "phone", label: "Phone" },
  { key: "email", label: "Email", type: "email" },
];

const PET_FIELDS = [
  { key: "type", label: "Type", required: true, placeholder: "Cat, dog, bird..." },
  { key: "breed", label: "Breed" },
  { key: "name", label: "Name" },
  { key: "license", label: "License" },
  { key: "age", label: "Age", type: "number" },
];

const VEHICLE_FIELDS = [
  { key: "make", label: "Make" },
  { key: "model", label: "Model" },
  { key: "year", label: "Year", type: "number" },
  { key: "color", label: "Color" },
  { key: "licensePlate", label: "License plate" },
  { key: "state", label: "State" },
  { key: "vin", label: "VIN" },
  { key: "parkingSpot", label: "Parking spot" },
];

export default function LeaseDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const api = useApi();
  const fileInputRef = useRef(null);

  const [lease, setLease] = useState(null);
  const [propertyTenants, setPropertyTenants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [attachTenantId, setAttachTenantId] = useState("");
  const [attachRole, setAttachRole] = useState("PRIMARY");
  const [uploading, setUploading] = useState(false);
  const [documentBusy, setDocumentBusy] = useState(false);

  const [deposits, setDeposits] = useState([]);
  const [occupants, setOccupants] = useState([]);
  const [pets, setPets] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  async function load() {
    setLoading(true);
    try {
      const data = await api.get(`/api/leases/${id}`);
      setLease(data);
      setForm(toForm(data));
      const [tenants, depositData, occupantData, petData, vehicleData] = await Promise.all([
        api.get(`/api/tenants?propertyId=${data.propertyId}`),
        api.get(`/api/deposits?leaseId=${id}`),
        api.get(`/api/occupants?leaseId=${id}`),
        api.get(`/api/pets?leaseId=${id}`),
        api.get(`/api/vehicles?leaseId=${id}`),
      ]);
      setPropertyTenants(tenants);
      setDeposits(depositData);
      setOccupants(occupantData);
      setPets(petData);
      setVehicles(vehicleData);
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

    const body = { ...form };
    for (const key of [...TEXT_FIELDS, ...NUMBER_FIELDS, ...DATE_FIELDS]) {
      if (body[key] === "") delete body[key];
    }
    for (const key of NUMBER_FIELDS) {
      if (body[key] !== undefined) body[key] = Number(body[key]);
    }

    try {
      const updated = await api.put(`/api/leases/${id}`, body);
      setLease(updated);
      setForm(toForm(updated));
      setEditing(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete() {
    if (!confirm("Delete this lease? This can't be undone.")) return;
    try {
      const propertyId = lease.propertyId;
      await api.del(`/api/leases/${id}`);
      navigate(`/properties/${propertyId}`);
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleAttachTenant(e) {
    e.preventDefault();
    if (!attachTenantId) return;
    setError(null);
    try {
      const updated = await api.post(`/api/leases/${id}/tenants`, { tenantId: attachTenantId, role: attachRole });
      setLease(updated);
      setAttachTenantId("");
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDetachTenant(tenantId) {
    setError(null);
    try {
      await api.del(`/api/leases/${id}/tenants/${tenantId}`);
      await load();
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleFileSelected(e) {
    const file = e.target.files[0];
    e.target.value = "";
    if (!file) return;

    if (file.type !== "application/pdf") {
      setError("Only PDF files are supported for lease documents.");
      return;
    }

    setUploading(true);
    setError(null);
    try {
      const { uploadUrl, key } = await api.post(`/api/leases/${id}/document-upload-url`, {
        fileName: file.name,
        contentType: file.type,
      });

      const putRes = await fetch(uploadUrl, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file,
      });
      if (!putRes.ok) throw new Error("Upload to storage failed");

      const updated = await api.post(`/api/leases/${id}/document-confirm`, { key });
      setLease(updated);
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  }

  async function handleViewDocument() {
    setDocumentBusy(true);
    setError(null);
    try {
      const { downloadUrl } = await api.get(`/api/leases/${id}/document-url`);
      window.open(downloadUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      setError(err.message);
    } finally {
      setDocumentBusy(false);
    }
  }

  async function handleDeleteDocument() {
    if (!confirm("Remove the uploaded lease document?")) return;
    setDocumentBusy(true);
    setError(null);
    try {
      await api.del(`/api/leases/${id}/document`);
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setDocumentBusy(false);
    }
  }

  if (loading) return <p className="text-sm text-stone-500">Loading...</p>;
  if (!lease) return <p className="text-sm text-red-700">{error || "Lease not found."}</p>;

  const attachableTenants = propertyTenants.filter(
    (t) => t.applicationStatus === "APPROVED" && !lease.leaseTenants.some((lt) => lt.tenantId === t.id),
  );
  const hasUnapprovedTenants = propertyTenants.some(
    (t) => t.applicationStatus !== "APPROVED" && !lease.leaseTenants.some((lt) => lt.tenantId === t.id),
  );

  return (
    <div className="space-y-6">
      <Link to={`/properties/${lease.propertyId}`} className="text-sm text-emerald-700 hover:underline">
        ← Back to property
      </Link>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      )}

      <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h1 className="text-2xl text-stone-900">{money(lease.monthlyRent)}/mo</h1>
            <p className="text-sm text-stone-500">
              {new Date(lease.startDate).toLocaleDateString()}
              {lease.endDate ? ` – ${new Date(lease.endDate).toLocaleDateString()}` : " – open"}
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
                <span className="mb-1 block font-medium text-stone-700">Start date</span>
                <input
                  type="date"
                  value={form.startDate}
                  onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">End date</span>
                <input
                  type="date"
                  value={form.endDate}
                  onChange={(e) => setForm({ ...form, endDate: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Monthly rent</span>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={form.monthlyRent}
                  onChange={(e) => setForm({ ...form, monthlyRent: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Status</span>
                <select
                  value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                >
                  {LEASE_STATUSES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Security deposit</span>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={form.securityDepositAmount}
                  onChange={(e) => setForm({ ...form, securityDepositAmount: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Late fee amount</span>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={form.lateFeeAmount}
                  onChange={(e) => setForm({ ...form, lateFeeAmount: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Late fee grace days</span>
                <input
                  type="number"
                  min="0"
                  step="1"
                  value={form.lateFeeGraceDays}
                  onChange={(e) => setForm({ ...form, lateFeeGraceDays: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="flex items-center gap-2 self-end pb-2 text-sm">
                <input
                  type="checkbox"
                  checked={form.petPolicy}
                  onChange={(e) => setForm({ ...form, petPolicy: e.target.checked })}
                  className="h-4 w-4 rounded border-stone-300"
                />
                <span className="font-medium text-stone-700">Pets allowed</span>
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Pet rent</span>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={form.petRentAmount}
                  onChange={(e) => setForm({ ...form, petRentAmount: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Renewal rent increase cap</span>
                <input
                  value={form.renewalRentIncreaseCap}
                  onChange={(e) => setForm({ ...form, renewalRentIncreaseCap: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  placeholder="e.g. 3% max annually"
                />
              </label>
              <label className="block text-sm sm:col-span-2">
                <span className="mb-1 block font-medium text-stone-700">Notes</span>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
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
                {submitting ? "Saving..." : "Save changes"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setForm(toForm(lease));
                  setEditing(false);
                }}
                className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 border-t border-stone-200 pt-4 text-sm sm:grid-cols-2">
            <DetailRow label="Status" value={lease.status} />
            <DetailRow label="Security deposit" value={money(lease.securityDepositAmount)} />
            <DetailRow label="Late fee" value={money(lease.lateFeeAmount)} />
            <DetailRow label="Late fee grace days" value={lease.lateFeeGraceDays} />
            <DetailRow label="Pets allowed" value={lease.petPolicy ? "Yes" : "No"} />
            <DetailRow label="Pet rent" value={money(lease.petRentAmount)} />
            <DetailRow label="Renewal rent increase cap" value={lease.renewalRentIncreaseCap} />
            {lease.notes && (
              <div className="sm:col-span-2">
                <span className="text-stone-400">Notes: </span>
                <span className="text-stone-700">{lease.notes}</span>
              </div>
            )}
          </div>
        )}
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-stone-900">Deposits</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <DepositCard
            leaseId={id}
            type="SECURITY"
            label="Security deposit"
            deposit={deposits.find((d) => d.type === "SECURITY") || null}
            onChange={load}
          />
          <DepositCard
            leaseId={id}
            type="PET"
            label="Pet deposit"
            deposit={deposits.find((d) => d.type === "PET") || null}
            onChange={load}
          />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-stone-900">Tenants on this lease</h2>

        {lease.leaseTenants.length === 0 ? (
          <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-sm text-stone-500">
            No tenants attached yet.
          </p>
        ) : (
          <div className="space-y-2">
            {lease.leaseTenants.map((lt) => (
              <div
                key={lt.id}
                className="flex items-center justify-between rounded-xl border border-stone-200 bg-white p-4 shadow-sm"
              >
                <div>
                  <Link to={`/tenants/${lt.tenant.id}`} className="font-medium text-emerald-700 hover:underline">
                    {lt.tenant.firstName} {lt.tenant.lastName}
                  </Link>
                  <span className="ml-2 rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600">
                    {lt.role}
                  </span>
                </div>
                <button onClick={() => handleDetachTenant(lt.tenant.id)} className="text-sm text-red-600 hover:underline">
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {attachableTenants.length > 0 && (
          <form onSubmit={handleAttachTenant} className="flex flex-wrap items-end gap-3 rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Tenant</span>
              <select
                value={attachTenantId}
                onChange={(e) => setAttachTenantId(e.target.value)}
                className="rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              >
                <option value="">Select a tenant</option>
                {attachableTenants.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.firstName} {t.lastName}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium text-stone-700">Role</span>
              <select
                value={attachRole}
                onChange={(e) => setAttachRole(e.target.value)}
                className="rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
              >
                {LEASE_TENANT_ROLES.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="submit"
              disabled={!attachTenantId}
              className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-50"
            >
              Attach
            </button>
          </form>
        )}

        {hasUnapprovedTenants && (
          <p className="text-xs text-stone-400">
            Some applicants on this property aren't shown here — only approved tenants can be attached to a
            lease.
          </p>
        )}
      </section>

      <SimpleRecordSection
        title="Occupants"
        addLabel="Add occupant"
        emptyLabel="No occupants on this lease yet — anyone living here who isn't a tenant on the lease (kids, an aging parent, etc.)."
        items={occupants}
        fields={OCCUPANT_FIELDS}
        apiPath="/api/occupants"
        leaseId={id}
        onChange={load}
        renderSummary={(o) =>
          [o.name, o.age ? `age ${o.age}` : null, [o.phone, o.email].filter(Boolean).join(", ") || null]
            .filter(Boolean)
            .join(" · ")
        }
      />

      <SimpleRecordSection
        title="Pets"
        addLabel="Add pet"
        emptyLabel="No pets on this lease yet."
        items={pets}
        fields={PET_FIELDS}
        apiPath="/api/pets"
        leaseId={id}
        onChange={load}
        renderSummary={(p) =>
          [p.name, p.type, p.breed, p.license ? `license ${p.license}` : null, p.age ? `age ${p.age}` : null]
            .filter(Boolean)
            .join(" · ")
        }
      />

      <SimpleRecordSection
        title="Vehicles"
        addLabel="Add vehicle"
        emptyLabel="No vehicles on this lease yet."
        items={vehicles}
        fields={VEHICLE_FIELDS}
        apiPath="/api/vehicles"
        leaseId={id}
        onChange={load}
        renderSummary={(v) =>
          [
            [v.year, v.color, v.make, v.model].filter(Boolean).join(" ") || null,
            v.licensePlate ? `${v.licensePlate}${v.state ? ` (${v.state})` : ""}` : null,
            v.vin ? `VIN ${v.vin}` : null,
            v.parkingSpot ? `spot ${v.parkingSpot}` : null,
          ]
            .filter(Boolean)
            .join(" · ") || "No details yet"
        }
      />

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-stone-900">Document</h2>
        <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
          {lease.documentKey ? (
            <div className="flex items-center gap-4 text-sm">
              <button
                onClick={handleViewDocument}
                disabled={documentBusy}
                className="text-emerald-700 hover:underline disabled:opacity-50"
              >
                View lease PDF
              </button>
              <button
                onClick={handleDeleteDocument}
                disabled={documentBusy}
                className="text-red-600 hover:underline disabled:opacity-50"
              >
                Remove
              </button>
            </div>
          ) : (
            <p className="text-sm text-stone-500">No lease PDF uploaded yet.</p>
          )}
          <div className="mt-3">
            <input
              ref={fileInputRef}
              type="file"
              accept="application/pdf"
              onChange={handleFileSelected}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50 disabled:opacity-50"
            >
              {uploading ? "Uploading..." : lease.documentKey ? "Replace PDF" : "Upload PDF"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function DetailRow({ label, value }) {
  if (value === null || value === undefined || value === "") return null;
  return (
    <div>
      <span className="text-stone-400">{label}: </span>
      <span className="text-stone-700">{value}</span>
    </div>
  );
}

const DEPOSIT_STATUSES = ["HELD", "PARTIALLY_RETURNED", "FULLY_RETURNED", "FORFEITED"];

function depositToForm(deposit) {
  return {
    amountHeld: deposit.amountHeld,
    dateReceived: deposit.dateReceived.slice(0, 10),
    storageMethod: deposit.storageMethod || "",
    status: deposit.status,
    returnedAmount: deposit.returnedAmount ?? "",
    returnedDate: deposit.returnedDate ? deposit.returnedDate.slice(0, 10) : "",
  };
}

const EMPTY_DEPOSIT_FORM = {
  amountHeld: "",
  dateReceived: "",
  storageMethod: "",
  status: "HELD",
  returnedAmount: "",
  returnedDate: "",
};

function DepositCard({ leaseId, type, label, deposit, onChange }) {
  const api = useApi();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(deposit ? depositToForm(deposit) : EMPTY_DEPOSIT_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [deductionForm, setDeductionForm] = useState({ description: "", amount: "" });

  function startEditing() {
    setForm(deposit ? depositToForm(deposit) : EMPTY_DEPOSIT_FORM);
    setEditing(true);
  }

  async function handleSave(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const body = { ...form, amountHeld: Number(form.amountHeld) };
      if (!body.storageMethod) delete body.storageMethod;
      if (body.returnedAmount === "") delete body.returnedAmount;
      else body.returnedAmount = Number(body.returnedAmount);
      if (!body.returnedDate) delete body.returnedDate;

      if (deposit) {
        await api.put(`/api/deposits/${deposit.id}`, body);
      } else {
        await api.post("/api/deposits", { ...body, leaseId, type });
      }
      setEditing(false);
      onChange();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete() {
    if (!confirm(`Delete the ${label.toLowerCase()}? This can't be undone.`)) return;
    try {
      await api.del(`/api/deposits/${deposit.id}`);
      onChange();
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleAddDeduction(e) {
    e.preventDefault();
    if (!deductionForm.description || !deductionForm.amount) return;
    setError(null);
    try {
      await api.post(`/api/deposits/${deposit.id}/deductions`, {
        description: deductionForm.description,
        amount: Number(deductionForm.amount),
      });
      setDeductionForm({ description: "", amount: "" });
      onChange();
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleRemoveDeduction(deductionId) {
    setError(null);
    try {
      await api.del(`/api/deposits/${deposit.id}/deductions/${deductionId}`);
      onChange();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-stone-900">{label}</h3>
        {!editing && deposit && (
          <div className="flex gap-3 text-sm">
            <button onClick={startEditing} className="text-emerald-700 hover:underline">
              Edit
            </button>
            <button onClick={handleDelete} className="text-red-600 hover:underline">
              Delete
            </button>
          </div>
        )}
      </div>

      {error && <p className="mt-2 text-sm text-red-700">{error}</p>}

      {!deposit && !editing && (
        <div className="mt-2">
          <p className="text-sm text-stone-500">Not tracked yet.</p>
          <button onClick={startEditing} className="mt-2 text-sm text-emerald-700 hover:underline">
            Add {label.toLowerCase()}
          </button>
        </div>
      )}

      {editing ? (
        <form onSubmit={handleSave} className="mt-3 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <label className="block text-xs">
              <span className="mb-1 block font-medium text-stone-700">Amount held *</span>
              <input
                required
                type="number"
                min="0"
                step="0.01"
                value={form.amountHeld}
                onChange={(e) => setForm({ ...form, amountHeld: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-2 py-1.5 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
            <label className="block text-xs">
              <span className="mb-1 block font-medium text-stone-700">Date received *</span>
              <input
                required
                type="date"
                value={form.dateReceived}
                onChange={(e) => setForm({ ...form, dateReceived: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-2 py-1.5 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
            <label className="block text-xs">
              <span className="mb-1 block font-medium text-stone-700">Storage method</span>
              <input
                value={form.storageMethod}
                onChange={(e) => setForm({ ...form, storageMethod: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-2 py-1.5 text-sm focus:border-emerald-600 focus:outline-none"
                placeholder="Escrow account"
              />
            </label>
            <label className="block text-xs">
              <span className="mb-1 block font-medium text-stone-700">Status</span>
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-2 py-1.5 text-sm focus:border-emerald-600 focus:outline-none"
              >
                {DEPOSIT_STATUSES.map((s) => (
                  <option key={s} value={s}>
                    {s.replaceAll("_", " ")}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-xs">
              <span className="mb-1 block font-medium text-stone-700">Returned amount</span>
              <input
                type="number"
                min="0"
                step="0.01"
                value={form.returnedAmount}
                onChange={(e) => setForm({ ...form, returnedAmount: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-2 py-1.5 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
            <label className="block text-xs">
              <span className="mb-1 block font-medium text-stone-700">Returned date</span>
              <input
                type="date"
                value={form.returnedDate}
                onChange={(e) => setForm({ ...form, returnedDate: e.target.value })}
                className="w-full rounded-lg border border-stone-300 px-2 py-1.5 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </label>
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-lg bg-emerald-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-800 disabled:opacity-50"
            >
              {submitting ? "Saving..." : "Save"}
            </button>
            <button
              type="button"
              onClick={() => setEditing(false)}
              className="rounded-lg border border-stone-300 px-3 py-1.5 text-xs font-medium text-stone-700 hover:bg-stone-50"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        deposit && (
          <div className="mt-2 space-y-1 text-sm">
            <DetailRow label="Amount held" value={money(deposit.amountHeld)} />
            <DetailRow label="Date received" value={new Date(deposit.dateReceived).toLocaleDateString()} />
            <DetailRow label="Storage method" value={deposit.storageMethod} />
            <DetailRow label="Status" value={deposit.status.replaceAll("_", " ")} />
            <DetailRow label="Returned amount" value={money(deposit.returnedAmount)} />
            <DetailRow
              label="Returned date"
              value={deposit.returnedDate ? new Date(deposit.returnedDate).toLocaleDateString() : null}
            />

            <div className="pt-2">
              <p className="text-xs font-semibold text-stone-500">Deductions</p>
              {deposit.deductions.length === 0 ? (
                <p className="text-xs text-stone-400">None</p>
              ) : (
                <div className="mt-1 space-y-1">
                  {deposit.deductions.map((d) => (
                    <div key={d.id} className="flex items-center justify-between text-xs">
                      <span>
                        {d.description} — {money(d.amount)}
                      </span>
                      <button onClick={() => handleRemoveDeduction(d.id)} className="text-red-600 hover:underline">
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <form onSubmit={handleAddDeduction} className="mt-2 flex gap-2">
                <input
                  value={deductionForm.description}
                  onChange={(e) => setDeductionForm({ ...deductionForm, description: e.target.value })}
                  placeholder="Description"
                  className="min-w-0 flex-1 rounded-lg border border-stone-300 px-2 py-1 text-xs focus:border-emerald-600 focus:outline-none"
                />
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={deductionForm.amount}
                  onChange={(e) => setDeductionForm({ ...deductionForm, amount: e.target.value })}
                  placeholder="Amount"
                  className="w-20 rounded-lg border border-stone-300 px-2 py-1 text-xs focus:border-emerald-600 focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-lg border border-stone-300 px-2 py-1 text-xs font-medium text-stone-700 hover:bg-stone-50"
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        )
      )}
    </div>
  );
}

function emptyFormFor(fields) {
  return Object.fromEntries(fields.map((f) => [f.key, ""]));
}

function SimpleRecordSection({ title, addLabel, emptyLabel, items, fields, apiPath, leaseId, onChange, renderSummary }) {
  const api = useApi();
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState(() => emptyFormFor(fields));
  const [editingId, setEditingId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  function openForm(item) {
    if (item) {
      const f = {};
      for (const field of fields) f[field.key] = item[field.key] ?? "";
      setForm(f);
      setEditingId(item.id);
    } else {
      setForm(emptyFormFor(fields));
      setEditingId(null);
    }
    setFormOpen(true);
  }

  async function handleSave(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const body = { ...form };
      for (const field of fields) {
        if (body[field.key] === "") delete body[field.key];
        else if (field.type === "number") body[field.key] = Number(body[field.key]);
      }

      if (editingId) {
        await api.put(`${apiPath}/${editingId}`, body);
      } else {
        await api.post(apiPath, { ...body, leaseId });
      }
      setFormOpen(false);
      onChange();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(itemId) {
    if (!confirm("Delete this record? This can't be undone.")) return;
    setError(null);
    try {
      await api.del(`${apiPath}/${itemId}`);
      onChange();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-stone-900">{title}</h2>
        <button
          onClick={() => openForm(null)}
          className="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-800"
        >
          {addLabel}
        </button>
      </div>

      {error && <p className="text-sm text-red-700">{error}</p>}

      {formOpen && (
        <form onSubmit={handleSave} className="space-y-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fields.map((field) => (
              <label key={field.key} className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">
                  {field.label}
                  {field.required ? " *" : ""}
                </span>
                <input
                  required={field.required}
                  type={field.type || "text"}
                  value={form[field.key]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  placeholder={field.placeholder}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 disabled:opacity-50"
            >
              {submitting ? "Saving..." : editingId ? "Save changes" : addLabel}
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
          {emptyLabel}
        </p>
      ) : (
        <div className="space-y-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl border border-stone-200 bg-white p-4 shadow-sm"
            >
              <p className="text-sm text-stone-700">{renderSummary(item)}</p>
              <div className="flex gap-3 text-sm">
                <button onClick={() => openForm(item)} className="text-emerald-700 hover:underline">
                  Edit
                </button>
                <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:underline">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
