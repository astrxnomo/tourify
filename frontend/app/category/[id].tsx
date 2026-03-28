import { DetailCard, DetailHero, DetailItem } from '@/components/detail';
import { colors, spacing } from '@/constants/colors';
import { getCategoryById, getPlacesByCategory } from '@/data/mock-data';
import { MaterialIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function CategoryDetailScreen() {
  const { id } = useLocalSearchParams();
  const categoryId = parseInt(id as string);
  const category = getCategoryById(categoryId);
  const places = getPlacesByCategory(categoryId);

  if (!category) {
    return (
      <View style={styles.container}>
        <Text>Categoría no encontrada</Text>
      </View>
    );
  }

  const imageUrl = places[0]?.images?.[0]?.url || 'https://images.unsplash.com/photo-1552076206-e73ce2330d4d?auto=format&fit=crop&q=80&w=800&h=600';

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <DetailHero imageUrl={imageUrl} />

      <DetailCard
        title={category.name}
        description={`${places.length} lugares encontrados`}
      >
        {category.description && <Text style={styles.description}>{category.description}</Text>}
      </DetailCard>

      <View style={styles.placesList}>
        {places.length === 0 ? (
          <View style={styles.emptyState}>
            <MaterialIcons name="search-off" size={60} color={colors.textTertiary} />
            <Text style={styles.emptyText}>No hay lugares en esta categoría</Text>
          </View>
        ) : (
          places.map((place) => (
            <DetailItem
              key={place.id}
              icon="place"
              title={place.name}
              subtitle={place.city?.name}
              rating={place.averageRating}
              reviews={place.reviews?.length}
              imageUrl={place.images?.[0]?.url}
              fallbackImageUrl="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800&h=600"
              onPress={() => router.push(`/place/${place.id}` as any)}
            />
          ))
        )}
      </View>
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
  description: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 20,
    marginTop: spacing.md,
  },
  placesList: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 16,
    color: colors.textTertiary,
    marginTop: spacing.lg,
  },
});
