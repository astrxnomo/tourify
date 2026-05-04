import { ScrollView, StyleSheet } from "react-native";
import { spacing } from "../../constants/colors";
import { Pill } from "../common/Pill";

export function CategoryList({ items, onSelectCategory }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.row}
      scrollEventThrottle={16}
    >
      {items.map((item) => (
        <Pill
          key={item.id}
          label={item.name}
          onPress={() => onSelectCategory?.(item.id.toString())}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: { gap: spacing.md, paddingHorizontal: spacing.sm },
});
