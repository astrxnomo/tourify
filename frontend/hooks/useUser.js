import { get } from "../services/post";
import { useApi } from "./useApi";

export function useUser() {
  return useApi(() => get("/auth/me"));
}
