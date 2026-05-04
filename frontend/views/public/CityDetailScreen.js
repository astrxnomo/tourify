import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useCityDetail } from "../../hooks/useCityDetail";
import { colors, spacing } from "../constants/colors";
import { DetailCard } from "../components/detail/DetailCard";
import { DetailHero } from "../components/detail/DetailHero";
import { DetailItem } from "../components/detail/DetailItem";
import { StatCard } from "../components/detail/StatCard";

export default function CityDetailScreen() {
  const navigation = useNavigation();
  const { id } = useRoute().params;
  const { data: city, loading } = useCityDetail(id);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (!city) {
    return (
      <View style={styles.centered}>
        <Text style={styles.notFound}>Ciudad no encontrada</Text>
      </View>
    );
  }

  const places = city.places ?? [];
  const events = city.events ?? [];
  const imageUrl =
    city.images?.[0]?.url ||
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800&h=600";

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <DetailHero imageUrl={imageUrl} />
      <DetailCard
        title={city.name}
        subtitle={city.country}
        description={city.description}
      />

      <View style={styles.statsContainer}>
        <StatCard
          icon="place"
          number={places.length}
          label="Lugares"
          color={colors.primary}
        />
        <StatCard
          icon="event"
          number={events.length}
          label="Eventos"
          color={colors.warning}
        />
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
              rating={
                place.average_rating ? Number(place.average_rating) : undefined
              }
              imageUrl={place.images?.[0]?.url}
              fallbackImageUrl="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800&h=600"
              onPress={() =>
                navigation.navigate("PlaceDetail", { id: place.id })
              }
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
              subtitle={new Date(event.date).toLocaleDateString("es-ES")}
              imageUrl={event.images?.[0]?.url}
              fallbackImageUrl="https://images.unsplash.com/photo-1511379938547-c1f69b13d835?auto=format&fit=crop&q=80&w=800&h=600"
              onPress={() =>
                navigation.navigate("EventDetail", { id: event.id })
              }
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  contentContainer: { paddingBottom: spacing.lg },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  notFound: { fontSize: 16, color: colors.textSecondary },
  statsContainer: {
    flexDirection: "row",
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
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
});
