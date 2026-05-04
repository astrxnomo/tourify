import { useCallback, useState } from "react";
import { Alert } from "react-native";
import { post } from "../services/post";
import { storage } from "../services/storage";

export function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = useCallback(
    async (onSuccess) => {
      if (!email.trim() || !password.trim()) {
        Alert.alert("Error", "Por favor completa todos los campos.");
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const data = await post("/auth/login", { email, password });
        await storage.setItem("auth_token", data.token);
        onSuccess?.(data);
      } catch (err) {
        setError(err.message);
        Alert.alert("Error", err.message || "No se pudo iniciar sesión.");
      } finally {
        setLoading(false);
      }
    },
    [email, password],
  );

  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    handleLogin,
  };
}
