import { useEffect, useRef, useState } from "react";

const ALLOWED_RECEIPT_TYPES = ["application/pdf", "image/jpeg", "image/png"];

// Generic per-record document panel — works for both Income and Expense
// receipts, just given a different basePath (`/api/income/:id` or
// `/api/expenses/:id`).
export default function ReceiptsPanel({ api, basePath }) {
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
