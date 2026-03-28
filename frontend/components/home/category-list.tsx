import { Pill } from '@/components/common';
import { spacing } from '@/constants/colors';
import type { Category } from '@/types';
import { ScrollView, StyleSheet } from 'react-native';

type CategoryListProps = {
  items: Category[];
  onSelectCategory?: (id: string) => void;
};

/**
 * CategoryList - Horizontal scrollable category selection
 * Uses reusable Pill component
 */
export function CategoryList({ items, onSelectCategory }: CategoryListProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.row}
      scrollEventThrottle={16}>
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
  row: {
    gap: spacing.md,
    paddingHorizontal: spacing.sm,
  },
});
