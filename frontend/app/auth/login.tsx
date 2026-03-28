import { AuthDivider, AuthInput, SocialAuthButton } from '@/components/auth';
import { Button } from '@/components/common';
import { colors, spacing } from '@/constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // TODO: Implement login logic with Laravel API
    console.log('Login:', { email, password });
    router.replace('/' as any);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <MaterialIcons name="travel-explore" size={80} color={colors.primary} />
          <Text style={styles.title}>Bienvenido a Tourify</Text>
          <Text style={styles.subtitle}>Inicia sesión para continuar</Text>
        </View>

        {/* Form */}
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

          <Pressable>
            <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
          </Pressable>

        <Button
            onPress={handleLogin}
            style={styles.loginButton}
          >
            Iniciar Sesión
          </Button>
          <AuthDivider text="O" />

          <SocialAuthButton icon="g-translate" iconColor="#DB4437" label="Continuar con Google" />

          <SocialAuthButton icon="facebook" iconColor="#1877F2" label="Continuar con Facebook" />

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>¿No tienes una cuenta? </Text>
            <Pressable onPress={() => router.push('/auth/register' as any)}>
              <Text style={styles.signupLink}>Regístrate</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xl,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.xl * 1.5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  form: {
    flex: 1,
  },
  forgotPassword: {
    textAlign: 'right',
    color: colors.primary,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: spacing.xl,
  },
  loginButton: {
    marginBottom: spacing.lg,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.lg,
  },
  signupText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  signupLink: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
  },
});