import { ScrollView, StyleSheet } from "react-native";
import { spacing } from "../../constants/colors";
import { Chip } from "../common/Chip";

export function FilterChips({ items, onChangeFilter }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.row}
      scrollEventThrottle={16}
    >
      {items.map((item) => (
        <Chip
          key={item.id}
          label={item.label}
          active={item.active}
          onPress={() => onChangeFilter?.(item.id)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: { gap: spacing.md, paddingHorizontal: spacing.sm },
});
