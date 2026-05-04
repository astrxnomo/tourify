import { useNavigation } from "@react-navigation/native";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useCategories } from "../../hooks/useCategories";
import { useCities } from "../../hooks/useCities";
import { usePlaces } from "../../hooks/usePlaces";
import { colors, spacing } from "../constants/colors";
import { CategoryCard } from "../components/explore/CategoryCard";
import { CityCard } from "../components/explore/CityCard";

export default function ExploreScreen() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { data: cities, loading: loadingCities } = useCities();
  const { data: categories, loading: loadingCategories } = useCategories();
  const { data: places } = usePlaces();

  const loading = loadingCities || loadingCategories;

  const getPreviewImage = (categoryId) =>
    places?.find((p) => p.category_id === categoryId)?.images?.[0]?.url;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[
        styles.contentContainer,
        { paddingTop: insets.top },
      ]}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Explorar</Text>
        <Text style={styles.subtitle}>Descubre lugares increíbles</Text>
      </View>

      {loading ? (
        <ActivityIndicator
          size="large"
          color={colors.primary}
          style={styles.loader}
        />
      ) : (
        <>
          <View style={styles.section}>
            <View style={styles.sectionHeading}>
              <Text style={styles.sectionTitle}>Ciudades</Text>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.horizontalContent}
            >
              {(cities ?? []).map((city) => (
                <CityCard
                  key={city.id}
                  city={city}
                  onPress={() =>
                    navigation.navigate("CityDetail", { id: city.id })
                  }
                />
              ))}
            </ScrollView>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Categorías</Text>
            <View style={styles.categoriesGrid}>
              {(categories ?? []).map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  previewImageUrl={getPreviewImage(category.id)}
                  onPress={() =>
                    navigation.navigate("CategoryDetail", { id: category.id })
                  }
                />
              ))}
            </View>
          </View>
        </>
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
  header: { paddingTop: spacing.md },
  title: { fontSize: 36, fontWeight: "700", color: colors.textPrimary },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  loader: { marginTop: spacing["3xl"] },
  section: { gap: spacing.md },
  sectionHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: { fontSize: 22, fontWeight: "700", color: colors.textPrimary },
  horizontalContent: { gap: spacing.md, paddingHorizontal: spacing.xs },
  categoriesGrid: { flexDirection: "row", flexWrap: "wrap", gap: spacing.md },
});
