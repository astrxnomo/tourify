import { get } from "../services/post";
import { useApi } from "./useApi";

export function useMyRegistrations() {
  return useApi(() => get("/my/registrations"));
}
