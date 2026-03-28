import { DetailCard, DetailHero, DetailItem, StatCard } from '@/components/detail';
import { colors, spacing } from '@/constants/colors';
import { getCityById, getEventsByCity, getPlacesByCity } from '@/data/mock-data';
import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function CityDetailScreen() {
  const { id } = useLocalSearchParams();
  const cityId = parseInt(id as string);
  const city = getCityById(cityId);
  const places = getPlacesByCity(cityId);
  const events = getEventsByCity(cityId);

  if (!city) {
    return (
      <View style={styles.container}>
        <Text>Ciudad no encontrada</Text>
      </View>
    );
  }

  const imageUrl = city.images?.[0]?.url || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800&h=600';

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <DetailHero imageUrl={imageUrl} />

      <DetailCard title={city.name} subtitle={city.country} description={city.description} />

      <View style={styles.statsContainer}>
        <StatCard icon="place" number={places.length} label="Lugares" color={colors.primary} />
        <StatCard icon="event" number={events.length} label="Eventos" color={colors.warning} />
      </View>

      {places.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Lugares en {city.name}</Text>
          {places.map((place) => (
            <DetailItem
              key={place.id}
              icon="place"
              title={place.name}
              subtitle={place.category?.name}
              rating={place.averageRating}
              imageUrl={place.images?.[0]?.url}
              fallbackImageUrl="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800&h=600"
              onPress={() => router.push(`/place/${place.id}` as any)}
            />
          ))}
        </View>
      )}

      {events.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Próximos Eventos</Text>
          {events.map((event) => (
            <DetailItem
              key={event.id}
              icon="event"
              title={event.title}
              subtitle={new Date(event.date).toLocaleDateString('es-ES')}
              imageUrl={event.images?.[0]?.url}
              fallbackImageUrl="https://images.unsplash.com/photo-1511379938547-c1f69b13d835?auto=format&fit=crop&q=80&w=800&h=600"
              onPress={() => router.push(`/event/${event.id}` as any)}
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
    paddingBottom: spacing.lg,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    gap: spacing.md,
    marginVertical: spacing.lg,
  },
  section: {
    marginTop: spacing.xl,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: spacing.lg,
  },
});
