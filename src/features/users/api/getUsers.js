import API_BASE from "../../../config/apiBase";

export default async function getUsers() {
  const response = await fetch(`${API_BASE}/users`);
  if (!response.ok) throw new Error("Failed to load users");
  return response.json();
}
