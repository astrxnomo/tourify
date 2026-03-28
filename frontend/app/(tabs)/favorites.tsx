import { MediaListItem } from '@/components/common';
import { colors, radius, shadowStyles, spacing } from '@/constants/colors';
import { getCityById, getEventById, getPlaceById, getUserFavorites } from '@/data/mock-data';
import { MaterialIcons } from '@expo/vector-icons';
import { router, type Href } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const CURRENT_USER_ID = 1;

export default function FavoritesScreen() {
  const favorites = getUserFavorites(CURRENT_USER_ID);

  const favoritePlaces = favorites
    .filter((fav) => fav.favorable_type === 'place')
    .map((fav) => getPlaceById(fav.favorable_id))
    .filter((place): place is NonNullable<typeof place> => Boolean(place));

  const favoriteEvents = favorites
    .filter((fav) => fav.favorable_type === 'event')
    .map((fav) => getEventById(fav.favorable_id))
    .filter((event): event is NonNullable<typeof event> => Boolean(event));

  const favoriteCities = favorites
    .filter((fav) => fav.favorable_type === 'city')
    .map((fav) => getCityById(fav.favorable_id))
    .filter((city): city is NonNullable<typeof city> => Boolean(city));

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Favoritos</Text>
        <Text style={styles.subtitle}>Tus lugares y eventos guardados</Text>
      </View>

      {favorites.length === 0 && (
        <View style={styles.emptyState}>
          <MaterialIcons name="favorite-border" size={80} color={colors.textTertiary} />
          <Text style={styles.emptyText}>No tienes favoritos aún</Text>
          <Text style={styles.emptySubtext}>Explora y guarda tus lugares favoritos</Text>
        </View>
      )}

      {favoritePlaces.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Lugares</Text>
          {favoritePlaces.map((place) => (
            <MediaListItem
              key={place.id}
              title={place.name}
              subtitle={place.address}
              meta={place.averageRating ? `⭐ ${place.averageRating.toFixed(1)}` : undefined}
              imageUrl={place.images?.[0]?.url}
              fallbackImageUrl="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800&h=600"
              onPress={() =>
                router.push({ pathname: '/place/[id]', params: { id: String(place.id) } } as Href)
              }
            />
          ))}
        </View>
      )}

      {favoriteEvents.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Eventos</Text>
          {favoriteEvents.map((event) => (
            <MediaListItem
              key={event.id}
              title={event.title}
              subtitle={event.place?.name ?? event.city?.name}
              meta={new Date(event.date).toLocaleDateString('es-ES')}
              imageUrl={event.images?.[0]?.url}
              fallbackImageUrl="https://images.unsplash.com/photo-1511379938547-c1f69b13d835?auto=format&fit=crop&q=80&w=800&h=600"
              onPress={() =>
                router.push({ pathname: '/event/[id]', params: { id: String(event.id) } } as Href)
              }
            />
          ))}
        </View>
      )}

      {favoriteCities.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ciudades</Text>
          {favoriteCities.map((city) => (
            <MediaListItem
              key={city.id}
              title={city.name}
              subtitle={city.country}
              imageUrl={city.images?.[0]?.url}
              fallbackImageUrl="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800&h=600"
              onPress={() =>
                router.push({ pathname: '/city/[id]', params: { id: String(city.id) } } as Href)
              }
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing['3xl'],
    gap: spacing.xl,
  },
  header: {
    paddingTop: spacing.xl,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing['3xl'],
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    ...shadowStyles.md,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.textPrimary,
    marginTop: spacing.md,
  },
  emptySubtext: {
    fontSize: 14,
    color: colors.textTertiary,
    marginTop: spacing.sm,
  },
  section: {
    gap: spacing.sm,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
});
