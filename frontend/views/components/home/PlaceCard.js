import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { resolveImageUrl } from "../../../utils/image";
import { colors, radius, shadowStyles, spacing } from "../../constants/colors";

const FALLBACK = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400&h=300";

export function PlaceCard({ place, width, onPress }) {
  return (
    <Pressable
      style={[styles.card, { width }]}
      onPress={onPress}
      android_ripple={{ color: colors.primaryLight, radius: 100 }}
    >
      <Image
        source={{
          uri: resolveImageUrl(place.images?.[0]?.url) ?? FALLBACK,
        }}
        contentFit="cover"
        style={styles.image}
      />
      <View style={styles.body}>
        <Text numberOfLines={1} style={styles.title}>
          {place.name}
        </Text>
        <Text numberOfLines={2} style={styles.meta}>
          ⭐{" "}
          {(place.average_rating ?? place.averageRating)?.toFixed(1) ?? "N/D"} ·{" "}
          {place.address}
        </Text>
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
  image: { width: "100%", height: 160 },
  body: { padding: spacing.md, gap: spacing.sm },
  title: { fontSize: 16, fontWeight: "700", color: colors.textPrimary },
  meta: { fontSize: 12, color: colors.textTertiary, lineHeight: 16 },
});
