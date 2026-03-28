import { colors, radius, shadowStyles, spacing } from '@/constants/colors';
import type { Place } from '@/types';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type PlaceCardProps = {
  place: Place;
  width: number;
};

/**
 * PlaceCard - Displays place information with image, rating, and placeholder price
 * Reusable and memoized for performance in lists
 */
export const PlaceCard = ({ place, width }: PlaceCardProps) => {
  const router = useRouter();
  
  return (
    <Pressable
      style={[styles.card, { width }]}
      onPress={() => router.push(`/place/${place.id}` as any)}
      android_ripple={{ color: colors.primaryLight, radius: 100 }}>
      <Image
        source={{ uri: place.images?.[0]?.url || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400&h=300' }}
        contentFit="cover"
        style={styles.image}
      />
      <View style={styles.body}>
        <Text selectable numberOfLines={1} style={styles.title}>
          {place.name}
        </Text>
        <Text selectable numberOfLines={2} style={styles.meta}>
          ⭐ {place.averageRating?.toString() ?? 'N/D'} · {place.address}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.lg,
    overflow: 'hidden',
    backgroundColor: colors.surface,
    borderCurve: 'continuous',
    ...shadowStyles.lg,
  },
  image: {
    width: '100%',
    height: 160,
  },
  body: {
    padding: spacing.md,
    gap: spacing.sm,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  meta: {
    fontSize: 12,
    color: colors.textTertiary,
    lineHeight: 16,
  },
  footer: {
    marginTop: spacing.sm,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
  },
  priceNight: {
    fontSize: 12,
    color: colors.textTertiary,
    fontWeight: '600',
  },
});
