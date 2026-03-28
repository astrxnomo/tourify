import { DetailCard, DetailHero, ReviewCard } from '@/components/detail';
import { colors, spacing } from '@/constants/colors';
import { getPlaceById } from '@/data/mock-data';
import { MaterialIcons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function PlaceDetailScreen() {
  const { id } = useLocalSearchParams();
  const placeId = parseInt(id as string);
  const place = getPlaceById(placeId);

  if (!place) {
    return (
      <View style={styles.container}>
        <Text>Lugar no encontrado</Text>
      </View>
    );
  }

  const openMaps = () => {
    if (place.latitude && place.longitude) {
      const url = `https://www.google.com/maps/search/?api=1&query=${place.latitude},${place.longitude}`;
      Linking.openURL(url);
    }
  };

  const imageUrl = place.images?.[0]?.url || 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800&h=600';

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <DetailHero imageUrl={imageUrl} />

      <DetailCard title={place.name}>
        <View style={styles.header}>
          <View style={styles.category}>
            <Text style={styles.categoryText}>{place.category?.name}</Text>
          </View>
          <Pressable style={styles.favoriteButton}>
            <MaterialIcons name="favorite-border" size={28} color={colors.error} />
          </Pressable>
        </View>

        {place.averageRating && (
          <View style={styles.ratingRow}>
            <MaterialIcons name="star" size={20} color={colors.warning} />
            <Text style={styles.ratingText}>{place.averageRating.toFixed(1)}</Text>
            <Text style={styles.reviewCount}>({place.reviews?.length || 0} reseñas)</Text>
          </View>
        )}

        <View style={styles.infoRow}>
          <MaterialIcons name="location-on" size={16} color={colors.primary} />
          <Text style={styles.infoText}>{place.address}</Text>
        </View>

        <View style={styles.infoRow}>
          <MaterialIcons name="location-city" size={16} color={colors.primary} />
          <Text style={styles.infoText}>{place.city?.name}</Text>
        </View>

        <Text style={styles.description}>{place.description}</Text>
      </DetailCard>

      <View style={styles.actionButtons}>
        {place.latitude && place.longitude && (
          <Pressable style={({ pressed }) => [styles.actionButton, pressed && styles.actionButtonPressed]} onPress={openMaps}>
            <MaterialIcons name="directions" size={24} color={colors.primary} />
            <Text style={styles.actionButtonText}>Direcciones</Text>
          </Pressable>
        )}
        <Pressable style={({ pressed }) => [styles.actionButton, pressed && styles.actionButtonPressed]}>
          <MaterialIcons name="share" size={24} color={colors.primary} />
          <Text style={styles.actionButtonText}>Compartir</Text>
        </Pressable>
      </View>

      {place.reviews && place.reviews.length > 0 && (
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Reseñas ({place.reviews.length})</Text>
            <Pressable>
              <Text style={styles.seeAllText}>Ver todas</Text>
            </Pressable>
          </View>

          {place.reviews.slice(0, 3).map((review) => (
            <ReviewCard
              key={review.id}
              rating={review.rating}
              comment={review.comment}
            />
          ))}

          <Pressable style={({ pressed }) => [styles.addReviewButton, pressed && styles.addReviewButtonPressed]}>
            <MaterialIcons name="rate-review" size={24} color={colors.primary} />
            <Text style={styles.addReviewText}>Escribir una reseña</Text>
          </Pressable>
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
    paddingBottom: spacing.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  category: {
    backgroundColor: `${colors.primary}15`,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 16,
  },
  categoryText: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '600',
  },
  favoriteButton: {
    padding: spacing.sm,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
    marginTop: spacing.md,
  },
  ratingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginLeft: spacing.xs,
  },
  reviewCount: {
    fontSize: 14,
    color: colors.textSecondary,
    marginLeft: spacing.sm,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  infoText: {
    fontSize: 15,
    color: colors.textSecondary,
    marginLeft: spacing.sm,
    flex: 1,
  },
  description: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
    marginTop: spacing.md,
  },
  actionButtons: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    gap: spacing.md,
    marginVertical: spacing.md,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    borderRadius: 12,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
  },
  actionButtonPressed: {
    opacity: 0.7,
  },
  actionButtonText: {
    fontSize: 15,
    color: colors.primary,
    fontWeight: '600',
    marginLeft: spacing.sm,
  },
  section: {
    marginTop: spacing.xl,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  seeAllText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
  },
  addReviewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    borderRadius: 12,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
    marginTop: spacing.md,
  },
  addReviewButtonPressed: {
    opacity: 0.7,
  },
  addReviewText: {
    fontSize: 15,
    color: colors.primary,
    fontWeight: '600',
    marginLeft: spacing.sm,
  },
});
