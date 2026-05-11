import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors, radius, shadowStyles, spacing } from "../../constants/colors";
import { resolveImageUrl } from "../../../utils/image";

const PLACE_FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400&h=300";

export function PlaceCard({ place, width, onPress }) {
  const imageUrl =
    resolveImageUrl(place.images?.[0]?.url) ?? PLACE_FALLBACK_IMAGE;
  const rating = place.average_rating ?? place.averageRating;
  const ratingText = rating != null ? Number(rating).toFixed(1) : null;

  return (
    <Pressable
      style={[styles.card, { width }]}
      onPress={onPress}
      android_ripple={{ color: colors.primaryLight, radius: 100 }}
    >
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: imageUrl }}
          contentFit="cover"
          style={styles.image}
        />
        {ratingText && (
          <View style={styles.ratingBadge}>
            <MaterialIcons name="star" size={12} color="#f4b400" />
            <Text style={styles.ratingText}>{ratingText}</Text>
          </View>
        )}
        {place.category?.name && (
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText} numberOfLines={1}>
              {place.category.name}
            </Text>
          </View>
        )}
      </View>
      <View style={styles.body}>
        <Text numberOfLines={1} style={styles.title}>
          {place.name}
        </Text>
        <View style={styles.row}>
          <MaterialIcons
            name="location-on"
            size={13}
            color={colors.textTertiary}
          />
          <Text numberOfLines={1} style={styles.meta}>
            {place.city?.name ?? place.address}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.lg,
    overflow: "hidden",
    backgroundColor: colors.surface,
    ...shadowStyles.lg,
  },
  imageWrapper: { position: "relative" },
  image: { width: "100%", height: 160 },
  ratingBadge: {
    position: "absolute",
    top: spacing.sm,
    right: spacing.sm,
    backgroundColor: "rgba(8, 53, 61, 0.85)",
    borderRadius: radius.full,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: { color: colors.textLight, fontSize: 12, fontWeight: "700" },
  categoryBadge: {
    position: "absolute",
    bottom: spacing.sm,
    left: spacing.sm,
    backgroundColor: colors.primary,
    borderRadius: radius.full,
    paddingHorizontal: spacing.md,
    paddingVertical: 4,
    maxWidth: "75%",
  },
  categoryText: { color: colors.textLight, fontSize: 11, fontWeight: "700" },
  body: { padding: spacing.md, gap: spacing.xs },
  title: { fontSize: 16, fontWeight: "700", color: colors.textPrimary },
  row: { flexDirection: "row", alignItems: "center", gap: spacing.xs },
  meta: { fontSize: 12, color: colors.textTertiary, flex: 1 },
});
