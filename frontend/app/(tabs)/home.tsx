import { CategoryList, FilterChips, HomeHeader, PlaceCard, PromoCard, SearchBar, SectionHeader } from '@/components/home';
import { Filter } from '@/components/home/filter-chips';
import { colors, spacing } from '@/constants/colors';
import { categories, places } from '@/data/mock-data';
import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';


const baseFilters: Filter[] = [
  { id: 'all', label: 'Todo' },
  { id: 'Restaurantes', label: 'Restaurantes' },
  { id: 'Playas', label: 'Playas' },
  { id: 'Museos', label: 'Museos' },
  { id: 'Parques', label: 'Parques' },
];

/**
 * HomeScreen - Main home feed with places, filters, and categories
 * Optimized for performance with memoized card width calculation
 */
export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Memoize card width to prevent recalculation on every render
  const cardWidth = useMemo(
    () => Math.min(Math.max(width * 0.6, 220), 300),
    [width]
  );

  const filterItems = useMemo(
    () => baseFilters.map((item) => ({ ...item, active: item.id === activeFilter })),
    [activeFilter]
  );

  const featuredPlaces = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return places
      .filter((place) => {
        const byCategory = activeFilter === 'all' || place.category?.name === activeFilter;
        const byText =
          normalizedQuery.length === 0 ||
          place.name.toLowerCase().includes(normalizedQuery) ||
          place.address.toLowerCase().includes(normalizedQuery) ||
          place.city?.name?.toLowerCase().includes(normalizedQuery);

        return byCategory && byText;
      })
      .slice(0, 8);
  }, [activeFilter, query]);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.container}
      style={styles.screen}
      scrollEventThrottle={16}>
      <HomeHeader />
      <SearchBar placeholder="Busca por lugar o ciudad" value={query} onChangeText={setQuery} />
      <FilterChips items={filterItems} onChangeFilter={setActiveFilter} />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.placesRow}
        scrollEventThrottle={16}
      >
        {featuredPlaces.map((place) => (
          <PlaceCard key={place.id} place={place} width={cardWidth} />
        ))}
      </ScrollView>

      {featuredPlaces.length === 0 && (
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>No encontramos resultados</Text>
          <Text style={styles.emptyText}>Prueba con otro filtro o una búsqueda diferente.</Text>
        </View>
      )}

      <SectionHeader title="Categorías" actionLabel="Ver más" onAction={() => router.push('/explore' as any)} />
      <CategoryList 
        items={categories} 
        onSelectCategory={(id) => router.push(`/category/${id}` as any)}
      />
      <PromoCard
        image={{ uri: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800' }}
        onPress={() => router.push('/explore' as any)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing['3xl'],
    gap: spacing.lg,
  },
  placesRow: {
    gap: spacing.md,
    paddingHorizontal: spacing.sm,
  },
  emptyState: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: spacing.lg,
  },
  emptyTitle: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '700',
  },
  emptyText: {
    marginTop: spacing.xs,
    color: colors.textSecondary,
    fontSize: 14,
  },
});
