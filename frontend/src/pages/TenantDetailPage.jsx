import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";

const APPLICATION_STATUSES = ["PENDING", "APPROVED", "REJECTED"];

const TEXT_FIELDS = [
  "phone",
  "email",
  "creditCheckStatus",
  "backgroundCheckStatus",
  "employer",
  "employmentStatus",
  "emergencyContactName",
  "emergencyContactPhone",
  "emergencyContactRelation",
  "rentersInsuranceInsurer",
  "rentersInsurancePolicyNumber",
];
const DATE_FIELDS = ["dateOfBirth", "creditCheckDate", "backgroundCheckDate", "rentersInsuranceExpirationDate"];
const NUMBER_FIELDS = ["monthlyIncome", "rentersInsuranceCoverageAmount"];
const BOOL_FIELDS = ["idVerified", "rentersInsuranceLandlordAdditionalInsured", "rentersInsuranceCertificateOnFile"];

const DOCUMENT_CATEGORIES = [
  { value: "CREDIT_REPORT", label: "Credit report" },
  { value: "BACKGROUND_CHECK", label: "Background check" },
  { value: "INCOME_VERIFICATION", label: "Income verification" },
  { value: "ID", label: "ID" },
];
const ALLOWED_DOCUMENT_TYPES = ["application/pdf", "image/jpeg", "image/png"];

function toForm(tenant) {
  const form = {
    firstName: tenant.firstName,
    lastName: tenant.lastName,
    applicationStatus: tenant.applicationStatus,
  };
  for (const f of TEXT_FIELDS) form[f] = tenant[f] || "";
  for (const f of DATE_FIELDS) form[f] = tenant[f] ? tenant[f].slice(0, 10) : "";
  for (const f of NUMBER_FIELDS) form[f] = tenant[f] ?? "";
  for (const f of BOOL_FIELDS) form[f] = !!tenant[f];
  return form;
}

