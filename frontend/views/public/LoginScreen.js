import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors, spacing } from "../constants/colors";
import { AuthDivider } from "../components/auth/AuthDivider";
import { AuthInput } from "../components/auth/AuthInput";
import { SocialAuthButton } from "../components/auth/SocialAuthButton";
import { Button } from "../components/common/Button";
import { useLogin } from "../../hooks/useLogin";
import { useAuth } from "../../context/AuthContext";

export default function LoginScreen() {
  const navigation = useNavigation();
  const { login } = useAuth();
  const { email, setEmail, password, setPassword, handleLogin } = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  const insets = useSafeAreaInsets();

  const onLogin = () => {
    handleLogin((data) => login(data.token));
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { paddingTop: insets.top }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <MaterialIcons
            name="travel-explore"
            size={80}
            color={colors.primary}
          />
          <Text style={styles.title}>Bienvenido a Tourify</Text>
          <Text style={styles.subtitle}>Inicia sesión para continuar</Text>
        </View>

        <View style={styles.form}>
          <AuthInput
            icon="email"
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoComplete="email"
          />

          <AuthInput
            icon="lock"
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoComplete="password"
            toggleVisibility={true}
            onToggleVisibility={() => setShowPassword(!showPassword)}
          />

          <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
            <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
          </Pressable>

          <Button onPress={onLogin} style={styles.loginButton}>
            Iniciar Sesión
          </Button>

          <AuthDivider text="O" />

          <SocialAuthButton
            icon="g-translate"
            iconColor="#DB4437"
            label="Continuar con Google"
          />
          <SocialAuthButton
            icon="facebook"
            iconColor="#1877F2"
            label="Continuar con Facebook"
          />

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>¿No tienes una cuenta? </Text>
            <Pressable onPress={() => navigation.navigate("Register")}>
              <Text style={styles.signupLink}>Regístrate</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xl,
  },
  header: { alignItems: "center", marginBottom: spacing.xl * 1.5 },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  subtitle: { fontSize: 16, color: colors.textSecondary },
  form: { flex: 1 },
  forgotPassword: {
    textAlign: "right",
    color: colors.primary,
    fontSize: 14,
    fontWeight: "600",
    marginBottom: spacing.xl,
  },
  loginButton: { marginBottom: spacing.lg },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: spacing.lg,
  },
  signupText: { fontSize: 14, color: colors.textSecondary },
  signupLink: { fontSize: 14, color: colors.primary, fontWeight: "600" },
});
