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
import { colors, spacing } from "../constants/colors";
import { AuthCheckbox } from "../components/auth/AuthCheckbox";
import { AuthDivider } from "../components/auth/AuthDivider";
import { AuthInput } from "../components/auth/AuthInput";
import { SocialAuthButton } from "../components/auth/SocialAuthButton";
import { Button } from "../components/common/Button";
import { useRegister } from "../../hooks/useRegister";
import { useAuth } from "../../context/AuthContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function RegisterScreen() {
  const navigation = useNavigation();
  const { login } = useAuth();
  const insets = useSafeAreaInsets();
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    handleRegister,
  } = useRegister();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const onRegister = () => {
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    if (!agreedToTerms) {
      alert("Debes aceptar los términos y condiciones");
      return;
    }
    handleRegister((data) => login(data.token));
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { paddingTop: insets.top }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <MaterialIcons
            name="travel-explore"
            size={80}
            color={colors.primary}
          />
          <Text style={styles.title}>Crear Cuenta</Text>
          <Text style={styles.subtitle}>Únete a Tourify hoy</Text>
        </View>

        <View style={styles.form}>
          <AuthInput
            icon="person"
            placeholder="Nombre completo"
            value={name}
            onChangeText={setName}
            autoComplete="name"
            autoCapitalize="words"
          />
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
            autoComplete="password-new"
            toggleVisibility={true}
            onToggleVisibility={() => setShowPassword(!showPassword)}
          />
          <AuthInput
            icon="lock"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
            autoComplete="password-new"
            toggleVisibility={true}
            onToggleVisibility={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
          />

          <AuthCheckbox
            checked={agreedToTerms}
            onToggle={() => setAgreedToTerms(!agreedToTerms)}
            label="Acepto los términos y privacidad"
            links={[
              { text: "Términos", onPress: () => {} },
              { text: "Privacidad", onPress: () => {} },
            ]}
          />

          <Button onPress={onRegister} style={styles.registerButton}>
            Crear Cuenta
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

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>¿Ya tienes una cuenta? </Text>
            <Pressable onPress={() => navigation.goBack()}>
              <Text style={styles.loginLink}>Inicia Sesión</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
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
  registerButton: { marginBottom: spacing.lg },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: spacing.lg,
  },
  loginText: { fontSize: 14, color: colors.textSecondary },
  loginLink: { fontSize: 14, color: colors.primary, fontWeight: "600" },
});
