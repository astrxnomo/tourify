import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNotifications } from "../../hooks/useNotifications";
import { colors, radius, shadowStyles, spacing } from "../constants/colors";
import { MediaListItem } from "../components/common/MediaListItem";

export default function NotificationsScreen() {
  const navigation = useNavigation();
  const { notifications, loading, markAsRead, markAllAsRead } =
    useNotifications();

  const unread = notifications.filter((n) => !n.is_read);
  const read = notifications.filter((n) => n.is_read);

  const formatDate = (dateString) => {
    const diffMs = Date.now() - new Date(dateString).getTime();
    const mins = Math.floor(diffMs / 60000);
    const hours = Math.floor(diffMs / 3600000);
    const days = Math.floor(diffMs / 86400000);
    if (mins < 60) return `Hace ${mins} min`;
    if (hours < 24) return `Hace ${hours} h`;
    if (days < 7) return `Hace ${days} d`;
    return new Date(dateString).toLocaleDateString("es-ES");
  };

  const handlePress = (notification) => {
    if (!notification.is_read) markAsRead(notification.id);
    const { notifiable_type, notifiable_id } = notification;
    if (notifiable_type === "event")
      navigation.navigate("EventDetail", { id: notifiable_id });
    else if (notifiable_type === "place")
      navigation.navigate("PlaceDetail", { id: notifiable_id });
    else if (notifiable_type === "city")
      navigation.navigate("CityDetail", { id: notifiable_id });
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {unread.length > 0 && (
        <View style={styles.header}>
          <Pressable onPress={markAllAsRead}>
            <Text style={styles.markAll}>Marcar todas como leídas</Text>
          </Pressable>
        </View>
      )}

      {notifications.length === 0 ? (
        <View style={styles.emptyState}>
          <MaterialIcons
            name="notifications-none"
            size={80}
            color={colors.textTertiary}
          />
          <Text style={styles.emptyText}>No tienes notificaciones</Text>
          <Text style={styles.emptySubtext}>
            Te notificaremos cuando haya algo nuevo
          </Text>
        </View>
      ) : (
        <>
          {unread.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Nuevas</Text>
              {unread.map((n) => (
                <MediaListItem
                  key={n.id}
                  title={n.title}
                  subtitle={n.message}
                  meta={formatDate(n.created_at)}
                  fallbackImageUrl="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800&h=600"
                  unread
                  rightAdornment={<View style={styles.unreadDot} />}
                  onPress={() => handlePress(n)}
                />
              ))}
            </View>
          )}

          {read.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Anteriores</Text>
              {read.map((n) => (
                <MediaListItem
                  key={n.id}
                  title={n.title}
                  subtitle={n.message}
                  meta={formatDate(n.created_at)}
                  fallbackImageUrl="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800&h=600"
                  onPress={() => handlePress(n)}
                />
              ))}
            </View>
          )}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  contentContainer: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing["3xl"],
    gap: spacing.lg,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  header: { alignItems: "flex-end" },
  markAll: { fontSize: 14, color: colors.primary, fontWeight: "600" },
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing["3xl"],
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    ...shadowStyles.md,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.textPrimary,
    marginTop: spacing.md,
  },
  emptySubtext: {
    fontSize: 14,
    color: colors.textTertiary,
    marginTop: spacing.sm,
  },
  section: { gap: spacing.sm },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  unreadDot: {
    width: 10,
    height: 10,
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginLeft: spacing.sm,
    marginTop: spacing.xs,
  },
});
