import API_BASE from "../../../config/apiBase";

export default async function getPostById(id) {
  const response = await fetch(`${API_BASE}/post/${id}`);
  const data = await response.json();
  return data;
}
