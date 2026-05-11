import { get } from "../services/post";
import { useApi } from "./useApi";

export function useEvents() {
  return useApi(() => get("/events"));
}
