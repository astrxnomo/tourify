import { useCallback, useState } from "react";
import { Alert } from "react-native";
import { post } from "../services/post";

export function useForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = useCallback(
    async (onSuccess) => {
      if (!email.trim()) {
        Alert.alert("Error", "Por favor ingresa tu correo electrónico.");
        return;
      }
      setLoading(true);
      try {
        await post("/auth/forgot-password", { email });
        setSent(true);
        onSuccess?.();
      } catch (err) {
        Alert.alert(
          "Error",
          err.message || "No se pudo procesar la solicitud.",
        );
      } finally {
        setLoading(false);
      }
    },
    [email],
  );

  return { email, setEmail, loading, sent, handleSubmit };
}
