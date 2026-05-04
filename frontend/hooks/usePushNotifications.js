import * as Notifications from "expo-notifications";
import { useCallback, useEffect, useState } from "react";
import { Platform } from "react-native";
import { post } from "../services/post";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export function usePushNotifications() {
  const [expoPushToken, setExpoPushToken] = useState(null);
  const [notification, setNotification] = useState(null);

  const registerForPushNotifications = useCallback(async () => {
    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
      });
    }

    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== "granted") return;

    const tokenData = await Notifications.getExpoPushTokenAsync();
    const token = tokenData.data;
    setExpoPushToken(token);

    try {
      await post("/push-token", { token });
    } catch {
      // Silently fail — push token registration is not critical
    }
  }, []);

  useEffect(() => {
    registerForPushNotifications();

    const notifSubscription = Notifications.addNotificationReceivedListener(
      (notif) => setNotification(notif),
    );

    return () => notifSubscription.remove();
  }, [registerForPushNotifications]);

  return { expoPushToken, notification };
}
