const API_URL = import.meta.env.VITE_API_URL;

async function request(getToken, path, { method = "GET", body } = {}) {
  const token = await getToken();

  const res = await fetch(`${API_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const payload = await res.json().catch(() => ({}));
    throw new Error(payload.error || `Request failed with status ${res.status}`);
  }

  if (res.status === 204) return null;
  return res.json();
}

export function createApiClient(getToken) {
  return {
    get: (path) => request(getToken, path),
    post: (path, body) => request(getToken, path, { method: "POST", body }),
    put: (path, body) => request(getToken, path, { method: "PUT", body }),
    del: (path) => request(getToken, path, { method: "DELETE" }),
  };
}
