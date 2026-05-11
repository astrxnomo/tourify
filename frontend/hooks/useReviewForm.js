import { useCallback, useState } from "react";
import { Alert } from "react-native";
import { post } from "../services/post";

export function useReviewForm({ type, id, onSuccess }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submit = useCallback(async () => {
    if (rating < 1) {
      Alert.alert("Califica primero", "Selecciona de 1 a 5 estrellas.");
      return;
    }
    setSubmitting(true);
    try {
      const endpoint =
        type === "place" ? `/places/${id}/reviews` : `/events/${id}/reviews`;
      await post(endpoint, { rating, comment: comment.trim() || null });
      setRating(0);
      setComment("");
      onSuccess?.();
    } catch (err) {
      Alert.alert("Error", err.message || "No se pudo enviar la reseña.");
    } finally {
      setSubmitting(false);
    }
  }, [type, id, rating, comment, onSuccess]);

  return {
    rating,
    setRating,
    comment,
    setComment,
    submitting,
    submit,
  };
}