export default function TenantDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const api = useApi();
  const fileInputRef = useRef(null);

  const [tenant, setTenant] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [activeUploadCategory, setActiveUploadCategory] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [documentBusyId, setDocumentBusyId] = useState(null);

  function triggerUpload(category) {
    setActiveUploadCategory(category);
    fileInputRef.current?.click();
  }

  function documentCountFor(category) {
    return documents.filter((d) => d.category === category).length;
  }

  async function load() {
    setLoading(true);
    try {
      const [data, docs] = await Promise.all([
        api.get(`/api/tenants/${id}`),
        api.get(`/api/tenants/${id}/documents`),
      ]);
      setTenant(data);
      setForm(toForm(data));
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
  }, [id]);

  async function handleSave(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const body = { ...form };
    for (const key of [...TEXT_FIELDS, ...DATE_FIELDS, ...NUMBER_FIELDS]) {
      if (body[key] === "") delete body[key];
    }
    for (const key of NUMBER_FIELDS) {
      if (body[key] !== undefined) body[key] = Number(body[key]);
    }

    try {
      const updated = await api.put(`/api/tenants/${id}`, body);
      setTenant(updated);
      setForm(toForm(updated));
      setEditing(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleFileSelected(e) {
    const file = e.target.files[0];
    const category = activeUploadCategory;
    e.target.value = "";
    if (!file || !category) return;

    if (!ALLOWED_DOCUMENT_TYPES.includes(file.type)) {
      setError("Only PDF, JPEG, or PNG files are supported.");
      return;
    }

    setUploading(true);
    setError(null);
    try {
      const { uploadUrl, key } = await api.post(`/api/tenants/${id}/documents/upload-url`, {
        fileName: file.name,
        contentType: file.type,
        category,
      });

      const putRes = await fetch(uploadUrl, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file,
      });
      if (!putRes.ok) throw new Error("Upload to storage failed");

      await api.post(`/api/tenants/${id}/documents/confirm`, { key, category, fileName: file.name });
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
      setActiveUploadCategory(null);
    }
  }

  async function handleViewDocument(documentId) {
    setDocumentBusyId(documentId);
    setError(null);
    try {
      const { downloadUrl } = await api.get(`/api/tenants/${id}/documents/${documentId}/download-url`);
      window.open(downloadUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      setError(err.message);
    } finally {
      setDocumentBusyId(null);
    }
  }

  async function handleDeleteDocument(documentId) {
    if (!confirm("Remove this document?")) return;
    setDocumentBusyId(documentId);
    setError(null);
    try {
      await api.del(`/api/tenants/${id}/documents/${documentId}`);
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setDocumentBusyId(null);
    }
  }

  async function handleDelete() {
    if (!confirm(`Delete "${tenant.firstName} ${tenant.lastName}"? This can't be undone.`)) return;
    try {
      const propertyId = tenant.propertyId;
      await api.del(`/api/tenants/${id}`);
      navigate(`/properties/${propertyId}`);
    } catch (err) {
      setError(err.message);
    }
  }

  if (loading) return <p className="text-sm text-stone-500">Loading...</p>;
  if (!tenant) return <p className="text-sm text-red-700">{error || "Tenant not found."}</p>;

  return (
    <div className="space-y-6">
      <Link to={`/properties/${tenant.propertyId}`} className="text-sm text-emerald-700 hover:underline">
        ← Back to property
      </Link>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      )}

      <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h1 className="text-2xl text-stone-900">
              {tenant.firstName} {tenant.lastName}
            </h1>
            <span
              className={`mt-1 inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                tenant.applicationStatus === "APPROVED"
                  ? "bg-emerald-100 text-emerald-800"
                  : tenant.applicationStatus === "REJECTED"
                    ? "bg-red-100 text-red-800"
                    : "bg-amber-100 text-amber-800"
              }`}
            >
              {tenant.applicationStatus}
            </span>
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
          <form onSubmit={handleSave} className="mt-4 space-y-5 border-t border-stone-200 pt-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">First name *</span>
                <input
                  required
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Last name *</span>
                <input
                  required
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Application status</span>
                <select
                  value={form.applicationStatus}
                  onChange={(e) => setForm({ ...form, applicationStatus: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                >
                  {APPLICATION_STATUSES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Phone</span>
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium text-stone-700">Date of birth</span>
                <input
                  type="date"
                  value={form.dateOfBirth}
                  onChange={(e) => setForm({ ...form, dateOfBirth: e.target.value })}
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                />
              </label>
              <label className="flex items-center gap-2 self-end pb-2 text-sm">
                <input
                  type="checkbox"
                  checked={form.idVerified}
                  onChange={(e) => setForm({ ...form, idVerified: e.target.checked })}
                  className="h-4 w-4 rounded border-stone-300"
                />
                <span className="font-medium text-stone-700">ID verified</span>
              </label>
              <UploadButton
                label="ID"
                category="ID"
                activeCategory={activeUploadCategory}
                uploading={uploading}
                count={documentCountFor("ID")}
                onClick={triggerUpload}
              />
            </div>

            <div>
              <h2 className="mb-2 text-sm font-semibold text-stone-700">Screening</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">Credit check status</span>
                  <input
                    value={form.creditCheckStatus}
                    onChange={(e) => setForm({ ...form, creditCheckStatus: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                    placeholder="Passed, pending, etc."
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">Credit check date</span>
                  <input
                    type="date"
                    value={form.creditCheckDate}
                    onChange={(e) => setForm({ ...form, creditCheckDate: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </label>
                <UploadButton
                  label="credit report"
                  category="CREDIT_REPORT"
                  activeCategory={activeUploadCategory}
                  uploading={uploading}
                  count={documentCountFor("CREDIT_REPORT")}
                  onClick={triggerUpload}
                />
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">Background check status</span>
                  <input
                    value={form.backgroundCheckStatus}
                    onChange={(e) => setForm({ ...form, backgroundCheckStatus: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                    placeholder="Clear, flagged, pending, etc."
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">Background check date</span>
                  <input
                    type="date"
                    value={form.backgroundCheckDate}
                    onChange={(e) => setForm({ ...form, backgroundCheckDate: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </label>
                <UploadButton
                  label="background check"
                  category="BACKGROUND_CHECK"
                  activeCategory={activeUploadCategory}
                  uploading={uploading}
                  count={documentCountFor("BACKGROUND_CHECK")}
                  onClick={triggerUpload}
                />
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">Employer</span>
                  <input
                    value={form.employer}
                    onChange={(e) => setForm({ ...form, employer: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">Employment status</span>
                  <input
                    value={form.employmentStatus}
                    onChange={(e) => setForm({ ...form, employmentStatus: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">Monthly income</span>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={form.monthlyIncome}
                    onChange={(e) => setForm({ ...form, monthlyIncome: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </label>
                <UploadButton
                  label="income verification"
                  category="INCOME_VERIFICATION"
                  activeCategory={activeUploadCategory}
                  uploading={uploading}
                  count={documentCountFor("INCOME_VERIFICATION")}
                  onClick={triggerUpload}
                />
              </div>
            </div>

            <div>
              <h2 className="mb-2 text-sm font-semibold text-stone-700">Emergency contact</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">Name</span>
                  <input
                    value={form.emergencyContactName}
                    onChange={(e) => setForm({ ...form, emergencyContactName: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">Phone</span>
                  <input
                    value={form.emergencyContactPhone}
                    onChange={(e) => setForm({ ...form, emergencyContactPhone: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">Relation</span>
                  <input
                    value={form.emergencyContactRelation}
                    onChange={(e) => setForm({ ...form, emergencyContactRelation: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </label>
              </div>
            </div>

            <div>
              <h2 className="mb-2 text-sm font-semibold text-stone-700">Renter's insurance</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">Insurer</span>
                  <input
                    value={form.rentersInsuranceInsurer}
                    onChange={(e) => setForm({ ...form, rentersInsuranceInsurer: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">Policy number</span>
                  <input
                    value={form.rentersInsurancePolicyNumber}
                    onChange={(e) => setForm({ ...form, rentersInsurancePolicyNumber: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">Coverage amount</span>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={form.rentersInsuranceCoverageAmount}
                    onChange={(e) => setForm({ ...form, rentersInsuranceCoverageAmount: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-stone-700">Expiration date</span>
                  <input
                    type="date"
                    value={form.rentersInsuranceExpirationDate}
                    onChange={(e) => setForm({ ...form, rentersInsuranceExpirationDate: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={form.rentersInsuranceLandlordAdditionalInsured}
                    onChange={(e) => setForm({ ...form, rentersInsuranceLandlordAdditionalInsured: e.target.checked })}
                    className="h-4 w-4 rounded border-stone-300"
                  />
                  <span className="font-medium text-stone-700">Landlord listed as additional insured</span>
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={form.rentersInsuranceCertificateOnFile}
                    onChange={(e) => setForm({ ...form, rentersInsuranceCertificateOnFile: e.target.checked })}
                    className="h-4 w-4 rounded border-stone-300"
                  />
                  <span className="font-medium text-stone-700">Certificate on file</span>
                </label>
              </div>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="application/pdf,image/jpeg,image/png"
              onChange={handleFileSelected}
              className="hidden"
            />

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
                  setForm(toForm(tenant));
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
            <DetailRow label="Phone" value={tenant.phone} />
            <DetailRow label="Email" value={tenant.email} />
            <DetailRow
              label="Date of birth"
              value={tenant.dateOfBirth ? new Date(tenant.dateOfBirth).toLocaleDateString() : null}
            />
            <DetailRow label="ID verified" value={tenant.idVerified ? "Yes" : "No"} />
            <DetailRow label="Credit check" value={tenant.creditCheckStatus} />
            <DetailRow
              label="Credit check date"
              value={tenant.creditCheckDate ? new Date(tenant.creditCheckDate).toLocaleDateString() : null}
            />
            <DetailRow label="Background check" value={tenant.backgroundCheckStatus} />
            <DetailRow
              label="Background check date"
              value={tenant.backgroundCheckDate ? new Date(tenant.backgroundCheckDate).toLocaleDateString() : null}
            />
            <DetailRow label="Employer" value={tenant.employer} />
            <DetailRow label="Employment status" value={tenant.employmentStatus} />
            <DetailRow
              label="Monthly income"
              value={tenant.monthlyIncome ? `$${Number(tenant.monthlyIncome).toLocaleString()}` : null}
            />
            <DetailRow label="Emergency contact" value={tenant.emergencyContactName} />
            <DetailRow
              label="Emergency phone"
              value={
                tenant.emergencyContactPhone
                  ? `${tenant.emergencyContactPhone}${tenant.emergencyContactRelation ? ` (${tenant.emergencyContactRelation})` : ""}`
                  : null
              }
            />
            <DetailRow label="Renter's insurer" value={tenant.rentersInsuranceInsurer} />
            <DetailRow label="Policy number" value={tenant.rentersInsurancePolicyNumber} />
            <DetailRow
              label="Coverage amount"
              value={tenant.rentersInsuranceCoverageAmount ? `$${Number(tenant.rentersInsuranceCoverageAmount).toLocaleString()}` : null}
            />
            <DetailRow
              label="Insurance expires"
              value={
                tenant.rentersInsuranceExpirationDate
                  ? new Date(tenant.rentersInsuranceExpirationDate).toLocaleDateString()
                  : null
              }
            />
          </div>
        )}
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-medium text-stone-900">Documents</h2>
        <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
          {documents.length === 0 ? (
            <p className="text-sm text-stone-500">
              No documents uploaded yet. Click Edit above, then use the upload link next to Credit check,
              Background check, Income, or ID verified.
            </p>
          ) : (
            <div className="space-y-2">
              {DOCUMENT_CATEGORIES.map(({ value, label }) => {
                const docsForCategory = documents.filter((d) => d.category === value);
                if (docsForCategory.length === 0) return null;
                return (
                  <div key={value}>
                    <p className="text-xs font-semibold text-stone-500">{label}</p>
                    <div className="mt-1 space-y-1">
                      {docsForCategory.map((doc) => (
                        <div
                          key={doc.id}
                          className="flex items-center justify-between rounded-lg border border-stone-200 px-3 py-2 text-sm"
                        >
                          <button
                            onClick={() => handleViewDocument(doc.id)}
                            disabled={documentBusyId === doc.id}
                            className="text-emerald-700 hover:underline disabled:opacity-50"
                          >
                            {doc.fileName}
                          </button>
                          <button
                            onClick={() => handleDeleteDocument(doc.id)}
                            disabled={documentBusyId === doc.id}
                            className="text-red-600 hover:underline disabled:opacity-50"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function UploadButton({ label, category, activeCategory, uploading, count, onClick }) {
  return (
    <div className="flex items-center gap-2 text-xs sm:col-span-2">
      <button
        type="button"
        onClick={() => onClick(category)}
        disabled={uploading}
        className="text-emerald-700 hover:underline disabled:opacity-50"
      >
        {uploading && activeCategory === category ? "Uploading..." : `Upload ${label}`}
      </button>
      {count > 0 && <span className="text-stone-400">({count} uploaded)</span>}
    </div>
  );
}

function DetailRow({ label, value }) {
  if (!value) return null;
  return (
    <div>
      <span className="text-stone-400">{label}: </span>
      <span className="text-stone-700">{value}</span>
    </div>
  );
}
