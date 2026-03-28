import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export const unstable_settings = {
  initialRouteName: '(tabs)/home',
};

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="city/[id]"
          options={{
            headerShown: true,
            title: 'Ciudad',
            headerBackTitle: 'Atrás',
          }}
        />
        <Stack.Screen
          name="place/[id]"
          options={{
            headerShown: true,
            title: 'Lugar',
            headerBackTitle: 'Atrás',
          }}
        />
        <Stack.Screen
          name="event/[id]"
          options={{
            headerShown: true,
            title: 'Evento',
            headerBackTitle: 'Atrás',
          }}
        />
        <Stack.Screen
          name="category/[id]"
          options={{
            headerShown: true,
            title: 'Categoría',
            headerBackTitle: 'Atrás',
          }}
        />
        <Stack.Screen
          name="notifications"
          options={{
            headerShown: true,
            title: 'Notificaciones',
            headerBackTitle: 'Atrás',
          }}
        />
        <Stack.Screen
          name="auth/login"
          options={{
            headerShown: true,
            title: 'Iniciar Sesión',
            headerBackTitle: 'Atrás',
          }}
        />
        <Stack.Screen
          name="auth/register"
          options={{
            headerShown: true,
            title: 'Registrarse',
            headerBackTitle: 'Atrás',
          }}
        />
      </Stack>
      <StatusBar style="dark" />
    </>
  );
}
