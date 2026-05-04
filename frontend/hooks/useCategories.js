import { get } from "../services/post";
import { useApi } from "./useApi";

export function useCategories() {
  return useApi(() => get("/categories"));
}
