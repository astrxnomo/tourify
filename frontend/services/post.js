import { storage } from "./storage";

const API_URL = "http://localhost:8000/api";

async function getAuthHeaders() {
  const token = await storage.getItem("auth_token");
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

async function request(endpoint, method, data) {
  const headers = await getAuthHeaders();
  const options = { method, headers };
  if (data !== undefined) options.body = JSON.stringify(data);

  const response = await fetch(`${API_URL}${endpoint}`, options);
  const json = await response.json();

  if (!response.ok) {
    const message =
      json.message ||
      Object.values(json.errors || {})[0]?.[0] ||
      "Error en la solicitud";
    throw new Error(message);
  }

  return json;
}

export const post = (endpoint, data) => request(endpoint, "POST", data);
export const get = (endpoint) => request(endpoint, "GET");
export const patch = (endpoint, data = {}) => request(endpoint, "PATCH", data);
export const del = (endpoint, data) => request(endpoint, "DELETE", data);
