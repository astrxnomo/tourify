import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors, radius, shadowStyles, spacing } from "../../constants/colors";
import { resolveImageUrl } from "../../../utils/image";

const EVENT_FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?auto=format&fit=crop&q=80&w=800&h=600";

export function EventCard({ event, onPress, fullWidth = false }) {
  const imageUrl =
    resolveImageUrl(event.images?.[0]?.url) ?? EVENT_FALLBACK_IMAGE;
  const date = event.date ? new Date(event.date) : null;
  const isUpcoming = date && date > new Date();

  return (
    <Pressable
      style={[styles.card, fullWidth && styles.cardFull]}
      onPress={onPress}
      android_ripple={{ color: colors.primaryLight }}
    >
      <Image
        source={{ uri: imageUrl }}
        contentFit="cover"
        style={styles.image}
      />
      {isUpcoming ? (
        <View style={styles.badge}>
          <MaterialIcons name="schedule" size={12} color={colors.textLight} />
          <Text style={styles.badgeText}>Próximo</Text>
        </View>
      ) : (
        date && (
          <View style={[styles.badge, styles.badgePast]}>
            <Text style={styles.badgeText}>Finalizado</Text>
          </View>
        )
      )}
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {event.title}
        </Text>
        {date && (
          <View style={styles.row}>
            <MaterialIcons
              name="calendar-today"
              size={14}
              color={colors.primary}
            />
            <Text style={styles.meta}>
              {date.toLocaleDateString("es-ES", {
                day: "numeric",
                month: "short",
              })}
              {" · "}
              {date.toLocaleTimeString("es-ES", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
          </View>
        )}
        {event.city?.name && (
          <View style={styles.row}>
            <MaterialIcons
              name="location-city"
              size={14}
              color={colors.textTertiary}
            />
            <Text style={styles.meta} numberOfLines={1}>
              {event.city.name}
            </Text>
          </View>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 260,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    overflow: "hidden",
    ...shadowStyles.lg,
  },
  cardFull: { width: "100%" },
  image: { width: "100%", height: 140 },
  badge: {
    position: "absolute",
    top: spacing.md,
    right: spacing.md,
    backgroundColor: colors.success,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: radius.full,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  badgePast: { backgroundColor: colors.textTertiary },
  badgeText: { color: colors.textLight, fontSize: 11, fontWeight: "700" },
  info: { padding: spacing.lg, gap: spacing.xs },
  title: { fontSize: 16, fontWeight: "700", color: colors.textPrimary },
  row: { flexDirection: "row", alignItems: "center", gap: spacing.xs },
  meta: { fontSize: 13, color: colors.textTertiary },
});
