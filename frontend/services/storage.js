import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

const isWeb = Platform.OS === "web";

export const storage = {
  getItem: (key) =>
    isWeb
      ? Promise.resolve(localStorage.getItem(key))
      : SecureStore.getItemAsync(key),

  setItem: (key, value) =>
    isWeb
      ? Promise.resolve(localStorage.setItem(key, value))
      : SecureStore.setItemAsync(key, value),

  deleteItem: (key) =>
    isWeb
      ? Promise.resolve(localStorage.removeItem(key))
      : SecureStore.deleteItemAsync(key),
};
