import { useNavigation } from "@react-navigation/native";
import { useMemo, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useCategories } from "../../hooks/useCategories";
import { usePlaces, usePlacesFiltered } from "../../hooks/usePlaces";
import { colors, spacing } from "../constants/colors";
import { CategoryList } from "../components/home/CategoryList";
import { FilterChips } from "../components/home/FilterChips";
import { HomeHeader } from "../components/home/HomeHeader";
import { PlaceCard } from "../components/home/PlaceCard";
import { PromoCard } from "../components/home/PromoCard";
import { SearchBar } from "../components/home/SearchBar";
import { SectionHeader } from "../components/home/SectionHeader";

const BASE_FILTERS = [
  { id: "all", label: "Todo" },
  { id: "Restaurantes", label: "Restaurantes" },
  { id: "Playas", label: "Playas" },
  { id: "Museos", label: "Museos" },
  { id: "Parques", label: "Parques" },
];

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const { data: allPlaces, loading: loadingPlaces } = usePlaces();
  const { data: categories, loading: loadingCategories } = useCategories();

  const cardWidth = useMemo(
    () => Math.min(Math.max(width * 0.6, 220), 300),
    [width],
  );

  const filterItems = useMemo(
    () =>
      BASE_FILTERS.map((item) => ({
        ...item,
        active: item.id === activeFilter,
      })),
    [activeFilter],
  );

  const featuredPlaces = usePlacesFiltered(allPlaces, {
    categoryName: activeFilter,
    search: query,
  });
  const displayedPlaces = featuredPlaces.slice(0, 8);

  const loading = loadingPlaces || loadingCategories;

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { paddingTop: insets.top + spacing.lg },
      ]}
      style={styles.screen}
      scrollEventThrottle={16}
    >
      <HomeHeader />
      <SearchBar
        placeholder="Busca por lugar o ciudad"
        value={query}
        onChangeText={setQuery}
      />
      <FilterChips items={filterItems} onChangeFilter={setActiveFilter} />

      {loading ? (
        <ActivityIndicator
          size="large"
          color={colors.primary}
          style={styles.loader}
        />
      ) : (
        <>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.placesRow}
            scrollEventThrottle={16}
          >
            {displayedPlaces.map((place) => (
              <PlaceCard
                key={place.id}
                place={place}
                width={cardWidth}
                onPress={() =>
                  navigation.navigate("PlaceDetail", { id: place.id })
                }
              />
            ))}
          </ScrollView>

          {displayedPlaces.length === 0 && (
            <View style={styles.emptyState}>
              <Text style={styles.emptyTitle}>No encontramos resultados</Text>
              <Text style={styles.emptyText}>
                Prueba con otro filtro o una búsqueda diferente.
              </Text>
            </View>
          )}

          <SectionHeader
            title="Categorías"
            actionLabel="Ver más"
            onAction={() => navigation.navigate("Explore")}
          />
          <CategoryList
            items={categories ?? []}
            onSelectCategory={(id) =>
              navigation.navigate("CategoryDetail", { id: parseInt(id) })
            }
          />
          <PromoCard
            image={{
              uri: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800",
            }}
            onPress={() => navigation.navigate("Explore")}
          />
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  container: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing["3xl"],
    gap: spacing.lg,
  },
  loader: { marginTop: spacing["3xl"] },
  placesRow: { gap: spacing.md, paddingHorizontal: spacing.sm },
  emptyState: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: spacing.lg,
  },
  emptyTitle: { color: colors.textPrimary, fontSize: 16, fontWeight: "700" },
  emptyText: {
    marginTop: spacing.xs,
    color: colors.textSecondary,
    fontSize: 14,
  },
});
