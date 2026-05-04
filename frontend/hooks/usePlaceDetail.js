import { get } from "../services/post";
import { useApi } from "./useApi";

export function usePlaceDetail(id) {
  return useApi(() => get(`/places/${id}`), [id]);
}
