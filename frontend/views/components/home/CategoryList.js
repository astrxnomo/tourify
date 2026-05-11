import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { colors, radius, spacing } from "../../constants/colors";

const CATEGORY_ICONS = {
  monumentos: "account-balance",
  museos: "museum",
  parques: "park",
  playas: "beach-access",
  restaurantes: "restaurant",
  "vida nocturna": "nightlife",
  hoteles: "hotel",
  bares: "local-bar",
  cafés: "local-cafe",
  cafes: "local-cafe",
  compras: "shopping-bag",
  naturaleza: "forest",
  aventura: "hiking",
};

function iconForCategory(name) {
  return CATEGORY_ICONS[name?.toLowerCase()] ?? "place";
}

export function CategoryList({ items, onSelectCategory }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.row}
      scrollEventThrottle={16}
    >
      {items.map((item) => (
        <Pressable
          key={item.id}
          style={({ pressed }) => [styles.card, pressed && styles.pressed]}
          onPress={() => onSelectCategory?.(item.id.toString())}
          android_ripple={{ color: colors.surfaceLight }}
        >
          <View style={styles.iconCircle}>
            <MaterialIcons
              name={iconForCategory(item.name)}
              size={28}
              color={colors.primary}
            />
          </View>
          <Text style={styles.label} numberOfLines={1}>
            {item.name}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: { gap: spacing.md, paddingHorizontal: spacing.sm, paddingVertical: spacing.xs },
  card: {
    alignItems: "center",
    width: 84,
    gap: spacing.sm,
  },
  pressed: { opacity: 0.6 },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: radius.full,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.surfaceLight,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.textSecondary,
    textAlign: "center",
  },
});
