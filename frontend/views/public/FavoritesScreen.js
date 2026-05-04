import { MaterialIcons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFavorites } from "../../hooks/useFavorites";
import { colors, radius, shadowStyles, spacing } from "../constants/colors";
import { MediaListItem } from "../components/common/MediaListItem";

export default function FavoritesScreen() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { favorites, loading, refresh } = useFavorites();

  useFocusEffect(
    useCallback(() => {
      refresh();
    }, [refresh]),
  );

  const favPlaces = favorites.filter((f) => f.favorable_type === "place");
  const favEvents = favorites.filter((f) => f.favorable_type === "event");
  const favCities = favorites.filter((f) => f.favorable_type === "city");

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
      contentContainerStyle={[
        styles.contentContainer,
        { paddingTop: insets.top },
      ]}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Favoritos</Text>
        <Text style={styles.subtitle}>Tus lugares y eventos guardados</Text>
      </View>

      {favorites.length === 0 && (
        <View style={styles.emptyState}>
          <MaterialIcons
            name="favorite-border"
            size={80}
            color={colors.textTertiary}
          />
          <Text style={styles.emptyText}>No tienes favoritos aún</Text>
          <Text style={styles.emptySubtext}>
            Explora y guarda tus lugares favoritos
          </Text>
        </View>
      )}

      {favPlaces.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Lugares</Text>
          {favPlaces.map((fav) => {
            const place = fav.favorable;
            return (
              <MediaListItem
                key={fav.id}
                title={place?.name}
                subtitle={place?.address}
                meta={
                  place?.average_rating
                    ? `⭐ ${Number(place.average_rating).toFixed(1)}`
                    : undefined
                }
                imageUrl={place?.images?.[0]?.url}
                fallbackImageUrl="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800&h=600"
                onPress={() =>
                  navigation.navigate("PlaceDetail", { id: fav.favorable_id })
                }
              />
            );
          })}
        </View>
      )}

      {favEvents.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Eventos</Text>
          {favEvents.map((fav) => {
            const event = fav.favorable;
            return (
              <MediaListItem
                key={fav.id}
                title={event?.title}
                subtitle={event?.place?.name ?? event?.city?.name}
                meta={
                  event?.date
                    ? new Date(event.date).toLocaleDateString("es-ES")
                    : undefined
                }
                imageUrl={event?.images?.[0]?.url}
                fallbackImageUrl="https://images.unsplash.com/photo-1511379938547-c1f69b13d835?auto=format&fit=crop&q=80&w=800&h=600"
                onPress={() =>
                  navigation.navigate("EventDetail", { id: fav.favorable_id })
                }
              />
            );
          })}
        </View>
      )}

      {favCities.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ciudades</Text>
          {favCities.map((fav) => {
            const city = fav.favorable;
            return (
              <MediaListItem
                key={fav.id}
                title={city?.name}
                subtitle={city?.country}
                imageUrl={city?.images?.[0]?.url}
                fallbackImageUrl="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800&h=600"
                onPress={() =>
                  navigation.navigate("CityDetail", { id: fav.favorable_id })
                }
              />
            );
          })}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  contentContainer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing["3xl"],
    gap: spacing.xl,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  header: { paddingTop: spacing.md },
  title: { fontSize: 36, fontWeight: "700", color: colors.textPrimary },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
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
    fontSize: 22,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
});
