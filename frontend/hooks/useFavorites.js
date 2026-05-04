import { useCallback, useEffect, useState } from "react";
import { del, get, post } from "../services/post";

export function useFavorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      setFavorites(await get("/favorites"));
    } catch {
      setFavorites([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const isFavorite = useCallback(
    (type, id) =>
      favorites.some((f) => f.favorable_type === type && f.favorable_id === id),
    [favorites],
  );

  const toggleFavorite = useCallback(
    async (type, id) => {
      if (isFavorite(type, id)) {
        await del("/favorites", { favorable_type: type, favorable_id: id });
        setFavorites((prev) =>
          prev.filter(
            (f) => !(f.favorable_type === type && f.favorable_id === id),
          ),
        );
      } else {
        const newFav = await post("/favorites", {
          favorable_type: type,
          favorable_id: id,
        });
        setFavorites((prev) => [
          ...prev,
          { ...newFav, favorable_type: type, favorable_id: id },
        ]);
      }
    },
    [isFavorite],
  );

  return { favorites, loading, refresh: load, isFavorite, toggleFavorite };
}
