import { get } from "../services/post";
import { useApi } from "./useApi";

export function useCategoryDetail(id) {
  return useApi(() => get(`/categories/${id}`), [id]);
}
