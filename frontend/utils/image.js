import { BASE_URL } from "../services/post";

export function resolveImageUrl(url) {
  if (!url) return null;
  if (url.startsWith("http")) return url;
  return `${BASE_URL}${url}`;
}
