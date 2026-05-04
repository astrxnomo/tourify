import { get } from "../services/post";
import { useApi } from "./useApi";

export function useEventDetail(id) {
  return useApi(() => get(`/events/${id}`), [id]);
}
