import { useEffect, useRef, useState } from "react";

const ALLOWED_ATTACHMENT_TYPES = ["application/pdf", "image/jpeg", "image/png"];

// Supporting documents appended to the lease beyond the generated lease PDF itself — HOA rules,
// a rules addendum, etc. Sits between "Add clause" and "Generate Lease PDF" in the Lease
// Builder. No category picker in this UI (the backend still stores one, for future use) —
// Taylor just wants files appended in upload order with their titles visible, not a filing
// system.
export default function LeaseAttachmentsPanel({ api, leaseId }) {
  const fileInputRef = useRef(null);
  const [attachments, setAttachments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [busyId, setBusyId] = useState(null);
  const [error, setError] = useState(null);

  async function load() {
    setLoading(true);
    try {
      const docs = await api.get(`/api/leases/${leaseId}/attachments`);
      setAttachments(docs);
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
  }, [leaseId]);

  async function handleFileSelected(e) {
    const file = e.target.files[0];
    e.target.value = "";
    if (!file) return;

    if (!ALLOWED_ATTACHMENT_TYPES.includes(file.type)) {
      setError("Only PDF, JPEG, or PNG files are supported.");
      return;
    }

    setUploading(true);
    setError(null);
    try {
      const { uploadUrl, key } = await api.post(`/api/leases/${leaseId}/attachments/upload-url`, {
        fileName: file.name,
        contentType: file.type,
        category: "Addendum",
      });

      const putRes = await fetch(uploadUrl, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file,
      });
      if (!putRes.ok) throw new Error("Upload to storage failed");

      await api.post(`/api/leases/${leaseId}/attachments/confirm`, { key, fileName: file.name, category: "Addendum" });
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  }

  async function handleView(attachmentId) {
    setBusyId(attachmentId);
    setError(null);
    try {
      const { downloadUrl } = await api.get(`/api/leases/${leaseId}/attachments/${attachmentId}/download-url`);
      window.open(downloadUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      setError(err.message);
    } finally {
      setBusyId(null);
    }
  }

  async function handleRemove(attachmentId) {
    if (!confirm("Remove this attachment from the lease?")) return;
    setBusyId(attachmentId);
    setError(null);
    try {
      await api.del(`/api/leases/${leaseId}/attachments/${attachmentId}`);
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <p className="text-sm font-medium text-stone-900">Attachments</p>
      <p className="mt-1 text-xs text-stone-500">
        HOA rules, a rules addendum, or any other document you want bundled with this lease — appended after the
        clauses, in the order you upload them.
      </p>

      {error && <p className="mt-2 text-xs text-red-700">{error}</p>}

      {loading ? (
        <p className="mt-2 text-xs text-stone-400">Loading...</p>
      ) : attachments.length === 0 ? (
        <p className="mt-2 text-xs text-stone-400">No attachments yet.</p>
      ) : (
        <ol className="mt-2 space-y-1">
          {attachments.map((doc, i) => (
            <li key={doc.id} className="flex items-center justify-between text-sm">
              <button
                onClick={() => handleView(doc.id)}
                disabled={busyId === doc.id}
                className="text-emerald-700 hover:underline disabled:opacity-50"
              >
                {i + 1}. {doc.fileName}
              </button>
              <button
                onClick={() => handleRemove(doc.id)}
                disabled={busyId === doc.id}
                className="text-red-600 hover:underline disabled:opacity-50"
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
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
        className="mt-3 rounded-lg border border-stone-300 px-3 py-1.5 text-sm font-medium text-stone-700 hover:bg-stone-50 disabled:opacity-50"
      >
        {uploading ? "Uploading..." : "Upload attachment"}
      </button>
    </div>
  );
}
