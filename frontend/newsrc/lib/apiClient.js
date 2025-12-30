// newsrc/lib/apiClient.js
const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

export async function apiFetch(path, { method = "GET", token, body } = {}) {
  const isFormData =
    typeof FormData !== "undefined" && body instanceof FormData;

  const headers = {};

  // Auth header
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  // Only set JSON content-type when NOT FormData
  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }

  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    body: body
      ? isFormData
        ? body
        : JSON.stringify(body)
      : undefined,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    try {
      const json = JSON.parse(text);
      throw new Error(json.error || res.statusText);
    } catch {
      throw new Error(text || res.statusText);
    }
  }

  // handle empty responses gracefully
  const ct = res.headers.get("content-type") || "";
  if (!ct.includes("application/json")) return null;

  return res.json();
}
