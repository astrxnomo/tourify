import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
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
import { AuthInput } from "../components/auth/AuthInput";
import { Button } from "../components/common/Button";
import { useForgotPassword } from "../../hooks/useForgotPassword";

export default function ForgotPasswordScreen() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { email, setEmail, loading, sent, handleSubmit } = useForgotPassword();

  if (sent) {
    return (
      <View
        style={[styles.container, styles.center, { paddingTop: insets.top }]}
      >
        <MaterialIcons
          name="mark-email-read"
          size={72}
          color={colors.primary}
        />
        <Text style={styles.title}>¡Correo enviado!</Text>
        <Text style={styles.subtitle}>
          Revisa tu bandeja de entrada y sigue las instrucciones para
          restablecer tu contraseña.
        </Text>
        <Button
          onPress={() => navigation.navigate("Login")}
          style={styles.button}
        >
          Volver al inicio de sesión
        </Button>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={[styles.container, { paddingTop: insets.top }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons
            name="arrow-back"
            size={24}
            color={colors.textPrimary}
          />
        </Pressable>

        <View style={styles.header}>
          <MaterialIcons name="lock-reset" size={72} color={colors.primary} />
          <Text style={styles.title}>¿Olvidaste tu contraseña?</Text>
          <Text style={styles.subtitle}>
            Ingresa tu correo y te enviaremos instrucciones para restablecerla.
          </Text>
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
          <Button
            onPress={() => handleSubmit()}
            style={styles.button}
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar instrucciones"}
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  center: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.lg,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },
  backButton: { marginBottom: spacing.xl },
  header: { alignItems: "center", marginBottom: spacing.xl * 1.5 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 22,
  },
  form: { flex: 1 },
  button: { marginTop: spacing.lg },
});
