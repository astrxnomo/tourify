import { get } from "../services/post";
import { useApi } from "./useApi";

export function useCityDetail(id) {
  return useApi(() => get(`/cities/${id}`), [id]);
}
