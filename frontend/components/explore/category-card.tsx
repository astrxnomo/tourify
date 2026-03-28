import { getCategoryIcon } from '@/constants/category-icons';
import { colors, radius, shadowStyles, spacing } from '@/constants/colors';
import type { Category } from '@/types';
import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type CategoryCardProps = {
  category: Category;
  previewImageUrl?: string;
  onPress: () => void;
};

const CATEGORY_FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1552076206-e73ce2330d4d?auto=format&fit=crop&q=80&w=800&h=600';

export function CategoryCard({ category, previewImageUrl, onPress }: CategoryCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress} android_ripple={{ color: colors.primaryLight }}>
      <Image
        source={{ uri: previewImageUrl ?? CATEGORY_FALLBACK_IMAGE }}
        contentFit="cover"
        style={styles.image}
      />
      <View style={styles.overlay} />
      <View style={styles.iconContainer}>
        <MaterialIcons name={getCategoryIcon(category.name)} size={24} color={colors.textLight} />
      </View>
      <Text style={styles.name}>{category.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    borderRadius: radius.lg,
    overflow: 'hidden',
    minHeight: 140,
    justifyContent: 'flex-end',
    ...shadowStyles.md,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.overlay,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(8, 53, 61, 0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: spacing.md,
    marginBottom: spacing.sm,
  },
  name: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textLight,
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.md,
  },
});
