import API_BASE from "../../../config/apiBase";

export default async function getPostById(id) {
  const [postResponse, commentResponse] = await Promise.all([
    fetch(`${API_BASE}/posts/${id}`),
    fetch(`${API_BASE}/comments/?postId=${id}`),
  ]);

  if (!postResponse.ok || !commentResponse.ok) {
    throw new Error("Failed to load post details");
  }

  const post = await postResponse.json();
  const comments = await commentResponse.json();
  return {
    ...post,
    comments,
  };
}
