import { Chip } from '@/components/common';
import { spacing } from '@/constants/colors';
import { ScrollView, StyleSheet } from 'react-native';

export type Filter = {
  id: string;
  label: string;
  active?: boolean;
};

type FilterChipsProps = {
  items: Filter[];
  onChangeFilter?: (id: string) => void;
};

/**
 * FilterChips - Horizontal scrollable filter selection
 * Uses reusable Chip component
 */
export function FilterChips({ items, onChangeFilter }: FilterChipsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.row}
      scrollEventThrottle={16}>
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
  row: {
    gap: spacing.md,
    paddingHorizontal: spacing.sm,
  },
});
