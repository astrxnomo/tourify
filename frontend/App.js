import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Router from "./Router";

export default function App() {
  return (
    <SafeAreaProvider>
      <Router />
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}
