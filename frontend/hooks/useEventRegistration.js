import { useCallback, useEffect, useState } from "react";
import { Alert, Platform } from "react-native";
import { del, post } from "../services/post";

function confirm(title, message) {
  if (Platform.OS === "web") {
    return Promise.resolve(window.confirm(`${title}\n\n${message}`));
  }
  return new Promise((resolve) => {
    Alert.alert(title, message, [
      { text: "No", style: "cancel", onPress: () => resolve(false) },
      { text: "Sí, cancelar", style: "destructive", onPress: () => resolve(true) },
    ]);
  });
}

export function useEventRegistration({ eventId, initialRegistered = false, onChange }) {
  const [registered, setRegistered] = useState(initialRegistered);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setRegistered(initialRegistered);
  }, [initialRegistered]);

  const register = useCallback(async () => {
    setLoading(true);
    try {
      await post(`/events/${eventId}/register`);
      setRegistered(true);
      onChange?.(true);
    } catch (err) {
      Alert.alert("Error", err.message || "No se pudo registrar al evento.");
    } finally {
      setLoading(false);
    }
  }, [eventId, onChange]);

  const unregister = useCallback(async () => {
    setLoading(true);
    try {
      await del(`/events/${eventId}/register`);
      setRegistered(false);
      onChange?.(false);
    } catch (err) {
      Alert.alert("Error", err.message || "No se pudo cancelar el registro.");
    } finally {
      setLoading(false);
    }
  }, [eventId, onChange]);

  const confirmUnregister = useCallback(async () => {
    const ok = await confirm(
      "Cancelar inscripción",
      "¿Seguro que quieres cancelar tu inscripción a este evento?",
    );
    if (ok) {
      await unregister();
    }
  }, [unregister]);

  return { registered, loading, register, unregister, confirmUnregister };
}
