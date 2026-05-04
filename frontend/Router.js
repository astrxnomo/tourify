import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { colors } from "./views/constants/colors";
import { AuthContext } from "./context/AuthContext";
import { storage } from "./services/storage";
import { get } from "./services/post";
import { usePushNotifications } from "./hooks/usePushNotifications";

import LoginScreen from "./views/public/LoginScreen";
import RegisterScreen from "./views/public/RegisterScreen";
import ForgotPasswordScreen from "./views/public/ForgotPasswordScreen";
import HomeScreen from "./views/public/HomeScreen";
import ExploreScreen from "./views/public/ExploreScreen";
import FavoritesScreen from "./views/public/FavoritesScreen";
import ProfileScreen from "./views/public/ProfileScreen";
import CityDetailScreen from "./views/public/CityDetailScreen";
import PlaceDetailScreen from "./views/public/PlaceDetailScreen";
import EventDetailScreen from "./views/public/EventDetailScreen";
import CategoryDetailScreen from "./views/public/CategoryDetailScreen";
import NotificationsScreen from "./views/public/NotificationsScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textTertiary,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopWidth: 1,
          borderTopColor: colors.surfaceLight,
          height: 90,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: "600" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          title: "Explorar",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="explore" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Router() {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  usePushNotifications();

  useEffect(() => {
    const validateToken = async () => {
      const stored = await storage.getItem("auth_token");
      if (!stored) {
        setLoading(false);
        return;
      }
      try {
        await get("/auth/me");
        setToken(stored);
      } catch {
        // Token inválido o expirado — forzar re-login
        await storage.deleteItem("auth_token");
      } finally {
        setLoading(false);
      }
    };
    validateToken();
  }, []);

  const login = (tokenValue) => setToken(tokenValue);

  const logout = async () => {
    await storage.deleteItem("auth_token");
    setToken(null);
  };

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.background,
        }}
      >
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={{ login, logout }}>
      <NavigationContainer>
        <Stack.Navigator>
          {token ? (
            <>
              <Stack.Screen
                name="Main"
                component={MainTabs}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CityDetail"
                component={CityDetailScreen}
                options={{ title: "Ciudad", headerBackTitle: "Atrás" }}
              />
              <Stack.Screen
                name="PlaceDetail"
                component={PlaceDetailScreen}
                options={{ title: "Lugar", headerBackTitle: "Atrás" }}
              />
              <Stack.Screen
                name="EventDetail"
                component={EventDetailScreen}
                options={{ title: "Evento", headerBackTitle: "Atrás" }}
              />
              <Stack.Screen
                name="CategoryDetail"
                component={CategoryDetailScreen}
                options={{ title: "Categoría", headerBackTitle: "Atrás" }}
              />
              <Stack.Screen
                name="Notifications"
                component={NotificationsScreen}
                options={{ title: "Notificaciones", headerBackTitle: "Atrás" }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{ title: "Crear cuenta", headerBackTitle: "Atrás" }}
              />
              <Stack.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
                options={{
                  title: "Recuperar Contraseña",
                  headerBackTitle: "Atrás",
                }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
