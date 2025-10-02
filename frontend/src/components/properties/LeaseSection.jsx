import React, { useState } from "react";
import { readLeaseFileToText } from "../../utils/readLeaseFile";
import { extractLeaseFields } from "../../utils/leaseExtract";

export default function LeaseSection({ value, onChange, onExtracted }) {
  const [extracting, setExtracting] = useState(false);
  const [error, setError] = useState("");

  async function handleFile(e){
    const f = e.target.files?.[0] || null;
    setError("");
    onChange?.({ ...(value||{}), file: f });

    if (!f) { onExtracted?.(null); return; }

    if (f.size > 20 * 1024 * 1024) { // 20MB guard
      setError("File is too large. Please upload a file under 20MB.");
      onExtracted?.(null);
      return;
    }

    setExtracting(true);
    try {
      const text = await readLeaseFileToText(f);
      if (!text || !text.trim()) {
        setError("Could not read text from this file. If it’s scanned, we’ll need OCR later.");
        onExtracted?.(null);
        return;
      }
      const out = extractLeaseFields(text);
      onExtracted?.(out); // {fields, matches}
    } catch (err) {
      setError("Failed to process file. Try a different PDF/DOCX or enter fields manually.");
      onExtracted?.(null);
    } finally {
      setExtracting(false);
    }
  }

  return (
    <div>
      <label>Upload Lease (PDF/DOCX)</label>
      <input type="file" accept=".pdf,.docx" onChange={handleFile} />
      {extracting && <div>Reading lease…</div>}
      {!!error && <div style={{ color:"#b91c1c", background:"#fee2e2", padding:6, borderRadius:8, marginTop:6 }}>{error}</div>}
    </div>
  );
}
