import { get } from "../services/post";
import { useApi } from "./useApi";

export function useCities() {
  return useApi(() => get("/cities"));
}
