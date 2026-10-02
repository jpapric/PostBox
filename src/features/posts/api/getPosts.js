import API_BASE from "../../../config/apiBase";

export default async function getPosts() {
  const response = await fetch(`${API_BASE}/posts`);
  if (!response.ok) throw new Error("Failed to load posts");
  return response.json();
}
