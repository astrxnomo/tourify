import { useState } from "react";
import { post } from "../services/post";
import { storage } from "../services/storage";

export function useRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async (onSuccess) => {
    setLoading(true);
    setError(null);
    try {
      const data = await post("/auth/register", {
        name,
        email,
        password,
        password_confirmation: password,
      });
      await storage.setItem("auth_token", data.token);
      onSuccess?.(data);
    } catch (err) {
      setError(err.message);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    handleRegister,
  };
}
