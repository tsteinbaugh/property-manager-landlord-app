// newsrc/lib/apiClient.js
const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

export async function apiFetch(path, { method = "GET", token, body } = {}) {
  const headers = { "Content-Type": "application/json" };

  // If we later add JWTs, they'll be passed here as Authorization
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const text = await res.text();
    let json;
    try {
      json = JSON.parse(text);
    } catch {
      throw new Error(text || res.statusText);
    }
    throw new Error(json.error || res.statusText);
  }

  return res.json();
}
