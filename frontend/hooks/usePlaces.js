import { useMemo } from "react";
import { get } from "../services/post";
import { useApi } from "./useApi";

export function usePlaces() {
  return useApi(() => get("/places"));
}

export function usePlacesFiltered(allPlaces, { categoryName, search }) {
  return useMemo(() => {
    if (!allPlaces) return [];
    const q = search?.trim().toLowerCase() ?? "";
    return allPlaces.filter((p) => {
      const byCategory =
        !categoryName ||
        categoryName === "all" ||
        p.category?.name === categoryName;
      const byText =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.address?.toLowerCase().includes(q) ||
        p.city?.name?.toLowerCase().includes(q);
      return byCategory && byText;
    });
  }, [allPlaces, categoryName, search]);
}
