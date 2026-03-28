import { colors, radius, shadowStyles, spacing } from '@/constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface DetailItemProps {
  icon?: string;
  title: string;
  subtitle?: string;
  rating?: number;
  reviews?: number;
  imageUrl?: string;
  fallbackImageUrl?: string;
  onPress?: () => void;
}

/**
 * DetailItem - List item for detail screens (places, events)
 */
export function DetailItem({
  icon = 'place',
  title,
  subtitle,
  rating,
  reviews,
  imageUrl,
  fallbackImageUrl,
  onPress,
}: DetailItemProps) {
  const thumbnail = imageUrl ?? fallbackImageUrl;

  return (
    <Pressable
      style={({ pressed }) => [styles.item, pressed && styles.itemPressed]}
      onPress={onPress}>
      {thumbnail ? (
        <Image source={{ uri: thumbnail }} contentFit="cover" style={styles.thumbnail} />
      ) : (
        <View style={styles.iconContainer}>
          <MaterialIcons name={icon as any} size={24} color={colors.primary} />
        </View>
      )}
      
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        
        {rating !== undefined && (
          <View style={styles.ratingContainer}>
            <MaterialIcons name="star" size={14} color={colors.warning} />
            <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
            {reviews !== undefined && (
              <Text style={styles.reviewCount}>({reviews} reseñas)</Text>
            )}
          </View>
        )}
      </View>
      
      <MaterialIcons name="chevron-right" size={24} color={colors.textTertiary} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    marginBottom: spacing.sm,
    ...shadowStyles.sm,
  },
  itemPressed: {
    opacity: 0.7,
  },
  iconContainer: {
    width: 48,
    height: 48,
    backgroundColor: colors.surfaceLight,
    borderRadius: radius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  thumbnail: {
    width: 48,
    height: 48,
    borderRadius: radius.md,
    marginRight: spacing.md,
    backgroundColor: colors.surfaceLight,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing.xs,
    lineHeight: 20,
  },
  subtitle: {
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
    lineHeight: 18,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  ratingText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  reviewCount: {
    fontSize: 12,
    color: colors.textTertiary,
  },
});
