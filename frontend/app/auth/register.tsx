import { AuthCheckbox, AuthDivider, AuthInput, SocialAuthButton } from '@/components/auth';
import { Button } from '@/components/common';
import { colors, spacing } from '@/constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleRegister = () => {
    // TODO: Implement register logic with Laravel API
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    if (!agreedToTerms) {
      alert('Debes aceptar los términos y condiciones');
      return;
    }
    console.log('Register:', { name, email, password });
    router.replace('/' as any);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <MaterialIcons name="travel-explore" size={80} color={colors.primary} />
          <Text style={styles.title}>Crear Cuenta</Text>
          <Text style={styles.subtitle}>Únete a Tourify hoy</Text>
        </View>

        {/* Form */}
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
            onToggleVisibility={() => setShowConfirmPassword(!showConfirmPassword)}
          />

          <AuthCheckbox
            checked={agreedToTerms}
            onToggle={() => setAgreedToTerms(!agreedToTerms)}
            label="Acepto los términos y privacidad"
            links={[
              { text: 'Términos', onPress: () => {} },
              { text: 'Privacidad', onPress: () => {} },
            ]}
          />

          <Button
            onPress={handleRegister}
            style={styles.registerButton}
          >
            Crear Cuenta
          </Button>

          <AuthDivider text="O" />

          <SocialAuthButton icon="g-translate" iconColor="#DB4437" label="Continuar con Google" />

          <SocialAuthButton icon="facebook" iconColor="#1877F2" label="Continuar con Facebook" />

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>¿Ya tienes una cuenta? </Text>
            <Pressable onPress={() => router.back()}>
              <Text style={styles.loginLink}>Inicia Sesión</Text>
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
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
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
  registerButton: {
    marginBottom: spacing.lg,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.lg,
  },
  loginText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  loginLink: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
  },
});