import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useCategoryDetail } from "../../hooks/useCategoryDetail";
import { colors, spacing } from "../constants/colors";
import { DetailCard } from "../components/detail/DetailCard";
import { DetailHero } from "../components/detail/DetailHero";
import { DetailItem } from "../components/detail/DetailItem";

export default function CategoryDetailScreen() {
  const navigation = useNavigation();
  const { id } = useRoute().params;
  const { data: category, loading } = useCategoryDetail(id);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (!category) {
    return (
      <View style={styles.centered}>
        <Text style={styles.notFound}>Categoría no encontrada</Text>
      </View>
    );
  }

  const places = category.places ?? [];
  const imageUrl =
    places[0]?.images?.[0]?.url ||
    "https://images.unsplash.com/photo-1552076206-e73ce2330d4d?auto=format&fit=crop&q=80&w=800&h=600";

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <DetailHero imageUrl={imageUrl} />

      <DetailCard
        title={category.name}
        description={`${places.length} lugares encontrados`}
      >
        {category.description && (
          <Text style={styles.description}>{category.description}</Text>
        )}
      </DetailCard>

      <View style={styles.placesList}>
        {places.length === 0 ? (
          <View style={styles.emptyState}>
            <MaterialIcons
              name="search-off"
              size={60}
              color={colors.textTertiary}
            />
            <Text style={styles.emptyText}>
              No hay lugares en esta categoría
            </Text>
          </View>
        ) : (
          places.map((place) => (
            <DetailItem
              key={place.id}
              icon="place"
              title={place.name}
              subtitle={place.city?.name}
              rating={
                place.average_rating ? Number(place.average_rating) : undefined
              }
              reviews={place.reviews?.length}
              imageUrl={place.images?.[0]?.url}
              fallbackImageUrl="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800&h=600"
              onPress={() =>
                navigation.navigate("PlaceDetail", { id: place.id })
              }
            />
          ))
        )}
      </View>
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
  description: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 20,
    marginTop: spacing.md,
  },
  placesList: { paddingHorizontal: spacing.lg, paddingVertical: spacing.lg },
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 16,
    color: colors.textTertiary,
    marginTop: spacing.lg,
  },
});
